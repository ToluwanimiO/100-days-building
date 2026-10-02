// Core Project type
export interface Project {
  id: string;
  dayNumber: number;
  title: string;
  slug: string;
  date: string;
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  instructions: InstructionStep[];
  technologies: string[];
  category?: string;
  featured: boolean;
  coverImage?: string;
  images: ProjectImage[];
  links: ProjectLink[];
  challenges?: string;
  lessons?: string;
  buildNotes?: string;
  whoIsItFor?: string;
  inspiration?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface InstructionStep {
  id: string;
  title: string;
  description: string;
  screenshot?: string;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  isCover?: boolean;
}

export interface ProjectLink {
  id: string;
  label: string;
  url: string;
  type: 'demo' | 'github' | 'download' | 'android' | 'ios' | 'documentation' | 'video' | 'custom';
  customLabel?: string;
}

// Dashboard state
export interface DashboardState {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
}

// Filter and search
export interface FilterState {
  search: string;
  technologies: string[];
  featured: boolean;
  sortBy: 'date' | 'dayNumber' | 'title';
}

// Progress stats
export interface ProgressStats {
  totalDays: number;
  completedDays: number;
  currentStreak: number;
  longestStreak: number;
  technologiesUsed: Record<string, number>;
  featuredCount: number;
}

// Form types
export interface ProjectFormData {
  dayNumber: number;
  title: string;
  date: string;
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  instructions: InstructionStep[];
  technologies: string[];
  category?: string;
  featured: boolean;
  coverImage?: string;
  images: ProjectImage[];
  links: ProjectLink[];
  challenges?: string;
  lessons?: string;
  buildNotes?: string;
  whoIsItFor?: string;
  inspiration?: string;
}