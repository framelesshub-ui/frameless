'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  color: string;
  year: string;
  index: number;
}

export default function PortfolioCard({ title, category, description, color, year, index }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowMobileDetail(!showMobileDetail)}
      className="group relative cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`${title} — ${category}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setShowMobileDetail(!showMobileDetail); } }}
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-white/10 transition-all duration-500">
        {/* Colored background */}
        <div
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ backgroundColor: color }}
        />

        {/* Geometric pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Floating shapes */}
        <motion.div
          animate={isHovered ? { scale: 1.2, rotate: 45 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl border-2 opacity-20"
          style={{ borderColor: color }}
        />
        <motion.div
          animate={isHovered ? { scale: 0.8, rotate: -30 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-1/3 left-1/3 w-16 h-16 rounded-full opacity-10"
          style={{ backgroundColor: color }}
        />

        {/* Play button */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm"
                style={{ backgroundColor: `${color}33`, border: `1px solid ${color}66` }}
                aria-label={`View ${title} project`}
              >
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom info bar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium text-white/50 mb-1">{category}</p>
              <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
            <span className="text-xs text-white/40 font-mono">{year}</span>
          </div>
        </div>
      </div>

      {/* Description — visible on mobile tap or desktop hover */}
      <AnimatePresence>
        {(isHovered || showMobileDetail) && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 text-sm text-white/50 px-1"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Mobile-only: always-visible brief description */}
      <p className="mt-2 text-xs text-white/40 px-1 md:hidden line-clamp-2">{description}</p>
    </motion.div>
  );
}
