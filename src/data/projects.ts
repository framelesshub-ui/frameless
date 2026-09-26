export interface Project {
  id?: string;
  slug: string;
  client: string;
  title: string;
  category: 'YouTube' | 'Branding' | 'Content' | 'Campaigns' | 'Media';
  displayCategory: string; // e.g. "YouTube / Production", "Brand Identity"
  thumbnail: string;
  video?: string; // Direct MP4 or video source if local
  videoEmbedUrl?: string; // YouTube embed URL for streaming
  channelUrl?: string; // External YouTube channel URL
  featured: boolean;
  year: string;
  overview: string;
  deliverables: string[];
  gallery: string[];
  verifiedResult?: string; // Only shown when verified
  gridSpan?: 'full' | 'large' | 'tall' | 'medium' | string;
  services?: string[];
  tagline?: string;
  stats?: { label: string; value: string }[];
}

export const WORK_FILTERS = ['All', 'Content', 'Branding', 'YouTube', 'Campaigns'] as const;
export type WorkFilter = (typeof WORK_FILTERS)[number];
export type ProjectCategory = WorkFilter;

/**
 * Centralized, single-source-of-truth project database.
 * Replacing or adding media, titles, and deliverables can be done directly here.
 */
export const projects: Project[] = [
  {
    slug: 'birlas-parvai',
    client: 'Birlas Parvai',
    title: 'Automotive Content & Drive Documentaries',
    category: 'YouTube',
    displayCategory: 'YouTube / Production',
    thumbnail: 'https://i.ytimg.com/vi/Tt-_PByi6KM/hq720.jpg',
    videoEmbedUrl: 'https://www.youtube.com/embed/Tt-_PByi6KM?autoplay=1&rel=0',
    channelUrl: 'https://www.youtube.com/@birlasparvai',
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
    gallery: [
      'https://i.ytimg.com/vi/Tt-_PByi6KM/hq720.jpg',
      'https://i.ytimg.com/vi/7BBlQq772Ks/hq720.jpg',
    ],
    verifiedResult: '4.8M+ Channel Views',
  },
  {
    slug: 'supratha-wellness',
    client: 'Supratha Wellness',
    title: 'Clinical Healthcare & Wellness Series',
    category: 'YouTube',
    displayCategory: 'YouTube / Content',
    thumbnail: 'https://i.ytimg.com/vi/b_g430s1Jr4/hq720.jpg',
    videoEmbedUrl: 'https://www.youtube.com/embed/b_g430s1Jr4?autoplay=1&rel=0',
    channelUrl: 'https://www.youtube.com/@SuprathaWellness',
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
    gallery: [
      'https://i.ytimg.com/vi/b_g430s1Jr4/hq720.jpg',
      'https://i.ytimg.com/vi/JKvAeSwKFWI/hq720.jpg',
    ],
    verifiedResult: '3.2M+ Channel Views',
  },
  {
    slug: 'frameless-media',
    client: 'Frameless Media',
    title: 'Cinema Interviews & Public Talk Formats',
    category: 'Media',
    displayCategory: 'Original Digital Content / Media',
    thumbnail: 'https://i.ytimg.com/vi/iZa8A_V4z7Y/hq720.jpg',
    videoEmbedUrl: 'https://www.youtube.com/embed/iZa8A_V4z7Y?autoplay=1&rel=0',
    channelUrl: 'https://www.youtube.com/@Framelessmediatamil',
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
    gallery: [
      'https://i.ytimg.com/vi/iZa8A_V4z7Y/hq720.jpg',
      'https://i.ytimg.com/vi/H8XHOkwLju0/hq720.jpg',
    ],
    verifiedResult: '2.4M+ Channel Views',
  },
  {
    slug: 'ora-kitchen',
    client: 'Ora Kitchen',
    title: 'Artisanal Culinary Brand Identity',
    category: 'Branding',
    displayCategory: 'Brand Identity / Branding',
    thumbnail: '/services/branding-design.png',
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
    gallery: [
      '/services/branding-design.png',
      '/media/generated/branding-identity-editorial.jpg',
    ],
  },
  {
    slug: 'aura-home',
    client: 'Aura Home',
    title: 'Architectural Living & Spatial Branding',
    category: 'Branding',
    displayCategory: 'Brand Identity / Branding',
    thumbnail: '/media/generated/studio-interior-editorial.jpg',
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
    gallery: [
      '/media/generated/studio-interior-editorial.jpg',
      '/media/generated/web-digital-showcase.jpg',
    ],
  },
  {
    slug: 'krithi-makeover-artistry',
    client: 'Krithi Makeover Artistry',
    title: 'Luxury Bridal Cinema & Portfolio',
    category: 'Content',
    displayCategory: 'Brand & Social Content',
    thumbnail: '/media/generated/content-production-studio.jpg',
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
    gallery: [
      '/media/generated/content-production-studio.jpg',
      '/media/generated/branding-identity-editorial.jpg',
    ],
  },
  {
    slug: 'seyon-lab',
    client: 'Seyon Lab',
    title: 'Digital Presence & Scientific Brand System',
    category: 'Branding',
    displayCategory: 'Digital Presence / Branding',
    thumbnail: '/media/generated/web-digital-showcase.jpg',
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
    gallery: [
      '/media/generated/web-digital-showcase.jpg',
      '/media/generated/performance-analytics-studio.jpg',
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
