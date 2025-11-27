import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
        x: "120%", 
        y: "50px", 
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
      <div ref={rhombusRef} className="rhombus rhombus-right rhombus-blue"></div>
      <div ref={contentRef} className="content">
        <div className="section-number">// 04</div>
        <h2>Portfolio</h2>
        <div className="projects-list">
          <div className="project-item">E-Commerce Platform</div>
          <div className="project-item">Healthcare Management System</div>
          <div className="project-item">Real-Time Analytics Dashboard</div>
          <div className="project-item">Mobile Social Application</div>
          <div className="project-item">IoT Solutions</div>
          <div className="project-item">AI-Powered Chatbots</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
