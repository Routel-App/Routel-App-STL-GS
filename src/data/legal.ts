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
    updated: '[تاريخ آخر تحديث]',
    title: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    sections: [
      { h: { ar: 'مقدمة', en: 'Introduction' }, p: { ar: 'تلتزم STL Global Solutions بحماية بياناتك الشخصية وفق نظام حماية البيانات الشخصية في المملكة العربية السعودية (PDPL) ولوائحه التنفيذية.', en: 'STL Global Solutions is committed to protecting your personal data in accordance with the Saudi Personal Data Protection Law (PDPL) and its implementing regulations.' } },
      { h: { ar: 'البيانات التي نجمعها', en: 'Data we collect' }, p: { ar: 'نجمع البيانات التي تقدمها عبر النماذج (الاسم، الشركة، الجوال، البريد، تفاصيل الشحنة، السيرة الذاتية)، وبيانات الاستخدام التقنية عبر ملفات الارتباط بعد موافقتك.', en: 'We collect data you submit through forms (name, company, mobile, email, shipment details, CV) and technical usage data via cookies after your consent.' } },
      { h: { ar: 'أغراض المعالجة', en: 'Purposes of processing' }, p: { ar: 'إعداد عروض الأسعار، تقديم الخدمات، متابعة الشحنات، الرد على الاستفسارات، التوظيف، وتحسين الموقع.', en: 'Preparing quotes, delivering services, tracking shipments, answering inquiries, recruitment, and improving the website.' } },
      { h: { ar: 'مشاركة البيانات', en: 'Data sharing' }, p: { ar: 'نشارك البيانات بالقدر اللازم فقط مع الخطوط الملاحية والوكلاء والجهات الحكومية لتنفيذ الخدمة، ولا نبيع بياناتك لأي طرف.', en: 'We share data only as necessary with shipping lines, agents and government authorities to deliver the service; we never sell your data.' } },
      { h: { ar: 'حقوقك', en: 'Your rights' }, p: { ar: 'لك حق العلم والوصول والتصحيح والإتلاف وسحب الموافقة وفق النظام.', en: 'You have the rights to be informed, access, correct, destroy and withdraw consent as provided by law.' } },
      { h: { ar: 'مسؤول حماية البيانات', en: 'Data Protection Officer' }, p: { ar: 'للاستفسارات أو ممارسة حقوقك تواصل مع مسؤول حماية البيانات: [privacy@stl-global.sa] — [رقم التواصل].', en: 'For inquiries or to exercise your rights, contact our Data Protection Officer: [privacy@stl-global.sa] — [contact number].' } },
    ],
  },
  {
    slug: 'terms',
    updated: '[تاريخ آخر تحديث]',
    title: { ar: 'شروط الاستخدام', en: 'Terms of Use' },
    sections: [
      { h: { ar: 'قبول الشروط', en: 'Acceptance' }, p: { ar: 'باستخدامك هذا الموقع فإنك توافق على هذه الشروط.', en: 'By using this website you agree to these terms.' } },
      { h: { ar: 'المحتوى', en: 'Content' }, p: { ar: 'المعلومات المنشورة لأغراض تعريفية، وجداول الإبحار تقديرية وقابلة للتغيير من الخطوط الملاحية.', en: 'Published information is for general purposes; sailing schedules are estimates and subject to change by carriers.' } },
      { h: { ar: 'الملكية الفكرية', en: 'Intellectual property' }, p: { ar: 'جميع المحتويات والعلامات مملوكة لـ STL Global Solutions ولا يجوز استخدامها دون إذن.', en: 'All content and marks are owned by STL Global Solutions and may not be used without permission.' } },
      { h: { ar: 'القانون الواجب التطبيق', en: 'Governing law' }, p: { ar: 'تخضع هذه الشروط لأنظمة المملكة العربية السعودية.', en: 'These terms are governed by the laws of the Kingdom of Saudi Arabia.' } },
    ],
  },
  {
    slug: 'shipping-terms',
    updated: '[تاريخ آخر تحديث]',
    title: { ar: 'الشروط العامة للشحن والتداول', en: 'General Shipping & Trading Conditions' },
    sections: [
      { h: { ar: 'نطاق الخدمة', en: 'Scope of service' }, p: { ar: '[يحدد نطاق خدمات STL كوسيط شحن ومسؤولياتها مقابل مسؤوليات الناقل]', en: '[Defines the scope of STL’s services as a freight forwarder and its responsibilities versus the carrier’s]' } },
      { h: { ar: 'حدود المسؤولية', en: 'Limitation of liability' }, p: { ar: '[حدود المسؤولية وفق الأنظمة والاتفاقيات الدولية المنطبقة]', en: '[Liability limits under applicable regulations and international conventions]' } },
      { h: { ar: 'التأمين', en: 'Insurance' }, p: { ar: '[البضائع غير مؤمنة ما لم يطلب العميل التأمين كتابيًا]', en: '[Cargo is not insured unless the client requests insurance in writing]' } },
      { h: { ar: 'المطالبات', en: 'Claims' }, p: { ar: '[مدد وإجراءات تقديم المطالبات]', en: '[Time limits and procedures for submitting claims]' } },
      { h: { ar: 'الدفع', en: 'Payment' }, p: { ar: '[شروط الدفع والفوترة]', en: '[Payment and invoicing terms]' } },
    ],
  },
  {
    slug: 'cookies',
    updated: '[تاريخ آخر تحديث]',
    title: { ar: 'سياسة ملفات الارتباط', en: 'Cookie Policy' },
    sections: [
      { h: { ar: 'ما هي ملفات الارتباط؟', en: 'What are cookies?' }, p: { ar: 'ملفات نصية صغيرة تُحفظ في متصفحك لتشغيل الموقع وتحسينه.', en: 'Small text files stored in your browser to run and improve the website.' } },
      { h: { ar: 'أنواعها', en: 'Types' }, p: { ar: 'ضرورية: لتشغيل الموقع وحفظ تفضيل اللغة والموافقة. تحليلية: لفهم الاستخدام (بعد موافقتك). تسويقية: لقياس الحملات (بعد موافقتك).', en: 'Essential: to run the site and store language and consent preferences. Analytics: to understand usage (with consent). Marketing: to measure campaigns (with consent).' } },
      { h: { ar: 'إدارة التفضيلات', en: 'Managing preferences' }, p: { ar: 'يمكنك تغيير اختيارك في أي وقت من رابط "إعدادات ملفات الارتباط" أسفل الصفحة.', en: 'You can change your choice at any time via the "Cookie settings" link in the footer.' } },
    ],
  },
];
