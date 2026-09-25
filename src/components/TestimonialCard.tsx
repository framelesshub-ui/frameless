'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  avatar: string;
  index: number;
}

export default function TestimonialCard({ name, role, text, avatar, index }: TestimonialCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -5 }}
      className="group relative h-full flex flex-col justify-between"
    >
      <div className="relative p-8 rounded-[24px] bg-[#080A0D] border border-white/[0.08] group-hover:border-[#00D8F5]/30 transition-all duration-500 h-full flex flex-col justify-between shadow-xl group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),inset_0_0_25px_rgba(0,216,245,0.03)]">
        
        {/* Subtle hover gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D8F5]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]" />

        <div>
          {/* Top Bar: 5-Star Rating + Quote mark */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1 text-[#00D8F5]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-3xl font-serif text-[#00D8F5]/20 leading-none select-none">
              “
            </span>
          </div>

          {/* Testimonial Quote */}
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-normal">
            &ldquo;{text}&rdquo;
          </p>
        </div>

        {/* Client Author Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00D8F5]/20 to-[#4B63FF]/20 border border-white/10 flex items-center justify-center text-xs font-bold text-[#00D8F5] flex-shrink-0">
            {avatar}
          </div>
          <div>
            <p className="text-sm font-bold text-white group-hover:text-[#00D8F5] transition-colors">
              {name}
            </p>
            <p className="text-xs text-[#92969F] font-mono mt-0.5">
              Verified Client Partner
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
