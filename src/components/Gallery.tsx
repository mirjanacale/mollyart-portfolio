import { paintings } from '../data/paintings';
import { PaintingCard } from './PaintingCard';

interface GalleryProps {
  onOpen: (index: number) => void;
}

// The wall repeats a 5-painting group: one featured work beside a smaller one,
// then a row of three. A lone painting starting the final row gets centered.
function variantFor(index: number, lastIndex: number): 'featured' | 'small' | 'centered' {
  if (index % 5 === 0) return 'featured';
  if (index === lastIndex && index % 5 === 2) return 'centered';
  return 'small';
}

export function Gallery({ onOpen }: GalleryProps) {
  const lastIndex = paintings.length - 1;

  return (
    <section id="paintings" className="gallery">
      <div className="section-heading">
        <span className="eyebrow">Original works</span>
        <h2>Paintings</h2>
      </div>
      <div className="gallery-wall">
        {paintings.map((painting, i) => (
          <PaintingCard
            key={painting.id}
            painting={painting}
            variant={variantFor(i, lastIndex)}
            revealDelay={(i % 5) * 80}
            onOpen={() => onOpen(i)}
          />
        ))}
      </div>
    </section>
  );
}
