import React from 'react';
import { Section } from '../components/Section';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="about" index={1} label={t.navbar.about} title={t.sections.aboutTitle}>
      <div className="about">
        <figure className="about-photo">
          <img src="foto-perfil.webp" alt={profile.name} width={900} height={900} loading="lazy" />
        </figure>
        <div className="about-text">
          {t.about.map((p, i) => (
            <p key={i} className={i === 0 ? 'lead' : 'prose'}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};
