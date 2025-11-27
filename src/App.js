import React from 'react';
import './App.css';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HeroSlider />
      <About />
      <TechStack />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
