import React from 'react';
import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './LanguageContext';

const Probe: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button onClick={toggleLanguage}>{language}</button>
  );
};

describe('LanguageContext', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('defaults to Spanish and sets document.documentElement.lang accordingly', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );
    expect(screen.getByText('es')).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('es');
  });

  it('updates document.documentElement.lang when the language toggles', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('en')).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
  });
});
