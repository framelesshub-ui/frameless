export interface AssetRecord {
  id: string;
  name: string;
  type: 'image' | 'video' | 'audio' | 'model';
  path: string;
  section: string;
  purpose: string;
  source: 'genuine' | 'generated';
  dimensions?: string;
}

export const ASSETS: AssetRecord[] = [
  // ── Genuine Frameless Hub Media ──
  {
    id: 'birlas-parvai-video',
    name: 'Birla’s Parvai Commercial Film',
    type: 'video',
    path: '/videos/video-1.mov',
    section: 'work-featured',
    purpose: 'Hero commercial narrative video project for Birla’s Parvai',
    source: 'genuine',
  },
  {
    id: 'high-retention-reel-video',
    name: 'High-Retention Reel System',
    type: 'video',
    path: '/videos/video-2.mov',
    section: 'work-content',
    purpose: 'Vertical high-velocity viral content showcase',
    source: 'genuine',
  },
  {
    id: 'brand-motion-video',
    name: 'Brand Motion Reel',
    type: 'video',
    path: '/videos/video-3.mov',
    section: 'work-motion',
    purpose: 'Kinetic typography and brand motion sample',
    source: 'genuine',
  },
  {
    id: 'sweepers-conversion-video',
    name: 'Sweepers Ad Campaign',
    type: 'video',
    path: '/videos/video-4.mov',
    section: 'work-performance',
    purpose: 'Performance marketing ad creative',
    source: 'genuine',
  },
  {
    id: 'mass-digital-campaign-video',
    name: 'Dindigul Srinivasan Digital Campaign',
    type: 'video',
    path: '/videos/video-5.mov',
    section: 'work-ai-video',
    purpose: 'High-throughput public campaign video',
    source: 'genuine',
  },
  {
    id: 'automotive-campaign-poster',
    name: 'Automotive Commercial Poster',
    type: 'image',
    path: '/campaigns/automotive.jpg',
    section: 'home-hero',
    purpose: 'Cinematic automotive commercial poster and backdrop',
    source: 'genuine',
    dimensions: '1920x1080',
  },
  {
    id: 'frameless-brand-logo',
    name: 'Frameless Hub Official Logo Mark',
    type: 'image',
    path: '/logo.png',
    section: 'global-nav',
    purpose: 'Primary brand identity emblem',
    source: 'genuine',
  },
  {
    id: 'founder-portrait',
    name: 'Studio Founder',
    type: 'image',
    path: '/media/about/founder.jpg',
    section: 'about-leadership',
    purpose: 'Genuine studio founder portrait from repository',
    source: 'genuine',
  },

  // ── High-Fidelity Generated Commercial Assets ──
  {
    id: 'content-production-studio',
    name: 'Cinema Production Studio',
    type: 'image',
    path: '/media/generated/content-production-studio.jpg',
    section: 'services-content',
    purpose: 'Behind-the-scenes cinema camera and director monitor inside dark studio',
    source: 'generated',
    dimensions: '1920x1080',
  },
  {
    id: 'branding-identity-editorial',
    name: 'Luxury Brand Identity Suite',
    type: 'image',
    path: '/media/generated/branding-identity-editorial.jpg',
    section: 'services-branding',
    purpose: 'Embossed business cards, packaging box and warm ivory typography sheets',
    source: 'generated',
    dimensions: '1920x1080',
  },
  {
    id: 'social-creator-studio',
    name: 'Social Creator Studio Rig',
    type: 'image',
    path: '/media/generated/social-creator-studio.jpg',
    section: 'services-social',
    purpose: 'Creator filming branded vertical content with softbox and studio monitor',
    source: 'generated',
    dimensions: '1920x1080',
  },
  {
    id: 'web-digital-showcase',
    name: 'Responsive Digital Studio Showcase',
    type: 'image',
    path: '/media/generated/web-digital-showcase.jpg',
    section: 'services-web',
    purpose: 'High-end responsive website displayed across studio monitors and mobile',
    source: 'generated',
    dimensions: '1920x1080',
  },
  {
    id: 'performance-analytics-studio',
    name: 'Performance Analytics Environment',
    type: 'image',
    path: '/media/generated/performance-analytics-studio.jpg',
    section: 'services-performance',
    purpose: 'Marketing workstation displaying restrained line graphs and conversion analytics',
    source: 'generated',
    dimensions: '1920x1080',
  },
  {
    id: 'studio-interior-editorial',
    name: 'Frameless Hub Studio Interior',
    type: 'image',
    path: '/media/generated/studio-interior-editorial.jpg',
    section: 'about-studio',
    purpose: 'Dark architectural creative agency studio space with cinematic lighting',
    source: 'generated',
    dimensions: '1920x1080',
  },
];
