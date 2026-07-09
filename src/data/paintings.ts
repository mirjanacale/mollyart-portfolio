const MOLLAVIE_ARTWORK = 'https://mollaviart-f52cde6730c6.herokuapp.com/artwork';

export interface Painting {
  id: string;
  title: string;
  year: number;
  medium: string;
  /** Grid-size image (~800px, WebP) */
  src: string;
  /** Full-quality image for the lightbox */
  fullSrc: string;
  /** width / height, used to reserve space and avoid layout shift */
  aspectRatio: string;
  mollavieUrl?: string;
}

// Adding a painting: drop grid + full images into public/paintings/ and add
// one entry here. Order below is the order on the wall (every 5th painting,
// starting with the first, hangs larger).
export const paintings: Painting[] = [
  {
    id: 'becoming',
    title: 'Becoming',
    year: 2025,
    medium: 'Acrylic on canvas',
    src: '/paintings/becoming.webp',
    fullSrc: '/paintings/becoming-full.jpg',
    aspectRatio: '1600 / 1333',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/8/`,
  },
  {
    id: 'the-truth',
    title: 'The Truth',
    year: 2025,
    medium: 'Acrylic on canvas',
    src: '/paintings/the-truth.webp',
    fullSrc: '/paintings/the-truth-full.jpg',
    aspectRatio: '3 / 4',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/11/`,
  },
  {
    id: 'green-muse',
    title: 'Green Muse',
    year: 2025,
    medium: 'Acrylic on canvas',
    src: '/paintings/green-muse.webp',
    fullSrc: '/paintings/green-muse-full.jpg',
    aspectRatio: '1600 / 1333',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/14/`,
  },
  {
    id: 'blue-whisper',
    title: 'Blue Whisper',
    year: 2025,
    medium: 'Acrylic on canvas',
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
    src: '/paintings/one.webp',
    fullSrc: '/paintings/one-full.jpg',
    aspectRatio: '3 / 4',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/10/`,
  },
  {
    id: 'freedom',
    title: 'Freedom',
    year: 2025,
    medium: 'Acrylic on canvas',
    src: '/paintings/freedom.webp',
    fullSrc: '/paintings/freedom-full.jpg',
    aspectRatio: '1600 / 1204',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/12/`,
  },
  {
    id: 'eyes-of-the-wild',
    title: 'Eyes of the Wild',
    year: 2025,
    medium: 'Acrylic on canvas',
    src: '/paintings/eyes-of-the-wild.webp',
    fullSrc: '/paintings/eyes-of-the-wild-full.jpg',
    aspectRatio: '3 / 2',
    mollavieUrl: `${MOLLAVIE_ARTWORK}/7/`,
  },
];
