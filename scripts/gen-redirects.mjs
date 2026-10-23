// Generates vercel.json 301 redirects for old service URLs (services were merged into pages).
// Run after changing services: node scripts/gen-redirects.mjs
import { build } from 'esbuild';
import { writeFileSync, rmSync } from 'node:fs';
const out = 'node_modules/.cache/legacy-redirects.mjs';
await build({ entryPoints: ['src/data/services.ts'], bundle: true, format: 'esm', platform: 'node', outfile: out, logLevel: 'error' });
const { legacyServiceRedirects } = await import('../' + out);
rmSync(out);
const redirects = Object.entries(legacyServiceRedirects).flatMap(([from, to]) => [
  { source: `/services/${from}`, destination: to, permanent: true },
  { source: `/en/services/${from}`, destination: `/en${to}`, permanent: true },
]);
writeFileSync('vercel.json', JSON.stringify({ redirects }, null, 2) + '\n');
console.log(`vercel.json: ${redirects.length} redirects`);
