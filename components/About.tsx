'use client';

import { motion } from 'motion/react';
import { Palette, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6 uppercase text-white/90">
            Structure &amp; <br />
            <span className="text-white/40">Clarity.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl font-sans font-light tracking-wide">
            We bridge the gap between aesthetics and engineering. By operating as two specialized entities under one roof, we deliver uncompromising quality in both design and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-white/10">
          
          {/* DAP Studio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-black transition-colors relative overflow-hidden"
          >
            {/* Blood red hover background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-12 text-white/60 group-hover:border-red-800 group-hover:text-red-500 transition-colors relative z-10">
              <Palette size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-2xl font-medium mb-4 tracking-tight uppercase relative z-10">DAP Studio</h3>
            <p className="text-white/50 font-light leading-relaxed mb-8 text-sm tracking-wide relative z-10">
              Our creative powerhouse. DAP Studio focuses on brand identity, UI/UX design, and immersive digital experiences. We believe that exceptional design is the foundation of every successful product.
            </p>
            <ul className="space-y-4 relative z-10">
              {['Brand Identity', 'UI/UX Design', 'Motion Graphics', 'Design Systems'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase text-white/60">
                  <span className="w-1 h-1 bg-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DAP Tech Sol */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-16 group hover:bg-black transition-colors relative overflow-hidden"
          >
            {/* Navy/Blue/White hover background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-500/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-12 text-white/60 group-hover:border-blue-500 group-hover:text-blue-400 transition-colors relative z-10">
              <Code2 size={20} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-2xl font-medium mb-4 tracking-tight uppercase relative z-10">DAP Tech Sol</h3>
            <p className="text-white/50 font-light leading-relaxed mb-8 text-sm tracking-wide relative z-10">
              Our engineering core. DAP Tech Solutions builds robust, scalable, and secure software architectures. From complex web applications to enterprise infrastructure, we turn designs into reality.
            </p>
            <ul className="space-y-4 relative z-10">
              {['Full-Stack Development', 'Cloud Architecture', 'API Integration', 'Performance Optimization'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-900 via-blue-500 to-white" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
