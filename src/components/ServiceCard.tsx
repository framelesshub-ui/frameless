'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  index: number;
}

export default function ServiceCard({ id, title, description, icon, gradient, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <Link href={`/services#${id}`} className="block">
        <div className="relative p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 transition-all duration-500 h-full overflow-hidden">
          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-accent-violet/5" />

          {/* Top gradient line */}
          <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

          {/* Icon */}
          <div className="relative z-10 w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300" role="img" aria-label={title}>
            {icon}
          </div>

          {/* Content */}
          <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="relative z-10 text-sm text-white/50 leading-relaxed">
            {description}
          </p>

          {/* Arrow */}
          <div className="relative z-10 mt-6 flex items-center gap-2 text-accent/0 group-hover:text-accent transition-all duration-300">
            <span className="text-sm font-medium">Learn more</span>
            <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
