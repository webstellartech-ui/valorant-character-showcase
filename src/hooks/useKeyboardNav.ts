import { useEffect, useRef } from 'react';

export const useKeyboardNav = (
  onNext: () => void,
  onPrev: () => void,
  onEscape: () => void,
  disabled: boolean = false
) => {
  const lastCall = useRef(0);
  const COOLDOWN = 300; // ms

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;

      const now = Date.now();
      if (now - lastCall.current < COOLDOWN && e.key !== 'Escape') return;

      if (e.key === 'ArrowRight') {
        lastCall.current = now;
        onNext();
      } else if (e.key === 'ArrowLeft') {
        lastCall.current = now;
        onPrev();
      } else if (e.key === 'Escape') {
        onEscape();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onEscape, disabled]);
};