import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UseVideoScrubOptions {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  sensitivity?: number;
}

export function useVideoScrub({
  videoRef,
  sensitivity = 0.35,
}: UseVideoScrubOptions) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // References for scrub calculations without React re-renders
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);

  // Parallax offsets (max 6px X, 4px Y)
  const currentParallaxX = useRef<number>(0);
  const currentParallaxY = useRef<number>(0);
  const targetParallaxX = useRef<number>(0);
  const targetParallaxY = useRef<number>(0);

  useEffect(() => {
    // Touch detection
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);

    const video = videoRef.current;
    if (!video) return;

    if (isTouch || prefersReducedMotion) {
      // On mobile or reduced motion: play muted loop slowly or hold poster
      video.muted = true;
      video.loop = true;
      video.playbackRate = 0.85;
      video.play().catch(() => {
        // Autoplay may be restricted without user interaction
      });
      return;
    }

    // Initialize targetTime from video once metadata is available
    const handleLoadedMetadata = () => {
      targetTimeRef.current = video.currentTime || 0;
    };
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Controlled seek completion handler to avoid seek flooding
    const handleSeeked = () => {
      isSeekingRef.current = false;
      const duration = video.duration;
      if (!duration || isNaN(duration)) return;

      // Check if targetTime has drifted away while we were seeking
      const diff = Math.abs(video.currentTime - targetTimeRef.current);
      if (diff > 0.04) {
        isSeekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };
    video.addEventListener('seeked', handleSeeked);

    // Parallax rAF loop
    const animateParallax = () => {
      // Smooth interpolation toward target parallax
      currentParallaxX.current += (targetParallaxX.current - currentParallaxX.current) * 0.08;
      currentParallaxY.current += (targetParallaxY.current - currentParallaxY.current) * 0.08;

      if (videoRef.current) {
        videoRef.current.style.transform = `translate3d(${currentParallaxX.current.toFixed(
          2
        )}px, ${currentParallaxY.current.toFixed(2)}px, 0)`;
      }

      rafIdRef.current = requestAnimationFrame(animateParallax);
    };
    rafIdRef.current = requestAnimationFrame(animateParallax);

    // Mousemove listener for scrub and parallax
    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 1. Mouse Scrub calculation
      if (prevXRef.current !== null && video.duration) {
        const deltaX = currentX - prevXRef.current;
        const timeOffset = (deltaX / width) * sensitivity * video.duration;

        let nextTime = targetTimeRef.current + timeOffset;
        // Clamp: 0 <= targetTime <= video.duration
        nextTime = Math.max(0, Math.min(video.duration, nextTime));
        targetTimeRef.current = nextTime;

        if (!isSeekingRef.current) {
          isSeekingRef.current = true;
          video.currentTime = nextTime;
        }
      }
      prevXRef.current = currentX;

      // 2. Parallax calculation (max 6px horizontal, 4px vertical)
      const normX = (currentX / width) * 2 - 1; // -1 to 1
      const normY = (currentY / height) * 2 - 1; // -1 to 1
      targetParallaxX.current = normX * 6;
      targetParallaxY.current = normY * 4;

      // 3. Update cursor radial light CSS variables
      document.documentElement.style.setProperty('--mouse-x', `${currentX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${currentY}px`);
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
      targetParallaxX.current = 0;
      targetParallaxY.current = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeked', handleSeeked);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [videoRef, sensitivity, prefersReducedMotion]);

  return { isTouchDevice };
}
