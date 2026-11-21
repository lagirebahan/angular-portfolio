export type ShelfCategory = 'featured' | 'full-stack' | 'systems-research' | 'experiments';

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: ShelfCategory;
  coverImage: string; // e.g. '/covers/assignly.webp'
  accentColor?: string;
  year: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    tagline: string;
    bio: string;
    location: string;
    skills: { group: string; items: string[] }[];
  };
  items: PortfolioItem[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
}