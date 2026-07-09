import { MOLLAVIE_URL } from './site';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  /** null = link not live yet; the card renders without a link (no dead hrefs) */
  url: string | null;
  /** null = no screenshot yet; the card falls back to a burgundy gradient */
  imageSrc: string | null;
}

export const projects: Project[] = [
  {
    id: 'mollavie',
    name: 'Mollavie',
    tagline: "Molly's online art shop — original paintings, shipped worldwide.",
    url: MOLLAVIE_URL,
    imageSrc: '/projects/mollavie.webp',
  },
  {
    // TODO(Mirjana): app store / web link + screenshot + real one-liner
    id: 'mollyfinishart',
    name: 'MollyFinishArt',
    tagline: 'A creative app by Molly.',
    url: null,
    imageSrc: null,
  },
  {
    // TODO(Mirjana): app store / web link + screenshot + real one-liner
    id: 'mollycolor',
    name: 'MollyColor',
    tagline: 'A colouring app by Molly.',
    url: null,
    imageSrc: null,
  },
  {
    // TODO(Mirjana): link to the developer portfolio + screenshot
    id: 'developer-work',
    name: 'Developer work',
    tagline: "Mirjana's software development portfolio.",
    url: null,
    imageSrc: null,
  },
];
