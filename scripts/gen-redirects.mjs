// Generates vercel.json 301 redirects for old service URLs (services were merged into pages).
// Run after changing services: node scripts/gen-redirects.mjs
import { build } from 'esbuild';
import { writeFileSync, rmSync } from 'node:fs';
const out = 'node_modules/.cache/legacy-redirects.mjs';
await build({ entryPoints: ['src/data/services.ts'], bundle: true, format: 'esm', platform: 'node', outfile: out, logLevel: 'error' });
const { legacyServiceRedirects } = await import('../' + out);
rmSync(out);
// pages merged into the single About page
const merged = {
  '/about/vision': '/about#vision',
  '/about/ceo-message': '/about#message',
  '/about/leadership': '/about#message',
  '/about/certifications': '/about#qhse',
  '/why-stl': '/about#why-stl',
  '/qhse': '/about#qhse',
  '/sustainability': '/about#sustainability',
  '/sectors/retail-ecommerce': '/sectors/food-ingredients',
};
const all = { ...Object.fromEntries(Object.entries(legacyServiceRedirects).map(([k, v]) => [`/services/${k}`, v])), ...merged };
const redirects = Object.entries(all).flatMap(([from, to]) => [
  { source: from, destination: to, permanent: true },
  { source: `/en${from}`, destination: `/en${to}`, permanent: true },
]);
writeFileSync('vercel.json', JSON.stringify({ redirects }, null, 2) + '\n');
console.log(`vercel.json: ${redirects.length} redirects`);
