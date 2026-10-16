const fs = require('node:fs');
const assert = require('node:assert/strict');
const slugs = ['ssb-without-coaching', 'online-ssb-coaching-scope', 'nda-written-exam-vs-ssb', 'review-ssb-practice-feedback'];
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
  assert.ok(html.includes('does not provide outdoor GTO training'));
  assert.ok(html.includes('href="/ssb-coaching/"'));
  assert.ok(html.includes('href="/resources/ssb-preparation-planner/"'));
  assert.ok(fs.readFileSync('out/knowledge-centre/index.html', 'utf8').includes(`href="${route}"`));
  const referringPage = slug === 'nda-written-exam-vs-ssb' ? 'exams/nda' : 'ssb-coaching';
  assert.ok(fs.readFileSync(`out/${referringPage}/index.html`, 'utf8').includes(`href="${route}"`));
  assert.ok(fs.readFileSync('out/sitemap.xml', 'utf8').includes(`${base}${route}`));
}
const comparison = fs.readFileSync('out/guidance/nda-written-exam-vs-ssb/index.html', 'utf8');
assert.ok(comparison.includes('https://www.upsc.gov.in/examinations/previous-question-papers'));
assert.ok(comparison.includes('href="/exams/nda/written-exam-to-ssb/"'));
const feedback = fs.readFileSync('out/guidance/review-ssb-practice-feedback/index.html', 'utf8');
assert.ok(feedback.includes('This scenario is invented'));
assert.ok(feedback.includes('Use a short review log'));
console.log('PASS: four decision guides, honest attribution, article dates, distinct sources/examples, internal discovery and sitemap.');
