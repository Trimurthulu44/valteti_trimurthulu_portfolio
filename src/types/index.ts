export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  metrics?: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    icon: string;
    experience?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
  badgeColor: string;
  icon: string;
  skills: string[];
}

export interface Hackathon {
  id: string;
  title: string;
  organizer: string;
  year: string;
  role: string;
  projectTitle: string;
  badge: string;
  description: string;
  techStack: string[];
  icon: string;
  githubUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
  badge?: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  subtext: string;
  icon: string;
  color: string;
}
