export interface Feature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icon components
  items: string[];
  gradient: string;
  badge: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  popular: boolean;
  color: string; // 'blue' | 'purple' | 'cyan'
}

export interface Project {
  id: string;
  title: string;
  category: string; // 'corporativos' | 'ecommerce' | 'educacion' | 'salud' | 'tecnologia' | 'industria'
  description: string;
  image: string;
  technologies: string[];
  results: string;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  content?: string[];
  subtitle?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Metric {
  value: string;
  label: string;
}
