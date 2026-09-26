'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

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

      {/* Video Container */}
      <div
        className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
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
    </div>
  );
}
