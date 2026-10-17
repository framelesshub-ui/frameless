# Frameless Hub — Workspace Rules & Design System

## Aesthetic & UI Invariants
- **Theme:** Professional Non-Linear Editing (NLE) post-production suite (DaVinci Resolve / Cinema HUD aesthetic).
- **Color Palette:** Deep studio matte blacks/charcoals, high-contrast typography, subtle technical grid borders, and cinema telemetry accents (cyan/tungsten/amber status indicators).
- **Typography & Telemetry:** Preserve monospaced metadata formatting for timecodes (`TC: 01:00:14:12`), frame rates (`24.00 FPS`), codecs (`PRORES 4444 XQ`), and color science tags (`FH_Cyan_Tungsten_Film_v4`).
- **Animations:** Ensure any text-splitting or scroll-reveal animations preserve native whitespace (` `) in the DOM so screen readers and search engines do not concatenate words.
- **Responsiveness:** Complex desktop horizontal timelines must degrade gracefully into thumb-friendly vertical decks or swipeable cards below `768px`.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
