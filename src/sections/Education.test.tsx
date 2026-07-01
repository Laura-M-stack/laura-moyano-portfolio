import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Education } from './Education';
import { LanguageProvider } from '../context/LanguageContext';
import { translations } from '../i18n';

const renderEducation = () =>
  render(
    <LanguageProvider>
      <Education />
    </LanguageProvider>
  );

describe('Education section', () => {
  it('renders the same number of items in every language', () => {
    const counts = Object.values(translations).map(t => t.education.length);
    expect(new Set(counts).size).toBe(1);
  });

  it('attributes the Tecnicatura Universitaria en Desarrollo Web to UNER, not UTN', () => {
    renderEducation();
    // Default language is Spanish, where the real error happened before.
    expect(screen.getByText(/Tecnicatura Universitaria en Desarrollo Web/i)).toBeInTheDocument();
    expect(screen.getByText(/Universidad Nacional de Entre Ríos \(UNER\)/i)).toBeInTheDocument();
    expect(screen.queryByText(/Universidad Tecnológica Nacional \(UTN\).*Tecnicatura/i)).not.toBeInTheDocument();
  });

  it('includes the Licenciatura en Tecnologías Digitales (UNICABA)', () => {
    renderEducation();
    expect(screen.getByText(/Licenciatura en Tecnologías Digitales/i)).toBeInTheDocument();
    expect(screen.getByText(/UNICABA/i)).toBeInTheDocument();
  });
});
