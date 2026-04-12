// App.tsx
import { HomeAnimation } from './components/UI/Home';
import { Hero } from './components/Hero.tsx';
import { 
  About, 
  Education, 
  Experience, 
  Projects, 
  Skills, 
  Contact 
} from './components/Sections.tsx';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <HomeAnimation>
        <Hero />
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