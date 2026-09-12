const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve('out');
const server = http.createServer((req, res) => {
  let file = path.join(root, decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, req.headers.rsc === '1' ? 'index.txt' : 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
  const type = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.txt': 'text/x-component' }[path.extname(file)];
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
    const exerciseLinks = () => page.evaluate(() => {
      for (const href of ['tel:+919820096800', 'mailto:hello@marchaheadacademy.com?body=private', 'https://wa.me/919820096800?text=private', '/resources/']) {
        const a = document.createElement('a');
        a.href = href;
        a.innerHTML = '<span>private visitor text</span>';
        a.addEventListener('click', e => e.preventDefault());
        document.body.appendChild(a);
        a.firstElementChild.click();
        a.remove();
      }
      return (window.dataLayer || []).filter(entry => entry[0] === 'event' && entry[1] === 'contact_intent').map(entry => Array.from(entry));
    });
    await page.goto(url);
    await page.getByRole('button', { name: 'Accept All', exact: true }).waitFor({ state: 'visible' });
    assert.equal(analyticsRequests, 0, 'No analytics before consent');
    assert.deepEqual(await exerciseLinks(), [], 'No contact events before consent');
    await page.getByRole('button', { name: 'Reject Non-Essential', exact: true }).click();
    await page.reload();
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).waitFor();
    assert.equal(analyticsRequests, 0, 'No analytics after persisted rejection');
    assert.deepEqual(await exerciseLinks(), [], 'No contact events after rejection');
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Accept All', exact: true }).click();
    await page.waitForFunction(() => !!document.getElementById('maa-ga-loader'));
    await page.waitForLoadState('networkidle');
    assert.equal(analyticsRequests, 1, 'Analytics loaded only on acceptance');
    const views = () => page.evaluate(() => (window.dataLayer || []).filter(e => e[0] === 'event' && e[1] === 'page_view').map(e => e[2].page_location));
    assert.deepEqual(await views(), [url + '/'], 'Exactly one initial consented pageview');
    await page.locator('a[href="/consultation"], a[href="/consultation/"]').first().click();
    await page.waitForURL(/\/consultation\/?$/);
    await page.waitForFunction(() => (window.dataLayer || []).filter(e => e[1] === 'page_view').length === 2);
    assert.deepEqual(await views(), [url + '/', page.url()]);
    await page.goBack();
    await page.waitForURL(url + '/');
    await page.waitForFunction(() => (window.dataLayer || []).filter(e => e[1] === 'page_view').length === 3);
    assert.equal(analyticsRequests, 1, 'Client navigation does not reload analytics');
    const events = await exerciseLinks();
    assert.equal(events.length, 3, 'Exactly one event for each contact link, none for internal navigation');
    assert.deepEqual(events.map(e => e[1]), ['contact_intent', 'contact_intent', 'contact_intent']);
    assert.deepEqual(events.map(e => e[2].contact_method), ['phone', 'email', 'whatsapp']);
    assert.ok(events.every(e => Object.keys(e[2]).sort().join(',') === 'contact_method,page_location,transport_type'));
    assert.ok(!JSON.stringify(events).includes('private') && !JSON.stringify(events).includes('98200'), 'Contact content and destinations excluded');
    await context.addCookies([{ name: '_ga', value: 'test', url }]);
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Reject Non-Essential', exact: true }).click();
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).waitFor();
    await page.waitForLoadState('networkidle');
    assert.equal(analyticsRequests, 1, 'No analytics reload after withdrawal');
    assert.deepEqual(await exerciseLinks(), [], 'No contact events after withdrawal');
    assert.equal((await context.cookies()).some(c => c.name === '_ga'), false, 'GA cookie removed');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click();
    const box = await page.getByRole('dialog').boundingBox();
    assert.ok(box.x >= 0 && box.x + box.width <= 375, 'Dialog fits mobile viewport');
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('dialog').isVisible(), false);
    for (const savedAt of [Date.now() + 86400000, Date.now() - 181 * 86400000, 'not-a-number']) {
      await page.evaluate(savedAt => localStorage.setItem('maa-cookie-consent-v1', JSON.stringify({ analytics: true, savedAt })), savedAt);
      await page.reload();
      await page.getByRole('button', { name: 'Accept All', exact: true }).waitFor();
      assert.equal(await page.locator('#maa-ga-loader').count(), 0, 'Invalid/future/expired consent does not load GA');
    }
    await page.evaluate(() => localStorage.setItem('maa-cookie-consent-v1', JSON.stringify({ analytics: true, savedAt: Date.now() - 180 * 86400000 + 3000 })));
    await page.reload();
    await page.waitForFunction(() => !!document.getElementById('maa-ga-loader'));
    await page.getByRole('button', { name: 'Accept All', exact: true }).waitFor({ timeout: 10000 });
    assert.equal(await page.locator('#maa-ga-loader').count(), 0, 'Expiry disables analytics without navigation');
    const beforeExpiredClick = (await exerciseLinks()).length;
    assert.equal((await exerciseLinks()).length, beforeExpiredClick, 'No contact events after expiry');
    console.log('PASS: initial blocking, rejection persistence, opt-in, withdrawal, cookie deletion, mobile dialog and Escape.');
  } finally { await browser.close(); server.close(); }
})().catch(e => { console.error(e); server.close(); process.exitCode = 1; });
