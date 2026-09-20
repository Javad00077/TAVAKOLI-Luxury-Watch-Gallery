/**
 * TAVAKOLI WATCH GALLERY — Product Catalog Database
 * Detailed specifications, multiple high-res angles, and reviews
 */

const TAVAKOLI_PRODUCTS = [
  {
    id: "chronograph-black",
    numericId: 1,
    title: "کرونوگراف تیتانیوم سیاه",
    englishTitle: "Titanium Black Chronograph",
    ref: "REF. TK-37-BLK",
    calibre: "Calibre TK-37 Hi-Beat",
    priceNumber: 24800,
    priceFormatted: "$24,800",
    badge: "سری پرچمدار • لیمیتد ۲۵ نسخه",
    category: "chronograph",
    tagline: "ستون‌چرخ کرونوگراف با ضربان ۳۶,۰۰۰ فرکانس و بدنه تیتانیوم گرید ۵ پوشش‌داده‌شده با سرامیک DLC مشکی مات.",
    description: "کرونوگراف تیتانیوم سیاه توکلی تلفیقی نفس‌گیر از میکرومکانیک پیست‌های سرعت و وقار کلاسیک است. بدنه این ساعت از شمش خالص تیتانیوم گرید ۵ در کوره حرارتی خلاء با پوشش سرامیکی ضدسایش Diamond-Like Carbon تراشیده شده است. کلیدهای فشاری شیاردار از طلای ۱۸ عیار، تضادی شاهکار با بدنه مات تیره ایجاد کرده‌اند. روتور وزن‌دار پلاتینی و کالیبر های‌بیت سوئیسی، تضمین‌کننده دقتی در مقیاس یک‌دهم ثانیه هستند.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDORCHh3eSciY1yWbtS7wKedQ6fy50wgkcDe6cQJOOAumO6ETf66sdzpdUtbSsS8tLHMXbB3YyKRcU_h-GNynRcHnpX2Jcv3j-rWNqj6Q5SE2MNauojxJsDWkLzXntpsLo29GH1p9QS6LHXttpvlshA-gCNcM1HrYQOJaArSTnWAB4nbVrUPZuqYPUZwqYLYlZxUg69HcVJ1eaBc2iCF0IiHLNdZy1f0zq-sKJKWpS4KskBf4dNXppo3XKEjsn25YtfGN0",
        label: "نمای اصلی روبرو و صفحه"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv611AW2EGIBRerMmNHpj46vBRr5WPomufWiWc5lBv22DNbvqkv4T77DA4AwkSilWUfZkqVrVwUSUcFdMniNW7B3332UGAmN7MsP8PfZmHtXtolNheMR6aFlUFm9AvURh-7aN_VlS4BVl6INw4y3ihqpwyLV07_09UHZjXlHd3qS4OyZyCH_SxqgUHGRv7-9k6T8iH6FuhYxyGKd8PmYAD7dpfYHHd3BURZ9sA41DQnUBKzLWFgi6LQIESdJEF7Sxr4DY",
        label: "زاویه ۴۵ درجه و جزئیات تاکیمتر"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm2EwrJlZjYw6vASSZJ2LyX9V118xQtN9EjBAZ5uW0CAK3a4D0nYtU6OWNJXwKEAOCmY0XJqzNhfjAAm7slDoiPz0iH3d-waZ_2WhLFcEZ5Zf22o5lgd4qjGHmPgo-Be1TypE-0h0oMVi4L5uoODotM3OSZPbRd2MvHoJIoR0p24YhkXU7Cv2vaYAV7_W67vEEtBCSWvXmutQ1q2m3gi-4Ywpkd08gBpc5DDL0BbENRcT4c7E0M9YeQKhm_zAz9bvyL8c",
        label: "کالبدشکافی مکانیسم و پل‌های کرونوگراف"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy8RazKbkxNest5J9jhG5NJGKOGjcGTBWvw7cHIKVmDji_GHmUbX9dZRlvEHD2FOfYYAGEdUDpWtaJQ87pzDRcJqn5xNy5WZmoSZmHW-wUE1xlu-C-I4KQ6spYua1Z1wjTO3sDmvonUYEIaCEH8bh8BeDBDZGaXOevBuIzE-Vof_ak5wnr5r-wZq5KVMmTzW4KCpAgXQVq3bFd29aGTRtgAwyBMwvbrB1wGJZeWaO7ne6xBUKk8tebkEwTeTOqSVywh4I",
        label: "نمای روی مچ دست و بند دست‌دوز"
      }
    ],
    quickSpecs: [
      { label: "قطر قاب", val: "۴۳ میلی‌متر" },
      { label: "جنس بدنه", val: "تیتانیوم گرید ۵ DLC" },
      { label: "نوع کالیبر", val: "اتوماتیک Hi-Beat ۳۶,۰۰۰" },
      { label: "مقاومت آب", val: "۱۰۰ متر (10 ATM)" },
      { label: "ذخیره نیرو", val: "۷۲ ساعت مداوم" },
      { label: "تعداد قطعات", val: "۳۲۸ قطعه دست‌ساز" }
    ],
    technicalSpecs: {
      movement: [
        { key: "کالیبر ساعت", value: "Tavakoli Calibre TK-37 اتوماتیک کرونوگراف" },
        { key: "فرکانس ضربان", value: "36,000 نوسان در ساعت (5 Hz)" },
        { key: "ذخیره انرژی (Power Reserve)", value: "۷۲ ساعت پیوسته" },
        { key: "تعداد جواهرات (Jewels)", value: "۳۷ یاقوت مصنوعی ضدسایش" },
        { key: "سیستم ضدضربه", value: "Incabloc® پیشرفته سوییس" },
        { key: "روتور شارژ خودکار", value: "پلاتین ۹۵۰ با حکاکی دست‌ساز نشان توکلی" },
        { key: "تلورانس کرونومتریک", value: "منفی ۱ تا مثبت ۲ ثانیه در شبانه‌روز (تاییدیه COSC)" }
      ],
      case: [
        { key: "آلیاژ بدنه", value: "تیتانیوم گرید ۵ فوق‌سبک با پوشش سرامیکی DLC مات" },
        { key: "قطر قاب", value: "۴۳.۰ میلی‌متر" },
        { key: "ضخامت قاب", value: "۱۳.۲ میلی‌متر" },
        { key: "کریستال جلو", value: "یاقوت کبود (سفیر) ضدخش با پوشش چندلایه ضد انعکاس دوطرفه" },
        { key: "درب پشت ساعت", value: "سفیر کریستال شفاف برای تماشای چرخ‌دنده‌ها و چکش کرونوگراف" },
        { key: "تاج و دکمه‌ها", value: "طلای ۱۸ عیار زرد با طرح ضدلغزش و تاج پیچی محافظت‌شده" },
        { key: "مقاومت در برابر آب", value: "۱۰ بار (۱۰۰ متر / ۳۳۰ فوت)" }
      ],
      strap: [
        { key: "متریال بند", value: "چرم تمساح سیاه لوئیزیانا با دوخت دست‌دوز نخ طلایی" },
        { key: "نوع سگک", value: "قفل دابل تاشو امنیتی از تیتانیوم گرید ۵ با پوشش DLC" },
        { key: "عرض دهانه بند", value: "۲۲ میلی‌متر به ۱۸ میلی‌متر در محل قفل" },
        { key: "بند یدکی همراه", value: "بند رابر ورزشی FKM ضد تعریق و ضد حساسیت ساخت سوئیس" }
      ],
      functions: [
        { key: "عملکردها", value: "ساعت، دقیقه، ثانیه‌شمار کوچک در ساعت ۹، تقویم سریع در ساعت ۴:۳۰" },
        { key: "کرونوگراف", value: "سیستم ستون‌چرخ (Column Wheel) با کلاچ عمودی بدون پرش عقربه" },
        { key: "شب‌نما", value: "سوپرلومینووا Grade X1 سوئیسی با درخشش طولانی شبانه سبز لایت" }
      ]
    },
    authenticity: {
      origin: "دست‌ساز در کارگاه ژنو (Geneva Atelier)",
      certification: "گواهینامه رسمی اصالت، شماره سریال منحصربه‌فرد، تاییدیه مانیتورینگ ۳۶۰ ساعته سوئیس",
      box: "جعبه لوکس چوب گردوی سیاه دست‌ساز با کوکر اتوماتیک یکپارچه (Watch Winder) و آداپتور برق",
      warranty: "۵ سال ضمانت بین‌المللی توکلی + ۲ سال سرویس روغن‌کاری و رگلاژ رایگان در سالن‌های VIP"
    },
    reviews: [
      {
        id: "rev-1",
        author: "دکتر کیوان سرمدی",
        date: "۱۴ شهریور ۱۴۰۴",
        rating: 5,
        badge: "خریدار تایید شده",
        text: "کیفیت ساخت بدنه تیتانیومی و مات بودن پوشش DLC فراتر از انتظار من بود. دکمه‌های کرونوگراف فشاری با نرمی و صدای فوق‌العاده لذت‌بخشی عمل می‌کنند. بسته‌بندی چوبی همراه با وایندر بسیار باشکوه بود."
      },
      {
        id: "rev-2",
        author: "مهندس فرزاد رادمهر",
        date: "۲۲ مهر ۱۴۰۴",
        rating: 5,
        badge: "خریدار تایید شده",
        text: "دقت زمان‌سنجی در طول یک ماه گذشته کمتر از ۲ ثانیه خطا داشته که نشان‌دهنده رگلاژ بسیار دقیق کالیبر است. تحویل حضوری در سالن VIP گالری ساعت توکلی تجربه‌ای بسیار محترمانه و بی‌نقص بود."
      },
      {
        id: "rev-3",
        author: "احسان کاویانی",
        date: "۱۰ آبان ۱۴۰۴",
        rating: 5,
        badge: "کلکسیونر ساعت",
        text: "یکی از ارزنده‌ترین ساعت‌های کرونوگراف در این رده قیمتی است. تضاد طلای ۱۸ عیار با تیتانیوم سیاه، امضای شخصیتی خاصی به دست می‌دهد."
      }
    ]
  },
  {
    id: "heritage-1928",
    numericId: 2,
    title: "توکلی هریتیج ایمپریال ۱۹۲۸",
    englishTitle: "Heritage Imperial 1928",
    ref: "REF. TK-1928-GLD",
    calibre: "Calibre 1928 Manual Hand-Wound",
    priceNumber: 18400,
    priceFormatted: "$18,400",
    badge: "شماره ۰۸ از ۵۰ • طلای ۱۸ عیار 4N",
    category: "classic",
    tagline: "صفحه میناکاری گراند-فو سفید، لولاهای آرت دکو، عقربه‌های طلای سرخ و بدنه دست‌تراش از شمش طلای ۱۸ عیار زرد.",
    description: "توکلی هریتیج ایمپریال ادای احترامی است به نخستین سال‌های آغاز میراث ساعت‌سازی این خاندان در دهه ۱۹۲۰ میلادی. صفحه ساعت با روش کهن میناکاری گراند-فو (Grand Feu) در دمای ۸۵۰ درجه سانتی‌گراد پخته شده تا درخششی سفید، شیری و ابدی بیابد. اعداد رومی به سبک قلم نستعلیق-آرت‌دکو با جوهر طلای مایع خوشنویسی شده‌اند.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj7eM9jCWokRXVUYadnT3lCetFkum3ikoSXVC4uTNAcHt2q8jAMtfquBRVq2n-CFoqC-rWowN08LZjokdu6xwm4Npo-0GC2xOZPUWmL7QSAL-Hy5oZR2m_-hr-556botyPOxPilMo8WNRycxdXywLpIwLeAk3rxe41lApodFIIQ4tv-wSNjQ1MsT3NroDs0K1ixPYyo6TzqKbBw0K2g3RHS3fa_6JJbyLsPBY64xkJqH4n9_4tQL180HkiFxl0gByJT44",
        label: "نمای اصلی بدنه طلای ۱۸ عیار"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtDrrBTjNeM47JMxX5vqVEE9JQKjAw4hupdw_gihWOuxGM5N15E8ZkWB4fCrjyJXIEauC8vB2YHGb_AOzRZ2dnY1Lh01TQiqn--hHJNw5xUjVmG2bw5TtBhzPvrnpp21W6OlVA7SFWBWBnZEZEp1snuWxrluv0LtqkoGlOygf4y_tszMJj9nAOuofWFfVJgzHDkOmAloGNdUJChgqC7DyfP7LdZIAHZOfLUslLOL8shDs_IuDvZSuZfA",
        label: "لولاهای تاریخی و کراون طلایی"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHX1aV0L6rQz-3tG5pP7x6j3f1l7BqR0P3f2zL7XzF0c" || "https://lh3.googleusercontent.com/aida-public/AB6AXuCm2EwrJlZjYw6vASSZJ2LyX9V118xQtN9EjBAZ5uW0CAK3a4D0nYtU6OWNJXwKEAOCmY0XJqzNhfjAAm7slDoiPz0iH3d-waZ_2WhLFcEZ5Zf22o5lgd4qjGHmPgo-Be1TypE-0h0oMVi4L5uoODotM3OSZPbRd2MvHoJIoR0p24YhkXU7Cv2vaYAV7_W67vEEtBCSWvXmutQ1q2m3gi-4Ywpkd08gBpc5DDL0BbENRcT4c7E0M9YeQKhm_zAz9bvyL8c",
        label: "پشت قاب و کالیبر کوک دستی کلاسیک"
      }
    ],
    quickSpecs: [
      { label: "قطر قاب", val: "۴۰ میلی‌متر" },
      { label: "جنس بدنه", val: "شمش طلای ۱۸ عیار 4N" },
      { label: "نوع کالیبر", val: "کوک دستی تاریخی ۱۹۲۸" },
      { label: "مقاومت آب", val: "۵۰ متر (5 ATM)" },
      { label: "ذخیره نیرو", val: "۶۵ ساعت" },
      { label: "صفحه", val: "میناکاری گراند-فو سفید" }
    ],
    technicalSpecs: {
      movement: [
        { key: "کالیبر ساعت", value: "Tavakoli Calibre 1928 کوک دستی با چرخ‌دنده‌های صیقلی" },
        { key: "فرکانس ضربان", value: "21,600 نوسان در ساعت (3 Hz)" },
        { key: "ذخیره انرژی", value: "۶۵ ساعت با کوک کامل" },
        { key: "تعداد جواهرات", value: "۲۳ یاقوت سرخ طبیعی تراش‌خورده" },
        { key: "سیستم رقاصک", value: "Glucydur با پیچ‌های تنظیم میکرومتری طلا" },
        { key: "پایان‌کاری کالیبر", value: "طرح خطوط موج‌دار Côtes de Genève با زوایای پخ‌خورده آینه‌ای" }
      ],
      case: [
        { key: "آلیاژ بدنه", value: "طلای ۱۸ عیار زرد استاندارد سلطنتی سوئیس (750/1000)" },
        { key: "قطر قاب", value: "۴۰.۰ میلی‌متر" },
        { key: "ضخامت قاب", value: "۹.۶ میلی‌متر" },
        { key: "کریستال", value: "یاقوت کبود محدب گنبدی کلاسیک ضدخش" },
        { key: "درب پشت", value: "کریستال یاقوت ضد انعکاس با قاب طلا و شماره اختصاصی هک‌شده" },
        { key: "مقاومت آب", value: "۵۰ متر" }
      ],
      strap: [
        { key: "متریال بند", value: "چرم تمساح عسلی مات با دوخت دستی ارگونومیک" },
        { key: "نوع سگک", value: "سگک خاری کلاسیک (Pin Buckle) از طلای ۱۸ عیار با نشان توکلی" }
      ],
      functions: [
        { key: "عملکردها", value: "ساعت، دقیقه، زیرثانیه متقارن در موقعیت ساعت ۶" }
      ]
    },
    authenticity: {
      origin: "تولید دست‌ساز ژنو با شماره سریال ثبت‌شده در بایگانی خاندان توکلی",
      certification: "گواهی خلوص طلای ۱۸ عیار از اتحادیه عیارسنجی سوئیس و سرتیفیکیت دست‌نویس",
      box: "جعبه چرم طبیعی با آستر جیر مخملی و سند مالکیت تاریخی",
      warranty: "۵ سال ضمانت بین‌المللی + خدمات پولیش و صیقل رایگان"
    },
    reviews: [
      {
        id: "rev-10",
        author: "حاج مسعود توتونچی",
        date: "۱۸ شهریور ۱۴۰۴",
        rating: 5,
        badge: "خریدار تایید شده",
        text: "اصالت و سنگینی طلای ۱۸ عیار در این مدل واقعاً روح دیگری دارد. صفحه میناکاری گراند-فو نوری چشم‌نواز بازتاب می‌دهد."
      }
    ]
  },
  {
    id: "flying-tourbillon",
    numericId: 3,
    title: "توربیون پرنده رویال رزگلد",
    englishTitle: "Royal Rose Gold Flying Tourbillon",
    ref: "REF. TK-01-TOURB",
    calibre: "Calibre TK-01 Flying Tourbillon",
    priceNumber: 38900,
    priceFormatted: "$38,900",
    badge: "گراند کامپلیکیشن • سالانه ۵ نسخه",
    category: "tourbillon",
    tagline: "قفسه توربیون چرخان ۶۰ ثانیه‌ای در موقعیت ساعت ۶، پل‌های صیقلی دست‌ساز، ذخیره انرژی ۷۲ ساعت و بدنه رزگلد 5N.",
    description: "قله مهندسی ساعت‌شناسی؛ توربیون پرنده رویال توکلی گرانش زمین را به زانو درمی‌آورد. قفسه توربیون فوق‌سبک از جنس تیتانیوم گرید ۵ تنها ۰.۲۸ گرم وزن دارد و هر ۶۰ ثانیه یک بار در هوا شناور می‌چرخد تا اثر جاذبه بر رقاصک را خنثی سازد. بدنه از آلیاژ رزگلد ۵N با مقاومت در برابر کدرشدگی ساخته شده است.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3pXvLrfOOWMbDDajExTuMX6qn3yCsYeUT00cepx1V2XVONmkfMvFZQfZTaNWnQId80P72ywMH2KhZqc4GeFBavNqE3jnCdyKJVJKHxSDwZkFg_bOaHaPJsHHcntlbJCPcjzmq7YR_xPYxJi4C6YKSTvJdUjkaflgpSk-Zr1g_AXXu0ErS9xKHNN7QwjHoPcVSHii8frAW1SLsOonrZrtrZ8QZrfP2x2S1ZjkCgSgr_EaU1xA6Mn2cBQ",
        label: "نمای جلو و قفسه توربیون پرنده"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm2EwrJlZjYw6vASSZJ2LyX9V118xQtN9EjBAZ5uW0CAK3a4D0nYtU6OWNJXwKEAOCmY0XJqzNhfjAAm7slDoiPz0iH3d-waZ_2WhLFcEZ5Zf22o5lgd4qjGHmPgo-Be1TypE-0h0oMVi4L5uoODotM3OSZPbRd2MvHoJIoR0p24YhkXU7Cv2vaYAV7_W67vEEtBCSWvXmutQ1q2m3gi-4Ywpkd08gBpc5DDL0BbENRcT4c7E0M9YeQKhm_zAz9bvyL8c",
        label: "نمای اسکلتون و حرکت چرخ‌دنده‌ها"
      }
    ],
    quickSpecs: [
      { label: "قطر قاب", val: "۴۲ میلی‌متر" },
      { label: "جنس بدنه", val: "رزگلد ۱۸ عیار 5N" },
      { label: "نوع کالیبر", val: "کوک دستی توربیون پرنده" },
      { label: "مقاومت آب", val: "۳۰ متر (3 ATM)" },
      { label: "ذخیره نیرو", val: "۷۲ ساعت" },
      { label: "وزن قفسه توربیون", val: "۰.۲۸ گرم" }
    ],
    technicalSpecs: {
      movement: [
        { key: "کالیبر ساعت", value: "Tavakoli In-House Calibre TK-01 Flying Tourbillon" },
        { key: "نوع توربیون", value: "توربیون شناور ۶۰ ثانیه‌ای بدون پل بالایی" },
        { key: "تعداد اجزای توربیون", value: "۸۴ قطعه مینیاتوری در قفسه تیتانیومی" },
        { key: "فرکانس ضربان", value: "28,800 نوسان در ساعت (4 Hz)" },
        { key: "ذخیره انرژی", value: "۷۲ ساعت با نشانگر ذخیره نیرو در پشت قاب" }
      ],
      case: [
        { key: "آلیاژ بدنه", value: "رزگلد ۱۸ عیار اختصاصی (Rose Gold 5N)" },
        { key: "قطر قاب", value: "۴۲.۰ میلی‌متر" },
        { key: "ضخامت قاب", value: "۱۱.۴ میلی‌متر" },
        { key: "کریستال جلو و عقب", value: "سفیر ضدخش با پولیش دوبل ضد تابش" }
      ],
      strap: [
        { key: "متریال بند", value: "چرم سوسمار قهوه‌ای شکلاتی مات با آستر ضد رطوبت" },
        { key: "نوع سگک", value: "قفل تاشوی رزگلد ۱۸ عیار با نشان حکاکی دست‌ساز" }
      ],
      functions: [
        { key: "عملکردها", value: "نمایش ساعت، دقیقه، ثانیه‌شمار پیوسته بر روی چرخش توربیون" }
      ]
    },
    authenticity: {
      origin: "آتلیه گراند کامپلیکیشن توکلی در کانتون ژنو",
      certification: "نشان مهر ژنو (Poinçon de Genève) و گواهی نامه کنترل کرونومتری",
      box: "جعبه سلطنتی لاک پیانو با موتور گرداننده و لوح نام خریدار از جنس برنز طلاکاری شده",
      warranty: "۷ سال گارانتی کامل + سرویس VIP نامحدود"
    },
    reviews: [
      {
        id: "rev-20",
        author: "دکتر آرش کیان‌فر",
        date: "۵ مهر ۱۴۰۴",
        rating: 5,
        badge: "خریدار تایید شده",
        text: "شناور بودن توربیون بدون هیچ پلی در بالا، مثل یک معجزه فیزیک است. ظرافت رزگلد و صدای آرام تیک‌تاک آن بی‌نظیر است."
      }
    ]
  },
  {
    id: "ultra-thin-skeleton",
    numericId: 4,
    title: "اسکلتون فوق باریک توکلی",
    englishTitle: "Ultra-Thin Skeleton Platinum",
    ref: "REF. TK-SKEL-950",
    calibre: "Calibre Skeleton Hand-Carved",
    priceNumber: 27500,
    priceFormatted: "$27,500",
    badge: "ضخامت ۵.۴ میلی‌متر • پلاتین ۹۵۰",
    category: "skeleton",
    tagline: "پل‌های قلم‌زنی‌شده با دست، نمایش بی‌مانع رقاصک و چرخ‌دنده‌های طلایی با عقربه‌های استیل آب‌دیده آبی بلود.",
    description: "هنر تجرید مکانیک به باریک‌ترین و زیباترین شکل ممکن. با ضخامت خیره‌کننده ۵.۴ میلی‌متر، تمام صفحات و پل‌های کالیبر با اره‌های مویی و سوهان‌های میکرومتری اسکلتون شده‌اند تا تنها اسکلت ضروری باقی بماند. نور از میان قطعات ساعت عبور می‌کند و عقربه‌های استیل بلود در بازتاب نور جلوه‌ای جادویی دارند.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm2EwrJlZjYw6vASSZJ2LyX9V118xQtN9EjBAZ5uW0CAK3a4D0nYtU6OWNJXwKEAOCmY0XJqzNhfjAAm7slDoiPz0iH3d-waZ_2WhLFcEZ5Zf22o5lgd4qjGHmPgo-Be1TypE-0h0oMVi4L5uoODotM3OSZPbRd2MvHoJIoR0p24YhkXU7Cv2vaYAV7_W67vEEtBCSWvXmutQ1q2m3gi-4Ywpkd08gBpc5DDL0BbENRcT4c7E0M9YeQKhm_zAz9bvyL8c",
        label: "نمای شفاف اسکلتون و عبور نور"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjylcmt_jv5qEp0B_tdJ7ToXJ0q_MyohEkzK6L3A8PesurrRff7nOxjs45tRAGB-Jzy5ryZYStb1C7XpLapCzmjfc891gzg1iBH9fRVPn_bd07lL8-d3OKa0CW1pV0MYXWjjR0_bhPTcVyg6Z2C1vFKSdoeYll1LZOhXQIlKK_tR3Y6qLGH-lCrKdHDyvqBJKyA_cGdm3e8PxM7zOwbkiZvt34JPZEhcnrXduD1sdz1dSdZiJN-C6i_KWw2qAF7NH-dvM",
        label: "ظرافت لبه‌های پلاتینی و شیشه سفیر"
      }
    ],
    quickSpecs: [
      { label: "قطر قاب", val: "۳۹.۵ میلی‌متر" },
      { label: "ضخامت", val: "تنها ۵.۴ میلی‌متر" },
      { label: "جنس بدنه", val: "پلاتین خالص ۹۵۰Pt" },
      { label: "نوع کالیبر", val: "کوک دستی فوق‌باریک اسکلتون" },
      { label: "مقاومت آب", val: "۳۰ متر" },
      { label: "عقربه‌ها", val: "استیل حرارت‌دیده آبی بلود" }
    ],
    technicalSpecs: {
      movement: [
        { key: "کالیبر ساعت", value: "Tavakoli Calibre Skeleton Ultra-Thin" },
        { key: "ضخامت موتور", value: "۲.۴۵ میلی‌متر" },
        { key: "روش ساخت", value: "حکاکی و مشبک‌کاری تمام دست‌ساز" },
        { key: "ذخیره انرژی", value: "۵۰ ساعت" },
        { key: "تعداد جواهرات", value: "۲۱ یاقوت کبود" }
      ],
      case: [
        { key: "آلیاژ بدنه", value: "پلاتین خالص 950 Platinum با براقیت آیینه" },
        { key: "قطر قاب", value: "۳۹.۵ میلی‌متر" },
        { key: "ضخامت قاب", value: "۵.۴ میلی‌متر" }
      ],
      strap: [
        { key: "متریال بند", value: "چرم دست‌دوز سیاه ابریشمی با سگک پلاتینیوم ۹۵۰" }
      ],
      functions: [
        { key: "عملکردها", value: "نمایش ساعت و دقیقه مرکزی بر بستر اسکلتون" }
      ]
    },
    authenticity: {
      origin: "کارگاه اختصاصی اسکلتون ژنو",
      certification: "گواهینامه متالوژی پلاتین و ثبت در دفتر امانات توکلی",
      box: "جعبه لاک مشکی با پوشش داخلی مخمل سرمه‌ای",
      warranty: "۵ سال ضمانت بین‌المللی"
    },
    reviews: [
      {
        id: "rev-30",
        author: "مهندس پدرام ناصری",
        date: "۱۴ مهر ۱۴۰۴",
        rating: 5,
        badge: "خریدار تایید شده",
        text: "باریک بودن این ساعت باورنکردنی است. زیر آستین پیراهن رسمی کاملاً مخفی می‌شود و وقتی دست را بالا می‌آورید، همه محو تماشای مکانیک آن می‌شوند."
      }
    ]
  },
  {
    id: "aviator-navitimer",
    numericId: 5,
    title: "اویتور ناوی‌تایمر استیل",
    englishTitle: "Aviator Navitimer Steel",
    ref: "REF. TK-NAV-44",
    calibre: "Calibre TK-44 Flyback Automatic",
    priceNumber: 15200,
    priceFormatted: "$15,200",
    badge: "خط‌کش محاسباتی • استیل 316L",
    category: "aviation",
    tagline: "کرونوگراف فلای‌بک حرفه‌ای هوانوردی، بند هفت‌ردیفه استیل ضدحساسیت و شب‌نمای با ماندگاری بالا سوپرلومینووا.",
    description: "ساعت ناوبری خلبانان و عاشقان هوانوردی. مجهز به خط‌کش محاسباتی دایره‌ای دوطرفه برای محاسبه سرعت زمینی، مصرف سوخت و نرخ صعود و فرود بدون نیاز به ابزار دیجیتال. قاب مستحکم از استیل زنگ‌نزن دریایی و عقربه‌های خوانا در بدترین شرایط جوی.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTHzJ2sT_5LSGyUuAGlzfVAt0gaOslocRI-9vrq8_qW8PtpOFPlk1F2pWIzuk6ZqIw6oA9zQ6D_5IPrPg06yYojtng1adJVOe842g4ciYUEqoyrjbaovtVzYtTKIXMJNZD-SloZr7iRuGa4C0Go-IvcmTEgNz3BEyAs9HQDeXPGTHATXz9Bt8PdqPDCAFTCxTlbzKtZeUhhlsN1WwknX6GCXcxZ-1s3pJavqrSIByIgCZHsHd9ytxRumzuSNqF4blPtmo",
        label: "نمای صفحه ناوبری و خط‌کش محاسباتی"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDORCHh3eSciY1yWbtS7wKedQ6fy50wgkcDe6cQJOOAumO6ETf66sdzpdUtbSsS8tLHMXbB3YyKRcU_h-GNynRcHnpX2Jcv3j-rWNqj6Q5SE2MNauojxJsDWkLzXntpsLo29GH1p9QS6LHXttpvlshA-gCNcM1HrYQOJaArSTnWAB4nbVrUPZuqYPUZwqYLYlZxUg69HcVJ1eaBc2iCF0IiHLNdZy1f0zq-sKJKWpS4KskBf4dNXppo3XKEjsn25YtfGN0",
        label: "جزئیات دکمه‌های کرونوگراف هوانوردی"
      }
    ],
    quickSpecs: [
      { label: "قطر قاب", val: "۴۱.۵ میلی‌متر" },
      { label: "جنس بدنه", val: "فولاد ضدزنگ 316L" },
      { label: "نوع کالیبر", val: "اتوماتیک فلای‌بک TK-44" },
      { label: "مقاومت آب", val: "۱۰۰ متر" },
      { label: "ویژگی ناوبری", val: "Slide Rule خط‌کش محاسباتی" }
    ],
    technicalSpecs: {
      movement: [
        { key: "کالیبر ساعت", value: "Tavakoli Aviator Calibre TK-44 با مکانیزم فلای‌بک" },
        { key: "فرکانس ضربان", value: "28,800 vph" },
        { key: "ذخیره انرژی", value: "۶۸ ساعت" }
      ],
      case: [
        { key: "آلیاژ بدنه", value: "استیل بهداشتی 316L ضد حساسیت" },
        { key: "بزل چرخان", value: "بزل دندانه‌دار دوطرفه برای خط‌کش ناوبری" }
      ],
      strap: [
        { key: "بند", value: "بند فلزی هفت تکه پیوندی فولادی با قفل ضامنی ایمن" }
      ],
      functions: [
        { key: "عملکردها", value: "کرونوگراف فلای‌بک، محاسبه سرعت، فاصله و مصرف سوخت" }
      ]
    },
    authenticity: {
      origin: "سوئیس، تست‌شده در اتاق‌های فشار هوانوردی",
      certification: "تاییدیه کرونومتر COSC سوئیس",
      box: "باکس آلومینیومی شبیه به جعبه سیاه هواپیما با بند چرمی یدکی و ابزار تعویض بند",
      warranty: "۵ سال ضمانت بین‌المللی"
    },
    reviews: [
      {
        id: "rev-40",
        author: "کاپیتان شایان وثوق",
        date: "۱ شهریور ۱۴۰۴",
        rating: 5,
        badge: "خریدار تایید شده",
        text: "به عنوان خلبان مسافربری، خوانایی بی‌نظیر این ساعت در کابین خلبان و دقت عملکرد فلای‌بک آن تحسین‌برانگیز است."
      }
    ]
  },
  {
    id: "manhattan-diver",
    numericId: 6,
    title: "منهتن اکسپلورر دایور",
    englishTitle: "Manhattan Explorer Submarine",
    ref: "REF. TK-DIVE-3130",
    calibre: "Calibre 3130 Master Chronometer",
    priceNumber: 14600,
    priceFormatted: "$14,600",
    badge: "غواصی حرفه‌ای • ۳۰۰ متر 904L",
    category: "classic",
    tagline: "بزل سرامیک مشکی یک‌طرفه چرخان با درجه‌بندی لیزری، سوپاپ خروج هلیوم اتوماتیک و قفل دوتایی ایمن غواصی.",
    description: "ساعتی غواصی که در تالارهای مجلل به همان اندازه می‌درخشد که در عمق سیصد متری اقیانوس. ساخته شده از فولاد استثنایی 904L مقاوم در برابر آب شور، دارای بزل سرامیکی Cerachrom ضدخش با اعداد پلاتینیوم نشانه‌گذاری شده با لیزر.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHQBXXM0NLitYsgMaLIKK5xiygkhY9ViQw3WyBmvo9Ppvs5I__ZiQdgee3dNQPusv-V8ospfd5dzkjneHxzX-mkhSjlg-Yqyt2AOoIzKUqC4KOccfckLIvK7Ov8Z_gzwypkPwnae5sWj2EMKjJ2ljr6Lk70nnf_toG96oCJp1bAVXZFMbMWkDMVvykb825jxUsk1AtKZSMgp9wx7-DTZA9ZiFz7-V28d8YXblWYoR47W_vfkvW3nuqU7i7KYFaZrpPArw",
        label: "نمای بزل سرامیکی و صفحه مشکی اعماق"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy8RazKbkxNest5J9jhG5NJGKOGjcGTBWvw7cHIKVmDji_GHmUbX9dZRlvEHD2FOfYYAGEdUDpWtaJQ87pzDRcJqn5xNy5WZmoSZmHW-wUE1xlu-C-I4KQ6spYua1Z1wjTO3sDmvonUYEIaCEH8bh8BeDBDZGaXOevBuIzE-Vof_ak5wnr5r-wZq5KVMmTzW4KCpAgXQVq3bFd29aGTRtgAwyBMwvbrB1wGJZeWaO7ne6xBUKk8tebkEwTeTOqSVywh4I",
        label: "قفل تنظیم‌شونده غواصی و بند اویستر"
      }
    ],
    quickSpecs: [
      { label: "قطر قاب", val: "۴۰ میلی‌متر" },
      { label: "جنس بدنه", val: "فولاد فوق‌مقاوم 904L" },
      { label: "مقاومت آب", val: "۳۰۰ متر (30 ATM)" },
      { label: "بزل", val: "سرامیک های‌تک یک‌طرفه ۱۲۰ کلیک" },
      { label: "ذخیره نیرو", val: "۷۰ ساعت" }
    ],
    technicalSpecs: {
      movement: [
        { key: "کالیبر ساعت", value: "Calibre 3130 اتوماتیک مجهز به فنر پاراکروم آبی" },
        { key: "سوپاپ اطمینان", value: "سوپاپ خروج گاز هلیوم خودکار برای غواصی اشباع" },
        { key: "ذخیره نیرو", value: "۷۰ ساعت مداوم" }
      ],
      case: [
        { key: "آلیاژ بدنه", value: "فولاد آلیاژی 904L ضد خوردگی با پولیش و برس‌کاری ترکیبی" },
        { key: "قطر قاب", value: "۴۰.۰ میلی‌متر" },
        { key: "مقاومت آب", value: "۳۰۰ متر معادل ۳۰ اتمسفر" }
      ],
      strap: [
        { key: "بند", value: "بند سه تکه فولادی با سیستم افزایش طول بدون ابزار برای لباس غواصی" }
      ],
      functions: [
        { key: "عملکردها", value: "ساعت، دقیقه، ثانیه، سنجش زمان توقف غواصی با بزل ۱۲۰ کلیک" }
      ]
    },
    authenticity: {
      origin: "سوئیس، تست‌شده در مخازن آب پرفشار",
      certification: "گواهینامه ISO 6425 ساعت‌های غواصی حرفه‌ای",
      box: "جعبه ضدآب هاردکیس پلیمری همراه با کارت مشخصات",
      warranty: "۵ سال ضمانت بین‌المللی"
    },
    reviews: [
      {
        id: "rev-50",
        author: "سامان ابتهاج",
        date: "۲۸ مرداد ۱۴۰۴",
        rating: 5,
        badge: "خریدار تایید شده",
        text: "کیفیت فولاد ۹۰۴ واقعاً احساس متفاوتی از درخشش و مقاومت دارد. روی مچ دست ارگونومی فوق‌العاده‌ای دارد."
      }
    ]
  },
  {
    id: "chrono-tiger",
    numericId: 7,
    title: "کرونو تایگر مکسیموم دبل",
    englishTitle: "Chrono Tiger Maximum Double Digit",
    ref: "REF. TK-TIGER-77",
    calibre: "Calibre TK-77 High-Beat",
    priceNumber: 22800,
    priceFormatted: "$22,800",
    badge: "پرچمدار مسابقات • تیتانیوم DLC",
    category: "chronograph",
    tagline: "کرونوگراف فلای‌بک با بزل تاکیمتر ۵۰۰ کیلومتر، نشانگر تقویم سریع و سیستم ضدضربه اختصاصی پاراشاک.",
    description: "طراحی تهاجمی و دینامیک الهام‌گرفته از خودروهای فرمول یک. بدنه تیتانیوم کربن برس‌خورده با شاخص‌های قرمز پیست و عقربه‌های کرونوگراف دوبل.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv611AW2EGIBRerMmNHpj46vBRr5WPomufWiWc5lBv22DNbvqkv4T77DA4AwkSilWUfZkqVrVwUSUcFdMniNW7B3332UGAmN7MsP8PfZmHtXtolNheMR6aFlUFm9AvURh-7aN_VlS4BVl6INw4y3ihqpwyLV07_09UHZjXlHd3qS4OyZyCH_SxqgUHGRv7-9k6T8iH6FuhYxyGKd8PmYAD7dpfYHHd3BURZ9sA41DQnUBKzLWFgi6LQIESdJEF7Sxr4DY",
        label: "نمای روبرو و تاکیمتر سرعت‌سنج ۵۰۰ کیلومتر"
      },
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDORCHh3eSciY1yWbtS7wKedQ6fy50wgkcDe6cQJOOAumO6ETf66sdzpdUtbSsS8tLHMXbB3YyKRcU_h-GNynRcHnpX2Jcv3j-rWNqj6Q5SE2MNauojxJsDWkLzXntpsLo29GH1p9QS6LHXttpvlshA-gCNcM1HrYQOJaArSTnWAB4nbVrUPZuqYPUZwqYLYlZxUg69HcVJ1eaBc2iCF0IiHLNdZy1f0zq-sKJKWpS4KskBf4dNXppo3XKEjsn25YtfGN0",
        label: "دکمه‌های ارگونومیک مسابقه‌ای"
      }
    ],
    quickSpecs: [
      { label: "قطر قاب", val: "۴۳ میلی‌متر" },
      { label: "فرکانس", val: "36,000 vph" },
      { label: "جنس بدنه", val: "تیتانیوم گرید ۵ و طلا" },
      { label: "مقاومت آب", val: "۱۰۰ متر" }
    ],
    technicalSpecs: {
      movement: [
        { key: "کالیبر ساعت", value: "Calibre TK-77 High-Beat Chronograph" },
        { key: "ذخیره نیرو", val: "۶۵ ساعت" }
      ],
      case: [
        { key: "جنس قاب", value: "تیتانیوم گرید ۵ با پوشش سیاه ضدسایش DLC" },
        { key: "قطر قاب", value: "۴۳.۰ میلی‌متر" }
      ],
      strap: [
        { key: "بند", value: "رابر تقویت‌شده با الیاف آرامید و چرم سوراخ‌دار مسابقه‌ای" }
      ],
      functions: [
        { key: "عملکردها", value: "کرونوگراف صدم ثانیه، تاکیمتر، تقویم خودکار" }
      ]
    },
    authenticity: {
      origin: "سوئیس ژنو",
      certification: "سرتیفیکیت مسابقات کرونومتری",
      box: "جعبه فیبر کربن مسابقه‌ای با کلاه کلکسیونی توکلی",
      warranty: "۵ سال ضمانت بین‌المللی"
    },
    reviews: []
  },
  {
    id: "astronomia-moonphase",
    numericId: 8,
    title: "استرونومیا تقویم دائمی پلاتین",
    englishTitle: "Astronomia Perpetual Calendar Moonphase",
    ref: "REF. TK-ASTRO-950",
    calibre: "Calibre Moonphase Perpetual",
    priceNumber: 42500,
    priceFormatted: "$42,500",
    badge: "تقویم نجومی دائمی • سنگ اونتورین",
    category: "tourbillon",
    tagline: "صفحه سنگ اونتورین با ستاره‌های طلایی، نمایش فاز ماه ۱۲۲ ساله، تقویم دائم روز، ماه و سال کبیسه در پلاتین خالص.",
    description: "کهکشان بر مچ دست شما. صفحه ساعت از سنگ گران‌بهای اونتورین طبیعی تراشیده شده که چونان آسمان پرستاره نیمه‌شب می‌درخشد. ماه از طلای سفید دست‌تراش با دقت ۱۲۲ سال بدون نیاز به یک روز تصحیح حرکت می‌کند.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6_RiGrG492IiB0Bq3OumBHfxek4s7giTZ5j6DqQydoBRvF8hRonWDfVCHp51KEtpryqkpEXVi2ipbLk8MLR4-AWMHbvZ5p4d94QGi9ql74odqLY3HRS-sgabtt9Lp4CgaeRnYAohm7cFQmoqqmefDOykyYV7euqgx9G97h3J7jW-wvCO3zoJuF3TFhGHNIIQEjIGJmvnBt4BXBZ4_wINb5kGa9K2xopkhfb3RwstxCIcQf91XaS4EBg",
        label: "صفحه اونتورین ستاره‌ای و فاز ماه طلایی"
      }
    ],
    quickSpecs: [
      { label: "قطر قاب", val: "۴۲.۵ میلی‌متر" },
      { label: "جنس بدنه", val: "پلاتین خالص 950Pt" },
      { label: "تقویم", val: "دائمی تا سال ۲۱۰۰ بدون تنظیم" },
      { label: "دقت فاز ماه", val: "هر ۱۲۲ سال یک روز خطا" }
    ],
    technicalSpecs: {
      movement: [
        { key: "کالیبر ساعت", value: "Calibre TK Astronomical Perpetual" },
        { key: "ذخیره نیرو", value: "۸۰ ساعت با دو محفظه فنر همزمان" }
      ],
      case: [
        { key: "بدنه", value: "پلاتین سنگین ۹۵۰ با صیقل آینه‌ای" }
      ],
      strap: [
        { key: "بند", value: "چرم سوسمار سرمه‌ای شب با سگک پلاتینی" }
      ],
      functions: [
        { key: "عملکردها", value: "روز، تاریخ، ماه، سال کبیسه، فاز ماه نجومی دقیق" }
      ]
    },
    authenticity: {
      origin: "دست‌ساز کارگاه استرونومی سوئیس",
      certification: "شناسنامه نجومی و تاییدیه رصدخانه ژنو",
      box: "جعبه چوبی سلطنتی با نقشه فلکی دست‌نگار",
      warranty: "۷ سال گارانتی اختصاصی"
    },
    reviews: []
  },
  {
    id: "forged-carbon-emerald",
    numericId: 10,
    title: "فورجد کربن توربیون زمردی",
    englishTitle: "Forged Carbon Emerald Tourbillon",
    ref: "REF. TK-CRB-EMR",
    calibre: "Calibre TK-Carbon Tourbillon",
    priceNumber: 34000,
    priceFormatted: "$34,000",
    badge: "وزن ۶۸ گرم • نگین‌های زمرد باگت",
    category: "tourbillon",
    tagline: "قاب تونو سبک از فیبر کربن فشرده، نگین‌های زمرد باگت طبیعی روی بزل و اسکلتون با بند رابر ضدحساسیت FKM.",
    description: "فیوژن هنر جواهرسازی فاخر و متالوژی مدرن. قاب تونو از کربن فورجد پخته شده در دمای ۲۰۰ درجه سانتی‌گراد ساخته شده که الگوی ابروبادی هر نمونه منحصربه‌فرد است. بزل با نگین‌های زمرد سبز کلمبیایی طبیعی باگت‌تراش مزین گشته است.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0py5B2OCa4SwiJZZ_ZcNVpL5ZVqxhDh34VGs-q8zVkqy8WTr3MaIQA0j-u4SjN5kICAE6tQcxw4tVY3prNjgHDpfgdUz5-KaNCWHQ_eN7sE_PUNQldpyAbZSk4wsI4sVNb-7bv4efN8aXAwKiUU9eWCrybpfwOh7XqZ4ipHh-gnlkh1G93KpLFG7_PfIh0sJv7D4wFE1TAjI0-Fn9e3grBNHN85AbXuHilfzfyIC2KQu1nDKE2wrbcg",
        label: "قاب تونو کربن فورجد و نگین‌های زمرد باگت"
      }
    ],
    quickSpecs: [
      { label: "ابعاد قاب", val: "تونو ۴۲ × ۴۹ میلی‌متر" },
      { label: "وزن ساعت", val: "تنها ۶۸ گرم همراه با بند" },
      { label: "نگین‌ها", val: "۳۶ زمرد کلمبیایی باگت طبیعی" },
      { label: "مقاومت آب", val: "۵۰ متر" }
    ],
    technicalSpecs: {
      movement: [
        { key: "کالیبر ساعت", value: "Calibre TK-Carbon Skeleton Tourbillon" },
        { key: "ذخیره نیرو", value: "۷۰ ساعت" }
      ],
      case: [
        { key: "متریال", value: "کربن فورجد رزین‌فشرده هوانوردی و تیتانیوم" }
      ],
      strap: [
        { key: "بند", value: "رابر FKM سبز زمردی با منافذ جریان هوا" }
      ],
      functions: [
        { key: "عملکردها", value: "توربیون ۶۰ ثانیه‌ای، ساعت، دقیقه" }
      ]
    },
    authenticity: {
      origin: "سوئیس، تولید بسیار محدود سالانه ۳ نسخه",
      certification: "گواهینامه گوهرشناسی زمردهای طبیعی و ثبت برند توکلی",
      box: "هاردکیس سفارشی چرمی زمردی با لوح اختصاصی خریدار",
      warranty: "۵ سال ضمانت بین‌المللی"
    },
    reviews: []
  }
];

// Helper to get product by query string or fallback to first
function getActiveProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const requestedId = urlParams.get('id');

  if (requestedId) {
    // Search by string id or numeric id
    const found = TAVAKOLI_PRODUCTS.find(p => p.id === requestedId || p.numericId.toString() === requestedId);
    if (found) return found;
  }

  // Fallback to first flagship product
  return TAVAKOLI_PRODUCTS[0];
}

// Export to window for standalone consumption
window.TAVAKOLI_PRODUCTS = TAVAKOLI_PRODUCTS;
window.getActiveProduct = getActiveProduct;
