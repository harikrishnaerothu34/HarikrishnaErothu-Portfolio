export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'AI / LLM' | 'Full-Stack' | 'Machine Learning';
  problemStatement: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image: string;
  highlightBadge?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Databases' | 'AI / ML / LLM' | 'Cloud' | 'Tools';
  proficiency?: 'Advanced' | 'Proficient' | 'Familiar';
  iconName?: string;
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  rank: '1st Place' | 'Runner-up' | 'Finalist / Participant';
  event: string;
  organization: string;
  team?: string;
  category?: string;
  description: string;
  badge: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'Cloud' | 'AI / Machine Learning' | 'Computer Science';
  skillsVerified: string[];
}

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  duration: string;
  status: string;
  coursework: string[];
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
  isCustomizableNotice?: boolean;
}

export interface CodingStats {
  platform: string;
  username: string;
  profileUrl: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  contestRating?: string;
  activeStreak?: string;
  topTopics: { name: string; count: number }[];
}
