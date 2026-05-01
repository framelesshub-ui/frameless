'use client';

import { useEffect } from 'react';
import AnimatedButton from '@/components/AnimatedButton';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-4xl mb-8">
        ⚠
      </div>
      <h2 className="text-3xl font-black tracking-tight mb-4">Something went wrong</h2>
      <p className="text-white/50 max-w-md mb-8">
        An unexpected error occurred. Please try again, or contact us if the problem persists.
      </p>
      <button
        onClick={reset}
        className="px-7 py-3.5 text-sm font-semibold bg-accent text-background rounded-full hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300"
      >
        Try Again
      </button>
    </div>
  );
}
