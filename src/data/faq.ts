import { site, type L } from '../config/site';

export const faqs: { q: L; a: L }[] = [
  {
    q: { ar: 'ما الخدمات التي تقدمها STL؟', en: 'What services does STL offer?' },
    a: {
      ar: 'شحن بحري بالحاويات الكاملة والمجمّعة، بضائع سائبة ومشاريع، شحن مبرد ومواد خطرة ومركبات، تخليص جمركي، نقل داخلي، تخزين، وتأمين بحري.',
      en: 'FCL and LCL ocean freight, break bulk and project cargo, reefer, dangerous goods and vehicle shipping, customs clearance, inland transport, warehousing and marine insurance.',
    },
  },
  {
    q: { ar: 'كيف أطلب عرض سعر؟', en: 'How do I request a quote?' },
    a: {
      ar: 'عبر نموذج "اطلب عرض سعر" في الموقع، أو البريد الإلكتروني، أو الهاتف. نرد خلال {hours} ساعة عمل.',
      en: 'Through the "Request a Quote" form on the website, by email or by phone. We reply within {hours} business hours.',
    },
  },
  {
    q: { ar: 'ما المعلومات المطلوبة لعرض السعر؟', en: 'What information do you need for a quote?' },
    a: {
      ar: 'المنشأ والوجهة، نوع البضاعة، الحجم أو عدد الحاويات، الوزن، وتاريخ الجاهزية.',
      en: 'Origin and destination, cargo type, volume or number of containers, weight, and the cargo-ready date.',
    },
  },
  {
    q: { ar: 'ما الفرق بين FCL وLCL؟', en: "What's the difference between FCL and LCL?" },
    a: {
      ar: 'في FCL تستأجر حاوية كاملة لك وحدك. في LCL تتشارك الحاوية مع شحنات أخرى وتدفع حسب حجم بضاعتك.',
      en: 'With FCL you book a whole container for yourself. With LCL you share a container with other shipments and pay according to your cargo volume.',
    },
  },
  {
    q: { ar: 'هل تتولون التخليص الجمركي؟', en: 'Do you handle customs clearance?' },
    a: {
      ar: 'نعم، عبر مخلصين مرخصين في الموانئ الرئيسية، ونساعدك في شهادات سابر ومتطلبات هيئة الغذاء والدواء.',
      en: 'Yes, through licensed brokers at the main ports, and we help with SABER certificates and SFDA requirements.',
    },
  },
  {
    q: { ar: 'كيف أتتبع شحنتي؟', en: 'How do I track my shipment?' },
    a: {
      ar: 'من صفحة التتبع برقم الحاوية أو البوليصة أو الحجز.',
      en: 'From the tracking page using your container, B/L or booking number.',
    },
  },
  {
    q: { ar: 'هل توفرون تأمينًا على البضائع؟', en: 'Do you offer cargo insurance?' },
    a: {
      ar: 'نعم، عبر شركاء تأمين معتمدين وبتغطية من الباب للباب.',
      en: 'Yes, through accredited insurance partners with door-to-door cover.',
    },
  },
  {
    q: { ar: 'هل تشحنون المواد الخطرة؟', en: 'Do you ship dangerous goods?' },
    a: {
      ar: 'نعم، وفق المدونة الدولية IMDG بعد مراجعة بيانات السلامة.',
      en: 'Yes, under the IMDG Code after reviewing the safety data sheets.',
    },
  },
  {
    q: { ar: 'ما البضائع الممنوعة؟', en: 'What goods are prohibited?' },
    a: {
      ar: 'أي مواد ممنوعة بموجب الأنظمة السعودية أو أنظمة دولة المنشأ.',
      en: 'Any items prohibited under Saudi regulations or the regulations of the country of origin.',
    },
  },
  {
    q: { ar: 'هل تخدمون الأفراد؟', en: 'Do you serve individuals?' },
    a: site.company.individualsServed,
  },
];
