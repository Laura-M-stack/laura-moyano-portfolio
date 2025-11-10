import React from 'react';
import { Section } from '../components/Section';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section
      id="contact"
      label={t.navbar.contact}
      eyebrow={t.sections.contactEyebrow}
    >
      <p className="paragraph">{t.contact.intro}</p>
      <div className="contact-grid">
        <a href={profile.links.email} className="contact-card">
          <h3>{t.contact.emailTitle}</h3>
          <p className="muted">{t.contact.emailSubtitle}</p>
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>{t.contact.linkedinTitle}</h3>
          <p className="muted">{t.contact.linkedinSubtitle}</p>
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>{t.contact.githubTitle}</h3>
          <p className="muted">{t.contact.githubSubtitle}</p>
        </a>
        <a
          href={profile.links.youtube}
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>{t.contact.youtubeTitle}</h3>
          <p className="muted">{t.contact.youtubeSubtitle}</p>
        </a>
      </div>
    </Section>
  );
};