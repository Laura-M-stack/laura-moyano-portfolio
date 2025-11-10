import React from 'react';
import { Section } from '../components/Section';
import { projects } from '../data/profile';
import { Tag } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section
      id="projects"
      label={t.navbar.projects}
      eyebrow={t.sections.projectsEyebrow}
    >
      <div className="cards-grid">
        {projects.map((project, index) => {
          const localized = t.projects[index];

          return (
            <article key={project.name} className="card">
              <header className="card-header">
                <h3 className="card-title">
                  {localized?.name ?? project.name}
                </h3>
                <p className="card-subtitle muted">
                  {localized?.role ?? project.role}
                </p>
              </header>

              <p className="card-description">
                {localized?.description ?? project.description}
              </p>

              <div className="card-tags">
                {(localized?.tech ?? project.tech).map(tg => (
                  <Tag key={tg} label={tg} />
                ))}
              </div>

              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  {language === 'en' ? 'View project' : 'Ver proyecto'}
                </a>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
};