import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

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

/** Viewport point the theme change "grows" from (e.g. the clicked button). */
export type Origin = { x: number; y: number };

type ThemeContextValue = {
  palette: PaletteId;
  mode: Mode;
  setPalette: (palette: PaletteId, origin?: Origin) => void;
  toggleMode: (origin?: Origin) => void;
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

const applyToRoot = (palette: PaletteId, mode: Mode) => {
  const root = document.documentElement;
  root.dataset.palette = palette;
  root.dataset.mode = mode;
  root.style.colorScheme = mode;
};

const prefersReducedMotion = (): boolean =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Runs `update` inside a View Transition and reveals the new theme as a circle
 * growing from `origin`. Falls back to an instant change when the browser has no
 * View Transitions (Firefox < 144, older Safari), when the visitor asks for
 * reduced motion, or when there is no origin.
 */
const withThemeTransition = (update: () => void, origin?: Origin) => {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { ready: Promise<void> };
  };
  if (!origin || typeof doc.startViewTransition !== 'function' || prefersReducedMotion()) {
    update();
    return;
  }

  const transition = doc.startViewTransition(() => flushSync(update));
  transition.ready
    .then(() => {
      const radius = Math.hypot(
        Math.max(origin.x, window.innerWidth - origin.x),
        Math.max(origin.y, window.innerHeight - origin.y)
      );
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${origin.x}px ${origin.y}px)`,
            `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
          ],
        },
        {
          duration: 650,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    })
    .catch(() => {
      /* transition skipped (e.g. tab hidden): theme is already applied */
    });
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
    applyToRoot(palette, mode);
  }, [palette, mode]);

  // Follow OS changes while the visitor hasn't picked a mode.
  useEffect(() => {
    if (modeIsExplicit || typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setMode(e.matches ? 'dark' : 'light');
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, [modeIsExplicit]);

  const setPalette = useCallback(
    (next: PaletteId, origin?: Origin) => {
      if (!isPalette(next) || next === palette) return;
      withThemeTransition(() => {
        setPaletteState(next);
        // Apply synchronously too, so the View Transition snapshot sees the new colours.
        applyToRoot(next, mode);
      }, origin);
      safeSet(PALETTE_STORAGE_KEY, next);
    },
    [palette, mode]
  );

  const toggleMode = useCallback(
    (origin?: Origin) => {
      const next: Mode = mode === 'dark' ? 'light' : 'dark';
      withThemeTransition(() => {
        setMode(next);
        setModeIsExplicit(true);
        applyToRoot(palette, next);
      }, origin);
      safeSet(MODE_STORAGE_KEY, next);
    },
    [palette, mode]
  );

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
