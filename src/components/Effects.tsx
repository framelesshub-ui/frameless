'use client';

import React, { useEffect, useRef } from 'react';

export default function Effects() {
  const blueOrbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // =========================================================================
    // 1. HERO HEADLINE & CONTENT REVEAL (Once on load)
    // =========================================================================
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      if (!prefersReducedMotion) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            heroEl.classList.add('hero-revealed');
          }, 80);
        });
      } else {
        heroEl.classList.add('hero-revealed');
      }
    }

    // =========================================================================
    // 2. CURSOR-FOLLOWING ELECTRIC BLUE RADIAL ORB IN HERO
    //    Lerp 0.06 + sine/cosine organic wobble via translate3d
    // =========================================================================
    let orbRafId: number;
    let targetX = window.innerWidth / 2;
    let targetY = 300;
    let currentX = targetX;
    let currentY = targetY;
    let wobbleTime = 0;

    const orb = blueOrbRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroEl) return;
      const heroRect = heroEl.getBoundingClientRect();
      targetX = e.clientX - heroRect.left;
      targetY = e.clientY - heroRect.top;
    };

    if (!prefersReducedMotion && orb && heroEl) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      const animateOrb = () => {
        wobbleTime += 0.02;

        const wobbleX = Math.sin(wobbleTime * 1.3) * 16;
        const wobbleY = Math.cos(wobbleTime * 0.9) * 16;

        // Lerp: 0.06
        currentX += (targetX + wobbleX - currentX) * 0.06;
        currentY += (targetY + wobbleY - currentY) * 0.06;

        orb.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        orbRafId = requestAnimationFrame(animateOrb);
      };

      orbRafId = requestAnimationFrame(animateOrb);
    }

    // =========================================================================
    // 3. MAGNETIC HOVER ON GLASS BUTTONS (Lerp 0.18, disabled on touch)
    // =========================================================================
    const buttons = document.querySelectorAll<HTMLElement>(
      '.glass-btn-blue, .glass-btn-light, .glass-btn, a[href="#contact"], a[href="#projects"]'
    );
    const magneticCleanups: Array<() => void> = [];

    if (!isTouchDevice && !prefersReducedMotion) {
      buttons.forEach((btn) => {
        btn.classList.add('fx-magnetic');

        let bX = 0;
        let bY = 0;
        let bTargetX = 0;
        let bTargetY = 0;
        let bRafId: number | null = null;
        let isHovered = false;

        const updateMagnetic = () => {
          // Lerp 0.18
          bX += (bTargetX - bX) * 0.18;
          bY += (bTargetY - bY) * 0.18;
          btn.style.transform = `translate3d(${bX}px, ${bY}px, 0)`;

          if (isHovered || Math.abs(bX) > 0.05 || Math.abs(bY) > 0.05) {
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
          isHovered = true;

          if (!bRafId) {
            bRafId = requestAnimationFrame(updateMagnetic);
          }
        };

        const onPointerLeave = () => {
          isHovered = false;
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
      });
    }

    // =========================================================================
    // 4. SECTION SCROLL REVEAL (Threshold 0.12, translateY 36px)
    // =========================================================================
    const revealTargets = document.querySelectorAll<HTMLElement>(
      '.scroll-reveal, #services, #projects, #about, #contact'
    );
    let revealObserver: IntersectionObserver | null = null;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add('in-view');
              obs.unobserve(el);
            }
          });
        },
        { threshold: 0.12 }
      );

      revealTargets.forEach((target) => {
        target.classList.add('scroll-reveal');
        revealObserver?.observe(target);
      });
    } else {
      revealTargets.forEach((target) => target.classList.add('in-view'));
    }

    // =========================================================================
    // CLEANUP
    // =========================================================================
    return () => {
      if (orbRafId) cancelAnimationFrame(orbRafId);
      window.removeEventListener('mousemove', handleMouseMove);
      magneticCleanups.forEach((c) => c());
      if (revealObserver) revealObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hero-orb-wrap"
    >
      <div ref={blueOrbRef} className="hero-orb-blue" />
    </div>
  );
}
