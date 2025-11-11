import { motion, useScroll, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function QuickContactButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Show button after scrolling 20% of the page
      setIsVisible(latest > 0.2);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="tel:+250792662501"
          className="fixed bottom-8 left-8 z-50 group"
          initial={{ scale: 0, rotate: -180, x: -100 }}
          animate={{ scale: 1, rotate: 0, x: 0 }}
          exit={{ scale: 0, rotate: 180, x: -100 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{ 
            background: 'linear-gradient(135deg, #0A4A4A 0%, #2C7873 100%)',
          }}
        >
          <div className="px-5 py-4 rounded-full shadow-2xl flex items-center gap-3 relative overflow-hidden">
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
              }}
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Phone className="w-5 h-5 text-white" />
            </motion.div>

            {/* Text - hidden on mobile */}
            <span className="text-white hidden sm:inline-block relative z-10" style={{ fontWeight: 600, fontSize: '14px' }}>
              Quick Call
            </span>

            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/50"
              animate={{ 
                scale: [1, 1.2, 1.2],
                opacity: [0.5, 0, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
