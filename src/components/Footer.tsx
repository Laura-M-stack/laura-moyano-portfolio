import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <div className="site-footer-identity">
            <p className="site-footer-eyebrow">{t.sections.contactEyebrow}</p>
            <h2 className="site-footer-name">{profile.name}</h2>
            <p className="site-footer-role">
              {language === 'en' ? 'Full Stack Developer · AI · Design' : 'Desarrolladora Full Stack · IA · Diseño'}
            </p>
          </div>
          <div className="site-footer-links">
            <a href={profile.links.email} className="site-footer-link">
              <span className="site-footer-link-label">Email</span>
              <span className="site-footer-link-value">lauraymh000@gmail.com</span>
              <span className="site-footer-link-arrow">↗</span>
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="site-footer-link">
              <span className="site-footer-link-label">LinkedIn</span>
              <span className="site-footer-link-value">laura-moyano-h</span>
              <span className="site-footer-link-arrow">↗</span>
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="site-footer-link">
              <span className="site-footer-link-label">GitHub</span>
              <span className="site-footer-link-value">Laura-M-stack</span>
              <span className="site-footer-link-arrow">↗</span>
            </a>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} {t.footer}</span>
        </div>
      </div>
    </motion.footer>
  );
};