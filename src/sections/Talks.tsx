import React from 'react';
import { Section } from '../components/Section';
import { talks } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Talks: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="talks" index={6} label={t.navbar.talks} title={t.sections.talksTitle}>
      <ol className="rows">
        {talks.map(talk => {
          const localized = t.talks[talk.id as keyof typeof t.talks];
          return (
            <li key={talk.id} className="row">
              <p className="row-meta">{talk.year}</p>
              <div className="row-main">
                <h3 className="row-title">{localized.title}</h3>
                <p className="row-sub">{localized.event}</p>
                <p className="prose">{localized.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};
