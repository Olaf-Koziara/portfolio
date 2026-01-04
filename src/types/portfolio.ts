export interface Project {
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  points: string[];
}

export interface Skill {
  name: string;
  category?: string;
  icon: React.ReactNode;
}
