// core/main.js

// Dark/Light Mode Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Language Toggle (EN/AR)
function initLangToggle() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    const translations = {
        en: {
            'splash.tagline': 'Find Your Best Residence',

            // Navigation
            'nav.features': 'Features',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'nav.download': 'Download',

            // Hero Section
            'hero.eyebrow': 'Real Estate · Simplified',
            'hero.title': "Let's find your<br /><em>best residence.</em>",
            'hero.sub': 'Sakank connects you with the right apartments, rooms, and homes near you — with smart search, award points, and a seamless booking experience.',
            'hero.appstore.line1': 'Download on the',
            'hero.appstore.line2': 'App Store',
            'hero.playstore.line1': 'Get it on',
            'hero.playstore.line2': 'Google Play',

            'contact.community.label': 'Join Our Community',
            'contact.community.title': 'Stay Connected & Get Updates',
            'contact.community.desc': 'Be the first to know about new listings, exclusive offers, and housing tips. Join our WhatsApp group or follow our Telegram channel!',

            // Features Section
            'features.label': 'What we offer',
            'features.title': 'Everything you need to find your <em>perfect home.</em>',
            'features.card1.title': 'Smart Search',
            'features.card1.desc': 'Find apartments, rooms, and residences near you with powerful filters for location, price, and type.',
            'features.card2.title': 'Multi-Language',
            'features.card2.desc': 'Available in English, Arabic, Turkish, French, Italian, and German — built for everyone.',
            'features.card3.title': 'Reward Points',
            'features.card3.desc': 'Earn points with every activity in the app. Claim awards and unlock exclusive benefits as you explore.',
            'features.card4.title': 'Instant Booking',
            'features.card4.desc': 'Reserve your place in seconds. Deposit instructions are clear, with a 1-hour confirmation window.',
            'features.card5.title': 'Nearby Listings',
            'features.card5.desc': 'Discover places near your current location automatically — no manual searching required.',
            'features.card6.title': 'Direct Support',
            'features.card6.desc': 'Contact owners or our technical team directly via call or WhatsApp, right inside the app.',

            // About Section
            'about.title': 'Sakank Platform',
            'about.subtitle': 'Trusted residence finder',
            'about.stat1.value': '500+',
            'about.stat1.label': 'Listings',
            'about.stat2.value': '4.9★',
            'about.stat2.label': 'App Rating',
            'about.stat3.value': '6',
            'about.stat3.label': 'Languages',
            'about.stat4.value': '24/7',
            'about.stat4.label': 'Support',
            'about.reward.title': 'Reward System',
            'about.reward.desc': 'Earn points on every interaction',
            'about.mission.label': 'Our mission',
            'about.mission.title': 'Housing made <em>easy</em> for everyone.',
            'about.mission.desc1': 'Sakank was built to simplify the search for quality residences in Egypt. Whether you\'re a student, a professional, or a family, finding a trustworthy place to live should never be stressful.',
            'about.mission.desc2': 'With multilingual support, a transparent booking process, and direct owner contact via WhatsApp or call, we bridge the gap between tenants and landlords — safely and efficiently.',

            // Download Section
            'download.label': 'Get started today',
            'download.title': 'Ready to find your residence?',
            'download.sub': 'Download Sakank free and start exploring listings near you today.',
            'download.appstore.line1': 'Download on the',
            'download.appstore.line2': 'App Store',
            'download.playstore.line1': 'Get it on',
            'download.playstore.line2': 'Google Play',

            // Contact Section
            'contact.label': 'Get in touch',
            'contact.title': 'We\'re here to <em>help you.</em>',
            'contact.sub': 'Have a problem with one of the owners, a technical issue, or just a question? Reach out to us directly — we respond fast.',
            'contact.ownerIssues': 'Owner Inquiries',
            'contact.techIssues': 'Technical Support',
            'contact.call': 'Call',
            'contact.whatsapp': 'WhatsApp'
        },
        ar: {
            'splash.tagline': 'ابحث عن أفضل سكن لك',

            // Navigation
            'nav.features': 'الميزات',
            'nav.about': 'عنا',
            'nav.contact': 'اتصل بنا',
            'nav.download': 'تحميل',

            'contact.community.label': 'انضم إلى مجتمعنا',
            'contact.community.title': 'ابق على اتصال واحصل على التحديثات',
            'contact.community.desc': 'كن أول من يعرف عن القوائم الجديدة والعروض الحصرية ونصائح السكن. انضم إلى مجموعة الواتساب أو تابع قناتنا على التليجرام!',

            // Hero Section
            'hero.eyebrow': 'العقارات · ببساطة',
            'hero.title': 'دعنا نجد<br /><em>أفضل سكن لك.</em>',
            'hero.sub': 'يربطك تطبيق "سكنك" بالشقق والغرف والمنازل المناسبة القريبة منك — من خلال بحث ذكي، ونقاط مكافآت، وتجربة حجز سلسة.',
            'hero.appstore.line1': 'حمّلها من',
            'hero.appstore.line2': 'متجر آبل',
            'hero.playstore.line1': 'حمّلها من',
            'hero.playstore.line2': 'جوجل بلاي',

            // Features Section
            'features.label': 'ما نقدمه',
            'features.title': 'كل ما تحتاجه للعثور على <em>منزلك المثالي.</em>',
            'features.card1.title': 'بحث ذكي',
            'features.card1.desc': 'ابحث عن الشقق والغرف والمنازل القريبة منك باستخدام فلاتر قوية للموقع والسعر والنوع.',
            'features.card2.title': 'دعم متعدد اللغات',
            'features.card2.desc': 'متوفر باللغات الإنجليزية والعربية والتركية والفرنسية والإيطالية والألمانية — تم تصميمه للجميع.',
            'features.card3.title': 'نقاط المكافآت',
            'features.card3.desc': 'اكسب نقاطاً مع كل نشاط في التطبيق. احصل على جوائز وافتح مزايا حصرية أثناء استكشافك.',
            'features.card4.title': 'حجز فوري',
            'features.card4.desc': 'احجز مكانك في ثوانٍ. تعليمات الإيداع واضحة، مع نافذة تأكيد مدتها ساعة واحدة.',
            'features.card5.title': 'قوائم قريبة',
            'features.card5.desc': 'اكتشف الأماكن القريبة من موقعك الحالي تلقائياً — دون الحاجة إلى بحث يدوي.',
            'features.card6.title': 'دعم مباشر',
            'features.card6.desc': 'تواصل مع المالكين أو فريق الدعم الفني مباشرة عبر الاتصال أو الواتساب، داخل التطبيق.',

            // About Section
            'about.title': 'منصة سكنك',
            'about.subtitle': 'وسيلة موثوقة للعثور على السكن',
            'about.stat1.value': '500+',
            'about.stat1.label': 'قائمة',
            'about.stat2.value': '4.9★',
            'about.stat2.label': 'تقييم التطبيق',
            'about.stat3.value': '6',
            'about.stat3.label': 'لغات',
            'about.stat4.value': '24/7',
            'about.stat4.label': 'دعم',
            'about.reward.title': 'نظام المكافآت',
            'about.reward.desc': 'اكسب نقاطاً مع كل تفاعل',
            'about.mission.label': 'مهمتنا',
            'about.mission.title': 'نجعل السكن <em>سهلاً</em> للجميع.',
            'about.mission.desc1': 'تم بناء تطبيق "سكنك" لتبسيط البحث عن مساكن عالية الجودة في مصر. سواء كنت طالباً أو موظفاً أو عائلة، فإن العثور على مكان موثوق للعيش لا يجب أن يكون مرهقاً أبداً.',
            'about.mission.desc2': 'بفضل الدعم متعدد اللغات، وعملية الحجز الشفافة، والتواصل المباشر مع المالك عبر الواتساب أو الاتصال، نسد الفجوة بين المستأجرين وأصحاب العقارات — بأمان وكفاءة.',

            // Download Section
            'download.label': 'ابدأ اليوم',
            'download.title': 'هل أنت مستعد للعثور على سكنك؟',
            'download.sub': 'حمّل تطبيق "سكنك" مجاناً وابدأ في استكشاف القوائم القريبة منك اليوم.',
            'download.appstore.line1': 'حمّلها من',
            'download.appstore.line2': 'متجر آبل',
            'download.playstore.line1': 'حمّلها من',
            'download.playstore.line2': 'جوجل بلاي',

            // Contact Section
            'contact.label': 'تواصل معنا',
            'contact.title': 'نحن هنا <em>لمساعدتك.</em>',
            'contact.sub': 'هل تواجه مشكلة مع أحد المالكين، أو مشكلة تقنية، أو لديك سؤال؟ تواصل معنا مباشرة — نرد بسرعة.',
            'contact.ownerIssues': 'استفسارات المالك',
            'contact.techIssues': 'الدعم الفني',
            'contact.call': 'اتصال',
            'contact.whatsapp': 'واتساب'
        }
    };

    let currentLang = localStorage.getItem('language') || 'en';

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        langToggle.textContent = lang.toUpperCase();

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (key === 'hero.title' || key === 'about.mission.title' || key === 'contact.title' || key === 'features.title') {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Set RTL/LTR direction
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.style.fontFamily = "'DM Sans', 'Cairo', sans-serif";
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.style.fontFamily = "'DM Sans', sans-serif";
        }
    }

    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage(newLang);
    });

    updateLanguage(currentLang);
}

// Scroll reveal observer
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 90);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Function to initialize all interactive features after components load
function initializeInteractions() {
    initThemeToggle();
    initLangToggle();
    initScrollReveal();
}

// Load all components and initialize
function loadComponents() {
    const components = [
        { id: 'splash-placeholder', url: 'core/splash.html', hasHide: true },
        { id: 'nav-placeholder', url: 'core/nav.html', hasHide: false },
        { id: 'hero', url: 'core/hero.html', hasHide: false },
        { id: 'features-placeholder', url: 'core/features.html', hasHide: false },
        { id: 'about-placeholder', url: 'core/about.html', hasHide: false },
        { id: 'download-placeholder', url: 'core/download.html', hasHide: false },
        { id: 'contact-placeholder', url: 'core/contact.html', hasHide: false }
    ];

    const fetches = components.map(comp =>
        fetch(comp.url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(comp.id).innerHTML = data;
                if (comp.hasHide) {
                    setTimeout(() => {
                        const splash = document.getElementById('splash');
                        if (splash) splash.classList.add('hidden');
                    }, 2600);
                }
            })
            .catch(error => console.error(`Error loading ${comp.url}:`, error))
    );

    Promise.all(fetches).then(() => {
        setTimeout(initializeInteractions, 100);
    }).catch(() => {
        setTimeout(initializeInteractions, 100);
    });
}

// Start loading components when page loads
document.addEventListener('DOMContentLoaded', loadComponents);