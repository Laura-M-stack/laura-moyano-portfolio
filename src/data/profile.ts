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
  // Most recent first. Freelance is ongoing, so it leads.
  {
    id: 'freelance',
    company: 'Freelance',
    tech: ['React', 'TypeScript', 'HTML', 'CSS', 'Figma', 'Manual QA', 'Tiendanube']
  },
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
  }
];

/** Bump the ?v= of an image when replacing it, so browsers and the GitHub Pages CDN fetch the new file. */
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
    image: 'projects/turnis.webp',
    tech: ['Tauri', 'React', 'TypeScript', 'SQLite']
  },
  {
    id: 'tigre-turismo',
    link: 'https://laura-m-stack.github.io/tigre-turismo/',
    image: 'projects/tigre-turismo.webp?v=3',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Leaflet', 'Vitest']
  },
  {
    id: 'anden9-travel',
    link: 'https://anden9-travel.vercel.app/',
    image: 'projects/anden9-travel.webp',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Zod', 'Vitest', 'Playwright']
  },
  {
    id: 'stackproof',
    link: 'https://laura-m-stack.github.io/stackproof/',
    image: 'projects/stackproof.webp',
    tech: ['React', 'TypeScript', 'Viem', 'Hardhat']
  },
  {
    id: 'currency-converter',
    link: 'https://laura-m-stack.github.io/Currency-Converter-App/',
    image: 'projects/currency-converter.webp?v=3',
    tech: ['Svelte 5', 'TypeScript', 'Vite', 'Vitest']
  },
  {
    id: 'glamour-studio',
    link: 'https://laura-m-stack.github.io/glamour-studio/',
    image: 'projects/glamour-studio.webp?v=3',
    tech: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Vitest']
  },
  {
    id: 'esmalte-club',
    link: 'https://laura-m-stack.github.io/esmalte-club/',
    image: 'projects/esmalte-club.webp?v=3',
    tech: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions']
  },
  {
    id: 'vanta-studio',
    link: 'https://laura-m-stack.github.io/vanta-studio-landing/',
    image: 'projects/vanta-studio.webp',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  {
    id: 'rancho-linz',
    link: 'https://rancholinz.com.ar',
    image: 'projects/rancho-linz.webp',
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