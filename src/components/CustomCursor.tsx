import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        if (target.getAttribute('data-cursor')) {
          setCursorText(target.getAttribute('data-cursor') || '');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter as EventListener);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 bg-white/80 backdrop-blur-sm"
          animate={{
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? '#8B7AB8' : '#000000',
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: '#8B7AB8'
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998] hidden lg:block"
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 0.6,
        }}
      />

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-150%',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="bg-black text-white px-3 py-1 rounded-full text-xs whitespace-nowrap" style={{ fontWeight: 600 }}>
            {cursorText}
          </div>
        </motion.div>
      )}
    </>
  );
}
