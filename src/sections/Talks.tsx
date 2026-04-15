import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Section } from '../components/Section';
import { talks } from '../data/profile';
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

export const Talks: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="talks" label={t.navbar.talks} eyebrow={t.sections.talksEyebrow}>
      <div className="talks-grid">
        {talks.map((talk, index) => {
          const localized = t.talks[index];
          return (
            <motion.article
              key={talk.title}
              className="talk-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
            >
              <span className="talk-year">{localized?.year ?? talk.year}</span>
              <h3 className="talk-title">{localized?.title ?? talk.title}</h3>
              <p className="talk-event">{localized?.event ?? talk.event}</p>
              <p className="talk-description">{localized?.description ?? talk.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
};