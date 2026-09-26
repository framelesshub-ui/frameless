import { useState, useEffect } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface TypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
}

export interface UseTypewriterResult {
  displayed: string;
  done: boolean;
}

export function useTypewriter({
  text,
  speed = 28,
  startDelay = 900,
}: TypewriterOptions): UseTypewriterResult {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed('');
    setDone(false);

    let currentIndex = 0;
    let timer: NodeJS.Timeout | null = null;

    const startTimeout = setTimeout(() => {
      timer = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayed(text.slice(0, currentIndex));
        } else {
          setDone(true);
          if (timer) clearInterval(timer);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      if (timer) clearInterval(timer);
    };
  }, [text, speed, startDelay, prefersReducedMotion]);

  return { displayed, done };
}
