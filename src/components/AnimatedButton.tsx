'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface AnimatedButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  title?: string;
  ariaLabel?: string;
}

export default function AnimatedButton({
  children,
  text,
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  onClick,
  type = 'button',
  target,
  rel,
  title,
  ariaLabel,
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // 1. Magnetic Spring Physics (Restrained 6–8px pull on desktop)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.15 });
  const springY = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.22;
    const deltaY = (e.clientY - centerY) * 0.22;
    const clampedX = Math.max(-8, Math.min(8, deltaX));
    const clampedY = Math.max(-8, Math.min(8, deltaY));
    rawX.set(clampedX);
    rawY.set(clampedY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  // Base typography, pill shape, focus-ring, and tactile active press
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 group select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ff] active:scale-[0.97]';

  // Variant styles: container borders, initial background, and fill colors
  const variants = {
    primary:
      'bg-[#0047ff] text-white border border-[#407BFF]/50 shadow-[0_8px_24px_-4px_rgba(0,71,255,0.4)] hover:shadow-[0_12px_32px_rgba(0,71,255,0.55)]',
    secondary:
      'bg-white/[0.08] text-[var(--color-text)] border border-[var(--color-border)] hover:border-white/30 backdrop-blur-md',
    outline:
      'bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[#0047ff]/60',
    glass:
      'glass-btn-light text-[var(--color-text)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs tracking-wider',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wide',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Directional Fill Layer background
  const fillSweep = (
    <span
      className={`absolute inset-0 pointer-events-none origin-bottom translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full ${
        variant === 'primary'
          ? 'bg-[#0038cc]'
          : variant === 'secondary'
          ? 'bg-white/[0.14]'
          : 'bg-[#0047ff] text-white'
      }`}
      aria-hidden="true"
    />
  );

  // Content with Rolling Dual-Line Text & 45-degree arrow
  const renderLabel = () => {
    if (text) {
      return (
        <span className="relative inline-flex flex-col overflow-hidden h-[1.3em] leading-[1.3em]">
          <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
            {text}
          </span>
          <span
            className="absolute left-0 top-full inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full"
            aria-hidden="true"
          >
            {text}
          </span>
        </span>
      );
    }
    return children;
  };

  const renderArrow = () => {
    if (!showArrow) return null;
    return (
      <span className="relative inline-block overflow-hidden w-3.5 h-3.5 ml-1.5 flex-shrink-0">
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3.5 group-hover:-translate-y-3.5" />
        <ArrowUpRight
          className="absolute inset-0 w-3.5 h-3.5 -translate-x-3.5 translate-y-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0"
          aria-hidden="true"
        />
      </span>
    );
  };

  const innerContent = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 flex items-center justify-center gap-1.5"
    >
      {renderLabel()}
      {renderArrow()}
    </div>
  );

  if (href) {
    return (
      <motion.div
        style={{ x: shouldReduceMotion ? 0 : springX, y: shouldReduceMotion ? 0 : springY }}
        className="inline-block"
      >
        <Link
          href={href}
          onClick={onClick}
          className={combinedStyles}
          target={target}
          rel={rel}
          title={title}
          aria-label={ariaLabel || text}
        >
          {fillSweep}
          {innerContent}
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
        title={title}
        aria-label={ariaLabel || text}
      >
        {fillSweep}
        {innerContent}
      </button>
    </motion.div>
  );
}
