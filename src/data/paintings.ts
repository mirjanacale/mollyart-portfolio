const MOLLAVIE_ARTWORK = 'https://mollaviart-f52cde6730c6.herokuapp.com/artwork';

export interface Painting {
  id: string;
  title: string;
  year: number;
  medium: string;
  /** Dimensions of the physical work, shown beside the medium in the lightbox */
  size: string;
  /** One line about the work, shown under the year in the lightbox */
  description: string;
  /** Grid-size image (~800px, WebP) */
  src: string;
  /** Full-quality image for the lightbox */
  fullSrc: string;
  /** width / height of the source image. Records the work's proportions; the
      gallery tiles are square and contain the image, so it drives no layout. */
  aspectRatio: string;
  mollavieUrl?: string;
  /** Hangs on the rotating hero wall. Exactly five works are marked. */
  featuredInHero?: boolean;
}

// PLACEHOLDER COPY: every `size` and `description` below is a stand-in for
// Mirjana to replace. Sizes are proportioned to each image's aspect ratio so
// the layout reads correctly, but none of them are measured.

// Adding a painting: drop grid + full images into public/paintings/ and add
// one entry here. Order below is the order on the wall; every painting gets an
// identically sized tile, so position carries no emphasis.
export const paintings: Painting[] = [
  {
    id: 'becoming',
    title: 'Becoming',
    year: 2025,
    medium: 'Acrylic on canvas',
    size: '36 × 30 in',
    description: 'A figure caught mid-turn, halfway out of the colour behind her.',
    src: '/paintings/becoming.webp',
    fullSrc: '/paintings/becoming-full.jpg',
    aspectRatio: '1600 / 1333',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/8/`,
    featuredInHero: true,
  },
  {
    id: 'the-truth',
    title: 'The Truth',
    year: 2025,
    medium: 'Acrylic on canvas',
    size: '24 × 32 in',
    description: 'Painted in one sitting, then left alone.',
    src: '/paintings/the-truth.webp',
    fullSrc: '/paintings/the-truth-full.jpg',
    aspectRatio: '3 / 4',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/11/`,
    featuredInHero: true,
  },
  {
    id: 'green-muse',
    title: 'Green Muse',
    year: 2025,
    medium: 'Acrylic on canvas',
    size: '36 × 30 in',
    description: 'The green kept moving until it settled where it wanted to be.',
    src: '/paintings/green-muse.webp',
    fullSrc: '/paintings/green-muse-full.jpg',
    aspectRatio: '1600 / 1333',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/14/`,
    featuredInHero: true,
  },
  {
    id: 'blue-whisper',
    title: 'Blue Whisper',
    year: 2025,
    medium: 'Acrylic on canvas',
    size: '30 × 25 in',
    description: 'Quieter than the rest of the series, and deliberately so.',
    src: '/paintings/blue-whisper.webp',
    fullSrc: '/paintings/blue-whisper-full.jpg',
    aspectRatio: '1600 / 1333',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/13/`,
  },
  {
    id: 'one',
    title: 'One',
    year: 2025,
    medium: 'Acrylic on canvas',
    size: '30 × 40 in',
    description: 'A single figure, painted without a reference photo.',
    src: '/paintings/one.webp',
    fullSrc: '/paintings/one-full.jpg',
    aspectRatio: '3 / 4',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/10/`,
    featuredInHero: true,
  },
  {
    id: 'freedom',
    title: 'Freedom',
    year: 2025,
    medium: 'Acrylic on canvas',
    size: '32 × 24 in',
    description: 'The last canvas of the year, and the loosest.',
    src: '/paintings/freedom.webp',
    fullSrc: '/paintings/freedom-full.jpg',
    aspectRatio: '1600 / 1204',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/12/`,
    featuredInHero: true,
  },
  {
    id: 'eyes-of-the-wild',
    title: 'Eyes of the Wild',
    year: 2025,
    medium: 'Acrylic on canvas',
    size: '36 × 24 in',
    description: 'Started as a study of an animal and ended somewhere else.',
    src: '/paintings/eyes-of-the-wild.webp',
    fullSrc: '/paintings/eyes-of-the-wild-full.jpg',
    aspectRatio: '3 / 2',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/7/`,
  },
];

/** The five works on the hero rotunda, in wall order. */
export const heroPaintings: Painting[] = paintings.filter((p) => p.featuredInHero);
