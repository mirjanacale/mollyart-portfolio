import { useState } from 'react';
import type { Project } from '../data/projects';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProjectCard({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();

  const inner = (
    <>
      {project.imageSrc !== null && !imageFailed && (
        <img
          src={project.imageSrc}
          alt=""
          loading="lazy"
          onError={() => {
            setImageFailed(true);
            if (import.meta.env.DEV) {
              console.error(`Project image failed to load: ${project.imageSrc}`);
            }
          }}
        />
      )}
      <span className="project-overlay" aria-hidden="true" />
      <span className="project-text">
        <span className="project-name">{project.name}</span>
        <span className="project-tagline">{project.tagline}</span>
      </span>
    </>
  );

  return (
    <div ref={ref} className="reveal">
      {project.url !== null ? (
        <a className="project-card" href={project.url} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <div className="project-card project-card--unlinked">{inner}</div>
      )}
    </div>
  );
}

export function ProjectCards() {
  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <span className="eyebrow">Beyond the canvas</span>
        <h2>More from Molly</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
