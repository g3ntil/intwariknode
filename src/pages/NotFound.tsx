import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search, Map, Sparkles } from 'lucide-react';
import { DecorativeDots } from '../components/DecorativeDots';
import { SEO } from '../components/SEO';

export function NotFound() {
  const popularPages = [
    { name: 'Home', href: '/', icon: Home, color: '#0A4A4A' },
    { name: 'Web Development', href: '/web-development', icon: Search, color: '#2C7873' },
    { name: 'Software Development', href: '/software-development', icon: Search, color: '#6FB98F' },
    { name: 'Get Started', href: '/get-started', icon: ArrowRight, color: '#0A4A4A' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO 
        title="404 - Page Not Found | INTWARI Knode"
        description="The page you're looking for doesn't exist. Explore our web development, software development, and digital services in Rwanda."
        keywords="404, page not found, INTWARI Knode Rwanda"
        canonical="https://intwari.com/404"
      />

      {/* Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ 
          background: 'linear-gradient(135deg, #C8E6C9 0%, #B8E0D2 50%, #A8D5BA 100%)'
        }}
      >
        {/* Animated gradient overlay */}
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

        {/* Gradient orbs */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(111, 185, 143, 0.3), transparent)',
            width: 500,
            height: 500,
            top: '10%',
            right: '5%'
          }}
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(44, 120, 115, 0.2), transparent)',
            width: 400,
            height: 400,
            bottom: '10%',
            left: '5%'
          }}
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Decorative dots */}
      <DecorativeDots variant="green" position="top-left" size="lg" />
      <DecorativeDots variant="blue" position="top-right" size="md" />
      <DecorativeDots variant="purple" position="bottom-left" size="md" />
      <DecorativeDots variant="pink" position="bottom-right" size="lg" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block relative"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 
                className="text-[10rem] sm:text-[12rem] md:text-[15rem] leading-none tracking-tighter"
                style={{ 
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #0A4A4A 0%, #2C7873 50%, #6FB98F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                404
              </h1>
              
              {/* Floating sparkles around 404 */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4
                  }}
                >
                  <Sparkles className="w-6 h-6 text-[#6FB98F]" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight"
              style={{ fontWeight: 800 }}
            >
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital wilderness. 
              Let's get you back on track!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/">
              <motion.div
                className="px-8 py-4 rounded-full inline-flex items-center gap-2 text-white shadow-lg"
                style={{ 
                  backgroundColor: '#0A4A4A',
                  fontWeight: 700
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: '0 20px 40px -10px rgba(10, 74, 74, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-5 h-5" />
                Back to Home
              </motion.div>
            </Link>

            <Link to="/get-started">
              <motion.div
                className="px-8 py-4 rounded-full inline-flex items-center gap-2 border-2 shadow-sm"
                style={{ 
                  borderColor: '#0A4A4A',
                  color: '#0A4A4A',
                  fontWeight: 700,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  backgroundColor: '#0A4A4A',
                  color: '#fff'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowRight className="w-5 h-5" />
                Get Started
              </motion.div>
            </Link>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p 
              className="text-sm mb-6"
              style={{ 
                fontWeight: 600,
                color: '#0A4A4A'
              }}
            >
              Or explore these popular pages:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {popularPages.map((page, idx) => {
                const Icon = page.icon;
                return (
                  <Link key={idx} to={page.href}>
                    <motion.div
                      className="p-6 rounded-2xl border backdrop-blur-sm hover:shadow-xl transition-all group"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        borderColor: 'rgba(10, 74, 74, 0.1)'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      whileHover={{ 
                        y: -5,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <motion.div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${page.color}15` }}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: page.color }} />
                        </motion.div>
                        <span 
                          className="text-sm group-hover:text-[#0A4A4A] transition-colors"
                          style={{ fontWeight: 600 }}
                        >
                          {page.name}
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 p-6 rounded-2xl border backdrop-blur-sm max-w-2xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderColor: 'rgba(10, 74, 74, 0.1)'
            }}
          >
            <Map className="w-8 h-8 mx-auto mb-3 text-[#2C7873]" />
            <p className="text-sm text-gray-700">
              <span style={{ fontWeight: 600 }}>Lost?</span> Contact us at{' '}
              <a 
                href="mailto:hello@intwari.com"
                className="text-[#0A4A4A] hover:text-[#2C7873] transition-colors"
                style={{ fontWeight: 600 }}
              >
                hello@intwari.com
              </a>
              {' '}and we'll help you find what you're looking for!
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}