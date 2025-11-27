import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const rhombusRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rhombus = rhombusRef.current;
    const content = contentRef.current;

    // Slide animation for rhombus
    gsap.fromTo(
      rhombus,
      { 
        x: "-120%", 
        y: "-50px", 
        opacity: 0 
      },
      {
        x: "0%",
        y: "0%",
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.6,
        }
      }
    );

    // Content animation
    gsap.fromTo(
      content,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.5
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-section">
      <div ref={rhombusRef} className="rhombus rhombus-left rhombus-red"></div>
      <div ref={contentRef} className="content">
        <div className="section-number">// 01</div>
        <h2>About DAP Studios</h2>
        <p className="section-description">A freelance development collective specializing in modern web, mobile, and software solutions. We transform ideas into exceptional digital experiences with precision and creativity.</p>
        <div className="about-highlights">
          <div className="highlight-item">Web · Mobile · Software</div>
        </div>
      </div>
    </section>
  );
};

export default About;
