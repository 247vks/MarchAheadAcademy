// Static-export asset pipeline: preserve the original; emit a smaller delivery format.
const sharp = require('sharp');
const fs = require('node:fs');
(async () => {
  const source = 'assets/image-originals/aspirant-guidance-banner.png';
  const destination = 'public/aspirant-guidance-banner.webp';
  await sharp(source).resize({ width: 1440, withoutEnlargement: true }).webp({ quality: 78, effort: 6 }).toFile(destination);
  console.log(JSON.stringify({ sourceBytes: fs.statSync(source).size, outputBytes: fs.statSync(destination).size }));
})().catch(error => { console.error(error); process.exitCode = 1; });
