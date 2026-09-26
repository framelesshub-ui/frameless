export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  iconName: 'Compass' | 'Palette' | 'Sparkles' | 'Video' | 'Youtube' | 'Share2' | 'TrendingUp' | 'Camera' | 'Film';
  deliverables: string[];
  tag: string;
}

export const SERVICES_SECTION_HEADLINE = "Everything your brand needs to grow and stay relevant.";

export const SERVICES: Service[] = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    shortDescription: "Distinct positioning, market intelligence, narrative architecture, and value proposition frameworks that define long-term category leadership.",
    iconName: "Compass",
    deliverables: ["Market & Competitor Audits", "Brand Architecture & DNA", "Tone of Voice & Messaging", "Go-To-Market Playbooks"],
    tag: "Foundation"
  },
  {
    id: "branding-design",
    number: "02",
    title: "Branding & Design",
    shortDescription: "Bespoke typographic systems, visual identities, packaging suites, and spatial collateral crafted with obsessive craft and editorial restraint.",
    iconName: "Palette",
    deliverables: ["Visual Identity Systems", "Packaging & Print Production", "Design Guidelines & Systems", "Spatial & Wayfinding Assets"],
    tag: "Identity"
  },
  {
    id: "content-creation",
    number: "03",
    title: "Content Creation",
    shortDescription: "High-retention social-first creative, organic reels, episodic series, and storytelling engineered to seize audience attention instantly.",
    iconName: "Sparkles",
    deliverables: ["Short-Form Video (Reels/Shorts)", "Storytelling Content Calendars", "High-Retention Visual Hooks", "Organic Creative Direction"],
    tag: "Creative"
  },
  {
    id: "video-production",
    number: "04",
    title: "Video Production",
    shortDescription: "Cinema-grade commercial films, brand documentaries, high-speed automotive capture, and broadcast advertisements from script to final cut.",
    iconName: "Video",
    deliverables: ["Commercial Film Direction", "Cinema Optics & Multi-Cam Shoots", "Bespoke Studio Lighting", "Scriptwriting & Storyboarding"],
    tag: "Cinema"
  },
  {
    id: "youtube-management",
    number: "05",
    title: "YouTube Management",
    shortDescription: "Full-channel growth systems, algorithmic retention editing, high-CTR thumbnail packaging, and audience monetization architecture.",
    iconName: "Youtube",
    deliverables: ["End-to-End Channel Operations", "High-CTR Thumbnail Design", "Audience Retention Optimization", "Long-Form Video Editorial"],
    tag: "Growth"
  },
  {
    id: "social-media-management",
    number: "06",
    title: "Social Media Management",
    shortDescription: "Comprehensive organic presence management, community cultivation, editorial scheduling, and cultural trend integration across platforms.",
    iconName: "Share2",
    deliverables: ["Monthly Content Architecture", "Community Engagement & PR", "Multi-Platform Distribution", "Real-Time Trend Capitalization"],
    tag: "Presence"
  },
  {
    id: "performance-marketing",
    number: "07",
    title: "Performance Marketing",
    shortDescription: "Data-driven paid media execution, rapid creative multivariate testing, ROAS scaling, and conversion funnels on Meta, Google & YouTube.",
    iconName: "TrendingUp",
    deliverables: ["Paid Ad Creative Matrix", "Direct-Response Video Ads", "Funnel CRO & Landing Pages", "ROAS & Attribution Audits"],
    tag: "Scale"
  },
  {
    id: "photography",
    number: "08",
    title: "Photography",
    shortDescription: "Editorial, lifestyle, high-fashion bridal, culinary, and architectural commercial photography tailored for international campaigns.",
    iconName: "Camera",
    deliverables: ["Architectural & Interior Capture", "Culinary & Food Styling Shoots", "High-Fashion & Bridal Portfolios", "Commercial Product Imagery"],
    tag: "Stills"
  },
  {
    id: "post-production",
    number: "09",
    title: "Post Production",
    shortDescription: "Precision 35mm cinema color grading, original sound foley and spatial audio mixing, visual effects, and kinetic motion title systems.",
    iconName: "Film",
    deliverables: ["Precision DaVinci Color Grading", "Custom Sound Design & Foley", "VFX & Clean-Up Compositing", "Kinetic Motion Graphics"],
    tag: "Craft"
  }
];
