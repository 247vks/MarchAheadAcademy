const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve('out');
const routes = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== '_next') walk(file);
    else if (entry.name === 'index.html') routes.push('/' + path.relative(root, dir).split(path.sep).join('/') + '/');
  }
}
walk(root);
const server = http.createServer((req, res) => {
  let file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
  if (file !== root && !file.startsWith(root + path.sep)) return res.writeHead(403).end();
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) return res.writeHead(404).end();
  res.setHeader('Content-Type', { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const failures = [];
  let checked = 0;
  try {
    const page = await browser.newPage({ viewport: { width: 375, height: 900 } });
    for (let route of routes) {
      route = route.replace(/^\/\//, '/');
      if (process.env.QUALITY_ROUTE && route !== process.env.QUALITY_ROUTE) continue;
      if (route === '/404/') continue;
      checked++;
      await page.goto(`http://127.0.0.1:${server.address().port}${route}`, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      if (await page.locator('h1').count() !== 1) failures.push(`${route}: expected one H1`);
      const metadata = await page.evaluate(() => {
        const canonical = document.querySelector('link[rel="canonical"]')?.href;
        const ogUrl = document.querySelector('meta[property="og:url"]')?.content;
        const articles = [];
        function visit(value) {
          if (!value || typeof value !== 'object') return;
          if (Array.isArray(value)) return value.forEach(visit);
          const types = [].concat(value['@type'] || []);
          if (types.includes('Article') || types.includes('BlogPosting')) articles.push(value);
          Object.values(value).forEach(visit);
        }
        for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
          visit(JSON.parse(script.textContent));
        }
        return { canonical, ogUrl, articles };
      });
      if (!metadata.canonical || metadata.canonical !== metadata.ogUrl) {
        failures.push(`${route}: canonical ${metadata.canonical} does not match og:url ${metadata.ogUrl}`);
      }
      for (const article of metadata.articles) {
        const entity = typeof article.mainEntityOfPage === 'string' ? article.mainEntityOfPage : article.mainEntityOfPage?.['@id'];
        if (article.url !== metadata.canonical || entity !== metadata.canonical) {
          failures.push(`${route}: Article url/mainEntityOfPage must equal canonical (${article.url}, ${entity})`);
        }
      }
      if (['/', '/career-paths/tes/', '/consultation/'].includes(route)) {
        await page.keyboard.press('Tab');
        if (process.env.QUALITY_SCREENSHOTS && route === '/') {
          fs.mkdirSync(process.env.QUALITY_SCREENSHOTS, { recursive: true });
          await page.screenshot({ path: path.join(process.env.QUALITY_SCREENSHOTS, 'homepage-skip-focus.png') });
        }
        if (!await page.evaluate(() => document.activeElement?.getAttribute('href') === '#page-content')) {
          failures.push(`${route}: first Tab must focus Skip to content`);
        } else {
          await page.keyboard.press('Enter');
          if (!await page.evaluate(() => document.activeElement?.id === 'page-content')) {
            failures.push(`${route}: skip activation did not focus content target`);
          }
          await page.keyboard.press('Tab');
          const bypassed = await page.evaluate(() => {
            const target = document.getElementById('page-content');
            const active = document.activeElement;
            return active !== document.body && !active.closest('header') && !!(target.compareDocumentPosition(active) & Node.DOCUMENT_POSITION_FOLLOWING);
          });
          if (!bypassed) failures.push(`${route}: Tab after skip did not bypass header`);
        }
      }
      for (const width of [375, 768, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        if (route === '/resources/' && width >= 768) {
          const actionTops = await page.locator('article a[download]').evaluateAll(nodes => nodes.map(node => node.getBoundingClientRect().top));
          for (let index = 0; index < actionTops.length; index += 2) {
            if (Math.abs(actionTops[index] - actionTops[index + 1]) > 1) failures.push(`${route}: paired PDF actions are not aligned at ${width}px`);
          }
        }
        if (process.env.QUALITY_SCREENSHOTS && route === '/consultation/' && width === 375) {
          fs.mkdirSync(process.env.QUALITY_SCREENSHOTS, { recursive: true });
          await page.evaluate(() => { document.activeElement?.blur(); window.scrollTo(0, 0); });
          await page.screenshot({ path: path.join(process.env.QUALITY_SCREENSHOTS, 'consultation-mobile.png'), fullPage: true });
        }
        if (!await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)) {
          const elements = await page.evaluate(() => [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1 && !el.closest('table')).slice(0, 12).map(el => `${el.tagName}.${el.className}`));
          const measurements = await page.evaluate(() => ({ root: document.documentElement.scrollWidth, viewport: innerWidth, wide: [...document.querySelectorAll('body *')].filter(el => el.scrollWidth > innerWidth && !el.closest('table')).map(el => ({tag:el.tagName,cls:el.className,scroll:el.scrollWidth,rect:el.getBoundingClientRect().width,overflow:getComputedStyle(el).overflow})), tableParent: document.querySelector('table') ? { overflow: getComputedStyle(document.querySelector('table').parentElement).overflowX, width: document.querySelector('table').parentElement.getBoundingClientRect().width } : null }));
          failures.push(`${route}: overflow at ${width}px (${elements.join(', ')}) ${JSON.stringify(measurements)}`);
        }
      }
      const links = await page.locator('a[href^="/"]').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')));
      if (route === '/career-paths/tes/') {
        const reject = page.getByRole('button', { name: 'Reject Non-Essential', exact: true });
        if (await reject.isVisible()) await reject.click();
        const nav = page.locator('header nav').first();
        if (await nav.locator('a[href="/career-paths"], a[href="/career-paths/"]').getAttribute('aria-current') !== 'location') failures.push('TES: Career paths must be identified as current section');
        const prompt = page.locator('aside[aria-label^="Guidance about"]');
        if (!await prompt.evaluate(node => !!node.parentElement.querySelector('#section-5'))) failures.push('TES: coaching prompt should follow selection section five');
        await page.setViewportSize({ width: 375, height: 900 });
        const contents = page.getByRole('navigation', { name: 'On this page', exact: true });
        const disclosure = contents.locator('details');
        if (await disclosure.getAttribute('open') !== null) failures.push('TES: mobile contents should start collapsed');
        await disclosure.locator('summary').focus();
        await page.keyboard.press('Enter');
        if (!await disclosure.locator('a').first().isVisible()) failures.push('TES: keyboard must open mobile contents');
        await disclosure.locator('a').first().click();
        if (!page.url().endsWith('#section-1')) failures.push('TES: contents must link to existing section');
      }
      if (route === '/career-paths/') {
        if (await page.locator('header nav').first().locator('a[href="/career-paths"], a[href="/career-paths/"]').getAttribute('aria-current') !== 'page') failures.push('Career paths: exact navigation page not marked');
      }
      for (const link of links) {
        const url = new URL(link, 'http://localhost');
        if (url.hostname !== 'localhost') continue;
        const file = path.join(root, decodeURIComponent(url.pathname));
        if (!fs.existsSync(file) && !fs.existsSync(path.join(file, 'index.html'))) failures.push(`${route}: missing ${link}`);
      }
    }
    assert.equal(failures.length, 0, failures.join('\n'));
    console.log(`PASS: ${checked} pages checked for H1, canonical/OG/Article relationships, mobile/tablet/desktop overflow and local link targets; keyboard skip checked on included home/TES/consultation routes.`);
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
