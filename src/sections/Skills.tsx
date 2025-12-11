import React from "react";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n";

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <Section id="skills" label={t.title} eyebrow={t.eyebrow}>
      <div className="skills-grid">

        {t.groups.map(group => (
          <div key={group.label} className="skills-group">
            <p className="skills-group-title">{group.label}</p>

            <div className="skills-chips">
              {group.items.map(item => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </Section>
  );
};
