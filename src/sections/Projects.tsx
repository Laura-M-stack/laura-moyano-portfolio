import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../components/Section';
import { projects } from '../data/profile';
import { TagList } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

// The hero card plus 8 cards (4 rows) are the curated sample; the rest sits behind a toggle.
const INITIAL_VISIBLE = 9;

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hidden = projects.length - INITIAL_VISIBLE;

  return (
    <Section id="projects" index={3} label={t.navbar.projects} title={t.sections.projectsTitle}>
      <ul className="projects" id="projects-list">
        {shown.map((project, index) => {
          const localized = t.projects[project.id as keyof typeof t.projects];
          const hasLink = Boolean(project.link) && project.link !== '#';
          // First project is the hero card. If the rest leave an orphan in the
          // 2-column grid, the last one also goes full width (no lonely card).
          const isOrphan = index === shown.length - 1 && (shown.length - 1) % 2 === 1;
          const featured = index === 0 || isOrphan;

          return (
            <li key={project.id} className={`project ${featured ? 'project--featured' : ''}`}>
              {project.image && (
                // Chrome's IntersectionObserver applies the target's own clip-path, so a
                // fully clipped element never reports as visible and the wipe never starts.
                // The observer goes on an unclipped wrapper; the clip animates on the child
                // through variant propagation.
                <motion.div
                  className="project-media-wrap"
                  initial={reduceMotion ? false : 'hidden'}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <motion.div
                    className="project-media"
                    variants={{
                      hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
                      visible: { clipPath: 'inset(0% 0% 0% 0%)' },
                    }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Not lazy: lazy-loading also ignores clipped images, so the wipe would reveal an empty box. */}
                    <img src={project.image} alt="" decoding="async" />
                  </motion.div>
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
      {hidden > 0 && (
        <div className="projects-more">
          <button
            type="button"
            className="btn btn--line"
            aria-expanded={expanded}
            aria-controls="projects-list"
            onClick={() => {
              if (expanded) {
                document.getElementById('projects')?.scrollIntoView({ block: 'start' });
              }
              setExpanded(!expanded);
            }}
          >
            {expanded ? t.sections.showLess : `${t.sections.showMore} (${hidden})`}
          </button>
        </div>
      )}
    </Section>
  );
};
