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
 * Centralized project database. Pure editorial information without external video/image dependencies.
 */
export const projects: Project[] = [
  {
    slug: 'birlas-parvai',
    client: 'Birlas Parvai',
    title: 'Automotive Content & Drive Documentaries',
    category: 'Content',
    displayCategory: 'Automotive Content / Production',
    featured: true,
    year: '2026',
    overview:
      'End-to-end channel production, cinematic road-testing direction, and editorial packaging for Birla’s Parvai, creating high-retention automotive journalism in South India.',
    deliverables: [
      'Video Production',
      'Automotive Cinematography',
      'Editorial Direction',
      'Thumbnail Architecture',
    ],
    verifiedResult: '4.8M+ Channel Views',
  },
  {
    slug: 'supratha-wellness',
    client: 'Supratha Wellness',
    title: 'Clinical Healthcare & Wellness Series',
    category: 'Content',
    displayCategory: 'Healthcare Series / Production',
    featured: true,
    year: '2026',
    overview:
      'A physician-led wellness content system translating medical literature and holistic therapies into approachable, trustworthy video masterclasses.',
    deliverables: [
      'Content Strategy',
      'Physician Masterclasses',
      'Medical Motion Graphics',
      'Channel Growth',
    ],
    verifiedResult: '3.2M+ Channel Views',
  },
  {
    slug: 'frameless-media',
    client: 'Frameless Media',
    title: 'Cinema Interviews & Public Talk Formats',
    category: 'Media',
    displayCategory: 'Original Digital Content / Media',
    featured: true,
    year: '2026',
    overview:
      'Studio-owned media flagship capturing high-velocity cinema public talk, actor reviews, and pop culture interviews broadcast directly across digital channels.',
    deliverables: [
      'Original IP Creation',
      'Multi-Camera 4K Capture',
      'Rapid Turnaround Editing',
      'Audience Engagement',
    ],
    verifiedResult: '2.4M+ Channel Views',
  },
  {
    slug: 'ora-kitchen',
    client: 'Ora Kitchen',
    title: 'Artisanal Culinary Brand Identity',
    category: 'Branding',
    displayCategory: 'Brand Identity / Branding',
    featured: true,
    year: '2026',
    overview:
      'A tactile brand identity celebrating contemporary gastronomy, bespoke takeaway packaging, spatial typography, and launch culinary imagery.',
    deliverables: [
      'Brand Identity',
      'Packaging Suite',
      'Spatial Typography',
      'Creative Direction',
    ],
  },
  {
    slug: 'aura-home',
    client: 'Aura Home',
    title: 'Architectural Living & Spatial Branding',
    category: 'Branding',
    displayCategory: 'Brand Identity / Branding',
    featured: true,
    year: '2026',
    overview:
      'Visual identity and digital showroom for an architectural studio dedicated to clean geometric harmony, muted stone materiality, and understated elegance.',
    deliverables: [
      'Visual Identity',
      'Digital Showroom',
      'Print Collateral',
      'Architectural Photography',
    ],
  },
  {
    slug: 'krithi-makeover-artistry',
    client: 'Krithi Makeover Artistry',
    title: 'Luxury Bridal Cinema & Portfolio',
    category: 'Content',
    displayCategory: 'Brand & Social Content',
    featured: true,
    year: '2026',
    overview:
      'Editorial bridal films and bespoke visual portfolio capturing traditional ceremonial beauty with contemporary fashion elegance.',
    deliverables: [
      'Bridal Cinema',
      'Editorial Photography',
      'Social Content Strategy',
      'Visual Portfolio',
    ],
  },
  {
    slug: 'seyon-lab',
    client: 'Seyon Lab',
    title: 'Digital Presence & Scientific Brand System',
    category: 'Branding',
    displayCategory: 'Digital Presence / Branding',
    featured: false,
    year: '2026',
    overview:
      'A refined web presence and digital identity system for an innovative scientific research and analytical laboratory.',
    deliverables: [
      'Brand System',
      'UI/UX Design',
      'Technical Guidelines',
      'Digital Assets',
    ],
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};

// Aliases for backwards compatibility
export const portfolioProjects = projects;
export const getFeaturedProject = (): Project => projects[0];
export const WORK_CATEGORIES = WORK_FILTERS;
