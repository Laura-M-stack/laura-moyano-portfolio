import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      <span>
        © {new Date().getFullYear()} {t.footer}
      </span>
    </motion.footer>
  );
};