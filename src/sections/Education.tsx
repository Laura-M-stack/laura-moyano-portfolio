import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Section } from '../components/Section';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
      delay: i * 0.1,
    },
  }),
};

export const Education: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="education" label={t.navbar.education} eyebrow={t.sections.educationEyebrow}>
      <div className="edu-list">
        {t.education.map((edu, index) => (
          <motion.article
            key={index}
            className="edu-item"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
          >
            <div className="edu-year">{edu.year}</div>
            <div className="edu-content">
              <h3 className="edu-title">{edu.title}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-description">{edu.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};