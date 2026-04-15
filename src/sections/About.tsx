import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="about" label={t.navbar.about} eyebrow={t.sections.aboutEyebrow}>
      <div className="about-layout">
        <motion.div
          className="about-photo-col"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="about-photo-ring">
            <img src="foto-perfil.png" alt={profile.name} />
          </div>
        </motion.div>

        <div className="about-text-col">
          {t.about.map((p, i) => (
            <motion.p
              key={i}
              className="paragraph"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </Section>
  );
};