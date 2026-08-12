// ============================================================
// Shared TypeScript Interfaces & Types
// ============================================================

export interface CaseStudyMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CaseStudy {
  slug: string;
  platform: "meta" | "google" | "tiktok";
  category: ("ecommerce" | "lead-gen" | "tracking" | "automation")[];
  niche: string;
  market: string;
  objective: string;
  duration?: string;
  spend?: string;
  metrics: CaseStudyMetric[];
  summary?: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  capabilities?: string[];
  featured?: boolean;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  date?: string;
  duration?: string;
  type: "certification" | "education";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  whatsapp: string;
  email?: string;
  social: {
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  metrics: {
    label: string;
    value: string;
    suffix?: string;
  }[];
}
