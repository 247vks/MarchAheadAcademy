const fs = require('node:fs');
const assert = require('node:assert/strict');
const slugs = ['ssb-without-coaching', 'online-ssb-coaching-scope'];
const base = 'https://www.marchaheadacademy.com';
for (const slug of slugs) {
  const route = `/guidance/${slug}/`;
  const html = fs.readFileSync(`out${route}index.html`, 'utf8');
  const graph = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => JSON.parse(match[1])['@graph'] || []);
  const article = graph.find((item) => item['@type'] === 'Article');
  assert.equal(article.author['@id'], `${base}/#organization`);
  assert.equal(article.datePublished, '2026-10-16');
  assert.equal(article.dateModified, '2026-10-16');
  assert.ok(!article.reviewedBy && !article.contributor);
  assert.equal(article.mainEntityOfPage['@id'], `${base}${route}`);
  assert.match(html, /(?:March Ahead Academy|The Academy) does not provide outdoor GTO training/);
  assert.ok(html.includes('href="/ssb-coaching/"'));
  assert.ok(html.includes('href="/resources/ssb-preparation-planner/"'));
  assert.ok(fs.readFileSync('out/knowledge-centre/index.html', 'utf8').includes(`href="${route}"`));
  assert.ok(fs.readFileSync('out/ssb-coaching/index.html', 'utf8').includes(`href="${route}"`));
  assert.ok(fs.readFileSync('out/sitemap.xml', 'utf8').includes(`${base}${route}`));
}
console.log('PASS: both decision guides, honest attribution, article dates, internal discovery and sitemap.');
