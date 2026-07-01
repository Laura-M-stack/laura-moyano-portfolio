export const profile = {
  name: 'Laura Moyano',
  role: 'Full Stack Developer',
  location: 'Argentina · Remote friendly',
  tagline:
    'Full Stack Developer with a focus on clean UX, scalable interfaces and AI integration. I enjoy combining design, technology and creativity to build meaningful digital products.',
  links: {
    linkedin: 'https://www.linkedin.com/in/laura-moyano-h',
    github: 'https://github.com/Laura-M-stack',
    email: 'mailto:lauraymh000@gmail.com',
  },
  keywords: [
    'Front End Development',
    'React',
    'Aurelia',
    'TypeScript',
    'SCSS',
    'AI-driven Projects',
    'UX/UI Design',
    'Public Speaking'
  ]
};

/**
 * Canonical, language-independent data.
 * Translated text (role, period, description, highlights, project name, talk title, etc.)
 * lives in src/i18n.ts, keyed by the same `id` used here.
 * This is the single source of truth for anything that does NOT change between languages.
 */

export interface ExperienceEntry {
  id: string;
  company: string;
  tech: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'chicks-group',
    company: 'Chicks Group Inc.',
    tech: ['Aurelia', 'TypeScript', 'SCSS', 'Azure DevOps']
  },
  {
    id: 'outlier',
    company: 'Outlier.ai',
    tech: ['Prompt Engineering', 'AI Testing', 'Python']
  },
  {
    id: 'm1000ia',
    company: 'M1000IA Program',
    tech: ['Node.js', 'Python', 'MySQL']
  },
  {
    id: 'blockchain-hackathon',
    company: 'Latina Blockchain Hackathon',
    tech: ['React', 'Solidity', 'Web3']
  },
  {
    id: 'freelance',
    company: 'Freelance',
    tech: ['React', 'HTML', 'CSS', 'JS', 'Figma']
  }
];

export interface ProjectEntry {
  id: string;
  link: string;
  image: string;
  tech: string[];
}

export const projects: ProjectEntry[] = [
  {
    id: 'turnis',
    link: 'https://turnisapp.com',
    image: 'projects/turnis.png',
    tech: ['Tauri', 'React', 'TypeScript', 'SQLite']
  },
  {
    id: 'tigre-turismo',
    link: 'https://laura-m-stack.github.io/tigre-turismo/',
    image: 'projects/tigre-turismo.png',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Leaflet']
  },
  {
    id: 'stackproof',
    link: 'https://laura-m-stack.github.io/stackproof/',
    image: 'projects/stackproof.png',
    tech: ['React', 'TypeScript', 'Viem', 'Hardhat']
  },
  {
    id: 'currency-converter',
    link: 'https://laura-m-stack.github.io/Currency-Converter-App/',
    image: 'projects/currency-converter.png',
    tech: ['Svelte', 'TypeScript', 'Sass']
  },
  {
    id: 'glamour-studio',
    link: 'https://laura-m-stack.github.io/glamour-studio/',
    image: 'projects/glamour-studio.png',
    tech: ['React', 'TypeScript', 'Vite', 'SCSS']
  },
  {
    id: 'rancho-linz',
    link: 'https://rancholinz.com.ar',
    image: 'projects/rancho-linz.png',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Tiendanube']
  }
];

export interface TalkEntry {
  id: string;
  year: string;
}

export const talks: TalkEntry[] = [
  { id: 'm1000ia-webinar', year: '2024' },
  { id: 'intel-panel', year: '2024' },
  { id: 'mefeba-talk', year: '2024' }
];