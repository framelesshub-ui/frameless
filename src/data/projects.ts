export type ProjectCategory =
  | 'Commercial Film'
  | 'YouTube'
  | 'Branding'
  | 'Social Media'
  | 'Performance Marketing'
  | 'Content Production';

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  thumbnail: string;
  video?: string;
  featured?: boolean; // Central hero featured project
  gridSpan?: 'full' | 'large' | 'medium' | 'tall'; // Editorial grid sizing
  services: string[];
  overview: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: CaseStudyMetric[];
  metrics?: { label: string; value: string };
  gallery: string[];

  nextProjectSlug?: string;
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
  // Compatibility aliases
  posterSrc?: string;
  videoSrc?: string;
  shortDescription?: string;
}

export const WORK_CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Commercial Film',
  'YouTube',
  'Branding',
  'Social Media',
  'Performance Marketing',
  'Content Production',
];

/**
 * Centralized Portfolio Projects
 * Media paths (thumbnails and video files) can be updated here directly.
 */
export const portfolioProjects: Project[] = [
  {
    id: 'mahindra-parvai-campaign',
    slug: 'mahindra-parvai-campaign',
    title: 'Mahindra Parvai Campaign',
    client: 'Mahindra',
    category: 'Commercial Film',
    year: '2026',
    thumbnail: '/campaigns/automotive.jpg',
    video: '/videos/video-1.mov',
    featured: true,
    gridSpan: 'full',
    services: ['Commercial Direction', 'Cinematography', 'Sound Design & Foley', 'Color Grading'],
    overview:
      'A cinematic commercial film executed for Mahindra Parvai, combining automotive power with intimate human storytelling. Shot on location with anamorphic optics to capture the raw emotional texture of terrain, heritage, and modern mechanical endurance.',
    challenge:
      'Mahindra needed to bridge rugged regional utility with high-end luxury storytelling, speaking simultaneously to multigenerational buyers and modern automotive enthusiasts without sacrificing authentic cultural resonance.',
    strategy:
      'We anchored the narrative around the concept of "Parvai" (Vision) — pairing visceral high-speed tracking sequences with poetic pauses, organic dialogue, and custom-layered 35mm film grading.',
    execution:
      'Multi-unit cinematography over five days across rugged terrains. Meticulous foley design recorded directly from Mahindra powertrains and paired with a bespoke orchestral soundtrack.',
    results: [
      { label: 'Digital Reach', value: '4.8M+' },
      { label: 'Watch-Through Rate', value: '78%' },
      { label: 'Campaign Recall', value: '+240%' },
      { label: 'Lead Inquiries', value: '3.4x' },
    ],
    gallery: [
      '/campaigns/automotive.jpg',
      '/media/generated/studio-interior-editorial.jpg',
      '/media/generated/content-production-studio.jpg',
    ],
    nextProjectSlug: 'birlas-parvai-growth',
    clientQuote: {
      text: 'Frameless Hub delivered an emotional visual masterpiece that elevated our campaign far beyond conventional automotive advertisements.',
      author: 'Marketing Leadership',
      role: 'Mahindra Regional Campaigns',
    },
    posterSrc: '/campaigns/automotive.jpg',
    videoSrc: '/videos/video-1.mov',
    shortDescription: 'Cinematic commercial film combining automotive power with intimate human storytelling.',
  },
  {
    id: 'birlas-parvai-growth',
    slug: 'birlas-parvai-growth',
    title: 'Birlas Parvai — Visual Growth & Retention Engine',
    client: 'Birlas Parvai',
    category: 'YouTube',
    year: '2026',
    thumbnail: '/campaigns/automotive.jpg',
    video: '/videos/video-1.mov',
    featured: false,
    gridSpan: 'large',
    services: ['Channel Management', 'YouTube SEO', 'High-Retention Video Editing', 'Thumbnail Architecture'],
    overview:
      'Complete end-to-end channel development and production pipeline for Birlas Parvai, turning long-form investigative journalism into high-velocity digital broadcast content.',
    challenge:
      'Long-form journalistic documentaries often struggle with early drop-off and volatile YouTube recommendation curves.',
    strategy:
      'Designed a proprietary retention pacing matrix: 3-second hook structure, kinetic b-roll injection, documentary soundscape, and bespoke high-contrast typographic thumbnails.',
    execution:
      'Bi-weekly documentary episodes produced with custom motion graphics, timeline-driven research overlays, and algorithmic upload scheduling.',
    results: [
      { label: 'Total Views', value: '4.8M+' },
      { label: 'Subscribers Scaled', value: '120K+' },
      { label: 'Avg Retention Rate', value: '68%' },
    ],
    gallery: [
      '/campaigns/automotive.jpg',
      '/media/generated/social-creator-studio.jpg',
    ],
    nextProjectSlug: 'ora-kitchen-branding',
    posterSrc: '/campaigns/automotive.jpg',
    videoSrc: '/videos/video-1.mov',
    shortDescription: 'Documentary YouTube channel engine scaling regional journalism to millions of viewers.',
  },
  {
    id: 'ora-kitchen-branding',
    slug: 'ora-kitchen-branding',
    title: 'Ora Kitchen — Artisanal Culinary Identity & Launch',
    client: 'Ora Kitchen',
    category: 'Branding',
    year: '2026',
    thumbnail: '/services/branding-design.png',
    video: '/videos/video-2.mov',
    featured: false,
    gridSpan: 'medium',
    services: ['Brand Architecture', 'Packaging Suite', 'Spatial Identity', 'Launch Campaign'],
    overview:
      'A holistic brand identity for Ora Kitchen, celebrating contemporary gastronomy, raw earthy materials, and minimalist culinary sophistication.',
    challenge:
      'Standing out in a saturated restaurant landscape required an identity that felt calm, timeless, and tactile rather than flashy or trend-chasing.',
    strategy:
      'Crafted an understated typographic mark paired with textured handmade paper stock, muted stone palettes, and intimate culinary cinematography.',
    execution:
      'Delivered full visual identity guidelines, restaurant menu systems, bespoke packaging for takeaway and merchandise, and social launch film.',
    results: [
      { label: 'Launch Reservation', value: '100% Booked' },
      { label: 'Earned Social Mentions', value: '15K+' },
      { label: 'Brand Recognition', value: '92%' },
    ],
    gallery: [
      '/services/branding-design.png',
      '/media/generated/branding-identity-editorial.jpg',
    ],
    nextProjectSlug: 'aura-home-lifestyle',
    posterSrc: '/services/branding-design.png',
    videoSrc: '/videos/video-2.mov',
    shortDescription: 'Premium food and kitchen branding capturing timeless culinary craft.',
  },
  {
    id: 'aura-home-lifestyle',
    slug: 'aura-home-lifestyle',
    title: 'Aura Home — Architectural Living Brand Launch',
    client: 'Aura Home',
    category: 'Branding',
    year: '2026',
    thumbnail: '/media/generated/studio-interior-editorial.jpg',
    video: '/videos/video-3.mov',
    featured: false,
    gridSpan: 'medium',
    services: ['Brand Strategy', 'Visual Identity', 'Digital Showroom', 'Performance Launch'],
    overview:
      'Brand positioning and spatial identity for Aura Home, an architectural interior and bespoke living studio dedicated to clean geometric harmony.',
    challenge:
      'Communicating high-end bespoke craft while driving qualified commercial and private residential inquiries online.',
    strategy:
      'Framed the brand as a sanctuary of minimalist luxury, combining monochrome typographic restraint with tactile materiality and architectural imagery.',
    execution:
      'Created luxury print collateral, digital showroom experience, targeted architectural editorial films, and high-intent paid media funnels.',
    results: [
      { label: 'Average Project Value', value: '2.8x' },
      { label: 'Qualified Inquiries', value: '+190%' },
      { label: 'ROAS on Launch', value: '5.2x' },
    ],
    gallery: [
      '/media/generated/studio-interior-editorial.jpg',
      '/media/generated/web-digital-showcase.jpg',
    ],
    nextProjectSlug: 'krithi-makeover-artistry',
    posterSrc: '/media/generated/studio-interior-editorial.jpg',
    videoSrc: '/videos/video-3.mov',
    shortDescription: 'Premium interior and lifestyle brand architecture designed for understated luxury.',
  },
  {
    id: 'krithi-makeover-artistry',
    slug: 'krithi-makeover-artistry',
    title: 'Krithi Makeover Artistry — Luxury Bridal Cinema & Portfolio',
    client: 'Krithi Makeover Artistry',
    category: 'Commercial Film',
    year: '2026',
    thumbnail: '/media/generated/content-production-studio.jpg',
    video: '/videos/video-4.mov',
    featured: false,
    gridSpan: 'tall',
    services: ['Bridal Cinema', 'Editorial Photography', 'Portfolio Platform', 'Social Media Strategy'],
    overview:
      'Bespoke bridal cinema and visual portfolio for Krithi Makeover Artistry, showcasing opulent traditional ceremonies with contemporary editorial elegance.',
    challenge:
      'Bridal makeup imagery often feels repetitive; the brand required a distinct cinematic language celebrating light, emotion, and intricate craftsmanship.',
    strategy:
      'Produced slow-motion portrait films focusing on micro-textures, jewel tones, and genuine emotional bride-and-family interactions.',
    execution:
      'Shot across luxury destination wedding venues with high-frame-rate cameras, macro lenses, and synchronized classical fusion music.',
    results: [
      { label: 'Viral Reel Views', value: '3.6M+' },
      { label: 'Booking Rate', value: '100% Season Filled' },
      { label: 'Client Satisfaction', value: '99%' },
    ],
    gallery: [
      '/media/generated/content-production-studio.jpg',
      '/media/generated/branding-identity-editorial.jpg',
    ],
    nextProjectSlug: 'supratha-wellness-scale',
    posterSrc: '/media/generated/content-production-studio.jpg',
    videoSrc: '/videos/video-4.mov',
    shortDescription: 'Premium bridal and beauty branding captured through intimate cinematic portraiture.',
  },
  {
    id: 'supratha-wellness-scale',
    slug: 'supratha-wellness-scale',
    title: 'Supratha Wellness — Omnichannel Healthcare Scale',
    client: 'Supratha Wellness',
    category: 'Content Production',
    year: '2026',
    thumbnail: '/media/generated/web-digital-showcase.jpg',
    video: '/videos/video-3.mov',
    featured: false,
    gridSpan: 'medium',
    services: ['Content Production', 'Kinetic Explainer Animation', 'Omnichannel Strategy'],
    overview:
      'Transforming complex integrative healthcare protocols into accessible, visually stunning episodic educational content and patient narratives.',
    challenge:
      'Translating dense medical literature and wellness therapies into trustworthy, engaging video assets for mass digital distribution.',
    strategy:
      'Scripted doctor-led explainer modules, designed 3D cell & therapy animations, and built patient testimonial documentary films.',
    execution:
      'Produced a 40-video library, clinical whitepapers, responsive landing funnels, and syndicated YouTube distribution.',
    results: [
      { label: 'Channel Views', value: '3.2M+' },
      { label: 'Inquiry Growth', value: '+145%' },
      { label: 'Patient Retention', value: '94%' },
    ],
    gallery: [
      '/media/generated/web-digital-showcase.jpg',
      '/services/content-creation.png',
    ],
    nextProjectSlug: 'frameless-media-originals',
    posterSrc: '/media/generated/web-digital-showcase.jpg',
    videoSrc: '/videos/video-3.mov',
    shortDescription: 'Healthcare visual content and clinical explainers driving patient trust.',
  },
  {
    id: 'frameless-media-originals',
    slug: 'frameless-media-originals',
    title: 'Frameless Media — Original IP & Show Production',
    client: 'Frameless Media',
    category: 'YouTube',
    year: '2026',
    thumbnail: '/media/generated/social-creator-studio.jpg',
    video: '/videos/video-5.mov',
    featured: false,
    gridSpan: 'large',
    services: ['Original IP Creation', 'Studio Production', 'Distribution Architecture'],
    overview:
      'Internal studio laboratory producing experimental narrative formats, deep-dive culture reviews, and future-forward design commentary.',
    challenge:
      'Creating an independent media sandbox that tests emerging algorithmic trends without commercial client constraints.',
    strategy:
      'Rapid iterative production cycles, modular motion graphics templates, and multi-platform cutdown distribution.',
    execution:
      'Full studio sets, multi-camera 4K capture, real-time live-switched monitoring, and rapid same-day editorial turnaround.',
    results: [
      { label: 'Total Views', value: '2.4M+' },
      { label: 'Engaged Community', value: '60K+' },
      { label: 'Sponsor Inquiries', value: '45+' },
    ],
    gallery: [
      '/media/generated/social-creator-studio.jpg',
      '/media/generated/studio-interior-editorial.jpg',
    ],
    nextProjectSlug: 'nova-performance-growth',
    posterSrc: '/media/generated/social-creator-studio.jpg',
    videoSrc: '/videos/video-5.mov',
    shortDescription: 'Original creative studio media series exploring culture and design.',
  },
  {
    id: 'nova-performance-growth',
    slug: 'nova-performance-growth',
    title: 'Nova Horizon — High-ROAS Performance Ads',
    client: 'Nova Horizon',
    category: 'Performance Marketing',
    year: '2026',
    thumbnail: '/media/generated/performance-analytics-studio.jpg',
    video: '/videos/video-4.mov',
    featured: false,
    gridSpan: 'medium',
    services: ['Performance Creative', 'Meta & Google Ads', 'Conversion Optimization', 'Funnel CRO'],
    overview:
      'Direct-response creative engine paired with predictive budget allocation that scaled monthly ad spend 4x while improving blended ROAS.',
    challenge:
      'High creative fatigue in paid social feeds leading to escalating customer acquisition costs.',
    strategy:
      'Constructed a dynamic creative testing matrix producing 12 bespoke hook variants weekly across video, motion carousel, and static formats.',
    execution:
      'Automated creative reporting pipeline, rapid iterative scaling of winning angles, and landing page message matching.',
    results: [
      { label: 'Blended ROAS', value: '4.8x' },
      { label: 'CAC Reduction', value: '-38%' },
      { label: 'Revenue Scaled', value: '3x' },
    ],
    gallery: [
      '/media/generated/performance-analytics-studio.jpg',
      '/services/performance-marketing.png',
    ],
    nextProjectSlug: 'mahindra-parvai-campaign',
    posterSrc: '/media/generated/performance-analytics-studio.jpg',
    videoSrc: '/videos/video-4.mov',
    shortDescription: 'Conversion creative engine lowering CAC and maximizing ROAS.',
  }
];

export const getFeaturedProject = (): Project => {
  return portfolioProjects.find((p) => p.featured) || portfolioProjects[0];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return portfolioProjects.find((p) => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project => {
  const currentIndex = portfolioProjects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % portfolioProjects.length;
  return portfolioProjects[nextIndex];
};

// Aliases for compatibility
export const PROJECTS = portfolioProjects;
export const PORTFOLIO_ITEMS = portfolioProjects;
