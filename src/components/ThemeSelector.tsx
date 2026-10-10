import React, { useEffect, useId, useRef, useState } from 'react';
import { PALETTES, useTheme, type PaletteId } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n';

/**
 * Compact theme control for the navbar: palette (radio group) + light/dark toggle.
 * Swatch colours come from the same CSS tokens the site uses, scoped with
 * data-palette/data-mode on each swatch, so they can never drift out of sync.
 */
export const ThemeSelector: React.FC = () => {
  const { palette, mode, setPalette, toggleMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language].theme;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="theme" ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className="theme-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(o => !o)}
      >
        <span className="theme-trigger-dots" aria-hidden="true">
          {PALETTES.map(p => (
            <span key={p} className="swatch-dot" data-palette={p} data-mode={mode} />
          ))}
        </span>
        <span className="theme-trigger-label">{t.label}</span>
      </button>

      {open && (
        <div className="theme-panel" id={panelId} role="group" aria-label={t.label}>
          <p className="theme-panel-title">{t.paletteLabel}</p>
          <div className="theme-options" role="radiogroup" aria-label={t.paletteLabel}>
            {PALETTES.map((p: PaletteId) => (
              <button
                key={p}
                type="button"
                role="radio"
                aria-checked={palette === p}
                className="theme-option"
                onClick={() => setPalette(p)}
              >
                <span className="theme-option-swatch" data-palette={p} data-mode={mode} aria-hidden="true">
                  <span />
                  <span />
                </span>
                <span>{t.palettes[p]}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="theme-mode"
            aria-pressed={mode === 'dark'}
            onClick={toggleMode}
          >
            <span>{t.darkMode}</span>
            <span className="theme-mode-track" aria-hidden="true">
              <span className="theme-mode-thumb" />
            </span>
          </button>

          <p className="theme-panel-note">{t.note}</p>
        </div>
      )}
    </div>
  );
};
