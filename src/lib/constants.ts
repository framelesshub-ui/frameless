// ── Navigation Links ───────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// ── Services Data ─────────────────────────────────
export const SERVICES = [
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Content planning, page management, trend-based reels, and analytics that build strong online presence.',
    gradient: 'from-[#00E5FF] to-[#0088FF]',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'High-quality reels, short videos, product shoots, brand videos, and storytelling concepts.',
    gradient: 'from-[#7B61FF] to-[#00E5FF]',
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Cohesive brand identities, logo design, social designs, packaging concepts, and guidelines.',
    gradient: 'from-[#FF6B6B] to-[#7B61FF]',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description: 'High-converting Meta & Google ad campaigns focused on lead generation and optimization.',
    gradient: 'from-[#00E5FF] to-[#00FF88]',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Custom business websites, landing pages, responsive UI/UX designs, and SEO optimization.',
    gradient: 'from-[#FF6B6B] to-[#FFD93D]',
  },
  {
    id: 'influencer-promotions',
    title: 'Influencer & Brand Promotions',
    description: 'Strategy-driven creator collaborations, brand promotions, planning, and product campaigns.',
    gradient: 'from-[#7B61FF] to-[#FF6B6B]',
  },
] as const;

// ── Portfolio Categories ──────────────────────────
export const PORTFOLIO_CATEGORIES = ['All', 'Content', 'Branding', 'YouTube', 'Campaigns'] as const;

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
    name: 'Ora Kitchen',
    role: 'Client',
    text: 'Deliciously crafted visual content! They beautifully captured the essence and heritage of our restaurant in high-converting brand identity.',
    avatar: 'OK',
  },
  {
    name: 'Seyon Lab',
    role: 'Client',
    text: 'Outstanding tech-product visual storytelling. They simplified our complex technical capabilities into an engaging identity.',
    avatar: 'SL',
  },
] as const;

// ── Social Links ─────────────────────────────────
export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/framelesshub' },
] as const;
