# Frameless Hub — Workspace Rules & Design System

## Aesthetic & UI Invariants
- **Theme:** Clean, modern, high-end creative agency experience with smooth page animations and signature button micro-interactions.
- **Color Palette:** Minimalist high-contrast palette — pure white `#ffffff` / deep black `#000000`, electric blue `#0047ff` accent, muted slate `#5b6170`, and hairline borders `#e6e8ee` (dark mode tokens via CSS variables).
- **Typography & Interaction:** Expressive modern typography ("Unbounded" headings, "DM Sans" body), magnetic cursor-pull CTAs, smooth directional sweeps, and subtle glass elevation.
- **Animations:** Ensure any text-splitting or scroll-reveal animations preserve native whitespace (` `) in the DOM so screen readers and search engines do not concatenate words.
- **Responsiveness:** Fluid responsive grid architecture supporting mobile (`390px`), tablet (`768px`), and desktop (`1440px+`) viewports with zero horizontal overflow.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
