import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// old service URLs that now redirect (see scripts/gen-redirects.mjs) — kept out of the sitemap
const legacy = new Set(JSON.parse(readFileSync('./vercel.json', 'utf8')).redirects.map((r) => r.source));

// غيّر النطاق هنا عند النشر — Change the domain here before deploying
const SITE_URL = process.env.SITE_URL || 'https://stl-gf.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !legacy.has(new URL(page).pathname.replace(/\/$/, '')),
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar-SA', en: 'en-US' } },
    }),
  ],
});
