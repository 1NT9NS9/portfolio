import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  projectUrl?: string;
  tags: string[];
  color: string; // Tailwind color class for accent
}

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 1-100
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}