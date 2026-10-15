import { site, type L } from '../config/site';

export type Lang = 'ar' | 'en';
export const langs: Lang[] = ['ar', 'en'];
export const defaultLang: Lang = 'ar';

/** params for getStaticPaths: Arabic lives at the root, English under /en */
export const langParam = (lang: Lang) => (lang === 'ar' ? undefined : lang);
export const getLang = (param?: string): Lang => (param === 'en' ? 'en' : 'ar');
export const langPaths = () => langs.map((l) => ({ params: { lang: langParam(l) } }));

/**
 * Tokens usable inside any text: they are replaced with the values from
 * src/config/site.ts so a variable is edited in one place only.
 */
export const fill = (s: string, lang: Lang): string =>
  s
    .replaceAll('{hours}', site.quoteResponseHours)
    .replaceAll('{ports}', site.portsCount)
    .replaceAll('{clients}', site.clientsCount)
    .replaceAll('{year}', site.company.foundedYear)
    .replaceAll('{city}', site.company.foundedCity[lang])
    .replaceAll('{hqCity}', site.contact.hqCity[lang])
    .replaceAll('{branches}', site.company.branches[lang])
    .replaceAll('{beginning}', site.company.beginning[lang])
    .replaceAll('{ceo}', site.company.ceoName[lang]);

/** Pick the language variant of a bilingual value (tokens filled) */
export const t = (v: L | string, lang: Lang): string => fill(typeof v === 'string' ? v : v[lang], lang);

/** Build an internal link for a language */
export const href = (lang: Lang, path = '/') => {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'ar') return p;
  return p === '/' ? '/en/' : `/en${p}`;
};

/** Map the current path to the other language */
export const switchPath = (pathname: string, to: Lang) => {
  const bare = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return href(to, bare);
};

export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** Shared interface strings */
export const ui = {
  skip: { ar: 'تخطَّ إلى المحتوى', en: 'Skip to content' },
  home: { ar: 'الرئيسية', en: 'Home' },
  about: { ar: 'من نحن', en: 'About' },
  services: { ar: 'الخدمات', en: 'Services' },
  sectors: { ar: 'القطاعات', en: 'Sectors' },
  network: { ar: 'الشبكة', en: 'Network' },
  media: { ar: 'المركز الإعلامي', en: 'Media Center' },
  contact: { ar: 'تواصل معنا', en: 'Contact' },
  whyStl: { ar: 'لماذا STL', en: 'Why STL' },
  qhse: { ar: 'الجودة والسلامة', en: 'QHSE' },
  sustainability: { ar: 'الاستدامة ورؤية 2030', en: 'Sustainability & Vision 2030' },
  eservices: { ar: 'الخدمات الإلكترونية', en: 'E-Services' },
  careers: { ar: 'الوظائف', en: 'Careers' },
  faq: { ar: 'الأسئلة الشائعة', en: 'FAQ' },
  news: { ar: 'الأخبار', en: 'News' },
  blog: { ar: 'المدونة وأدلة الشحن', en: 'Blog & Shipping Guides' },
  glossary: { ar: 'مسرد المصطلحات', en: 'Glossary' },
  track: { ar: 'تتبع شحنتك', en: 'Track Shipment' },
  trackShort: { ar: 'تتبع الشحنة', en: 'Track Shipment' },
  quote: { ar: 'اطلب عرض سعر', en: 'Request a Quote' },
  quoteShort: { ar: 'طلب عرض سعر', en: 'Request a Quote' },
  schedule: { ar: 'جدول الإبحار', en: 'Sailing Schedule' },
  cbm: { ar: 'حاسبة حجم الحاوية', en: 'CBM Calculator' },
  cbmShort: { ar: 'حاسبة الحجم', en: 'CBM Calculator' },
  allServices: { ar: 'كل الخدمات', en: 'All services' },
  readMore: { ar: 'اقرأ المزيد', en: 'Read more' },
  learnMore: { ar: 'تعرّف أكثر', en: 'Learn more' },
  whatsapp: { ar: 'تواصل عبر واتساب', en: 'Chat on WhatsApp' },
  download: { ar: 'تحميل', en: 'Download' },
  companyProfile: { ar: 'الملف التعريفي (PDF)', en: 'Company Profile (PDF)' },
  overview: { ar: 'نبذة عن الشركة', en: 'Company Overview' },
  vision: { ar: 'الرؤية والرسالة والقيم', en: 'Vision, Mission & Values' },
  ceo: { ar: 'كلمة الرئيس التنفيذي', en: "CEO's Message" },
  leadership: { ar: 'فريق القيادة', en: 'Leadership Team' },
  certs: { ar: 'الشهادات والتراخيص', en: 'Certifications & Licenses' },
  ports: { ar: 'موانئ المملكة', en: 'Saudi Ports' },
  routes: { ar: 'المسارات التجارية الدولية', en: 'International Trade Lanes' },
  branches: { ar: 'فروعنا', en: 'Our Branches' },
  legal: { ar: 'الصفحات القانونية', en: 'Legal' },
  privacy: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
  terms: { ar: 'شروط الاستخدام', en: 'Terms of Use' },
  shippingTerms: { ar: 'الشروط العامة للشحن', en: 'General Shipping Terms' },
  cookies: { ar: 'سياسة ملفات الارتباط', en: 'Cookie Policy' },
  company: { ar: 'الشركة', en: 'Company' },
  menu: { ar: 'القائمة', en: 'Menu' },
  close: { ar: 'إغلاق', en: 'Close' },
  langName: { ar: 'English', en: 'العربية' },
  langShort: { ar: 'EN', en: 'عربي' },
  whatWeOffer: { ar: 'ما نقدمه', en: 'What we offer' },
  benefits: { ar: 'المزايا', en: 'Benefits' },
  faqShort: { ar: 'أسئلة شائعة', en: 'Common questions' },
  relatedServices: { ar: 'الخدمات المرتبطة', en: 'Related services' },
  otherServices: { ar: 'خدمات أخرى', en: 'Other services' },
  challenges: { ar: 'التحديات', en: 'The challenges' },
  ourSolution: { ar: 'حل STL', en: 'The STL solution' },
  successStory: { ar: 'قصة نجاح', en: 'Success story' },
  quoteForService: { ar: 'اطلب عرض سعر لهذه الخدمة', en: 'Request a quote for this service' },
  readyTitle: { ar: 'جاهز تشحن؟', en: 'Ready to ship?' },
  readyText: {
    ar: 'احصل على عرض سعر مفصّل لشحنتك خلال {hours} ساعة.',
    en: 'Get a detailed quote for your shipment within {hours} hours.',
  },
  rights: { ar: 'جميع الحقوق محفوظة.', en: 'All rights reserved.' },
  newsletterTitle: { ar: 'النشرة البريدية', en: 'Newsletter' },
  newsletterText: {
    ar: 'اشترك ليصلك جديد الخدمات والعروض وأخبار القطاع.',
    en: 'Subscribe for new services, offers and industry news.',
  },
  emailPlaceholder: { ar: 'بريدك الإلكتروني', en: 'Your email' },
  subscribe: { ar: 'اشترك', en: 'Subscribe' },
  subscribed: { ar: 'تم الاشتراك، شكرًا لك!', en: 'Subscribed — thank you!' },
  footerAbout: {
    ar: 'STL Global Solutions، شريكك البحري من موانئ العالم إلى باب عملك.',
    en: 'STL Global Solutions — your maritime partner from global ports to your doorstep.',
  },
  phone: { ar: 'الهاتف الموحد', en: 'Unified number' },
  email: { ar: 'البريد', en: 'Email' },
  address: { ar: 'العنوان', en: 'Address' },
  hours: { ar: 'ساعات العمل', en: 'Working hours' },
  crLine: { ar: 'سجل تجاري رقم', en: 'CR No.' },
  tgaLine: { ar: 'ترخيص الهيئة العامة للنقل رقم', en: 'TGA License No.' },
  vatLine: { ar: 'الرقم الضريبي', en: 'VAT No.' },
  breadcrumbHome: { ar: 'الرئيسية', en: 'Home' },
  notFoundTitle: { ar: 'الصفحة غير موجودة', en: 'Page not found' },
  notFoundText: {
    ar: 'يبدو أن هذه الصفحة أبحرت لوجهة أخرى. جرّب العودة للرئيسية.',
    en: 'Looks like this page sailed elsewhere. Try heading back home.',
  },
  backHome: { ar: 'العودة للرئيسية', en: 'Back to home' },
  cookieText: {
    ar: 'نستخدم ملفات الارتباط لتحسين تجربتك وتحليل استخدام الموقع وفق نظام حماية البيانات الشخصية.',
    en: 'We use cookies to improve your experience and analyze site usage in line with the Personal Data Protection Law (PDPL).',
  },
  accept: { ar: 'قبول', en: 'Accept' },
  reject: { ar: 'رفض', en: 'Reject' },
  manage: { ar: 'إدارة الإعدادات', en: 'Manage settings' },
  save: { ar: 'حفظ', en: 'Save' },
  essential: { ar: 'ضرورية (مفعلة دائمًا)', en: 'Essential (always on)' },
  analytics: { ar: 'تحليلية', en: 'Analytics' },
  marketing: { ar: 'تسويقية', en: 'Marketing' },
  submit: { ar: 'إرسال', en: 'Submit' },
  next: { ar: 'التالي', en: 'Next' },
  back: { ar: 'السابق', en: 'Back' },
  required: { ar: 'مطلوب', en: 'Required' },
  optional: { ar: 'اختياري', en: 'Optional' },
  sending: { ar: 'جارٍ الإرسال...', en: 'Sending...' },
  formError: { ar: 'تعذر الإرسال، حاول مرة أخرى أو تواصل عبر واتساب.', en: 'Could not send. Please try again or reach us on WhatsApp.' },
  applyNow: { ar: 'قدّم الآن', en: 'Apply now' },
  minutesRead: { ar: 'دقائق قراءة', en: 'min read' },
  comingSoon: { ar: 'المحتوى الكامل قريبًا', en: 'Full article coming soon' },
} satisfies Record<string, L>;

export type UIKey = keyof typeof ui;
export const u = (key: UIKey, lang: Lang) => fill(ui[key][lang], lang);
