import { motion, useScroll } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Camera, BarChart3 } from 'lucide-react';
import { useRef } from 'react';

export function ServicesSnapshot() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites built for performance and conversion',
      bgColor: '#F5F3ED',
      iconBg: '#0A4A4A',
      iconColor: '#FFFFFF',
      link: '/web-development'
    },
    {
      icon: Smartphone,
      title: 'Software Development',
      description: 'Powerful applications tailored to your business needs',
      bgColor: '#F5F3ED',
      iconBg: '#2C7873',
      iconColor: '#FFFFFF',
      link: '/software-development'
    },
    {
      icon: Camera,
      title: 'Business Photography',
      description: 'Professional photos that showcase your brand',
      bgColor: '#F5F3ED',
      iconBg: '#6FB98F',
      iconColor: '#FFFFFF',
      link: '/business-photography'
    },
    {
      icon: BarChart3,
      title: 'Social Media',
      description: 'Grow your audience with strategic content',
      bgColor: '#F5F3ED',
      iconBg: '#0A4A4A',
      iconColor: '#FFFFFF',
      link: '/social-media-management'
    }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-20 md:py-32 relative overflow-hidden" id="services" style={{ backgroundColor: '#C8E6C9' }}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#B8E0D2', width: 200, height: 200, top: '10%', left: '10%', opacity: 0.25 }}
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#E8F5E9', width: 150, height: 150, bottom: '15%', right: '12%', opacity: 0.25 }}
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-8 lg:px-6 md:px-12 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-base lg:text-sm text-gray-500 mb-4 lg:mb-3 tracking-wider uppercase" 
            style={{ fontWeight: 600 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What We Do
          </motion.p>
          <motion.h2 
            className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4rem] leading-[1.1] tracking-tight mb-6 lg:mb-4" 
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Digital Marketing & Online Solutions
          </motion.h2>
          <motion.p 
            className="text-xl lg:text-lg text-gray-600 max-w-2xl mx-auto px-4 lg:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive online marketing and digital solutions to grow your business in Rwanda
          </motion.p>
        </motion.div>

        {/* Services Grid - Enhanced with Sophisticated Interactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -12 }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundColor: service.bgColor }}
              className="p-8 rounded-[32px] border hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              {/* Animated gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${service.iconBg}15, transparent)`
                }}
              />

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-[32px] border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderColor: service.iconBg }}
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1 }}
              />

              {/* Floating dots around card on hover */}
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{ backgroundColor: service.iconBg, top: 20, right: 20, opacity: 0 }}
                animate={{ opacity: [0, 1, 0], y: [0, -10, -20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{ backgroundColor: service.iconBg, bottom: 20, left: 20, opacity: 0 }}
                animate={{ opacity: [0, 1, 0], y: [0, 10, 20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              />

              <Link to={service.link} className="block relative z-10">
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    whileTap={{ scale: 1.25, rotate: 18 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 12 }}
                    style={{ backgroundColor: service.iconBg }}
                    className="w-20 lg:w-16 h-20 lg:h-16 rounded-2xl flex items-center justify-center mb-8 lg:mb-6 shadow-lg relative overflow-hidden group/icon"
                  >
                    {/* Icon background shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <service.icon 
                        style={{ color: service.iconColor }} 
                        className="w-10 lg:w-8 h-10 lg:h-8 relative z-10 group-hover/icon:scale-110 transition-transform" 
                        strokeWidth={2} 
                      />
                    </motion.div>
                  </motion.div>

                  <motion.h3 
                    className="text-2xl lg:text-xl md:text-2xl mb-3 lg:mb-2"
                    style={{ fontWeight: 700 }}
                    whileHover={{ y: -2 }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p 
                    className="text-base lg:text-sm md:text-base text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Animated arrow indicator */}
                  <motion.div
                    className="flex items-center gap-2 mt-4 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: service.iconBg, fontWeight: 600 }}
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span>Learn More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
