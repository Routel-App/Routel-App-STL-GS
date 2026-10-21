// Renders card.html into a print-ready PDF (with bleed) and PNG previews.
// Usage: npm i -D playwright-core && node brand/business-card/render.mjs
import { chromium } from 'playwright-core';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, 'export');
const url = pathToFileURL(join(here, 'card.html')).href;
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });

// 1) print PDF — 96 × 56 mm pages (90 × 50 mm trim + 3 mm bleed)
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: join(out, 'STL-BusinessCard-Abdulrahman-Ameen-print.pdf'), preferCSSPageSize: true, printBackground: true });

// 2) PNG previews at ~600 dpi, cropped to the trim (no bleed)
const hi = await browser.newPage({ deviceScaleFactor: 6.25 });
await hi.goto(url, { waitUntil: 'networkidle' });
await hi.evaluate(() => document.fonts.ready);
const mm = 96 / 25.4; // CSS px per mm
for (const [i, name] of [[0, 'front'], [1, 'back']]) {
  const box = await hi.locator('.card').nth(i).boundingBox();
  await hi.screenshot({ path: join(out, `${name}.png`), clip: { x: box.x + 3 * mm, y: box.y + 3 * mm, width: 90 * mm, height: 50 * mm } });
}
// 3) guides preview (trim = pink dashed, safe area = blue dotted)
await hi.evaluate(() => document.body.classList.add('guides'));
await hi.screenshot({ path: join(out, 'guides.png'), fullPage: true });
await browser.close();
console.log('done →', out);
