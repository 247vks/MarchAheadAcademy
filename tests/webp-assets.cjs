const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const sharp = require('sharp');
function files(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(path.join(dir, entry.name)) : [path.join(dir, entry.name)]); }
(async () => {
  const exported = files('out');
  assert.equal(exported.filter(file => /\.(png|jpe?g|gif|avif)$/i.test(file)).length, 0, 'No legacy raster assets in deployment');
  const webps = exported.filter(file => file.endsWith('.webp'));
  assert.equal(webps.length, 9);
  for (const file of webps) {
    const metadata = await sharp(file).metadata();
    assert.equal(metadata.format, 'webp');
    assert.ok(metadata.width && metadata.height);
    await sharp(file).raw().toBuffer();
  }
  for (const file of exported.filter(file => file.endsWith('.html'))) {
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(!/(?:src|content)="[^"<>]*\.(?:png|jpe?g|gif|avif)(?:\?|"|&)/i.test(html), `Legacy image reference: ${file}`);
    for (const match of html.matchAll(/(?:src|content)="([^"<>]*\.webp)"/g)) {
      const pathname = new URL(match[1], 'https://www.marchaheadacademy.com').pathname;
      assert.ok(fs.existsSync(path.join('out', pathname)), `Missing ${pathname}`);
    }
  }
  console.log('PASS: nine valid WebP assets, no legacy public raster files, and exported image references resolve.');
})().catch(error => { console.error(error); process.exitCode = 1; });
