# STL Global Solutions — الموقع الإلكتروني

موقع شركة STL Global Solutions للشحن البحري. **عربي افتراضي** (RTL) مع نسخة **إنجليزية** (LTR) كاملة على `/en`.
مبني بـ [Astro](https://astro.build) كموقع ثابت (Static) سريع وسهل الاستضافة، بدون قاعدة بيانات.

## التشغيل

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # يولّد الموقع في dist/
npm run preview    # معاينة نسخة البناء
npm run check:placeholders   # يعرض كل [المتغيرات] اللي لسا ما تعبّت
```

## ✏️ تعديل المتغيرات [بين الأقواس]

كل معلومة بين `[أقواس مربعة]` متغير ينتظر المعلومة الحقيقية. أغلبها في ملف واحد:

| الملف | المحتوى |
| --- | --- |
| `src/config/site.ts` | **الملف الرئيسي:** الهاتف، واتساب، البريد، العنوان، ساعات العمل، السجل التجاري والتراخيص والرقم الضريبي، سنة التأسيس، اسم الرئيس التنفيذي، الأرقام (العدادات)، الفروع، الشهادات، الخط الزمني، فريق القيادة، شعارات وآراء العملاء، الوظائف، الأخبار، جدول الإبحار، روابط التواصل الاجتماعي، رابط استقبال النماذج |
| `src/data/services.ts` | نصوص الخدمات الـ11 |
| `src/data/sectors.ts` | القطاعات السبعة + قصص النجاح |
| `src/data/network.ts` | الموانئ (`show: false` لإخفاء ميناء) + الدول والمسارات ومدد العبور ونصائح سابر |
| `src/data/company.ts` | الرؤية والرسالة والقيم، الهيرو، كلمة الرئيس التنفيذي، QHSE، الاستدامة |
| `src/data/faq.ts` · `glossary.ts` · `blog.ts` · `legal.ts` | الأسئلة الشائعة، المسرد، المقالات، الصفحات القانونية |

- القيم ثنائية اللغة مكتوبة بالشكل `{ ar: '...', en: '...' }`.
- رموز مثل `{hours}` و `{ports}` و `{clients}` داخل النصوص تُستبدل تلقائيًا من `site.ts`، فتعدّل الرقم مرة وحدة.
- **قبل الإطلاق:** اجعل `highlightPlaceholders: false` في `site.ts` (حاليًا المتغيرات تظهر بإطار برتقالي منقط لتسهيل مراجعتها).
- احذفوا أي شهادة أو ميناء أو فرع ما ينطبق على STL — عرض معلومة غير صحيحة يضر بالمصداقية.

## الملفات والصور

- الشعار الرسمي: ضعه في `public/logo.svg` وفعّل `USE_IMAGE_LOGO = true` في `src/components/Logo.astro`.
- الملف التعريفي وسياسة QHSE: `public/files/STL-Company-Profile.pdf` و `public/files/STL-QHSE-Policy.pdf`.
- صور فريق القيادة وشعارات العملاء: ضعها في `public/` واكتب مسارها في `site.ts`.

## النماذج والتكاملات

- **النماذج** (عرض السعر، التواصل، التوظيف، النشرة): ضع رابط الاستقبال في `integrations.formEndpoint` (مثل Formspree أو API داخلي). بدون رابط تظهر رسالة النجاح ويُطبع الطلب في Console فقط.
- **التتبع:** ضع رابط API في `integrations.trackingApi`؛ يُستدعى بـ `?ref=XXXX` ويعيد `{ "stage": 0-7, "eta": "..." }`. بدون رابط تظهر رسالة توجّه العميل لمدير حسابه أو واتساب.
- **Google Analytics:** `integrations.googleAnalyticsId` — لا يُحمّل إلا بعد موافقة الزائر على ملفات الارتباط (PDPL).
- **النطاق:** غيّر `SITE_URL` في `astro.config.mjs` (يُستخدم في sitemap والروابط الكنسية).

## خريطة الموقع (كل صفحة بالعربي + `/en`)

| المسار | الصفحة |
| --- | --- |
| `/` | الرئيسية (12 قسمًا) |
| `/about` · `/about/vision` · `/about/ceo-message` · `/about/leadership` · `/about/certifications` | من نحن |
| `/services` · `/services/{fcl, lcl, break-bulk-project-cargo, roro, reefer, dangerous-goods, customs-clearance-saber, inland-transport, warehousing-distribution, ship-agency-port-services, marine-cargo-insurance}` | الخدمات |
| `/sectors` · `/sectors/{slug}` | القطاعات (7) |
| `/network` · `/network/ports` · `/network/ports/{jeddah…}` · `/network/routes` · `/network/shipping-from/{china…}` | الشبكة والموانئ + صفحات "الشحن من [الدولة]" |
| `/why-stl` · `/qhse` · `/sustainability` | لماذا STL · الجودة والسلامة · الاستدامة ورؤية 2030 |
| `/e-services` · `/e-services/{tracking, quote, schedule, cbm-calculator}` | الخدمات الإلكترونية |
| `/media` · `/media/news` · `/media/blog` · `/media/blog/{slug}` · `/media/glossary` | المركز الإعلامي |
| `/careers` · `/faq` · `/contact` | الوظائف · الأسئلة الشائعة · تواصل معنا |
| `/legal/{privacy, terms, shipping-terms, cookies}` | الصفحات القانونية (⚠️ تحتاج مراجعة محامٍ) |

## مميزات تقنية

- RTL/LTR بخصائص CSS المنطقية، وزر تبديل اللغة يحافظ على نفس الصفحة، و`hreflang` لكل صفحة.
- ترميز Schema.org: Organization, FAQPage, Service, Article, DefinedTermSet.
- `sitemap-index.xml` تلقائي، شريط موافقة ملفات الارتباط (قبول/رفض/إدارة)، زر واتساب برسالة عرض سعر معبأة مسبقًا.
- نموذج عرض سعر من 3 خطوات يقبل تعبئة مسبقة من الروابط: `?mode=FCL&origin=china&pod=jeddah&cbm=12`.
- متجاوب بالكامل، بدون مكتبات واجهة خارجية.

## الاستضافة

أي استضافة ملفات ثابتة: Vercel أو Netlify أو Cloudflare Pages (Build: `npm run build`، Output: `dist`).

---
المحتوى المرجعي الكامل: [`docs/content.md`](docs/content.md)
