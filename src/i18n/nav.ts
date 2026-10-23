import type { L } from '../config/site';
import { ui } from './ui';
import { categories } from '../data/services';
import { certifications } from '../config/site';
const hasCerts = certifications.length > 0;

export type NavItem = { label: L; path: string; children?: { label: L; path: string }[] };

export const mainNav: NavItem[] = [
  { label: ui.home, path: '/' },
  {
    label: ui.about,
    path: '/about',
    children: [
      { label: ui.overview, path: '/about' },
      { label: ui.vision, path: '/about/vision' },
      { label: ui.ceo, path: '/about/ceo-message' },
      { label: ui.leadership, path: '/about/leadership' },
      ...(hasCerts ? [{ label: ui.certs, path: '/about/certifications' }] : []),
      { label: ui.whyStl, path: '/why-stl' },
      { label: ui.qhse, path: '/qhse' },
      { label: ui.sustainability, path: '/sustainability' },
      { label: ui.careers, path: '/careers' },
    ],
  },
  {
    label: ui.services,
    path: '/services',
    children: categories.map((c) => ({ label: c.title, path: `/services/${c.slug}` })),
  },
  { label: ui.sectors, path: '/sectors' },
  {
    label: ui.network,
    path: '/network',
    children: [
      { label: ui.ports, path: '/network/ports' },
      { label: ui.routes, path: '/network/routes' },
      { label: ui.branches, path: '/network#branches' },
    ],
  },
  {
    label: ui.media,
    path: '/media',
    children: [
      { label: ui.news, path: '/media/news' },
      { label: ui.blog, path: '/media/blog' },
      { label: ui.glossary, path: '/media/glossary' },
      { label: ui.faq, path: '/faq' },
    ],
  },
  { label: ui.contact, path: '/contact' },
];

export const eServices = [
  { icon: 'search', label: ui.trackShort, path: '/e-services/tracking' },
  { icon: 'doc', label: ui.quoteShort, path: '/e-services/quote' },
  { icon: 'calendar', label: ui.schedule, path: '/e-services/schedule' },
  { icon: 'calc', label: ui.cbm, path: '/e-services/cbm-calculator' },
];

export const aboutTabs = [
  { label: ui.overview, path: '/about' },
  { label: ui.vision, path: '/about/vision' },
  { label: ui.ceo, path: '/about/ceo-message' },
  { label: ui.leadership, path: '/about/leadership' },
  ...(hasCerts ? [{ label: ui.certs, path: '/about/certifications' }] : []),
];

export const mediaTabs = [
  { label: ui.news, path: '/media/news' },
  { label: ui.blog, path: '/media/blog' },
  { label: ui.glossary, path: '/media/glossary' },
];

export const eServiceTabs = eServices.map(({ label, path }) => ({ label, path }));

export const networkTabs = [
  { label: ui.network, path: '/network' },
  { label: ui.ports, path: '/network/ports' },
  { label: ui.routes, path: '/network/routes' },
];

export const legalTabs = [
  { label: ui.privacy, path: '/legal/privacy' },
  { label: ui.terms, path: '/legal/terms' },
  { label: ui.shippingTerms, path: '/legal/shipping-terms' },
  { label: ui.cookies, path: '/legal/cookies' },
];
