/* =========================================================
   Qari M. Asif – Online Quran Teacher
   ========================================================= */

/* ---------------------------------------------------------
   CONFIG – edit class hours here.
   Times are in the teacher's time zone (Pakistan), 24-hour "HH:MM".
   An end time earlier than the start (e.g. "01:00") means after midnight.
   Slot names and the days line are translated: see the keys in `translations`.
   --------------------------------------------------------- */
const CONFIG = {
  whatsappNumber: '923345113816',
  teacherTimeZone: 'Asia/Karachi',
  daysKey: 'daysMonSat',                 // SAMPLE – change the text in translations
  slots: [                               // SAMPLE HOURS – replace with real ones
    { nameKey: 'slotMorning',   start: '06:00', end: '10:00' },
    { nameKey: 'slotAfternoon', start: '14:00', end: '18:00' },
    { nameKey: 'slotEvening',   start: '19:00', end: '23:00' }
  ],
  // Extra time zones visitors can pick from (the visitor's own zone is always first)
  zones: [
    { tz: 'Europe/London',       key: 'tzLondon' },
    { tz: 'America/New_York',    key: 'tzNewYork' },
    { tz: 'America/Chicago',     key: 'tzChicago' },
    { tz: 'America/Los_Angeles', key: 'tzLA' },
    { tz: 'America/Toronto',     key: 'tzToronto' },
    { tz: 'Australia/Sydney',    key: 'tzSydney' },
    { tz: 'Australia/Perth',     key: 'tzPerth' },
    { tz: 'Asia/Dubai',          key: 'tzDubai' },
    { tz: 'Asia/Karachi',        key: 'tzKarachi' }
  ]
};

/* ---------------------------------------------------------
   TRANSLATIONS – every piece of page text, English and Urdu.
   HTML elements point at these with data-i18n="key".
   --------------------------------------------------------- */
const translations = {
  en: {
    docTitle: 'Qari M. Asif – Online Quran Teacher | Tajweed, Hifz & Kids Classes',
    skip: 'Skip to main content',
    brandName: 'Qari M. Asif',
    brandTag: 'Online Quran Teacher',
    navAbout: 'About', navCourses: 'Courses', navKids: 'Kids', navHow: 'How it works',
    navTimings: 'Timings', navFaq: 'FAQ', navContact: 'Contact', navTrial: 'Free Trial',
    langAria: 'Switch language to Urdu',
    menuAria: 'Open menu', menuCloseAria: 'Close menu',

    heroName: 'Qari M. Asif',
    heroRole: 'Online Quran Teacher',
    heroLead: 'Learn the Quran with Tajweed, from the comfort of your home.',
    heroSub: 'Live one-to-one classes on Google Meet for children and adults, in the UK, USA, Australia, Pakistan and worldwide.',
    ctaTrial: 'Book a Free Trial',
    ctaCourses: 'See Courses',
    altHero: 'Qari M. Asif at his desk with laptops, ready to teach an online Quran class',
    badge: 'Years of Experience',

    trustAria: 'Experience and countries',
    trustYears: 'years teaching the Quran',
    marqueeAria: 'Students in Australia, United States, United Kingdom, Pakistan and more',
    cAU: 'Australia', cUS: 'United States', cUK: 'United Kingdom', cPK: 'Pakistan',
    cMore: 'And more', cOther: 'Other countries',

    altPortrait: 'Portrait of Qari M. Asif, online Quran teacher',
    aboutCaption: 'Qari M. Asif',
    aboutEyebrow: 'About your teacher',
    aboutTitle: 'Fifteen years of teaching the Quran with patience and care',
    aboutP1: 'Assalamu alaikum. I am Qari M. Asif, and for 15 years I have been teaching the Quran to students of all ages. Today I teach students in Australia, the USA, the UK, Pakistan and other countries, all through live online classes.',
    aboutP2: 'Every class is one-to-one on Google Meet, so each student gets my full attention. We move at a pace that suits the student, from the first letters of Noorani Qaida to fluent reading with Tajweed and Hifz.',
    aboutP3: 'I have a special place in my heart for children. Lessons are kept simple, patient and enjoyable, so young students look forward to their class. Adults are always welcome too, even if you are starting from the very beginning.',
    aboutT1: 'One-to-one live classes', aboutT2: 'Children and adults', aboutT3: 'Free trial class',

    hadithAria: 'Hadith',
    hadith: '“The best of you are those who learn the Quran and teach it.”',
    hadithRef: 'Sahih al-Bukhari 5027',

    coursesEyebrow: 'Courses',
    coursesTitle: 'A clear path, from the first letter to the whole Quran',
    c1Title: 'Noorani Qaida',
    c1Text: 'The perfect start. Learn the Arabic letters, their sounds and how they join, step by step.',
    c2Title: 'Nazra (Quran reading)',
    c2Text: 'Read the Quran fluently and correctly, looking at the text, with steady guidance in every class.',
    c3Title: 'Tajweed',
    c3Text: 'Recite beautifully with the correct rules of pronunciation, makharij and flow.',
    c4Title: 'Hifz and revision',
    c4Text: 'Memorise the Quran with a steady plan, and keep what you have learned strong with regular revision.',
    c5Title: 'Daily duas and salah',
    c5Text: 'Learn everyday duas and the basics of salah, with correct words and clear meaning.',
    c6Title: 'Not sure where to start?',
    c6Text: 'Book a free trial class. Qari Asif will listen to the student and suggest the right course.',
    bookTrial: 'Book trial',

    kidsEyebrow: 'For children',
    kidsTitle: 'Special classes for little learners',
    kidsLead: 'Children learn best when they feel happy and confident. Every class is gentle, encouraging and made to fit their age.',
    k1Title: 'Patient teaching', k1Text: 'No rushing and no pressure. Each child moves forward at their own pace.',
    k2Title: 'Easy lessons', k2Text: 'Short, clear steps that build confidence, one letter and one ayah at a time.',
    k3Title: 'Learning made fun', k3Text: 'Warm encouragement and praise keep children smiling and looking forward to class.',
    kidsAdults: 'Adults are warmly welcome too, including complete beginners.',

    howEyebrow: 'How classes work',
    howTitle: 'Starting is simple',
    s1Title: 'Message on WhatsApp', s1Text: 'Send a short message with the student’s name, age and country.',
    s2Title: 'Free trial class on Google Meet', s2Text: 'Join a live one-to-one trial class and see how lessons work.',
    s3Title: 'Choose your schedule', s3Text: 'Pick class times that suit your family and your time zone.',
    s4Title: 'Learn with regular progress updates', s4Text: 'Steady lessons, with regular updates so you always know how the student is doing.',
    altSetup: 'Qari M. Asif’s online teaching setup with two laptops',
    galCap1: 'The teaching desk, where every live class happens',
    galCap2: 'Live one-to-one on Google Meet',
    galCap3: 'Phone, tablet or laptop, from home',

    worldEyebrow: 'Worldwide students',
    worldTitle: 'A proven track record across the world',
    worldText: 'For 15 years, Qari M. Asif has taught students from many backgrounds and time zones. Families in Australia, the United States, the United Kingdom, Pakistan and other countries trust him with their children’s Quran education.',

    timEyebrow: 'Class timings',
    timTitle: 'Class times in your own time zone',
    timLead: 'We worked out your time zone automatically. You can also choose another one below.',
    timYourZone: 'Your time zone',
    timChoose: 'Show times for',
    timPk: '{time} in Pakistan',
    timNextDay: 'next day', timPrevDay: 'previous day',
    daysMonSat: 'Monday to Saturday',
    slotMorning: 'Morning', slotAfternoon: 'Afternoon', slotEvening: 'Evening', slotNight: 'Night',
    tzAuto: 'Your time zone',
    tzLondon: 'London (UK)', tzNewYork: 'New York (US East)', tzChicago: 'Chicago (US Central)',
    tzLA: 'Los Angeles (US West)', tzToronto: 'Toronto (Canada)', tzSydney: 'Sydney (Australia)',
    tzPerth: 'Perth (Australia)', tzDubai: 'Dubai (UAE)', tzKarachi: 'Pakistan',

    feesEyebrow: 'Fees',
    feesTitle: 'Contact us for fees and packages',
    feesText: 'Fees depend on the course and how many classes you would like each week. Send a message and you will get a clear answer, with no obligation.',
    feesWa: 'Ask on WhatsApp', feesMail: 'Email us',


    faqEyebrow: 'Questions',
    faqTitle: 'Frequently asked questions',
    q1: 'Is there a free trial class?',
    a1: 'Yes. Your first class is a free trial on Google Meet, so you can meet Qari Asif and see how lessons work before deciding.',
    q2: 'Which app do you use for classes?',
    a2: 'All classes are live on Google Meet. You can join from a phone, tablet or computer.',
    q3: 'Do you teach children?',
    a3: 'Yes. There are special classes for children, with patient teaching, easy lessons and learning made fun.',
    q4: 'Can adults who have never read the Quran join?',
    a4: 'Of course. Adults are welcome, and complete beginners can start with Noorani Qaida and move on step by step.',
    q5: 'Are the classes one-to-one?',
    a5: 'Yes. Every class is one-to-one and live, so the student gets full attention.',
    q6: 'I live in the UK, USA or Australia. Will the timings suit me?',
    a6: 'Qari Asif teaches students in Australia, the USA, the UK, Pakistan and other countries. See the timings section for class times in your own time zone, and choose a schedule that suits you.',
    q7: 'Which courses can I choose?',
    a7: 'Noorani Qaida, Nazra (Quran reading), Tajweed, Hifz (memorisation) and revision, and daily duas and salah basics.',
    q8: 'How much are the fees?',
    a8: 'Please contact us for fees and packages on WhatsApp or by email.',

    conEyebrow: 'Free trial',
    conTitle: 'Book your free trial class',
    conText: 'Fill in the form and WhatsApp will open with your message ready to send. You can also message or email directly.',
    conEmail: 'Email',
    fName: 'Your name', fCountry: 'Country', fAge: 'Student age', fPhone: 'WhatsApp number',
    fTime: 'Preferred time', fTimePh: 'e.g. weekdays after 5 pm',
    fErr: 'Please fill in this field.',
    fSubmit: 'Send on WhatsApp',
    fHint: 'Nothing is stored on this website. Your message goes straight to WhatsApp.',

    footLine: 'One-to-one Quran classes on Google Meet, for children and adults around the world.',
    waAria: 'Chat on WhatsApp',

    waGeneric: 'Assalamu alaikum Qari Asif, I would like to book a free trial Quran class.',
    waCourse: 'Assalamu alaikum Qari Asif, I would like to book a free trial class for {course}.'
  },

  ur: {
    docTitle: 'قاری ایم آصف – آن لائن معلمِ قرآن | تجوید، حفظ اور بچوں کی کلاسز',
    skip: 'مرکزی مواد پر جائیں',
    brandName: 'قاری ایم آصف',
    brandTag: 'آن لائن معلمِ قرآن',
    navAbout: 'تعارف', navCourses: 'کورسز', navKids: 'بچوں کے لیے', navHow: 'طریقۂ کار',
    navTimings: 'اوقات', navFaq: 'سوالات', navContact: 'رابطہ', navTrial: 'مفت ٹرائل',
    langAria: 'Switch language to English',
    menuAria: 'مینو کھولیں', menuCloseAria: 'مینو بند کریں',

    heroName: 'قاری ایم آصف',
    heroRole: 'آن لائن معلمِ قرآن',
    heroLead: 'گھر بیٹھے، آرام سے تجوید کے ساتھ قرآن سیکھیں۔',
    heroSub: 'بچوں اور بڑوں کے لیے گوگل میٹ پر براہِ راست ون ٹو ون کلاسز — برطانیہ، امریکہ، آسٹریلیا، پاکستان اور دنیا بھر میں۔',
    ctaTrial: 'مفت ٹرائل کلاس بُک کریں',
    ctaCourses: 'کورسز دیکھیں',
    altHero: 'قاری ایم آصف اپنی میز پر لیپ ٹاپ کے ساتھ، آن لائن قرآن کلاس کے لیے تیار',
    badge: 'سال کا تجربہ',

    trustAria: 'تجربہ اور ممالک',
    trustYears: 'سال سے قرآن کی تدریس',
    marqueeAria: 'آسٹریلیا، امریکہ، برطانیہ، پاکستان اور دیگر ممالک میں طلبہ',
    cAU: 'آسٹریلیا', cUS: 'امریکہ', cUK: 'برطانیہ', cPK: 'پاکستان',
    cMore: 'اور بہت سے ممالک', cOther: 'دیگر ممالک',

    altPortrait: 'قاری ایم آصف کی تصویر، آن لائن معلمِ قرآن',
    aboutCaption: 'قاری ایم آصف',
    aboutEyebrow: 'آپ کے استاد کا تعارف',
    aboutTitle: 'صبر اور محبت کے ساتھ قرآن کی تدریس کے پندرہ سال',
    aboutP1: 'السلام علیکم۔ میں قاری ایم آصف ہوں، اور پچھلے 15 سال سے ہر عمر کے طلبہ کو قرآن پڑھا رہا ہوں۔ آج میں آسٹریلیا، امریکہ، برطانیہ، پاکستان اور دیگر ممالک کے طلبہ کو براہِ راست آن لائن کلاسز کے ذریعے پڑھاتا ہوں۔',
    aboutP2: 'ہر کلاس گوگل میٹ پر ون ٹو ون ہوتی ہے، تاکہ ہر طالب علم کو میری پوری توجہ ملے۔ ہم طالب علم کی رفتار کے مطابق آگے بڑھتے ہیں — نورانی قاعدہ کے پہلے حروف سے لے کر تجوید کے ساتھ روانی سے پڑھنے اور حفظ تک۔',
    aboutP3: 'بچوں کے لیے میرے دل میں خاص جگہ ہے۔ اسباق آسان، صبر والے اور دلچسپ رکھے جاتے ہیں، تاکہ بچے اپنی کلاس کا شوق سے انتظار کریں۔ بڑے بھی ہمیشہ خوش آمدید ہیں، چاہے آپ بالکل شروع سے آغاز کر رہے ہوں۔',
    aboutT1: 'ون ٹو ون براہِ راست کلاسز', aboutT2: 'بچے اور بڑے', aboutT3: 'مفت ٹرائل کلاس',

    hadithAria: 'حدیث',
    hadith: '”تم میں سب سے بہتر وہ ہے جو قرآن سیکھے اور سکھائے۔“',
    hadithRef: 'صحیح بخاری 5027',

    coursesEyebrow: 'کورسز',
    coursesTitle: 'پہلے حرف سے مکمل قرآن تک، ایک واضح راستہ',
    c1Title: 'نورانی قاعدہ',
    c1Text: 'بہترین آغاز۔ عربی حروف، ان کی آوازیں اور انہیں جوڑنا قدم بہ قدم سیکھیں۔',
    c2Title: 'ناظرہ (قرآن پڑھنا)',
    c2Text: 'ہر کلاس میں مسلسل رہنمائی کے ساتھ دیکھ کر قرآن روانی اور درستی سے پڑھیں۔',
    c3Title: 'تجوید',
    c3Text: 'تلفظ، مخارج اور روانی کے صحیح قواعد کے ساتھ خوبصورت تلاوت کریں۔',
    c4Title: 'حفظ اور دہرائی',
    c4Text: 'ایک منظم منصوبے کے ساتھ قرآن حفظ کریں، اور باقاعدہ دہرائی سے یاد کیے ہوئے کو مضبوط رکھیں۔',
    c5Title: 'روزمرہ دعائیں اور نماز',
    c5Text: 'روزمرہ کی دعائیں اور نماز کی بنیادی باتیں صحیح الفاظ اور واضح معنی کے ساتھ سیکھیں۔',
    c6Title: 'کہاں سے شروع کریں؟',
    c6Text: 'مفت ٹرائل کلاس بُک کریں۔ قاری آصف طالب علم کو سن کر مناسب کورس تجویز کریں گے۔',
    bookTrial: 'ٹرائل بُک کریں',

    kidsEyebrow: 'بچوں کے لیے',
    kidsTitle: 'ننھے طلبہ کے لیے خصوصی کلاسز',
    kidsLead: 'بچے تب بہترین سیکھتے ہیں جب وہ خوش اور پُراعتماد ہوں۔ ہر کلاس نرم، حوصلہ افزا اور ان کی عمر کے مطابق ہوتی ہے۔',
    k1Title: 'صبر سے تدریس', k1Text: 'نہ کوئی جلدی، نہ کوئی دباؤ۔ ہر بچہ اپنی رفتار سے آگے بڑھتا ہے۔',
    k2Title: 'آسان اسباق', k2Text: 'چھوٹے اور واضح قدم جو اعتماد بڑھاتے ہیں — ایک وقت میں ایک حرف اور ایک آیت۔',
    k3Title: 'دلچسپ انداز میں سیکھنا', k3Text: 'پیار بھری حوصلہ افزائی اور شاباش بچوں کو مسکراتا رکھتی ہے، اور وہ کلاس کا شوق سے انتظار کرتے ہیں۔',
    kidsAdults: 'بڑے بھی دل سے خوش آمدید ہیں، بالکل نئے سیکھنے والے بھی۔',

    howEyebrow: 'کلاسز کیسے ہوتی ہیں',
    howTitle: 'آغاز بہت آسان ہے',
    s1Title: 'واٹس ایپ پر پیغام بھیجیں', s1Text: 'طالب علم کے نام، عمر اور ملک کے ساتھ ایک مختصر پیغام بھیجیں۔',
    s2Title: 'گوگل میٹ پر مفت ٹرائل کلاس', s2Text: 'براہِ راست ون ٹو ون ٹرائل کلاس میں شامل ہوں اور دیکھیں کہ اسباق کیسے ہوتے ہیں۔',
    s3Title: 'اپنا شیڈول منتخب کریں', s3Text: 'ایسے اوقات چنیں جو آپ کے خاندان اور آپ کے ٹائم زون کے مطابق ہوں۔',
    s4Title: 'باقاعدہ پیش رفت کی اطلاع کے ساتھ سیکھیں', s4Text: 'مسلسل اسباق، اور باقاعدہ اطلاعات تاکہ آپ کو ہمیشہ معلوم رہے کہ طالب علم کیسا جا رہا ہے۔',
    altSetup: 'قاری ایم آصف کا آن لائن تدریسی سیٹ اپ، دو لیپ ٹاپ کے ساتھ',
    galCap1: 'تدریس کی میز، جہاں ہر براہِ راست کلاس ہوتی ہے',
    galCap2: 'گوگل میٹ پر براہِ راست ون ٹو ون',
    galCap3: 'فون، ٹیبلٹ یا لیپ ٹاپ — گھر بیٹھے',

    worldEyebrow: 'دنیا بھر کے طلبہ',
    worldTitle: 'دنیا بھر میں ثابت شدہ کامیاب ریکارڈ',
    worldText: 'پچھلے 15 سال سے قاری ایم آصف مختلف پس منظر اور ٹائم زونز کے طلبہ کو پڑھا رہے ہیں۔ آسٹریلیا، امریکہ، برطانیہ، پاکستان اور دیگر ممالک کے خاندان اپنے بچوں کی قرآنی تعلیم کے لیے ان پر اعتماد کرتے ہیں۔',

    timEyebrow: 'کلاس کے اوقات',
    timTitle: 'کلاس کے اوقات، آپ کے اپنے ٹائم زون میں',
    timLead: 'ہم نے آپ کا ٹائم زون خود معلوم کر لیا ہے۔ آپ نیچے کوئی اور ٹائم زون بھی منتخب کر سکتے ہیں۔',
    timYourZone: 'آپ کا ٹائم زون',
    timChoose: 'اوقات دکھائیں برائے',
    timPk: 'پاکستان میں {time}',
    timNextDay: 'اگلے دن', timPrevDay: 'پچھلے دن',
    daysMonSat: 'پیر تا ہفتہ',
    slotMorning: 'صبح', slotAfternoon: 'دوپہر', slotEvening: 'شام', slotNight: 'رات',
    tzAuto: 'آپ کا ٹائم زون',
    tzLondon: 'لندن (برطانیہ)', tzNewYork: 'نیویارک (مشرقی امریکہ)', tzChicago: 'شکاگو (وسطی امریکہ)',
    tzLA: 'لاس اینجلس (مغربی امریکہ)', tzToronto: 'ٹورنٹو (کینیڈا)', tzSydney: 'سڈنی (آسٹریلیا)',
    tzPerth: 'پرتھ (آسٹریلیا)', tzDubai: 'دبئی (متحدہ عرب امارات)', tzKarachi: 'پاکستان',

    feesEyebrow: 'فیس',
    feesTitle: 'فیس اور پیکجز کے لیے رابطہ کریں',
    feesText: 'فیس کورس اور ہفتہ وار کلاسز کی تعداد پر منحصر ہے۔ پیغام بھیجیں، آپ کو بغیر کسی پابندی کے واضح جواب ملے گا۔',
    feesWa: 'واٹس ایپ پر پوچھیں', feesMail: 'ای میل کریں',


    faqEyebrow: 'سوالات',
    faqTitle: 'اکثر پوچھے جانے والے سوالات',
    q1: 'کیا مفت ٹرائل کلاس ہے؟',
    a1: 'جی ہاں۔ آپ کی پہلی کلاس گوگل میٹ پر مفت ٹرائل ہوتی ہے، تاکہ فیصلہ کرنے سے پہلے آپ قاری آصف سے مل سکیں اور اسباق کا انداز دیکھ سکیں۔',
    q2: 'کلاسز کے لیے کون سی ایپ استعمال ہوتی ہے؟',
    a2: 'تمام کلاسز گوگل میٹ پر براہِ راست ہوتی ہیں۔ آپ فون، ٹیبلٹ یا کمپیوٹر سے شامل ہو سکتے ہیں۔',
    q3: 'کیا آپ بچوں کو پڑھاتے ہیں؟',
    a3: 'جی ہاں۔ بچوں کے لیے خصوصی کلاسز ہیں — صبر سے تدریس، آسان اسباق اور دلچسپ انداز میں سیکھنا۔',
    q4: 'کیا وہ بڑے شامل ہو سکتے ہیں جنہوں نے کبھی قرآن نہیں پڑھا؟',
    a4: 'بالکل۔ بڑے خوش آمدید ہیں، اور بالکل نئے سیکھنے والے نورانی قاعدہ سے شروع کر کے قدم بہ قدم آگے بڑھ سکتے ہیں۔',
    q5: 'کیا کلاسز ون ٹو ون ہوتی ہیں؟',
    a5: 'جی ہاں۔ ہر کلاس ون ٹو ون اور براہِ راست ہوتی ہے، تاکہ طالب علم کو پوری توجہ ملے۔',
    q6: 'میں برطانیہ، امریکہ یا آسٹریلیا میں رہتا ہوں۔ کیا اوقات میرے لیے مناسب ہوں گے؟',
    a6: 'قاری آصف آسٹریلیا، امریکہ، برطانیہ، پاکستان اور دیگر ممالک کے طلبہ کو پڑھاتے ہیں۔ اپنے ٹائم زون میں کلاس کے اوقات کے لیے اوقات والا حصہ دیکھیں، اور اپنی سہولت کا شیڈول منتخب کریں۔',
    q7: 'میں کون سے کورسز منتخب کر سکتا ہوں؟',
    a7: 'نورانی قاعدہ، ناظرہ (قرآن پڑھنا)، تجوید، حفظ اور دہرائی، اور روزمرہ دعائیں اور نماز کی بنیادی باتیں۔',
    q8: 'فیس کتنی ہے؟',
    a8: 'فیس اور پیکجز کے لیے براہِ کرم واٹس ایپ یا ای میل پر رابطہ کریں۔',

    conEyebrow: 'مفت ٹرائل',
    conTitle: 'اپنی مفت ٹرائل کلاس بُک کریں',
    conText: 'فارم پُر کریں اور واٹس ایپ آپ کے تیار پیغام کے ساتھ کھل جائے گا۔ آپ براہِ راست پیغام یا ای میل بھی کر سکتے ہیں۔',
    conEmail: 'ای میل',
    fName: 'آپ کا نام', fCountry: 'ملک', fAge: 'طالب علم کی عمر', fPhone: 'واٹس ایپ نمبر',
    fTime: 'پسندیدہ وقت', fTimePh: 'مثلاً ہفتے کے دنوں میں شام 5 بجے کے بعد',
    fErr: 'براہِ کرم یہ خانہ پُر کریں۔',
    fSubmit: 'واٹس ایپ پر بھیجیں',
    fHint: 'اس ویب سائٹ پر کچھ محفوظ نہیں ہوتا۔ آپ کا پیغام سیدھا واٹس ایپ پر جاتا ہے۔',

    footLine: 'گوگل میٹ پر ون ٹو ون قرآن کلاسز، دنیا بھر کے بچوں اور بڑوں کے لیے۔',
    waAria: 'واٹس ایپ پر بات کریں',

    waGeneric: 'السلام علیکم قاری آصف صاحب، میں مفت ٹرائل قرآن کلاس بُک کرنا چاہتا/چاہتی ہوں۔',
    waCourse: 'السلام علیکم قاری آصف صاحب، میں {course} کے لیے مفت ٹرائل کلاس بُک کرنا چاہتا/چاہتی ہوں۔'
  }
};

/* =========================================================
   Helpers
   ========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lang = 'en';
const t = (key) => (translations[lang] && translations[lang][key]) || translations.en[key] || '';

const storage = {
  get(key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } },
  set(key, value) { try { window.localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ } }
};

const waUrl = (text) => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;

/* =========================================================
   Language
   ========================================================= */
function applyLanguage(next) {
  lang = translations[next] ? next : 'en';
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === 'ur' ? 'rtl' : 'ltr';
  document.title = t('docTitle');

  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  $$('[data-i18n-placeholder]').forEach((el) => { el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder)); });
  $$('[data-i18n-alt]').forEach((el) => { el.setAttribute('alt', t(el.dataset.i18nAlt)); });

  updateMenuLabel();
  updateWhatsAppLinks();
  renderTimings();
  storage.set('lang', lang);
}

/* Pre-filled WhatsApp links; course cards mention their course */
function updateWhatsAppLinks() {
  $$('[data-wa]').forEach((a) => {
    const card = a.dataset.course ? a.closest('.card') : null;
    const course = card ? $('.card__title', card).textContent : '';
    a.href = waUrl(course ? t('waCourse').replace('{course}', course) : t('waGeneric'));
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

/* =========================================================
   Header: scrolled state, mobile menu, active link
   ========================================================= */
const header = $('.site-header');
const navToggle = $('.nav__toggle');

function updateMenuLabel() {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-label', t(open ? 'menuCloseAria' : 'menuAria'));
}

function setMenu(open) {
  header.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  updateMenuLabel();
}

navToggle.addEventListener('click', () => setMenu(navToggle.getAttribute('aria-expanded') !== 'true'));
$$('.nav__links a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('is-open')) { setMenu(false); navToggle.focus(); }
});

const onScrollHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
onScrollHeader();
window.addEventListener('scroll', onScrollHeader, { passive: true });

if ('IntersectionObserver' in window) {
  const links = new Map($$('.nav__links a').map((a) => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.remove('is-active'));
      const link = links.get(entry.target.id);
      if (link) link.classList.add('is-active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => spy.observe(s));
}

/* =========================================================
   Scroll reveal (staggered) and counter
   ========================================================= */
$$('[data-stagger]').forEach((group) => {
  $$('.reveal', group).forEach((el, i) => el.style.setProperty('--d', `${Math.min(i * 0.09, 0.6)}s`));
});

function countUp(el) {
  const target = Number(el.dataset.count);
  if (reduceMotion) { el.textContent = target; return; }
  const duration = 1600;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  };
  el.textContent = '0';
  requestAnimationFrame(tick);
}

if ('IntersectionObserver' in window && !reduceMotion) {
  const revealer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      $$('[data-count]', entry.target).forEach(countUp);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => revealer.observe(el));
} else {
  $$('.reveal').forEach((el) => el.classList.add('is-visible'));
}

/* =========================================================
   Hero parallax (transform only, paused when off-screen)
   ========================================================= */
const parallaxEl = $('[data-parallax]');
if (parallaxEl && !reduceMotion) {
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.2) parallaxEl.style.transform = `translate3d(0, ${y * 0.08}px, 0)`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}

/* =========================================================
   FAQ accordion
   ========================================================= */
$$('.acc__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.acc');
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    item.classList.toggle('is-open', open);
  });
});

/* =========================================================
   Timings in the visitor's time zone
   ========================================================= */
const visitorZone = (() => {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; } catch (e) { return 'UTC'; }
})();
let selectedZone = visitorZone;

/* Offset (ms) of a time zone from UTC at a given instant */
function zoneOffset(timeZone, ts) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  }).formatToParts(new Date(ts));
  const v = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  const asUtc = Date.UTC(+v.year, +v.month - 1, +v.day, +v.hour % 24, +v.minute, +v.second);
  return asUtc - Math.floor(ts / 1000) * 1000;
}

/* UTC instant for a wall-clock time in a time zone */
function zonedTime(y, m, d, hh, mm, timeZone) {
  const guess = Date.UTC(y, m, d, hh, mm);
  let ts = guess - zoneOffset(timeZone, guess);
  ts = guess - zoneOffset(timeZone, ts); // second pass handles DST edges
  return ts;
}

function dateKey(ts, timeZone) {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(ts));
}

function zoneLabel(timeZone) {
  let offset = '';
  try {
    const part = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'shortOffset' })
      .formatToParts(new Date()).find((p) => p.type === 'timeZoneName');
    offset = part ? part.value : '';
  } catch (e) { /* older browsers */ }
  return `${timeZone.replace(/_/g, ' ')}${offset ? ` (${offset})` : ''}`;
}

function buildZoneSelect() {
  const select = $('#tz-select');
  const options = [{ tz: visitorZone, label: `${t('tzAuto')}: ${visitorZone.replace(/_/g, ' ')}` }]
    .concat(CONFIG.zones.filter((z) => z.tz !== visitorZone).map((z) => ({ tz: z.tz, label: t(z.key) })));
  select.innerHTML = '';
  options.forEach((o) => {
    const opt = document.createElement('option');
    opt.value = o.tz;
    opt.textContent = o.label;
    select.appendChild(opt);
  });
  select.value = selectedZone;
}

function renderTimings() {
  const list = $('#tz-slots');
  if (!list) return;
  buildZoneSelect();
  $('#tz-zone').textContent = zoneLabel(selectedZone);
  $('#tz-days').textContent = t(CONFIG.daysKey);

  const locale = lang === 'ur' ? 'ur-PK-u-nu-latn' : undefined;
  const fmt = (ts, timeZone) => new Intl.DateTimeFormat(locale, { timeZone, hour: 'numeric', minute: '2-digit' }).format(new Date(ts));

  // Today's date in Pakistan is the reference day
  const today = dateKey(Date.now(), CONFIG.teacherTimeZone).split('-').map(Number);
  const [y, m, d] = [today[0], today[1] - 1, today[2]];

  list.innerHTML = '';
  CONFIG.slots.forEach((slot) => {
    const [sh, sm] = slot.start.split(':').map(Number);
    const [eh, em] = slot.end.split(':').map(Number);
    const startTs = zonedTime(y, m, d, sh, sm, CONFIG.teacherTimeZone);
    const endDay = (eh * 60 + em) <= (sh * 60 + sm) ? d + 1 : d;
    const endTs = zonedTime(y, m, endDay, eh, em, CONFIG.teacherTimeZone);

    const teacherDay = dateKey(startTs, CONFIG.teacherTimeZone);
    const localDay = dateKey(startTs, selectedZone);
    let shift = '';
    if (localDay > teacherDay) shift = ` · ${t('timNextDay')}`;
    if (localDay < teacherDay) shift = ` · ${t('timPrevDay')}`;

    const li = document.createElement('li');
    li.className = 'slot';
    li.innerHTML = '<span class="slot__dot" aria-hidden="true"></span><span class="slot__name"></span><span class="slot__time" dir="ltr"></span><span class="slot__meta"></span>';
    $('.slot__name', li).textContent = t(slot.nameKey);
    $('.slot__time', li).textContent = `${fmt(startTs, selectedZone)} – ${fmt(endTs, selectedZone)}`;
    // ⁦…⁩ isolates the times so they read correctly inside Urdu text
    $('.slot__meta', li).textContent = t('timPk').replace('{time}',
      `⁦${fmt(startTs, CONFIG.teacherTimeZone)} – ${fmt(endTs, CONFIG.teacherTimeZone)}⁩`) + shift;
    list.appendChild(li);
  });
}

$('#tz-select').addEventListener('change', (e) => { selectedZone = e.target.value; renderTimings(); });

/* =========================================================
   Free trial form → WhatsApp
   ========================================================= */
const form = $('#trial-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let firstInvalid = null;
  $$('input[required]', form).forEach((input) => {
    const ok = input.value.trim() !== '' && input.checkValidity();
    input.closest('.field').classList.toggle('has-error', !ok);
    input.setAttribute('aria-invalid', String(!ok));
    if (!ok && !firstInvalid) firstInvalid = input;
  });
  if (firstInvalid) { firstInvalid.focus(); return; }

  const v = (name) => form.elements[name].value.trim();
  const message = [
    t('waGeneric'),
    '',
    `${t('fName')}: ${v('name')}`,
    `${t('fCountry')}: ${v('country')}`,
    `${t('fAge')}: ${v('age')}`,
    `${t('fPhone')}: ${v('phone')}`,
    `${t('fTime')}: ${v('time') || '-'}`,
    `${t('timYourZone')}: ${visitorZone}`
  ].join('\n');

  const url = waUrl(message);
  const win = window.open(url, '_blank');
  if (win) win.opener = null; else window.location.href = url;
});

$$('input[required]', form).forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value.trim()) { input.closest('.field').classList.remove('has-error'); input.removeAttribute('aria-invalid'); }
  });
});

/* =========================================================
   Init
   ========================================================= */
$('#year').textContent = new Date().getFullYear();

$('#lang-toggle').addEventListener('click', () => applyLanguage(lang === 'en' ? 'ur' : 'en'));
applyLanguage(storage.get('lang') || 'en');
