import React from 'react';
import { Section } from '../components/Section';
import { experiences } from '../data/profile';
import { Tag } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section
      id="experience"
      label={t.navbar.experience}
      eyebrow={t.sections.experienceEyebrow}
    >
      <div className="cards-grid">
        {experiences.map((exp, index) => {
          const localized = t.experience[index];

          return (
            <article key={exp.company} className="card">
              <header className="card-header">
                <h3 className="card-title">
                  {localized?.role ?? exp.role}
                </h3>
                <p className="card-subtitle">
                  {localized?.company ?? exp.company} ·{' '}
                  <span className="muted">
                    {localized?.period ?? exp.period}
                  </span>
                </p>
              </header>

              <p className="card-description">
                {localized?.description ?? exp.description}
              </p>

              <ul className="card-list">
                {(localized?.highlights ?? exp.highlights).map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="card-tags">
                {exp.tech.map(tg => (
                  <Tag key={tg} label={tg} />
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};