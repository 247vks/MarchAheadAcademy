const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve('out');
const slugs = ['what-does-an-ssb-psychologist-assess', 'psychology-preparation-for-repeaters', 'ppdt-vs-tat', 'memorised-ssb-psychology-answers'];
const server = http.createServer((req, res) => {
  let file = path.join(root, new URL(req.url, 'http://localhost').pathname);
  if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) return res.writeHead(404).end();
  res.setHeader('Content-Type', { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  try {
    const page = await browser.newPage();
    const base = `http://127.0.0.1:${server.address().port}`;
    for (const slug of slugs) {
      const route = `/ssb-psychology/${slug}/`;
      await page.goto(base + route);
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'), 'https://www.marchaheadacademy.com' + route);
      const graph = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.flatMap(n => JSON.parse(n.textContent)['@graph'] || []));
      const article = graph.find(n => n['@type'] === 'Article');
      assert.equal(article.author['@id'], 'https://www.marchaheadacademy.com/#organization');
      assert.equal(article.datePublished, '2026-09-12');
      assert.equal(article.dateModified, '2026-09-12');
      assert.equal(article.mainEntityOfPage['@id'], 'https://www.marchaheadacademy.com' + route);
      assert(graph.find(n => n['@type'] === 'BreadcrumbList').itemListElement.some(n => n.name === 'SSB Psychology'));
      assert(!await page.getByText('This guide explains career pathways;', { exact: false }).count());
      for (const width of [375, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow: ${slug} ${width}`);
      }
      const links = await page.locator('a[href^="/"]').evaluateAll(nodes => nodes.map(n => n.getAttribute('href').split('#')[0]));
      for (const link of links) assert(fs.existsSync(path.join(root, link, 'index.html')) || fs.existsSync(path.join(root, link)), `Missing ${link}`);
      assert(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8').includes(route));
    }
    await page.goto(base + '/ssb-psychology/');
    for (const slug of slugs) assert(await page.locator(`a[href="/ssb-psychology/${slug}/"]`).count());
    assert.equal(await page.getByRole('heading', { name: 'How to Prepare for SSB Psychology Tests', exact: true }).count(), 1);
    console.log('PASS: four articles, metadata, authorship, dates, breadcrumbs, hub links, sitemap, internal targets and mobile/desktop overflow.');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
