const assert = require('node:assert/strict');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    // QA must never contaminate production analytics.
    await context.route(/googletagmanager|google-analytics/, route => route.abort());
    const page = await context.newPage();
    const base = 'https://www.marchaheadacademy.com';
    for (const [route, selector] of [
      ['/ssb-coaching/', '#service-options'],
      ['/resources/ssb-preparation-planner/', '#planner-heading'],
      ['/ssb-psychology/what-does-an-ssb-psychologist-assess/', '#commander-insight'],
    ]) {
      const response = await page.goto(base + route);
      assert.equal(response.status(), 200);
      await page.locator(selector).waitFor();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      console.log(`LIVE PASS ${route}`);
    }
    await page.goto(`${base}/resources/ssb-preparation-planner/`);
    await page.getByRole('button', { name: 'Reject Non-Essential', exact: true }).click();
    await page.getByRole('button', { name: 'Create my preparation plan' }).click();
    assert.equal(await page.locator('#plan-result').textContent(), 'Your next 7 days of preparation');
    assert.equal(await page.locator('.planner-task').count(), 4);
    await page.emulateMedia({ media: 'print' });
    assert.equal(await page.locator('form').isVisible(), false);
    assert.equal(await page.locator('#plan-result').isVisible(), true);
    const sitemapResponse = await page.request.get(`${base}/sitemap.xml`);
    assert.equal(sitemapResponse.status(), 200);
    const sitemap = await sitemapResponse.text();
    assert.ok(sitemap.includes('/resources/ssb-preparation-planner/'));
    const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    assert.equal(urls.length, 106);
    // Public status check, bounded to five concurrent requests.
    for (let i = 0; i < urls.length; i += 5) {
      await Promise.all(urls.slice(i, i + 5).map(async url => {
        const response = await page.request.head(url);
        assert.equal(response.status(), 200, url);
        assert.ok(!String(response.headers()['x-robots-tag'] || '').includes('noindex'), url);
      }));
    }
    console.log('LIVE PASS: planner interaction/print, sitemap membership and all 106 public URL status/indexability-header checks.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
