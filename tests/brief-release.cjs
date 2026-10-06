const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const ts = require('typescript');
const { chromium } = require('playwright');
const planModule = { exports: {} };
new Function('exports', 'module', ts.transpileModule(fs.readFileSync('lib/preparation-plan.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText)(planModule.exports, planModule);
const { buildPreparationPlan } = planModule.exports;
for (const days of [1, 3, 7, 28, 365]) for (const hours of [1, 5, 30]) {
  const plan = buildPreparationPlan({ attempt: 'repeat', focus: 'interview', days, hours });
  assert.equal(plan.tasks[0].id, 'interview');
  assert.equal(plan.tasks.reduce((sum, task) => sum + task.minutes, 0), plan.minutes);
  assert.ok(plan.minutes <= hours * 60);
  assert.equal(plan.blockDays, Math.min(7, days));
}
for (const days of [0, -1, 366, 1.5, NaN]) assert.equal(buildPreparationPlan({ attempt: 'first', focus: 'psychology', days, hours: 5 }), null);
for (const hours of [0, -1, 31, 1.5, NaN]) assert.equal(buildPreparationPlan({ attempt: 'first', focus: 'psychology', days: 7, hours }), null);
const root = path.resolve('out');
const server = http.createServer((req, res) => {
  let file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, req.headers.rsc === '1' ? 'index.txt' : 'index.html');
  if (!fs.existsSync(file)) return res.writeHead(404).end();
  res.setHeader('Content-Type', { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.txt': 'text/x-component' }[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  try {
    const context = await browser.newContext();
    await context.route(/googletagmanager|google-analytics/, route => route.fulfill({ contentType: 'text/javascript', body: '' }));
    const page = await context.newPage();
    await page.setViewportSize({ width: 375, height: 900 });
    const base = `http://127.0.0.1:${server.address().port}`;
    const events = () => page.evaluate(() => (window.dataLayer || []).filter(entry => entry[0] === 'event').map(entry => Array.from(entry)));
    await page.goto(`${base}/resources/ssb-preparation-planner/`);
    await page.getByRole('button', { name: 'Reject Non-Essential', exact: true }).click();
    await page.getByRole('button', { name: 'Create my preparation plan' }).click();
    assert.equal(await page.locator('#plan-result').textContent(), 'Your next 7 days of preparation');
    assert.deepEqual(await events(), []);
    await page.getByLabel('Days until SSB or your planning target').fill('1');
    assert.equal(await page.locator('#plan-result').count(), 0, 'Changed inputs hide stale output');
    await page.getByRole('button', { name: 'Create my preparation plan' }).click();
    assert.equal(await page.locator('#plan-result').textContent(), 'Your next 1 day of preparation');
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Accept All', exact: true }).click();
    await page.waitForFunction(() => !!document.getElementById('maa-ga-loader'));
    await page.reload();
    await page.getByLabel('Main preparation focus').selectOption('interview');
    await page.getByRole('button', { name: 'Create my preparation plan' }).click();
    assert.equal(await page.locator('.planner-task h3').first().textContent(), 'Personal interview preparation');
    assert.equal(await page.locator('form').evaluate(node => node.checkValidity()), true);
    const toolEvents = (await events()).filter(event => event[1].startsWith('preparation_tool_'));
    assert.deepEqual(toolEvents.map(event => event[1]), ['preparation_tool_start', 'preparation_tool_complete']);
    assert.ok(toolEvents.every(event => event[2].content_group === 'ssb_planner'));
    assert.ok(toolEvents.every(event => Object.keys(event[2]).sort().join(',') === 'content_group,page_location,transport_type'));
    assert.ok(!JSON.stringify(toolEvents).includes('interview'));
    await page.evaluate(() => { window.print = () => {}; });
    await page.getByRole('button', { name: 'Print / save plan as PDF' }).click();
    assert.ok((await events()).some(event => event[1] === 'preparation_tool_print'));
    await page.emulateMedia({ media: 'print' });
    assert.equal(await page.locator('form').isVisible(), false);
    assert.equal(await page.locator('#plan-result').isVisible(), true);
    await page.emulateMedia({ media: 'screen' });
    fs.mkdirSync('work/brief-qa', { recursive: true });
    await page.screenshot({ path: 'work/brief-qa/planner-mobile.png', fullPage: true });
    for (const width of [375, 768, 1440]) { await page.setViewportSize({ width, height: 900 }); assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)); }
    await page.goto(`${base}/ssb-coaching/`);
    const services = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.flatMap(node => JSON.parse(node.textContent)['@graph'] || []).filter(item => item['@type'] === 'Service'));
    assert.equal(services.length, 3);
    for (const service of services) {
      assert.equal(service.provider['@id'], 'https://www.marchaheadacademy.com/#organization');
      assert.equal(service.offers, undefined);
      assert.ok(await page.getByRole('heading', { name: service.name, exact: true }).count());
    }
    // Prevent navigation while exercising the delegated consent-gated handler.
    await page.locator('[data-maa-service="psychology-preparation-review"]').evaluate(node => { node.addEventListener('click', event => event.preventDefault()); node.click(); });
    assert.ok((await events()).some(event => event[1] === 'service_interest' && event[2].content_group === 'psychology-preparation-review'));
    await page.evaluate(() => {
      for (const href of ['/consultation/?private=do-not-track', '/ssb-coaching/', '/resources/self-description-reflection.pdf?private=do-not-track']) {
        const a = document.createElement('a'); a.href = href; a.textContent = 'private visitor phrase'; a.addEventListener('click', event => event.preventDefault()); document.body.append(a); a.click(); a.remove();
      }
      window.dispatchEvent(new CustomEvent('maa-tool-engagement', { detail: { action: 'private', tool: 'not-allowed' } }));
    });
    const contentEvents = (await events()).filter(event => ['consultation_cta', 'article_to_service', 'resource_download'].includes(event[1]));
    assert.deepEqual(contentEvents.map(event => event[1]), ['consultation_cta', 'article_to_service', 'resource_download']);
    assert.ok(!JSON.stringify(contentEvents).includes('private'));
    await page.locator('section[aria-labelledby="service-options"]').screenshot({ path: 'work/brief-qa/services-desktop.png' });
    await page.goto(`${base}/career-paths/`);
    await page.getByRole('button', { name: 'Graduate', exact: true }).click();
    assert.ok((await events()).some(event => event[1] === 'preparation_tool_complete' && event[2].content_group === 'entry_finder'));
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Reject Non-Essential', exact: true }).click();
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => window.dispatchEvent(new CustomEvent('maa-tool-engagement', { detail: { action: 'complete', tool: 'ssb_planner' } })));
    assert.ok(!(await events()).some(event => event[1].startsWith('preparation_tool_')), 'No events after withdrawal');
    console.log('PASS: planner boundaries, allocation, stale-result clearing, responsive/print UX, service schema, consent-gated categorical events and withdrawal.');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
