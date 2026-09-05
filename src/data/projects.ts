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
   * `object-position` for the card image. Cards show the image's full height
   * and crop its width, so this steers which horizontal slice is kept. Omit
   * where the image is already cropped to the intended framing.
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
    // full-width shot: keep the left edge so the sidebar nav sits above the
    // title and the marketing headline stays out of frame
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
  },
];
