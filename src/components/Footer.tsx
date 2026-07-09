import { projects } from '../data/projects';
import { CONTACT_EMAIL, INSTAGRAM_URL } from '../data/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-wordmark">MollyArt</span>
      <nav className="footer-links" aria-label="Molly's projects">
        {projects.map((project) =>
          project.url !== null ? (
            <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          ) : (
            <span key={project.id} className="footer-link-muted">
              {project.name}
            </span>
          ),
        )}
      </nav>
      <div className="footer-contact">
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <span className="footer-copy">&copy; {new Date().getFullYear()} Mirjana Cale</span>
    </footer>
  );
}
