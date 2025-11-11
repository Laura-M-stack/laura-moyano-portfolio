import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'about', label: t.navbar.about },
    { id: 'experience', label: t.navbar.experience },
    { id: 'projects', label: t.navbar.projects },
    { id: 'talks', label: t.navbar.talks },
    { id: 'contact', label: t.navbar.contact },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  const langLabel = language === 'en' ? 'ES' : 'EN';

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo-dot" />
        <span className="navbar-name">Laura Moyano</span>
      </div>

      <nav className={`navbar-nav ${isOpen ? 'navbar-nav--open' : ''}`}>
        {links.map(link => (
          <button
            key={link.id}
            type="button"
            className="nav-link"
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
        >
          <span className="bar top" />
          <span className="bar middle" />
          <span className="bar bottom" />
        </button>
      </div>
    </header>
  );
};