// ui/AnimatedDiv.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
}

export const AnimatedDiv = ({
  children,
  className = '',
  delay = 0,
  type = 'fade'
}: AnimatedDivProps) => {
  const variants = {
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    slideUp: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    slideLeft: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    slideRight: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } }
  };

  return (
    <motion.div
      initial={variants[type].initial}
      whileInView={variants[type].animate}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};