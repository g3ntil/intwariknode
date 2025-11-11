import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { DecorativeDots } from './DecorativeDots';
import { InlineStats } from './InlineStats';

export function Hero() {
  const stats = [
    { value: '150+', label: 'Happy Clients', color: '#0A4A4A' },
    { value: '250+', label: 'Projects Delivered', color: '#2C7873' },
    { value: '98%', label: 'Satisfaction Rate', color: '#6FB98F' }
  ];

  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-32 pb-16 sm:pb-20 lg:pb-16 px-6 sm:px-8 lg:px-12 min-h-screen"
      id="home"
      style={{ 
        background: 'linear-gradient(135deg, #C8E6C9 0%, #B8E0D2 50%, #A8D5BA 100%)'
      }}
    >
      {/* Smooth gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(184, 224, 210, 0.5), transparent 70%)'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Decorative animated dots - matching service pages */}
      <DecorativeDots variant="green" position="top-left" size="lg" />
      <DecorativeDots variant="blue" position="top-right" size="md" />
      <DecorativeDots variant="purple" position="bottom-left" size="md" />
      <DecorativeDots variant="pink" position="bottom-right" size="lg" />

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full mb-8 sm:mb-10 lg:mb-8 border backdrop-blur-sm text-xs sm:text-sm"
            style={{ 
              backgroundColor: 'rgba(10, 74, 74, 0.08)',
              borderColor: 'rgba(10, 74, 74, 0.15)',
              fontWeight: 600
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#0A4A4A' }}>
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#0A4A4A' }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span>250+ brands served • 98% satisfaction • Fast 2-week delivery</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 sm:mb-8 lg:mb-6 px-4"
          >
            <h1 className="text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] tracking-tight">
              <span className="block" style={{ fontWeight: 800 }}>
                Digital Solutions
              </span>
              <span className="block mt-1 sm:mt-2" style={{ fontWeight: 800 }}>
                That Drive{' '}
                <motion.span
                  className="inline-block"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #0A4A4A 0%, #2C7873 50%, #6FB98F 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    backgroundSize: '200% auto',
                  }}
                  animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  Real Growth
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-7 sm:mb-9 lg:mb-7 leading-relaxed px-4"
            style={{ fontWeight: 500 }}
          >
            Your trusted digital marketing agency in Rwanda. We deliver professional online marketing, 
            kwamamaza (advertising), and high-converting websites that boost revenue — delivered in 2-3 weeks.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2.5 mb-8 sm:mb-10 lg:mb-8 px-4"
          >
            {['Fast delivery', 'Unlimited revisions', '24/7 support'].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-1.5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#0A4A4A' }}
                >
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-xs sm:text-sm" style={{ fontWeight: 600 }}>
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-10 w-full max-w-md sm:max-w-none px-4"
          >
            {/* Primary CTA */}
            <Link to="/get-started">
              <motion.div
                className="group relative px-7 sm:px-9 lg:px-10 py-3.5 sm:py-4 lg:py-4.5 rounded-full text-white flex items-center justify-center gap-2.5 overflow-hidden shadow-lg w-full sm:w-auto"
                style={{ 
                  backgroundColor: '#0A4A4A',
                  fontWeight: 700,
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px -10px rgba(10, 74, 74, 0.4)',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, #2C7873 0%, #0A4A4A 100%)' }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 text-sm sm:text-base lg:text-lg">Get Started Free</span>
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.div>
            </Link>

            {/* Secondary CTA */}
            <Link to="/portfolio">
              <motion.div
                className="px-7 sm:px-9 lg:px-10 py-3.5 sm:py-4 lg:py-4.5 rounded-full flex items-center justify-center border-2 backdrop-blur-sm w-full sm:w-auto"
                style={{ 
                  borderColor: 'rgba(10, 74, 74, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 700,
                }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: '#0A4A4A',
                  backgroundColor: '#FFFFFF',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className="text-sm sm:text-base lg:text-lg">View Our Work</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Inline Stats */}
          <div className="w-full max-w-2xl lg:max-w-3xl px-4">
            <InlineStats stats={stats} delay={0.6} />
          </div>

        </div>
      </div>
    </section>
  );
}