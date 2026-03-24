import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import Download from './components/download/Download';
import Legal from './components/legal/Legal';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="caracteristicas">
          <Features />
        </section>
        <section id="descargar">
          <Download />
        </section>
        <section id="legal">
          <Legal />
        </section>
      </main>
    </>
  );
}
