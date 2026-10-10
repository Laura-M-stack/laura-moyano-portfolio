import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

/**
 * Theme = palette × mode.
 * Every palette defines the same semantic tokens (see styles.css), so adding a
 * palette is just one more pair of CSS blocks + one entry in PALETTES.
 */
export const PALETTES = ['papel', 'tinta', 'bosque', 'ciruela'] as const;
export type PaletteId = (typeof PALETTES)[number];
export type Mode = 'light' | 'dark';

export const PALETTE_STORAGE_KEY = 'lm-portfolio-palette';
export const MODE_STORAGE_KEY = 'lm-portfolio-mode';
const LEGACY_THEME_KEY = 'lm-portfolio-theme';

const DEFAULT_PALETTE: PaletteId = 'papel';

type ThemeContextValue = {
  palette: PaletteId;
  mode: Mode;
  setPalette: (palette: PaletteId) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const isPalette = (value: unknown): value is PaletteId =>
  typeof value === 'string' && (PALETTES as readonly string[]).includes(value);

const safeGet = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSet = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* private mode / blocked storage: theme still works for this visit */
  }
};

const systemPrefersDark = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const getInitialPalette = (): PaletteId => {
  if (typeof window === 'undefined') return DEFAULT_PALETTE;
  const stored = safeGet(PALETTE_STORAGE_KEY);
  return isPalette(stored) ? stored : DEFAULT_PALETTE;
};

export const getInitialMode = (): Mode => {
  if (typeof window === 'undefined') return 'light';
  const stored = safeGet(MODE_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return systemPrefersDark() ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [palette, setPaletteState] = useState<PaletteId>(getInitialPalette);
  const [mode, setMode] = useState<Mode>(getInitialMode);
  // Only persist mode once the visitor chooses it; until then we follow the OS.
  const [modeIsExplicit, setModeIsExplicit] = useState<boolean>(() => {
    const stored = typeof window === 'undefined' ? null : safeGet(MODE_STORAGE_KEY);
    return stored === 'light' || stored === 'dark';
  });

  useEffect(() => {
    // Old 20-theme selector key: no longer meaningful.
    try {
      window.localStorage.removeItem(LEGACY_THEME_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.palette = palette;
    root.dataset.mode = mode;
    root.style.colorScheme = mode;
  }, [palette, mode]);

  // Follow OS changes while the visitor hasn't picked a mode.
  useEffect(() => {
    if (modeIsExplicit || typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setMode(e.matches ? 'dark' : 'light');
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, [modeIsExplicit]);

  const setPalette = useCallback((next: PaletteId) => {
    if (!isPalette(next)) return;
    setPaletteState(next);
    safeSet(PALETTE_STORAGE_KEY, next);
  }, []);

  const toggleMode = useCallback(() => {
    setMode(prev => {
      const next: Mode = prev === 'dark' ? 'light' : 'dark';
      safeSet(MODE_STORAGE_KEY, next);
      return next;
    });
    setModeIsExplicit(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ palette, mode, setPalette, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
