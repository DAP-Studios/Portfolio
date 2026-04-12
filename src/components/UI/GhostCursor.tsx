// ui/GhostCursor.tsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

export const GhostCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot follows cursor instantly
  const dotX = useSpring(cursorX, { stiffness: 800, damping: 35, mass: 0.5 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 35, mass: 0.5 });

  // Ghost ring lags behind
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 22, mass: 0.8 });
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 22, mass: 0.8 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Use event delegation so dynamically added elements are also handled
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) setIsHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) setIsHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Sharp dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300"
        style={{ left: dotX, top: dotY }}
        animate={{ scale: isHovering ? 2.5 : 1, opacity: isHovering ? 0.4 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Ghost ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ left: ringX, top: ringY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(103,232,249,0.8)' : 'rgba(103,232,249,0.35)',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};
