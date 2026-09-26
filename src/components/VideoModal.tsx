'use client';

import React, { useEffect, useRef } from 'react';
import { X, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  videoSrc?: string;
  posterSrc?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  title,
  category,
  videoSrc,
  posterSrc,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(false);

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

  if (!isOpen) return null;

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Container - Stop propagation on modal body */}
      <div
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-[#080C14] border border-[#00F0FF]/25 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(0,240,255,0.12)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0D111A]/80 backdrop-blur-md">
          <div className="flex flex-col">
            {category && (
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#00F0FF]">
                {category}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {videoSrc && (
              <button
                type="button"
                onClick={toggleMute}
                className="p-2 rounded-full text-[#94A3B8] hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#94A3B8] hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
              aria-label="Close video modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#00F0FF]">
                <Maximize2 className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium text-white mb-1">
                Preview Asset Incoming
              </p>
              <p className="text-xs text-[#94A3B8] max-w-sm">
                The actual high-definition video master for {title} will be synced here.
              </p>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 bg-[#080C14] border-t border-white/[0.06] flex items-center justify-between text-xs text-[#94A3B8] font-mono">
          <span>Frameless Hub Media Player</span>
          <span className="text-[11px] text-[#00F0FF]">ESC to close</span>
        </div>
      </div>
    </div>
  );
}
