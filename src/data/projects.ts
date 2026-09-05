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
    // TODO(Mirjana): screenshot
    id: 'mollyfinishart',
    name: 'MollyFinishArt',
    tagline:
      'AI art coaching app — chatbot art teacher, idea generator, project management, and community for artists.',
    url: 'https://play.google.com/store/apps/details?id=app.lovable.mollyfinishart&pcampaignid=web_share',
    imageSrc: null,
  },
  {
    // TODO(Mirjana): screenshot
    id: 'mollycolor',
    name: 'MollyColor',
    tagline: 'A live colour tool for artists and designers.',
    url: 'https://play.google.com/store/apps/details?id=com.lovable.mollydragonepaletteapp&pcampaignid=web_share',
    imageSrc: null,
  },
  {
    // TODO(Mirjana): screenshot
    id: 'developer-work',
    name: 'Developer work',
    tagline: "Mirjana's software development portfolio.",
    url: 'https://mirjana-cale-portfolio.vercel.app/index.html#projects',
    imageSrc: null,
  },
];
