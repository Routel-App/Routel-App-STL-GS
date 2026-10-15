// Lists every [placeholder] still present in the source so nothing is missed before launch.
// Usage: npm run check:placeholders
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../src', import.meta.url).pathname;
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : /\.(ts|astro)$/.test(f) && files.push(p); });
walk(root);

const re = /\[([^\]\n]{1,120})\]/g;
const skip = /^\.\.\.|^\d+$|^[a-z][a-z-]*$|^STL$|^"|^'|=|^\s*$/; // code like [...lang], arr[0], [data-x], [name=x]
let total = 0;
for (const f of files) {
  const lines = readFileSync(f, 'utf8').split('\n');
  const hits = [];
  lines.forEach((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
    for (const m of line.matchAll(re)) {
      const inner = m[1];
      if (skip.test(inner) || !/[؀-ۿA-Za-z]/.test(inner) || /[(){};]|=>|\.\w+\(/.test(inner)) continue;
      if (!/['"`]/.test(line)) continue;
      hits.push(`  ${String(i + 1).padStart(4)}: [${inner}]`);
    }
  });
  if (hits.length) { console.log(`\n${relative(process.cwd(), f)} (${hits.length})`); console.log(hits.join('\n')); total += hits.length; }
}
console.log(`\nTotal placeholders: ${total}`);
