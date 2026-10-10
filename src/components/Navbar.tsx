import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';
import { ThemeSelector } from './ThemeSelector';

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'education', 'talks', 'contact'] as const;

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open; close it with Escape.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const labels: Record<(typeof SECTION_IDS)[number], string> = {
    about: t.navbar.about,
    experience: t.navbar.experience,
    projects: t.navbar.projects,
    skills: t.navbar.skills,
    education: t.navbar.education,
    talks: t.navbar.talks,
    contact: t.navbar.contact,
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setIsOpen(false)}>
          Laura Moyano
        </a>

        <nav
          id="site-menu"
          className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}
          aria-label={language === 'en' ? 'Main' : 'Principal'}
        >
          {SECTION_IDS.map(id => (
            <a key={id} href={`#${id}`} className="nav-link" onClick={() => setIsOpen(false)}>
              {labels[id]}
            </a>
          ))}
        </nav>

        <div className="nav-tools">
          <ThemeSelector />
          <button
            type="button"
            className="nav-lang"
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            type="button"
            className={`nav-burger ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(o => !o)}
            aria-expanded={isOpen}
            aria-controls="site-menu"
            aria-label={isOpen ? t.navbar.closeMenu : t.navbar.openMenu}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};
