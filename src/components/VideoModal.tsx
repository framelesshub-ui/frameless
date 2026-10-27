'use client';

import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { YouTubeIcon } from '@/components/icons/SocialIcons';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  title?: string;
  category?: string;
  posterSrc?: string;
  channelUrl?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  title,
  channelUrl,
}: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoSrc) return null;

  const isYouTube = videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Video Player'}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full text-[#A1A1AA] hover:text-white bg-white/5 hover:bg-white/10 transition-colors z-20 focus:outline-none"
        aria-label="Close video player"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Video Container & Platform Bar */}
      <div
        className="relative w-full max-w-5xl flex flex-col rounded-2xl overflow-hidden bg-[#080b12] border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full bg-black">
          {isYouTube ? (
            <iframe
              src={videoSrc}
              title={title || 'Frameless Hub Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <video
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {channelUrl && (
          <div className="px-5 py-3.5 bg-[#0a0e18] border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0047ff]" />
              <span className="text-xs font-mono text-white/70">
                Official Platform: <strong className="text-white">{title}</strong>
              </span>
            </div>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-red-600/20 hover:bg-red-600 text-white border border-red-500/40 transition-all hover:scale-105"
            >
              <YouTubeIcon className="w-3.5 h-3.5" />
              <span>Visit Official Channel</span>
              <ArrowUpRight className="w-3 h-3 text-white/80" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
