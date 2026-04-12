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
    slideUp: { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } },
    slideLeft: { initial: { opacity: 0, x: -42 }, animate: { opacity: 1, x: 0 } },
    slideRight: { initial: { opacity: 0, x: 42 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } }
  };

  return (
    <motion.div
      initial={variants[type].initial}
      whileInView={variants[type].animate}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ delay, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};