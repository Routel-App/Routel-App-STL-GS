import type { L } from '../config/site';

export type Article = {
  slug: string;
  date: string;
  readMin: number;
  title: L;
  excerpt: L;
  sections: { h: L; p: L }[];
  related: string[];
};

/**
 * أول 8 مقالات مقترحة (القسم 12.1). النصوص هنا مسودة أولية مختصرة؛
 * وسّعوها أو استبدلوها بالمحتوى النهائي.
 */
export const articles: Article[] = [
  {
    slug: 'shipping-from-china-to-saudi-arabia',
    date: '',
    readMin: 8,
    title: { ar: 'الدليل الشامل للشحن البحري من الصين إلى السعودية', en: 'The Complete Guide to Ocean Shipping from China to Saudi Arabia' },
    excerpt: {
      ar: 'من اختيار الميناء إلى التخليص في جدة أو الدمام: كل خطوة تحتاجها لشحن بضاعتك من الصين بثقة.',
      en: 'From choosing the port to clearance in Jeddah or Dammam: every step you need to ship from China with confidence.',
    },
    sections: [
      { h: { ar: 'اختيار ميناء التحميل', en: 'Choosing the port of loading' }, p: { ar: 'تنطلق أغلب الشحنات من شنغهاي ونينغبو وشنتشن وتشينغداو. اختيار الميناء الأقرب لمصنع المورد يقلل تكلفة النقل الداخلي في الصين ويختصر الوقت.', en: 'Most shipments sail from Shanghai, Ningbo, Shenzhen and Qingdao. Choosing the port closest to your supplier’s factory cuts inland costs in China and saves time.' } },
      { h: { ar: 'FCL أم LCL؟', en: 'FCL or LCL?' }, p: { ar: 'إذا تجاوزت بضاعتك نحو 15 مترًا مكعبًا فالحاوية الكاملة غالبًا أوفر وأسرع. للكميات الأصغر، الشحن المجمّع يوفر عليك دفع حاوية كاملة.', en: 'If your cargo exceeds about 15 CBM, a full container is usually cheaper and faster. For smaller volumes, LCL saves you paying for an entire container.' } },
      { h: { ar: 'المستندات وشهادات سابر', en: 'Documents and SABER certificates' }, p: { ar: 'جهّز الفاتورة التجارية وقائمة التعبئة وشهادة المنشأ، وتأكد من شهادات المطابقة عبر سابر قبل الشحن لتجنب التأخير عند الوصول.', en: 'Prepare the commercial invoice, packing list and certificate of origin, and secure SABER conformity certificates before shipping to avoid delays on arrival.' } },
      { h: { ar: 'الوصول والتخليص والتسليم', en: 'Arrival, clearance and delivery' }, p: { ar: 'بعد الوصول يبدأ التخليص عبر منصة فسح، ثم تُسحب الحاوية وتُنقل لمستودعك. التخطيط المسبق يقلل رسوم الأرضيات.', en: 'After arrival, clearance starts via FASAH, then the container is picked up and delivered to your warehouse. Planning ahead minimizes demurrage.' } },
    ],
    related: ['fcl', 'lcl', 'customs-clearance-saber'],
  },
  {
    slug: 'fcl-vs-lcl',
    date: '',
    readMin: 5,
    title: { ar: 'الفرق بين FCL وLCL: أيهما يناسب شحنتك؟', en: 'FCL vs LCL: Which One Fits Your Shipment?' },
    excerpt: { ar: 'مقارنة مبسطة في التكلفة والوقت والأمان تساعدك تختار الطريقة الأنسب.', en: 'A simple comparison of cost, time and security to help you choose.' },
    sections: [
      { h: { ar: 'ما هو FCL؟', en: 'What is FCL?' }, p: { ar: 'حاوية كاملة مخصصة لك وحدك، تُحمّل في المنشأ ولا تُفتح إلا في الوجهة.', en: 'A whole container dedicated to you, loaded at origin and opened only at destination.' } },
      { h: { ar: 'ما هو LCL؟', en: 'What is LCL?' }, p: { ar: 'تتشارك الحاوية مع شحنات أخرى وتدفع حسب الحجم الذي تشغله بضاعتك.', en: 'You share a container with other shipments and pay for the volume your cargo occupies.' } },
      { h: { ar: 'متى تختار كل خيار؟', en: 'When to choose each' }, p: { ar: 'القاعدة العامة: فوق 15 مترًا مكعبًا تقريبًا اختر FCL، وأقل من ذلك غالبًا LCL. استخدم حاسبة الحجم للتقدير.', en: 'Rule of thumb: above roughly 15 CBM choose FCL; below that, LCL is usually better. Use our CBM calculator to estimate.' } },
    ],
    related: ['fcl', 'lcl'],
  },
  {
    slug: 'saber-certificate-guide',
    date: '',
    readMin: 6,
    title: { ar: 'شهادة سابر: كل ما يحتاجه المستورد', en: 'SABER Certificates: What Every Importer Needs to Know' },
    excerpt: { ar: 'ما هي شهادة المطابقة وشهادة الإرسالية، ومتى تحتاجها، وكيف تتجنب رفض الشحنة.', en: 'What product and shipment certificates are, when you need them, and how to avoid rejection.' },
    sections: [
      { h: { ar: 'ما هي منصة سابر؟', en: 'What is SABER?' }, p: { ar: 'منصة إلكترونية تابعة للهيئة السعودية للمواصفات والمقاييس والجودة لإصدار شهادات مطابقة المنتجات المستوردة.', en: 'An electronic platform of the Saudi Standards, Metrology and Quality Organization for issuing conformity certificates for imported products.' } },
      { h: { ar: 'شهادة المنتج وشهادة الإرسالية', en: 'Product and shipment certificates' }, p: { ar: 'تُصدر شهادة المنتج أولًا وفق اللائحة الفنية المنطبقة، ثم شهادة الإرسالية لكل شحنة قبل التخليص.', en: 'The product certificate is issued first under the applicable technical regulation, then a shipment certificate for each consignment before clearance.' } },
      { h: { ar: 'نصائح لتجنب التأخير', en: 'Tips to avoid delays' }, p: { ar: 'ابدأ الإجراءات قبل الشحن، وتأكد من صحة رمز HS ومطابقة البيانات مع الفاتورة.', en: 'Start before shipping, verify the HS code, and make sure data matches the invoice.' } },
    ],
    related: ['customs-clearance-saber'],
  },
  {
    slug: 'incoterms-2020-explained',
    date: '',
    readMin: 7,
    title: { ar: 'شروط التسليم الدولية (Incoterms 2020) بلغة بسيطة', en: 'Incoterms 2020 in Plain Language' },
    excerpt: { ar: 'EXW وFOB وCIF وDDP وغيرها: من يدفع ماذا، ومتى تنتقل المخاطر.', en: 'EXW, FOB, CIF, DDP and more: who pays for what, and when risk transfers.' },
    sections: [
      { h: { ar: 'لماذا تهمك Incoterms؟', en: 'Why Incoterms matter' }, p: { ar: 'تحدد من يتحمل تكلفة ومخاطر كل مرحلة من الرحلة، واختيار الشرط الصحيح يحميك من تكاليف غير متوقعة.', en: 'They define who bears the cost and risk at each stage; the right term protects you from unexpected costs.' } },
      { h: { ar: 'أشهر الشروط في الشحن البحري', en: 'The most common ocean terms' }, p: { ar: 'FOB: يسلم البائع البضاعة على ظهر السفينة. CIF: يدفع البائع الشحن والتأمين حتى ميناء الوصول. EXW: يستلم المشتري من مقر البائع. DDP: يسلم البائع البضاعة مخلّصة إلى المشتري.', en: 'FOB: seller delivers on board. CIF: seller pays freight and insurance to the destination port. EXW: buyer collects from the seller’s premises. DDP: seller delivers cleared goods to the buyer.' } },
    ],
    related: ['fcl', 'marine-cargo-insurance'],
  },
  {
    slug: 'import-clearance-documents-saudi',
    date: '',
    readMin: 5,
    title: { ar: 'المستندات المطلوبة لتخليص الواردات في السعودية', en: 'Documents Required for Import Clearance in Saudi Arabia' },
    excerpt: { ar: 'قائمة مرجعية بالمستندات الأساسية والإضافية حسب نوع البضاعة.', en: 'A checklist of core and additional documents by cargo type.' },
    sections: [
      { h: { ar: 'المستندات الأساسية', en: 'Core documents' }, p: { ar: 'الفاتورة التجارية، قائمة التعبئة، بوليصة الشحن، وشهادة المنشأ.', en: 'Commercial invoice, packing list, bill of lading and certificate of origin.' } },
      { h: { ar: 'مستندات إضافية حسب البضاعة', en: 'Additional documents by cargo' }, p: { ar: 'شهادات سابر للمنتجات الخاضعة، ومتطلبات هيئة الغذاء والدواء للأغذية والأدوية ومستحضرات التجميل، وبيانات السلامة للمواد الخطرة.', en: 'SABER certificates for regulated products, SFDA requirements for food, pharma and cosmetics, and safety data sheets for dangerous goods.' } },
    ],
    related: ['customs-clearance-saber'],
  },
  {
    slug: 'avoid-demurrage-and-port-delays',
    date: '',
    readMin: 5,
    title: { ar: 'كيف تتجنب رسوم الأرضيات والتأخير في الموانئ', en: 'How to Avoid Demurrage and Port Delays' },
    excerpt: { ar: 'خطوات عملية تقلل الرسوم الإضافية بعد وصول الحاوية.', en: 'Practical steps to reduce extra charges after your container arrives.' },
    sections: [
      { h: { ar: 'افهم الفترة المجانية', en: 'Understand free time' }, p: { ar: 'لكل خط ملاحي وميناء فترة مجانية، وبعدها تبدأ رسوم الأرضيات والاحتجاز. اعرفها قبل الشحن.', en: 'Each carrier and port grants free time, after which demurrage and detention apply. Know it before you ship.' } },
      { h: { ar: 'جهّز مستنداتك مبكرًا', en: 'Prepare documents early' }, p: { ar: 'المستندات الناقصة هي السبب الأول للتأخير. أرسلها لمخلصك قبل وصول السفينة.', en: 'Missing documents are the number one cause of delays. Send them to your broker before the vessel arrives.' } },
      { h: { ar: 'نسّق النقل مسبقًا', en: 'Arrange transport in advance' }, p: { ar: 'حجز الشاحنة قبل الإفراج يضمن سحب الحاوية فور خروجها.', en: 'Booking the truck before release ensures pickup as soon as the container is cleared.' } },
    ],
    related: ['customs-clearance-saber', 'inland-transport'],
  },
  {
    slug: 'container-types-and-sizes',
    date: '',
    readMin: 6,
    title: { ar: 'أنواع الحاويات ومقاساتها: دليل مصوّر', en: 'Container Types and Sizes: An Illustrated Guide' },
    excerpt: { ar: 'الجافة والعالية والمبردة والمفتوحة والمسطحة: أيها يناسب بضاعتك؟', en: 'Dry, high cube, reefer, open top and flat rack: which one suits your cargo?' },
    sections: [
      { h: { ar: 'الحاويات الجافة', en: 'Dry containers' }, p: { ar: 'الأكثر استخدامًا بمقاسي 20 و40 قدمًا، والحاوية العالية (HC) أعلى بنحو قدم للبضائع الخفيفة كبيرة الحجم.', en: "The most common, in 20' and 40' sizes; the High Cube is about a foot taller for light, bulky cargo." } },
      { h: { ar: 'الحاويات الخاصة', en: 'Special containers' }, p: { ar: 'المبردة للبضائع الحساسة للحرارة، والمفتوحة السقف للبضائع العالية، والمسطحة للمعدات الثقيلة والعريضة.', en: 'Reefers for temperature-sensitive cargo, open tops for tall cargo, and flat racks for heavy or wide equipment.' } },
      { h: { ar: 'المقاسات الداخلية التقريبية', en: 'Approximate internal dimensions' }, p: { ar: 'الحاوية 20 قدمًا: نحو 5.9 × 2.35 × 2.39 م (قرابة 33 م³). الحاوية 40 قدمًا: نحو 12.03 × 2.35 × 2.39 م (قرابة 67 م³). الحاوية 40 قدمًا العالية: نحو 12.03 × 2.35 × 2.69 م (قرابة 76 م³). المقاسات والحمولة القصوى تختلف قليلًا حسب الخط الملاحي، ونؤكدها لك قبل الحجز.', en: "20' container: about 5.9 × 2.35 × 2.39 m (≈33 m³). 40' container: about 12.03 × 2.35 × 2.39 m (≈67 m³). 40' High Cube: about 12.03 × 2.35 × 2.69 m (≈76 m³). Dimensions and maximum payload vary slightly by carrier; we confirm them before booking." } },
    ],
    related: ['fcl', 'reefer'],
  },
  {
    slug: 'shipping-refrigerated-food',
    date: '',
    readMin: 6,
    title: { ar: 'شحن المواد الغذائية المبردة: الاشتراطات والنصائح', en: 'Shipping Refrigerated Food: Requirements and Tips' },
    excerpt: { ar: 'كيف تحافظ على سلسلة التبريد وتستوفي متطلبات هيئة الغذاء والدواء.', en: 'How to keep the cold chain intact and meet SFDA requirements.' },
    sections: [
      { h: { ar: 'ضبط درجة الحرارة', en: 'Setting the temperature' }, p: { ar: 'حدد درجة الحرارة المطلوبة بدقة مع المورد، وتأكد من تبريد البضاعة مسبقًا قبل التحميل.', en: 'Agree the exact set temperature with your supplier and make sure cargo is pre-cooled before loading.' } },
      { h: { ar: 'التوثيق وتقرير الحرارة', en: 'Documentation and temperature reports' }, p: { ar: 'تقرير الحرارة الكامل للرحلة يحمي حقك عند أي مطالبة ويساعد في إجراءات الفسح.', en: 'A full voyage temperature report protects you in any claim and supports the release process.' } },
      { h: { ar: 'متطلبات هيئة الغذاء والدواء', en: 'SFDA requirements' }, p: { ar: 'راجع اشتراطات التسجيل والملصقات والشهادات الصحية قبل الشحن.', en: 'Review registration, labeling and health certificate requirements before shipping.' } },
    ],
    related: ['reefer', 'customs-clearance-saber'],
  },
];
