'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard',
    client: 'Nova Financial',
    firm: 'DAP Studio & Tech Sol',
    year: '2023',
    tags: ['UI/UX', 'React', 'Node.js']
  },
  {
    title: 'E-Commerce Platform',
    client: 'Aura Lifestyle',
    firm: 'DAP Tech Sol',
    year: '2023',
    tags: ['Next.js', 'Stripe', 'Tailwind']
  },
  {
    title: 'Brand Identity',
    client: 'Lumina Architecture',
    firm: 'DAP Studio',
    year: '2022',
    tags: ['Branding', 'Typography', 'Web Design']
  },
  {
    title: 'AI Analytics Tool',
    client: 'DataSphere',
    firm: 'DAP Studio & Tech Sol',
    year: '2024',
    tags: ['Python', 'React', 'Data Viz']
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 relative border-t border-white/10 bg-mesh overflow-hidden">
      {/* Background atmospheric elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <h2 className="font-calligraphy text-7xl md:text-8xl lg:text-[120px] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-white font-normal mb-2 py-2">
              Selected Work
            </h2>
            <p className="text-xl text-white/70 font-serif italic ml-4">
              A showcase of our combined capabilities.
            </p>
          </div>
          <a href="#contact" className="text-sm font-medium tracking-wide uppercase border-b border-white/30 pb-1 hover:border-white transition-colors">
            View All Projects
          </a>
        </div>

        <div className="flex flex-col">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-6 border-b border-white/20 text-xs font-medium tracking-widest uppercase text-white/40">
            <div className="col-span-6 md:col-span-5">Project</div>
            <div className="col-span-3 hidden md:block">Client</div>
            <div className="col-span-3 hidden md:block">Firm</div>
            <div className="col-span-6 md:col-span-1 text-right">Year</div>
          </div>

          {/* Project List */}
          {projects.map((project, index) => (
            <motion.a
              href="#"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group grid grid-cols-12 gap-4 py-10 border-b border-white/10 hover:border-white/40 transition-colors items-center relative"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="col-span-10 md:col-span-5 flex flex-col gap-2 relative z-10">
                <h3 className="font-serif italic text-3xl md:text-4xl font-light group-hover:translate-x-4 transition-transform duration-500 text-white/90 group-hover:text-white">
                  {project.title}
                </h3>
                <div className="flex gap-2 md:hidden mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-white/40 border border-white/10 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-3 hidden md:block text-white/60 font-light relative z-10">
                {project.client}
              </div>

              <div className="col-span-3 hidden md:block relative z-10">
                <span className={`text-xs font-medium tracking-wide uppercase px-3 py-1.5 rounded-full border ${
                  project.firm.includes('&') 
                    ? 'border-white/20 text-white/70' 
                    : project.firm.includes('Studio') 
                      ? 'border-[#8B0000]/50 text-red-500' 
                      : 'border-blue-500/50 text-blue-400'
                }`}>
                  {project.firm}
                </span>
              </div>

              <div className="col-span-2 md:col-span-1 flex items-center justify-end gap-4 relative z-10">
                <span className="text-white/40 font-light">{project.year}</span>
                <ArrowUpRight size={20} className="text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
