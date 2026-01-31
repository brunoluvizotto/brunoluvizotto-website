export interface TranslatableString {
  en: string;
  pt: string;
}

export interface Experience {
  id: string;
  company: string;
  role: TranslatableString;
  period: string;
  location: TranslatableString;
  description: TranslatableString;
  technologies: string[];
}

export interface Project {
  id: string;
  title: TranslatableString;
  description: TranslatableString;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
  youtubeUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: TranslatableString;
  skills: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: TranslatableString;
  period: string;
}

export type Language = "en" | "pt";
