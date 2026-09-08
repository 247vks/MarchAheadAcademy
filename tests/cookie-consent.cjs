const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve('out');
const server = http.createServer((req, res) => {
  let file = path.join(root, decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
  const type = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }[path.extname(file)];
  if (type) res.setHeader('Content-Type', type);
  fs.createReadStream(file).pipe(res);
});
(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  try {
    const context = await browser.newContext();
    let analyticsRequests = 0;
    await context.route(/googletagmanager|google-analytics/, route => {
      analyticsRequests++;
      return route.fulfill({ contentType: 'text/javascript', body: '' });
    });
    const page = await context.newPage();
    const url = `http://127.0.0.1:${server.address().port}`;
    await page.goto(url);
    await page.getByRole('button', { name: 'Accept All', exact: true }).waitFor({ state: 'visible' });
    assert.equal(analyticsRequests, 0, 'No analytics before consent');
    await page.getByRole('button', { name: 'Reject Non-Essential', exact: true }).click();
    await page.reload();
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).waitFor();
    assert.equal(analyticsRequests, 0, 'No analytics after persisted rejection');
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Accept All', exact: true }).click();
    await page.waitForFunction(() => !!document.getElementById('maa-ga-loader'));
    await page.waitForLoadState('networkidle');
    assert.equal(analyticsRequests, 1, 'Analytics loaded only on acceptance');
    await context.addCookies([{ name: '_ga', value: 'test', url }]);
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Reject Non-Essential', exact: true }).click();
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).waitFor();
    await page.waitForLoadState('networkidle');
    assert.equal(analyticsRequests, 1, 'No analytics reload after withdrawal');
    assert.equal((await context.cookies()).some(c => c.name === '_ga'), false, 'GA cookie removed');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click();
    const box = await page.getByRole('dialog').boundingBox();
    assert.ok(box.x >= 0 && box.x + box.width <= 375, 'Dialog fits mobile viewport');
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('dialog').isVisible(), false);
    console.log('PASS: initial blocking, rejection persistence, opt-in, withdrawal, cookie deletion, mobile dialog and Escape.');
  } finally { await browser.close(); server.close(); }
})().catch(e => { console.error(e); server.close(); process.exitCode = 1; });
