import React from 'react';
import { Section } from '../components/Section';
import { projects } from '../data/profile';
import { Tag } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const linkLabel = language === 'en' ? 'View project' : 'Ver proyecto';
  const sectionLabel = language === 'en' ? 'Latest projects' : 'Últimos proyectos';

  // Duplicate for seamless loop
  const allProjects = [...projects, ...projects];

  return (
    <Section
      id="projects"
      label={t.navbar.projects}
      eyebrow={t.sections.projectsEyebrow}
    >
      <p className="projects-marquee-label">{sectionLabel}</p>
      <div className="projects-marquee-wrapper">
        <div className="projects-marquee-track">
          {allProjects.map((project, index) => {
            const localized = t.projects[project.id as keyof typeof t.projects];
            const hasLink = project.link && project.link !== '#';

            return (
              <article key={`${project.id}-${index}`} className="project-card">
                {project.image && (
                  <div className="project-card-media">
                    <img src={project.image} alt={localized.name} loading="lazy" />
                  </div>
                )}
                <div className="project-card-body">
                  <span className="project-card-index">{String((index % projects.length) + 1).padStart(2, '0')}</span>
                  <h3 className="project-card-title">{localized.name}</h3>
                  <p className="project-card-description">{localized.description}</p>
                  <div className="project-card-tags">
                    {project.tech.map((tag: string) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                  {hasLink && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card-link"
                    >
                      <span>{linkLabel}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
