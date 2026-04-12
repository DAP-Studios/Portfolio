'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function Hero3D() {
  // Normalized mouse coordinates (-1 to 1) for 3D tilt and chromatic separation
  const mouseX = useMotionValue(0); 
  const mouseY = useMotionValue(0); 

  // Buttery smooth physics for an expensive feel
  const springConfig = { damping: 30, stiffness: 200, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Perspective Tilt calculations (cleaner motion)
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [-1, 1], [-8, 8]);

  // Chromatic Aberration Split (spread apart on mouse movement)
  const redX = useTransform(smoothX, [-1, 1], [-120, 120]);
  const redY = useTransform(smoothY, [-1, 1], [-120, 120]);
  const cyanX = useTransform(smoothX, [-1, 1], [120, -120]);
  const cyanY = useTransform(smoothY, [-1, 1], [120, -120]);
  const centerX = useTransform(smoothX, [-1, 1], [-5, 5]);
  const centerY = useTransform(smoothY, [-1, 1], [-5, 5]);

  // Background Glow Parallax (moves slower than mouse for depth)
  const bgRedX = useTransform(smoothX, [-1, 1], [-30, 30]);
  const bgRedY = useTransform(smoothY, [-1, 1], [-30, 30]);
  const bgCyanX = useTransform(smoothX, [-1, 1], [30, -30]);
  const bgCyanY = useTransform(smoothY, [-1, 1], [30, -30]);

  // Keep both left/right slightly tucked behind main logo Z-wise
  const zPositionSide = -50;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    
    // Calculate -1 to 1 coordinates based on screen center
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-screen w-full bg-black relative flex items-center justify-center overflow-hidden cursor-default selection:bg-cyan-500/30"
      style={{ perspective: 1800 }}
    >
      {/* Dynamic Ambient Background Glows tracking the chromatic shift */}
      <motion.div 
        style={{ x: bgRedX, y: bgRedY }}
        className="absolute w-[40vw] h-[40vw] bg-red-900/20 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div 
        style={{ x: bgCyanX, y: bgCyanY }}
        className="absolute w-[40vw] h-[40vw] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none"
      />

      {/* Clean 3D Outer Container */}
      <motion.div className="relative w-full aspect-video flex items-center justify-center pointer-events-none">
        
        {/* Inner 3D Holographic Core driven by Mouse */}
        <motion.div 
          style={{ 
            rotateX, 
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Core Crisp Center: Remains visible, always on top */}
          <motion.div
            style={{ x: centerX, y: centerY, translateZ: 0 }}
            className="absolute inset-0 flex items-center justify-center z-50 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <img 
              src="/assets/dp.png" 
              alt="Deep A. Parmar Logo" 
              className="w-[20%] max-w-lg h-auto object-contain" 
            />
          </motion.div>

          {/* Left Spread: DAP Studios (Red) */}
          <motion.div
            style={{ translateZ: zPositionSide }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <motion.div
              style={{ x: redX, y: redY }}
              className="absolute inset-0 flex items-center justify-center opacity-90 mix-blend-screen"
            >
              <img 
                src="/assets/dapr.png" 
                alt="DAP Studios" 
                className="w-[20%] max-w-lg h-auto object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.4)]" 
              />
            </motion.div>
          </motion.div>

          {/* Right Spread: DAP TechSol (Cyan) */}
          <motion.div
            style={{ translateZ: zPositionSide }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <motion.div
              style={{ x: cyanX, y: cyanY }}
              className="absolute inset-0 flex items-center justify-center opacity-80 mix-blend-screen"
            >
              <img 
                src="/assets/dapw.png" 
                alt="DAP TechSol" 
                className="w-[20%] max-w-lg h-auto object-contain drop-shadow-[0_0_30px_rgba(0,200,255,0.4)] saturate-150 sepia hue-rotate-[180deg]" 
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Clean Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)] z-30" />
    </section>
  );
}
