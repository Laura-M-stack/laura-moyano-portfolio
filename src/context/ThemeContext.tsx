import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeId =
    | 'default'
    | 'ocean'
    | 'neonpulse'
    | 'forest'
    | 'sunset'
    | 'lavender'
    | 'amber'
    | 'crimson'
    | 'midnight'
    | 'eclipse'
    | 'pearl'
    | 'sand'
    | 'rosemilk'
    | 'mintfresh'
    | 'tropical'
    | 'cloud'
    | 'snowbloom'
    | 'neapolitan'
    | 'aqua'
    | 'blossom';

type ThemeContextValue = {
    theme: ThemeId;
    setTheme: (theme: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = 'lm-portfolio-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<ThemeId>('default');

    useEffect(() => {
        const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
        if (stored) {
            setThemeState(stored);
            document.body.classList.add(`theme-${stored}`);
        } else {
            document.body.classList.add('theme-default');
        }
    }, []);

    const setTheme = (next: ThemeId) => {
        document.body.classList.add('theme-transitioning');

        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 100);

        window.localStorage.setItem(THEME_STORAGE_KEY, next);

        document.body.classList.forEach(cls => {
            if (cls.startsWith('theme-')) {
                document.body.classList.remove(cls);
            }
        });

        document.body.classList.add(`theme-${next}`);
        setThemeState(next);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
};