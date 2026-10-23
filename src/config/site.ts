/**
 * ============================================================================
 *  STL Global Forwarding — ملف المتغيرات المركزي (Site Variables)
 * ============================================================================
 *  غيّر القيمة هنا مرة وحدة، وتتحدث في كل صفحات الموقع (عربي + إنجليزي).
 *  - القيم ذات اللغتين مكتوبة بالشكل { ar: '...', en: '...' }.
 *  - القيم الفارغة '' تُخفي العنصر المرتبط بها تلقائيًا (رابط، زر، قسم...).
 *  - أي قيمة بين [أقواس مربعة] تعني معلومة ناقصة؛ شغّل `npm run check:placeholders`.
 * ============================================================================
 */

export type L = { ar: string; en: string };

export const site = {
  /** إبراز أي متغيرات غير معبأة بخط منقط (للمراجعة فقط) */
  highlightPlaceholders: false,

  name: 'STL Global Forwarding',
  shortName: 'STL',
  domain: 'stl-gf.com',

  /** الشعار اللفظي */
  tagline: {
    ar: 'من موانئ العالم.. إلى باب عملك',
    en: 'From Global Ports to Your Doorstep',
  } as L,

  // ---------------------------------------------------------------- التواصل
  contact: {
    /** الرقم بالصيغة الدولية للروابط (tel:) */
    phone: '+966532133699',
    /** الرقم كما يُعرض — يُكتب دائمًا من اليسار لليمين حتى داخل النص العربي */
    phoneDisplay: '+966 53 213 3699',
    /** رقم واتساب بدون + للرابط wa.me */
    whatsapp: '966532133699',
    whatsappDisplay: '+966 53 213 3699',
    email: 'info@stl-gf.com',
    /** مسؤول حماية البيانات (PDPL) */
    emailDPO: 'info@stl-gf.com',
    emailCareers: 'info@stl-gf.com',
    hqCity: { ar: 'جدة', en: 'Jeddah' } as L,
    hqAddress: { ar: 'جدة، المملكة العربية السعودية', en: 'Jeddah, Saudi Arabia' } as L,
    /** اتركها فارغة لإخفائها */
    workingHours: { ar: '', en: '' } as L,
    googleMapsUrl: '',
    /** رابط تضمين الخريطة (Google Maps → Share → Embed). فارغ = بدون خريطة */
    googleMapsEmbed: '',
  },

  /** روابط التواصل الاجتماعي — الرابط الفارغ لا يظهر */
  social: {
    linkedin: '',
    x: '',
    instagram: '',
    youtube: '',
  },

  /** البيانات النظامية — الفارغ لا يظهر في الفوتر */
  legal: {
    crNumber: '',
    tgaLicense: '',
    vatNumber: '',
    customsLicense: '',
  },

  // ---------------------------------------------------------------- الشركة
  company: {
    foundedYear: '2024',
    foundedCity: { ar: 'جدة', en: 'Jeddah' } as L,
    teamExperienceYears: '9',
    ceoName: { ar: 'عبدالرحمن أمين', en: 'Abdulrahman Ameen' } as L,
    ceoTitle: { ar: 'المدير العام', en: 'General Manager' } as L,
    individualsServed: {
      ar: 'نخدم الشركات والمؤسسات فقط، ولا نقدم خدمات الشحن للأفراد.',
      en: 'We serve businesses and organisations only; we do not handle shipments for individuals.',
    } as L,
  },

  /** مدة الرد على عروض الأسعار بالساعات */
  quoteResponseHours: '24',

  // ---------------------------------------------------------------- الأرقام
  // تُعرض حقائق STL الفعلية فقط.
  stats: [
    { value: '9+', label: { ar: 'سنوات خبرة فريقنا في الشحن واللوجستيات', en: 'Years of team experience in shipping & logistics' } },
    { value: '2024', label: { ar: 'سنة التأسيس في جدة', en: 'Founded in Jeddah' } },
    { value: '6', label: { ar: 'وحدات أعمال: بحري، مشاريع، جوي، لوجستي، خاص، خدمات بحرية', en: 'Business units: sea, projects, air, logistics, special, marine' } },
    { value: '27', label: { ar: 'خدمة متخصصة تحت سقف واحد', en: 'Specialised services under one roof' } },
  ],

  // ---------------------------------------------------------------- الخدمات الإلكترونية والنماذج
  integrations: {
    /**
     * رابط استقبال النماذج (POST) — مثل Formspree أو API داخلي.
     * إذا تُرك فارغًا: تُفتح رسالة بريد جاهزة إلى البريد الرسمي.
     */
    formEndpoint: '',
    /** رابط API التتبع: يُستدعى بـ ?ref=XXXX ويعيد { stage: 0..7 } */
    trackingApi: '',
    quotePrefix: 'STL-',
    googleAnalyticsId: '',
  },

  /**
   * صور الواجهة.
   * الصورة الحالية: "Seaport during Golden Hour" — Tom Fisk (Pexels، رخصة مجانية للاستخدام التجاري)
   * https://www.pexels.com/photo/seaport-during-golden-hour-3057960/
   * إذا تعذر تحميل الصورة يظهر الرسم البديل تلقائيًا.
   */
  images: {
    hero: 'https://images.pexels.com/photos/3057960/pexels-photo-3057960.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroCredit: 'Tom Fisk / Pexels',
  },

  /** ملفات قابلة للتحميل — ضعها في public/files واكتب المسار. الفارغ يُخفي الزر */
  downloads: {
    companyProfile: '',
    qhsePolicy: '',
  },
};

/** تنسيق رقم الهاتف للعرض داخل نص عربي أو إنجليزي (يحافظ على الاتجاه) */
export const phoneHref = `tel:${site.contact.phone}`;
export const whatsappHref = (text = '') =>
  `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// ============================================================================
//  الفروع
// ============================================================================
export const branches: {
  city: L;
  isHQ?: boolean;
  address: L;
  phone: string;
  phoneDisplay: string;
  hours?: L;
  mapUrl?: string;
}[] = [
  {
    city: { ar: 'جدة — المقر الرئيسي', en: 'Jeddah — Head office' },
    isHQ: true,
    address: { ar: 'جدة، المملكة العربية السعودية', en: 'Jeddah, Saudi Arabia' },
    phone: site.contact.phone,
    phoneDisplay: site.contact.phoneDisplay,
  },
];

// ============================================================================
//  الشهادات والتراخيص — أضف ما ينطبق فقط. القائمة الفارغة تُخفي الصفحة والشريط
// ============================================================================
export const certifications: { name: L; number: string; validity: string; badge: string }[] = [];

// ============================================================================
//  المسيرة — الخط الزمني
// ============================================================================
export const timeline: { year: string; text: L }[] = [
  {
    year: '2024',
    text: {
      ar: 'تأسيس STL Global Forwarding في جدة على يد فريق تجاوزت خبرته في الشحن واللوجستيات 9 سنوات.',
      en: 'STL Global Forwarding founded in Jeddah by a team with more than 9 years of shipping and logistics experience.',
    },
  },
  {
    year: '2024',
    text: {
      ar: 'إطلاق خدمات الشحن البحري بالحاويات الكاملة والمجمّعة، والتخليص الجمركي والنقل الداخلي.',
      en: 'Launched FCL and LCL ocean freight, customs clearance and inland transport services.',
    },
  },
  {
    year: '2025',
    text: {
      ar: 'توسيع الحلول لتشمل البضائع السائبة والمشاريع، والشحن المبرد، والمواد الخطرة.',
      en: 'Expanded into break bulk and project cargo, reefer and dangerous goods shipping.',
    },
  },
  {
    year: '2026',
    text: {
      ar: 'إطلاق الموقع الإلكتروني وأدوات الخدمات الرقمية: طلب عرض السعر، حاسبة الحجم، والتتبع.',
      en: 'Launched the website and digital tools: online quotes, CBM calculator and tracking.',
    },
  },
];

// ============================================================================
//  فريق القيادة — ضع الصور في public/team/
// ============================================================================
export const leadership: { name: L; role: L; bio: L; photo: string; linkedin: string }[] = [
  {
    name: { ar: 'عبدالرحمن أمين', en: 'Abdulrahman Ameen' },
    role: { ar: 'المدير العام', en: 'General Manager' },
    bio: {
      ar: 'يقود STL Global Forwarding ويشرف على العمليات والعلاقات مع العملاء والشركاء الدوليين.',
      en: 'Leads STL Global Forwarding and oversees operations and relationships with clients and international partners.',
    },
    photo: '',
    linkedin: '',
  },
];

// ============================================================================
//  الثقة: شعارات العملاء وآراؤهم — بعد أخذ موافقة العملاء. الفارغ يُخفي القسم
// ============================================================================
export const clientLogos: { name: string; logo: string }[] = [];
export const testimonials: { quote: L; name: L; role: L; company: L }[] = [];

/** شريط الاعتمادات في الرئيسية — الفارغ يُخفيه */
export const accreditationStrip: L[] = [];

// ============================================================================
//  الوظائف الشاغرة — الفارغ يعرض نموذج التقديم العام فقط
// ============================================================================
export const jobs: { title: L; city: L; type: L }[] = [];

// ============================================================================
//  الأخبار — الفارغ يعرض رسالة "قريبًا"
// ============================================================================
export const news: { date: string; title: L; excerpt: L }[] = [];

// ============================================================================
//  جدول الإبحار — الفارغ يعرض رسالة تطلب التواصل لأقرب رحلة
// ============================================================================
export const sailings: {
  pol: string; pod: string; month: string; carrier: string; vessel: string;
  cutoff: string; etd: string; eta: string; transitDays: string;
}[] = [];

/** المسؤولية الاجتماعية */
export const csrInitiatives: L[] = [
  { ar: 'نؤمن بتأهيل الكفاءات السعودية الشابة في قطاع الشحن واللوجستيات.', en: 'We believe in developing young Saudi talent in shipping and logistics.' },
  { ar: 'نرحب بطلبات التدريب التعاوني لطلاب الجامعات في تخصصات سلاسل الإمداد.', en: 'We welcome co-op training applications from supply-chain students.' },
];
