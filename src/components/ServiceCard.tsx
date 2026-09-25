'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  index: number;
}

function ServiceLineIcon({ id }: { id: string }) {
  const iconProps = {
    className: 'w-5 h-5 stroke-current',
    fill: 'none',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (id) {
    case 'social-media-marketing':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'content-creation':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="m22 8-6 4 6 4V8Z" />
          <rect width="14" height="12" x="2" y="6" rx="2" />
          <circle cx="8" cy="12" r="2" />
        </svg>
      );
    case 'branding-design':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'performance-marketing':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <circle cx="19" cy="9" r="1.5" />
        </svg>
      );
    case 'website-development':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m10 10-2 2 2 2" />
          <path d="m14 10 2 2-2 2" />
          <path d="M2 8h20" />
        </svg>
      );
    case 'influencer-promotions':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
        </svg>
      );
  }
}

export default function ServiceCard({ id, title, description, icon, index }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const serviceNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      className="group relative h-full"
    >
      <Link href={`/services#${id}`} className="block h-full outline-none">
        <div className="relative p-7 rounded-[22px] bg-[#080A0D] border border-white/[0.08] group-hover:border-[#00D8F5]/35 transition-all duration-500 h-full overflow-hidden flex flex-col justify-between shadow-xl group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),inset_0_0_25px_rgba(0,216,245,0.04)]">
          
          {/* Subtle hover gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00D8F5]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Top: Number + Icon + Title + Description */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D8F5] bg-[#00D8F5]/10 px-2.5 py-1 rounded-full border border-[#00D8F5]/20">
                {serviceNumber}
              </span>
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/70 group-hover:text-[#00D8F5] group-hover:border-[#00D8F5]/30 transition-colors">
                <ServiceLineIcon id={id} />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5 group-hover:text-[#00D8F5] transition-colors duration-300">
              {title}
            </h3>

            <p className="text-sm text-[#92969F] leading-relaxed mb-6 font-normal">
              {description}
            </p>
          </div>

          {/* Bottom: Visual Image with Circular Arrow Button */}
          <div>
            <div className="relative aspect-[16/9] rounded-[16px] overflow-hidden bg-black/40 border border-white/[0.06] mb-4">
              <Image
                src={icon}
                alt={title}
                fill
                className="object-cover opacity-75 group-hover:opacity-95 group-hover:scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom-right Circular Arrow Button */}
              <div className="absolute bottom-3 right-3">
                <div className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 group-hover:bg-[#00D8F5] group-hover:text-black group-hover:border-[#00D8F5] transition-all duration-300 shadow-md">
                  <svg
                    className="w-3.5 h-3.5 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-semibold text-white/70 group-hover:text-[#00D8F5] transition-colors inline-flex items-center gap-1.5">
                <span>Explore Service</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                Full Production
              </span>
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}
