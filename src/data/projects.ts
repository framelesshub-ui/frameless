export interface Project {
  id?: string;
  slug: string;
  client: string;
  title: string;
  category: 'Branding' | 'Content' | 'YouTube' | 'Campaigns';
  displayCategory: string;
  thumbnail: string;
  video?: string;
  videoEmbedUrl?: string;
  channelUrl?: string;
  featured: boolean;
  year: string;
  overview: string;
  deliverables: string[];
  gallery?: string[];
  verifiedResult?: string;
  services?: string[];
  tagline?: string;
  stats?: { label: string; value: string }[];
  gridSpan?: string;
}

export const WORK_FILTERS = ['All', 'Content', 'Branding', 'YouTube', 'Campaigns'] as const;
export type WorkFilter = (typeof WORK_FILTERS)[number];
export type ProjectCategory = WorkFilter;

export const projects: Project[] = [
  {
    slug: 'birlas-parvai',
    client: 'Birlas Parvai',
    title: 'Automotive Content',
    category: 'YouTube',
    displayCategory: 'YouTube / Production',
    thumbnail: '/campaigns/automotive.jpg',
    video: '/assets/frameless-hero.mp4',
    featured: true,
    year: '2026',
    overview:
      'Tamil Nadu’s leading automotive content platform covering cars, bikes, reviews and automotive stories.',
    deliverables: [
      'YouTube Editing',
      'Shorts & Reels',
      'Social Media Management',
    ],
    verifiedResult: '4.8M+ Channel Views',
  },
  {
    slug: 'ora-kitchen',
    client: 'Ora Kitchen',
    title: 'Brand Identity',
    category: 'Branding',
    displayCategory: 'Branding',
    thumbnail: '/media/generated/branding-identity-editorial.jpg',
    featured: true,
    year: '2026',
    overview:
      'A professional catering brand serving corporate events, weddings, parties and special occasions.',
    deliverables: [
      'Branding',
      'Social Media Marketing',
      'Content Creation',
      'Social Media Management',
    ],
  },
  {
    slug: 'aura-home',
    client: 'Aura Home',
    title: 'Brand Identity',
    category: 'Branding',
    displayCategory: 'Branding',
    thumbnail: '/services/branding-design.png',
    featured: true,
    year: '2026',
    overview:
      'A home-focused brand offering essentials and products designed to elevate modern living spaces.',
    deliverables: [
      'Social Media Marketing',
      'Content Creation',
      'Social Media Management',
    ],
  },
  {
    slug: 'supratha-wellness',
    client: 'Supratha Wellness',
    title: 'Digital Content',
    category: 'YouTube',
    displayCategory: 'YouTube / Content',
    thumbnail: '/media/generated/performance-analytics-studio.jpg',
    featured: true,
    year: '2026',
    overview:
      'A health-focused content platform covering Ayurveda, Allopathy, Homeopathy, Acupuncture and wellness.',
    deliverables: [
      'YouTube Video Editing',
    ],
    verifiedResult: '3.2M+ Channel Views',
  },
  {
    slug: 'krithi-makeover-artistry',
    client: 'Krithi Makeover Artistry',
    title: 'Brand & Social Content',
    category: 'Branding',
    displayCategory: 'Branding / Content',
    thumbnail: '/media/generated/social-creator-studio.jpg',
    featured: true,
    year: '2026',
    overview:
      'A premium makeup artist brand focused on luxury beauty, professional portfolios and personal branding.',
    deliverables: [
      'Personal Branding',
      'Content Creation',
      'Social Media Management',
    ],
  },
  {
    slug: 'seyon-lab',
    client: 'Seyon Lab',
    title: 'Digital Presence',
    category: 'Branding',
    displayCategory: 'Branding',
    thumbnail: '/media/generated/web-digital-showcase.jpg',
    featured: true,
    year: '2026',
    overview:
      'A CRM-focused technology company building solutions for modern business operations and customer management.',
    deliverables: [
      'Social Media Support',
      'Creative Consultation',
    ],
  },
  {
    slug: 'frameless-media',
    client: 'Frameless Media',
    title: 'Original Digital Content',
    category: 'Content',
    displayCategory: 'Media / Production',
    thumbnail: '/media/generated/content-production-studio.jpg',
    featured: true,
    year: '2026',
    overview:
      'A cinema-focused content platform featuring interviews, public interactions and entertainment content.',
    deliverables: [
      'Content Production',
      'Video Editing',
      'Social Media Management',
    ],
    verifiedResult: '2.4M+ Channel Views',
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  // Support both canonical and common alias slugs
  if (slug === 'aura-homes') slug = 'aura-home';
  if (slug === 'krithi-makeup-artist') slug = 'krithi-makeover-artistry';
  return projects.find((p) => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project => {
  const normalized =
    currentSlug === 'aura-homes'
      ? 'aura-home'
      : currentSlug === 'krithi-makeup-artist'
      ? 'krithi-makeover-artistry'
      : currentSlug;
  const currentIndex = projects.findIndex((p) => p.slug === normalized);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};

export const portfolioProjects = projects;
export const getFeaturedProject = (): Project => projects[0];
export const WORK_CATEGORIES = WORK_FILTERS;
