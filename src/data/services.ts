import type { L } from '../config/site';
import { oceanServices } from './svc/ocean';
import { projectServices } from './svc/projects';
import { logisticsServices } from './svc/logistics';
import { marineServices } from './svc/marine';

export type CategorySlug =
  | 'ocean-freight'
  | 'liquid-chemicals'
  | 'vehicle-shipping'
  | 'projects-heavy-lift'
  | 'air-freight'
  | 'customs-clearance'
  | 'land-logistics'
  | 'events-exhibitions'
  | 'marine-services'
  | 'ship-agency';

/** A service page. Each page groups one or more services (shown as sections on the page). */
export type ServiceCategory = {
  slug: CategorySlug;
  icon: string;
  /** short code shown in menus/cards */
  code: string;
  title: L;
  short: L;
  intro: L;
  /** brand illustration motif used when no photo is set */
  art: 'ship' | 'crane' | 'plane' | 'truck' | 'event' | 'marine';
};

export type Service = {
  slug: string;
  category: CategorySlug;
  icon: string;
  title: L;
  code?: string;
  short: L;
  intro: L;
  /** what's included */
  offer: L[];
  /** cargo / vessel / equipment types handled (optional chips) */
  scope?: L[];
  benefits: L[];
  /** optional 3–4 step process */
  steps?: { title: L; text: L }[];
  faq: { q: L; a: L }[];
  /** show on the home page */
  featured?: boolean;
  /** quote form preset (FCL | LCL | BREAKBULK | REEFER | RORO) */
  quoteMode?: string;
  /** optional photo: put the file in public/images/services/ and write '/images/services/<file>.jpg' */
  photo?: string;
};

export const servicesIntro: L = {
  ar: 'من حاوية واحدة إلى معدات تزن مئات الأطنان، ومن تخليص شحنتك في الميناء إلى تزويد السفينة بالمؤن والوقود عند الرصيف: حلول بحرية وبرية وجوية متكاملة من جهة واحدة.',
  en: 'From a single container to equipment weighing hundreds of tonnes, and from clearing your cargo at the port to supplying the vessel with provisions and fuel at berth: integrated sea, land and air solutions from one provider.',
};

export const categories: ServiceCategory[] = [
  {
    slug: 'ocean-freight',
    icon: 'ship',
    code: 'SEA',
    art: 'ship',
    title: { ar: 'الشحن البحري', en: 'Ocean Freight' },
    short: {
      ar: 'حاويات كاملة ومجمّعة، وشحن مبرد، وبضائع خطرة، مع تأمين البضائع، عبر أهم الخطوط الملاحية.',
      en: 'Full and consolidated containers, reefer and dangerous goods, with cargo insurance, on the major shipping lines.',
    },
    intro: {
      ar: 'شحن بحري دولي (Freight Forwarding) للاستيراد والتصدير عبر موانئ جدة والدمام والجبيل وينبع والملك عبدالله: نختار الخط الملاحي والمسار المناسبين لبضاعتك، ونحجز، ونجهز المستندات، ونتابع حتى التسليم.',
      en: 'International ocean freight forwarding for import and export via Jeddah, Dammam, Jubail, Yanbu and King Abdullah Port: we pick the right carrier and routing for your cargo, book, prepare the documents and follow through to delivery.',
    },
  },
  {
    slug: 'liquid-chemicals',
    icon: 'tank',
    code: 'ISO',
    art: 'ship',
    title: { ar: 'شحن الكيماويات والسوائل', en: 'Liquid Chemicals & Bulk Liquids' },
    short: {
      ar: 'خزانات ISO وأكياس مرنة وبراميل وحاويات وسيطة للكيماويات والسوائل الغذائية والصناعية.',
      en: 'ISO tanks, flexitanks, drums and IBCs for chemical, food-grade and industrial liquids.',
    },
    intro: {
      ar: 'لوجستيات متخصصة لسلاسل إمداد الكيماويات والسوائل: نختار وسيلة التعبئة الأنسب لكل منتج، ونراجع صحائف بيانات السلامة، ونتأكد من نظافة الخزانات قبل التحميل، ونوصل حتى خزان المصنع.',
      en: 'Specialised logistics for chemical and liquid supply chains: we choose the right packaging for each product, review safety data sheets, verify tank cleanliness before loading and deliver to the plant tank.',
    },
  },
  {
    slug: 'vehicle-shipping',
    icon: 'car',
    code: 'VEH',
    art: 'event',
    title: { ar: 'شحن السيارات والمركبات', en: 'Vehicle Shipping' },
    short: {
      ar: 'شحن RoRo والحاويات للسيارات والشاحنات والمعدات المتحركة، ولوجستيات السيارات الرياضية والفاخرة.',
      en: 'RoRo and containerised shipping for cars, trucks and rolling equipment, plus sports and luxury car logistics.',
    },
    intro: {
      ar: 'من أسطول سيارات لشركة تأجير إلى سيارة رياضية لفعالية أو سباق: نختار بين سفن RoRo والحاويات حسب نوع المركبة وقيمتها، ونتولى التخليص والنقل حتى التسليم.',
      en: 'From a rental fleet to a supercar for a show or a race: we choose between RoRo vessels and containers by vehicle type and value, and handle clearance and transport through to delivery.',
    },
  },
  {
    slug: 'projects-heavy-lift',
    icon: 'crane',
    code: 'PRJ',
    art: 'crane',
    title: { ar: 'المشاريع والرفع الثقيل', en: 'Projects & Heavy Lift' },
    short: {
      ar: 'شحنات المشاريع، والمعدات الثقيلة والضخمة، والبضائع السائبة، والبضائع الصبّة.',
      en: 'Project cargo, heavy and oversized equipment, break bulk and dry bulk.',
    },
    intro: {
      ar: 'للشحنات التي لا تدخل في حاوية: هندسة نقل، ومسح للمسارات، وخطط رفع، وسفن رفع ثقيل، وتنسيق كامل من المصنع إلى موقع المشروع.',
      en: "For cargo that won't fit in a box: transport engineering, route surveys, lift plans, heavy-lift vessels and full coordination from the factory to the project site.",
    },
  },
  {
    slug: 'air-freight',
    icon: 'plane',
    code: 'AIR',
    art: 'plane',
    title: { ar: 'الشحن الجوي', en: 'Air Freight' },
    short: {
      ar: 'شحنات المشاريع والمعدات العاجلة جوًا، وقطع الطيران الحرجة. لا نتعامل مع الطرود الصغيرة.',
      en: 'Urgent project equipment by air and critical aerospace parts. We do not handle small parcels.',
    },
    intro: {
      ar: 'حين يكون الوقت أغلى من تكلفة الشحن: نشحن المعدات الثقيلة والضخمة وقطع الغيار الحرجة جوًا، وننسق التصاريح والمناولة في المطارين.',
      en: 'When time costs more than freight: we move heavy and oversized equipment and critical spares by air, coordinating permits and handling at both airports.',
    },
  },
  {
    slug: 'customs-clearance',
    icon: 'stamp',
    code: 'CC',
    art: 'truck',
    title: { ar: 'التخليص الجمركي وسابر', en: 'Customs Clearance & SABER' },
    short: {
      ar: 'تخليص الاستيراد والتصدير، وشهادات سابر، والإدخال المؤقت، والعبور عبر المنافذ البرية.',
      en: 'Import and export clearance, SABER certificates, temporary import and land-border transit.',
    },
    intro: {
      ar: 'نخلّص شحنتك بسرعة ودون مفاجآت: تصنيف جمركي صحيح، ومستندات مكتملة، وشهادات المطابقة عبر منصة سابر، وتنسيق مع الجهات الرقابية في الموانئ والمنافذ البرية.',
      en: 'We clear your cargo fast and without surprises: correct tariff classification, complete documents, conformity certificates via SABER, and coordination with the authorities at ports and land borders.',
    },
  },
  {
    slug: 'land-logistics',
    icon: 'truck',
    code: 'LOG',
    art: 'truck',
    title: { ar: 'النقل البري والتخزين', en: 'Trucking & Storage' },
    short: {
      ar: 'نقل بري داخل المملكة والخليج، ومستودعات، وساحات حاويات، وتعبئة وتفريغ الحاويات.',
      en: 'Trucking across KSA and the GCC, warehousing, container yards, stuffing and unstuffing.',
    },
    intro: {
      ar: 'الحلقة التي تكمل الشحن بعد الميناء: نسحب الحاوية، ونخزّن، ونعبئ ونفرغ، ونوصل إلى موقعك بكل أنواع الشاحنات.',
      en: 'The link that completes the shipment after the port: we haul the container, store, stuff and unstuff, and deliver to your site with every type of truck.',
    },
  },
  {
    slug: 'events-exhibitions',
    icon: 'event',
    code: 'EVT',
    art: 'event',
    title: { ar: 'لوجستيات الفعاليات والمعارض', en: 'Events & Exhibitions Logistics' },
    short: {
      ar: 'شحن المعارض والحفلات والمؤتمرات، والإدخال المؤقت، والتسليم للموقع في الموعد، وإعادة التصدير.',
      en: 'Exhibition, concert and conference freight, temporary import, on-time venue delivery and re-export.',
    },
    intro: {
      ar: 'شحنات لها موعد افتتاح لا يتأخر: معدات مسارح وبث ومعروضات تصل من دول متعددة. نخطط بالساعة، وندير الإدخال المؤقت، ونسلّم للموقع حسب الموعد، ثم نعيد التصدير بعد انتهاء الحدث.',
      en: "Shipments with an opening date that can't slip: stage, broadcast and display equipment arriving from many countries. We plan by the hour, manage temporary import, deliver to the venue on slot and re-export after the event.",
    },
  },
  {
    slug: 'marine-services',
    icon: 'anchor',
    code: 'MAR',
    art: 'marine',
    title: { ar: 'الخدمات البحرية', en: 'Marine Services' },
    short: {
      ar: 'تموين السفن، والتزويد بالوقود، والتنظيف، والخدمات الفنية، ومناولة الأصول البحرية، وتأجير الوحدات البحرية، واليخوت، والدعم البحري.',
      en: 'Ship chandling, bunkering, cleaning, technical services, marine asset handling, marine craft hire, yachts and offshore support.',
    },
    intro: {
      ar: 'كل ما تحتاجه السفينة وطاقمها أثناء توقفها في الموانئ السعودية: مؤن وتموين، ووقود وزيوت، وتنظيف، وخدمات فنية، وتأجير قوارب وقاطرات وصنادل. خدمة على مدار الساعة.',
      en: 'Everything a vessel and her crew need while calling Saudi ports: provisions and stores, fuel and lubricants, cleaning, technical services and hire of boats, tugs and barges. Around the clock.',
    },
  },
  {
    slug: 'ship-agency',
    icon: 'flag',
    code: 'AGY',
    art: 'marine',
    title: { ar: 'الوكالة الملاحية والطواقم', en: 'Ship Agency & Crew' },
    short: {
      ar: 'وكالة ملاحية كاملة وحمائية، وتغيير الطواقم ورعايتهم، والإشراف على الشحنات وخدمات ربان الميناء.',
      en: 'Full and protective ship agency, crew changes and crew care, cargo supervision and port captaincy.',
    },
    intro: {
      ar: 'نمثل الملاك والمستأجرين والمشغلين أمام الموانئ والجهات الرسمية، ونتابع السفينة من أول إشعار حتى المغادرة، ونرتب تغيير الطواقم وتأشيراتهم، ونشرف على عمليات الشحن نيابة عنك.',
      en: 'We represent owners, charterers and operators before ports and authorities, follow the vessel from first notice to departure, arrange crew changes and visas, and supervise cargo operations on your behalf.',
    },
  },
];

export const services: Service[] = [...oceanServices, ...projectServices, ...logisticsServices, ...marineServices];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const servicesIn = (cat: CategorySlug) => services.filter((s) => s.category === cat);

/** Link to a service: its page, plus an anchor when the page holds several services. */
export const serviceHref = (s: Service) => (servicesIn(s.category).length > 1 ? `/services/${s.category}#${s.slug}` : `/services/${s.category}`);

/** Old URLs (before services were merged into pages) → new location. Used for redirects. */
export const legacyServiceRedirects: Record<string, string> = {
  ...Object.fromEntries(services.filter((s) => s.slug !== s.category).map((s) => [s.slug, serviceHref(s)])),
  ocean: '/services/ocean-freight',
  projects: '/services/projects-heavy-lift',
  air: '/services/air-freight',
  logistics: '/services/land-logistics',
  special: '/services/vehicle-shipping',
  marine: '/services/marine-services',
  chartering: '/services/projects-heavy-lift',
  'air-charter': '/services/air-freight',
};
