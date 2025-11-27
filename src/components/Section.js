import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section.css';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ title, description, index }) => {
  const sectionRef = useRef(null);
  const rhombusRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rhombus = rhombusRef.current;
    const content = contentRef.current;
    const fromLeft = index % 2 === 0;

    // Slide animation for rhombus
    gsap.fromTo(
      rhombus,
      { 
        x: fromLeft ? "-120%" : "120%", 
        y: fromLeft ? "-50px" : "50px", 
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
  }, [index]);

  const isOdd = index % 2 === 0;
  const rhombusClass = isOdd ? 'rhombus rhombus-left rhombus-red' : 'rhombus rhombus-right rhombus-blue';

  return (
    <section ref={sectionRef} className="scroll-section">
      <div ref={rhombusRef} className={rhombusClass}></div>
      <div ref={contentRef} className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Section;
