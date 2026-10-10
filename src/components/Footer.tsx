import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {t.footer}
      </span>
      <span className="footer-note">{t.theme.footerNote}</span>
    </footer>
  );
};
