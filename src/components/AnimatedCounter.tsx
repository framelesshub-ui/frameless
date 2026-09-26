'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  displayValue?: string;
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export default function AnimatedCounter({
  value,
  suffix = '',
  displayValue,
  className = '',
  'aria-hidden': ariaHidden,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();

  // Resolve the authoritative static display string (e.g. "399+", "10M+")
  const finalDisplay = displayValue || (typeof value === 'string' ? value : `${value}${suffix}`);

  // Crucial: initialize with the real verified value so Server-Side Rendered HTML,
  // web crawlers, search engines, accessibility tools, and no-JS visitors always see
  // the exact final verified figure (never "0" or "0+").
  const [currentText, setCurrentText] = useState(finalDisplay);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);

  useEffect(() => {
    if (!isInView || hasStartedAnimation || shouldReduceMotion) return;
    setHasStartedAnimation(true);

    // Extract target number and suffix
    let targetNum = typeof value === 'number' ? value : 0;
    let unitSuffix = suffix;
    let isDecimal = false;
    let decimalPlaces = 0;

    if (typeof value === 'string') {
      const match = value.match(/([\d.]+)(.*)/);
      if (match) {
        targetNum = parseFloat(match[1]);
        unitSuffix = match[2] || suffix;
        isDecimal = match[1].includes('.');
        decimalPlaces = isDecimal ? match[1].split('.')[1].length : 0;
      } else {
        return;
      }
    }

    if (isNaN(targetNum) || targetNum <= 0) return;

    let startTime: number | null = null;
    const duration = 1600; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out exponential curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = targetNum * ease;

      const formatted = isDecimal
        ? current.toFixed(decimalPlaces)
        : Math.floor(current).toString();

      setCurrentText(`${formatted}${unitSuffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentText(finalDisplay);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, suffix, finalDisplay, hasStartedAnimation, shouldReduceMotion]);

  return (
    <span ref={ref} className={className} aria-hidden={ariaHidden}>
      {currentText}
    </span>
  );
}
