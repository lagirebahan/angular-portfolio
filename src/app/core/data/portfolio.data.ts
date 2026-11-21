import { PortfolioData } from '../models/portfolio.models';

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'Christian Jordan Dwisaputra',
    tagline: 'Computer Science Student & Full-Stack Software Engineer',
    bio: 'Building clean, responsive web applications, practical software architecture, and structured systems with a focus on clarity and performance.',
    location: 'South Tangerang, Indonesia',
    skills: [
      { group: 'Frontend & UI', items: ['Angular', 'TypeScript', 'SCSS', 'Next.js', 'Tailwind CSS'] },
      { group: 'Backend & Data', items: ['NestJS', 'Prisma ORM', 'MySQL', 'SQL Server', 'Supabase'] },
      { group: 'Engineering & Tools', items: ['Git', 'Jest', 'Linux / Windows Toolchains', 'Algorithm Design'] }
    ]
  },
  items: [
    {
      id: 'assignly',
      title: 'Assignly',
      subtitle: 'Academic Workflow & Software Architecture App',
      category: 'featured',
      coverImage: '/covers/assignly.webp',
      year: '2026',
      role: 'Full-Stack Developer',
      summary: 'A structured web platform designed to organize assignments, workflows, and collaborative tracking with clean state and relational persistence.',
      highlights: [
        'Designed modular frontend views and relational data access',
        'Focused on predictable workflows and responsive UI'
      ],
      stack: ['Next.js', 'TypeScript', 'Prisma ORM', 'Supabase', 'Tailwind CSS']
    },
    {
      id: 'serenity',
      title: 'Serenity',
      subtitle: 'Healthy Dessert E-Commerce Concept',
      category: 'experiments',
      coverImage: '/covers/serenity.webp',
      year: '2026',
      role: 'Product & Web Concept Builder',
      summary: 'An e-commerce storefront concept focused on healthier dessert options, clear value propositions, and lightweight hosting.',
      highlights: [
        'Structured catalog presentation and business model flow',
        'Built for low-overhead static/JAMstack delivery'
      ],
      stack: ['TypeScript', 'SCSS', 'Static Hosting']
    },
    {
      id: 'sequence-alignment',
      title: 'Sequence Alignment Explorer',
      subtitle: 'Needleman-Wunsch & Smith-Waterman Visualizer',
      category: 'systems-research',
      coverImage: '/covers/alignment.webp',
      year: '2026',
      role: 'Algorithm & Visualization Author',
      summary: 'Dynamic programming implementation for global and local biological sequence alignment with scoring matrices and traceback.',
      highlights: [
        'Implemented both global and local DP matrix construction',
        'Clear step-by-step comparison for sequence analysis'
      ],
      stack: ['TypeScript', 'Algorithms', 'Dynamic Programming']
    }
  ],
  experience: [
    {
      role: 'Full-Stack Developer Intern (Incoming)',
      organization: 'PT. Adicipta Inovasi Teknologi (AdIns)',
      period: 'Feb 2027 – Feb 2028',
      location: 'Indonesia',
      bullets: [
        'Joining the engineering team working on enterprise financing systems and full-stack workflows.'
      ]
    }
  ],
  education: [
    {
      institution: 'Bina Nusantara University (BINUS @ Alam Sutera)',
      degree: 'B.Sc. in Computer Science',
      period: 'Expected 2028',
      details: [
        'Focus on software engineering, data structures, databases, and system design.'
      ]
    }
  ]
};