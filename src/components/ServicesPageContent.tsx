'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedButton from '@/components/AnimatedButton';

// ── Service Definition ─────────────────────────────────────────────────────────
interface ServiceItem {
  number: string;
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  overview: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Content planning, page management, trend-based reels, and analytics that build strong online presence.',
    image: '/services/social-media-marketing.png',
    badge: 'Organic Growth',
    features: ['Content Planning', 'Page Management', 'Trend-Based Reels', 'Audience Analytics'],
    deliverables: ['Custom 30-Day Content Calendar', 'Daily Publishing & Community Moderation', 'Short-Form Reel Scripting & Assembly', 'Monthly Growth & Sentiment Reports'],
    timeline: 'Ongoing / Monthly Retainer',
    overview: 'We turn passive scrollers into passionate brand advocates. Through algorithmic analysis, cultural trend interception, and editorial rhythm, we transform your social channels into dynamic growth engines that compound authority daily.',
  },
  {
    number: '02',
    id: 'content-creation',
    title: 'Content Creation',
    description: 'High-quality reels, short videos, product shoots, brand videos, and storytelling concepts.',
    image: '/services/content-creation.png',
    badge: '4K Cinema',
    features: ['High-End Reels & Shorts', 'Commercial Product Shoots', 'Brand Narrative Films', 'Sound & Motion Design'],
    deliverables: ['Storyboards & Script Concepting', 'On-Location 4K Cinema Production', 'High-Retention Narrative Editing', 'Custom Color Grading & Sound Mixing'],
    timeline: '1–3 Weeks per Project',
    overview: 'Attention is the currency of the modern web. We engineer visual assets using cinema-grade cameras, dynamic motion, and punchy storytelling that hold viewers from the first second to the final frame.',
  },
  {
    number: '03',
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Cohesive brand identities, logo design, social designs, packaging concepts, and brand guidelines.',
    image: '/services/branding-design.png',
    badge: 'Identity Systems',
    features: ['Logo Architecture', 'Packaging Concepts', 'Social Media Design Kits', 'Comprehensive Brand Guidelines'],
    deliverables: ['Primary & Secondary Logo Marks', 'Typography & Color Systems', 'Brand Philosophy & Tone Guidelines', 'Social Media Asset Templates'],
    timeline: '2–4 Weeks',
    overview: 'Your visual identity is the emotional anchor of your business. We build cohesive, unforgettable brand worlds that convey prestige, clarity, and uncompromising confidence across every physical and digital touchpoint.',
  },
  {
    number: '04',
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description: 'High-converting Meta & Google ad campaigns focused on lead generation and optimization.',
    image: '/services/performance-marketing.png',
    badge: 'ROAS Driven',
    features: ['Meta & Instagram Ad Systems', 'Google Search & Display Ads', 'Funnel & Retargeting Architecture', 'ROAS & Conversion Optimization'],
    deliverables: ['High-Converting Ad Creatives & Variations', 'Precision Audience Segmentation', 'Tracking Pixels & Server-Side CAPI Setup', 'Real-Time Performance Dashboards'],
    timeline: 'Setup in 7 Days + Continuous Scaling',
    overview: 'We eliminate advertising guesswork with performance architectures engineered to maximize your return on ad spend. By blending thumb-stopping creative angles with algorithmic media buying, we drive predictable pipeline growth.',
  },
  {
    number: '05',
    id: 'website-development',
    title: 'Website Development',
    description: 'Custom business websites, landing pages, responsive UI/UX designs, and SEO optimization.',
    image: '/services/website-development.png',
    badge: 'Next.js & React',
    features: ['Custom Next.js & React Code', 'High-Converting Landing Pages', 'Responsive Interactive UI/UX', 'Core Web Vitals & SEO'],
    deliverables: ['Custom UI/UX Prototypes', 'Production Web Codebase & CMS', 'Performance & Speed Optimization (<1s Load)', 'Complete Search Engine Indexing'],
    timeline: '2–5 Weeks',
    overview: 'Your website is your 24/7 digital flagship. We design and develop bespoke digital experiences built on modern technologies that load instantly, captivate users, and turn curious visitors into high-ticket clients.',
  },
  {
    number: '06',
    id: 'influencer-promotions',
    title: 'Influencer & Brand Promotions',
    description: 'Strategy-driven creator collaborations, brand promotions, planning, and product campaigns.',
    image: '/services/influencer-promotions.png',
    badge: 'Creator Match',
    features: ['Vetted Creator Matchmaking', 'Campaign Briefs & Direction', 'Product Seeding & Launch Coordination', 'Audience Impact Audits'],
    deliverables: ['Curated Creator Shortlists', 'Creative Angles & Compliance Briefs', 'Asset Rights & Deliverable Verification', 'Reach & Conversion Attribution'],
    timeline: '2–3 Weeks per Campaign',
    overview: 'Authentic creator endorsements accelerate market trust faster than traditional ads. We identify, negotiate with, and direct influential creators whose voice aligns seamlessly with your brand positioning.',
  },
];

// ── Line Icon Components ───────────────────────────────────────────────────────
function ServiceIcon({ id }: { id: string }) {
  const iconProps = {
    className: 'w-6 h-6 stroke-current',
    fill: 'none',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (id) {
    case 'social-media-marketing':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'content-creation':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="m22 8-6 4 6 4V8Z" />
          <rect width="14" height="12" x="2" y="6" rx="2" />
          <circle cx="8" cy="12" r="2" />
        </svg>
      );
    case 'branding-design':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'performance-marketing':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <circle cx="19" cy="9" r="1.5" />
        </svg>
      );
    case 'website-development':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m10 10-2 2 2 2" />
          <path d="m14 10 2 2-2 2" />
          <path d="M2 8h20" />
        </svg>
      );
    case 'influencer-promotions':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
  }
}

// ── Main Page Content ──────────────────────────────────────────────────────────
export default function ServicesPageContent() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse parallax for Hero Floating Panels
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 100, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 100, mass: 0.5 });

  const panelX = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const panelY = useTransform(smoothMouseY, [-1, 1], [-8, 8]);
  const panelRotateX = useTransform(smoothMouseY, [-1, 1], [2.5, -2.5]);
  const panelRotateY = useTransform(smoothMouseX, [-1, 1], [-2.5, 2.5]);

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleHeroMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  return (
    <div className="bg-[#040506] text-[#F5F7FA] min-h-screen selection:bg-[#00D8F5]/20 selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────────────────
          1. HERO SECTION (Split-Layout Editorial)
          ───────────────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden border-b border-white/[0.05]"
      >
        {/* Soft atmospheric gradient glow behind Hero */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D8F5]/[0.035] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#4B63FF]/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Editorial Headline & Value Prop */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8 backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D8F5] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#00D8F5] tracking-[0.25em] uppercase">
                  WHAT WE DO
                </span>
              </motion.div>

              {/* Large Headline with text mask reveal */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black leading-[1.02] tracking-[-0.03em] mb-8 text-white">
                <div className="overflow-hidden py-1">
                  <motion.div
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Services built for
                  </motion.div>
                </div>
                <div className="overflow-hidden py-1">
                  <motion.div
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    the{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] via-[#2F80ED] to-[#4B63FF]">
                      digital age
                    </span>
                  </motion.div>
                </div>
              </h1>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg lg:text-[19px] text-[#94979F] max-w-2xl leading-relaxed mb-10 font-normal"
              >
                We combine strategy, creativity and technology to help brands grow, connect, and make a lasting impact in the digital world.
              </motion.p>

              {/* Quick stats / trust chips */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t border-white/[0.06]"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">6 Core Pillars</div>
                  <div className="text-xs text-[#92969F] uppercase tracking-wider mt-0.5">End-to-End Delivery</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#00D8F5]">4K Cinema</div>
                  <div className="text-xs text-[#92969F] uppercase tracking-wider mt-0.5">In-House Studio</div>
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <div className="hidden sm:block">
                  <div className="text-xl sm:text-2xl font-black text-white">100% Custom</div>
                  <div className="text-xs text-[#92969F] uppercase tracking-wider mt-0.5">Zero Stock Templates</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Floating 3D Service UI Panels */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div
                style={{
                  x: shouldReduceMotion ? 0 : panelX,
                  y: shouldReduceMotion ? 0 : panelY,
                  rotateX: shouldReduceMotion ? 0 : panelRotateX,
                  rotateY: shouldReduceMotion ? 0 : panelRotateY,
                  transformPerspective: 1200,
                }}
                className="relative w-full max-w-[440px] h-[460px] sm:h-[500px]"
              >
                {/* Panel 1: Brand Strategy (Top Left) */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: shouldReduceMotion ? 0 : [-4, 4, -4],
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.4 },
                    scale: { duration: 0.8, delay: 0.4 },
                    y: { duration: 7.2, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="absolute top-4 left-0 w-[240px] sm:w-[260px] aspect-[4/3] rounded-2xl overflow-hidden bg-[#080A0D] border border-white/10 shadow-2xl shadow-black/80 z-20 group hover:border-[#00D8F5]/40 transition-colors"
                >
                  <Image
                    src="/services/branding-design.png"
                    alt="Brand Strategy Panel"
                    fill
                    className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#00D8F5] uppercase block">
                      Pillar 01
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      Brand Strategy
                    </span>
                  </div>
                </motion.div>

                {/* Panel 2: Social Media (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: shouldReduceMotion ? 0 : [5, -4, 5],
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.55 },
                    scale: { duration: 0.8, delay: 0.55 },
                    y: { duration: 8.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
                  }}
                  className="absolute top-12 -right-2 sm:-right-4 w-[210px] sm:w-[230px] aspect-square rounded-2xl overflow-hidden bg-[#080A0D] border border-white/10 shadow-2xl shadow-black/80 z-10 group hover:border-[#4B63FF]/40 transition-colors"
                >
                  <Image
                    src="/services/social-media-marketing.png"
                    alt="Social Media Panel"
                    fill
                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    sizes="230px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#4B63FF] uppercase block">
                      Pillar 02
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      Social Media
                    </span>
                  </div>
                </motion.div>

                {/* Panel 3: Performance Marketing (Bottom Left) */}
                <motion.div
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: shouldReduceMotion ? 0 : [-3, 5, -3],
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.7 },
                    scale: { duration: 0.8, delay: 0.7 },
                    y: { duration: 7.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
                  }}
                  className="absolute bottom-8 left-2 sm:left-4 w-[220px] sm:w-[240px] aspect-[4/3] rounded-2xl overflow-hidden bg-[#080A0D] border border-white/10 shadow-2xl shadow-black/80 z-30 group hover:border-[#00D8F5]/40 transition-colors"
                >
                  <Image
                    src="/services/performance-marketing.png"
                    alt="Performance Marketing Panel"
                    fill
                    className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                    sizes="240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#00D8F5] uppercase block">
                      Pillar 03
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      Performance Marketing
                    </span>
                  </div>
                </motion.div>

                {/* Panel 4: Content Creation (Bottom Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: shouldReduceMotion ? 0 : [4, -5, 4],
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.85 },
                    scale: { duration: 0.8, delay: 0.85 },
                    y: { duration: 9.0, repeat: Infinity, ease: 'easeInOut', delay: 1.8 },
                  }}
                  className="absolute bottom-2 -right-4 sm:-right-8 w-[230px] sm:w-[250px] aspect-[4/3] rounded-2xl overflow-hidden bg-[#080A0D] border border-white/10 shadow-2xl shadow-black/80 z-20 group hover:border-[#4B63FF]/40 transition-colors"
                >
                  <Image
                    src="/services/content-creation.png"
                    alt="Content Creation Panel"
                    fill
                    className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                    sizes="250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#4B63FF] uppercase block">
                      Pillar 04
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      Content Creation
                    </span>
                  </div>
                </motion.div>

                {/* Subtle backlight glow */}
                <div className="absolute inset-0 bg-[#00D8F5]/[0.04] rounded-full blur-[90px] pointer-events-none" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          2. SERVICES GRID (3 Cols Desktop, 2 Cols Tablet, 1 Col Mobile)
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#00D8F5] uppercase mb-3">
                DISCIPLINE & SPECIALIZATIONS
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.02em] text-white">
                Comprehensive creative{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] to-[#4B63FF]">
                  capabilities
                </span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#92969F] max-w-md font-normal leading-relaxed">
              Every discipline is handled by dedicated specialists in-house to ensure singular creative coherence and measurable performance.
            </p>
          </div>

          {/* Six Service Cards Grid (Desktop 3x2, Tablet 2, Mobile 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer outline-none rounded-[24px] bg-[#080A0D] border border-white/[0.08] hover:border-[#00D8F5]/40 transition-all duration-500 shadow-xl hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.9),inset_0_0_30px_rgba(0,216,245,0.05)] overflow-hidden flex flex-col justify-between"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${service.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedService(service);
                  }
                }}
              >
                {/* Subtle hover gradient wash */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00D8F5]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Section: Header & Metadata */}
                <div className="p-7 sm:p-8">
                  {/* Top Bar: Service Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#00D8F5] bg-[#00D8F5]/10 px-3 py-1 rounded-full border border-[#00D8F5]/20">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/70 group-hover:text-[#00D8F5] group-hover:border-[#00D8F5]/30 transition-colors">
                      <ServiceIcon id={service.id} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-[#00D8F5] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#92969F] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Features / Capabilities Pill List */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {service.features.slice(0, 3).map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] font-medium text-white/60 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-lg"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Cinematic Visual Image with Circular Arrow Button */}
                <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-0">
                  <div className="relative aspect-[16/10] rounded-[18px] overflow-hidden bg-black/40 border border-white/[0.06]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white/80">
                        {service.badge}
                      </span>
                    </div>

                    {/* Bottom-right Circular Arrow Button */}
                    <div className="absolute bottom-3 right-3">
                      <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:bg-[#00D8F5] group-hover:text-black group-hover:border-[#00D8F5] transition-all duration-300 shadow-lg">
                        <svg
                          className="w-4 h-4 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-0.5"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* "Learn More →" Link Trigger */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.05]">
                    <span className="text-xs font-semibold text-white/70 group-hover:text-[#00D8F5] transition-colors inline-flex items-center gap-1.5">
                      <span>Learn More</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                    <span className="text-[11px] font-mono text-white/40">
                      Explore Deliverables
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          3. CTA SECTION (Wide Horizontal Cinematic Panel)
          ───────────────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.05]">
        {/* Ambient backlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D8F5]/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00D8F5]/[0.04] rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="rounded-[28px] bg-gradient-to-r from-[#080A0D] via-[#0C0F14] to-[#080A0D] border border-white/[0.08] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            
            {/* Top Cyan Accent Edge */}
            <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#00D8F5]/50 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Side: Headline & Copy */}
              <div className="lg:col-span-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xs font-semibold tracking-[0.25em] text-[#00D8F5] uppercase mb-4"
                >
                  LET’S CREATE TOGETHER
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-white mb-6 leading-tight"
                >
                  Have a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D8F5] to-[#4B63FF]">
                    project
                  </span>{' '}
                  in mind?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-base sm:text-lg text-[#94979F] max-w-xl font-normal leading-relaxed"
                >
                  Let’s turn your ideas into impactful digital experiences that drive real growth. We consult, engineer, and scale custom visual solutions.
                </motion.p>
              </div>

              {/* Right Side: Primary Magnetic Action Button */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
                <AnimatedButton href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>Get a Free Consultation</span>
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </AnimatedButton>
                <Link
                  href="https://wa.me/918248628371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-white/50 hover:text-[#00D8F5] transition-colors flex items-center gap-2 mt-1"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>WhatsApp direct: +91 82486 28371</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          4. INTERACTIVE SERVICE DETAIL MODAL (Deep-Dive Dialog)
          ───────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#080A0D] border border-white/10 rounded-[24px] p-6 sm:p-10 shadow-2xl shadow-black text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-20"
                aria-label="Close dialog"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Service Number & Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#00D8F5] bg-[#00D8F5]/10 px-3 py-1 rounded-full border border-[#00D8F5]/20">
                  {selectedService.number}
                </span>
                <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                  Timeline: {selectedService.timeline}
                </span>
              </div>

              <h3 id="service-dialog-title" className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                {selectedService.title}
              </h3>

              <p className="text-base text-[#94979F] leading-relaxed mb-8">
                {selectedService.overview}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold tracking-widest text-[#00D8F5] uppercase mb-4">
                  Standard Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D8F5] mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-white/80 font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-white/40 font-mono">
                  Custom quote tailored to your scale
                </span>
                <Link
                  href={`/contact?service=${selectedService.id}`}
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#00D8F5] text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,216,245,0.4)] transition-all text-center"
                >
                  Start with this Service →
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
