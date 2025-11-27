import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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
      <div ref={contentRef} className="content contact-content">
        <div className="section-number">// 05</div>
        <h2>Start A Project</h2>
        <p className="contact-subtitle">Looking for a reliable, detail-oriented developer?<br/>Let's build something exceptional together.</p>
        <a href="mailto:daptechsol@gmail.com" className="contact-email">daptechsol@gmail.com</a>
        <div className="contact-footer">
          <p>DAP Studios · Freelance Development Collective</p>
          <p>EST. 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
