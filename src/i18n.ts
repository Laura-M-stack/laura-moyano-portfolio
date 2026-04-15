export const translations = {
    en: {
        navbar: {
            about: 'About',
            experience: 'Experience',
            education: 'Education',
            skills: 'Skills',
            projects: 'Projects',
            talks: 'Talks',
            contact: 'Contact',
            theme: 'Theme'
        },
        footer: 'Made with 💖 by Laura Moyano.',
        sections: {
            aboutEyebrow: 'Who I am',
            experienceEyebrow: 'Things I\'ve worked on',
            educationEyebrow: 'Education',
            skillsEyebrow: 'Skills',
            educationTitle: 'Education',
            projectsEyebrow: 'Things I\'ve built',
            talksEyebrow: 'Talks & events',
            contactEyebrow: 'Find me here'
        },
        about: [
            "I'm a Full Stack Developer who gravitates toward the intersection of code, design and product thinking. I like building things end-to-end — from the architecture to the interface — and paying attention to how they actually feel to use.",
            "I've shipped interfaces for a crypto exchange, trained language models, led a blockchain hackathon project that won an innovation award, and built smaller things just because they seemed interesting.",
            "Right now I'm finishing my university technician degree in web development, building my own projects, and using this space as a record of what I've made and what I'm learning."
        ],
        experience: [
            {
                company: 'Chicks Group Inc.',
                role: 'Product Engineer',
                period: 'May 2025 – Nov 2025',
                description:
                    'Developed and maintained web interfaces at ChicksX exchange platform, ensuring usability and consistency.',
                highlights: [
                    'Built and optimized UI components using Aurelia, TypeScript and SCSS.',
                    'Improved performance and visual alignment based on Figma specs.',
                    'Collaborated with international teams to implement product improvements.'
                ]
            },
            {
                company: 'Outlier.ai',
                role: 'AI Trainer',
                period: 'Oct 2024 – May 2025',
                description:
                    'Trained and evaluated large language models, focusing on quality and prompt refinement.',
                highlights: [
                    'Developed evaluation prompts for NLP and image tasks.',
                    'Contributed to model fine-tuning and testing workflows.',
                    'Documented issues and improvement strategies for AI performance.'
                ]
            },
            {
                company: 'M1000IA Program',
                role: 'Full Stack Developer (AI Projects)',
                period: '2024',
                description:
                    'Developed APIs and AI integrations for projects with social impact.',
                highlights: [
                    'Built REST APIs using Node.js and Python.',
                    'Worked on frontend, backend integrations and deployment.',
                    'Collaborated in architecture and data modeling decisions.'
                ]
            },
            {
                company: 'Latina Blockchain Hackathon',
                role: 'Full Stack Developer & Project Manager',
                period: '2024',
                description:
                    'Led and built SafePets, a blockchain-based marketplace that won the Polygon Cardona category for innovation.',
                highlights: [
                    'Designed and implemented the marketplace UI with React.',
                    'Coordinated the team and project presentation.',
                    'Integrated smart contracts and wallet connection.'
                ]
            },
            {
                company: 'Freelance',
                role: 'Full Stack Developer & Tester',
                period: '2023 – Present',
                description:
                    'Developed responsive websites and performed QA testing for clients and personal projects.',
                highlights: [
                    'Created user-friendly designs and clean front-end code.',
                    'Improved site performance and accessibility.',
                    'Delivered tailored solutions for SMEs.'
                ]
            }
        ],
        education: [
            {
                title: 'University Technician in Web Development',
                institution: 'Universidad Nacional de Entre Ríos(UNER)',
                description:
                    'Program focused on full stack web development, databases, design patterns and application architecture. I currently have one semester left to complete the degree.',
                year: '2024 – Present'
            },
            {
                title: 'Diploma in Digital Transformation',
                institution: 'Universidad Tecnológica Nacional (UTN)',
                description:
                    'Program focused on integrating technology, innovation and change management in organizations.',
                year: '2024'
            },
            {
                title: 'Complementary courses and certifications',
                institution: 'Harvard Business Impact, Santander Open Academy, M1000IA and others',
                description:
                    'Continuous training in web development, artificial intelligence, testing, project management and digital marketing. My goal is to maintain a comprehensive understanding of technology and deliver solutions that are modern, effective and results-driven.',
                year: '2023 – 2025'
            }
        ],
        skills: {
            eyebrow: "What I use to build",
            title: "Skills & Technologies",
            groups: [
                {
                    label: "Frontend",
                    items: [
                        "React", "TypeScript", "JavaScript",
                        "Svelte", "Aurelia", "Vue",
                        "HTML", "CSS", "SCSS", "Tailwind",
                        "Responsive Design", "Accessibility", "Performance"
                    ]
                },
                {
                    label: "Backend & APIs",
                    items: [
                        "Node.js", "Python", "Express",
                        "Django", "FastAPI",
                        "REST APIs", "SQL", "NoSQL",
                        "AWS", "Azure", "Docker"
                    ]
                },
                {
                    label: "AI & Automation",
                    items: [
                        "LLMs", "Prompt Engineering", "AI Testing",
                        "LangChain", "RAG", "Fine-tuning",
                        "Model Evaluation", "AI Automation", "n8n"
                    ]
                },
                {
                    label: "Design & Product",
                    items: [
                        "Figma", "UX/UI Design", "Prototyping",
                        "Design Systems", "Wireframing",
                        "Branding", "Canva", "Illustrator"
                    ]
                },
                {
                    label: "Tooling & QA",
                    items: [
                        "Git", "GitHub Actions", "Docker",
                        "Postman", "Selenium",
                        "Functional Testing", "Exploratory Testing",
                        "Jira", "Azure DevOps", "Agile / Scrum"
                    ]
                }
            ]
        },
        projects: [
            {
                name: 'Tigre Turismo — Travel Planner Web App',
                role: 'Front-End Developer',
                description:
                    'Responsive web application to explore tourist activities in Tigre (Buenos Aires) and build a personalized day itinerary.',
                tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Leaflet'],
            },
            {
                name: 'StackProof — Web3 DApp',
                role: 'Full Stack Developer',
                description:
                    'Web3 demo dApp that connects a wallet and lets the user sign a message to generate a verifiable “proof”. Built to showcase wallet integration, signature flows and a clean UI.',
                tech: ['React', 'TypeScript', 'Viem', 'Hardhat'],
            },
            {
                name: 'Currency Converter App',
                role: 'Front End Developer',
                description:
                    'Svelte application to convert currencies with real-time rates, dark/light mode, six languages and conversion history. Focused on performance, accessibility and an intuitive user experience.',
                tech: ['Svelte', 'TypeScript', 'Sass']
            },
            {
                name: 'Glamour Studio – Beauty & Wellness',
                role: 'Front End Developer',
                description:
                    'Single-page website for a beauty studio, built with React and TypeScript. Includes services, team, testimonials and an online booking section, with a fully responsive layout.',
                tech: ['React', 'TypeScript', 'Vite', 'SCSS']
            },
        ],
        talks: [
            {
                title: 'AI in Action: Hacking your Daily Productivity',
                event: 'M1000IA Program',
                year: '2024',
                description:
                    'Webinar on how to use AI tools to automate daily tasks and boost focus and efficiency.'
            },
            {
                title: 'Women in Tech Committee – Intel',
                event: 'Panel',
                year: '2024',
                description:
                    'Moderator in a discussion about the ethical and social implications of AI, with Dr. Florencia Pollo-Cataneo.'
            },
            {
                title: 'AI for Women Entrepreneurs',
                event: 'MEFEBA',
                year: '2024',
                description:
                    'Talk on how to use AI strategically and responsibly in business and entrepreneurship.'
            }
        ],
        contact: {
            intro:
                'You can find me on GitHub, LinkedIn or drop me an email.',
            emailTitle: 'Email',
            emailSubtitle: 'lauraymh000@gmail.com',
            linkedinTitle: 'LinkedIn',
            linkedinSubtitle: 'Let’s connect',
            githubTitle: 'GitHub',
            githubSubtitle: 'github.com/Laura-M-stack'
        }
    },

    es: {
        navbar: {
            about: 'Sobre mí',
            experience: 'Experiencia',
            education: 'Educación',
            skills: 'Habilidades',
            projects: 'Proyectos',
            talks: 'Charlas',
            contact: 'Contacto',
            theme: 'Tema'
        },
        footer: 'Hecho con 💖 por Laura Moyano.',
        sections: {
            aboutEyebrow: 'Quién soy',
            experienceEyebrow: 'En qué trabajé',
            educationEyebrow: 'Educación',
            skillsEyebrow: 'Skills',
            educationTitle: 'Educación',
            projectsEyebrow: 'Cosas que construí',
            talksEyebrow: 'Charlas y eventos',
            contactEyebrow: 'Encontrame acá'
        },
        about: [
            "Soy desarrolladora Full Stack y me muevo en la intersección entre código, diseño y producto. Me gusta construir cosas de punta a punta — desde la arquitectura hasta la interfaz — prestando atención a cómo se sienten al usarlas.",
            "Desarrollé interfaces para una plataforma de exchange, entrené modelos de lenguaje, lideré un proyecto en un hackathon blockchain que ganó un premio a la innovación, y construí cosas más chicas simplemente porque me parecieron interesantes.",
            "Actualmente estoy terminando la Tecnicatura Universitaria en Desarrollo Web, trabajando en mis propios proyectos, y uso este espacio como registro de lo que construí y lo que voy aprendiendo."
        ],
        education: [
            {
                title: 'Tecnicatura Universitaria en Desarrollo Web',
                institution: 'Universidad Tecnológica Nacional (UTN)',
                description:
                    'Carrera orientada al desarrollo web full stack, bases de datos, patrones de diseño y arquitectura de aplicaciones. Actualmente me queda un cuatrimestre para finalizar la tecnicatura.',
                year: '2024 – Presente'
            },
            {
                title: 'Diplomatura en Transformación Digital',
                institution: 'Universidad Tecnológica Nacional (UTN)',
                description:
                    'Programa enfocado en la integración de tecnología, innovación y gestión del cambio en organizaciones.',
                year: '2024'
            },
            {
                title: 'Cursos y certificaciones complementarias',
                institution: 'Harvard Business Impact, Santander Open Academy, M1000IA y otros',
                description:
                    'Formación continua en desarrollo web, inteligencia artificial, testing, project management, diseño UX/UI y marketing digital. El objetivo es mantener una visión integral de la tecnología y ofrecer soluciones más completas, actualizadas y orientadas a resultados.',
                year: '2023 – 2025'
            }
        ],
        skills: {
            eyebrow: "Con qué construyo",
            title: "Skills & Tecnologías",
            groups: [
                {
                    label: "Frontend",
                    items: [
                        "React", "TypeScript", "JavaScript",
                        "Svelte", "Aurelia", "Vue",
                        "HTML", "CSS", "SCSS", "Tailwind",
                        "Diseño responsive", "Accesibilidad", "Performance"
                    ]
                },
                {
                    label: "Backend & APIs",
                    items: [
                        "Node.js", "Python", "Express",
                        "Django", "FastAPI",
                        "APIs REST", "SQL", "NoSQL",
                        "AWS", "Azure", "Docker"
                    ]
                },
                {
                    label: "IA & Automatización",
                    items: [
                        "LLMs", "Prompt Engineering", "Testing de IA",
                        "LangChain", "RAG", "Fine-tuning",
                        "Evaluación de modelos", "Automatización con IA", "n8n"
                    ]
                },
                {
                    label: "Diseño & Producto",
                    items: [
                        "Figma", "UX/UI Design", "Prototipado",
                        "Sistemas de diseño", "Wireframing",
                        "Branding", "Canva", "Illustrator"
                    ]
                },
                {
                    label: "Tooling & QA",
                    items: [
                        "Git", "GitHub Actions", "Docker",
                        "Postman", "Selenium",
                        "Testing funcional", "Testing exploratorio",
                        "Jira", "Azure DevOps", "Agile / Scrum"
                    ]
                }
            ]
        },
        experience: [
            {
                company: 'Chicks Group Inc.',
                role: 'Product Engineer',
                period: 'May 2025 – Nov 2025',
                description:
                    'Desarrollo y mantenimiento de interfaces web en la plataforma de exchange ChicksX, asegurando usabilidad y consistencia visual.',
                highlights: [
                    'Construcción y optimización de componentes UI con Aurelia, TypeScript y SCSS.',
                    'Mejoras de performance y alineación visual según diseños en Figma.',
                    'Colaboración con equipos internacionales en mejoras de producto.'
                ]
            },
            {
                company: 'Outlier.ai',
                role: 'Entrenadora de IA',
                period: 'Oct2024 – May 2025',
                description:
                    'Entrenamiento y evaluación de modelos de lenguaje, enfocada en calidad y mejora de prompts.',
                highlights: [
                    'Desarrollo de prompts de evaluación para tareas de texto e imagen.',
                    'Contribución a flujos de fine-tuning y testing de modelos.',
                    'Documentación de hallazgos y estrategias de mejora de rendimiento.'
                ]
            },
            {
                company: 'Programa M1000IA',
                role: 'Desarrolladora Full Stack (Proyectos IA)',
                period: '2024',
                description:
                    'Desarrollo de APIs e integraciones de IA para proyectos con impacto social.',
                highlights: [
                    'Creación de APIs REST con Node.js y Python.',
                    'Integración frontend, backend y despliegue en entornos de prueba.',
                    'Participación en decisiones de arquitectura y modelado de datos.'
                ]
            },
            {
                company: 'Latina Blockchain Hackathon',
                role: 'Desarrolladora Full Stack y Project Manager',
                period: '2024',
                description:
                    'Liderazgo y desarrollo de SafePets, un marketplace blockchain ganador de la categoría Polygon Cardona por innovación.',
                highlights: [
                    'Diseño e implementación de la UI del marketplace con React.',
                    'Coordinación del equipo y presentación ante jurados.',
                    'Integración de smart contracts y conexión de wallet.'
                ]
            },
            {
                company: 'Freelance',
                role: 'Desarrolladora Front End y Tester',
                period: '2023 – Presente',
                description:
                    'Desarrollo de sitios web responsive y testing funcional para clientes y proyectos personales.',
                highlights: [
                    'Diseños centrados en el usuario y código limpio de front end.',
                    'Optimización de rendimiento y accesibilidad.',
                    'Entrega de soluciones personalizadas para cada proyecto.'
                ]
            }
        ],
        projects: [
            {
                name: 'Tigre Turismo — Planificador de actividades',
                role: 'Desarrolladora Front-End',
                description:
                    'Aplicación web responsive para explorar actividades turísticas en Tigre (Buenos Aires) y armar un itinerario personalizado.',
                tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Leaflet'],
            },
            {
                name: 'StackProof — DApp Web3',
                role: 'Desarrolladora Full Stack',
                description:
                    'DApp demo Web3 que conecta una wallet y permite firmar un mensaje para generar una “prueba” verificable. Hecha para mostrar integración con wallet, flujo de firmas y una UI prolija.',
                tech: ['React', 'TypeScript', 'Viem', 'Hardhat'],
            },
            {
                name: 'App Conversor de Monedas',
                role: 'Desarrolladora Front End',
                description:
                    'Aplicación en Svelte para convertir monedas con tipos de cambio en tiempo real, modo claro/oscuro, seis idiomas e historial de conversiones. Enfocada en rendimiento, accesibilidad y una UX intuitiva.',
                tech: ['Svelte', 'TypeScript', 'Sass']
            },
            {
                name: 'Glamour Studio – Estética & Bienestar',
                role: 'Desarrolladora Front End',
                description:
                    'Página web para un estudio de belleza desarrollada con React y TypeScript. Incluye secciones de servicios, equipo, testimonios y turnos online, con diseño totalmente responsive.',
                tech: ['React', 'TypeScript', 'Vite', 'SCSS']
            },
            // {
            //     name: 'ChatMarketAI',
            //     role: 'Desarrolladora Front End',
            //     description:
            //         'Plataforma web para explorar y conectar soluciones de chatbots, creada con HTML, CSS y JavaScript. Presenta un diseño minimalista y navegación responsive.',
            //     tech: ['HTML', 'CSS', 'JavaScript']
            // },
            // {
            //     name: 'Style Factory',
            //     role: 'Desarrolladora Front End',
            //     description:
            //         'Landing page para una marca de moda, con diseño responsive, identidad visual definida, animaciones suaves e integración de API para contenido dinámico.',
            //     tech: ['HTML', 'CSS', 'Bootstrap', 'JS']
            // },
            // {
            //     name: 'Casa Artesana – Marketplace Online',
            //     role: 'Desarrolladora Front End',
            //     description:
            //         'Frontend de un mercado online de artesanías hecho con HTML, CSS y JavaScript. Incluye galerías de productos, categorías y un layout completamente responsive.',
            //     tech: ['HTML', 'CSS', 'JavaScript']
            // },
            // {
            //     name: 'Servicios Hogar – Directorio de Oficios',
            //     role: 'Desarrolladora Front End',
            //     description:
            //         'Sitio web para contratar trabajadores de oficios, desarrollado con HTML, CSS y JavaScript. Incluye listados de servicios por categoría, navegación clara y diseño mobile-first.',
            //     tech: ['HTML', 'CSS', 'JavaScript']
            // },
            // {
            //     name: 'SafePets – Marketplace Blockchain',
            //     role: 'Desarrolladora Full Stack y Project Manager',
            //     description:
            //         'Proyecto ganador del Latina Blockchain Hackathon (Categoría Polygon Cardona). Plataforma descentralizada que promueve la adopción responsable de mascotas y la esterilización.',
            //     tech: ['React', 'Solidity', 'Web3', 'Figma']
            // }
        ],
        talks: [
            {
                title: 'IA en acción: Hackeá tu productividad diaria',
                event: 'Programa M1000IA',
                year: '2024',
                description:
                    'Webinar sobre cómo usar herramientas de IA para automatizar tareas y mejorar el enfoque y la eficiencia.'
            },
            {
                title: 'Comité Mujeres en Tecnología – Intel',
                event: 'Panel',
                year: '2024',
                description:
                    'Moderadora en conversatorio sobre el impacto ético y social de la inteligencia artificial junto a la Dra. Florencia Pollo-Cataneo.'
            },
            {
                title: 'IA para Mujeres Empresarias: Automatización y Productividad Responsable',
                event: 'MEFEBA',
                year: '2024',
                description:
                    'Charla sobre el uso estratégico y responsable de la IA aplicada a negocios y emprendimientos.'
            }
        ],
        contact: {
            intro:
                'Podés encontrarme en GitHub, LinkedIn o escribirme por email.',
            emailTitle: 'Email',
            emailSubtitle: 'lauraymh000@gmail.com',
            linkedinTitle: 'LinkedIn',
            linkedinSubtitle: 'linkedin.com/in/laura-moyano-h',
            githubTitle: 'GitHub',
            githubSubtitle: 'github.com/Laura-M-stack'
        }
    }
};