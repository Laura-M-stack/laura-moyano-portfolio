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

export const experiences = [
  {
    company: 'Chicks Group Inc.',
    role: 'Product Engineer',
    period: '2024 – Nov 2025',
    description:
      'Worked on scalable web interfaces across the ChicksX platform, ensuring usability and design consistency. Contributed to refactoring legacy code and improving performance in production environments.',
    highlights: [
      'Developed and optimized UI components using Aurelia, TypeScript and SCSS.',
      'Implemented visual and accessibility improvements aligned with Figma specs.',
      'Collaborated with PMs, QA and designers in an international agile team.'
    ],
    tech: ['Aurelia', 'TypeScript', 'SCSS', 'Azure DevOps']
  },
  {
    company: 'Outlier.ai',
    role: 'AI Trainer',
    period: '2024 – May 2025',
    description:
      'Participated in the training and evaluation of large language models for enterprise applications. Designed prompts, tested AI behaviors and proposed refinements for model consistency and accuracy.',
    highlights: [
      'Developed and evaluated prompts for NLP and image models.',
      'Contributed to internal QA pipelines for AI-driven tools.',
      'Documented improvements and insights for fine-tuning processes.'
    ],
    tech: ['Prompt Engineering', 'AI Testing', 'Python']
  },
  {
    company: 'M1000IA Program',
    role: 'Full Stack Developer (AI Projects)',
    period: '2024',
    description:
      'Built APIs and machine learning integrations in projects aimed at solving real-world problems using AI technologies.',
    highlights: [
      'Designed and deployed RESTful APIs using Node.js and Python.',
      'Collaborated in design and frontend development of user interfaces.',
      'Integrated machine learning models into web applications.'
    ],
    tech: ['Node.js', 'Python', 'MySQL']
  },
  {
    company: 'Latina Blockchain Hackathon',
    role: 'Frontend Developer & Project Manager',
    period: '2024',
    description:
      'Led and co-developed "SafePets," a blockchain-based marketplace MVP. The project won the Polygon Cardona category for innovation and usability.',
    highlights: [
      'Designed the main UI and managed a distributed team.',
      'Implemented smart contract integrations and wallet connection.',
      'Presented the project to international judges and earned recognition.'
    ],
    tech: ['React', 'Solidity', 'Web3']
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer & Tester',
    period: '2023 – Present',
    description:
      'Developed responsive websites and performed QA testing for small businesses and creative projects. Focused on UX quality and visual clarity.',
    highlights: [
      'Created UI designs and implemented responsive layouts.',
      'Optimized usability and site performance based on analytics.',
      'Delivered customized front-end solutions for SMEs.'
    ],
    tech: ['React', 'HTML', 'CSS', 'JS', 'Figma']
  }
];

export const projects = [
  {
    name: 'Turnis — Appointment Manager App',
    role: 'Full Stack Developer & Product Designer',
    description:
       'Desktop app for Windows to manage appointments, clients and professionals — simple, offline-first. Built for independent professionals and small businesses that still rely on WhatsApp or paper to organize their schedule. One-time payment, no subscriptions, data stored locally.',
    tech: ['Tauri', 'React', 'TypeScript', 'SQLite'],
    link: 'https://turnisapp.com',
    image: 'projects/turnis.png',
  },
  {
    name: 'Tigre Turismo — Travel Planner Web App',
    role: 'Front End Developer, UX/UI Designer',
    description:
      'Responsive web application to explore tourist activities in Tigre (Buenos Aires) and build a personalized day itinerary. Includes advanced filters, interactive maps, favorites, time estimation, and itinerary sharing.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Leaflet'],
    link: 'https://laura-m-stack.github.io/tigre-turismo/',
    image: 'projects/tigre-turismo.png',
  },
  {
    name: 'StackProof — Web3 DApp',
    role: 'Full Stack Developer',
    description:
      'Web3 demo dApp that connects a wallet and lets the user sign a message to generate a verifiable "proof". Built to showcase wallet integration, signature flows and a clean UI.',
    tech: ['React', 'TypeScript', 'Viem', 'Hardhat'],
    link: 'https://laura-m-stack.github.io/stackproof/',
    image: 'projects/stackproof.png',
  },
  {
    name: 'Currency Converter App',
    role: 'Front End Developer',
    description:
      'Svelte application to convert currencies with real-time rates, dark/light mode, six languages and conversion history. Focused on performance, accessibility and an intuitive user experience.',
    tech: ['Svelte', 'TypeScript', 'Sass'],
    link: 'https://laura-m-stack.github.io/Currency-Converter-App/',
    image: 'projects/currency-converter.png'
  },
  {
    name: 'Glamour Studio – Beauty & Wellness',
    role: 'Front End Developer',
    description:
      'Single-page React website for a beauty studio, including services, team, testimonials and an online booking section. Fully responsive and built with a modern component-based architecture.',
    tech: ['React', 'TypeScript', 'Vite', 'SCSS'],
    link: 'https://laura-m-stack.github.io/glamour-studio/',
    image: 'projects/glamour-studio.png'
  },
];

export const talks = [
  {
    title: 'IA en acción: Hackeá tu productividad diaria',
    event: 'M1000IA Program',
    year: '2024',
    description:
      'Webinar on how to use AI tools to automate daily tasks and improve focus and time management.'
  },
  {
    title: 'Women in Tech Committee – Intel',
    event: 'Panel',
    year: '2024',
    description:
      'Moderator in a talk about artificial intelligence and its social impact with Dr. Florencia Pollo-Cattaneo.'
  },
  {
    title: 'AI for Women Entrepreneurs: Automation and Responsible Productivity',
    event: 'MEFEBA',
    year: '2024',
    description:
      'Guest speaker on the responsible and strategic use of AI for business and entrepreneurship.'
  }
];