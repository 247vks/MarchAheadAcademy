// Generate delivery assets without changing artwork or source dimensions.
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const files = ['og.png', 'og-tri-service.png', 'aspirant-guidance-banner.png', ...['learn', 'lead', 'prepare', 'communicate', 'train', 'serve'].map(name => `gallery/${name}.png`)];
(async () => {
  let before = 0, after = 0;
  for (const file of files) {
    const archived = path.join('assets/image-originals', file);
    const source = fs.existsSync(archived) ? archived : path.join('public', file);
    const destination = path.join('public', file.replace(/\.png$/, '.webp'));
    let pipeline = sharp(source);
    if (file === 'aspirant-guidance-banner.png') pipeline = pipeline.resize({ width: 1440, withoutEnlargement: true });
    await pipeline.webp({ quality: file.startsWith('og') ? 90 : 82, effort: 6 }).toFile(destination);
    const sourceBytes = fs.statSync(source).size, outputBytes = fs.statSync(destination).size;
    before += sourceBytes; after += outputBytes;
    console.log(`${destination}: ${sourceBytes} -> ${outputBytes}`);
  }
  console.log(JSON.stringify({ before, after, savingPercent: (100 * (1 - after / before)).toFixed(2) }));
})().catch(error => { console.error(error); process.exitCode = 1; });
