export type Lang = 'en' | 'es';

export const x = 'https://x.com/luchoarossa';
export const xHandle = '@luchoarossa';
export const linkedin = 'https://linkedin.com/in/arossaluciano';
export const github = 'https://github.com/luchoarossa';

interface Job {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
  tags: string[];
}

interface Cert {
  name: string;
  issuer: string;
  badge?: string;
}

interface Project {
  name: string;
  description: string;
  stack: string[];
  code?: string;
  link?: string;
  featured?: boolean;
}

export interface Dict {
  meta: { title: string; description: string };
  nav: { experience: string; projects: string; certifications: string; about: string; contact: string };
  hero: {
    greeting: string;
    role: string;
    location: string;
    status: string;
    cta: string;
    ctaSecondary: string;
  };
  sections: { experience: string; projects: string; certifications: string; about: string; contact: string };
  jobs: Job[];
  currentLabel: string;
  projects: Project[];
  codeLabel: string;
  visitLabel: string;
  featuredLabel: string;
  certs: Cert[];
  about: string[];
  focusTitle: string;
  focus: string[];
  contact: {
    lead: string;
    handleLabel: string;
  };
  footer: string;
}

export const ui: Record<Lang, Dict> = {
  en: {
    meta: {
      title: 'Luciano Arossa — Cloud Security Engineer | Cybersecurity',
      description:
        'Luciano Arossa. Cloud Security Engineer and cybersecurity specialist based in Palma de Mallorca, Spain. Pentesting, systems hardening and cloud defense.',
    },
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm Luciano",
      role: 'Security Engineer',
      location: 'Palma de Mallorca, Spain',
      status: 'open to collaboration',
      cta: 'Get in touch',
      ctaSecondary: 'LinkedIn',
    },
    sections: {
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      about: 'About me',
      contact: 'Contact',
    },
    jobs: [
      {
        role: 'Cloud Security Engineer Jr',
        company: 'Dingus',
        period: 'Apr 2026 — Present',
        current: true,
        description:
          'Securing cloud infrastructure: hardening, identity and access management, security monitoring and incident response across production environments.',
        tags: ['IAM', 'Hardening', 'Incident Response', 'DLP', 'Disaster Recovery'],
      },
      {
        role: 'Systems Administrator',
        company: 'Sinensis Tech',
        period: 'Apr 2025 — Apr 2026',
        description:
          'Administration and maintenance of hardware, networks and servers. Built internal tooling for automation and system optimization.',
        tags: ['Microsoft', 'Networking', 'VoIP', 'Security'],
      },
      {
        role: 'Technical Support',
        company: 'Sinensis Tech',
        period: 'Nov 2022 — Apr 2025',
        description:
          'First line of response for client infrastructure: diagnosed and resolved incidents across web hosting, email and DNS, migrated and built client websites, and improved their search visibility. 2+ years turning outages and misconfigurations into tickets closed.',
        tags: ['Hosting', 'DNS', 'SEO'],
      },
    ],
    currentLabel: 'current',
    projects: [
      {
        name: 'Vulniverse',
        description:
          'Cybersecurity and AI-risk blog that explains threats without the alarm: rigorous, calm and readable. I run the whole thing, from the research and writing to the platform behind it.',
        stack: ['Cybersecurity', 'AI Risk', 'Writing'],
        link: 'https://vulniverse.com',
        featured: true,
      },
      {
        name: 'Security Audit & Pentesting on a Debian Server',
        description:
          'Pentesting analysis aligned with ISMS standards, including a recovery plan to mitigate vulnerabilities. The goal: evaluate and strengthen server security, ensuring resilience against cyber threats.',
        stack: ['Kali Linux', 'Metasploit', 'Debian'],
        code: 'https://github.com/luchoarossa/AuditoriaServidorDebian',
      },
    ],
    codeLabel: 'View code',
    visitLabel: 'Visit site',
    featuredLabel: 'Featured',
    certs: [
      {
        name: 'ISO/IEC 27001:2022 Lead Auditor',
        issuer: 'CertJoin',
        badge: '/badges/iso-27001-lead-auditor.png',
      },
      {
        name: 'SC-900: Security, Compliance, and Identity Fundamentals',
        issuer: 'Microsoft',
        badge: '/badges/sc-900.png',
      },
      {
        name: 'Cybersecurity Fundamentals (university course)',
        issuer: 'Universidad de Málaga · Samsung',
        badge: '/badges/uma-samsung-fundamentos.jpg',
      },
    ],
    about: [
      "I'm Luciano, a passionate and committed IT professional specialized in cybersecurity.",
      'I am driven by solving complex problems and making digital systems resilient against cyber threats. My dedication to cybersecurity comes from a firm conviction: protecting information and preserving digital integrity in an increasingly connected world.',
      "If you want to talk cybersecurity, collaborate on a project or exchange ideas, don't hesitate to reach out. I'm always open to new challenges and opportunities. Let's build a safer digital world together.",
    ],
    focusTitle: 'Toolbox & focus',
    focus: [
      'Cloud Security',
      'Pentesting',
      'Linux / Debian',
      'Kali Linux',
      'Metasploit',
      'Networking',
      'IAM',
      'Systems Hardening',
    ],
    contact: {
      lead: 'Have a project, a vulnerability to discuss, or just want to talk security?',
      handleLabel: 'Find me on X',
    },
    footer: 'Built with Astro. No trackers, no cookies.',
  },
  es: {
    meta: {
      title: 'Luciano Arossa — Cloud Security Engineer | Ciberseguridad',
      description:
        'Luciano Arossa. Cloud Security Engineer y especialista en ciberseguridad en Palma de Mallorca, España. Pentesting, hardening de sistemas y defensa cloud.',
    },
    nav: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy Luciano',
      role: 'Security Engineer',
      location: 'Palma de Mallorca, España',
      status: 'abierto a colaborar',
      cta: 'Contáctame',
      ctaSecondary: 'LinkedIn',
    },
    sections: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    jobs: [
      {
        role: 'Cloud Security Engineer Jr',
        company: 'Dingus',
        period: 'Abr 2026 — Actualidad',
        current: true,
        description:
          'Seguridad de infraestructura cloud: hardening, gestión de identidades y accesos, monitorización de seguridad y respuesta a incidentes en entornos de producción.',
        tags: ['IAM', 'Hardening', 'Respuesta a Incidentes', 'DLP', 'Disaster Recovery'],
      },
      {
        role: 'Administrador de Sistemas',
        company: 'Sinensis Tech',
        period: 'Abr 2025 — Abr 2026',
        description:
          'Administración y mantenimiento de hardware, redes y servidores. Desarrollo de herramientas internas para automatización y optimización de sistemas.',
        tags: ['Microsoft', 'Redes', 'VoIP', 'Seguridad'],
      },
      {
        role: 'Soporte Técnico',
        company: 'Sinensis Tech',
        period: 'Nov 2022 — Abr 2025',
        description:
          'Primera línea de respuesta para la infraestructura de clientes: diagnóstico y resolución de incidencias en alojamiento web, correo y DNS, migración y creación de sitios web y mejora de su visibilidad en buscadores. Más de 2 años convirtiendo caídas y malas configuraciones en tickets cerrados.',
        tags: ['Hosting', 'DNS', 'SEO'],
      },
    ],
    currentLabel: 'actual',
    projects: [
      {
        name: 'Vulniverse',
        description:
          'Blog de ciberseguridad y riesgo de la IA que explica las amenazas sin alarmismo: riguroso, sereno y legible. Lo llevo entero, desde la investigación y la escritura hasta la plataforma que lo sostiene.',
        stack: ['Ciberseguridad', 'Riesgo de la IA', 'Escritura'],
        link: 'https://vulniverse.com',
        featured: true,
      },
      {
        name: 'Auditoría de Seguridad y Pentesting en Servidor Debian',
        description:
          'Análisis de pentesting conforme a los estándares SGSI, junto con un plan de recuperación para mitigar vulnerabilidades. Objetivo: evaluar y reforzar la seguridad del servidor, asegurando su resistencia ante amenazas cibernéticas.',
        stack: ['Kali Linux', 'Metasploit', 'Debian'],
        code: 'https://github.com/luchoarossa/AuditoriaServidorDebian',
      },
    ],
    codeLabel: 'Ver código',
    visitLabel: 'Visitar sitio',
    featuredLabel: 'Destacado',
    certs: [
      {
        name: 'Auditor Líder ISO/IEC 27001:2022',
        issuer: 'CertJoin',
        badge: '/badges/iso-27001-lead-auditor.png',
      },
      {
        name: 'SC-900: Security, Compliance, and Identity Fundamentals',
        issuer: 'Microsoft',
        badge: '/badges/sc-900.png',
      },
      {
        name: 'Fundamentos de Ciberseguridad (curso universitario)',
        issuer: 'Universidad de Málaga · Samsung',
        badge: '/badges/uma-samsung-fundamentos.jpg',
      },
    ],
    about: [
      'Soy Luciano, un apasionado y comprometido profesional de la informática especializado en ciberseguridad.',
      'Me motiva resolver problemas complejos y garantizar que los sistemas digitales sean resilientes ante las amenazas cibernéticas. Mi dedicación a la ciberseguridad surge de una firme convicción: proteger la información y preservar la integridad digital en un mundo cada vez más conectado.',
      'Si te interesa hablar sobre ciberseguridad, colaborar en un proyecto o intercambiar ideas, no dudes en contactarme. Siempre estoy abierto a nuevos desafíos y oportunidades. Construyamos juntos un mundo digital más seguro.',
    ],
    focusTitle: 'Herramientas y enfoque',
    focus: [
      'Cloud Security',
      'Pentesting',
      'Linux / Debian',
      'Kali Linux',
      'Metasploit',
      'Redes',
      'IAM',
      'Hardening de Sistemas',
    ],
    contact: {
      lead: '¿Tienes un proyecto, una vulnerabilidad que comentar o simplemente quieres hablar de seguridad?',
      handleLabel: 'Encuéntrame en X',
    },
    footer: 'Hecho con Astro. Sin trackers, sin cookies.',
  },
};

export function pathFor(lang: Lang, anchor = ''): string {
  const base = lang === 'en' ? '/' : '/es/';
  return anchor ? `${base}#${anchor}` : base;
}
