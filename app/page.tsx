import Navbar from '@/components/Navbar';
import Hero3D from '@/components/Hero3D';
import Hero from '@/components/Hero';
import About from '@/components/About';
import StudioWork from '@/components/StudioWork';
import TechWork from '@/components/TechWork';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
      <Navbar />
      <Hero3D />
      <Hero />
      <About />
      <StudioWork />
      <TechWork />
      <Footer />
    </main>
  );
}
