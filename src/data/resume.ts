export type Locale = 'es' | 'en';

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
  tags?: string[];
}

export interface ResumeContent {
  meta: { title: string; description: string };
  ui: Record<string, string>;
  profile: { role: string; intro: string; availability: string; location: string; email: string };
  about: string[];
  skills: { label: string; items: string[] }[];
  experience: TimelineItem[];
  education: TimelineItem[];
  projects: { name: string; type: string; description: string; stack: string[]; link?: string }[];
}

export const resume: Record<Locale, ResumeContent> = {
  es: {
    meta: { title: 'root@matias-martello — Resume', description: 'Portfolio y currículum de Matias Martello.' },
    ui: {
      prompt: 'whoami', navAbout: 'perfil', navExperience: 'experiencia', navEducation: 'estudios', navProjects: 'proyectos',
      commandAbout: 'cat ./perfil.md', commandSkills: 'ls ./habilidades', commandExperience: 'git log --experience',
      commandEducation: 'cat ./educacion.log', commandProjects: 'find ./proyectos -maxdepth 1', contact: 'contacto',
      copyEmail: 'copiar email', copied: 'email copiado', cv: 'descargar CV', cvSoon: 'próximamente', available: 'disponible',
      present: 'actualidad', language: 'EN', languageLabel: 'Cambiar a inglés', viewProject: 'visitar sitio', moreExperience: 'ver historial completo', closeExperience: 'ocultar historial', footer: 'Hecho con Astro · disponible en español e inglés',
    },
    profile: { role: 'Software Engineer', intro: 'Hola!, me especializo en encontrar, entender y proponer soluciones digitales a problemas o ideas innovadoras buscando siempre la calidad, la eficiencia y la mejor experiencia para el usuario.', availability: 'Abierto a nuevas oportunidades', location: 'Argentina, Buenos Aires', email: 'matias.martello@gmail.com' },
    about: ['Durante mi carrera trabaje con metodologias agiles, involucrado en las tareas de planeamiento, administracion, refinamiento y control de tareas de projectos. Enfocado en la creacion y mantenimiento de flujos de trabajo de integracion continua y despliegue continuo, buscando calidad y minimazando fallas. Toma de decisiones de Arquitectura y Tecnologias en base al problema. Implementacion de soluciones siguiendo buenas practicas que fui refinando a lo largo de los años'],
    skills: [
      { label: 'frontend', items: ['Astro', 'TypeScript', 'React', 'HTML/CSS', 'NextJS', 'React-Native', 'Expo', 'Cypress'] },
      { label: 'backend', items: ['Go', 'NestJS', 'C# .Net Framework', 'NodeJS', 'SQL', 'NoSQL', 'Cache DB', 'Graph DBs', 'Apache Kafka', 'RabbitMQ'] },
      { label: 'infraestructura', items: ['Github/Gitlab', 'BitBucket', 'Jenkins', 'Nomad','Grafana', 'Posthog','Docker', 'K8N', 'Sentry', 'Terraform', 'AWS'] }
    ],
    experience: [
      { period: '2023 — 2026', title: 'Software Engineer', organization: 'Stonebranch', location: 'Remoto', summary: 'Desarrollo de una solución MFT, creando herramientas específicas para usuarios finales y reduciendo la complejidad de la solución core.', highlights: ['Trabajo conjunto con el equipo backend en la definición técnica y funcional de nuevas funcionalidades.', 'Experiencias para la configuración y el mantenimiento de nodos.', 'Herramientas para administrar canales de comunicación y transferencias.'], tags: ['Software Engineering', 'MFT', 'Colaboración cross-functional'] },
      { period: '2026 — actualidad', title: 'Full Stack · Proyecto personal', organization: 'Playpeak', location: 'Argentina', summary: 'Proyecto de aprendizaje continuo compuesto por tres productos deportivos interconectados mediante microservicios.', highlights: ['Definición de la arquitectura y desarrollo end-to-end de aplicaciones web, mobile, servicios backend y capa de datos.', 'Implementación de pipelines de CI con pruebas automatizadas, controles de calidad y análisis de seguridad para aumentar la confiabilidad de las entregas y reducir la superficie de ataque.', 'Observabilidad centralizada y monitoreo asistido por modelos de IA de última generación para acelerar la detección y el diagnóstico de incidentes.'], tags: ['Microservicios', 'IA', 'CI/CD', 'Observabilidad'] },
      { period: '2022 — 2023', title: 'Frontend Lead', organization: 'GlobalLogic', location: 'Remoto', summary: 'Liderazgo de un equipo frontend en una arquitectura avanzada para un cliente de pagos de gran escala.', highlights: ['Implementación de microfrontends para dividir el trabajo entre equipos de desarrollo.', 'Despliegue desacoplado de funcionalidades según requerimientos de negocio.'], tags: ['Microfrontends', 'Payments', 'Liderazgo'] },
      { period: '2015 — 2022', title: 'Full Stack Developer', organization: 'Poder Judicial', location: 'Argentina', summary: 'Desarrollo de una aplicación de alta seguridad para la carga y gestión de causas judiciales, con acceso a información relacionada.', highlights: ['Flujos seguros para el manejo de expedientes y datos sensibles.', 'Modelado de información relacionada para facilitar la consulta de casos.'], tags: ['Full Stack', 'Seguridad', 'Gestión de casos'] },
      { period: '2014 — 2015', title: 'Full Stack Developer', organization: 'M&G Consultores', location: 'Argentina', summary: 'Creación y soporte de múltiples aplicaciones C# MVC en contacto directo con clientes finales.', highlights: ['Relevamiento, entendimiento y refinamiento de requerimientos.', 'Mantenimiento y evolución de aplicaciones MVC.'], tags: ['C#', 'MVC', 'Cliente'] },
      { period: '2012 — 2014', title: 'Full Stack Developer', organization: 'Accenture', location: 'Argentina', summary: 'Testing y desarrollo de aplicaciones siguiendo patrones MVC, con foco en rendimiento y bases de datos relacionales.', highlights: ['Desarrollo con C#, Windows Forms, ASP.NET, PHP, HTML y JavaScript.', 'Gestión de bases de datos relacionales y optimización de consultas SQL.'], tags: ['C#', 'ASP.NET', 'SQL'] },
    ],
    education: [
      { period: '2014 — actual', title: 'Cursos Online', organization: 'Online', location: '', summary: 'Constante evolucion en cursos de plataformas', highlights: ['AI','Networking','CI/CD',"React-Native",'Observabilidad', 'Plataformas y tecnicas de despliegue','Profiling','DB Replication Techniques','n8n'] },
      { period: '', title: 'Ing. en sistemas / Carrera principal', organization: 'UTN FRBA', location: 'Argentina', summary: 'Último año: cursando el proyecto final de Ingeniería en Sistemas de Información.', highlights: [] },
      { period: '', title: 'Certificaciones', organization: 'Formación profesional', location: '', summary: 'Preparación de certificaciones orientadas a seguridad y pruebas de penetración.', highlights: ['Security+ — En curso', 'PenTest+ — En curso'] },
      { period: '2014', title: 'Tecnico en electronica', organization: 'PIO IX Secundario', location: 'Argentina', summary: 'Curso de ejemplo para destacar formación continua.', highlights: [] },
    ],
    projects: [
      { name: 'Playpeak', type: 'Proyecto de aprendizaje', description: 'Ecosistema de tres productos deportivos interconectados mediante microservicios, con monitoreo asistido por IA y controles de calidad y seguridad en CI.', stack: ['React Native', 'React', 'Go', 'PostgreSQL', 'Microservicios', 'IA', 'CI/CD'], link: 'https://app.playpeak.com.ar' },
      { name: 'Coiron MPF', type: 'Producto', description: 'Software de administración y gestión de causas judiciales con interconexión de personas y elementos mediante una base de datos de grafos.', stack: ['C#', 'React', 'SQL', 'Neo4j', 'Elasticsearch'] },
      { name: 'MFT Managed File Transfer', type: 'SaaS', description: 'Sistema de transferencia de archivos empresarial con encriptación y auditoría.', stack: ['Golang', 'Peristencia poligloata', 'React'] },
      { name: 'Card Payment', type: 'FrontEnd', description: 'Sistema de procesamiento de pagos con tarjetas bancarias.', stack: ['React', 'TypeScript', 'Tailwind','Cypress'] },
      { name: 'Sistema de Gestion de causas judiciales', type: 'Producto', description: 'Interfaz para gestionar causas judiciales.', stack: ['C#', '.Net', 'MVC','MongoDB'] },
    ],
  },
  en: {
    meta: { title: 'root@matias-martello — Resume', description: 'Portfolio and resume of Matias Martello.' },
    ui: {
      prompt: 'whoami', navAbout: 'profile', navExperience: 'experience', navEducation: 'education', navProjects: 'projects',
      commandAbout: 'cat ./profile.md', commandSkills: 'ls ./skills', commandExperience: 'git log --experience',
      commandEducation: 'cat ./education.log', commandProjects: 'find ./projects -maxdepth 1', contact: 'contact',
      copyEmail: 'copy email', copied: 'email copied', cv: 'download CV', cvSoon: 'coming soon', available: 'available',
      present: 'present', language: 'ES', languageLabel: 'Switch to Spanish', viewProject: 'visit site', moreExperience: 'view full history', closeExperience: 'hide history', footer: 'Built with Astro · available in Spanish and English',
    },
    profile: { role: 'Software Engineer', intro: 'Hi! I specialize in identifying, understanding, and proposing digital solutions for problems and innovative ideas, always pursuing quality, efficiency, and the best possible user experience.', availability: 'Open to new opportunities', location: 'Buenos Aires, Argentina', email: 'matias.martello@gmail.com' },
    about: ['Throughout my career, I have worked with agile methodologies, taking part in the planning, management, refinement, and tracking of project tasks. I focus on creating and maintaining continuous integration and continuous deployment workflows, pursuing quality and minimizing failures. I make architecture and technology decisions based on the problem at hand, and implement solutions following best practices that I have refined over the years.'],
    skills: [
      { label: 'frontend', items: ['Astro', 'TypeScript', 'React', 'HTML/CSS', 'NextJS', 'React-Native', 'Expo', 'Cypress'] },
      { label: 'backend', items: ['Go', 'NestJS', 'C# .Net Framework', 'NodeJS', 'SQL', 'NoSQL', 'Cache DB', 'Graph DBs', 'Apache Kafka', 'RabbitMQ'] },
      { label: 'infrastructure', items: ['Github/Gitlab', 'BitBucket', 'Jenkins', 'Nomad', 'Grafana', 'Posthog', 'Docker', 'K8N', 'Sentry', 'Terraform', 'AWS'] },
    ],
    experience: [
      { period: '2023 — 2026', title: 'Software Engineer', organization: 'Stonebranch', location: 'Remote', summary: 'Developed an MFT solution, creating focused end-user tools that reduce the complexity of the core solution.', highlights: ['Partnered with the backend team on the technical and functional definition of new features.', 'Built experiences for configuring and maintaining nodes.', 'Created tools to manage communication channels and transfers.'], tags: ['Software Engineering', 'MFT', 'Cross-functional collaboration'] },
      { period: '2026 — present', title: 'Full Stack · Personal Project', organization: 'Playpeak', location: 'Argentina', summary: 'Continuous-learning project comprising three interconnected sports products integrated through microservices.', highlights: ['Own the architecture and end-to-end delivery of web and mobile applications, backend services, and the data layer.', 'Built CI pipelines with automated tests, quality gates, and security checks to improve release reliability and reduce the attack surface.', 'Implemented centralized observability and monitoring assisted by state-of-the-art AI models to accelerate incident detection and diagnosis.'], tags: ['Microservices', 'AI', 'CI/CD', 'Observability'] },
      { period: '2022 — 2023', title: 'Frontend Lead', organization: 'GlobalLogic', location: 'Remote', summary: 'Led a frontend team working on an advanced architecture for a large-scale payments client.', highlights: ['Implemented microfrontends to split work across development teams.', 'Enabled decoupled feature deployments aligned with business requirements.'], tags: ['Microfrontends', 'Payments', 'Leadership'] },
      { period: '2015 — 2022', title: 'Full Stack Developer', organization: 'Poder Judicial', location: 'Argentina', summary: 'Developed a high-security application for entering and managing judicial cases, with access to related information.', highlights: ['Built secure workflows for case files and sensitive data.', 'Modeled related information to improve case lookup.'], tags: ['Full Stack', 'Security', 'Case management'] },
      { period: '2014 — 2015', title: 'Full Stack Developer', organization: 'M&G Consultores', location: 'Argentina', summary: 'Created and supported multiple C# MVC applications in direct contact with end customers.', highlights: ['Gathered, understood, and refined requirements.', 'Maintained and evolved MVC applications.'], tags: ['C#', 'MVC', 'Client-facing'] },
      { period: '2012 — 2014', title: 'Full Stack Developer', organization: 'Accenture', location: 'Argentina', summary: 'Tested and developed MVC-pattern applications, with a focus on performance and relational databases.', highlights: ['Developed with C#, Windows Forms, ASP.NET, PHP, HTML, and JavaScript.', 'Managed relational databases and optimized SQL queries.'], tags: ['C#', 'ASP.NET', 'SQL'] },
    ],
    education: [
      { period: '2014 — present', title: 'Online Courses', organization: 'Online', location: '', summary: 'Continuous learning through courses on online platforms.', highlights: ['AI', 'Networking', 'CI/CD', 'React-Native', 'Observability', 'Deployment platforms and techniques', 'Profiling', 'Database replication techniques','n8n'] },
      { period: '', title: 'Systems Engineering / Main Degree', organization: 'UTN FRBA', location: 'Argentina', summary: 'Final year: Systems Engineering capstone project in progress.', highlights: [] },
      { period: '', title: 'Certifications', organization: 'Professional development', location: '', summary: 'Preparing for certifications focused on security and penetration testing.', highlights: ['Security+ — In progress', 'PenTest+ — In progress'] },
      { period: '2014', title: 'Electronics Technician', organization: 'PIO IX Secondary School', location: 'Argentina', summary: 'Sample course highlighting continuing education.', highlights: [] },
    ],
    projects: [
      { name: 'Playpeak', type: 'Learning Project', description: 'Ecosystem of three sports products integrated through microservices, with AI-assisted monitoring and CI quality and security gates.', stack: ['React Native', 'React', 'Go', 'PostgreSQL', 'Microservices', 'AI', 'CI/CD'], link: 'https://app.playpeak.com.ar' },
      { name: 'Coiron MPF', type: 'Product', description: 'Judicial case-management software that interconnects people and case elements through a graph database.', stack: ['C#', 'React', 'SQL', 'Neo4j', 'Elasticsearch'] },
      { name: 'MFT Managed File Transfer', type: 'SaaS', description: 'Enterprise file-transfer system with encryption and auditing.', stack: ['Golang', 'Polyglot persistence', 'React'] },
      { name: 'Card Payment', type: 'Frontend', description: 'Bank-card payment processing system.', stack: ['React', 'TypeScript', 'Tailwind', 'Cypress'] },
      { name: 'Judicial Case Management System', type: 'Product', description: 'Interface for managing judicial cases.', stack: ['C#', '.Net', 'MVC', 'MongoDB'] },
    ],
  },
};
