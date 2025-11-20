import { motion, useInView } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  icon?: LucideIcon;
  color: string;
}

interface InlineStatsProps {
  stats: StatItem[];
  delay?: number;
}

export function InlineStats({ stats, delay = 0.6 }: InlineStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto"
    >
      {stats.map((stat, idx) => (
        <StatCard key={idx} stat={stat} index={idx} delay={delay} />
      ))}
    </motion.div>
  );
}

function StatCard({ stat, index, delay }: { stat: StatItem; index: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  
  // Extract number from value for animation
  const extractNumber = (value: string): number => {
    const match = value.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const getPrefix = (value: string): string => {
    const match = value.match(/^[^\d]*/);
    return match ? match[0] : '';
  };

  const getSuffix = (value: string): string => {
    const match = value.match(/[^\d.]+$/);
    return match ? match[0] : '';
  };

  const targetNumber = extractNumber(stat.value);
  const prefix = getPrefix(stat.value);
  const suffix = getSuffix(stat.value);

  // Animate counter when in view
  useEffect(() => {
    if (!isInView) return;
    
    const duration = 1500;
    const steps = 50;
    const increment = targetNumber / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(prev => Math.min(prev + increment, targetNumber));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  const formatCount = (num: number): string => {
    if (targetNumber % 1 !== 0) {
      return num.toFixed(1);
    }
    return Math.round(num).toString();
  };

  return (
    <motion.div
      ref={ref}
      className="p-3 sm:p-4 rounded-xl text-center border backdrop-blur-sm"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderColor: 'rgba(10, 74, 74, 0.1)',
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: delay + 0.1 + index * 0.05,
        duration: 0.3,
      }}
      whileHover={{
        y: -2,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderColor: 'rgba(10, 74, 74, 0.2)',
      }}
    >
      {/* Animated number */}
      <div
        className="text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1"
        style={{ fontWeight: 700 }}
      >
        {prefix}{formatCount(count)}{suffix}
      </div>

      {/* Label */}
      <div className="text-[10px] sm:text-xs text-gray-600">
        {stat.label}
      </div>
    </motion.div>
  );
}