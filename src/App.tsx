import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Lightbox } from './components/Lightbox';
import { Divider } from './components/Divider';
import { ProjectCards } from './components/ProjectCards';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { paintings } from './data/paintings';

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div id="top">
      <Header />
      <main>
        <Hero onOpen={setLightboxIndex} />
        <Gallery onOpen={setLightboxIndex} />
        <Divider />
        <ProjectCards />
        <Divider />
        <About />
      </main>
      <Footer />
      {lightboxIndex !== null && (
        <Lightbox
          paintings={paintings}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
