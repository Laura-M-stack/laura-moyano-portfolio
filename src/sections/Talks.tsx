import React from 'react';
import { Section } from '../components/Section';
import { talks } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Talks: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section
      id="talks"
      label={t.navbar.talks}
      eyebrow={t.sections.talksEyebrow}
    >
      <div className="timeline">
        {talks.map((talk, index) => {
          const localized = t.talks[index];

          return (
            <article key={talk.title} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="timeline-title">
                  {localized?.title ?? talk.title}
                </h3>
                <p className="timeline-meta">
                  {localized?.event ?? talk.event} ·{' '}
                  <span className="muted">
                    {localized?.year ?? talk.year}
                  </span>
                </p>
                <p className="timeline-description">
                  {localized?.description ?? talk.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};