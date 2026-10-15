import type { L } from '../config/site';

export type Service = {
  slug: string;
  icon: string;
  title: L;
  code?: string;
  short: L;
  intro: L;
  offer: L[];
  benefits: L[];
  faq: { q: L; a: L }[];
  /** show on the home page (6 cards) */
  featured?: boolean;
  /** quote form preset */
  quoteMode?: string;
};

export const servicesIntro: L = {
  ar: 'من شحنة صغيرة بنظام التجميع إلى مشروع بمعدات تزن مئات الأطنان، نقدم حلول شحن بحري ولوجستيات متكاملة تناسب كل حجم وكل نوع بضاعة.',
  en: 'From a small consolidated shipment to a project with equipment weighing hundreds of tonnes, we deliver integrated ocean freight and logistics solutions for every size and every type of cargo.',
};

export const services: Service[] = [
  {
    slug: 'fcl',
    icon: 'container',
    code: 'FCL',
    featured: true,
    quoteMode: 'FCL',
    title: { ar: 'الشحن البحري بالحاويات الكاملة (FCL)', en: 'Full Container Load (FCL)' },
    short: {
      ar: 'حاوية مخصصة لبضاعتك وحدك بمقاسات 20 و40 قدمًا، بأسعار تنافسية وجداول إبحار منتظمة.',
      en: 'A container dedicated to your cargo alone, in 20ft and 40ft sizes, with competitive rates and regular sailings.',
    },
    intro: {
      ar: 'حين تكون كمية بضاعتك كافية لملء حاوية، فإن الحاوية الكاملة هي الخيار الأسرع والأكثر أمانًا. حاويتك مخصصة لك وحدك، تُحمَّل في المنشأ وتُفتح عند الوجهة فقط.',
      en: 'When your cargo volume is enough to fill a container, a full container load is the fastest and safest option. Your container is yours alone — loaded at origin and opened only at destination.',
    },
    offer: [
      { ar: 'حاويات جافة 20 و40 قدمًا و40 قدمًا عالية (HC)', en: "Dry containers: 20', 40' and 40' High Cube (HC)" },
      { ar: 'حاويات مفتوحة السقف (Open Top) ومسطحة (Flat Rack)', en: 'Open Top and Flat Rack containers' },
      { ar: 'حجز مع خطوط ملاحية عالمية', en: 'Bookings with global shipping lines' },
      { ar: 'شحن من الباب للباب أو من ميناء لميناء', en: 'Door-to-door or port-to-port' },
      { ar: 'استيراد وتصدير', en: 'Import and export' },
    ],
    benefits: [
      { ar: 'أمان أعلى بسبب قلة المناولة', en: 'Higher security thanks to minimal handling' },
      { ar: 'زمن عبور أقصر', en: 'Shorter transit times' },
      { ar: 'تكلفة أقل للوحدة في الكميات الكبيرة', en: 'Lower unit cost for large volumes' },
    ],
    faq: [
      {
        q: { ar: 'متى أختار FCL بدل LCL؟', en: 'When should I choose FCL over LCL?' },
        a: { ar: 'عادة عندما تتجاوز بضاعتك 15 مترًا مكعبًا تقريبًا.', en: 'Usually when your cargo exceeds roughly 15 cubic meters.' },
      },
      {
        q: { ar: 'كم أيام الشحن من الصين إلى جدة؟', en: 'How long does shipping from China to Jeddah take?' },
        a: { ar: 'تختلف حسب الميناء والخط الملاحي، ونوضحها لك في عرض السعر.', en: 'It depends on the port and the shipping line; we specify it in your quote.' },
      },
    ],
  },
  {
    slug: 'lcl',
    icon: 'boxes',
    code: 'LCL',
    featured: true,
    quoteMode: 'LCL',
    title: { ar: 'الشحن البحري المجمّع (LCL)', en: 'Less than Container Load (LCL)' },
    short: {
      ar: 'ادفع فقط على المساحة التي تشغلها، وهو الخيار الأوفر للكميات الصغيرة والمتوسطة.',
      en: 'Pay only for the space you use — the most economical option for small and medium volumes.',
    },
    intro: {
      ar: 'ما تحتاج تملأ حاوية كاملة. نجمع بضاعتك مع شحنات أخرى في حاوية واحدة، وتدفع فقط على المساحة التي تشغلها.',
      en: "You don't need to fill a whole container. We consolidate your cargo with other shipments in one container, and you pay only for the space you occupy.",
    },
    offer: [
      { ar: 'خدمة تجميع منتظمة من موانئ [الصين، الهند، تركيا، أوروبا]', en: 'Regular consolidation services from [China, India, Turkey, Europe]' },
      { ar: 'استلام من المورد', en: 'Pickup from your supplier' },
      { ar: 'تفريغ وفرز في مستودعات الوجهة', en: 'Devanning and sorting at destination warehouses' },
      { ar: 'تسليم للباب', en: 'Door delivery' },
    ],
    benefits: [
      { ar: 'مناسب للشركات الناشئة والمتاجر الإلكترونية', en: 'Ideal for startups and e-commerce stores' },
      { ar: 'تكلفة أقل للكميات الصغيرة', en: 'Lower cost for small volumes' },
      { ar: 'مرونة في تكرار الطلبات', en: 'Flexibility for frequent reorders' },
    ],
    faq: [
      {
        q: { ar: 'كيف تُحسب تكلفة الشحن المجمّع؟', en: 'How is LCL priced?' },
        a: { ar: 'حسب الحجم بالمتر المكعب أو الوزن، أيهما أعلى وفق قاعدة الشحن. جرّب حاسبة الحجم لتقدير حجم شحنتك.', en: 'By volume (CBM) or weight, whichever is higher under the freight rule. Try our CBM calculator to estimate your volume.' },
      },
    ],
  },
  {
    slug: 'break-bulk-project-cargo',
    icon: 'crane',
    code: 'Break Bulk',
    featured: true,
    quoteMode: 'BREAKBULK',
    title: { ar: 'البضائع السائبة والمشاريع (Break Bulk & Project Cargo)', en: 'Break Bulk & Project Cargo' },
    short: {
      ar: 'نقل المعدات الثقيلة والبضائع غير القابلة للتعبئة في حاويات، بتخطيط هندسي كامل.',
      en: 'Moving heavy equipment and non-containerizable cargo with full engineering planning.',
    },
    intro: {
      ar: 'بعض البضائع لا تدخل في حاوية: توربينات، محولات، معدات مصانع، هياكل حديدية. لهذه الشحنات فريق مشاريع متخصص يخطط لكل خطوة.',
      en: "Some cargo simply doesn't fit in a container: turbines, transformers, plant equipment, steel structures. For these shipments, a dedicated projects team plans every step.",
    },
    offer: [
      { ar: 'دراسة المسار ومسح الموقع', en: 'Route studies and site surveys' },
      { ar: 'تأجير السفن (Chartering)', en: 'Vessel chartering' },
      { ar: 'خطط الرفع والتحميل', en: 'Lifting and loading plans' },
      { ar: 'تصاريح النقل الاستثنائي', en: 'Abnormal load permits' },
      { ar: 'نقل بري بشاحنات منخفضة (Lowbed)', en: 'Lowbed road haulage' },
      { ar: 'إشراف ميداني حتى التركيب', en: 'On-site supervision through installation' },
    ],
    benefits: [
      { ar: 'مدير مشروع واحد مسؤول عن كل التفاصيل', en: 'One project manager accountable for every detail' },
      { ar: 'خطط طوارئ موثقة', en: 'Documented contingency plans' },
      { ar: 'خبرة مع مشاريع البنية التحتية والطاقة', en: 'Experience with infrastructure and energy projects' },
    ],
    faq: [
      {
        q: { ar: 'متى يبدأ التخطيط لشحنة مشروع؟', en: 'When should project cargo planning start?' },
        a: { ar: 'كلما كان أبكر كان أفضل؛ يفضل إشراكنا من مرحلة التوريد لدراسة المسار والتصاريح مبكرًا.', en: 'The earlier the better — ideally from the procurement stage so routes and permits are studied in advance.' },
      },
    ],
  },
  {
    slug: 'roro',
    icon: 'car',
    code: 'RoRo',
    quoteMode: 'RORO',
    title: { ar: 'شحن المركبات والمعدات (RoRo)', en: 'Vehicles & Equipment Shipping (RoRo)' },
    short: {
      ar: 'شحن السيارات والشاحنات والمعدات المتحركة بنظام الدحرجة.',
      en: 'Shipping cars, trucks and mobile equipment by roll-on/roll-off.',
    },
    intro: {
      ar: 'شحن السيارات والشاحنات والمعدات المتحركة بنظام الدحرجة (RoRo)، حيث تُقاد المركبة مباشرة إلى السفينة.',
      en: 'Shipping cars, trucks and mobile equipment by Roll-on/Roll-off (RoRo), where the vehicle is driven directly onto the vessel.',
    },
    offer: [
      { ar: 'سيارات خاصة وأساطيل شركات', en: 'Private cars and corporate fleets' },
      { ar: 'معدات بناء وزراعة', en: 'Construction and agricultural equipment' },
      { ar: 'شحن داخل حاويات للمركبات الفاخرة', en: 'Containerized shipping for luxury vehicles' },
      { ar: 'تخليص جمركي وتسجيل', en: 'Customs clearance and registration' },
    ],
    benefits: [
      { ar: 'مناولة أقل للمركبة', en: 'Less handling of the vehicle' },
      { ar: 'خيارات بين RoRo والحاويات حسب قيمة المركبة', en: 'Choice between RoRo and containers based on vehicle value' },
      { ar: 'متابعة حتى التسجيل', en: 'Follow-up through registration' },
    ],
    faq: [],
  },
  {
    slug: 'reefer',
    icon: 'snow',
    code: 'Reefer',
    featured: true,
    quoteMode: 'REEFER',
    title: { ar: 'الشحن المبرد (Reefer)', en: 'Refrigerated Shipping (Reefer)' },
    short: {
      ar: 'حاويات مبردة بدرجات حرارة مضبوطة للأغذية والأدوية، مع تقرير حرارة للرحلة.',
      en: 'Temperature-controlled containers for food and pharma, with a full voyage temperature report.',
    },
    intro: {
      ar: 'للأغذية الطازجة والمجمدة والأدوية واللقاحات، نوفر حاويات مبردة تحافظ على درجة الحرارة المطلوبة طوال الرحلة.',
      en: 'For fresh and frozen food, pharmaceuticals and vaccines, we provide reefer containers that hold the required temperature throughout the voyage.',
    },
    offer: [
      { ar: 'حاويات مبردة 20 و40 قدمًا بدرجات من -25° إلى +25° مئوية', en: "20' and 40' reefers from -25°C to +25°C" },
      { ar: 'مراقبة حرارة عن بعد', en: 'Remote temperature monitoring' },
      { ar: 'تقرير حرارة كامل للرحلة', en: 'Full voyage temperature report' },
      { ar: 'تنسيق مع متطلبات هيئة الغذاء والدواء', en: 'Coordination with SFDA requirements' },
      { ar: 'نقل داخلي مبرد', en: 'Refrigerated inland transport' },
    ],
    benefits: [
      { ar: 'سلسلة تبريد غير منقطعة', en: 'Unbroken cold chain' },
      { ar: 'توثيق يحمي حقك عند أي مطالبة', en: 'Documentation that protects you in any claim' },
    ],
    faq: [],
  },
  {
    slug: 'dangerous-goods',
    icon: 'hazard',
    code: 'DG',
    quoteMode: 'DG',
    title: { ar: 'شحن المواد الخطرة (Dangerous Goods)', en: 'Dangerous Goods (DG)' },
    short: {
      ar: 'تعامل خاص مع الكيماويات والمواد القابلة للاشتعال وفق مدونة IMDG.',
      en: 'Specialized handling of chemicals and flammables under the IMDG Code.',
    },
    intro: {
      ar: 'الكيماويات والمواد القابلة للاشتعال والبطاريات تحتاج تعاملًا خاصًا. فريقنا مدرب على متطلبات المدونة الدولية للبضائع الخطرة البحرية (IMDG).',
      en: 'Chemicals, flammables and batteries need special handling. Our team is trained on the International Maritime Dangerous Goods (IMDG) Code.',
    },
    offer: [
      { ar: 'تصنيف المواد وتجهيز بيانات السلامة', en: 'Classification and safety data preparation' },
      { ar: 'التغليف والملصقات المطابقة', en: 'Compliant packaging and labeling' },
      { ar: 'حجز مع خطوط معتمدة', en: 'Bookings with approved carriers' },
      { ar: 'خزانات ISO للسوائل', en: 'ISO tanks for liquids' },
    ],
    benefits: [
      { ar: 'امتثال لمدونة IMDG', en: 'IMDG Code compliance' },
      { ar: 'مراجعة مسبقة لبيانات السلامة (SDS)', en: 'Upfront review of Safety Data Sheets (SDS)' },
    ],
    faq: [],
  },
  {
    slug: 'customs-clearance-saber',
    icon: 'stamp',
    featured: true,
    quoteMode: 'CLEARANCE',
    title: { ar: 'التخليص الجمركي وشهادات سابر', en: 'Customs Clearance & SABER Certificates' },
    short: {
      ar: 'مخلصون مرخصون في الموانئ الرئيسية، ومتابعة شهادات المطابقة عبر منصة سابر.',
      en: 'Licensed brokers at the main ports, plus conformity certificates via the SABER platform.',
    },
    intro: {
      ar: 'التأخير في الجمارك يعني غرامات وأرضيات وخسارة وقت. مخلصونا المرخصون في الموانئ الرئيسية يُنهون إجراءاتك بسرعة وبدون مفاجآت.',
      en: 'Customs delays mean fines, storage charges and lost time. Our licensed brokers at the main ports complete your formalities quickly and without surprises.',
    },
    offer: [
      { ar: 'تخليص الواردات والصادرات عبر منصة فسح', en: 'Import and export clearance via the FASAH platform' },
      { ar: 'تصنيف البنود الجمركية (HS Code)', en: 'HS Code classification' },
      { ar: 'إصدار شهادات المطابقة عبر منصة سابر (SASO)', en: 'Conformity certificates via SABER (SASO)' },
      { ar: 'متطلبات هيئة الغذاء والدواء', en: 'SFDA requirements' },
      { ar: 'شهادات المنشأ', en: 'Certificates of origin' },
      { ar: 'تخليص الترانزيت للخليج', en: 'Transit clearance to GCC countries' },
    ],
    benefits: [
      { ar: 'تقدير مسبق للرسوم الجمركية', en: 'Upfront estimate of customs duties' },
      { ar: 'تجنب الغرامات', en: 'Avoid penalties' },
      { ar: 'متابعة يومية حتى الإفراج', en: 'Daily follow-up until release' },
    ],
    faq: [
      {
        q: { ar: 'هل أحتاج شهادة سابر لكل منتج؟', en: 'Do I need a SABER certificate for every product?' },
        a: { ar: 'يعتمد ذلك على تصنيف المنتج ولوائحه الفنية. نراجع بنودك ونحدد الشهادات المطلوبة قبل الشحن.', en: 'It depends on the product classification and its technical regulations. We review your items and confirm the required certificates before shipping.' },
      },
    ],
  },
  {
    slug: 'inland-transport',
    icon: 'truck',
    featured: true,
    quoteMode: 'INLAND',
    title: { ar: 'النقل البري والتوصيل الداخلي', en: 'Inland Transport & Delivery' },
    short: {
      ar: 'من الميناء إلى مستودعك أو مستودعاتنا، مع توزيع إلى كل مناطق المملكة.',
      en: 'From the port to your warehouse or ours, with distribution across every region of the Kingdom.',
    },
    intro: {
      ar: 'وصول الحاوية للميناء نصف الرحلة. نكمل النصف الثاني بنقلها لمستودعك في أي مدينة بالمملكة أو دول الخليج.',
      en: 'A container reaching port is only half the journey. We complete the other half by delivering it to your warehouse in any city in Saudi Arabia or the GCC.',
    },
    offer: [
      { ar: 'سحب الحاويات من الموانئ', en: 'Container haulage from ports' },
      { ar: 'شاحنات كاملة (FTL) وجزئية (LTL)', en: 'Full truckload (FTL) and less than truckload (LTL)' },
      { ar: 'نقل مبرد', en: 'Refrigerated transport' },
      { ar: 'نقل عبر الحدود لدول الخليج والأردن', en: 'Cross-border transport to GCC countries and Jordan' },
    ],
    benefits: [
      { ar: 'تنسيق واحد من الميناء إلى الباب', en: 'Single coordination from port to door' },
      { ar: 'تقليل رسوم التأخير بسحب سريع للحاويات', en: 'Lower detention costs through prompt pickup' },
    ],
    faq: [],
  },
  {
    slug: 'warehousing-distribution',
    icon: 'warehouse',
    quoteMode: 'WAREHOUSE',
    title: { ar: 'التخزين والتوزيع', en: 'Warehousing & Distribution' },
    short: {
      ar: 'مساحات تخزين قريبة من الموانئ لتقليل التكاليف وتسريع التوزيع.',
      en: 'Storage near the ports to reduce costs and speed up distribution.',
    },
    intro: {
      ar: 'مساحات تخزين قريبة من الموانئ لتقليل التكاليف وتسريع التوزيع.',
      en: 'Storage space close to the ports to cut costs and accelerate distribution.',
    },
    offer: [
      { ar: 'تخزين جاف ومبرد', en: 'Dry and cold storage' },
      { ar: 'ساحات حاويات', en: 'Container yards' },
      { ar: 'تخزين جمركي (Bonded)', en: 'Bonded storage' },
      { ar: 'تفريغ وتجميع الحاويات', en: 'Container stuffing and devanning' },
      { ar: 'إدارة مخزون بنظام WMS', en: 'Inventory management with a WMS' },
      { ar: 'تجهيز الطلبات والتوزيع', en: 'Order fulfillment and distribution' },
    ],
    benefits: [
      { ar: 'قرب من الموانئ يقلل تكلفة النقل', en: 'Port proximity lowers transport costs' },
      { ar: 'رؤية للمخزون عبر نظام WMS', en: 'Inventory visibility through WMS' },
    ],
    faq: [],
  },
  {
    slug: 'ship-agency-port-services',
    icon: 'anchor',
    quoteMode: 'AGENCY',
    title: { ar: 'الوكالة البحرية وخدمات الموانئ', en: 'Ship Agency & Port Services' },
    short: {
      ar: 'نمثل ملاك السفن والمشغلين في موانئ المملكة أثناء الرسو.',
      en: 'We represent shipowners and operators at Saudi ports during port calls.',
    },
    intro: {
      ar: 'نمثل ملاك السفن والمشغلين في موانئ المملكة ونتولى كل ما تحتاجه السفينة أثناء رسوها.',
      en: 'We represent shipowners and operators at Saudi ports and handle everything a vessel needs during its call.',
    },
    offer: [
      { ar: 'إجراءات الرسو والمغادرة', en: 'Arrival and departure formalities' },
      { ar: 'تنسيق التحميل والتفريغ', en: 'Loading and discharge coordination' },
      { ar: 'تموين السفن', en: 'Ship chandling' },
      { ar: 'تبديل الطواقم', en: 'Crew changes' },
      { ar: 'التعامل مع سلطات الميناء', en: 'Liaison with port authorities' },
    ],
    benefits: [
      { ar: 'نقطة اتصال واحدة في كل ميناء', en: 'One point of contact at every port' },
      { ar: 'تقليل وقت بقاء السفينة في الميناء', en: 'Shorter port stays' },
    ],
    faq: [],
  },
  {
    slug: 'marine-cargo-insurance',
    icon: 'shield',
    quoteMode: 'INSURANCE',
    title: { ar: 'التأمين البحري على البضائع', en: 'Marine Cargo Insurance' },
    short: {
      ar: 'تغطية تأمينية شاملة عبر شركاء معتمدين لحماية قيمة بضاعتك.',
      en: 'Comprehensive cover through accredited partners to protect your cargo value.',
    },
    intro: {
      ar: 'البحر له مخاطره. نوفر لك تغطية تأمينية شاملة عبر شركاء تأمين معتمدين لحماية قيمة بضاعتك.',
      en: 'The sea has its risks. We arrange comprehensive cover through accredited insurance partners to protect the value of your cargo.',
    },
    offer: [
      { ar: 'تأمين شامل لكل المخاطر', en: 'All-risks cover' },
      { ar: 'تأمين من الباب للباب', en: 'Door-to-door cover' },
      { ar: 'مساعدة كاملة في رفع المطالبات', en: 'Full assistance with claims' },
    ],
    benefits: [
      { ar: 'حماية قيمة البضاعة من المنشأ حتى التسليم', en: 'Cargo value protected from origin to delivery' },
      { ar: 'إجراءات مطالبة واضحة', en: 'Clear claims process' },
    ],
    faq: [],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
