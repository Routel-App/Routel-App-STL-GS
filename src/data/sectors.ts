import type { L } from '../config/site';

export type Sector = {
  slug: string;
  icon: string;
  title: L;
  challenge: L;
  challengeLong: L;
  solution: L[];
  services: string[];
  successStory: L;
};

export const sectorsIntro: L = {
  ar: 'لكل قطاع تحدياته في الشحن. نفهم متطلبات قطاعك ونصمم الحل المناسب له.',
  en: 'Every sector has its own shipping challenges. We understand your industry and design the right solution for it.',
};

const story: L = {
  ar: '[قصة نجاح قصيرة من عملاء STL في هذا القطاع: التحدي، ما قدمناه، والنتيجة بالأرقام]',
  en: '[A short STL client success story in this sector: the challenge, what we delivered, and the measurable result]',
};

export const sectors: Sector[] = [
  {
    slug: 'retail-ecommerce',
    icon: 'cart',
    title: { ar: 'التجزئة والتجارة الإلكترونية', en: 'Retail & E-commerce' },
    challenge: { ar: 'مواسم ذروة، تنوع أصناف، سرعة تجديد المخزون', en: 'Peak seasons, wide SKU variety, fast inventory replenishment' },
    challengeLong: {
      ar: 'مواسم الذروة مثل رمضان والجمعة البيضاء والعودة للمدارس تضغط على سلسلة الإمداد. تنوع الأصناف وتعدد الموردين يجعل الشحن معقدًا، وأي تأخير في تجديد المخزون يعني مبيعات ضائعة.',
      en: 'Peak seasons such as Ramadan, White Friday and back-to-school strain the supply chain. Wide SKU ranges and multiple suppliers complicate shipping, and any delay in replenishment means lost sales.',
    },
    solution: [
      { ar: 'شحن مجمّع منتظم', en: 'Regular LCL consolidation' },
      { ar: 'تخزين قرب الموانئ', en: 'Storage near the ports' },
      { ar: 'توزيع داخلي', en: 'Inland distribution' },
    ],
    services: ['lcl', 'warehousing-distribution', 'inland-transport', 'customs-clearance-saber'],
    successStory: story,
  },
  {
    slug: 'food-beverage',
    icon: 'food',
    title: { ar: 'الأغذية والمشروبات', en: 'Food & Beverage' },
    challenge: { ar: 'سلسلة تبريد، اشتراطات هيئة الغذاء والدواء، صلاحية محدودة', en: 'Cold chain, SFDA requirements, limited shelf life' },
    challengeLong: {
      ar: 'المنتجات الغذائية تحتاج سلسلة تبريد لا تنقطع، واشتراطات هيئة الغذاء والدواء دقيقة، والصلاحية المحدودة تجعل كل يوم تأخير في الميناء خسارة مباشرة.',
      en: 'Food products need an unbroken cold chain, SFDA requirements are precise, and limited shelf life makes every day of port delay a direct loss.',
    },
    solution: [
      { ar: 'حاويات مبردة', en: 'Reefer containers' },
      { ar: 'تقرير حرارة', en: 'Temperature reports' },
      { ar: 'تخليص سريع للمواد الغذائية', en: 'Fast clearance for food items' },
    ],
    services: ['reefer', 'customs-clearance-saber', 'inland-transport', 'warehousing-distribution'],
    successStory: story,
  },
  {
    slug: 'pharma-healthcare',
    icon: 'pill',
    title: { ar: 'الأدوية والرعاية الصحية', en: 'Pharma & Healthcare' },
    challenge: { ar: 'حساسية الحرارة، توثيق صارم، أجهزة طبية عالية القيمة', en: 'Temperature sensitivity, strict documentation, high-value medical devices' },
    challengeLong: {
      ar: 'الأدوية واللقاحات حساسة للحرارة، والتوثيق المطلوب صارم، والأجهزة الطبية عالية القيمة تحتاج مناولة دقيقة وتأمينًا مناسبًا.',
      en: 'Medicines and vaccines are temperature-sensitive, documentation requirements are strict, and high-value medical devices need careful handling and proper insurance.',
    },
    solution: [
      { ar: 'تبريد مراقب', en: 'Monitored refrigeration' },
      { ar: 'مناولة خاصة', en: 'Special handling' },
      { ar: 'امتثال لمتطلبات SFDA', en: 'SFDA compliance' },
    ],
    services: ['reefer', 'customs-clearance-saber', 'marine-cargo-insurance', 'warehousing-distribution'],
    successStory: story,
  },
  {
    slug: 'construction-megaprojects',
    icon: 'building',
    title: { ar: 'البناء والمشاريع الكبرى', en: 'Construction & Giga-projects' },
    challenge: { ar: 'مواد ضخمة، جداول زمنية حرجة، توريد من دول متعددة', en: 'Oversized materials, critical timelines, multi-country sourcing' },
    challengeLong: {
      ar: 'المشاريع الكبرى تعتمد على مواد ومعدات ضخمة تصل من دول متعددة، وأي تأخير في شحنة واحدة قد يوقف جدولًا زمنيًا كاملًا.',
      en: 'Major projects depend on oversized materials and equipment arriving from several countries — a delay in a single shipment can stall an entire schedule.',
    },
    solution: [
      { ar: 'لوجستيات مشاريع', en: 'Project logistics' },
      { ar: 'بضائع سائبة', en: 'Break bulk' },
      { ar: 'تنسيق متعدد المنشأ', en: 'Multi-origin coordination' },
    ],
    services: ['break-bulk-project-cargo', 'fcl', 'inland-transport', 'marine-cargo-insurance'],
    successStory: story,
  },
  {
    slug: 'oil-gas-petrochemicals',
    icon: 'flame',
    title: { ar: 'النفط والغاز والبتروكيماويات', en: 'Oil, Gas & Petrochemicals' },
    challenge: { ar: 'مواد خطرة، معدات ثقيلة، متطلبات اعتماد الموردين', en: 'Dangerous goods, heavy equipment, vendor approval requirements' },
    challengeLong: {
      ar: 'القطاع يتعامل مع مواد خطرة ومعدات ثقيلة، ويتطلب اعتمادات موردين ومعايير سلامة عالية في كل مرحلة.',
      en: 'The sector handles dangerous goods and heavy equipment, and requires vendor approvals and high safety standards at every stage.',
    },
    solution: [
      { ar: 'شحن DG', en: 'DG shipping' },
      { ar: 'خزانات ISO', en: 'ISO tanks' },
      { ar: 'فرق سلامة مدربة', en: 'Trained safety teams' },
    ],
    services: ['dangerous-goods', 'break-bulk-project-cargo', 'customs-clearance-saber', 'marine-cargo-insurance'],
    successStory: story,
  },
  {
    slug: 'automotive-spare-parts',
    icon: 'car',
    title: { ar: 'السيارات وقطع الغيار', en: 'Automotive & Spare Parts' },
    challenge: { ar: 'مركبات بأحجام مختلفة، قطع عاجلة لخطوط الإنتاج', en: 'Vehicles of all sizes, urgent parts for production lines' },
    challengeLong: {
      ar: 'شحن مركبات بأحجام وقيم مختلفة، مع قطع غيار عاجلة لا تحتمل التأخير لأنها توقف خطوط إنتاج أو ورش صيانة.',
      en: 'Shipping vehicles of different sizes and values, along with urgent spare parts that cannot wait because they halt production lines or workshops.',
    },
    solution: [
      { ar: 'شحن RoRo', en: 'RoRo shipping' },
      { ar: 'حاويات', en: 'Containers' },
      { ar: 'شحن عاجل', en: 'Expedited shipping' },
    ],
    services: ['roro', 'fcl', 'lcl', 'customs-clearance-saber'],
    successStory: story,
  },
  {
    slug: 'industrial-manufacturing',
    icon: 'factory',
    title: { ar: 'الصناعة والتصنيع', en: 'Industry & Manufacturing' },
    challenge: { ar: 'مواد خام واردة ومنتجات مصدّرة، كميات كبيرة', en: 'Inbound raw materials, outbound exports, large volumes' },
    challengeLong: {
      ar: 'المصانع تحتاج تدفقًا منتظمًا للمواد الخام الواردة وقنوات تصدير موثوقة لمنتجاتها، بكميات كبيرة وتكاليف قابلة للتنبؤ.',
      en: 'Factories need a steady inflow of raw materials and reliable export channels for their products, at large volumes and predictable costs.',
    },
    solution: [
      { ar: 'حاويات كاملة', en: 'Full container loads' },
      { ar: 'عقود سنوية بأسعار ثابتة', en: 'Annual contracts with fixed rates' },
      { ar: 'دعم التصدير', en: 'Export support' },
    ],
    services: ['fcl', 'customs-clearance-saber', 'inland-transport', 'warehousing-distribution'],
    successStory: story,
  },
];
