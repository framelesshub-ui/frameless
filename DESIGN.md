# Design System — Frameless Hub

## Brand Identity

Frameless Hub's visual identity communicates **premium quality, futuristic vision, and confident minimalism**. Every design decision reflects a brand that is bold without being loud, modern without being trendy.

---

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-background` | `#0A0A0A` | Page background, primary surface |
| `--color-foreground` | `#EDEDED` | Primary text color |
| `--color-accent` | `#00E5FF` | Electric blue — CTAs, highlights, interactive elements |
| `--color-accent-violet` | `#7B61FF` | Gradient pairing, secondary accent |

### Surface Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-surface` | `#111111` | Card backgrounds, elevated surfaces |
| `--color-surface-light` | `#1A1A1A` | Lighter surface variant |
| `--color-border` | `#222222` | Subtle borders |
| `--color-muted` | `#888888` | Muted text, secondary information |

### Gradient System

- **Primary Gradient:** `#00E5FF → #7B61FF` (Blue → Violet)
- **Text Gradient:** Applied to headings for emphasis
- **Glow Effects:** `rgba(0, 229, 255, 0.15)` radial shadows

---

## Typography

### Font Family

**Inter** — A modern, geometric sans-serif optimized for screens.

- Source: Google Fonts
- Weights used: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)

### Type Scale

| Element | Size | Weight | Usage |
|---|---|---|---|
| Hero H1 | 5rem–6rem | 900 (Black) | Hero headline |
| Section H2 | 2.5rem–3.5rem | 900 (Black) | Section headings |
| Card H3 | 1.25rem | 700 (Bold) | Card titles |
| Body | 0.875rem–1rem | 400 (Regular) | Body copy |
| Label | 0.75rem | 600 (SemiBold) | Tags, labels, overlines |
| Overline | 0.75rem | 600 + tracking `0.3em` | Section labels |

### Text Colors

- Primary: `#EDEDED` (white/90)
- Secondary: `rgba(255, 255, 255, 0.4)` (white/40)
- Muted: `rgba(255, 255, 255, 0.2)` (white/20)
- Accent: `#00E5FF`

---

## UI Elements

### Glassmorphism

Two tiers of glassmorphism:

1. **Standard:** `blur(20px)`, `bg: rgba(17, 17, 17, 0.6)`, border `rgba(255, 255, 255, 0.06)`
2. **Strong:** `blur(30px)`, `bg: rgba(17, 17, 17, 0.85)`, border `rgba(255, 255, 255, 0.08)`

Applied to: Navbar (on scroll), modals, overlays.

### Cards

- Background: `#111111` (surface)
- Border: `1px solid rgba(255, 255, 255, 0.05)`
- Hover border: `rgba(0, 229, 255, 0.2)`
- Border radius: `1rem` (16px)
- Padding: `2rem` (32px)

### Buttons

Three variants:
1. **Primary:** Solid accent background, dark text
2. **Secondary:** Transparent + subtle border
3. **Outline:** Transparent + accent border

All buttons use `rounded-full` (pill shape) with shimmer hover effect.

### Grid Pattern

Subtle grid overlay: `1px lines at 60px intervals, 2% white opacity`

### Noise Texture

SVG-based fractal noise at `3% opacity` for surface depth.

---

## Spacing

Based on 4px grid:
- Section padding: `6rem–8rem` vertical
- Container max-width: `80rem` (1280px)
- Content padding: `1.5rem–2rem` horizontal
- Card gap: `1.5rem` (24px)
- Component breathing space: generous whitespace is core to the design

---

## Animation Philosophy

> "Motion should feel like a natural extension of the interface — never a decoration."

- Animations serve a **purpose**: reveal, guide attention, indicate state
- Easing: Custom cubic-bezier `[0.16, 1, 0.3, 1]` for organic feel
- Duration: 0.3s–0.8s for UI, up to 2s for ambient
- Scroll-triggered: Elements animate once on viewport entry
- Hover states: Scale, glow, color shift — never disruptive
- Background: Continuous but subtle (particles, floating shapes)

---

## Responsive Breakpoints

| Breakpoint | Min Width | Target |
|---|---|---|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large displays |

Mobile-first approach: base styles target mobile, scaled up with breakpoints.
