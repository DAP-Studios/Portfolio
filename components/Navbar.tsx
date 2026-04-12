'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/ico.png" alt="DAP Logo" className="h-8 w-auto object-contain" />
          <div className="flex items-center gap-1">
            <span className="text-white/40 text-sm font-medium tracking-widest uppercase">The</span>
            <span className="font-display font-bold text-xl tracking-tight">DAP</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-white/70">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#studio" className="hover:text-white transition-colors">Studio</a>
          <a href="#tech" className="hover:text-white transition-colors">Tech Sol</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wide uppercase">
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium tracking-wide uppercase text-white/70 hover:text-white">About</a>
          <a href="#studio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium tracking-wide uppercase text-white/70 hover:text-white">Studio</a>
          <a href="#tech" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium tracking-wide uppercase text-white/70 hover:text-white">Tech Sol</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium tracking-wide uppercase text-white/70 hover:text-white">Work</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium tracking-wide uppercase text-white/70 hover:text-white">Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
