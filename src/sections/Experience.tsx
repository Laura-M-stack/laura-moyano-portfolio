import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Section } from '../components/Section';
import { experiences } from '../data/profile';
import { Tag } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: i * 0.08,
    },
  }),
};

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="experience" label={t.navbar.experience} eyebrow={t.sections.experienceEyebrow}>
      <div className="exp-timeline">
        {experiences.map((exp, index) => {
          const localized = t.experience[exp.id as keyof typeof t.experience];

          return (
            <motion.article
              key={exp.id}
              className="exp-item"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <div className="exp-index">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="exp-content">
                <header className="exp-header">
                  <div>
                    <h3 className="exp-role">{localized.role}</h3>
                    <p className="exp-meta">
                      {exp.company}
                      <span className="exp-period"> · {localized.period}</span>
                    </p>
                  </div>
                  <div className="exp-tags-inline">
                    {exp.tech.map(tg => <Tag key={tg} label={tg} />)}
                  </div>
                </header>
                <p className="exp-description">{localized.description}</p>
                <ul className="exp-list">
                  {localized.highlights.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
};
