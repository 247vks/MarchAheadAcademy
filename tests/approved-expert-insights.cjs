const assert = require('node:assert/strict');
const fs = require('node:fs');
const paths = ['ssb-psychology/what-does-an-ssb-psychologist-assess', 'selection/ssb/psychology-tests', 'selection/ssb/tat'];
for (const path of paths) {
  const html = fs.readFileSync(`out/${path}/index.html`, 'utf8');
  assert.equal((html.match(/id="commander-insight"/g) || []).length, 1, path);
  assert.ok(html.includes('Edited paraphrase of his interview responses, published 7 October 2026.'), path);
  const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => { const data = JSON.parse(match[1]); return data['@graph'] || [data]; });
  const article = graphs.find(item => item['@type'] === 'Article');
  assert.ok(article, path);
  assert.equal(article.dateModified, '2026-10-07');
  assert.equal(article.contributor['@id'], 'https://www.marchaheadacademy.com/#cdr-sharma');
  assert.equal(article.author['@id'], 'https://www.marchaheadacademy.com/#organization');
  assert.equal(article.reviewedBy, undefined);
}
const other = fs.readFileSync('out/selection/ssb/wat/index.html', 'utf8');
assert.ok(!other.includes('id="commander-insight"'));
console.log('PASS: approved insights on exactly the intended articles; contributor attribution without whole-article authorship or review claims.');
