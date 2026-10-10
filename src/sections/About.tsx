import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { profile, talks } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="about" index={1} label={t.navbar.about} title={t.sections.aboutTitle}>
      <div className="about">
        <figure className="about-photo">
          <img src="foto-laura.webp" alt={profile.name} width={768} height={1367} loading="lazy" />
        </figure>
        <div className="about-text">
          {t.about.map((p, i) => (
            <p key={i} className={i === 0 ? 'lead' : 'prose'}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <dl className="bento">
        {t.aboutStats.map((stat, i) => (
          <motion.div
            key={stat.key}
            className={`bento-tile bento-tile--${stat.key}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Talks count comes from the data, so it can't drift from the Talks section. */}
            <dt className="bento-value">{stat.key === 'talks' ? talks.length : stat.value}</dt>
            <dd className="bento-label">{stat.label}</dd>
          </motion.div>
        ))}
      </dl>
    </Section>
  );
};
