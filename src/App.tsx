import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lenis from 'lenis';
import { useEffect } from 'react';
// @ts-ignore - JSX file without declaration
import GradientWaves from './components/GradientWaves';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      lenis.destroy();
      return;
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 w-full h-[100vh] -z-10 pointer-events-none">
        <GradientWaves
          horizonColor="#3300FF"
          waveColor="#8E5AEA"
          crestColor="#EC4899"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.7}
          waveRatio={0.55}
          swell={20.5}
          turbulence={13}
          tilt={0.99}
          zoom={1}
          height={2.4}
          fogDepth={22}
          detail="medium"
          brightness={0.75}
          opacity={1}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          parallaxStrength={0.5}
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
