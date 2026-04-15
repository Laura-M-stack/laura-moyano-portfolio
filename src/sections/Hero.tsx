import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

const heroText = {
  en: {
    titlePre: 'I build digital products',
    titleHighlight: 'with real business sense ',
    titlePost: 'and user focus.',
    subtitle: '20+ years understanding what people actually need — now applied to technology.',
    description: "Full Stack Developer focused on frontend, UX and AI projects. I work end-to-end — from architecture to interface — prioritizing clarity, usability, and solutions that actually make sense.",
    viewProjects: 'See products',
    github: 'GitHub',
    hi: "Hi, I'm"
  },
  es: {
    titlePre: 'Construyo productos digitales',
    titleHighlight: 'con criterio de negocio ',
    titlePost: 'y foco en el usuario.',
    subtitle: 'Más de 20 años entendiendo qué necesita la gente — ahora aplicado a la tecnología.',
    description: "Desarrolladora Full Stack con foco en frontend, UX y proyectos de IA. Trabajo de punta a punta — desde la arquitectura hasta la interfaz — priorizando claridad, usabilidad y soluciones que realmente tengan sentido.",
    viewProjects: 'Ver productos',
    github: 'GitHub',
    hi: 'Hola, soy'
  }
};

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const h = heroText[language];

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="hero-inner hero-text-only">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {h.hi} {profile.name}
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <span className="hero-title-main">
            {h.titlePre}{' '}
            <div className="hero-title-gradient">{h.titleHighlight}</div>
            {h.titlePost}
          </span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
        >
          {h.subtitle}
        </motion.h2>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {h.description}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <a href="#projects" className="btn-primary">{h.viewProjects}</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn-ghost">
            {h.github}
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};