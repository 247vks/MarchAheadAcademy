const fs = require('node:fs');
const assert = require('node:assert/strict');
const phrase = 'March Ahead Academy does not provide outdoor GTO training';
const routes = ['ssb-gto', 'ssb-gto/group-planning-exercise', 'ssb-gto/lecturette', 'ssb-gto/progressive-group-task', 'ssb-gto/half-group-task', 'ssb-gto/command-task', 'ssb-gto/individual-obstacles', 'selection/ssb/group-testing', 'selection/ssb/group-discussion'];
for (const route of routes) {
  const html = fs.readFileSync(`out/${route}/index.html`, 'utf8');
  assert.ok(html.includes(phrase), route);
  assert.equal((html.match(/aria-label="GTO guidance scope"/g) || []).length, 1, route);
}
for (const route of ['', 'ssb-coaching/']) assert.ok(fs.readFileSync(`out/${route}index.html`, 'utf8').includes(phrase));
const home = fs.readFileSync('out/index.html', 'utf8');
assert.equal((home.match(/id="ssb-preparation-heading"/g) || []).length, 1);
for (const route of ['/ssb-psychology/', '/ssb-personal-interview/', '/ssb-gto/']) assert.ok(home.includes(`href="${route}"`));
assert.ok(fs.readFileSync('out/ssb-gto/index.html', 'utf8').includes('id="gto-guide-groups"'));
console.log('PASS: equal homepage discovery, grouped GTO guides, explicit scope on all nine relevant guides and coaching.');
