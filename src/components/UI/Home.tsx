import React from 'react';
import './App.css'; // We'll create this for the glow effect

// Assuming your logo is imported as a component or image
import Logo from '/assets/d.png'; // Update this path to your actual logo file

const App: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'black',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      perspective: '1000px',
    }}>
      <div className="logo-container">
      <img 
        src={Logo} 
        alt="Logo" 
        className="glowing-logo"
        style={{
          maxWidth: 'auto',
          height: 'auto'
        }}
      />
    </div>
    </div>
  );
}

export default App;


import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Home = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fullscreen Logo Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
          >
            <motion.img
              src="/assets/dap.png"
              alt="Logo"
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: [0.8, 1, 0.9, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-64 h-64 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Split Animation */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 h-full w-1/2 bg-gray-800"
          initial={{ x: 0 }}
          animate={{ x: showContent ? '-100%' : 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute top-0 right-0 h-full w-1/2 bg-gray-800"
          initial={{ x: 0 }}
          animate={{ x: showContent ? '100%' : 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative z-30"
      >
        {children}
      </motion.div>
    </>
  );
};