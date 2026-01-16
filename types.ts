export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  image: string;
  summary: string;
  problem: string;
  architecture: string;
  techStack: string[];
  challenges: string;
  outcomes: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NavLink {
  name: string;
  href: string;
}