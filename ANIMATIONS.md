# Animations — Frameless Hub

Deep dive into all animation systems powering the Frameless experience.

---

## Hero Animation

The hero section combines multiple animation layers to create a "frameless canvas" effect.

### 3D Particle System (`ParticleCanvas.tsx`)

**Technology:** Three.js via React Three Fiber

- **400 particles** rendered as `THREE.Points` with additive blending
- Particles have randomized positions across a 20×20×10 unit space
- Each particle has unique velocity for organic drift movement
- **Mouse parallax:** Normalized mouse coordinates (`-1 to 1`) subtly push particles, creating depth
- **Sine/cosine oscillation:** Adds gentle wave-like motion (`sin(time * 0.2 + i)`)
- **Boundary wrapping:** Particles teleport to opposite edge when exceeding bounds
- **Continuous rotation:** Entire point cloud rotates slowly on Y-axis (`time * 0.02`)

### Floating Geometric Shapes

- 4 wireframe `boxGeometry` shapes at different depths
- Each has unique rotation speed, position, and scale
- Creates a sense of "digital space" — objects floating without frames
- Opacity set to 8% for subtlety

### Headline Animation

```
Word-by-word reveal: opacity 0→1, y 60→0, blur 10px→0px
Stagger: 150ms between each word
Easing: cubic-bezier(0.16, 1, 0.3, 1) — smooth spring-like
```

The word "Limits" uses gradient text treatment (`#00E5FF → #7B61FF`).

### Supporting Elements

- **Status tag:** Fades in with pulsing green dot (CSS `pulse-glow` keyframe)
- **Subtext:** Delayed fade-in (1000ms)
- **CTA buttons:** Delayed fade-up (1200ms)
- **Scroll indicator:** Appears at 2000ms, continuous bounce animation

---

## Scroll Animations

### SectionWrapper

Every major section uses `SectionWrapper` which implements:

```
Trigger: IntersectionObserver with -80px margin
Animation: opacity 0→1, translateY 40px→0
Duration: 800ms
Easing: [0.16, 1, 0.3, 1]
Fires: Once (doesn't re-animate on scroll up)
```

### Staggered Card Reveals

Service cards, portfolio cards, and testimonials use staggered entrance:

```
Each card: opacity 0→1, y 30→0
Stagger delay: index × 80-150ms
Viewport trigger: Once, with -50px margin
```

### Stats Counter Section

Stats blocks animate in with stagger on the About page, each delayed by `index × 100ms`.

---

## Hover Interactions

### Service Cards

1. **Lift:** `translateY(-8px)` over 300ms
2. **Border glow:** Border transitions from `white/5` to `accent/20`
3. **Gradient overlay:** Fades in at 100% opacity (from 0%)
4. **Top gradient line:** Becomes visible at 50% opacity
5. **Icon scale:** Grows to 110%
6. **Title color:** Shifts to accent color
7. **Arrow reveal:** "Learn more" text + arrow fades in and shifts right

### Portfolio Cards

1. **Geometric shape morph:** Shapes scale and rotate on hover
2. **Play button:** Scales in from 0.5 with spring physics
3. **Background color:** Opacity doubles (10% → 20%)
4. **Description text:** Slides in below the card
5. **Border brightening:** `white/5` → `white/10`

### Animated Buttons

1. **Scale:** 1.03× on hover, 0.98× on press
2. **Shimmer:** Gradient sweep animation (2s infinite)
3. **Primary:** Adds neon box-shadow `0 0 30px rgba(0, 229, 255, 0.3)`

### Navigation Links

- Active link: Accent color + animated dot indicator (layoutId spring)
- Hover: `white/60` → `white/100` transition

---

## Page Transitions

Using `AnimatePresence` with `mode="wait"`:

```
Enter: opacity 0→1, y 20→0 (400ms)
Exit: opacity 1→0, y 0→-20 (400ms)
Easing: [0.16, 1, 0.3, 1]
```

---

## Navbar Animation

- **Initial state:** Slides down from `y: -100` on page load (800ms)
- **Scroll behavior:** After 20px scroll, transitions to `glass-strong` with shadow
- **Mobile menu:** 
  - Overlay fades in with `backdrop-blur-xl`
  - Links animate in with stagger (`index × 100ms`)
  - Hamburger morphs to X with smooth rotation

---

## CSS Animations (Keyframes)

### `float`
```css
0%, 100% { transform: translateY(0px) }
50% { transform: translateY(-20px) }
/* Duration: 6s, ease-in-out, infinite */
```

### `pulse-glow`
```css
0%, 100% { opacity: 0.4 }
50% { opacity: 1 }
/* Duration: 3s, ease-in-out, infinite */
```

### `shimmer`
```css
0% { transform: translateX(-100%) }
100% { transform: translateX(100%) }
/* Duration: 2s, infinite */
```

---

## Performance Optimizations

1. **Lazy-loaded 3D canvas:** `ParticleCanvas` uses `next/dynamic` with `ssr: false`
2. **DPR capping:** Canvas renders at max 1.5× device pixel ratio
3. **Antialiasing disabled:** GPU savings for particle rendering
4. **Additive blending:** No depth writing for particles (GPU optimization)
5. **`once: true` observers:** Animations fire once, observers disconnect
6. **CSS animations:** Used for ambient effects (no JS overhead)
7. **`will-change` avoidance:** Framer Motion handles GPU promotion automatically
