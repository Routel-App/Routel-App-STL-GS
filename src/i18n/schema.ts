import type { L } from '../config/site';
import { type Lang, t } from './ui';

export const faqSchema = (items: { q: L; a: L }[], lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: t(f.q, lang),
    acceptedAnswer: { '@type': 'Answer', text: t(f.a, lang) },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((i, idx) => ({ '@type': 'ListItem', position: idx + 1, name: i.name, item: i.url })),
});
