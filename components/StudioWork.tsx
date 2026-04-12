'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

const studioProjects = [
  { title: 'Lumina', category: 'Brand Identity', year: '2024', aspect: 'aspect-square', desc: 'A complete brand overhaul for a next-gen lighting company, focusing on the interplay between shadow and illumination to create a striking visual identity.', link: '#' },
  { title: 'Aura', category: 'Editorial', year: '2023', aspect: 'aspect-[4/5]', desc: 'An award-winning editorial design for a high-fashion magazine, blending brutalist typography with elegant whitespace and striking photography.', link: '#' },
  { title: 'Neon', category: 'Motion', year: '2023', aspect: 'aspect-square', desc: 'A high-energy motion graphics package for an electronic music festival, featuring audio-reactive visuals and kinetic typography.', link: '#' },
  { title: 'Vanguard', category: 'Web', year: '2022', aspect: 'aspect-[4/5]', desc: 'An immersive, WebGL-powered promotional site for a luxury automotive brand, allowing users to explore vehicles in real-time 3D.', link: '#' },
  { title: 'Echo', category: 'Direction', year: '2024', aspect: 'aspect-square', desc: 'Creative direction for a global streetwear campaign, establishing the visual language across video, print, and digital touchpoints.', link: '#' },
  { title: 'Zenith', category: '3D', year: '2023', aspect: 'aspect-[4/5]', desc: 'A series of surreal 3D environments created for a virtual reality exhibition, exploring themes of scale and impossible architecture.', link: '#' },
  { title: 'Pulse', category: 'Digital Art', year: '2024', aspect: 'aspect-square', desc: 'A generative art collection that visualizes real-time heart rate data into unique, evolving digital sculptures.', link: '#' },
  { title: 'Onyx', category: 'Packaging', year: '2022', aspect: 'aspect-[4/5]', desc: 'Premium packaging design for a boutique fragrance line, utilizing matte black textures and subtle crimson foil stamping.', link: '#' },
  { title: 'Prism', category: 'UI/UX', year: '2023', aspect: 'aspect-square', desc: 'A conceptual interface design for a creative suite, focusing on fluid gestures and a distraction-free dark mode environment.', link: '#' },
];

export default function StudioWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof studioProjects[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Reverse columns (1 and 3) move down as you scroll down
  const yReverse = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  // Normal column (2) moves up as you scroll down
  const yNormal = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  // Mobile column moves up
  const yMobile = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const col1 = studioProjects.slice(0, 3);
  const col2 = studioProjects.slice(3, 6);
  const col3 = studioProjects.slice(6, 9);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <>
      <section ref={sectionRef} id="studio-work" className="relative h-[500vh] bg-[#050505]">
        <div 
          className="sticky top-0 h-screen w-full overflow-hidden transition-colors duration-700 flex items-center border-t border-white/10"
          style={{ backgroundColor: hoveredIndex !== null ? '#0a0000' : '#050505' }}
        >
          {/* Blood red atmospheric blur */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B0000]/30 rounded-full blur-[150px] pointer-events-none transition-opacity duration-700 z-0" 
            style={{ opacity: hoveredIndex !== null ? 1 : 0.3 }} 
          />

          {/* Fixed Center Title (Desktop) */}
          <div className="hidden md:flex absolute inset-0 z-20 flex-col items-center justify-center pointer-events-none">
            <div className="bg-[#050505]/80 backdrop-blur-md px-16 py-10 rounded-full border border-white/10 flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <h2 className="font-calligraphy text-7xl lg:text-9xl text-[#8B0000] font-normal mb-2 drop-shadow-lg">
                DAP Studio
              </h2>
              <p className="text-xl text-white/80 font-serif italic">
                Where imagination bleeds into reality.
              </p>
            </div>
          </div>

          {/* Mobile Title */}
          <div className="md:hidden absolute top-32 left-0 right-0 flex flex-col items-center text-center px-6 z-20 pointer-events-none">
            <h2 className="font-calligraphy text-7xl text-[#8B0000] font-normal mb-4 drop-shadow-lg bg-[#050505]/50 backdrop-blur-md px-8 py-4 rounded-full border border-white/10">
              DAP Studio
            </h2>
          </div>

          <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10 w-full">
            
            {/* Mobile: Standard List */}
            <motion.div style={{ y: yMobile }} className="md:hidden flex flex-col gap-6 w-full pt-[80vh] pb-[40vh]">
              {studioProjects.map((project, idx) => (
                <ProjectCard 
                  key={idx} 
                  project={project} 
                  globalIdx={idx} 
                  setHoveredIndex={setHoveredIndex}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>

            {/* Desktop: 3-Column Parallax Grid */}
            <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 w-full">
              
              {/* Column 1 (Reverse) */}
              <motion.div style={{ y: yReverse }} className="flex flex-col gap-6 lg:gap-8 w-full">
                {col1.map((project, idx) => (
                  <ProjectCard 
                    key={idx} 
                    project={project} 
                    globalIdx={idx} 
                    setHoveredIndex={setHoveredIndex}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </motion.div>

              {/* Column 2 (Normal) */}
              <motion.div style={{ y: yNormal }} className="flex flex-col gap-6 lg:gap-8 w-full">
                {col2.map((project, idx) => (
                  <ProjectCard 
                    key={idx + 3} 
                    project={project} 
                    globalIdx={idx + 3} 
                    setHoveredIndex={setHoveredIndex}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </motion.div>

              {/* Column 3 (Reverse) */}
              <motion.div style={{ y: yReverse }} className="flex flex-col gap-6 lg:gap-8 w-full">
                {col3.map((project, idx) => (
                  <ProjectCard 
                    key={idx + 6} 
                    project={project} 
                    globalIdx={idx + 6} 
                    setHoveredIndex={setHoveredIndex}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative bg-[#111] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/40 to-black mix-blend-overlay z-10" />
                <img 
                  src={`https://picsum.photos/seed/${selectedProject.title}/800/1000`} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-[#050505]">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(139,0,0,0.15)_0%,_transparent_60%)] pointer-events-none" />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <span className="text-red-500 font-sans tracking-widest text-xs uppercase border border-red-900/50 px-3 py-1 rounded-full">
                    {selectedProject.year}
                  </span>
                  <span className="font-serif italic text-white/60 text-sm">
                    {selectedProject.category}
                  </span>
                </div>
                
                <h3 className="font-calligraphy text-5xl md:text-7xl font-normal text-white mb-8 relative z-10">
                  {selectedProject.title}
                </h3>
                
                <p className="text-white/60 font-light leading-relaxed mb-12 text-lg relative z-10">
                  {selectedProject.desc}
                </p>

                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-white hover:text-red-400 transition-colors w-fit group relative z-10"
                >
                  View Live Project
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectCard({ project, globalIdx, setHoveredIndex, onClick }: { project: any, globalIdx: number, setHoveredIndex: (idx: number | null) => void, onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHoveredIndex(globalIdx)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`group relative w-full ${project.aspect} border border-white/10 cursor-pointer overflow-hidden bg-[#0a0a0a] flex flex-col justify-center items-center p-8 transition-all duration-500 hover:border-red-900/50`}
    >
      {/* Base subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/5 to-transparent z-0 transition-opacity duration-500 group-hover:opacity-0" />
      
      {/* Dynamic hover animations */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 overflow-hidden">
        {/* Off-center spinning radial glow for a sweeping spotlight effect */}
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_30%_30%,_rgba(139,0,0,0.6)_0%,_transparent_60%)] animate-[spin_8s_linear_infinite] origin-center scale-90 group-hover:scale-100 transition-transform duration-1000 ease-out mix-blend-screen" />
        
        {/* Rising bottom gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/80 via-[#8B0000]/20 to-transparent translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-out" />
      </div>
      
      <h3 className="font-calligraphy text-4xl md:text-5xl lg:text-6xl font-normal text-white/30 group-hover:text-white transition-colors duration-500 text-center relative z-10 drop-shadow-2xl">
        {project.title}
      </h3>
      
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-10">
        <span className="font-serif italic text-white/90 text-sm md:text-base drop-shadow-md">{project.category}</span>
        <span className="text-red-200 font-sans tracking-widest text-xs drop-shadow-md">{project.year}</span>
      </div>
    </div>
  );
}
