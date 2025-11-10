import React from 'react';
import { Section } from '../components/Section';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section
      id="about"
      label={t.navbar.about}
      eyebrow={t.sections.aboutEyebrow}
    >
      {t.about.map((p, i) => (
        <p key={i} className="paragraph">
          {p}
        </p>
      ))}
    </Section>
  );
};
