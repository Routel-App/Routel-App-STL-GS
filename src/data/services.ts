import type { L } from '../config/site';
import { oceanServices } from './svc/ocean';
import { projectServices } from './svc/projects';
import { logisticsServices } from './svc/logistics';
import { marineServices } from './svc/marine';

export type CategorySlug = 'ocean' | 'projects' | 'air' | 'logistics' | 'special' | 'marine';

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
  ar: 'من حاوية واحدة إلى مشروع بمعدات تزن مئات الأطنان، ومن تخليص شحنتك في الميناء إلى تزويد السفينة بالمؤن والوقود عند الرصيف: ست وحدات أعمال تغطي سلسلة الإمداد البحرية والبرية والجوية من جهة واحدة.',
  en: 'From a single container to a project with equipment weighing hundreds of tonnes, and from clearing your cargo at the port to supplying the vessel with provisions and fuel at berth: six business units covering the sea, land and air supply chain from one provider.',
};

export const categories: ServiceCategory[] = [
  {
    slug: 'ocean',
    icon: 'ship',
    code: 'SEA',
    art: 'ship',
    title: { ar: 'الشحن البحري', en: 'Ocean Freight' },
    short: {
      ar: 'حاويات كاملة ومجمعة، ومبردة، وكيماويات سائلة، وبضائع خطرة، وسيارات، عبر أهم الخطوط الملاحية.',
      en: 'Full and consolidated containers, reefer, liquid chemicals, dangerous goods and vehicles on the major shipping lines.',
    },
    intro: {
      ar: 'شحن بحري دولي (Freight Forwarding) للاستيراد والتصدير عبر موانئ جدة والدمام والجبيل وينبع: نختار الخط الملاحي والمسار المناسبين لبضاعتك، ونحجز، ونجهز المستندات، ونتابع حتى التسليم.',
      en: 'International ocean freight forwarding for import and export via Jeddah, Dammam, Jubail and Yanbu: we pick the right carrier and routing for your cargo, book, prepare the documents and follow through to delivery.',
    },
  },
  {
    slug: 'projects',
    icon: 'crane',
    code: 'PRJ',
    art: 'crane',
    title: { ar: 'المشاريع والرفع الثقيل', en: 'Projects & Heavy Lift' },
    short: {
      ar: 'شحنات المشاريع، والبضائع السائبة، والمعدات الثقيلة والضخمة، واستئجار السفن للشحنات الكاملة.',
      en: 'Project cargo, break bulk, heavy and oversized equipment, and vessel chartering for full shipments.',
    },
    intro: {
      ar: 'للشحنات التي لا تدخل في حاوية: هندسة نقل، ومسح للمسارات، واستئجار سفن، ورفع ثقيل، وتنسيق كامل من المصنع إلى موقع المشروع.',
      en: "For cargo that won't fit in a box: transport engineering, route surveys, vessel chartering, heavy lifting and full coordination from the factory to the project site.",
    },
  },
  {
    slug: 'air',
    icon: 'plane',
    code: 'AIR',
    art: 'plane',
    title: { ar: 'الشحن الجوي', en: 'Air Freight' },
    short: {
      ar: 'تأجير طائرات شحن كاملة، وشحنات المشاريع والمعدات العاجلة جوًا. لا نتعامل مع الطرود الصغيرة.',
      en: 'Full freighter charters and air project cargo for urgent equipment. We do not handle small parcels.',
    },
    intro: {
      ar: 'حين يكون الوقت أغلى من تكلفة الشحن: نستأجر طائرة الشحن المناسبة لحمولتك، وننسق التصاريح والمناولة في المطارين، لقطع الغيار الحرجة ومعدات المشاريع والشحنات الكبيرة العاجلة.',
      en: 'When time costs more than freight: we charter the right freighter for your load and coordinate permits and handling at both airports, for critical spares, project equipment and large urgent shipments.',
    },
  },
  {
    slug: 'logistics',
    icon: 'truck',
    code: 'LOG',
    art: 'truck',
    title: { ar: 'التخليص والنقل والتخزين', en: 'Clearance, Trucking & Storage' },
    short: {
      ar: 'تخليص جمركي وسابر، ونقل بري داخل المملكة والخليج، وتخزين، وساحات حاويات، وتعبئة وتفريغ.',
      en: 'Customs clearance and SABER, trucking across KSA and the GCC, warehousing, container yards, stuffing and unstuffing.',
    },
    intro: {
      ar: 'الحلقة التي تكمل الشحن: نخلّص البضاعة، ونسحب الحاوية من الميناء، ونخزّن، ونعبئ ونفرغ، ونوصل إلى موقعك بأسطول شاحنات بكل الأنواع.',
      en: 'The link that completes the shipment: we clear your goods, haul the container from the port, store, stuff and unstuff, and deliver to your site with every type of truck.',
    },
  },
  {
    slug: 'special',
    icon: 'event',
    code: 'SPX',
    art: 'event',
    title: { ar: 'لوجستيات المشاريع الخاصة', en: 'Special Projects Logistics' },
    short: {
      ar: 'السيارات الرياضية والفاخرة، وسباقات السيارات، والفعاليات والمعارض والمؤتمرات.',
      en: 'Sports and luxury cars, motorsport, events, exhibitions and conferences.',
    },
    intro: {
      ar: 'شحنات لها موعد لا يتأخر وقيمة لا تحتمل الخطأ: سيارات رياضية لفعالية، أو معدات معرض، أو منصة حفل. نخطط بالساعة وننفذ بفريق مخصص.',
      en: "Shipments with a date that can't slip and a value that can't afford mistakes: supercars for a show, exhibition equipment or a concert stage. We plan by the hour and deliver with a dedicated team.",
    },
  },
  {
    slug: 'marine',
    icon: 'anchor',
    code: 'MAR',
    art: 'marine',
    title: { ar: 'الخدمات البحرية', en: 'Marine Services' },
    short: {
      ar: 'تموين السفن، والتزويد بالوقود، وتنظيف السفن، ومناولة الأصول البحرية، وتأجير الوحدات البحرية، والوكالة الملاحية.',
      en: 'Ship chandling, bunkering, vessel cleaning, marine asset handling, marine craft hire and ship agency.',
    },
    intro: {
      ar: 'كل ما تحتاجه السفينة وطاقمها أثناء توقفها في الموانئ السعودية: مؤن وتموين، ووقود وزيوت، وتنظيف، وتأجير قوارب وقاطرات وصنادل، ووكالة ملاحية وتغيير طواقم. خدمة على مدار الساعة.',
      en: 'Everything a vessel and her crew need while calling Saudi ports: provisions and stores, fuel and lubricants, cleaning, hire of boats, tugs and barges, ship agency and crew changes. Around the clock.',
    },
  },
];

export const services: Service[] = [...oceanServices, ...projectServices, ...logisticsServices, ...marineServices];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const servicesIn = (cat: CategorySlug) => services.filter((s) => s.category === cat);
