import { paintings } from '../data/paintings';
import { PaintingCard } from './PaintingCard';

interface GalleryProps {
  onOpen: (index: number) => void;
}

export function Gallery({ onOpen }: GalleryProps) {
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
            // Staggered across a row; three columns is the widest the grid gets.
            revealDelay={(i % 3) * 80}
            onOpen={() => onOpen(i)}
          />
        ))}
      </div>
    </section>
  );
}
