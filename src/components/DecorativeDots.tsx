import { motion } from 'motion/react';

interface DecorativeDotsProps {
  variant?: 'purple' | 'yellow' | 'green' | 'blue' | 'pink';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size?: 'sm' | 'md' | 'lg';
}

export function DecorativeDots({ variant = 'purple', position = 'top-right', size = 'md' }: DecorativeDotsProps) {
  const colors = {
    purple: '#E5D9F2',
    yellow: '#FFF4E0',
    green: '#D5F4E6',
    blue: '#D4E7F7',
    pink: '#FFE4E9'
  };

  const positions = {
    'top-left': 'top-10 left-10',
    'top-right': 'top-10 right-10',
    'bottom-left': 'bottom-10 left-10',
    'bottom-right': 'bottom-10 right-10',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  const sizes = {
    sm: { large: 80, medium: 50, small: 30 },
    md: { large: 120, medium: 70, small: 40 },
    lg: { large: 160, medium: 100, small: 60 }
  };

  const dotSize = sizes[size];

  return (
    <div className={`absolute ${positions[position]} pointer-events-none z-0`}>
      <motion.div
        className="relative"
        animate={{
          y: [0, -35, 15, 0],
          x: [0, 20, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            background: colors[variant],
            width: dotSize.large,
            height: dotSize.large,
            opacity: 0.5,
          }}
          animate={{
            scale: [1, 1.25, 0.9, 1],
            opacity: [0.5, 0.7, 0.4, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            background: colors[variant],
            width: dotSize.medium,
            height: dotSize.medium,
            opacity: 0.6,
            top: dotSize.large * 0.6,
            left: dotSize.large * 0.8,
          }}
          animate={{
            scale: [1, 1.3, 0.85, 1],
            opacity: [0.6, 0.8, 0.45, 0.6],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            background: colors[variant],
            width: dotSize.small,
            height: dotSize.small,
            opacity: 0.7,
            top: -dotSize.small * 0.3,
            left: dotSize.large * 0.3,
          }}
          animate={{
            scale: [1, 1.4, 0.8, 1],
            opacity: [0.7, 0.9, 0.5, 0.7],
            y: [0, -15, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Additional small decorative dots */}
        <motion.div
          className="absolute rounded-full"
          style={{
            background: colors[variant],
            width: dotSize.small * 0.6,
            height: dotSize.small * 0.6,
            opacity: 0.5,
            top: dotSize.large * 0.3,
            left: -dotSize.small * 0.5,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        <motion.div
          className="absolute rounded-full"
          style={{
            background: colors[variant],
            width: dotSize.small * 0.7,
            height: dotSize.small * 0.7,
            opacity: 0.55,
            bottom: dotSize.small * 0.2,
            right: -dotSize.small * 0.3,
          }}
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.55, 0.85, 0.55],
            y: [0, 12, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>
    </div>
  );
}
