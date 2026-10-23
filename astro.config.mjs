import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// old service URLs that now redirect (see scripts/gen-redirects.mjs) — kept out of the sitemap
const vercelRedirects = JSON.parse(readFileSync('./vercel.json', 'utf8')).redirects;
const legacy = new Set(vercelRedirects.map((r) => r.source));
// static fallback for merged pages (service URLs are handled in services/[slug].astro)
const pageRedirects = Object.fromEntries(vercelRedirects.filter((r) => !/^(\/en)?\/services\//.test(r.source)).map((r) => [r.source, r.destination]));

// غيّر النطاق هنا عند النشر — Change the domain here before deploying
const SITE_URL = process.env.SITE_URL || 'https://stl-gf.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  redirects: pageRedirects,
  integrations: [
    sitemap({
      filter: (page) => !legacy.has(new URL(page).pathname.replace(/\/$/, '')),
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar-SA', en: 'en-US' } },
    }),
  ],
});
