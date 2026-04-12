import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShaderAnimation } from './UI/shader-animation';

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const shaderReveal = useTransform(scrollYProgress, [0, 0.5, 1], [0.78, 0.42, 0.14]);
  const daprOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7], [1, 1, 0]);
  const daprScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const daprBlur = useTransform(scrollYProgress, [0, 0.7], [0, 8]);

  const dapwOpacity = useTransform(scrollYProgress, [0.2, 0.65, 1], [0, 0.75, 1]);
  const dapwScale = useTransform(scrollYProgress, [0.2, 1], [0.95, 1]);
  const dapwClipPath = useTransform(
    scrollYProgress,
    [0.2, 1],
    ['inset(0 0 100% 0 round 2rem)', 'inset(0 0 0% 0 round 2rem)']
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-5 pb-12 pt-24 md:px-10"
    >
      <div className="absolute inset-0 z-0">
        <ShaderAnimation animate={false} />
      </div>

      <motion.div className="pointer-events-none absolute inset-0 z-[10] bg-black" style={{ opacity: shaderReveal }} />

      <motion.div
        className="relative z-20 flex w-full items-center justify-center"
      >
        <div className="relative h-[70vh] w-full max-w-[600px] md:h-[78vh]">
          <motion.img
            src="/assets/dapr.png"
            alt="Deep Parmar intro"
            className="absolute inset-0 h-full w-full object-contain"
            style={{
              opacity: daprOpacity,
              scale: daprScale,
              filter: daprBlur,
            }}
          />
          <motion.img
            src="/assets/dapw.png"
            alt="Deep Parmar scrolled"
            className="absolute inset-0 h-full w-full object-contain"
            style={{
              opacity: dapwOpacity,
              scale: dapwScale,
              clipPath: dapwClipPath,
            }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-100/20 via-transparent to-cyan-300/10 mix-blend-screen"
            style={{ opacity: dapwOpacity }}
          />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 h-10 w-[1px] -translate-x-1/2 bg-gradient-to-b from-cyan-100/0 via-cyan-200/70 to-cyan-100/0" />
    </section>
  );
};