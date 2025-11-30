import React from 'react';
import { Section } from '../components/Section';
import { projects } from '../data/profile';
import { Tag } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

type Entry = {
  project: (typeof projects)[number];
  localized?: (typeof translations)['en']['projects'][number];
};

type SliderProps = {
  title: string;
  entries: Entry[];
  linkLabel: string;
};

const ProjectsSlider: React.FC<SliderProps> = ({
  title,
  entries,
  linkLabel,
}) => {
  const [index, setIndex] = React.useState(0);
  const total = entries.length;

  if (!total) return null;

  const goPrev = () => setIndex(prev => (prev - 1 + total) % total);
  const goNext = () => setIndex(prev => (prev + 1) % total);

  const getPositionClass = (i: number) => {
    if (i === index) return 'project-slide--active';
    if (i === (index - 1 + total) % total) return 'project-slide--prev';
    if (i === (index + 1) % total) return 'project-slide--next';
    return 'project-slide--off';
  };

  return (
    <section className="projects-slider">
      <div className="projects-slider-header">
        <h3 className="projects-slider-title">{title}</h3>
        {total > 1 && (
          <span className="projects-slider-counter">
            {index + 1} / {total}
          </span>
        )}
      </div>

      <div className="projects-slider-stage">
        {entries.map(({ project, localized }, i) => {
          const positionClass = getPositionClass(i);
          const name = localized?.name ?? project.name;
          const role = localized?.role ?? project.role;
          const description = localized?.description ?? project.description;
          const tech = (localized?.tech ?? project.tech) ?? [];
          const hasLink = project.link && project.link !== '#';

          return (
            <article
              key={project.name}
              className={`card project-slide ${positionClass}`}
            >
              <div className="project-slide-inner">
                {project.image && (
                  <div className="project-slide-media">
                    <img src={project.image} alt={name} loading="lazy" />
                  </div>
                )}

                <div className="project-slide-body">
                  <header className="card-header">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-subtitle muted">{role}</p>
                  </header>

                  <p className="card-description">{description}</p>

                  <div className="card-tags">
                    {tech.map(tag => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>

                  {hasLink && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="card-link project-slide-link"
                    >
                      <span>{linkLabel}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        {total > 1 && (
          <>
            <button
              type="button"
              className="projects-slider-nav projects-slider-nav--prev"
              onClick={goPrev}
              aria-label="Proyecto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className="projects-slider-nav projects-slider-nav--next"
              onClick={goNext}
              aria-label="Proyecto siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const entries: Entry[] = projects.map((project, index) => ({
    project,
    localized: t.projects?.[index] as any,
  }));

  // primeros 3 como destacados
  const featured = entries.slice(0, 3);
  const others = entries.slice(3);

  const linkLabel = language === 'en' ? 'View project' : 'Ver proyecto';
  const featuredLabel =
    language === 'en' ? 'Featured projects' : 'Proyectos destacados';
  const othersLabel =
    language === 'en' ? 'Other projects' : 'Otros proyectos';

  return (
    <Section
      id="projects"
      label={t.navbar.projects}
      eyebrow={t.sections.projectsEyebrow}
    >
      <div className="projects-layout">
        <ProjectsSlider
          title={featuredLabel}
          entries={featured}
          linkLabel={linkLabel}
        />
        {others.length > 0 && (
          <ProjectsSlider
            title={othersLabel}
            entries={others}
            linkLabel={linkLabel}
          />
        )}
      </div>
    </Section>
  );
};
