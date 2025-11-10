import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Tag } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';

const heroText = {
  en: {
    titleLine1: 'Front End',
    titleLine2: 'Developer',
    subtitle: 'Turning ideas into digital experiences.',
    description:
      'Front End Developer with a focus on clean UX, scalable interfaces and AI integration. I enjoy combining design, technology and creativity to build meaningful digital products.',
    viewProjects: 'View projects',
    linkedin: 'LinkedIn',
    sidebarTitle: 'MAKE YOUR REALITY',
    sidebarText:
      'I love mixing code, design and AI to help people move from idea to action. Tech is my toolbox. Mindset is my engine.',
    sidebarLink: 'Visit my YouTube channel',
    hi: 'Hi, I am'
  },
  es: {
    titleLine1: 'Desarrolladora',
    titleLine2: 'Front End',
    subtitle: 'Transformo ideas en experiencias digitales.',
    description:
      'Desarrolladora Front End enfocada en UX limpio, interfaces escalables e integración con inteligencia artificial. Me gusta combinar diseño, tecnología y creatividad para construir productos digitales significativos.',
    viewProjects: 'Ver proyectos',
    linkedin: 'LinkedIn',
    sidebarTitle: 'MAKE YOUR REALITY',
    sidebarText:
      'Me encanta combinar código, diseño e inteligencia artificial para ayudar a las personas a pasar de la idea a la acción. La tecnología es mi caja de herramientas. La mentalidad es mi motor.',
    sidebarLink: 'Visitar mi canal de YouTube',
    hi: 'Hola, soy'
  }
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const h = heroText[language];

  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.div
        className="hero-left"
        variants={leftVariants}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="hero-eyebrow">
          {h.hi} {profile.name}
        </p>

        <h1 className="hero-title">
          <span className="hero-title-main hero-title-line">
            {h.titleLine1}
          </span>
          <span className="hero-title-main hero-title-line">
            {h.titleLine2}
          </span>
          <span className="hero-subtitle">
            {h.subtitle}
          </span>
        </h1>

        <p className="hero-tagline">{h.description}</p>

        <div className="hero-tags">
          {profile.keywords.map(keyword => (
            <Tag key={keyword} label={keyword} />
          ))}
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

      <motion.div
        className="hero-right"
        variants={rightVariants}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="hero-card">
          <p className="hero-card-title">{h.sidebarTitle}</p>
          <p className="hero-card-text">{h.sidebarText}</p>
          <a
            href={profile.links.youtube}
            target="_blank"
            rel="noreferrer"
            className="hero-card-link"
          >
            {h.sidebarLink}
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};