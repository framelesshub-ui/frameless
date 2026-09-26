export interface Project {
  id?: string;
  slug: string;
  client: string;
  title: string;
  category: 'Branding' | 'Content' | 'Campaigns' | 'Media';
  displayCategory: string;
  thumbnail?: string;
  video?: string;
  videoEmbedUrl?: string;
  channelUrl?: string;
  featured: boolean;
  year: string;
  overview: string;
  deliverables: string[];
  gallery?: string[];
  verifiedResult?: string;
  gridSpan?: 'full' | 'large' | 'tall' | 'medium' | string;
  services?: string[];
  tagline?: string;
  stats?: { label: string; value: string }[];
}

export const WORK_FILTERS = ['All', 'Content', 'Branding', 'Campaigns'] as const;
export type WorkFilter = (typeof WORK_FILTERS)[number];
export type ProjectCategory = WorkFilter;

/**
 * Verified client projects database with exact updated details.
 */
export const projects: Project[] = [
  {
    slug: 'birlas-parvai',
    client: 'Birlas Parvai',
    title: 'Automotive Media & YouTube',
    category: 'Content',
    displayCategory: 'Automotive Media & YouTube',
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
    slug: 'supratha-wellness',
    client: 'Supratha Wellness',
    title: 'Medical & Wellness Media',
    category: 'Content',
    displayCategory: 'Medical & Wellness Media',
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
    slug: 'ora-kitchen',
    client: 'ORA Kitchen',
    title: 'Catering & Food Brand',
    category: 'Branding',
    displayCategory: 'Catering & Food Brand',
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
    slug: 'frameless-media',
    client: 'Frameless Media',
    title: 'Cinema & Entertainment Media',
    category: 'Media',
    displayCategory: 'Cinema & Entertainment Media',
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
  {
    slug: 'aura-homes',
    client: 'Aura Homes',
    title: 'Home & Lifestyle Brand',
    category: 'Branding',
    displayCategory: 'Home & Lifestyle Brand',
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
    slug: 'krithi-makeup-artist',
    client: 'Krithi Makeup Artist',
    title: 'Luxury Makeup & Personal Brand',
    category: 'Content',
    displayCategory: 'Luxury Makeup & Personal Brand',
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
    slug: 'siyan-labs',
    client: 'Siyan Labs',
    title: 'CRM & Technology',
    category: 'Branding',
    displayCategory: 'CRM & Technology',
    featured: true,
    year: '2026',
    overview:
      'A CRM-focused technology company building solutions for modern business operations and customer management.',
    deliverables: [
      'Social Media Support',
      'Creative Consultation',
    ],
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  // Graceful aliases for backward compatibility
  if (slug === 'aura-home') slug = 'aura-homes';
  if (slug === 'krithi-makeover-artistry') slug = 'krithi-makeup-artist';
  if (slug === 'seyon-lab') slug = 'siyan-labs';
  return projects.find((p) => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project => {
  const normalized =
    currentSlug === 'aura-home'
      ? 'aura-homes'
      : currentSlug === 'krithi-makeover-artistry'
      ? 'krithi-makeup-artist'
      : currentSlug === 'seyon-lab'
      ? 'siyan-labs'
      : currentSlug;
  const currentIndex = projects.findIndex((p) => p.slug === normalized);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};

// Aliases for backwards compatibility
export const portfolioProjects = projects;
export const getFeaturedProject = (): Project => projects[0];
export const WORK_CATEGORIES = WORK_FILTERS;
