const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const root = path.resolve('out');
const server = http.createServer((req, res) => {
  let file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) return res.writeHead(404).end();
  res.setHeader('Content-Type', { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  try {
    const page = await browser.newPage();
    const base = `http://127.0.0.1:${server.address().port}`;
    for (const route of ['knowledge-centre', 'ssb-psychology', 'authors/cdr-sulakshan-kumar-sharma']) {
      await page.goto(`${base}/${route}/`);
      assert.equal(await page.locator('#expert-contributions').count(), 1);
      assert.equal(await page.locator('section[aria-labelledby="expert-contributions"] a[href$="#commander-insight"]').count(), 3);
    }
    await page.goto(`${base}/resources/self-description-reflection/`);
    const reject = page.getByRole('button', { name: 'Reject Non-Essential', exact: true });
    if (await reject.isVisible()) await reject.click();
    const input = page.locator('textarea').first();
    await input.fill('My own reflection: I helped organise a college project.');
    await page.getByRole('button', { name: 'Clear notes', exact: true }).click();
    await page.getByRole('button', { name: 'Keep notes', exact: true }).click();
    assert.match(await input.inputValue(), /My own reflection/);
    await page.emulateMedia({ media: 'print' });
    assert.equal(await input.isVisible(), false);
    assert.equal(await page.locator('.reflection-print-note').first().isVisible(), true);
    assert.match(await page.locator('.reflection-print-note').first().textContent(), /My own reflection/);
    await page.emulateMedia({ media: 'screen' });
    await page.getByRole('button', { name: 'Clear notes', exact: true }).click();
    await page.getByRole('button', { name: 'Yes, clear notes', exact: true }).click();
    assert.equal(await input.inputValue(), '');
    await input.fill('Temporary note');
    await page.reload();
    assert.equal(await input.inputValue(), '');
    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    }
    fs.mkdirSync('work/authority-qa', { recursive: true });
    await page.locator('#online-workspace').screenshot({ path: 'work/authority-qa/workspace.png' });
    const sitemap = fs.readFileSync('out/sitemap.xml', 'utf8');
    assert.match(sitemap, /<lastmod>2026-10-07/);
    const assessment = sitemap.split('<url>').find(entry => entry.includes('/what-does-an-ssb-psychologist-assess/'));
    assert.match(assessment, /<lastmod>2026-10-07/);
    const wat = sitemap.split('<url>').find(entry => entry.includes('/selection/ssb/wat/'));
    assert.ok(!wat.includes('<lastmod>'), 'Do not manufacture update dates');
    console.log('PASS: contribution discovery, private editable notes, clearing, print output, responsive layout and truthful sitemap dates.');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
