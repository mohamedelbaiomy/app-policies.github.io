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
            'nav.features': 'Features',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'nav.download': 'Download',
            'contact.label': 'Get in touch',
            'contact.title': 'We\'re here to <em>help you.</em>',
            'contact.sub': 'Have a problem with one of the owners, a technical issue, or just a question? Reach out to us directly — we respond fast.',
            'contact.ownerIssues': 'Owner Inquiries',
            'contact.techIssues': 'Technical Support',
            'contact.call': 'Call',
            'contact.whatsapp': 'WhatsApp'
        },
        ar: {
            'nav.features': 'الميزات',
            'nav.about': 'عنا',
            'nav.contact': 'اتصل بنا',
            'nav.download': 'تحميل',
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
                if (key === 'contact.title') {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Set RTL/LTR direction
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
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
                // Special handling for splash screen
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
    });
}

// Start loading components when page loads
document.addEventListener('DOMContentLoaded', loadComponents);