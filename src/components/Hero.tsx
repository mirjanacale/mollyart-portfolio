import { heroPaintings, paintings } from '../data/paintings';
import { GalleryWall } from './GalleryWall';

interface HeroProps {
  /** Opens the lightbox at a painting's index in the full collection. */
  onOpen: (index: number) => void;
}

/** No title card: the rotunda is the hero, with only the drag hint and a way down. */
export function Hero({ onOpen }: HeroProps) {
  return (
    <section className="hero">
      <GalleryWall
        paintings={heroPaintings}
        onOpen={(painting) => {
          const index = paintings.findIndex((p) => p.id === painting.id);
          if (index >= 0) onOpen(index);
        }}
      />

      <a className="hero-cta" href="#paintings">
        Gallery
      </a>
    </section>
  );
}
