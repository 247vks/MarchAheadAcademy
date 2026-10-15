const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('out/ssb-coaching/index.html', 'utf8');
for (const text of [
  'SSB coaching online and in Mumbai by appointment',
  'Can I prepare for SSB without coaching?',
  'Which SSB coaching is right for me?',
  'What should I prepare before the first consultation?',
  'March Ahead Academy does not provide outdoor GTO training',
]) assert.ok(html.includes(text), `Missing answer: ${text}`);
for (const href of ['/consultation/', '/how-to-choose-ssb-coaching/', '/resources/ssb-preparation-planner/']) {
  assert.ok(html.includes(`href="${href}"`), `Missing link: ${href}`);
}
assert.equal((html.match(/id="coaching-mode"/g) || []).length, 1);
assert.ok(html.includes('name="description" content="One-to-one SSB coaching online and in Mumbai'));
assert.ok(fs.readFileSync('out/sitemap.xml', 'utf8').includes('<lastmod>2026-10-16'));
console.log('PASS: coaching mode, search-intent answers, scope limits, relevant links and updated sitemap date.');
