// ── Navigation Links ───────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// ── Services Data ─────────────────────────────────
export const SERVICES = [
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Content planning, page management, trend-based reels, and analytics that build strong online presence.',
    icon: '📱',
    gradient: 'from-[#00E5FF] to-[#0088FF]',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'High-quality reels, short videos, product shoots, brand videos, and storytelling concepts.',
    icon: '✨',
    gradient: 'from-[#7B61FF] to-[#00E5FF]',
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Cohesive brand identities, logo design, social designs, packaging concepts, and guidelines.',
    icon: '🎯',
    gradient: 'from-[#FF6B6B] to-[#7B61FF]',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description: 'High-converting Meta & Google ad campaigns focused on lead generation and optimization.',
    icon: '📈',
    gradient: 'from-[#00E5FF] to-[#00FF88]',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Custom business websites, landing pages, responsive UI/UX designs, and SEO optimization.',
    icon: '💻',
    gradient: 'from-[#FF6B6B] to-[#FFD93D]',
  },
  {
    id: 'influencer-promotions',
    title: 'Influencer & Brand Promotions',
    description: 'Strategy-driven creator collaborations, brand promotions, planning, and product campaigns.',
    icon: '⚡',
    gradient: 'from-[#7B61FF] to-[#FF6B6B]',
  },
] as const;

// ── Portfolio Data ────────────────────────────────
export const PORTFOLIO_CATEGORIES = ['All', 'Video Editing', 'Content', 'Branding', 'Motion Graphics', 'Ad Creatives'] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Birlas Parvai',
    category: 'Video Editing',
    description: 'Cinematic narrative video project for Birlas Parvai.',
    color: '#00E5FF',
    year: '2025',
    videoUrl: '/videos/video-1.mov',
  },
  {
    id: 2,
    title: 'Birlas Parvai',
    category: 'Content',
    description: 'Creative digital content and production for Birlas Parvai.',
    color: '#7B61FF',
    year: '2025',
    videoUrl: '/videos/video-2.mov',
  },
  {
    id: 3,
    title: 'Poetry and Grammer',
    category: 'Branding',
    description: 'Visual identity and brand story for Poetry and Grammer.',
    color: '#FF6B6B',
    year: '2024',
    videoUrl: '/videos/video-3.mov',
  },
  {
    id: 4,
    title: 'Dindigul Srinivasan ex MLA',
    category: 'Motion Graphics',
    description: 'Animated presentation and campaign video for Dindigul Srinivasan ex MLA.',
    color: '#00FF88',
    year: '2025',
    videoUrl: '/videos/video-4.mov',
  },
  {
    id: 5,
    title: 'Drift Coffee — Summer Campaign',
    category: 'Ad Creatives',
    description: 'Scroll-stopping ad creatives for Meta & YouTube that drove 4x ROAS.',
    color: '#FFD93D',
    year: '2024',
    videoUrl: '/videos/video-5.mov',
  },
  {
    id: 6,
    title: 'Vanta Music Visuals',
    category: 'Video Editing',
    description: 'Music video post-production with surreal visual effects and color grading.',
    color: '#FF6B6B',
    year: '2024',
    videoUrl: '/videos/video-1.mov',
  },
  {
    id: 7,
    title: 'Orbis Tech Reel Series',
    category: 'Content',
    description: 'A viral Instagram Reels series for a tech company — 12M+ cumulative views.',
    color: '#00E5FF',
    year: '2025',
    videoUrl: '/videos/video-2.mov',
  },
  {
    id: 8,
    title: 'Lumina AR Experience',
    category: 'Motion Graphics',
    description: 'Interactive motion graphics for an AR-powered retail experience.',
    color: '#7B61FF',
    year: '2025',
    videoUrl: '/videos/video-4.mov',
  },
] as const;

// ── Testimonials ─────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Birla's Parvai",
    role: 'Client',
    text: 'The video editing and visual presentation exceeded our expectations. They brought our brand film to life with cinematic excellence.',
    avatar: 'BP',
  },
  {
    name: 'Supratha Wellness',
    role: 'Client',
    text: 'Their creative execution and video production are outstanding. The content completely transformed our brand messaging and user engagement.',
    avatar: 'SW',
  },
  {
    name: 'Arcot Nawabs Briyani',
    role: 'Client',
    text: 'Deliciously crafted visual content! They beautifully captured the essence and heritage of our restaurant in high-converting video ads.',
    avatar: 'AN',
  },
  {
    name: 'Seyon Labs',
    role: 'Client',
    text: 'Outstanding tech-product visual storytelling. They simplified our complex technical capabilities into a highly engaging promo video.',
    avatar: 'SL',
  },
  {
    name: 'Dindigul Srinivasan Ex MLA',
    role: 'Client',
    text: 'Exceptional digital campaign assets and editing. Their professional graphics and pacing were instrumental for our public reach.',
    avatar: 'DS',
  },
] as const;

// ── Social Links ─────────────────────────────────
export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/framelesshub/' },
  { label: 'YouTube', href: 'https://youtube.com/@framelesshub' },
  { label: 'Twitter', href: 'https://x.com/framelesshub' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/framelesshub' },
] as const;
