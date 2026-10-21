import type { L } from '../config/site';

/**
 * مسودات الصفحات القانونية (القسم 12.5).
 * ⚠️ لازم يراجعها محامٍ قبل النشر. — Must be reviewed by a lawyer before publishing.
 */
export type LegalDoc = { slug: string; title: L; updated: string; sections: { h: L; p: L }[] };

export const legalNotice: L = {
  ar: 'هذه مسودة أولية وتخضع للمراجعة القانونية قبل الاعتماد.',
  en: 'This is a preliminary draft subject to legal review before adoption.',
};

export const legalDocs: LegalDoc[] = [
  {
    slug: 'privacy',
    updated: 'أكتوبر 2026 — October 2026',
    title: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    sections: [
      { h: { ar: 'مقدمة', en: 'Introduction' }, p: { ar: 'تلتزم STL Global Forwarding بحماية بياناتك الشخصية وفق نظام حماية البيانات الشخصية في المملكة العربية السعودية (PDPL) ولوائحه التنفيذية.', en: 'STL Global Forwarding is committed to protecting your personal data in accordance with the Saudi Personal Data Protection Law (PDPL) and its implementing regulations.' } },
      { h: { ar: 'البيانات التي نجمعها', en: 'Data we collect' }, p: { ar: 'نجمع البيانات التي تقدمها عبر النماذج (الاسم، الشركة، الجوال، البريد، تفاصيل الشحنة، السيرة الذاتية)، وبيانات الاستخدام التقنية عبر ملفات الارتباط بعد موافقتك.', en: 'We collect data you submit through forms (name, company, mobile, email, shipment details, CV) and technical usage data via cookies after your consent.' } },
      { h: { ar: 'أغراض المعالجة', en: 'Purposes of processing' }, p: { ar: 'إعداد عروض الأسعار، تقديم الخدمات، متابعة الشحنات، الرد على الاستفسارات، التوظيف، وتحسين الموقع.', en: 'Preparing quotes, delivering services, tracking shipments, answering inquiries, recruitment, and improving the website.' } },
      { h: { ar: 'مشاركة البيانات', en: 'Data sharing' }, p: { ar: 'نشارك البيانات بالقدر اللازم فقط مع الخطوط الملاحية والوكلاء والجهات الحكومية لتنفيذ الخدمة، ولا نبيع بياناتك لأي طرف.', en: 'We share data only as necessary with shipping lines, agents and government authorities to deliver the service; we never sell your data.' } },
      { h: { ar: 'حقوقك', en: 'Your rights' }, p: { ar: 'لك حق العلم والوصول والتصحيح والإتلاف وسحب الموافقة وفق النظام.', en: 'You have the rights to be informed, access, correct, destroy and withdraw consent as provided by law.' } },
      { h: { ar: 'مسؤول حماية البيانات', en: 'Data Protection Officer' }, p: { ar: 'للاستفسارات أو ممارسة حقوقك تواصل معنا عبر البريد info@stl-gf.com أو الهاتف ‎+966 53 213 3699.', en: 'For inquiries or to exercise your rights, contact us at info@stl-gf.com or +966 53 213 3699.' } },
    ],
  },
  {
    slug: 'terms',
    updated: 'أكتوبر 2026 — October 2026',
    title: { ar: 'شروط الاستخدام', en: 'Terms of Use' },
    sections: [
      { h: { ar: 'قبول الشروط', en: 'Acceptance' }, p: { ar: 'باستخدامك هذا الموقع فإنك توافق على هذه الشروط.', en: 'By using this website you agree to these terms.' } },
      { h: { ar: 'المحتوى', en: 'Content' }, p: { ar: 'المعلومات المنشورة لأغراض تعريفية، وجداول الإبحار تقديرية وقابلة للتغيير من الخطوط الملاحية.', en: 'Published information is for general purposes; sailing schedules are estimates and subject to change by carriers.' } },
      { h: { ar: 'الملكية الفكرية', en: 'Intellectual property' }, p: { ar: 'جميع المحتويات والعلامات مملوكة لـ STL Global Forwarding ولا يجوز استخدامها دون إذن.', en: 'All content and marks are owned by STL Global Forwarding and may not be used without permission.' } },
      { h: { ar: 'القانون الواجب التطبيق', en: 'Governing law' }, p: { ar: 'تخضع هذه الشروط لأنظمة المملكة العربية السعودية.', en: 'These terms are governed by the laws of the Kingdom of Saudi Arabia.' } },
    ],
  },
  {
    slug: 'shipping-terms',
    updated: 'أكتوبر 2026 — October 2026',
    title: { ar: 'الشروط العامة للشحن والتداول', en: 'General Shipping & Trading Conditions' },
    sections: [
      { h: { ar: 'نطاق الخدمة', en: 'Scope of service' }, p: { ar: 'تعمل STL Global Forwarding وسيطَ شحن ينظّم نقل البضائع نيابة عن العميل مع الناقلين والجهات المعنية، وتُحدد الخدمات المتفق عليها في عرض السعر المعتمد. يظل الناقل مسؤولًا عن النقل الفعلي وفق شروط بوليصة الشحن الخاصة به.', en: 'STL Global Forwarding acts as a freight forwarder arranging carriage on the client’s behalf with carriers and relevant parties; agreed services are defined in the accepted quotation. The carrier remains responsible for the actual carriage under its own bill of lading terms.' } },
      { h: { ar: 'حدود المسؤولية', en: 'Limitation of liability' }, p: { ar: 'تخضع مسؤولية الشركة للحدود المقررة في الأنظمة السعودية والاتفاقيات الدولية المنطبقة وشروط الناقلين، ولا تشمل الأضرار غير المباشرة أو التأخير الناتج عن ظروف خارجة عن الإرادة.', en: 'The company’s liability is subject to the limits set by Saudi regulations, applicable international conventions and carriers’ terms, and excludes indirect losses and delays caused by circumstances beyond its control.' } },
      { h: { ar: 'التأمين', en: 'Insurance' }, p: { ar: 'البضائع غير مؤمنة ما لم يطلب العميل التأمين كتابيًا ويُذكر في عرض السعر، وعندها تسري شروط وثيقة التأمين الصادرة عن شركة التأمين.', en: 'Cargo is not insured unless the client requests insurance in writing and it is stated in the quotation, in which case the insurer’s policy terms apply.' } },
      { h: { ar: 'المطالبات', en: 'Claims' }, p: { ar: 'يجب إشعار الشركة كتابيًا بأي تلف أو نقص فور الاستلام، مع تقديم المطالبة والمستندات الداعمة خلال المدد التي تحددها شروط الناقل أو وثيقة التأمين.', en: 'Any damage or shortage must be notified to the company in writing upon delivery, and claims with supporting documents submitted within the time limits set by the carrier’s terms or the insurance policy.' } },
      { h: { ar: 'الدفع', en: 'Payment' }, p: { ar: 'تُستحق المبالغ وفق شروط الدفع المذكورة في عرض السعر أو الفاتورة، وتتحمل الشركة المستفيدة الرسوم الحكومية والضرائب ورسوم الأرضيات والتأخير ما لم يُتفق على غير ذلك.', en: 'Amounts are payable per the payment terms stated in the quotation or invoice; government fees, taxes, demurrage and detention charges are borne by the client unless otherwise agreed.' } },
    ],
  },
  {
    slug: 'cookies',
    updated: 'أكتوبر 2026 — October 2026',
    title: { ar: 'سياسة ملفات الارتباط', en: 'Cookie Policy' },
    sections: [
      { h: { ar: 'ما هي ملفات الارتباط؟', en: 'What are cookies?' }, p: { ar: 'ملفات نصية صغيرة تُحفظ في متصفحك لتشغيل الموقع وتحسينه.', en: 'Small text files stored in your browser to run and improve the website.' } },
      { h: { ar: 'أنواعها', en: 'Types' }, p: { ar: 'ضرورية: لتشغيل الموقع وحفظ تفضيل اللغة والموافقة. تحليلية: لفهم الاستخدام (بعد موافقتك). تسويقية: لقياس الحملات (بعد موافقتك).', en: 'Essential: to run the site and store language and consent preferences. Analytics: to understand usage (with consent). Marketing: to measure campaigns (with consent).' } },
      { h: { ar: 'إدارة التفضيلات', en: 'Managing preferences' }, p: { ar: 'يمكنك تغيير اختيارك في أي وقت من رابط "إعدادات ملفات الارتباط" أسفل الصفحة.', en: 'You can change your choice at any time via the "Cookie settings" link in the footer.' } },
    ],
  },
];
