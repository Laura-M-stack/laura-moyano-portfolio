import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
import { LanguageProvider } from '../context/LanguageContext';

describe('Contact section', () => {
  it('renders email, LinkedIn and GitHub links with a non-empty href', () => {
    render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );

    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(3);

    links.forEach((link: HTMLElement) => {
      const href = link.getAttribute('href');
      expect(href).toBeTruthy();
      expect(href).not.toBe('#');
    });
  });
});
