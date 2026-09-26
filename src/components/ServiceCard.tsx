'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Palette,
  Sparkles,
  Video,
  Share2,
  TrendingUp,
  Camera,
  Film,
  ArrowUpRight,
} from 'lucide-react';
import { YouTubeIcon } from './icons/SocialIcons';
import type { Service } from '@/data/services';


const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Palette,
  Sparkles,
  Video,
  Youtube: YouTubeIcon,
  Share2,
  TrendingUp,
  Camera,
  Film,
};


interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || Sparkles;

  return (
    <Link
      href={`/services#${service.id}`}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-card transition-all duration-300 hover:-translate-y-2 hover:border-[#00F0FF]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(0,240,255,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
    >
      <div>
        {/* Top Bar: Icon + Number */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80 group-hover:text-[#00F0FF] group-hover:border-[#00F0FF]/30 group-hover:bg-[#00F0FF]/10 transition-all duration-300">
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </div>

          <span className="text-xs font-mono font-bold tracking-widest text-[#94A3B8]/60 group-hover:text-[#00F0FF] transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors mb-3">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
          {service.shortDescription}
        </p>
      </div>

      {/* Bottom Row: Tag + Arrow */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8]">
          {service.tag}
        </span>

        <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#94A3B8] group-hover:text-black group-hover:bg-[#00F0FF] group-hover:border-[#00F0FF] transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
