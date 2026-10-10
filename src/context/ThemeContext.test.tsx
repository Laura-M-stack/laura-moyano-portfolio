import React from 'react';
import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  ThemeProvider,
  useTheme,
  PALETTE_STORAGE_KEY,
  MODE_STORAGE_KEY,
} from './ThemeContext';

const Probe: React.FC = () => {
  const { palette, mode, setPalette, toggleMode } = useTheme();
  return (
    <div>
      <span data-testid="state">{`${palette}/${mode}`}</span>
      <button onClick={() => setPalette('bosque')}>bosque</button>
      <button onClick={() => toggleMode()}>mode</button>
    </div>
  );
};

const renderProbe = () =>
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>
  );

describe('ThemeContext', () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete document.documentElement.dataset.palette;
    delete document.documentElement.dataset.mode;
  });

  it('defaults to the papel palette and writes data attributes on <html>', () => {
    renderProbe();
    expect(screen.getByTestId('state').textContent).toBe('papel/light');
    expect(document.documentElement.dataset.palette).toBe('papel');
    expect(document.documentElement.dataset.mode).toBe('light');
  });

  it('ignores unknown stored values (e.g. a theme id from the old 20-theme selector)', () => {
    window.localStorage.setItem(PALETTE_STORAGE_KEY, 'neonpulse');
    window.localStorage.setItem(MODE_STORAGE_KEY, 'sepia');
    renderProbe();
    expect(screen.getByTestId('state').textContent).toBe('papel/light');
  });

  it('restores a valid stored palette and mode', () => {
    window.localStorage.setItem(PALETTE_STORAGE_KEY, 'tinta');
    window.localStorage.setItem(MODE_STORAGE_KEY, 'dark');
    renderProbe();
    expect(screen.getByTestId('state').textContent).toBe('tinta/dark');
  });

  it('persists palette and mode changes', () => {
    renderProbe();
    fireEvent.click(screen.getByText('bosque'));
    fireEvent.click(screen.getByText('mode'));
    expect(screen.getByTestId('state').textContent).toBe('bosque/dark');
    expect(window.localStorage.getItem(PALETTE_STORAGE_KEY)).toBe('bosque');
    expect(window.localStorage.getItem(MODE_STORAGE_KEY)).toBe('dark');
    expect(document.documentElement.dataset.mode).toBe('dark');
  });
});
