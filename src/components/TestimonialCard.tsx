'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  avatar: string;
  index: number;
}

export default function TestimonialCard({ name, role, text, avatar, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/10 transition-all duration-500 h-full">
        {/* Quote mark */}
        <div className="text-6xl text-accent/10 font-serif leading-none mb-4">&ldquo;</div>

        {/* Testimonial text */}
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          {text}
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent-violet/20 flex items-center justify-center text-xs font-bold text-accent">
            {avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-white/40">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
