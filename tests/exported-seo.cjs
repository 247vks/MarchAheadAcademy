const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve('out');
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const titles = new Map(), descriptions = new Map();
const failures = [], linked = new Set();
const base = 'https://www.marchaheadacademy.com';
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const file = path.join(root, pathname, 'index.html');
  if (!fs.existsSync(file)) { failures.push(`Missing sitemap page: ${url}`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  for (const [name, value, map] of [['title', title, titles], ['description', description, descriptions]]) {
    if (!value) failures.push(`${pathname}: missing ${name}`);
    else if (map.has(value)) failures.push(`${pathname}: duplicate ${name} with ${map.get(value)}`);
    else map.set(value, pathname);
  }
  if (/<meta[^>]*name="(?:robots|googlebot)"[^>]*content="[^"]*noindex/.test(html)) failures.push(`${pathname}: noindex`);
  if (!html.includes(`<link rel="canonical" href="${url}"`)) failures.push(`${pathname}: canonical mismatch`);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) failures.push(`${pathname}: H1 count`);
  if ((html.match(/aria-label="On this page"/g) || []).length > 1) failures.push(`${pathname}: duplicate TOC`);
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const target = new URL(match[1].replaceAll('&amp;', '&'), base + pathname);
    if (target.origin !== base) continue;
    linked.add(target.pathname.replace(/\/$/, '') || '/');
    const targetFile = path.join(root, decodeURIComponent(target.pathname));
    if (!fs.existsSync(targetFile) && !fs.existsSync(path.join(targetFile, 'index.html'))) failures.push(`${pathname}: broken link ${target.pathname}`);
  }
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch { failures.push(`${pathname}: invalid JSON-LD`); }
  }
}
for (const url of urls) {
  const pathname = new URL(url).pathname.replace(/\/$/, '') || '/';
  if (pathname !== '/' && !linked.has(pathname)) failures.push(`Orphan sitemap page: ${pathname}`);
}
assert.ok(fs.readFileSync(path.join(root, 'robots.txt'), 'utf8').includes(`${base}/sitemap.xml`));
assert.equal(failures.length, 0, failures.join('\n'));
console.log(`PASS: ${urls.length} sitemap URLs, unique titles/descriptions, canonicals, no accidental noindex, H1/TOC counts, JSON-LD parsing, internal links and no orphan sitemap pages.`);
