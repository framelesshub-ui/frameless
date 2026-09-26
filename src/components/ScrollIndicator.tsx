import React from 'react';

interface ScrollIndicatorProps {
  className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-[6] hidden sm:flex flex-col items-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div className="w-[22px] h-[36px] rounded-full border border-white/30 flex justify-center pt-1.5 opacity-70">
        <span className="w-1 h-2 rounded-full bg-[#00d8f5] animate-scroll-dot" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
