import { useCallback, useEffect, useRef, useState } from 'react';

interface AutoRotateOptions {
  /** Idle rotation speed. 9°/s is roughly one turn every 40 seconds. */
  degreesPerSecond?: number;
  /** How long after an interaction ends before rotation picks back up. */
  resumeDelayMs?: number;
}

interface AutoRotate {
  /** True when the visitor asked for reduced motion; the caller renders a static fallback. */
  reducedMotion: boolean;
  /** Stop rotating now (pointer down, keyboard focus). */
  pause: () => void;
  /** Rotate again after `resumeDelayMs`. */
  resume: () => void;
}

/**
 * Drives a slow idle rotation, calling `onTick` with the degrees elapsed since
 * the last frame. With prefers-reduced-motion the loop never starts and
 * `reducedMotion` is returned so the caller can render a static layout instead
 * — the same check `useScrollReveal` makes, and the CSS backs it up too.
 */
export function useAutoRotate(
  onTick: (deltaDegrees: number) => void,
  { degreesPerSecond = 9, resumeDelayMs = 3000 }: AutoRotateOptions = {},
): AutoRotate {
  const [reducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | undefined>(undefined);

  // Held in a ref so a re-render of the caller doesn't tear down the loop.
  const onTickRef = useRef(onTick);
  onTickRef.current = onTick;

  const pause = useCallback(() => {
    window.clearTimeout(resumeTimer.current);
    setPaused(true);
  }, []);

  const resume = useCallback(() => {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), resumeDelayMs);
  }, [resumeDelayMs]);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  useEffect(() => {
    if (reducedMotion || paused) return;

    let frame = 0;
    let last = performance.now();

    const step = (now: number) => {
      // Clamped so a backgrounded tab doesn't lurch forward on return.
      const elapsed = Math.min(now - last, 100);
      last = now;
      onTickRef.current((elapsed / 1000) * degreesPerSecond);
      frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [reducedMotion, paused, degreesPerSecond]);

  return { reducedMotion, pause, resume };
}
