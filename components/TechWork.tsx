'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const techProjects = [
  { 
    title: 'VK Automation', 
    type: 'Industrial Tech', 
    tech: ['React', 'Next.js', 'Tailwind'], 
    desc: 'Digital presence and corporate platform for an industrial automation and control systems provider.',
    link: 'https://vkautomationandcontrol.in',
    preview: 'https://api.microlink.io/?url=https%3A%2F%2Fvkautomationandcontrol.in&screenshot=true&meta=false&embed=screenshot.url'
  },
  { 
    title: 'Uma Sensor', 
    type: 'B2B Platform', 
    tech: ['Next.js', 'Node.js', 'PostgreSQL'], 
    desc: 'Comprehensive product catalog and corporate web infrastructure for a sensor manufacturing company.',
    link: 'https://umasensor.co.in',
    preview: 'https://api.microlink.io/?url=https%3A%2F%2Fumasensor.co.in&screenshot=true&meta=false&embed=screenshot.url'
  },
  { 
    title: 'Sunrise System', 
    type: 'Corporate Portal', 
    tech: ['React', 'Tailwind', 'Framer Motion'], 
    desc: 'Modern web architecture showcasing system integration, automation, and technical services.',
    link: 'https://sunrisesystem.co.in',
    preview: 'https://api.microlink.io/?url=https%3A%2F%2Fsunrisesystem.co.in&screenshot=true&meta=false&embed=screenshot.url'
  },
  { 
    title: 'Atreya IOR', 
    type: 'Web Platform', 
    tech: ['Vue.js', 'Express', 'MongoDB'], 
    desc: 'Interactive digital platform for research operations, institutional resources, and data management.',
    link: 'https://atreyaior.in',
    preview: 'https://api.microlink.io/?url=https%3A%2F%2Fatreyaior.in&screenshot=true&meta=false&embed=screenshot.url'
  },
  { 
    title: 'Millennium Auto', 
    type: 'E-Commerce / B2B', 
    tech: ['Next.js', 'Stripe', 'Tailwind'], 
    desc: 'Scalable digital platform for advanced automation systems and industrial components.',
    link: 'https://millenniumautomationsystem.com',
    preview: 'https://api.microlink.io/?url=https%3A%2F%2Fmillenniumautomationsystem.com&screenshot=true&meta=false&embed=screenshot.url'
  },
  { 
    title: 'Creative Infra', 
    type: 'Portfolio & Corp', 
    tech: ['React', 'Three.js', 'GSAP'], 
    desc: 'Immersive portfolio showcasing modern infrastructure, construction projects, and engineering feats.',
    link: 'https://creativeinfra.me',
    preview: 'https://api.microlink.io/?url=https%3A%2F%2Fcreativeinfra.me&screenshot=true&meta=false&embed=screenshot.url'
  },
];

export default function TechWork() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translate the container horizontally based on vertical scroll.
  // -80% works well for 6 items to ensure the last item is fully visible.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} id="tech-work" className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden border-t border-white/10 pt-24 md:pt-32">
        {/* Gaussian Gradient Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-900/20 via-blue-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-12 w-full shrink-0">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6 uppercase text-white/90">
            DAP Tech Sol <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Engineering.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl font-sans font-light tracking-wide">
            Robust, scalable, and secure software architectures. Keep scrolling to explore our recent technical deployments.
          </p>
        </div>

        {/* Carousel Track */}
        <div className="relative z-10 flex-1 flex items-center pb-12">
          <motion.div style={{ x }} className="flex gap-6 px-6 md:px-12 w-max">
            {techProjects.map((project, idx) => (
              <div key={idx} className="w-[85vw] md:w-[450px] h-[550px] bg-[#0a0a0a] border border-white/10 flex flex-col group hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden shrink-0">
                
                {/* Image Preview Top Half */}
                <div className="h-[220px] w-full relative overflow-hidden border-b border-white/10 shrink-0 bg-[#111]">
                  {/* Overlays for blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                  <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  
                  <img 
                    src={project.preview} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-60 group-hover:opacity-100"
                  />
                </div>

                {/* Content Bottom Half */}
                <div className="p-8 flex flex-col justify-between flex-1 relative z-20">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">{project.type}</span>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-colors z-30 relative" title="View Live Site">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h3 className="font-display text-3xl font-medium mb-1 uppercase tracking-tight">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block text-xs font-sans tracking-wider text-white/40 hover:text-blue-400 transition-colors mb-4 truncate relative z-30">
                      {project.link.replace('https://', '')}
                    </a>
                    <p className="text-white/50 font-light text-sm tracking-wide leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-medium tracking-widest uppercase px-3 py-1.5 border border-white/10 rounded-full text-white/60 group-hover:border-blue-500/30 group-hover:text-blue-200 transition-colors bg-black/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {/* Spacer for the end of the carousel to allow the last item to reach the center/left */}
            <div className="w-[30vw] shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
