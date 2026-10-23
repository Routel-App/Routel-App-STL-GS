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

const story: L = { ar: '', en: '' };

export const sectors: Sector[] = [
  {
    slug: 'food-ingredients',
    icon: 'leaf',
    title: { ar: 'المواد الأولية للصناعات الغذائية', en: 'Food Ingredients & Raw Materials' },
    challenge: { ar: 'زيوت نباتية وكاكاو ونشا وتوابل، رطوبة وصلاحية وشهادات حلال', en: 'Vegetable oils, cocoa, starch and spices; moisture, shelf life and halal certificates' },
    challengeLong: {
      ar: 'مصانع الأغذية في المملكة تعتمد على مواد أولية تصل غالبًا من ماليزيا وإندونيسيا وتايلاند والهند: زيت النخيل ومشتقاته، والكاكاو وزبدته، والنشا المعدّل ونشا التابيوكا، ومنتجات جوز الهند، والتوابل، والسكر، والمستحلبات. هذه المواد حساسة للرطوبة والحرارة، وتحتاج تسجيلًا لدى هيئة الغذاء والدواء وشهادات حلال ومنشأ وصحة نباتية سليمة، وأي تأخير في الميناء يوقف خط إنتاج.',
      en: "The Kingdom's food manufacturers rely on raw materials that often come from Malaysia, Indonesia, Thailand and India: palm oil and its derivatives, cocoa and cocoa butter, modified and tapioca starch, coconut products, spices, sugar and emulsifiers. These materials are sensitive to moisture and heat, need SFDA registration plus valid halal, origin and phytosanitary certificates, and any delay at the port stops a production line.",
    },
    solution: [
      { ar: 'حاويات جافة ببطانات ومجففات رطوبة', en: 'Dry containers with liners and desiccants' },
      { ar: 'أكياس مرنة وخزانات ISO غذائية للزيوت', en: 'Food-grade flexitanks and ISO tanks for oils' },
      { ar: 'تخليص سريع مع هيئة الغذاء والدواء', en: 'Fast SFDA clearance' },
      { ar: 'جدولة توريد منتظمة من موانئ جنوب شرق آسيا', en: 'Regular supply schedules from Southeast Asian ports' },
    ],
    services: ['fcl', 'liquid-chemicals', 'reefer', 'customs-clearance-saber', 'warehousing-distribution'],
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
    services: ['reefer', 'liquid-chemicals', 'customs-clearance-saber', 'inland-transport', 'warehousing-distribution'],
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
    services: ['reefer', 'air-project-cargo', 'customs-clearance-saber', 'marine-cargo-insurance', 'warehousing-distribution'],
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
    services: ['project-cargo', 'heavy-lift', 'break-bulk', 'inland-transport'],
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
      { ar: 'شحن البضائع الخطرة (DG)', en: 'DG shipping' },
      { ar: 'خزانات ISO والكيماويات السائلة', en: 'ISO tanks & liquid chemicals' },
      { ar: 'فرق سلامة مدربة', en: 'Trained safety teams' },
    ],
    services: ['liquid-chemicals', 'dangerous-goods', 'heavy-lift', 'customs-clearance-saber', 'marine-cargo-insurance'],
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
    services: ['roro', 'supercar-logistics', 'fcl', 'air-project-cargo', 'customs-clearance-saber'],
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
    services: ['fcl', 'break-bulk', 'liquid-chemicals', 'customs-clearance-saber', 'inland-transport', 'container-storage'],
    successStory: story,
  },
  {
    slug: 'shipping-offshore',
    icon: 'anchor',
    title: { ar: 'ملاك السفن والعمليات البحرية', en: 'Ship Owners & Offshore' },
    challenge: { ar: 'توقف قصير في الميناء، احتياجات عاجلة، تكلفة يوم السفينة', en: 'Short port stays, urgent needs, high daily vessel cost' },
    challengeLong: {
      ar: 'كل ساعة إضافية للسفينة في الميناء لها تكلفة. الملاك والمشغلون والمستأجرون ومقاولو العمليات البحرية يحتاجون مؤنًا ووقودًا وقطع غيار وتغيير طواقم في الوقت المحدد، وبمستندات صحيحة من أول مرة.',
      en: 'Every extra hour a vessel spends in port costs money. Owners, operators, charterers and offshore contractors need provisions, fuel, spares and crew changes on time, with documents right the first time.',
    },
    solution: [
      { ar: 'تموين ووقود عند الرصيف أو المخطاف', en: 'Provisions and fuel at berth or anchorage' },
      { ar: 'وكالة ملاحية وتغيير طواقم', en: 'Ship agency and crew changes' },
      { ar: 'مناولة الأصول البحرية والدعم البحري', en: 'Marine asset handling and offshore support' },
    ],
    services: ['ship-chandling', 'bunkering', 'ship-agency-port-services', 'vessel-cleaning', 'marine-assets-handling', 'offshore-support'],
    successStory: story,
  },
  {
    slug: 'energy-renewables',
    icon: 'spark',
    title: { ar: 'الطاقة والطاقة المتجددة', en: 'Energy & Renewables' },
    challenge: { ar: 'محولات ومولدات ضخمة، شفرات رياح، مواقع نائية', en: 'Huge transformers and generators, wind blades, remote sites' },
    challengeLong: {
      ar: 'مشاريع الكهرباء والطاقة الشمسية والرياح تعتمد على معدات ثقيلة وطويلة تصل إلى مواقع بعيدة عن الموانئ، وتحتاج تخطيط مسار وتصاريح ومرافقة أمنية ورفع دقيق.',
      en: 'Power, solar and wind projects depend on heavy and long equipment travelling to sites far from the ports, requiring route planning, permits, escorts and precise lifting.',
    },
    solution: [
      { ar: 'دراسة مسار وتصاريح نقل', en: 'Route surveys and transport permits' },
      { ar: 'سفن رفع ثقيل', en: 'Heavy-lift vessels' },
      { ar: 'نقل بري بمقطورات هيدروليكية', en: 'Hydraulic modular trailers on land' },
    ],
    services: ['heavy-lift', 'project-cargo', 'break-bulk', 'inland-transport'],
    successStory: story,
  },
  {
    slug: 'events-exhibitions',
    icon: 'event',
    title: { ar: 'الفعاليات والمعارض', en: 'Events & Exhibitions' },
    challenge: { ar: 'مواعيد افتتاح لا تتأخر، إدخال مؤقت، إعادة تصدير', en: "Opening dates that can't slip, temporary import, re-export" },
    challengeLong: {
      ar: 'مع نمو قطاع الفعاليات والترفيه والمعارض في المملكة، تصل معدات المسارح والبث والمعروضات والسيارات من دول متعددة بمواعيد دقيقة، وتحتاج إدخالًا مؤقتًا ثم إعادة تصدير بعد انتهاء الحدث.',
      en: "With the Kingdom's events, entertainment and exhibitions sector growing, stage, broadcast and display equipment and cars arrive from many countries on tight schedules, and need temporary import and re-export after the event.",
    },
    solution: [
      { ar: 'إدخال مؤقت وكارنيه ATA', en: 'Temporary import and ATA Carnet' },
      { ar: 'تسليم للموقع حسب الموعد', en: 'Timed delivery to the venue' },
      { ar: 'تخزين الصناديق الفارغة وإعادة التصدير', en: 'Empties storage and re-export' },
    ],
    services: ['events-exhibitions', 'supercar-logistics', 'air-project-cargo', 'customs-clearance-saber', 'inland-transport'],
    successStory: story,
  },
];
