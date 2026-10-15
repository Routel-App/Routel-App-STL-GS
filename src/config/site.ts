/**
 * ============================================================================
 *  STL Global Solutions — ملف المتغيرات المركزي (Site Variables)
 * ============================================================================
 *  كل قيمة بين [أقواس مربعة] معلومة تخص STL ولازم تُستبدل بالقيمة الحقيقية.
 *  Every value wrapped in [square brackets] is a placeholder to be replaced.
 *
 *  - غيّر القيمة هنا مرة وحدة، وتتحدث في كل صفحات الموقع (عربي + إنجليزي).
 *  - القيم ذات اللغتين مكتوبة بالشكل { ar: '...', en: '...' }.
 *  - لإخفاء عنصر غير منطبق (شهادة، ميناء، فرع...) احذف سطره أو اجعل show: false.
 *  - شغّل `npm run check:placeholders` لعرض كل المتغيرات الباقية بدون تعبئة.
 * ============================================================================
 */

export type L = { ar: string; en: string };

export const site = {
  /** إبراز المتغيرات غير المعبأة بخط منقط في الموقع (اجعلها false قبل الإطلاق) */
  highlightPlaceholders: true,

  name: 'STL Global Solutions',
  shortName: 'STL',
  domain: '[stl-global.sa]',

  /** الشعار اللفظي المختار — Selected tagline (القسم 3) */
  tagline: {
    ar: 'من موانئ العالم.. إلى باب عملك',
    en: 'From Global Ports to Your Doorstep',
  } as L,

  // ---------------------------------------------------------------- التواصل
  contact: {
    unifiedPhone: '[9200XXXXX]',
    whatsapp: '[9665XXXXXXXX]', // بصيغة دولية بدون + أو أصفار، تُستخدم في رابط wa.me
    whatsappDisplay: '[05XXXXXXXX]',
    emailInfo: '[info@stl-global.sa]',
    emailSales: '[sales@stl-global.sa]',
    emailSupport: '[support@stl-global.sa]',
    emailCareers: '[careers@stl-global.sa]',
    emailDPO: '[privacy@stl-global.sa]', // مسؤول حماية البيانات (PDPL)
    hqAddress: { ar: '[عنوان المقر الرئيسي]', en: '[Head office address]' } as L,
    hqCity: { ar: '[المدينة]', en: '[City]' } as L,
    workingHours: { ar: '[الأحد – الخميس، 8 ص – 5 م]', en: '[Sunday – Thursday, 8 AM – 5 PM]' } as L,
    googleMapsUrl: '[https://maps.google.com/?q=STL+Global+Solutions]',
    /** رابط تضمين الخريطة (Google Maps → Share → Embed). اتركه فارغًا لإخفاء الخريطة */
    googleMapsEmbed: '',
  },

  social: {
    linkedin: '[https://www.linkedin.com/company/stl-global]',
    x: '[https://x.com/stl_global]',
    instagram: '[https://instagram.com/stl_global]',
    youtube: '[https://youtube.com/@stl_global]',
  },

  // ---------------------------------------------------------------- البيانات القانونية
  legal: {
    crNumber: '[رقم السجل التجاري]',
    tgaLicense: '[رقم ترخيص الهيئة العامة للنقل]',
    vatNumber: '[الرقم الضريبي]',
    customsLicense: '[رقم رخصة التخليص الجمركي]',
  },

  // ---------------------------------------------------------------- الشركة
  company: {
    foundedYear: '[سنة التأسيس]',
    foundedCity: { ar: '[المدينة]', en: '[City]' } as L,
    beginning: { ar: '[وصف البداية]', en: '[how STL started]' } as L,
    branches: { ar: '[الفروع]', en: '[branches]' } as L,
    ceoName: { ar: '[اسم الرئيس التنفيذي]', en: '[CEO name]' } as L,
    individualsServed: {
      ar: '[حدد: نخدم الشركات فقط / نخدم الشركات والأفراد]',
      en: '[Specify: businesses only / businesses and individuals]',
    } as L,
  },

  /** مدة الرد على عروض الأسعار بالساعات */
  quoteResponseHours: '[24]',

  // ---------------------------------------------------------------- الأرقام (القسم 4.5)
  // تُعرض فقط أرقام STL الحقيقية. احذف أي عنصر ما عندكم رقمه.
  stats: [
    { value: '[00+]', label: { ar: 'سنة خبرة', en: 'Years of experience' } },
    { value: '[00+]', label: { ar: 'حاوية مكافئة (TEU) سنويًا', en: 'TEU shipped annually' } },
    { value: '[00+]', label: { ar: 'ميناء حول العالم', en: 'Ports worldwide' } },
    { value: '[00+]', label: { ar: 'عميل', en: 'Clients' } },
    { value: '[00]', label: { ar: 'فروع في المملكة', en: 'Branches in KSA' } },
  ],
  /** عدد الموانئ المستخدم داخل النصوص */
  portsCount: '[00]',
  clientsCount: '[00]',

  // ---------------------------------------------------------------- الخدمات الإلكترونية والنماذج
  integrations: {
    /**
     * رابط استقبال النماذج (POST JSON) — مثل Formspree أو API داخلي.
     * إذا تُرك فارغًا: تظهر رسالة النجاح ويُطبع الطلب في Console فقط.
     */
    formEndpoint: '',
    /** رابط API التتبع: يُستدعى بـ ?ref=XXXX ويعيد { stage: 0..7, events?: [...] } */
    trackingApi: '',
    /** بادئة رقم الطلب في رسالة النجاح */
    quotePrefix: 'STL-',
    googleAnalyticsId: '',
  },

  /** ملفات قابلة للتحميل — ضعها في مجلد public/files */
  downloads: {
    companyProfile: '/files/STL-Company-Profile.pdf',
    qhsePolicy: '/files/STL-QHSE-Policy.pdf',
  },
};

// ============================================================================
//  الفروع (القسم 8) — أضف بطاقة لكل فرع
// ============================================================================
export const branches: {
  city: L;
  isHQ?: boolean;
  address: L;
  phone: string;
  hours: L;
  mapUrl: string;
}[] = [
  {
    city: { ar: '[المقر الرئيسي — المدينة]', en: '[Head office — City]' },
    isHQ: true,
    address: { ar: '[العنوان]', en: '[Address]' },
    phone: '[01XXXXXXXX]',
    hours: { ar: '[الأحد – الخميس، 8 ص – 5 م]', en: '[Sun – Thu, 8 AM – 5 PM]' },
    mapUrl: '[رابط خرائط Google]',
  },
  {
    city: { ar: '[فرع — المدينة]', en: '[Branch — City]' },
    address: { ar: '[العنوان]', en: '[Address]' },
    phone: '[01XXXXXXXX]',
    hours: { ar: '[الأحد – الخميس، 8 ص – 5 م]', en: '[Sun – Thu, 8 AM – 5 PM]' },
    mapUrl: '[رابط خرائط Google]',
  },
  {
    city: { ar: '[فرع — المدينة]', en: '[Branch — City]' },
    address: { ar: '[العنوان]', en: '[Address]' },
    phone: '[01XXXXXXXX]',
    hours: { ar: '[الأحد – الخميس، 8 ص – 5 م]', en: '[Sun – Thu, 8 AM – 5 PM]' },
    mapUrl: '[رابط خرائط Google]',
  },
];

// ============================================================================
//  الشهادات والتراخيص (القسم 5.6) — احذف أي صف ما ينطبق على STL
// ============================================================================
export const certifications: { name: L; number: string; validity: string; badge: string }[] = [
  { badge: 'CR', name: { ar: 'السجل التجاري', en: 'Commercial Registration' }, number: '[رقم]', validity: '[تاريخ]' },
  { badge: 'TGA', name: { ar: 'ترخيص الهيئة العامة للنقل (وسيط شحن)', en: 'Transport General Authority license (freight forwarder)' }, number: '[رقم]', validity: '[تاريخ]' },
  { badge: 'ZATCA', name: { ar: 'رخصة التخليص الجمركي — هيئة الزكاة والضريبة والجمارك', en: 'Customs brokerage license — ZATCA' }, number: '[رقم]', validity: '[تاريخ]' },
  { badge: 'ISO 9001', name: { ar: 'آيزو 9001 (الجودة)', en: 'ISO 9001 (Quality)' }, number: '[رقم]', validity: '[تاريخ]' },
  { badge: 'ISO 14001', name: { ar: 'آيزو 14001 (البيئة)', en: 'ISO 14001 (Environment)' }, number: '[رقم]', validity: '[تاريخ]' },
  { badge: 'ISO 45001', name: { ar: 'آيزو 45001 (السلامة المهنية)', en: 'ISO 45001 (Occupational safety)' }, number: '[رقم]', validity: '[تاريخ]' },
  { badge: 'FIATA', name: { ar: 'عضوية FIATA / WCA', en: 'FIATA / WCA membership' }, number: '[رقم]', validity: '[تاريخ]' },
];

// ============================================================================
//  المسيرة — الخط الزمني (القسم 5.2)
// ============================================================================
export const timeline: { year: string; text: L }[] = [
  { year: '[سنة]', text: { ar: 'التأسيس وبدء العمليات في [المدينة]', en: 'Founded and began operations in [City]' } },
  { year: '[سنة]', text: { ar: 'الحصول على ترخيص [الهيئة العامة للنقل / التخليص الجمركي]', en: 'Obtained the [TGA / customs brokerage] license' } },
  { year: '[سنة]', text: { ar: 'افتتاح فرع [المدينة]', en: 'Opened the [City] branch' } },
  { year: '[سنة]', text: { ar: 'إطلاق خدمة [الشحن المبرد / المشاريع]', en: 'Launched [reefer / project cargo] services' } },
  { year: '[سنة]', text: { ar: 'الحصول على شهادة آيزو [رقم]', en: 'Achieved ISO [number] certification' } },
  { year: '[سنة]', text: { ar: 'إطلاق منصة التتبع الإلكترونية', en: 'Launched the online tracking platform' } },
];

// ============================================================================
//  فريق القيادة (القسم 5.5) — ضع الصور في public/team/
// ============================================================================
export const leadership: { name: L; role: L; bio: L; photo: string; linkedin: string }[] = [
  {
    name: { ar: '[الاسم]', en: '[Name]' },
    role: { ar: 'الرئيس التنفيذي', en: 'Chief Executive Officer' },
    bio: { ar: '[سطران عن الخبرة]', en: '[Two lines about experience]' },
    photo: '',
    linkedin: '[رابط لينكدإن]',
  },
  {
    name: { ar: '[الاسم]', en: '[Name]' },
    role: { ar: '[المنصب]', en: '[Position]' },
    bio: { ar: '[سطران عن الخبرة]', en: '[Two lines about experience]' },
    photo: '',
    linkedin: '[رابط لينكدإن]',
  },
  {
    name: { ar: '[الاسم]', en: '[Name]' },
    role: { ar: '[المنصب]', en: '[Position]' },
    bio: { ar: '[سطران عن الخبرة]', en: '[Two lines about experience]' },
    photo: '',
    linkedin: '[رابط لينكدإن]',
  },
  {
    name: { ar: '[الاسم]', en: '[Name]' },
    role: { ar: '[المنصب]', en: '[Position]' },
    bio: { ar: '[سطران عن الخبرة]', en: '[Two lines about experience]' },
    photo: '',
    linkedin: '[رابط لينكدإن]',
  },
];

// ============================================================================
//  الثقة: شعارات العملاء وآراؤهم (القسم 4.11) — بعد أخذ موافقة العملاء
// ============================================================================
export const clientLogos: { name: string; logo: string }[] = [
  { name: '[عميل 1]', logo: '' },
  { name: '[عميل 2]', logo: '' },
  { name: '[عميل 3]', logo: '' },
  { name: '[عميل 4]', logo: '' },
  { name: '[عميل 5]', logo: '' },
  { name: '[عميل 6]', logo: '' },
];

export const testimonials: { quote: L; name: L; role: L; company: L }[] = [
  {
    quote: { ar: '[نص رأي العميل]', en: '[Client testimonial]' },
    name: { ar: '[الاسم]', en: '[Name]' },
    role: { ar: '[المنصب]', en: '[Position]' },
    company: { ar: '[الشركة]', en: '[Company]' },
  },
  {
    quote: { ar: '[نص رأي العميل]', en: '[Client testimonial]' },
    name: { ar: '[الاسم]', en: '[Name]' },
    role: { ar: '[المنصب]', en: '[Position]' },
    company: { ar: '[الشركة]', en: '[Company]' },
  },
  {
    quote: { ar: '[نص رأي العميل]', en: '[Client testimonial]' },
    name: { ar: '[الاسم]', en: '[Name]' },
    role: { ar: '[المنصب]', en: '[Position]' },
    company: { ar: '[الشركة]', en: '[Company]' },
  },
];

/** شريط الاعتمادات في الرئيسية (القسم 4.11) */
export const accreditationStrip: L[] = [
  { ar: 'السجل التجاري [رقم]', en: 'CR No. [number]' },
  { ar: 'ترخيص الهيئة العامة للنقل [رقم]', en: 'TGA license [number]' },
  { ar: 'رخصة التخليص الجمركي [رقم]', en: 'Customs license [number]' },
  { ar: 'آيزو [9001/14001/45001 إن وجدت]', en: 'ISO [9001/14001/45001 if applicable]' },
  { ar: 'عضوية [FIATA/WCA إن وجدت]', en: '[FIATA/WCA membership if applicable]' },
];

// ============================================================================
//  الوظائف الشاغرة (القسم 12.2)
// ============================================================================
export const jobs: { title: L; city: L; type: L }[] = [
  { title: { ar: '[المسمى الوظيفي]', en: '[Job title]' }, city: { ar: '[المدينة]', en: '[City]' }, type: { ar: 'دوام كامل', en: 'Full-time' } },
  { title: { ar: '[المسمى الوظيفي]', en: '[Job title]' }, city: { ar: '[المدينة]', en: '[City]' }, type: { ar: 'دوام كامل', en: 'Full-time' } },
  { title: { ar: '[المسمى الوظيفي]', en: '[Job title]' }, city: { ar: '[المدينة]', en: '[City]' }, type: { ar: 'تدريب تعاوني', en: 'Co-op training' } },
];

// ============================================================================
//  الأخبار (القسم 12.1)
// ============================================================================
export const news: { date: string; title: L; excerpt: L }[] = [
  { date: '[تاريخ]', title: { ar: '[عنوان الخبر]', en: '[News headline]' }, excerpt: { ar: '[ملخص الخبر: إعلان، شراكة، شهادة جديدة، معرض...]', en: '[Summary: announcement, partnership, new certification, exhibition...]' } },
  { date: '[تاريخ]', title: { ar: '[عنوان الخبر]', en: '[News headline]' }, excerpt: { ar: '[ملخص الخبر]', en: '[News summary]' } },
  { date: '[تاريخ]', title: { ar: '[عنوان الخبر]', en: '[News headline]' }, excerpt: { ar: '[ملخص الخبر]', en: '[News summary]' } },
];

// ============================================================================
//  جدول الإبحار (القسم 11.3) — حدّثه دوريًا أو اربطه بمصدر بيانات
// ============================================================================
export const sailings: {
  pol: string; pod: string; month: string; carrier: string; vessel: string;
  cutoff: string; etd: string; eta: string; transitDays: string;
}[] = [
  { pol: 'Shanghai', pod: 'Jeddah', month: '[2026-11]', carrier: '[الخط الملاحي]', vessel: '[اسم السفينة]', cutoff: '[تاريخ]', etd: '[تاريخ]', eta: '[تاريخ]', transitDays: '[00]' },
  { pol: 'Ningbo', pod: 'Dammam', month: '[2026-11]', carrier: '[الخط الملاحي]', vessel: '[اسم السفينة]', cutoff: '[تاريخ]', etd: '[تاريخ]', eta: '[تاريخ]', transitDays: '[00]' },
  { pol: 'Nhava Sheva', pod: 'Jeddah', month: '[2026-11]', carrier: '[الخط الملاحي]', vessel: '[اسم السفينة]', cutoff: '[تاريخ]', etd: '[تاريخ]', eta: '[تاريخ]', transitDays: '[00]' },
  { pol: 'Hamburg', pod: 'Jeddah', month: '[2026-12]', carrier: '[الخط الملاحي]', vessel: '[اسم السفينة]', cutoff: '[تاريخ]', etd: '[تاريخ]', eta: '[تاريخ]', transitDays: '[00]' },
  { pol: 'Rotterdam', pod: 'Dammam', month: '[2026-12]', carrier: '[الخط الملاحي]', vessel: '[اسم السفينة]', cutoff: '[تاريخ]', etd: '[تاريخ]', eta: '[تاريخ]', transitDays: '[00]' },
  { pol: 'Mersin', pod: 'Jeddah', month: '[2026-12]', carrier: '[الخط الملاحي]', vessel: '[اسم السفينة]', cutoff: '[تاريخ]', etd: '[تاريخ]', eta: '[تاريخ]', transitDays: '[00]' },
];

/** مبادرات المسؤولية الاجتماعية (القسم 10.3) */
export const csrInitiatives: L[] = [
  { ar: 'برامج تدريب تعاوني لطلاب الجامعات في تخصصات اللوجستيات.', en: 'Co-op training programs for university students in logistics.' },
  { ar: '[مبادرات STL المجتمعية]', en: '[STL community initiatives]' },
];
