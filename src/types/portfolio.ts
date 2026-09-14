// src/types/portfolio.ts
export interface Profile {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  headline: string;
  bio: string;
  gpa: string;
  graduationDate: string;
}

export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  details: string[];
  stack: string[];
  link?: string;
  image?: string;
  images?: string[];
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  highlights?: string[];
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  gpa?: string;
  highlights?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certificate {
  name: string;
}