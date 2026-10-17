export interface Project {
  id?: string;
  slug: string;
  client: string;
  title: string;
  category: 'Branding' | 'Content' | 'YouTube' | 'Campaigns';
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
  services?: string[];
  tagline?: string;
  stats?: { label: string; value: string }[];
  gridSpan?: string;
  challenge?: string;
  strategy?: string;
  specs?: {
    resolution?: string;
    fps?: string;
    codec?: string;
    lut?: string;
    audioTarget?: string;
  };
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
    featured: true,
    year: '2026',
    overview:
      'Tamil Nadu’s leading automotive content platform covering cars, bikes, reviews and automotive stories.',
    deliverables: [
      'YouTube Editing',
      'Shorts & Reels',
      'Social Media Management',
    ],
    verifiedResult: '5.2M+ Views',
    challenge:
      'Transition an established regional automotive reviewer into a cinematic long-form journalistic channel with 50%+ retention on 20+ minute deep-dives.',
    strategy:
      'Re-engineered opening hooks, introduced dynamic multi-camera roller cuts, calibrated custom teal-and-tungsten color grading, and paced episodic beats with sound-design impacts.',
    specs: {
      resolution: '4K DCI (3840 × 2160)',
      fps: '24.00 FPS / 60 FPS B-Roll',
      codec: 'Apple ProRes 4444 XQ',
      lut: 'FH_Cyan_Tungsten_Film_v4',
      audioTarget: '-14.0 LUFS Broadcast Standard',
    },
  },
  {
    slug: 'ora-kitchen',
    client: 'Ora Kitchen',
    title: 'Brand Identity',
    category: 'Branding',
    displayCategory: 'Branding',
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
    verifiedResult: 'Full Brand Suite · 100% Launch Success',
    challenge:
      'Differentiate an artisanal culinary group from generic commercial caterers with an evocative visual identity rooted in culinary tradition and modern elegance.',
    strategy:
      'Created tactile packaging guidelines, warm timber photographic direction, embossed monogram iconography, and a disciplined social aesthetic highlighting ingredient craft.',
    specs: {
      resolution: 'Vector Master + 4K Stills',
      fps: 'Still Photography & 24 FPS Motion',
      codec: 'Cinema DCI & Print Spec CMYK',
      lut: 'FH_Warm_Timber_Amber_v2',
      audioTarget: 'Studio Ambient Master',
    },
  },
  {
    slug: 'aura-home',
    client: 'Aura Home',
    title: 'Brand Identity',
    category: 'Branding',
    displayCategory: 'Branding',
    featured: true,
    year: '2026',
    overview:
      'A home-focused brand offering essentials and products designed to elevate modern living spaces.',
    deliverables: [
      'Social Media Marketing',
      'Content Creation',
      'Social Media Management',
    ],
    verifiedResult: '3.4x Social Engagement Lift',
    challenge:
      'Build brand equity in a competitive interior decor space where consumers demand architectural purity and thoughtful minimalist home living aesthetics.',
    strategy:
      'Engineered an architectural brand language emphasizing natural daylight, negative space, and Scandinavian-meets-contemporary interior vignettes.',
    specs: {
      resolution: '4K DCI (3840 × 2160)',
      fps: '24.00 FPS Cinematic',
      codec: 'ProRes 422 HQ',
      lut: 'FH_Architectural_Clean_v1',
      audioTarget: '-14.0 LUFS Spatial Stereo',
    },
  },
  {
    slug: 'supratha-wellness',
    client: 'Supratha Wellness',
    title: 'Digital Content',
    category: 'YouTube',
    displayCategory: 'YouTube / Content',
    featured: true,
    year: '2026',
    overview:
      'A health-focused content platform covering Ayurveda, Allopathy, Homeopathy, Acupuncture and wellness.',
    deliverables: [
      'YouTube Video Editing',
    ],
    verifiedResult: '3.2M+ Views',
    challenge:
      'Translate complex medical consultations, integrative wellness protocols, and clinical interviews into engaging, easily understood visual lessons.',
    strategy:
      'Introduced clean diagnostic lower-thirds, animated medical diagrams, balanced acoustic voice cleanup, and high-contrast thumbnail design.',
    specs: {
      resolution: '4K UHD (3840 × 2160)',
      fps: '29.97 FPS Clean Broadcast',
      codec: 'H.265 Master 10-Bit',
      lut: 'FH_Medical_Neutral_v3',
      audioTarget: '-14.0 LUFS Dialogue Optimized',
    },
  },
  {
    slug: 'krithi-makeover-artistry',
    client: 'Krithi Makeover Artistry',
    title: 'Brand & Social Content',
    category: 'Branding',
    displayCategory: 'Branding / Content',
    featured: true,
    year: '2026',
    overview:
      'A premium makeup artist brand focused on luxury beauty, professional portfolios and personal branding.',
    deliverables: [
      'Personal Branding',
      'Content Creation',
      'Social Media Management',
    ],
    verifiedResult: '280% Bridal Booking Inquiries',
    challenge:
      'Elevate a personal bridal artistry profile into an authoritative luxury brand commanding premium booking rates across South India.',
    strategy:
      'Cinematic close-up macro cinematography of beauty transformations, disciplined gold/rose color balance, and client testimonial story integration.',
    specs: {
      resolution: '4K DCI (3840 × 2160)',
      fps: '60 FPS Converted to 24 FPS Slow Motion',
      codec: 'ProRes 4444 Cinema',
      lut: 'FH_Skin_Elegance_Gold_v2',
      audioTarget: '-14.0 LUFS Cinematic Score',
    },
  },
  {
    slug: 'seyon-lab',
    client: 'Seyon Lab',
    title: 'Digital Presence',
    category: 'Branding',
    displayCategory: 'Branding',
    featured: true,
    year: '2026',
    overview:
      'A CRM-focused technology company building solutions for modern business operations and customer management.',
    deliverables: [
      'Social Media Support',
      'Creative Consultation',
    ],
    verifiedResult: 'Enterprise SaaS Rebrand Delivered',
    challenge:
      'Clarify complex CRM multi-channel features into accessible value propositions for modern enterprise founders and growth leaders.',
    strategy:
      'Developed high-fidelity UI motion graphics, product workflow visualizations, and high-velocity social explainers showcasing business efficiency.',
    specs: {
      resolution: '4K DCI (3840 × 2160)',
      fps: '60.00 FPS UI Motion',
      codec: 'Apple ProRes 4444 Alpha',
      lut: 'FH_SaaS_Electric_Blue_v1',
      audioTarget: '-14.0 LUFS Tech Motion Master',
    },
  },
  {
    slug: 'frameless-media',
    client: 'Frameless Media',
    title: 'Original Digital Content',
    category: 'Content',
    displayCategory: 'Media / Production',
    featured: true,
    year: '2026',
    overview:
      'A cinema-focused content platform featuring interviews, public interactions and entertainment content.',
    deliverables: [
      'Content Production',
      'Video Editing',
      'Social Media Management',
    ],
    verifiedResult: '2.4M+ Views',
    challenge:
      'Produce high-turnaround cinema interview formats that compete with large television networks while preserving indie authentic character.',
    strategy:
      'Two-camera documentary setup, rapid 24-hour turnaround editing pipeline, micro-hook social shorts, and branded sound-bite cards.',
    specs: {
      resolution: '4K DCI (3840 × 2160)',
      fps: '24.00 FPS Cinema Standard',
      codec: 'Apple ProRes 422 HQ',
      lut: 'FH_Cinema_Noir_Cyan_v3',
      audioTarget: '-14.0 LUFS Dialogue Broadcast',
    },
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
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
