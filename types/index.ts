export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  materials?: string[];
  warranty?: string;
  ctaText: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'replacement' | 'repair' | 'metal' | 'storm';
  categoryLabel: string;
  location: string;
  neighborhood: string;
  image: string;
  completionTime: string;
  material: string;
  ratingOrStat: string;
  description: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  initials: string;
  location: string;
  serviceType: string;
  rating: number;
  text: string;
  source: 'Google' | 'Angi' | 'BBB';
  verified: boolean;
  date: string;
}

export interface ServiceArea {
  name: string;
  slug: string;
  county: string;
  zipCodes: string[];
  description: string;
  responseTime: string;
  activeCrews: number;
}

export interface TrustBadgeItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FinancingPlan {
  title: string;
  apr: string;
  term: string;
  monthlyPer10k: string;
  description: string;
  features: string[];
  recommended?: boolean;
}
