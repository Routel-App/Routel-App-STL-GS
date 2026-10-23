import type { L } from '../config/site';

// ============================================================================
//  الرسائل الأساسية (القسم 3)
// ============================================================================
export const coreMessage: L = {
  ar: 'STL تربط تجارة المملكة بموانئ العالم، وتتولى الشحنة من لحظة الحجز حتى التسليم.',
  en: "STL connects the Kingdom's trade with the world's ports, handling your shipment from booking to delivery.",
};

export const vision: L = {
  ar: 'أن نكون الشريك البحري الأول للشركات في المملكة، ونسهم في جعلها مركزًا لوجستيًا عالميًا يربط القارات الثلاث.',
  en: 'To be the leading maritime partner for businesses in Saudi Arabia, and to help make the Kingdom a global logistics hub connecting three continents.',
};

export const mission: L = {
  ar: 'نقدم حلول شحن بحري ولوجستيات متكاملة بدقة وشفافية وامتثال كامل للأنظمة، لنمكّن عملاءنا من النمو بثقة في الأسواق المحلية والعالمية.',
  en: 'We deliver integrated ocean freight and logistics solutions with precision, transparency and full regulatory compliance, enabling our clients to grow with confidence in local and global markets.',
};

export const values: { icon: string; title: L; text: L }[] = [
  { icon: 'check', title: { ar: 'الموثوقية', en: 'Reliability' }, text: { ar: 'نلتزم بما نعد به، في كل شحنة وكل موعد.', en: 'We deliver on our promises — every shipment, every deadline.' } },
  { icon: 'eye', title: { ar: 'الشفافية', en: 'Transparency' }, text: { ar: 'أسعار واضحة، وتحديثات مستمرة عن حالة الشحنة.', en: 'Clear pricing and continuous shipment status updates.' } },
  { icon: 'shield', title: { ar: 'السلامة', en: 'Safety' }, text: { ar: 'سلامة البضائع والأفراد والبيئة أولوية لا تقبل التنازل.', en: 'The safety of cargo, people and the environment is non-negotiable.' } },
  { icon: 'stamp', title: { ar: 'الامتثال', en: 'Compliance' }, text: { ar: 'نعمل وفق أنظمة الزكاة والضريبة والجمارك والهيئة العامة للنقل والمعايير الدولية.', en: 'We operate in line with ZATCA, Transport General Authority regulations and international standards.' } },
  { icon: 'spark', title: { ar: 'الابتكار', en: 'Innovation' }, text: { ar: 'نوظف التقنية لتبسيط الشحن وتسريعه.', en: 'We use technology to make shipping simpler and faster.' } },
  { icon: 'handshake', title: { ar: 'الشراكة', en: 'Partnership' }, text: { ar: 'نجاح عملائنا هو مقياس نجاحنا.', en: "Our clients' success is the measure of ours." } },
];

// ============================================================================
//  الصفحة الرئيسية (القسم 4)
// ============================================================================
export const heroSlides: { title: L; text: L; buttons: { label: L; path: string; primary?: boolean }[] }[] = [
  {
    title: { ar: 'من موانئ العالم.. إلى باب عملك', en: 'From Global Ports to Your Doorstep' },
    text: {
      ar: 'شحن بحري بالحاويات والسائب والمشاريع، مع تخليص جمركي ونقل بري حتى موقعك، من جهة واحدة.',
      en: 'Containers, break bulk and project cargo by sea, with customs clearance and trucking to your site, all from one provider.',
    },
    buttons: [
      { label: { ar: 'اطلب عرض سعر', en: 'Request a Quote' }, path: '/e-services/quote', primary: true },
      { label: { ar: 'اكتشف خدماتنا', en: 'Explore our services' }, path: '/services' },
    ],
  },
  {
    title: { ar: 'معدات بمئات الأطنان.. نوصلها لموقعها', en: 'Hundreds of Tonnes.. Delivered to Site' },
    text: {
      ar: 'شحنات مشاريع ورفع ثقيل وبضائع سائبة، بتخطيط هندسي من المصنع حتى موقع المشروع.',
      en: 'Project cargo, heavy lift and break bulk, engineered from the factory to the project site.',
    },
    buttons: [{ label: { ar: 'المشاريع والرفع الثقيل', en: 'Projects & heavy lift' }, path: '/services/projects-heavy-lift', primary: true }],
  },
  {
    title: { ar: 'سفينتك عند الرصيف.. واحتياجاتها جاهزة', en: 'Your Vessel at Berth.. Everything Ready' },
    text: {
      ar: 'تموين ووقود وتنظيف ووكالة ملاحية وتغيير طواقم في الموانئ السعودية، على مدار الساعة.',
      en: 'Provisions, bunkers, cleaning, ship agency and crew changes across Saudi ports, around the clock.',
    },
    buttons: [{ label: { ar: 'الخدمات البحرية', en: 'Marine services' }, path: '/services/marine-services', primary: true }],
  },
  {
    title: { ar: 'شريكك في رؤية 2030', en: 'Your Partner in Vision 2030' },
    text: {
      ar: 'ندعم المشاريع الكبرى والمصانع والتجار بحلول شحن تواكب نمو المملكة كمركز لوجستي عالمي.',
      en: "We support giga-projects, manufacturers and traders with shipping solutions that keep pace with the Kingdom's rise as a global logistics hub.",
    },
    buttons: [{ label: { ar: 'تعرّف علينا', en: 'Get to know us' }, path: '/about#sustainability', primary: true }],
  },
];

export const aboutShort = {
  eyebrow: { ar: 'من نحن', en: 'About us' } as L,
  title: { ar: 'شريك بحري سعودي بمعايير عالمية', en: 'A Saudi Maritime Partner with Global Standards' } as L,
  text: {
    ar: 'STL Global Forwarding شركة سعودية مقرها جدة، تأسست عام {year} وتقدم للشركات حلول الشحن البحري والجوي والمشاريع والرفع الثقيل، والتخليص والنقل والتخزين، إلى جانب الخدمات البحرية للسفن. يقودها فريق تتجاوز خبرته في الشحن واللوجستيات {exp} سنوات، ونتولى كل تفاصيل الشحنة: الحجز، والتوثيق، والتخليص الجمركي، والنقل حتى الوجهة النهائية.',
    en: 'STL Global Forwarding is a Saudi company based in Jeddah, founded in {year} providing businesses with ocean and air freight, project and heavy-lift logistics, clearance, trucking and storage, as well as marine services for vessels. Led by a team with more than {exp} years of shipping and logistics experience, we handle every detail: booking, documentation, customs clearance and transport to the final destination.',
  } as L,
};

export const guideQuestion = {
  title: { ar: 'وش تبي تشحن اليوم؟', en: 'What are you shipping today?' } as L,
  subtitle: { ar: 'اختر وضعك ونوجهك للخدمة المناسبة مباشرة.', en: "Pick your situation and we'll point you to the right service." } as L,
  options: [
    { icon: 'import', label: { ar: 'أستورد أو أصدّر بضاعة بالحاويات', en: "I'm importing or exporting containerised goods" } as L, target: { ar: 'الشحن البحري', en: 'Ocean freight' } as L, svc: 'fcl' },
    { icon: 'crane', label: { ar: 'عندي معدات ثقيلة أو شحنة مشروع', en: 'I have heavy equipment or project cargo' } as L, target: { ar: 'المشاريع والرفع الثقيل', en: 'Projects & heavy lift' } as L, svc: 'project-cargo' },
    { icon: 'car', label: { ar: 'أشحن سيارات أو مركبات', en: "I'm shipping cars or vehicles" } as L, target: { ar: 'شحن السيارات والمركبات', en: 'Vehicle shipping' } as L, svc: 'roro' },
    { icon: 'snow', label: { ar: 'بضاعتي تحتاج تبريد', en: 'My cargo needs refrigeration' } as L, target: { ar: 'الشحن المبرد', en: 'Reefer services' } as L, svc: 'reefer' },
    { icon: 'stamp', label: { ar: 'أحتاج تخليص جمركي ونقل فقط', en: 'I only need clearance and trucking' } as L, target: { ar: 'التخليص الجمركي', en: 'Customs clearance' } as L, svc: 'customs-clearance-saber' },
    { icon: 'anchor', label: { ar: 'أدير سفينة وأحتاج خدمات في الميناء', en: 'I operate a vessel and need port services' } as L, target: { ar: 'الخدمات البحرية', en: 'Marine services' } as L, svc: 'ship-chandling' },
  ],
};

export const howWeWork: { title: L; text: L }[] = [
  { title: { ar: 'اطلب عرض السعر', en: 'Request a quote' }, text: { ar: 'أرسل تفاصيل شحنتك، ونرد عليك خلال {hours} ساعة.', en: 'Send your shipment details and we reply within {hours} hours.' } },
  { title: { ar: 'نحجز ونوثّق', en: 'We book & document' }, text: { ar: 'نحجز المساحة على السفينة ونجهز المستندات كاملة.', en: 'We book vessel space and prepare the complete documentation.' } },
  { title: { ar: 'نبحر ونتابع', en: 'We sail & track' }, text: { ar: 'تتابع شحنتك لحظة بلحظة حتى وصولها للميناء.', en: 'Follow your shipment moment by moment until it reaches port.' } },
  { title: { ar: 'نخلّص ونسلّم', en: 'We clear & deliver' }, text: { ar: 'نُنهي التخليص الجمركي ونوصل البضاعة إلى بابك.', en: 'We complete customs clearance and deliver to your door.' } },
];

export const whyShort: { icon: string; text: L }[] = [
  { icon: 'route', text: { ar: 'حل متكامل من جهة واحدة', en: 'One integrated provider' } },
  { icon: 'eye', text: { ar: 'أسعار شفافة بدون رسوم مخفية', en: 'Transparent pricing, no hidden fees' } },
  { icon: 'pin', text: { ar: 'تتبع مباشر', en: 'Live tracking' } },
  { icon: 'team', text: { ar: 'فريق مختص بكل نوع شحنة', en: 'Specialists for every cargo type' } },
  { icon: 'stamp', text: { ar: 'امتثال كامل للأنظمة', en: 'Full regulatory compliance' } },
  { icon: 'chat', text: { ar: 'دعم بالعربي والإنجليزي', en: 'Support in Arabic and English' } },
];

// ============================================================================
//  من نحن (القسم 5)
// ============================================================================
export const aboutStory = {
  title: { ar: 'قصة STL Global Forwarding', en: 'The STL Global Forwarding Story' } as L,
  paragraphs: [
    {
      ar: 'تأسست STL Global Forwarding في {city} عام {year} على يد فريق عمل لأكثر من {exp} سنوات في الشحن البحري والتخليص الجمركي والخدمات اللوجستية. لاحظنا أن كثيرًا من الشركات تتعامل مع أكثر من جهة لشحنة واحدة: خط ملاحي، ومخلص، وناقل، ومستودع، وتدفع ثمن ذلك وقتًا وتكاليف غير متوقعة.',
      en: 'STL Global Forwarding was founded in {city} in {year} by a team that has worked for more than {exp} years in ocean freight, customs clearance and logistics. We saw businesses dealing with several parties for a single shipment — a shipping line, a broker, a trucker and a warehouse — and paying for it in time and unexpected costs.',
    },
    {
      ar: 'لذلك بنينا STL لتكون جهة واحدة مسؤولة عن الرحلة كاملة: من الحجز في ميناء المنشأ، إلى التخليص في موانئ المملكة، والتسليم إلى باب العميل. نخدم الشركات في الصناعة والمشاريع والأغذية ومواد التصنيع الغذائي، ونعمل مع شبكة من الخطوط الملاحية والوكلاء الدوليين في آسيا وأوروبا وأفريقيا والأمريكتين.',
      en: "That is why we built STL as a single party accountable for the whole journey: from booking at the port of origin to clearance at Saudi ports and delivery to the client's door. We serve businesses in industry, projects, food and food manufacturing inputs, working with a network of shipping lines and international agents across Asia, Europe, Africa and the Americas.",
    },
  ] as L[],
};

export const ceoMessage: L[] = [
  {
    ar: 'قطاع الخدمات اللوجستية في المملكة يعيش مرحلة تحول تاريخية مع رؤية 2030، والشحن البحري في قلب هذا التحول.',
    en: "Saudi Arabia's logistics sector is going through a historic transformation under Vision 2030, and ocean shipping is at the heart of it.",
  },
  {
    ar: 'أسسنا STL لنقدم لعملائنا شريكًا يفهم احتياجاتهم ويتحمل مسؤولية شحناتهم بالكامل. التزامنا بسيط: وضوح في الأسعار، دقة في المواعيد، وتواصل لا ينقطع.',
    en: 'We founded STL to give our clients a partner who understands their needs and takes full responsibility for their shipments. Our commitment is simple: clear pricing, punctual delivery and constant communication.',
  },
  {
    ar: 'نشكر عملاءنا على ثقتهم، ونعدهم بأن نستمر في تطوير خدماتنا لنكون عند حسن ظنهم.',
    en: 'We thank our clients for their trust and promise to keep improving our services to live up to it.',
  },
];

export const certsNote: L = {
  ar: 'نعرض هنا تراخيصنا وشهاداتنا بأرقامها وتواريخ صلاحيتها، ويمكن التحقق منها لدى الجهات المصدرة.',
  en: 'Our licenses and certifications are listed with their numbers and validity dates and can be verified with the issuing authorities.',
};

// ============================================================================
//  لماذا STL (القسم 9.1)
// ============================================================================
export const whyTitle: L = { ar: 'ستة أسباب تجعل الشركات تختار STL', en: 'Six Reasons Businesses Choose STL' };
export const whyReasons: { icon: string; title: L; text: L }[] = [
  { icon: 'route', title: { ar: 'جهة واحدة للرحلة كاملة', en: 'One provider for the whole journey' }, text: { ar: 'حجز، شحن، تخليص، نقل، تخزين. تتعامل مع فريق واحد بدل خمسة مزودين.', en: 'Booking, shipping, clearance, transport and storage. One team instead of five providers.' } },
  { icon: 'eye', title: { ar: 'أسعار شفافة', en: 'Transparent pricing' }, text: { ar: 'عرض سعر مفصّل بكل البنود، بدون رسوم مفاجئة عند الوصول.', en: 'An itemized quote with no surprise charges on arrival.' } },
  { icon: 'pin', title: { ar: 'تتبع مباشر', en: 'Live tracking' }, text: { ar: 'تعرف مكان شحنتك في أي لحظة، مع تنبيهات عند كل مرحلة.', en: 'Know where your shipment is at any moment, with alerts at every stage.' } },
  { icon: 'user', title: { ar: 'مدير حساب مخصص', en: 'Dedicated account manager' }, text: { ar: 'شخص واحد يعرف شحناتك ويرد عليك مباشرة.', en: 'One person who knows your shipments and answers you directly.' } },
  { icon: 'team', title: { ar: 'خبرة متخصصة', en: 'Specialized expertise' }, text: { ar: 'فرق مستقلة للحاويات، والمبرد، والمشاريع، والمواد الخطرة.', en: 'Dedicated teams for containers, reefer, projects and dangerous goods.' } },
  { icon: 'stamp', title: { ar: 'امتثال كامل', en: 'Full compliance' }, text: { ar: 'نعمل وفق أنظمة الجمارك والهيئة العامة للنقل والمعايير الدولية، فتصل شحنتك بدون تعطيل.', en: 'We follow customs, Transport General Authority and international standards, so your cargo arrives without disruption.' } },
];

export const comparison: { row: L; stl: L; trad: L }[] = [
  { row: { ar: 'عدد الجهات التي تتعامل معها', en: 'Number of parties you deal with' }, stl: { ar: 'جهة واحدة', en: 'One provider' }, trad: { ar: 'خط ملاحي + مخلص + ناقل + مستودع', en: 'Shipping line + broker + trucker + warehouse' } },
  { row: { ar: 'وضوح التكلفة', en: 'Cost clarity' }, stl: { ar: 'عرض سعر شامل مسبق', en: 'All-in quote upfront' }, trad: { ar: 'رسوم تظهر على مراحل', en: 'Charges appear in stages' } },
  { row: { ar: 'متابعة الشحنة', en: 'Shipment follow-up' }, stl: { ar: 'تتبع إلكتروني وتحديثات', en: 'Online tracking and updates' }, trad: { ar: 'اتصالات متكررة', en: 'Repeated phone calls' } },
];

// ============================================================================
//  QHSE (القسم 9.2)
// ============================================================================
export const qhse = {
  intro: {
    ar: 'الجودة والسلامة ليست قسمًا في STL، بل طريقة عمل. نلتزم بنظام إدارة متكامل يحمي البضائع والعاملين والبيئة.',
    en: "At STL, quality and safety aren't a department — they're how we work. We follow an integrated management system that protects cargo, people and the environment.",
  } as L,
  policies: [
    { icon: 'check', title: { ar: 'سياسة الجودة', en: 'Quality policy' }, text: { ar: 'نلتزم بتلبية متطلبات العملاء والأنظمة، وقياس الأداء، والتحسين المستمر عبر مؤشرات واضحة (الالتزام بالمواعيد، دقة المستندات، رضا العملاء).', en: 'We are committed to meeting customer and regulatory requirements, measuring performance and improving continuously through clear KPIs (on-time performance, document accuracy, customer satisfaction).' } },
    { icon: 'helmet', title: { ar: 'سياسة السلامة', en: 'Safety policy' }, text: { ar: 'تدريب دوري للعاملين، إجراءات موثقة لمناولة البضائع الخطرة والثقيلة، تقييم المخاطر قبل كل مشروع، وصفر حوادث هدف دائم.', en: 'Regular staff training, documented procedures for handling dangerous and heavy cargo, risk assessment before every project, and zero incidents as a permanent goal.' } },
    { icon: 'leaf', title: { ar: 'سياسة البيئة', en: 'Environmental policy' }, text: { ar: 'تقليل الانبعاثات باختيار مسارات وخطوط أكفأ، وتقليل الورق عبر المستندات الإلكترونية، والتعامل المسؤول مع المخلفات.', en: 'Reducing emissions by choosing more efficient routes and carriers, cutting paper through electronic documents, and handling waste responsibly.' } },
    { icon: 'lock', title: { ar: 'الأمن', en: 'Security' }, text: { ar: 'حماية البضائع من السرقة والعبث، والتحقق من الأطراف، والامتثال لإجراءات الأمن البحري.', en: 'Protecting cargo from theft and tampering, vetting all parties, and complying with maritime security procedures.' } },
  ] as { icon: string; title: L; text: L }[],
};

// ============================================================================
//  الاستدامة ورؤية 2030 (القسم 10)
// ============================================================================
export const vision2030 = {
  title: { ar: 'نبحر مع طموح المملكة', en: "Sailing with the Kingdom's Ambition" } as L,
  text: {
    ar: 'تستهدف الاستراتيجية الوطنية للنقل والخدمات اللوجستية جعل المملكة مركزًا لوجستيًا عالميًا يربط آسيا وأوروبا وأفريقيا. في STL نؤمن أن الشحن البحري هو العمود الفقري لهذا الهدف، ونعمل على:',
    en: 'The National Transport and Logistics Strategy aims to make the Kingdom a global logistics hub linking Asia, Europe and Africa. At STL, we believe ocean shipping is the backbone of that goal, and we work to:',
  } as L,
  points: [
    { ar: 'دعم المصانع السعودية في الوصول إلى الأسواق العالمية عبر خدمات تصدير متكاملة.', en: 'Help Saudi manufacturers reach global markets through integrated export services.' },
    { ar: 'خدمة المشاريع الكبرى بلوجستيات مشاريع دقيقة.', en: 'Serve giga-projects with precise project logistics.' },
    { ar: 'توطين الوظائف وتأهيل الكفاءات السعودية في القطاع البحري واللوجستي.', en: 'Localize jobs and develop Saudi talent in the maritime and logistics sector.' },
    { ar: 'تبني التحول الرقمي في الشحن والتخليص.', en: 'Embrace digital transformation in shipping and clearance.' },
  ] as L[],
};

export const sustainability: { icon: string; title: L; text: L }[] = [
  { icon: 'ship', title: { ar: 'شحن أنظف', en: 'Cleaner shipping' }, text: { ar: 'نفضل الخطوط الملاحية التي تستثمر في سفن منخفضة الانبعاثات والوقود البديل.', en: 'We favor shipping lines investing in low-emission vessels and alternative fuels.' } },
  { icon: 'boxes', title: { ar: 'تحسين الحمولة', en: 'Load optimization' }, text: { ar: 'تخطيط ذكي لتعبئة الحاويات يقلل عدد الرحلات.', en: 'Smart container load planning that reduces the number of trips.' } },
  { icon: 'doc', title: { ar: 'مكتب بلا ورق', en: 'Paperless office' }, text: { ar: 'مستندات وفواتير إلكترونية.', en: 'Electronic documents and invoices.' } },
  { icon: 'leaf', title: { ar: 'قياس الأثر', en: 'Measuring impact' }, text: { ar: 'نراجع خيارات المسار والخط الملاحي لكل شحنة لنختار الأقل أثرًا عند تقارب التكلفة والوقت.', en: 'We review route and carrier options for each shipment and favour the lower-impact one when cost and time are comparable.' } },
];

// ============================================================================
//  الوظائف (القسم 12.2)
// ============================================================================
export const careers = {
  title: { ar: 'انضم لطاقم STL', en: 'Join the STL Crew' } as L,
  text: {
    ar: 'نبحث عن كفاءات شغوفة بقطاع الشحن واللوجستيات. نوفر بيئة عمل محفزة، وتدريبًا مستمرًا، وفرص نمو حقيقية مع شركة تتوسع.',
    en: "We're looking for talent passionate about shipping and logistics. We offer a motivating workplace, continuous training and real growth opportunities with an expanding company.",
  } as L,
  perks: [
    { icon: 'spark', text: { ar: 'تطوير مهني', en: 'Professional development' } },
    { icon: 'team', text: { ar: 'بيئة تعاونية', en: 'Collaborative environment' } },
    { icon: 'star', text: { ar: 'مزايا تنافسية', en: 'Competitive benefits' } },
    { icon: 'flag', text: { ar: 'فرص للكفاءات الوطنية', en: 'Opportunities for national talent' } },
  ] as { icon: string; text: L }[],
};

// ============================================================================
//  تتبع الشحنة (القسم 11.1)
// ============================================================================
export const trackingStages: L[] = [
  { ar: 'تم الحجز', en: 'Booked' },
  { ar: 'تم التحميل في ميناء المنشأ', en: 'Loaded at origin port' },
  { ar: 'في البحر', en: 'At sea' },
  { ar: 'وصلت ميناء الوجهة', en: 'Arrived at destination port' },
  { ar: 'قيد التخليص', en: 'Under clearance' },
  { ar: 'تم الإفراج', en: 'Released' },
  { ar: 'في الطريق', en: 'Out for delivery' },
  { ar: 'تم التسليم', en: 'Delivered' },
];
