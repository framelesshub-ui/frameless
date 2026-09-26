/**
 * Normalized scroll animation utilities for Frame Hub 3D & UI systems.
 * All functions are deterministic and reversible:
 * Scrolling forward progresses t from 0 -> 1, scrolling backward reverses it.
 */

/**
 * Calculates clamped normalized progress [0, 1] of an active window [start, end]
 * within a global progress [0, 1].
 */
export function getSectionProgress(
  globalProgress: number,
  start: number,
  end: number
): number {
  if (end <= start) return 0;
  const p = (globalProgress - start) / (end - start);
  return Math.max(0, Math.min(1, p));
}

/**
 * Standard Hermite smoothstep interpolation [0, 1]
 */
export function smoothstep(min: number, max: number, value: number): number {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

/**
 * Linear interpolation
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * Math.max(0, Math.min(1, t));
}

/**
 * Smooth exponential damp toward a target, frame-rate independent
 */
export function damp(
  current: number,
  target: number,
  lambda: number,
  delta: number
): number {
  return lerp(current, target, 1 - Math.exp(-lambda * delta));
}

/**
 * Cubic ease in-out
 */
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
