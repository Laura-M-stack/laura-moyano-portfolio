import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Tag } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';

const heroText = {
  en: {
    titleLine1: 'Full Stack ',
    titleLine2: 'Developer',
    subtitle: 'Turning ideas into digital experiences.',
    description:
      "Full Stack Developer focused on clean UX and scalable, well-designed architectures. I enjoy building reliable applications that combine strong frontend foundations with solid backend development.",
    viewProjects: 'View projects',
    linkedin: 'LinkedIn',
    hi: 'Hi, I am'
  },
  es: {
    titleLine1: 'Desarrolladora',
    titleLine2: 'Full Stack',
    subtitle: 'Transformo ideas en experiencias digitales.',
    description:
      "Desarrolladora Full Stack enfocada en una UX limpia y arquitecturas escalables y bien diseñadas. Disfruto crear aplicaciones confiables que combinan un frontend sólido con un desarrollo backend robusto.",
    viewProjects: 'Ver proyectos',
    linkedin: 'LinkedIn',
    hi: 'Hola, soy'
  }
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const h = heroText[language];

  return (
    <motion.section
      className="hero hero-centered"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.div
        className="hero-left"
        variants={variants}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="hero-eyebrow">
          {h.hi} {profile.name}
        </p>
        <h1 className="hero-title">
          <span className="hero-title-main-group">
            <span className="hero-title-main hero-title-line1">{h.titleLine1}</span>
            <span className="hero-title-main hero-title-line2">{h.titleLine2}</span>
          </span>
        </h1>
        <h2 className="hero-subtitle">
          {h.subtitle}
        </h2>
        <p className="hero-tagline">{h.description}</p>
        <div className="hero-tags">
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            {h.viewProjects}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            {h.linkedin}
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};