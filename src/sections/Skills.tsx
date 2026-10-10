import React from 'react';
import { Section } from '../components/Section';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="skills" index={4} label={t.navbar.skills} title={t.skills.title}>
      <dl className="skills">
        {t.skills.groups.map(group => (
          <div key={group.label} className="skills-row">
            <dt>{group.label}</dt>
            <dd>{group.items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};
