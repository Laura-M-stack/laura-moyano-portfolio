import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../components/Section';
import { projects } from '../data/profile';
import { TagList } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const reduceMotion = useReducedMotion();

  return (
    <Section id="projects" index={3} label={t.navbar.projects} title={t.sections.projectsTitle}>
      <ul className="projects">
        {projects.map((project, index) => {
          const localized = t.projects[project.id as keyof typeof t.projects];
          const hasLink = Boolean(project.link) && project.link !== '#';
          // First project is the hero card. If the rest leave an orphan in the
          // 2-column grid, the last one also goes full width (no lonely card).
          const isOrphan = index === projects.length - 1 && (projects.length - 1) % 2 === 1;
          const featured = index === 0 || isOrphan;

          return (
            <li key={project.id} className={`project ${featured ? 'project--featured' : ''}`}>
              {project.image && (
                <motion.div
                  className="project-media"
                  // Screenshot "wipes" in from the bottom the first time it enters the viewport.
                  initial={reduceMotion ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src={project.image} alt="" loading="lazy" decoding="async" />
                </motion.div>
              )}
              <div className="project-body">
                <p className="project-num">
                  {String(index + 1).padStart(2, '0')} <span>/ {localized.role}</span>
                </p>
                <h3 className="project-title">
                  {hasLink ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      {localized.name}
                      {'\u00A0'}
                      <span className="sr-only"> ({t.sections.opensNewTab})</span>
                      <span aria-hidden="true" className="project-arrow">↗</span>
                    </a>
                  ) : (
                    localized.name
                  )}
                </h3>
                <p className="prose">{localized.description}</p>
                <TagList items={project.tech} label={t.sections.stack} />
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
