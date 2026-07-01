import { describe, expect, it } from 'vitest';
import { experiences, projects, talks } from './profile';
import { translations } from '../i18n';

/**
 * profile.ts defines the canonical `id` for every experience, project and talk.
 * i18n.ts must have a matching translation entry for every one of those ids,
 * in every language. If someone adds an entry in one file and forgets the
 * other, these tests fail loudly instead of silently rendering "undefined"
 * (or crashing) in production.
 */
describe('content consistency between profile.ts and i18n.ts', () => {
  const languages = Object.keys(translations) as Array<keyof typeof translations>;

  it('has at least one language configured', () => {
    expect(languages.length).toBeGreaterThan(0);
  });

  it.each(languages)('every experience id has a translation in "%s"', (lang: keyof typeof translations) => {
    const translated = translations[lang].experience;
    experiences.forEach(exp => {
      expect(translated).toHaveProperty(exp.id);
    });
  });

  it.each(languages)('every project id has a translation in "%s"', (lang: keyof typeof translations) => {
    const translated = translations[lang].projects;
    projects.forEach(project => {
      expect(translated).toHaveProperty(project.id);
    });
  });

  it.each(languages)('every talk id has a translation in "%s"', (lang: keyof typeof translations) => {
    const translated = translations[lang].talks;
    talks.forEach(talk => {
      expect(translated).toHaveProperty(talk.id);
    });
  });

  it('does not have orphan translation keys not present in profile.ts (experience)', () => {
    const validIds = new Set(experiences.map(e => e.id));
    languages.forEach(lang => {
      Object.keys(translations[lang].experience).forEach(key => {
        expect(validIds.has(key)).toBe(true);
      });
    });
  });
});
