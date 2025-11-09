import { motion, AnimatePresence } from 'motion/react';
import { ReactNode, useState } from 'react';

interface PlayfulTooltipProps {
  text: string;
  children: ReactNode;
  emoji?: string;
}

export function PlayfulTooltip({ text, children, emoji = "💡" }: PlayfulTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white rounded-xl text-xs whitespace-nowrap shadow-xl z-50"
            style={{ fontWeight: 600 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="mr-1"
            >
              {emoji}
            </motion.span>
            {text}
            
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
