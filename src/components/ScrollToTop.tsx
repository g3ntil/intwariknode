import { motion, useScroll, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setIsVisible(latest > 0.2);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 w-12 h-12 bg-black text-white rounded-full shadow-2xl flex items-center justify-center z-40 group overflow-hidden"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          data-cursor="Back to Top"
        >
          {/* Animated background gradient */}
          <motion.div
            style={{ background: 'linear-gradient(to bottom right, #8B7AB8, #C8B6CD)' }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.div>

          {/* Circular progress indicator */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              stroke="#8B7AB8"
              strokeWidth="2"
              fill="none"
              style={{
                pathLength: scrollYProgress
              }}
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
