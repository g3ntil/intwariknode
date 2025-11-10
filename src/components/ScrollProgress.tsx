import { motion, useScroll } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ 
        scaleX: scrollYProgress,
        background: 'linear-gradient(to right, #8B7AB8, #C8B6CD, #E8C5C5)'
      }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
    />
  );
}
