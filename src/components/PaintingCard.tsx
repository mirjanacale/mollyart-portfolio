import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Painting } from '../data/paintings';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PaintingCardProps {
  painting: Painting;
  revealDelay: number;
  onOpen: () => void;
}

export function PaintingCard({ painting, revealDelay, onOpen }: PaintingCardProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useScrollReveal<HTMLElement>();

  return (
    <figure
      ref={ref}
      className="painting reveal"
      style={{ '--reveal-delay': `${revealDelay}ms` } as CSSProperties}
    >
      {/* No aspect-ratio here: the frame is a fixed square and the painting is
          contained inside it, matted by the frame's parchment ground — the same
          treatment the hero rotunda gives its planes. */}
      <button
        type="button"
        className="painting-frame"
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
