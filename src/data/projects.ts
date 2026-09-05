import { MOLLAVIE_URL } from './site';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  /** null = link not live yet; the card renders without a link (no dead hrefs) */
  url: string | null;
  /** null = no screenshot yet; the card falls back to a burgundy gradient */
  imageSrc: string | null;
  /**
   * `object-position` for the card image. Cards crop wide screenshots to a
   * narrow portrait slice, so shots whose subject sits off-centre need
   * steering. Omit to keep the default centre crop.
   */
  imagePosition?: string;
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
    id: 'mollyfinishart',
    name: 'MollyFinishArt',
    tagline:
      'AI art coaching app — chatbot art teacher, idea generator, project management, and community for artists.',
    url: 'https://play.google.com/store/apps/details?id=app.lovable.mollyfinishart&pcampaignid=web_share',
    imageSrc: '/projects/mollyfinishart.webp',
    // centre crop slices the headline mid-word; the left edge keeps the app's
    // sidebar nav intact
    imagePosition: 'left',
  },
  {
    id: 'mollycolor',
    name: 'MollyColor',
    tagline: 'A live colour tool for artists and designers.',
    url: 'https://play.google.com/store/apps/details?id=com.lovable.mollydragonepaletteapp&pcampaignid=web_share',
    imageSrc: '/projects/mollycolor.webp',
  },
  {
    id: 'developer-work',
    name: 'Developer work',
    tagline: "Mirjana's software development portfolio.",
    url: 'https://mirjana-cale-portfolio.vercel.app/index.html#projects',
    imageSrc: '/projects/developer.webp',
    // centre crop drops the portrait entirely and lands on body copy
    imagePosition: 'left',
  },
];
