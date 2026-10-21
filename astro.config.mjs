import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// غيّر النطاق هنا عند النشر — Change the domain here before deploying
const SITE_URL = process.env.SITE_URL || 'https://stl-gf.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar-SA', en: 'en-US' } },
    }),
  ],
});
