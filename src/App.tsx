// App.tsx
import { motion, useScroll, useSpring } from 'framer-motion';
import { HomeAnimation } from './components/UI/Home.tsx';
import { GhostCursor } from './components/UI/GhostCursor.tsx';
import { Hero } from './components/Hero.tsx';
import { ProjectShowcase } from './components/ProjectShowcase.tsx';
import { 
  About, 
  Education, 
  Experience, 
  Projects, 
  Skills, 
  Contact 
} from './components/Sections.tsx';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-300/20 selection:text-cyan-50 cursor-none">
      <GhostCursor />
      <motion.div
        className="fixed left-0 right-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200"
        style={{ scaleX }}
      />

      <header className="pointer-events-none fixed left-0 right-0 top-3 z-[70] flex justify-center px-3 md:top-5">
        <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/15 bg-black/60 p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-cyan-100 md:px-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <HomeAnimation>
        <Hero />
        <ProjectShowcase />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </HomeAnimation>
    </div>
  );
}

export default App;