import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Painting } from '../data/paintings';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PaintingCardProps {
  painting: Painting;
  variant: 'featured' | 'small' | 'centered';
  revealDelay: number;
  onOpen: () => void;
}

export function PaintingCard({ painting, variant, revealDelay, onOpen }: PaintingCardProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useScrollReveal<HTMLElement>();

  return (
    <figure
      ref={ref}
      className={`painting painting--${variant} reveal`}
      style={{ '--reveal-delay': `${revealDelay}ms` } as CSSProperties}
    >
      <button
        type="button"
        className="painting-frame"
        style={{ aspectRatio: painting.aspectRatio }}
        onClick={onOpen}
        aria-label={`View ${painting.title} larger`}
      >
        {failed ? (
          <span className="painting-fallback">
            <span>{painting.title}</span>
          </span>
        ) : (
          <img
            src={painting.src}
            alt={painting.title}
            loading="lazy"
            className={loaded ? 'is-loaded' : undefined}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setFailed(true);
              if (import.meta.env.DEV) {
                console.error(`Painting image failed to load: ${painting.src}`);
              }
            }}
          />
        )}
      </button>
      <figcaption>
        <span className="painting-medium">{painting.medium}</span>
        <span className="painting-title">{painting.title}</span>
        <span className="painting-year">{painting.year}</span>
      </figcaption>
    </figure>
  );
}
