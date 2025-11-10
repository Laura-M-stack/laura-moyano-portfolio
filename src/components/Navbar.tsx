import React from 'react';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const sections = [
    { id: 'about', label: t.navbar.about },
    { id: 'experience', label: t.navbar.experience },
    { id: 'projects', label: t.navbar.projects },
    { id: 'talks', label: t.navbar.talks },
    { id: 'contact', label: t.navbar.contact }
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleLang = () => setLanguage(language === 'en' ? 'es' : 'en');

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo-dot" />
        <span className="navbar-name">{profile.name}</span>
      </div>
      <nav className="navbar-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className="nav-link"
            onClick={() => handleScroll(section.id)}
          >
            {section.label}
          </button>
        ))}
        <button className="nav-link" onClick={toggleLang}>
          {language === 'en' ? 'ES' : 'EN'}
        </button>
      </nav>
    </header>
  );
};
