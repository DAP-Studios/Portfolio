import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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
        <div className="section-number">// 03</div>
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Responsive, fast, and scalable websites built with modern frameworks</p>
          </div>
          <div className="service-item">
            <h3>Mobile Apps</h3>
            <p>Native and cross-platform applications designed for performance</p>
          </div>
          <div className="service-item">
            <h3>Custom Software</h3>
            <p>Tailored solutions for business automation and internal tools</p>
          </div>
          <div className="service-item">
            <h3>UI/UX Design</h3>
            <p>User-centered interfaces balancing aesthetics and function</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
