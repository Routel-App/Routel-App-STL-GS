import type { L } from '../config/site';

export const networkIntro: L = {
  ar: 'موقع المملكة بين ثلاث قارات ميزة استراتيجية، ونحن نستثمرها. نخدم موانئ البحر الأحمر والخليج العربي، ونرتبط بشبكة شركاء تغطي {ports}+ ميناءً حول العالم.',
  en: "Saudi Arabia's position between three continents is a strategic advantage, and we make the most of it. We serve Red Sea and Arabian Gulf ports, connected to a partner network covering {ports}+ ports worldwide.",
};

export type Port = {
  slug: string;
  name: L;
  sea: 'red' | 'gulf';
  use: L;
  description: L;
  /** approximate position on the stylised map (percent of width/height) */
  map: { x: number; y: number };
  /** set to false to hide a port STL does not serve */
  show: boolean;
};

const red: L = { ar: 'البحر الأحمر', en: 'Red Sea' };
const gulf: L = { ar: 'الخليج العربي', en: 'Arabian Gulf' };
export const seaName = (s: Port['sea']) => (s === 'red' ? red : gulf);

// احذفوا أي ميناء ما تخدمونه فعليًا (أو اجعلوا show: false)
export const ports: Port[] = [
  {
    slug: 'jeddah',
    show: true,
    name: { ar: 'ميناء جدة الإسلامي', en: 'Jeddah Islamic Port' },
    sea: 'red',
    use: { ar: 'البوابة الرئيسية للواردات من آسيا وأوروبا', en: 'The main gateway for imports from Asia and Europe' },
    description: {
      ar: 'يقع ميناء جدة الإسلامي على البحر الأحمر في منتصف خطوط التجارة بين الشرق والغرب، وهو البوابة الرئيسية لواردات المملكة من آسيا وأوروبا. نقدم فيه خدمات الحجز والتخليص الجمركي وسحب الحاويات والنقل إلى مختلف مدن المملكة.',
      en: 'Located on the Red Sea along the East–West trade lanes, Jeddah Islamic Port is the main gateway for Saudi imports from Asia and Europe. We provide bookings, customs clearance, container haulage and onward delivery across the Kingdom.',
    },
    map: { x: 22, y: 66 },
  },
  {
    slug: 'dammam',
    show: true,
    name: { ar: 'ميناء الملك عبدالعزيز بالدمام', en: 'King Abdulaziz Port, Dammam' },
    sea: 'gulf',
    use: { ar: 'واردات المنطقة الشرقية والرياض', en: 'Imports for the Eastern Province and Riyadh' },
    description: {
      ar: 'ميناء الملك عبدالعزيز بالدمام على الخليج العربي هو المنفذ البحري الرئيسي للمنطقة الشرقية والرياض. نتولى فيه التخليص والنقل الداخلي للحاويات حتى مستودعك.',
      en: 'King Abdulaziz Port in Dammam on the Arabian Gulf is the main maritime gateway for the Eastern Province and Riyadh. We handle clearance and inland haulage to your warehouse.',
    },
    map: { x: 73, y: 36 },
  },
  {
    slug: 'jubail',
    show: true,
    name: { ar: 'ميناء الجبيل التجاري وميناء الملك فهد الصناعي', en: 'Jubail Commercial Port & King Fahd Industrial Port' },
    sea: 'gulf',
    use: { ar: 'البتروكيماويات والمواد الصناعية', en: 'Petrochemicals and industrial materials' },
    description: {
      ar: 'يخدم ميناءا الجبيل المدينة الصناعية ومصانع البتروكيماويات. نقدم فيهما شحن المواد الخطرة والمعدات الثقيلة والمواد الصناعية.',
      en: 'The Jubail ports serve the industrial city and its petrochemical plants. We provide dangerous goods, heavy equipment and industrial materials shipping there.',
    },
    map: { x: 70, y: 30 },
  },
  {
    slug: 'yanbu',
    show: true,
    name: { ar: 'ميناء ينبع التجاري وميناء الملك فهد الصناعي', en: 'Yanbu Commercial Port & King Fahd Industrial Port' },
    sea: 'red',
    use: { ar: 'الصناعة والمواد البترولية', en: 'Industry and petroleum products' },
    description: {
      ar: 'يخدم ميناءا ينبع المنطقة الصناعية على البحر الأحمر والمواد البترولية. نقدم فيهما خدمات الشحن الصناعي ولوجستيات المشاريع.',
      en: 'The Yanbu ports serve the Red Sea industrial zone and petroleum products. We provide industrial shipping and project logistics there.',
    },
    map: { x: 17, y: 49 },
  },
  {
    slug: 'jazan',
    show: true,
    name: { ar: 'ميناء جازان', en: 'Jazan Port' },
    sea: 'red',
    use: { ar: 'المنطقة الجنوبية والمشاريع الصناعية', en: 'The southern region and industrial projects' },
    description: {
      ar: 'ميناء جازان بوابة المنطقة الجنوبية على البحر الأحمر ويخدم المشاريع الصناعية في المنطقة.',
      en: 'Jazan Port is the Red Sea gateway to the southern region, serving industrial projects in the area.',
    },
    map: { x: 37, y: 93 },
  },
  {
    slug: 'duba',
    show: true,
    name: { ar: 'ميناء ضباء', en: 'Duba Port' },
    sea: 'red',
    use: { ar: 'خدمة منطقة نيوم والشمال الغربي', en: 'Serving NEOM and the northwest' },
    description: {
      ar: 'ميناء ضباء على البحر الأحمر يخدم منطقة نيوم والشمال الغربي من المملكة، ويدعم توريد مواد ومعدات المشاريع الكبرى في المنطقة.',
      en: 'Duba Port on the Red Sea serves NEOM and the northwest of the Kingdom, supporting the supply of materials and equipment for giga-projects in the region.',
    },
    map: { x: 6, y: 29 },
  },
];

export const visiblePorts = () => ports.filter((p) => p.show);

// ============================================================================
//  المسارات التجارية الدولية وصفحات "الشحن من [الدولة] إلى السعودية"
// ============================================================================
export type Region = 'asia' | 'europe' | 'americas' | 'africa-me';

export const regions: Record<Region, L> = {
  asia: { ar: 'آسيا', en: 'Asia' },
  europe: { ar: 'أوروبا', en: 'Europe' },
  americas: { ar: 'الأمريكتان', en: 'The Americas' },
  'africa-me': { ar: 'أفريقيا والشرق الأوسط', en: 'Africa & Middle East' },
};

export type Country = {
  slug: string;
  region: Region;
  name: L;
  ports: L[];
  /** المدة التقريبية حسب بيانات STL */
  transit: L;
  /** نصائح سابر للمنتجات الشائعة من هذه الدولة */
  saberTips: L;
  show: boolean;
};

const transit: L = { ar: '[حسب بيانات STL] يومًا تقريبًا', en: '[per STL data] days approx.' };
const tips = (ar: string, en: string): L => ({ ar, en });

export const countries: Country[] = [
  { slug: 'china', region: 'asia', show: true, name: { ar: 'الصين', en: 'China' },
    ports: [{ ar: 'شنغهاي', en: 'Shanghai' }, { ar: 'نينغبو', en: 'Ningbo' }, { ar: 'شنتشن', en: 'Shenzhen' }, { ar: 'تشينغداو', en: 'Qingdao' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من الصين: الإلكترونيات، الأجهزة الكهربائية، ألعاب الأطفال...]', '[SABER tips for common products from China: electronics, electrical appliances, toys...]') },
  { slug: 'india', region: 'asia', show: true, name: { ar: 'الهند', en: 'India' },
    ports: [{ ar: 'نافا شيفا', en: 'Nhava Sheva' }, { ar: 'موندرا', en: 'Mundra' }, { ar: 'تشيناي', en: 'Chennai' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من الهند]', '[SABER tips for common products from India]') },
  { slug: 'vietnam', region: 'asia', show: true, name: { ar: 'فيتنام', en: 'Vietnam' },
    ports: [{ ar: 'هو تشي منه', en: 'Ho Chi Minh City' }, { ar: 'هاي فونغ', en: 'Hai Phong' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من فيتنام]', '[SABER tips for common products from Vietnam]') },
  { slug: 'malaysia', region: 'asia', show: true, name: { ar: 'ماليزيا', en: 'Malaysia' },
    ports: [{ ar: 'بورت كلانغ', en: 'Port Klang' }, { ar: 'تانجونغ بيليباس', en: 'Tanjung Pelepas' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من ماليزيا]', '[SABER tips for common products from Malaysia]') },
  { slug: 'south-korea', region: 'asia', show: true, name: { ar: 'كوريا الجنوبية', en: 'South Korea' },
    ports: [{ ar: 'بوسان', en: 'Busan' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من كوريا]', '[SABER tips for common products from Korea]') },
  { slug: 'germany', region: 'europe', show: true, name: { ar: 'ألمانيا', en: 'Germany' },
    ports: [{ ar: 'هامبورغ', en: 'Hamburg' }, { ar: 'بريمرهافن', en: 'Bremerhaven' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من ألمانيا: الآلات، قطع غيار السيارات...]', '[SABER tips for common products from Germany: machinery, auto parts...]') },
  { slug: 'netherlands', region: 'europe', show: true, name: { ar: 'هولندا', en: 'Netherlands' },
    ports: [{ ar: 'روتردام', en: 'Rotterdam' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من هولندا]', '[SABER tips for common products from the Netherlands]') },
  { slug: 'belgium', region: 'europe', show: true, name: { ar: 'بلجيكا', en: 'Belgium' },
    ports: [{ ar: 'أنتويرب', en: 'Antwerp' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من بلجيكا]', '[SABER tips for common products from Belgium]') },
  { slug: 'italy', region: 'europe', show: true, name: { ar: 'إيطاليا', en: 'Italy' },
    ports: [{ ar: 'جنوة', en: 'Genoa' }, { ar: 'لا سبيتسيا', en: 'La Spezia' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من إيطاليا]', '[SABER tips for common products from Italy]') },
  { slug: 'spain', region: 'europe', show: true, name: { ar: 'إسبانيا', en: 'Spain' },
    ports: [{ ar: 'فالنسيا', en: 'Valencia' }, { ar: 'برشلونة', en: 'Barcelona' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من إسبانيا]', '[SABER tips for common products from Spain]') },
  { slug: 'turkey', region: 'europe', show: true, name: { ar: 'تركيا', en: 'Türkiye' },
    ports: [{ ar: 'مرسين', en: 'Mersin' }, { ar: 'إسطنبول (أمبارلي)', en: 'Istanbul (Ambarli)' }, { ar: 'إزمير', en: 'Izmir' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من تركيا: الأثاث، المنسوجات، مواد البناء...]', '[SABER tips for common products from Türkiye: furniture, textiles, building materials...]') },
  { slug: 'usa', region: 'americas', show: true, name: { ar: 'الولايات المتحدة', en: 'United States' },
    ports: [{ ar: 'نيويورك/نيوجيرسي', en: 'New York/New Jersey' }, { ar: 'سافانا', en: 'Savannah' }, { ar: 'هيوستن', en: 'Houston' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من الولايات المتحدة]', '[SABER tips for common products from the US]') },
  { slug: 'canada', region: 'americas', show: true, name: { ar: 'كندا', en: 'Canada' },
    ports: [{ ar: 'فانكوفر', en: 'Vancouver' }, { ar: 'مونتريال', en: 'Montreal' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من كندا]', '[SABER tips for common products from Canada]') },
  { slug: 'brazil', region: 'americas', show: true, name: { ar: 'البرازيل', en: 'Brazil' },
    ports: [{ ar: 'سانتوس', en: 'Santos' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من البرازيل]', '[SABER tips for common products from Brazil]') },
  { slug: 'egypt', region: 'africa-me', show: true, name: { ar: 'مصر', en: 'Egypt' },
    ports: [{ ar: 'الإسكندرية', en: 'Alexandria' }, { ar: 'بورسعيد', en: 'Port Said' }, { ar: 'العين السخنة', en: 'Sokhna' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من مصر]', '[SABER tips for common products from Egypt]') },
  { slug: 'djibouti', region: 'africa-me', show: true, name: { ar: 'جيبوتي', en: 'Djibouti' },
    ports: [{ ar: 'جيبوتي', en: 'Djibouti' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من جيبوتي]', '[SABER tips for common products from Djibouti]') },
  { slug: 'kenya', region: 'africa-me', show: true, name: { ar: 'كينيا', en: 'Kenya' },
    ports: [{ ar: 'مومباسا', en: 'Mombasa' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من كينيا]', '[SABER tips for common products from Kenya]') },
  { slug: 'gcc', region: 'africa-me', show: true, name: { ar: 'دول الخليج', en: 'GCC Countries' },
    ports: [{ ar: 'جبل علي (الإمارات)', en: 'Jebel Ali (UAE)' }, { ar: 'صحار (عُمان)', en: 'Sohar (Oman)' }, { ar: 'حمد (قطر)', en: 'Hamad (Qatar)' }],
    transit, saberTips: tips('[نصائح سابر للمنتجات الشائعة من دول الخليج]', '[SABER tips for common products from the GCC]') },
];

export const visibleCountries = () => countries.filter((c) => c.show);

/** Documents typically required for import clearance (shown on country pages) */
export const importDocs: L[] = [
  { ar: 'الفاتورة التجارية (Commercial Invoice)', en: 'Commercial Invoice' },
  { ar: 'قائمة التعبئة (Packing List)', en: 'Packing List' },
  { ar: 'بوليصة الشحن (Bill of Lading)', en: 'Bill of Lading (B/L)' },
  { ar: 'شهادة المنشأ (Certificate of Origin)', en: 'Certificate of Origin' },
  { ar: 'شهادات المطابقة عبر منصة سابر (للمنتجات الخاضعة)', en: 'SABER conformity certificates (for regulated products)' },
  { ar: 'متطلبات هيئة الغذاء والدواء (للأغذية والأدوية ومستحضرات التجميل)', en: 'SFDA requirements (food, pharma and cosmetics)' },
];
