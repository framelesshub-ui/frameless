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
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Cinematic cuts, color grading, and post-production that transforms raw footage into compelling visual stories.',
    icon: '🎬',
    gradient: 'from-[#00E5FF] to-[#0088FF]',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Strategy-driven content that resonates with your audience across every platform and format.',
    icon: '✨',
    gradient: 'from-[#7B61FF] to-[#00E5FF]',
  },
  {
    id: 'social-media',
    title: 'Social Media Branding',
    description: 'Cohesive visual identities and brand systems designed for the social-first generation.',
    icon: '📱',
    gradient: 'from-[#FF6B6B] to-[#7B61FF]',
  },
  {
    id: 'ad-creatives',
    title: 'Ad Creatives',
    description: 'High-converting ad visuals and video ads built for performance across Meta, Google, and beyond.',
    icon: '🎯',
    gradient: 'from-[#00E5FF] to-[#00FF88]',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Dynamic animations, explainer videos, and motion design that bring ideas to life.',
    icon: '🔮',
    gradient: 'from-[#FF6B6B] to-[#FFD93D]',
  },
] as const;

// ── Portfolio Data ────────────────────────────────
export const PORTFOLIO_CATEGORIES = ['All', 'Video Editing', 'Content', 'Branding', 'Motion Graphics', 'Ad Creatives'] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'NeoVault Brand Film',
    category: 'Video Editing',
    description: 'A cinematic brand film for a fintech startup launching their flagship product.',
    color: '#00E5FF',
    year: '2025',
  },
  {
    id: 2,
    title: 'Aura Skincare Launch',
    category: 'Content',
    description: 'Full-spectrum content strategy and production for D2C skincare brand.',
    color: '#7B61FF',
    year: '2025',
  },
  {
    id: 3,
    title: 'Flux Fitness Rebrand',
    category: 'Branding',
    description: 'Complete social media identity redesign for a premium fitness brand.',
    color: '#FF6B6B',
    year: '2024',
  },
  {
    id: 4,
    title: 'Cipher Product Explainer',
    category: 'Motion Graphics',
    description: 'Animated explainer video for a B2B SaaS cybersecurity platform.',
    color: '#00FF88',
    year: '2025',
  },
  {
    id: 5,
    title: 'Drift Coffee — Summer Campaign',
    category: 'Ad Creatives',
    description: 'Scroll-stopping ad creatives for Meta & YouTube that drove 4x ROAS.',
    color: '#FFD93D',
    year: '2024',
  },
  {
    id: 6,
    title: 'Vanta Music Visuals',
    category: 'Video Editing',
    description: 'Music video post-production with surreal visual effects and color grading.',
    color: '#FF6B6B',
    year: '2024',
  },
  {
    id: 7,
    title: 'Orbis Tech Reel Series',
    category: 'Content',
    description: 'A viral Instagram Reels series for a tech company — 12M+ cumulative views.',
    color: '#00E5FF',
    year: '2025',
  },
  {
    id: 8,
    title: 'Lumina AR Experience',
    category: 'Motion Graphics',
    description: 'Interactive motion graphics for an AR-powered retail experience.',
    color: '#7B61FF',
    year: '2025',
  },
] as const;

// ── Testimonials ─────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Arjun Mehta',
    role: 'CEO, NeoVault',
    text: 'Frameless didn\'t just edit our video — they elevated our entire brand perception. The quality is unmatched.',
    avatar: 'AM',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Head, Aura Skincare',
    text: 'Our engagement tripled after Frameless redesigned our content strategy. They understand the digital landscape like no one else.',
    avatar: 'PS',
  },
  {
    name: 'David Chen',
    role: 'Founder, Cipher Security',
    text: 'The explainer video they created communicates our complex product in 60 seconds. Absolute game-changer for our sales pipeline.',
    avatar: 'DC',
  },
] as const;

// ── Social Links ─────────────────────────────────
export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/framelesshub/' },
  { label: 'YouTube', href: 'https://youtube.com/@framelesshub' },
  { label: 'Twitter', href: 'https://x.com/framelesshub' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/framelesshub' },
] as const;
