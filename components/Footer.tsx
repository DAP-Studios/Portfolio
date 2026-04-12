'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-12 border-t border-white/10 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl leading-tight tracking-tighter font-medium mb-8 uppercase text-white/90"
          >
            Let&apos;s Build <br />
            <span className="text-white/40">Together.</span>
          </motion.h2>
          
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:hello@thedap.com"
            className="group flex items-center gap-4 px-8 py-4 bg-white text-black font-medium tracking-widest uppercase text-xs hover:bg-white/90 transition-all"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-2xl tracking-tight">DAP</span>
            </div>
            <p className="text-white/40 text-xs tracking-wide leading-relaxed max-w-sm uppercase">
              A dual-force agency combining DAP Studio&apos;s creative excellence with DAP Tech Sol&apos;s engineering precision.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-6">Firms</h4>
            <ul className="space-y-4">
              <li><a href="#studio" className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors">DAP Studio</a></li>
              <li><a href="#tech" className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors">DAP Tech Sol</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-6">Social</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold tracking-widest uppercase text-white/20">
          <p>&copy; {new Date().getFullYear()} DAP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
