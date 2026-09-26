import React, { useState } from 'react';
import { Play, Eye } from 'lucide-react';
import { YouTubeIcon } from './icons/SocialIcons';
import type { YouTubeChannel } from '@/data/youtubeChannels';

interface YouTubeCardProps {
  channel: YouTubeChannel;
  index?: number;
  onPlay?: (channel: YouTubeChannel) => void;
  className?: string;
}

export default function YouTubeCard({
  channel,
  index = 0,
  onPlay,
  className = '',
}: YouTubeCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={() => onPlay && onPlay(channel)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer glass-card transition-all duration-500 hover:-translate-y-1.5 ${className}`}
    >
      {/* Aspect Ratio Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0D111A]">
        {/* Thumbnail with graceful fallback */}
        {!imageError && channel.thumbnail ? (
          <img
            src={channel.thumbnail}
            alt={channel.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#080C14]">
            <YouTubeIcon className="w-12 h-12 text-[#00F0FF]/40" />
          </div>
        )}

        {/* Subtle Dark Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-[#04060A]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-white">
            <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
            <span>{channel.badge || 'YouTube'}</span>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#00F0FF]/15 backdrop-blur-md border border-[#00F0FF]/30 text-[10px] font-mono font-bold text-[#00F0FF]">
            <Eye className="w-3 h-3" />
            <span>{channel.totalViews}</span>
          </div>
        </div>

        {/* Centered Play Button (Hover Animation) */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00F0FF] group-hover:text-black group-hover:border-[#00F0FF] shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Bottom Channel Info */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <div className="text-[11px] font-mono text-[#00F0FF] tracking-wider uppercase">
            {channel.category}
          </div>
          <div className="flex items-baseline justify-between gap-2 mt-0.5">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
              {channel.name}
            </h3>
            {channel.subscribers && (
              <span className="text-[10px] font-mono text-white/50">
                {channel.subscribers} Subs
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
