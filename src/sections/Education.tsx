import React from 'react';
import { Section } from '../components/Section';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Education: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section
      id="education"
  label={t.navbar.education}
      eyebrow={t.sections.educationEyebrow}
    >
      <div className="education-list">
        {t.education.map((edu, index) => (
          <article key={index} className="education-item">
            <div className="education-year">{edu.year}</div>
            <div className="education-content">
              <h3 className="education-title">{edu.title}</h3>
              <p className="education-institution">
                {edu.institution}
              </p>
              <p className="education-description">
                {edu.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

