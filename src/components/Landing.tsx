// File: src/components/Landing.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Landing = ({ onFinish }: { onFinish: () => void }) => {
  const [showRects, setShowRects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRects(true);
      // Call onFinish after animation
      setTimeout(onFinish, 2000);
    }, 1500); // wait before rectangles animate

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-full relative bg-gray-900 overflow-hidden">
      {/* Logo Fullscreen */}
      <AnimatePresence>
        {!showRects && (
          <motion.img
            src="/assets/dap.png"
            alt="Logo"
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-contain z-30 bg-gray-900"
          />
        )}
      </AnimatePresence>

      {/* Rectangle Split Animation */}
      {showRects && (
        <>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gray-900 z-20"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-900 z-20"
          />
        </>
      )}
    </div>
  );
};
