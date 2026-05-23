'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
  year: string;
  videoUrl: string;
}

interface VideoCarouselProps {
  items: readonly PortfolioItem[] | PortfolioItem[];
}

export default function VideoCarousel({ items }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Playback Progress States for Carousel Video
  const [activeTime, setActiveTime] = useState(0);
  const [activeDuration, setActiveDuration] = useState(1);

  // Fullscreen Modal Video Player States
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const activeVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<any>(null);

  const activeItem = items[currentIndex];

  // Reset index if items list changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [items.length]);

  // Reset progress tracker on index change
  useEffect(() => {
    setActiveTime(0);
    setActiveDuration(1);
  }, [currentIndex]);

  // Handle Play/Pause on Hover, Modal Open, or Slide Change
  useEffect(() => {
    const video = activeVideoRef.current;
    if (!video) return;

    video.muted = true;

    if (isModalOpen || isHovered) {
      video.pause();
    } else {
      video.play().catch((err) => {
        console.log('Carousel autoplay prevented:', err);
      });
    }
  }, [currentIndex, isHovered, isModalOpen, items]);

  // Prevent background scroll when fullscreen modal is active
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

  // Auto-hide controls in modal player
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

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Carousel navigation
  const handlePrev = () => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // Time progress handlers for the carousel video
  const handleActiveTimeUpdate = () => {
    if (activeVideoRef.current) {
      setActiveTime(activeVideoRef.current.currentTime);
    }
  };

  const handleActiveLoadedMetadata = () => {
    if (activeVideoRef.current) {
      setActiveDuration(activeVideoRef.current.duration || 1);
    }
  };

  // Fullscreen player event handlers
  const handlePlayPause = () => {
    if (!modalVideoRef.current) return;
    if (isPlaying) {
      modalVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      modalVideoRef.current.play().catch((err) => console.log('Modal playback error:', err));
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsPlaying(true);
  };

  if (items.length === 0 || !activeItem) {
    return (
      <div className="text-center py-20">
        <p className="text-white/30 text-lg">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-0">
      {/* Main Carousel Card */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-surface/30 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-md glow-accent p-6 md:p-8 transition-all duration-500 hover:border-white/10"
      >
        {/* Glow behind card */}
        <div
          className="absolute -top-24 -left-24 w-[350px] h-[350px] rounded-full blur-[100px] opacity-10 transition-colors duration-700 pointer-events-none"
          style={{ backgroundColor: activeItem.color }}
        />

        {/* Video-Playback Synced Progress Indicator */}
        {items.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-100 ease-out"
              style={{
                width: `${(activeTime / activeDuration) * 100}%`,
                backgroundImage: `linear-gradient(90deg, var(--color-accent), ${activeItem.color})`
              }}
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center gap-8 min-h-[350px] md:min-h-[480px]">
          {/* Left: Portrait Aspect Ratio Video Viewport with Cover Fitting */}
          <div className="relative w-[240px] sm:w-[280px] md:w-[270px] aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-white/5 group shadow-inner mx-auto flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full flex items-center justify-center"
              >
                <video
                  key={activeItem.id}
                  ref={activeVideoRef}
                  src={activeItem.videoUrl}
                  autoPlay
                  muted
                  playsInline
                  onTimeUpdate={handleActiveTimeUpdate}
                  onLoadedMetadata={handleActiveLoadedMetadata}
                  onEnded={handleNext} // Move to next video automatically when ended
                  onClick={handleOpenModal}
                  className="w-full h-full object-cover cursor-pointer hover:scale-[1.01] transition-transform duration-500"
                />
              </motion.div>
            </AnimatePresence>

            {/* Centered play chevron on hover */}
            <div
              onClick={handleOpenModal}
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer z-10"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md glow-accent"
                style={{ backgroundColor: `${activeItem.color}33`, border: `1px solid ${activeItem.color}88` }}
              >
                <svg className="w-6 h-6 text-white ml-1 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="flex-1 flex flex-col justify-between h-full w-full py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-1">
                    {activeItem.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    {activeItem.title}
                  </h3>
                </div>

                <p className="text-base text-white/60 leading-relaxed font-normal">
                  {activeItem.description}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-white/40 mt-2">
                  <span>Year: {activeItem.year}</span>
                  <span>•</span>
                  <span>{isHovered ? 'Paused' : 'Playing'}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation and fullscreen triggers */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/5">
              <button
                onClick={handleOpenModal}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
                Watch Fullscreen
              </button>

              {items.length > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-accent transition-all duration-300"
                    aria-label="Previous slide"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <span className="text-xs font-mono text-white/40">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                  </span>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-accent transition-all duration-300"
                    aria-label="Next slide"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Player Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-200 z-50 bg-white/5 p-3 rounded-full hover:bg-white/10"
              aria-label="Close fullscreen modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video container box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              ref={playerContainerRef}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 glow-accent shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              onMouseMove={resetControlsTimeout}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              <video
                ref={modalVideoRef}
                src={activeItem.videoUrl}
                autoPlay
                playsInline
                onClick={handlePlayPause}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleVideoEnded}
                className="w-full h-full object-contain cursor-pointer"
              />

              {/* Large play button */}
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

              {/* Media controls */}
              <AnimatePresence>
                {showControls && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-4 pointer-events-auto"
                  >
                    {/* Scrub bar */}
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
                          aria-label="Scrub timeline"
                        />
                      </div>
                      <span className="text-xs font-mono text-white/70 select-none">
                        {formatTime(duration)}
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <button
                          onClick={handlePlayPause}
                          className="text-white hover:text-accent transition-colors duration-200"
                          aria-label={isPlaying ? 'Pause' : 'Play'}
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

                        <div>
                          <p className="text-xs text-white/40 font-mono tracking-wider uppercase">{activeItem.category}</p>
                          <h4 className="text-sm font-bold text-white leading-tight">{activeItem.title}</h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Volume controls */}
                        <div className="flex items-center gap-2 group/volume">
                          <button
                            onClick={handleMuteToggle}
                            className="text-white/80 hover:text-accent transition-colors duration-200"
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
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
                            aria-label="Volume adjustment"
                          />
                        </div>

                        {/* Fullscreen */}
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
    </div>
  );
}
