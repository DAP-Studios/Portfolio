'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Dual Atmospheric Backgrounds */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-900/20 to-transparent opacity-60 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent opacity-60 blur-[120px] pointer-events-none" />

      {/* Central Typography */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">The Dual-Force Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[25vw] md:text-[20vw] lg:text-[280px] leading-[0.8] tracking-tighter font-bold text-white mb-12"
        >
          DAP
        </motion.h1>

        {/* Dual Force Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-5xl"
        >
          {/* Studio Side */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right flex-1 group">
            <span className="font-calligraphy text-5xl md:text-6xl text-[#8B0000] mb-4 group-hover:text-red-500 transition-colors duration-500">Studio</span>
            <p className="text-white/50 text-sm md:text-base font-serif italic max-w-[280px]">
              Crafting immersive digital experiences and bold brand identities.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Tech Sol Side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 group">
            <span className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 mb-4 group-hover:from-blue-400 group-hover:to-white transition-all duration-500">Tech Sol</span>
            <p className="text-white/50 text-sm md:text-base font-sans font-light tracking-wide max-w-[280px]">
              Engineering robust, scalable, and secure software architectures.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <a href="#about" className="group flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full font-medium tracking-widest uppercase text-[10px] hover:bg-white hover:text-black transition-all duration-500">
            Explore The DAP
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
