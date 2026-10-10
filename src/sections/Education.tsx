import React from 'react';
import { Section } from '../components/Section';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Education: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="education" index={5} label={t.navbar.education} title={t.sections.educationTitle}>
      <ol className="rows">
        {t.education.map(edu => (
          <li key={edu.title} className="row">
            <p className="row-meta">{edu.year}</p>
            <div className="row-main">
              <h3 className="row-title">{edu.title}</h3>
              <p className="row-sub">{edu.institution}</p>
              <p className="prose">{edu.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};
