'use client';

import { motion } from 'framer-motion';
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
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 group';

  const variants = {
    primary: 'bg-accent text-background hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]',
    secondary: 'bg-white/5 text-white border border-white/10 hover:border-accent/30 hover:bg-white/10',
    outline: 'bg-transparent text-accent border border-accent/30 hover:bg-accent/10 hover:border-accent/50',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedStyles}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={combinedStyles}
      onClick={onClick}
      type={type}
    >
      {content}
    </motion.button>
  );
}
