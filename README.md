# Frameless Hub — Premium Creative Agency

> **Create Without Limits** — We craft cinematic visuals, viral content, and brand stories that break frames.

---

## Overview

Frameless Hub is a premium, modern, animated website for a creative digital agency specializing in video editing, content creation, and digital branding. Built with performance and aesthetics at its core, it delivers an Awwwards-level experience with smooth animations, 3D particle effects, and a polished dark UI.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | React framework with App Router, SSR, file-based routing |
| **TypeScript** | Type safety across the entire codebase |
| **Tailwind CSS v4** | Utility-first styling with custom design tokens |
| **Framer Motion** | Declarative animations, page transitions, scroll effects |
| **Three.js / R3F** | 3D particle system and floating geometry in the hero |
| **React Three Drei** | Helper abstractions for Three.js scenes |
| **Google Fonts (Inter)** | Clean, modern sans-serif typography |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd frameless

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + design system
│   ├── services/page.tsx   # Services page
│   ├── work/page.tsx       # Portfolio page
│   ├── about/page.tsx      # About page
│   └── contact/page.tsx    # Contact page
├── components/             # Reusable UI components
│   ├── Navbar.tsx          # Sticky navigation with blur
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section with 3D canvas
│   ├── ParticleCanvas.tsx  # Three.js particle system
│   ├── AnimatedButton.tsx  # Animated CTA button
│   ├── ServiceCard.tsx     # Service card with hover effects
│   ├── PortfolioCard.tsx   # Portfolio grid card
│   ├── TestimonialCard.tsx # Client testimonial card
│   ├── CTASection.tsx      # Call-to-action section
│   ├── SectionWrapper.tsx  # Scroll-animated section wrapper
│   └── PageTransition.tsx  # Page transition wrapper
├── lib/                    # Utilities and data
│   ├── constants.ts        # All site data and content
│   └── hooks.ts            # Custom React hooks
└── public/                 # Static assets
    └── logo.png            # Frameless Hub logo
```

## Deployment

This project is deployment-ready for:

- **Vercel** (recommended) — `npx vercel`
- **Netlify** — configure build command as `npm run build`
- **Docker** — add Dockerfile with Node.js base
- **AWS/GCP** — deploy as a Node.js application

## License

All rights reserved. Frameless Hub © 2026.
