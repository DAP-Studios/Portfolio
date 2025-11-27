import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './HeroSlider.css';
import logo from '../assets/logo.png';

const HeroSlider = () => {
  const logoRef = useRef(null);
  const glowRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      gradient: "linear-gradient(135deg, #ff3333 0%, #cc0000 50%, #990000 100%)"
    }
  ];

  useEffect(() => {
    // No longer needed - using CSS animation instead
  }, [slides.length]);

  useEffect(() => {
    const logo = logoRef.current;
    
    const handleMouseMove = (e) => {
      const rect = logo.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      setMousePosition({ x, y });
      
      // Distort effect on hover
      gsap.to(logo, {
        x: x * 0.05,
        y: y * 0.05,
        rotationY: x * 0.1,
        rotationX: -y * 0.1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logo, {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    logo.addEventListener('mousemove', handleMouseMove);
    logo.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      logo.removeEventListener('mousemove', handleMouseMove);
      logo.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Pulsating glow animation
  useEffect(() => {
    const glow = glowRef.current;
    
    gsap.to(glow, {
      scale: 1.2,
      opacity: 0.8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="hero-slider">
      <div className="hero-slide active">
        <div className="hero-content">
          <h1 className="hero-title">{slides[0].title}</h1>
          <p className="hero-subtitle">{slides[0].subtitle}</p>
        </div>
      </div>
      
      <div className="logo-container">
        <div ref={glowRef} className="glow-effect"></div>
        <div ref={logoRef} className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      {/* <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default HeroSlider;
