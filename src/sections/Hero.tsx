import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

const EASE = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: EASE },
});

/**
 * Each word slides up from behind a mask (overflow: hidden on .word).
 * `start` is the global word index, so the stagger continues across the
 * plain text and the <em> part.
 */
const RevealWords: React.FC<{ text: string; start: number }> = ({ text, start }) => {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return (
    <>
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          {i > 0 && ' '}
          <span className="word">
            <motion.span
              className="word-inner"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.12 + (start + i) * 0.045, duration: 0.9, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
        </React.Fragment>
      ))}
    </>
  );
};

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const h = translations[language].hero;
  const startCount = countWords(h.titleStart);
  const emCount = countWords(h.titleEmphasis);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <motion.p className="hero-kicker" {...rise(0.05)}>
        <span className="hero-kicker-dot" aria-hidden="true" />
        {h.kicker}
      </motion.p>

      {/* key={language}: replay the reveal when the language changes */}
      <h1 className="hero-title" id="hero-title" key={language}>
        <RevealWords text={h.titleStart} start={0} />{' '}
        <em>
          <RevealWords text={h.titleEmphasis} start={startCount} />
        </em>
        {/^\s/.test(h.titleEnd) && ' '}
        <RevealWords text={h.titleEnd} start={startCount + emCount} />
      </h1>

      <div className="hero-bottom">
        <motion.p className="hero-lede" {...rise(0.55)}>
          {h.lede}
        </motion.p>

        <motion.dl className="hero-facts" {...rise(0.65)}>
          {h.facts.map(f => (
            <div key={f.label} className="hero-fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div className="hero-actions" {...rise(0.75)}>
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
