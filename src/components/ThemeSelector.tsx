import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import type { ThemeId } from '../context/ThemeContext';

type ThemeOption = {
    id: ThemeId;
    labelEs: string;
    labelEn: string;
    mode: 'dark' | 'light';
};

const themes: ThemeOption[] = [
    // 🔹 Oscuros
    { id: 'default', labelEs: 'Clásico', labelEn: 'Classic', mode: 'dark' },
    { id: 'ocean', labelEs: 'Neón océano', labelEn: 'Ocean Neon', mode: 'dark' },
    { id: 'neonpulse', labelEs: 'Neón Pulse', labelEn: 'Neon Pulse', mode: 'dark' },
    { id: 'forest', labelEs: 'Bosque', labelEn: 'Forest', mode: 'dark' },
    { id: 'sunset', labelEs: 'Atardecer', labelEn: 'Sunset', mode: 'dark' },
    { id: 'lavender', labelEs: 'Lavanda Suave', labelEn: 'Soft Lavender', mode: 'dark' },
    { id: 'amber', labelEs: 'Ámbar Dorado', labelEn: 'Golden Amber', mode: 'dark' },
    { id: 'crimson', labelEs: 'Carmesí Intenso', labelEn: 'Deep Crimson', mode: 'dark' },
    { id: 'midnight', labelEs: 'Midnight Rose', labelEn: 'Midnight Rose', mode: 'dark' },
    { id: 'eclipse', labelEs: 'Eclipse', labelEn: 'Eclipse', mode: 'dark' },

    // 🔹 Claros
    { id: 'pearl', labelEs: 'Perla Suave', labelEn: 'Soft Pearl', mode: 'light' },
    { id: 'sand', labelEs: 'Arena Cálida', labelEn: 'Warm Sand', mode: 'light' },
    { id: 'rosemilk', labelEs: 'Rosa Suave', labelEn: 'RoseMilk', mode: 'light' },
    { id: 'mintfresh', labelEs: 'Menta Fresca', labelEn: 'Mint Fresh', mode: 'light' },
    { id: 'tropical', labelEs: 'Tropical', labelEn: 'Tropical', mode: 'light' },
    { id: 'cloud', labelEs: 'Cielo Suave', labelEn: 'Soft Cloud', mode: 'light' },
    { id: 'snowbloom', labelEs: 'Pétalo Suave', labelEn: 'SnowBloom', mode: 'light' },
    { id: 'latte', labelEs: 'Latte', labelEn: 'Latte', mode: 'light' },
    { id: 'aqua', labelEs: 'Aqua Brisa', labelEn: 'Aqua Breeze', mode: 'light' },
    { id: 'blossom', labelEs: 'Sage', labelEn: 'Sage', mode: 'light' }
];

export const ThemeSelector: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const { language } = useLanguage();

    const title =
        language === 'en'
            ? 'Personalize your experience'
            : 'Personalizá tu experiencia';

    const subtitle =
        language === 'en'
            ? 'Choose a visual theme for this portfolio.'
            : 'Elegí el estilo visual con el que querés ver este portfolio.';

    const darkThemes = themes.filter(th => th.mode === 'dark');
    const lightThemes = themes.filter(th => th.mode === 'light');

    const groupLabelDark = language === 'en' ? 'Dark themes' : 'Temas oscuros';
    const groupLabelLight = language === 'en' ? 'Light themes' : 'Temas claros';

    const renderThemeButton = (th: ThemeOption) => {
        const label = language === 'en' ? th.labelEn : th.labelEs;
        const isActive = theme === th.id;

        return (
            <button
                key={th.id}
                data-theme={th.id}
                type="button"
                className={'theme-pill' + (isActive ? ' theme-pill--active' : '')}
                onClick={() => setTheme(th.id)}
            >
                <span className="theme-pill-swatch" />
                <span>{label}</span>
            </button>
        );
    };

    return (
        <section id="theme-selector" className="section theme-selector">
            <div className="section-header">
                <p className="section-eyebrow">
                    {language === 'en' ? 'Theme' : 'Tema'}
                </p>
                <h2 className="section-title">{title}</h2>
                <p className="paragraph">{subtitle}</p>
            </div>

            <div className="theme-selector-groups">
                <div className="theme-selector-group">
                    <p className="theme-selector-group-label">{groupLabelDark}</p>
                    <div className="theme-selector-row">
                        {darkThemes.map(renderThemeButton)}
                    </div>
                </div>

                <div className="theme-selector-group">
                    <p className="theme-selector-group-label">{groupLabelLight}</p>
                    <div className="theme-selector-row">
                        {lightThemes.map(renderThemeButton)}
                    </div>
                </div>
            </div>
        </section>
    );
};