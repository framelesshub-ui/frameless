'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  color: string;
  year: string;
  index: number;
  videoUrl: string;
}

export default function PortfolioCard({ title, category, description, color, year, index, videoUrl }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileDetail, setShowMobileDetail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal Video Player States
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<any>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Controls visibility timeout
  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    resetControlsTimeout();
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying]);

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Format time (e.g. 1:23)
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Video Player Control Handlers
  const handlePlayPause = () => {
    if (!modalVideoRef.current) return;
    if (isPlaying) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      modalVideoRef.current.play().catch((err) => console.log('Playback error:', err));
      setIsPlaying(true);
    }
    resetControlsTimeout();
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = time;
    }
    resetControlsTimeout();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setIsMuted(vol === 0);
    if (modalVideoRef.current) {
      modalVideoRef.current.volume = vol;
      modalVideoRef.current.muted = vol === 0;
    }
    resetControlsTimeout();
  };

  const handleMuteToggle = () => {
    if (!modalVideoRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    modalVideoRef.current.muted = nextMuted;
    resetControlsTimeout();
  };

  const handleFullscreenToggle = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch((err) => {
        console.error('Error enabling fullscreen:', err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
    resetControlsTimeout();
  };

  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (modalVideoRef.current) {
      setDuration(modalVideoRef.current.duration);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
    setIsPlaying(true); // Autoplay on open
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        className="group relative cursor-pointer outline-none"
        role="button"
        tabIndex={0}
        aria-label={`${title} — ${category}. Click to play video.`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-white/5 group-hover:border-accent/35 transition-all duration-500 shadow-lg">
          
          {/* Default Background Canvas (Geometric Pattern & Color Glow) */}
          <div
            className="absolute inset-0 opacity-10 group-hover:opacity-5 transition-opacity duration-500 z-0"
            style={{ backgroundColor: color }}
          />
          <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

          {/* Floating shapes (visible when not hovered) */}
          <AnimatePresence>
            {!isHovered && (
              <>
                <motion.div
                  initial={{ opacity: 0.2, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl border-2 z-0"
                  style={{ borderColor: color }}
                />
                <motion.div
                  initial={{ opacity: 0.1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-1/3 left-1/3 w-16 h-16 rounded-full z-0"
                  style={{ backgroundColor: color }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Muted Hover Video Preview */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-10 w-full h-full"
              >
                <div className="absolute inset-0 bg-black/20 z-10" />
                <video
                  src={videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Play button overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md glow-accent"
                  style={{ backgroundColor: `${color}33`, border: `1px solid ${color}88` }}
                  aria-label={`Play video for ${title}`}
                >
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold text-accent tracking-wider uppercase mb-1">{category}</p>
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">{title}</h3>
              </div>
              <span className="text-xs text-white/40 font-mono">{year}</span>
            </div>
          </div>
        </div>

        {/* Description — visible on desktop hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 text-sm text-white/50 px-1 hidden md:block"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Mobile-only: always-visible brief description */}
        <p className="mt-2 text-xs text-white/40 px-1 md:hidden line-clamp-2">{description}</p>
      </motion.div>

      {/* Video Modal Player (Immersive Custom Player) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button outside player (Top Right) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-200 z-50 bg-white/5 p-3 rounded-full hover:bg-white/10"
              aria-label="Close video player"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              ref={playerContainerRef}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 glow-accent shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking player
              onMouseMove={resetControlsTimeout}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              <video
                ref={modalVideoRef}
                src={videoUrl}
                autoPlay
                playsInline
                onClick={handlePlayPause}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleVideoEnded}
                className="w-full h-full object-contain cursor-pointer"
              />

              {/* Centered Large Play/Pause Toggle (Overlay) */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none"
                  >
                    <button
                      onClick={handlePlayPause}
                      className="w-20 h-20 rounded-full flex items-center justify-center bg-accent text-background glow-accent cursor-pointer pointer-events-auto hover:scale-105 transition-transform"
                      aria-label="Play video"
                    >
                      <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Cinematic Bottom Controller (Glassmorphic) */}
              <AnimatePresence>
                {showControls && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-4 pointer-events-auto"
                  >
                    {/* Timeline slider */}
                    <div className="flex items-center gap-4 w-full">
                      <span className="text-xs font-mono text-white/70 select-none">
                        {formatTime(currentTime)}
                      </span>
                      <div className="relative flex-1 group">
                        <input
                          type="range"
                          min={0}
                          max={duration || 100}
                          value={currentTime}
                          onChange={handleSeekChange}
                          className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-white/20 accent-accent hover:accent-accent-violet transition-all outline-none"
                          style={{
                            background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${(currentTime / (duration || 1)) * 100}%, rgba(255, 255, 255, 0.2) ${(currentTime / (duration || 1)) * 100}%, rgba(255, 255, 255, 0.2) 100%)`
                          }}
                          aria-label="Seek progress bar"
                        />
                      </div>
                      <span className="text-xs font-mono text-white/70 select-none">
                        {formatTime(duration)}
                      </span>
                    </div>

                    {/* Controller Action Bar */}
                    <div className="flex items-center justify-between">
                      {/* Left: Play/Pause and Title */}
                      <div className="flex items-center gap-6">
                        <button
                          onClick={handlePlayPause}
                          className="text-white hover:text-accent transition-colors duration-200"
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          {isPlaying ? (
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </button>

                        <div className="hidden sm:block">
                          <p className="text-xs text-white/40 font-mono tracking-wider uppercase">{category}</p>
                          <h4 className="text-sm font-bold text-white leading-tight">{title}</h4>
                        </div>
                      </div>

                      {/* Right: Volume, Fullscreen, Close */}
                      <div className="flex items-center gap-4">
                        {/* Volume controls */}
                        <div className="flex items-center gap-2 group/volume">
                          <button
                            onClick={handleMuteToggle}
                            className="text-white/80 hover:text-accent transition-colors duration-200"
                            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                          >
                            {isMuted || volume === 0 ? (
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4.34 2.93L2.93 4.34 7.59 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.37.88-2.18 1.11v2.06c1.35-.32 2.58-.95 3.61-1.81l2.45 2.45 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l1.82-1.82 2.18 2.18v4.81z" />
                              </svg>
                            ) : volume < 0.5 ? (
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L9 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                              </svg>
                            )}
                          </button>
                          <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.05}
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-0 group-hover/volume:w-20 transition-all duration-300 h-1 rounded-lg appearance-none cursor-pointer bg-white/20 accent-accent"
                            aria-label="Volume slider"
                          />
                        </div>

                        {/* Fullscreen toggle */}
                        <button
                          onClick={handleFullscreenToggle}
                          className="text-white/80 hover:text-accent transition-colors duration-200"
                          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                        >
                          {isFullscreen ? (
                            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9L4 4m0 0l5 0m-5 0l0 5m11 0l5-5m0 0l-5 0m5 0l0 5M9 15l-5 5m0 0l5 0m-5 0l0-5m11 0l5 5m0 0l-5 0m5 0l0-5" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
