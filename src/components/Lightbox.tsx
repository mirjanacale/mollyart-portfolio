import { useEffect, useRef, useState } from 'react';
import type { Painting } from '../data/paintings';
import { MOLLAVIE_URL } from '../data/site';

interface LightboxProps {
  paintings: Painting[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const SWIPE_THRESHOLD = 50;

export function Lightbox({ paintings, index, onClose, onNavigate }: LightboxProps) {
  const painting = paintings[index];
  const [fullFailed, setFullFailed] = useState<Record<string, boolean>>({});
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goPrev = () => onNavigate((index - 1 + paintings.length) % paintings.length);
  const goNext = () => onNavigate((index + 1) % paintings.length);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const showFullFailed = fullFailed[painting.id] === true;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${painting.title}, ${painting.year}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (delta > SWIPE_THRESHOLD) goPrev();
        else if (delta < -SWIPE_THRESHOLD) goNext();
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>

      <button type="button" className="lightbox-arrow lightbox-arrow--prev" onClick={goPrev} aria-label="Previous painting">
        &#8249;
      </button>

      <figure className="lightbox-figure">
        <img
          key={painting.id}
          src={showFullFailed ? painting.src : painting.fullSrc}
          alt={painting.title}
          onError={() => {
            if (!showFullFailed) {
              setFullFailed((prev) => ({ ...prev, [painting.id]: true }));
            }
          }}
        />
        <figcaption>
          <div className="lightbox-caption-text">
            <span className="lightbox-title">{painting.title}</span>
            <span className="lightbox-year">{painting.year}</span>
            {showFullFailed && (
              <span className="lightbox-note">Image unavailable at full size</span>
            )}
          </div>
          <a
            className="buy-button"
            href={painting.mollavieUrl ?? MOLLAVIE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on Mollavie
          </a>
        </figcaption>
      </figure>

      <button type="button" className="lightbox-arrow lightbox-arrow--next" onClick={goNext} aria-label="Next painting">
        &#8250;
      </button>
    </div>
  );
}
