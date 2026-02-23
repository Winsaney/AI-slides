import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

interface PresentationProps {
  children: ReactNode[];
}

export const Presentation: React.FC<PresentationProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controlsTimeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    // Initialize the timeout
    handleMouseMove();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div ref={containerRef} className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans">
      {/* Slides */}
      {React.Children.map(children, (child, index) => {
        const isCurrent = index === currentSlide;
        const isPast = index < currentSlide;
        const isFuture = index > currentSlide;

        let transform = 'scale(1)';
        let opacity = 1;

        if (isPast) {
          transform = 'scale(0.95)';
          opacity = 0;
        } else if (isFuture) {
          transform = 'scale(1.05)';
          opacity = 0;
        }

        return (
          <div
            className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out"
            style={{
              opacity,
              transform,
              pointerEvents: isCurrent ? 'auto' : 'none',
              zIndex: isCurrent ? 10 : 0,
            }}
          >
            {child}
          </div>
        );
      })}

      {/* Top Right Keyboard Hint */}
      <div
        className={`absolute top-[4%] right-[5.2%] z-50 text-[11px] text-white/40 tracking-wide transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ← → Navigate · F Fullscreen
      </div>

      {/* Bottom Navigation Bar */}
      <div
        className={`absolute bottom-[4%] left-[5.2%] right-[5.2%] z-50 flex items-center justify-between transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Left: Slide Counter */}
        <div className="text-[13px] text-white/50 tabular-nums font-medium tracking-widest w-24">
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </div>

        {/* Center: Progress Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <div
              key={idx}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-[24px] bg-white/90' : 'w-[6px] bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2 w-24 justify-end">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-1.5 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-md transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/50"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="p-1.5 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-md transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/50"
          >
            <ChevronRight size={18} />
          </button>
          <div className="w-[1px] h-4 bg-white/20 mx-1" />
          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-md transition-colors"
          >
            <Maximize size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
