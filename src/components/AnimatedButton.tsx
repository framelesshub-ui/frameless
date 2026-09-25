'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function AnimatedButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Restrained magnetic spring physics
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 180, damping: 15, mass: 0.2 });
  const springY = useSpring(rawY, { stiffness: 180, damping: 15, mass: 0.2 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Restrain pull to max 6–8px
    const deltaX = (e.clientX - centerX) * 0.18;
    const deltaY = (e.clientY - centerY) * 0.18;
    const clampedX = Math.max(-8, Math.min(8, deltaX));
    const clampedY = Math.max(-8, Math.min(8, deltaY));
    rawX.set(clampedX);
    rawY.set(clampedY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 group select-none';

  const variants = {
    primary: 'bg-accent text-background hover:shadow-[0_0_35px_rgba(0,229,255,0.35)] active:scale-[0.98]',
    secondary: 'bg-white/5 text-white border border-white/10 hover:border-accent/40 hover:bg-white/10 active:scale-[0.98]',
    outline: 'bg-transparent text-accent border border-accent/30 hover:bg-accent/10 hover:border-accent/60 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs tracking-wider uppercase',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full flex items-center justify-center"
    >
      {/* 1. Subtle animated highlight sweep across primary buttons */}
      {variant === 'primary' && (
        <span
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
          aria-hidden="true"
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </span>
      )}

      {/* 2. Secondary/Outline shimmer */}
      {variant !== 'primary' && (
        <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden" aria-hidden="true">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]" />
        </span>
      )}

      {/* 3. Button content with arrow shift (4–6px right) */}
      <span className="relative z-10 flex items-center gap-2 [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-out group-hover:[&>svg]:translate-x-1.5">
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <motion.div
        style={{ x: shouldReduceMotion ? 0 : springX, y: shouldReduceMotion ? 0 : springY }}
        className="inline-block"
      >
        <Link href={href} className={combinedStyles}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ x: shouldReduceMotion ? 0 : springX, y: shouldReduceMotion ? 0 : springY }}
      className="inline-block"
    >
      <button
        onClick={onClick}
        type={type}
        className={combinedStyles}
      >
        {content}
      </button>
    </motion.div>
  );
}
