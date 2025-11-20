import { motion } from 'motion/react';

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large Gradient Orbs - Enhanced motion */}
      <motion.div
        animate={{ 
          x: [0, 60, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ backgroundColor: '#A8D5BA' }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30"
      />

      <motion.div
        animate={{ 
          x: [0, -60, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.25, 0.95, 1]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ backgroundColor: '#B8E0D2' }}
        className="absolute top-1/4 -right-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-30"
      />

      <motion.div
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.3, 0.9, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        style={{ backgroundColor: '#D4EFE7' }}
        className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-30"
      />

      <motion.div
        animate={{ 
          x: [0, -50, 30, 0],
          y: [0, 40, -50, 0],
          scale: [1, 1.2, 0.95, 1]
        }}
        transition={{ 
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        style={{ backgroundColor: '#E8F5E9' }}
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-25"
      />

      {/* Additional Orbs for More Motion */}
      <motion.div
        animate={{ 
          x: [0, 40, -40, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ backgroundColor: '#C8E6C9' }}
        className="absolute top-1/2 left-1/3 w-[24rem] h-[24rem] rounded-full blur-3xl opacity-20"
      />

      <motion.div
        animate={{ 
          x: [0, -35, 35, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        style={{ backgroundColor: '#6FB98F' }}
        className="absolute top-1/3 right-1/4 w-[20rem] h-[20rem] rounded-full blur-3xl opacity-15"
      />

      {/* Enhanced Floating Dots with more motion */}
      <motion.div
        animate={{ 
          y: [0, -40, 0],
          x: [0, 20, 0],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ backgroundColor: '#0A4A4A' }}
        className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full"
      />

      <motion.div
        animate={{ 
          y: [0, 40, 0],
          x: [0, -15, 0],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ backgroundColor: '#2C7873' }}
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full"
      />

      <motion.div
        animate={{ 
          y: [0, -45, 0],
          x: [0, 25, 0],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{ 
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ backgroundColor: '#6FB98F' }}
        className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 rounded-full"
      />

      <motion.div
        animate={{ 
          y: [0, 35, 0],
          x: [0, -20, 0],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{ 
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        style={{ backgroundColor: '#0A4A4A' }}
        className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full"
      />

      <motion.div
        animate={{ 
          y: [0, -35, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{ 
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        style={{ backgroundColor: '#2C7873' }}
        className="absolute bottom-1/4 right-1/2 w-2 h-2 rounded-full"
      />

      {/* Additional Floating Dots */}
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          x: [0, -25, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
        style={{ backgroundColor: '#6FB98F' }}
        className="absolute top-1/5 left-1/5 w-2.5 h-2.5 rounded-full"
      />

      <motion.div
        animate={{ 
          y: [0, -38, 0],
          x: [0, 18, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
        style={{ backgroundColor: '#0A4A4A' }}
        className="absolute top-3/5 left-2/5 w-3 h-3 rounded-full"
      />

      <motion.div
        animate={{ 
          y: [0, 42, 0],
          x: [0, -22, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
        style={{ backgroundColor: '#2C7873' }}
        className="absolute bottom-2/5 right-1/5 w-2 h-2 rounded-full"
      />

      <motion.div
        animate={{ 
          y: [0, -33, 0],
          x: [0, 20, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8
        }}
        style={{ backgroundColor: '#6FB98F' }}
        className="absolute top-4/5 right-2/5 w-2.5 h-2.5 rounded-full"
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A4A4A 1px, transparent 1px),
            linear-gradient(to bottom, #0A4A4A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Animated Grid Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2C7873 1px, transparent 1px),
            linear-gradient(to bottom, #2C7873 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, #C8E6C9 100%)'
        }}
      />
    </div>
  );
}
