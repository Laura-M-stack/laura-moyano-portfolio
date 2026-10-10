import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
});

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const h = translations[language].hero;

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <motion.p className="hero-kicker" {...rise(0.05)}>
        <span className="hero-kicker-dot" aria-hidden="true" />
        {h.kicker}
      </motion.p>

      <motion.h1 className="hero-title" id="hero-title" {...rise(0.12)}>
        {h.titleStart} <em>{h.titleEmphasis}</em>
        {h.titleEnd}
      </motion.h1>

      <div className="hero-bottom">
        <motion.p className="hero-lede" {...rise(0.22)}>
          {h.lede}
        </motion.p>

        <motion.dl className="hero-facts" {...rise(0.3)}>
          {h.facts.map(f => (
            <div key={f.label} className="hero-fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div className="hero-actions" {...rise(0.38)}>
        <a href="#projects" className="btn btn--solid">
          {h.ctaProjects}
          <span aria-hidden="true">↓</span>
        </a>
        <a href={profile.links.email} className="btn btn--line">
          {h.ctaContact}
        </a>
      </motion.div>
    </section>
  );
};
