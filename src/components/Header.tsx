import { MOLLAVIE_URL } from '../data/site';

export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top">
        MollyArt
      </a>
      <nav aria-label="Main">
        <a href="#paintings">Paintings</a>
        <a href={MOLLAVIE_URL} target="_blank" rel="noopener noreferrer">
          Shop
        </a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}
