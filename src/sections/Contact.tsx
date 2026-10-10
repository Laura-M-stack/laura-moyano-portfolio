import React from 'react';
import { profile } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const c = t.contact;

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <p className="section-label">
        <span className="section-num">07</span>
        {t.navbar.contact}
      </p>
      <h2 className="contact-title" id="contact-title">
        {c.titleStart} <em>{c.titleEmphasis}</em>
      </h2>
      <p className="contact-intro">{c.intro}</p>

      <a href={profile.links.email} className="contact-email">
        {c.emailSubtitle}
        <span aria-hidden="true">→</span>
      </a>

      <ul className="contact-links">
        <li>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </li>
        <li>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
};
