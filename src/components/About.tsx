import { useState } from 'react';
import { CONTACT_EMAIL } from '../data/site';
import { useScrollReveal } from '../hooks/useScrollReveal';

// TODO(Mirjana): drop a photo into public/about/ and set this to its path,
// e.g. '/about/mirjana.jpg'. The section renders without it until then.
const ARTIST_PHOTO: string | null = null;

export function About() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="about">
      <div ref={ref} className="about-inner reveal">
        {ARTIST_PHOTO !== null && !photoFailed && (
          <img
            className="about-photo"
            src={ARTIST_PHOTO}
            alt="Mirjana Cale, the artist"
            loading="lazy"
            onError={() => setPhotoFailed(true)}
          />
        )}
        <div className="about-text">
          <span className="eyebrow">Meet the artist</span>
          <h2>Mirjana</h2>
          {/*
            Bio taken from Mirjana's own introduction on Mollavie.
            TODO(Mirjana): add a sentence about your homeland — the PRD asks
            for it, and it shouldn't be written by anyone but you.
          */}
          <p>
            I&rsquo;m passionate about capturing emotion, storytelling, and vibrant colour in
            every piece I create. Each artwork is original, inspired by my personal journey,
            my surroundings, and the stories I want to share with the world.
          </p>
          <p>
            Whether you&rsquo;re looking for a unique painting to brighten your home, a
            one-of-a-kind gift, or simply want to connect with my creative process — I hope
            you&rsquo;ll find something that moves and inspires you.
          </p>
          <a className="contact-link" href={`mailto:${CONTACT_EMAIL}`}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
