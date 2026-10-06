'use client';

import React, { useEffect, useRef } from 'react';

export default function Effects() {
  const blueOrbRef = useRef<HTMLDivElement | null>(null);
  const blackOrbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // =========================================================================
    // 1. HERO HEADLINE REVEAL (Once on load)
    // =========================================================================
    const heroSection = document.querySelector('section');
    if (heroSection) {
      const headline = heroSection.querySelector('h1');
      if (headline && !headline.classList.contains('fx-processed')) {
        headline.classList.add('fx-processed');

        if (!prefersReducedMotion) {
          // Identify text lines or elements
          // Line 1: "Made to", Line 2: "stand apart."
          const originalHTML = headline.innerHTML;
          // Wrap lines cleanly in overflow:hidden mask
          const lines = originalHTML.split(/<br\s*\/?>/i);
          if (lines.length > 1) {
            headline.innerHTML = lines
              .map(
                (line, index) =>
                  `<span class="fx-headline-mask"><span class="fx-headline-line fx-headline-line-${
                    index + 1
                  }">${line.trim()}</span></span>`
              )
              .join('');
          } else {
            headline.innerHTML = `<span class="fx-headline-mask"><span class="fx-headline-line fx-headline-line-1">${originalHTML}</span></span>`;
          }

          // Target subtext and buttons in hero
          const paragraphs = heroSection.querySelectorAll('p');
          paragraphs.forEach((p) => p.classList.add('fx-hero-subtext'));

          const buttonContainers = heroSection.querySelectorAll(
            '.flex.flex-wrap.items-center.gap-4, .hero-buttons, [class*="gap-4"]'
          );
          buttonContainers.forEach((bc) => bc.classList.add('fx-hero-buttons'));

          // Trigger reveal after next paint
          requestAnimationFrame(() => {
            setTimeout(() => {
              headline.classList.add('fx-headline-revealed');
              paragraphs.forEach((p) => p.classList.add('fx-headline-revealed'));
              buttonContainers.forEach((bc) => bc.classList.add('fx-headline-revealed'));
            }, 60);
          });
        }
      }
    }

    // =========================================================================
    // 2. CURSOR-FOLLOWING ORBS IN THE HERO (Electric Blue & Black with Lerp)
    // =========================================================================
    let animFrameId: number;
    let targetX = window.innerWidth / 2;
    let targetY = 320;
    let blueX = targetX;
    let blueY = targetY;
    let blackX = targetX;
    let blackY = targetY;
    let wobbleTime = 0;

    const blueOrb = blueOrbRef.current;
    const blackOrb = blackOrbRef.current;

    const handleHeroMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleHeroMouseMove, { passive: true });

      const animateOrbs = () => {
        wobbleTime += 0.02;

        // Slight sine/cosine organic wobble
        const wobbleBX = Math.sin(wobbleTime * 1.2) * 14;
        const wobbleBY = Math.cos(wobbleTime * 0.9) * 14;
        const wobbleKX = Math.cos(wobbleTime * 1.5) * 8;
        const wobbleKY = Math.sin(wobbleTime * 1.1) * 8;

        // Blue lerp: 0.06
        blueX += (targetX + wobbleBX - blueX) * 0.06;
        blueY += (targetY + wobbleBY - blueY) * 0.06;

        // Black lerp: 0.025
        blackX += (targetX + wobbleKX - blackX) * 0.025;
        blackY += (targetY + wobbleKY - blackY) * 0.025;

        if (blueOrb) {
          blueOrb.style.transform = `translate3d(${blueX}px, ${blueY}px, 0)`;
        }
        if (blackOrb) {
          blackOrb.style.transform = `translate3d(${blackX}px, ${blackY}px, 0)`;
        }

        animFrameId = requestAnimationFrame(animateOrbs);
      };

      animFrameId = requestAnimationFrame(animateOrbs);
    }

    // =========================================================================
    // 3 & 4. GLASS BUTTONS & MAGNETIC HOVER
    // =========================================================================
    const buttons = document.querySelectorAll<HTMLElement>(
      'a[href="/contact"], a[href="#workspace"], a[href="/work"], button.rounded-full, a.rounded-full'
    );

    const magneticCleanups: Array<() => void> = [];

    buttons.forEach((btn) => {
      // Apply glass classes
      if (btn.classList.contains('bg-white') || btn.textContent?.includes('Work') || btn.textContent?.includes('Studio')) {
        btn.classList.add('fx-glass-btn');
      } else {
        btn.classList.add('fx-glass-btn-dark');
      }

      // Magnetic hover (Only if not touch and motion allowed)
      if (!isTouchDevice && !prefersReducedMotion) {
        btn.classList.add('fx-magnetic');

        let bX = 0;
        let bY = 0;
        let bTargetX = 0;
        let bTargetY = 0;
        let bRafId: number | null = null;
        let isHovering = false;

        const updateMagnetic = () => {
          // Lerp 0.18
          bX += (bTargetX - bX) * 0.18;
          bY += (bTargetY - bY) * 0.18;
          btn.style.transform = `translate3d(${bX}px, ${bY}px, 0)`;

          if (isHovering || Math.abs(bX) > 0.05 || Math.abs(bY) > 0.05) {
            bRafId = requestAnimationFrame(updateMagnetic);
          } else {
            btn.style.transform = 'translate3d(0, 0, 0)';
            bRafId = null;
          }
        };

        const onPointerMove = (e: PointerEvent) => {
          const rect = btn.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const offsetX = e.clientX - centerX;
          const offsetY = e.clientY - centerY;

          // 25% horizontal, 35% vertical offset
          bTargetX = offsetX * 0.25;
          bTargetY = offsetY * 0.35;
          isHovering = true;

          if (!bRafId) {
            bRafId = requestAnimationFrame(updateMagnetic);
          }
        };

        const onPointerLeave = () => {
          isHovering = false;
          bTargetX = 0;
          bTargetY = 0;
        };

        btn.addEventListener('pointermove', onPointerMove);
        btn.addEventListener('pointerleave', onPointerLeave);

        magneticCleanups.push(() => {
          btn.removeEventListener('pointermove', onPointerMove);
          btn.removeEventListener('pointerleave', onPointerLeave);
          if (bRafId) cancelAnimationFrame(bRafId);
        });
      }
    });

    // =========================================================================
    // 5. CARDS (Hover Lift & Cursor-Following Blue Radial Glow via --x / --y)
    // =========================================================================
    const cards = document.querySelectorAll<HTMLElement>(
      '.editorial-card, [class*="rounded-2xl border"], .fx-card-target'
    );

    const cardCleanups: Array<() => void> = [];

    cards.forEach((card) => {
      // Exclude full screen containers or root modals
      if (card.offsetWidth > 1100 && card.offsetHeight > 800) return;

      card.classList.add('fx-card');

      const onCardPointerMove = (e: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      };

      card.addEventListener('pointermove', onCardPointerMove, { passive: true });
      cardCleanups.push(() => card.removeEventListener('pointermove', onCardPointerMove));
    });

    // =========================================================================
    // 6. SCROLL REVEAL (Headings & cards rise from translateY(40px))
    // =========================================================================
    const revealTargets = document.querySelectorAll<HTMLElement>(
      'h2, h3, .fx-card, .editorial-card, [class*="p-8 sm:p-10 rounded-2xl"]'
    );

    let observer: IntersectionObserver | null = null;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const staggerIndex = (idx % 3) + 1;
              el.classList.add(`fx-stagger-${staggerIndex}`);
              el.classList.add('fx-revealed');
              obs.unobserve(el);
            }
          });
        },
        { threshold: 0.15 }
      );
      observer = io;

      revealTargets.forEach((target) => {
        if (target.closest('section:first-of-type') || target.closest('h1')) return;
        target.classList.add('fx-scroll-reveal');
        io.observe(target);
      });
    } else {
      revealTargets.forEach((target) => target.classList.add('fx-revealed'));
    }

    // =========================================================================
    // 7. NAV LINKS (Blue Underline Scales in from Left on Hover)
    // =========================================================================
    const navLinks = document.querySelectorAll<HTMLElement>('header nav a, nav[aria-label="Main Navigation"] a');
    navLinks.forEach((link) => {
      link.classList.add('fx-nav-link');
    });

    // =========================================================================
    // CLEANUP ON UNMOUNT
    // =========================================================================
    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', handleHeroMouseMove);
      magneticCleanups.forEach((c) => c());
      cardCleanups.forEach((c) => c());
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 2. Cursor-Following Orbs rendered behind hero text */}
      <div
        aria-hidden="true"
        className="fx-hero-orbs-container"
      >
        <div ref={blueOrbRef} className="fx-hero-orb-blue" />
        <div ref={blackOrbRef} className="fx-hero-orb-black" />
      </div>
    </>
  );
}
