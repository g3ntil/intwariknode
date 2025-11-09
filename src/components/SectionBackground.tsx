import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface SectionBackgroundProps {
  variant?: 'light' | 'dark';
}

export function SectionBackground({ variant = 'light' }: SectionBackgroundProps) {
  const orbColor1 = variant === 'light' 
    ? 'rgba(10, 74, 74, 0.06)' 
    : 'rgba(111, 185, 143, 0.08)';
  
  const orbColor2 = variant === 'light'
    ? 'rgba(111, 185, 143, 0.06)'
    : 'rgba(44, 120, 115, 0.08)';

  const orbColor3 = variant === 'light'
    ? 'rgba(168, 213, 186, 0.05)'
    : 'rgba(200, 230, 201, 0.06)';

  const sparkleColor = variant === 'light' ? '#6FB98F' : '#A8D5BA';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Enhanced Gradient orbs with more motion */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{ 
          background: `radial-gradient(circle, ${orbColor1}, transparent)`,
          width: 450,
          height: 450,
          top: '10%',
          right: '10%'
        }}
        animate={{ 
          y: [0, -40, 20, 0],
          x: [0, 30, -20, 0],
          scale: [1, 1.2, 0.95, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{ 
          background: `radial-gradient(circle, ${orbColor2}, transparent)`,
          width: 400,
          height: 400,
          bottom: '10%',
          left: '5%'
        }}
        animate={{ 
          y: [0, 40, -25, 0],
          x: [0, -25, 15, 0],
          scale: [1, 1.25, 0.9, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{ 
          background: `radial-gradient(circle, ${orbColor3}, transparent)`,
          width: 350,
          height: 350,
          top: '50%',
          left: '50%'
        }}
        animate={{ 
          y: [0, -30, 30, 0],
          x: [0, 35, -35, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* More Floating sparkles with enhanced motion */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 3) * 25}%`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (i % 2 === 0 ? 15 : -15), 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1.2, 0],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4
          }}
        >
          <Sparkles className="w-3 h-3" style={{ color: sparkleColor }} />
        </motion.div>
      ))}

      {/* Animated floating circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? '#0A4A4A' : '#6FB98F',
            opacity: 0.08,
            width: 20 + i * 10,
            height: 20 + i * 10,
            left: `${20 + i * 12}%`,
            top: `${25 + i * 10}%`
          }}
          animate={{
            y: [0, -50 - i * 5, 0],
            x: [0, (i % 2 === 0 ? 30 : -30), 0],
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6
          }}
        />
      ))}

      {/* Enhanced dots pattern with animation */}
      <div className="absolute inset-0" style={{ opacity: 0.03 }}>
        {[...Array(6)].map((_, row) => (
          <div key={`row-${row}`} className="flex justify-around" style={{ marginTop: '12%' }}>
            {[...Array(10)].map((_, col) => (
              <motion.div
                key={`dot-${row}-${col}`}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: variant === 'light' ? '#0A4A4A' : '#6FB98F' }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (row * 0.15) + (col * 0.08)
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Wavy lines decoration */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            ${variant === 'light' ? 'rgba(10, 74, 74, 0.02)' : 'rgba(111, 185, 143, 0.03)'} 100px,
            ${variant === 'light' ? 'rgba(10, 74, 74, 0.02)' : 'rgba(111, 185, 143, 0.03)'} 102px
          )`
        }}
        animate={{
          backgroundPosition: ['0px 0px', '200px 200px']
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
