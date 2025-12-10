import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

const SECTION_IDS = [
  'about',
  'experience',
  'theme-selector',
  'education',
  'projects',
  'talks',
  'contact',
] as const;

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [enableSpy, setEnableSpy] = useState<boolean>(window.innerWidth > 640);

  const links = [
    { id: 'about', label: t.navbar.about },
    { id: 'experience', label: t.navbar.experience },
    { id: 'theme-selector', label: t.navbar.theme },
    { id: 'education', label: t.navbar.education },
    { id: 'projects', label: t.navbar.projects },
    { id: 'talks', label: t.navbar.talks },
    { id: 'contact', label: t.navbar.contact },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  // 🔥 Detectar si es mobile o desktop
  useEffect(() => {
    const handleResize = () => {
      setEnableSpy(window.innerWidth > 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🔥 Scrollspy SOLO desktop
  useEffect(() => {
    if (!enableSpy) return; // no hacer nada si es mobile

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible: IntersectionObserverEntry | null = null;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry;
          }
        }

        if (mostVisible?.target?.id) {
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [enableSpy]);

  const langLabel = language === 'en' ? 'ES' : 'EN';

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo-dot" />
        <span className="navbar-name">Laura Moyano</span>
      </div>

      <nav className={`navbar-nav ${isOpen ? 'navbar-nav--open' : ''}`}>
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            className={
              'nav-link' +
              (enableSpy && activeSection === link.id ? ' nav-link--active' : '')
            }
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </button>
        ))}

        <button
          type="button"
          className="lang-toggle lang-toggle--mobile"
          onClick={toggleLanguage}
        >
          {langLabel}
        </button>
      </nav>

      <div className="navbar-right">
        <button
          type="button"
          className="lang-toggle lang-toggle--desktop"
          onClick={toggleLanguage}
        >
          {langLabel}
        </button>

        <button
          type="button"
          className={`navbar-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          title={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="bar top" />
          <span className="bar middle" />
          <span className="bar bottom" />
        </button>
      </div>
    </header>
  );
};
