import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  text?: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}

const DEFAULT_STATEMENT =
  'Tell us what you want to create. We’ll help turn it into something people remember.';

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text = DEFAULT_STATEMENT,
  speed = 28,
  startDelay = 900,
  className = '',
}) => {
  const { displayed, done } = useTypewriter({
    text,
    speed,
    startDelay,
  });

  return (
    <p
      className={`text-[14px] sm:text-[16px] text-white/55 leading-relaxed max-w-[560px] font-normal min-h-[3rem] sm:min-h-[2.5rem] ${className}`}
    >
      <span>{displayed}</span>
      {!done && (
        <span
          className="inline-block w-[1.5px] h-[1em] bg-white ml-[3px] align-middle animate-blink"
          aria-hidden="true"
        />
      )}
    </p>
  );
};

export default TypewriterText;
