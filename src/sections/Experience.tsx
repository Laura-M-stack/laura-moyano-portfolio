import React from 'react';
import { Section } from '../components/Section';
import { experiences } from '../data/profile';
import { TagList } from '../components/Tag';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="experience" index={2} label={t.navbar.experience} title={t.sections.experienceTitle}>
      <ol className="rows">
        {experiences.map(exp => {
          const localized = t.experience[exp.id as keyof typeof t.experience];
          return (
            <li key={exp.id} className="row">
              <p className="row-meta">{localized.period}</p>
              <div className="row-main">
                <h3 className="row-title">{localized.role}</h3>
                <p className="row-sub">{exp.company}</p>
                <p className="prose">{localized.description}</p>
                <ul className="bullets">
                  {localized.highlights.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <TagList items={exp.tech} label={t.sections.stack} />
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};
