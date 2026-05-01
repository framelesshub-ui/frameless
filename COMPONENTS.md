# Components — Frameless Hub

Comprehensive reference for all reusable components in the project.

---

## Layout Components

### `Navbar`
**File:** `src/components/Navbar.tsx`

Sticky top navigation with glassmorphism effect on scroll.

- **Features:** Scroll detection, active route indicator, animated mobile hamburger menu, smooth page transitions
- **Props:** None (reads pathname via `usePathname`)
- **Animation:** Initial slide-down, blur background on scroll, layoutId for active indicator dot

### `Footer`
**File:** `src/components/Footer.tsx`

Site-wide footer with brand info, navigation links, social links, and contact info.

- **Features:** Gradient top border, responsive grid layout, social link icons
- **Props:** None (reads from constants)

### `PageTransition`
**File:** `src/components/PageTransition.tsx`

Wraps page content to provide smooth enter/exit animations on route changes.

- **Props:** `children: React.ReactNode`
- **Animation:** Fade + vertical slide on mount/unmount using `AnimatePresence`

### `SectionWrapper`
**File:** `src/components/SectionWrapper.tsx`

Scroll-triggered section container that animates into view.

- **Props:**
  - `children: React.ReactNode`
  - `className?: string`
  - `id?: string`
  - `delay?: number`
- **Animation:** Fade-up on scroll into viewport (once), configurable delay

---

## Interactive Components

### `AnimatedButton`
**File:** `src/components/AnimatedButton.tsx`

Multi-variant animated button/link component with shimmer hover effect.

- **Props:**
  - `children: React.ReactNode`
  - `href?: string` — renders as `Link` if provided, otherwise `button`
  - `variant?: 'primary' | 'secondary' | 'outline'`
  - `size?: 'sm' | 'md' | 'lg'`
  - `className?: string`
  - `onClick?: () => void`
  - `type?: 'button' | 'submit'`
- **Animation:** Scale on hover/tap, shimmer gradient sweep

---

## Card Components

### `ServiceCard`
**File:** `src/components/ServiceCard.tsx`

Service offering card with icon, description, and hover effects.

- **Props:**
  - `title: string`
  - `description: string`
  - `icon: string` (emoji)
  - `gradient: string` (Tailwind gradient classes)
  - `index: number` (for staggered animation)
- **Animation:** Staggered fade-in, lift on hover, glow overlay, gradient top line reveal

### `PortfolioCard`
**File:** `src/components/PortfolioCard.tsx`

Portfolio project card with colored background, geometric shapes, and play button.

- **Props:**
  - `title: string`
  - `category: string`
  - `description: string`
  - `color: string` (hex)
  - `year: string`
  - `index: number`
- **Animation:** Staggered fade-in, geometric shape morphing on hover, play button scale-in, description reveal below card

### `TestimonialCard`
**File:** `src/components/TestimonialCard.tsx`

Client testimonial card with quote, avatar initials, and author info.

- **Props:**
  - `name: string`
  - `role: string`
  - `text: string`
  - `avatar: string` (initials)
  - `index: number`
- **Animation:** Staggered fade-in on scroll

---

## Section Components

### `Hero`
**File:** `src/components/Hero.tsx`

Full-screen hero section with animated headline, 3D particle background, and CTAs.

- **Features:**
  - Word-by-word headline animation with blur reveal
  - Mouse-tracking parallax on 3D canvas
  - Gradient overlays for depth
  - Status tag with pulsing indicator
  - Animated scroll indicator
- **Dependencies:** `ParticleCanvas` (lazy-loaded)

### `CTASection`
**File:** `src/components/CTASection.tsx`

Full-width call-to-action section with gradient background glow.

- **Features:** Gradient text heading, dual CTA buttons, ambient glow
- **Props:** None

### `ParticleCanvas`
**File:** `src/components/ParticleCanvas.tsx`

Three.js 3D scene with particle system and floating wireframe shapes.

- **Props:** `mouse: { x: number; y: number }` — normalized mouse position
- **Features:**
  - 400 animated particles with additive blending
  - Mouse-influenced movement (parallax)
  - 4 floating wireframe cubes with rotation
  - Performance-optimized (DPR capped at 1.5, no antialiasing)

---

## Utilities

### `constants.ts`
**File:** `src/lib/constants.ts`

Central data store for all site content: navigation links, services, portfolio items, testimonials, social links.

### `hooks.ts`
**File:** `src/lib/hooks.ts`

Custom React hooks:
- `useMousePosition()` — real-time mouse coordinates
- `useScrollProgress()` — scroll position as 0-1 ratio
- `useInView(ref, options?)` — intersection observer for scroll triggers
- `useWindowSize()` — reactive window dimensions
