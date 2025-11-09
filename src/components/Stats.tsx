import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TrendingUp, Award, Users, ArrowRight } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      description: 'Across Rwanda',
      color: '#0A4A4A',
      gradient: 'from-[#0A4A4A] to-[#2C7873]'
    },
    {
      icon: Award,
      number: '250+',
      label: 'Projects Completed',
      description: 'And counting',
      color: '#2C7873',
      gradient: 'from-[#2C7873] to-[#6FB98F]'
    },
    {
      icon: TrendingUp,
      number: '450%',
      label: 'Average Growth',
      description: 'For our clients',
      color: '#6FB98F',
      gradient: 'from-[#6FB98F] to-[#A8D5BA]'
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F3ED' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient orbs */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(10, 74, 74, 0.08), transparent)',
            width: 400,
            height: 400,
            top: '10%',
            right: '5%'
          }}
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(111, 185, 143, 0.08), transparent)',
            width: 350,
            height: 350,
            bottom: '10%',
            left: '10%'
          }}
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Floating sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 30}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          >
            <Award className="w-4 h-4 text-[#6FB98F]" />
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              backgroundColor: 'rgba(10, 74, 74, 0.08)',
              border: '1px solid rgba(10, 74, 74, 0.1)'
            }}
          >
            <TrendingUp className="w-4 h-4" style={{ color: '#0A4A4A' }} />
            <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
              Our Impact
            </span>
          </motion.div>

          <motion.h2 
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] tracking-tight mb-4" 
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Results That Matter
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Real numbers from real businesses we've helped grow
          </motion.p>
        </motion.div>

        {/* Stats Grid - New Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                className="relative p-8 rounded-3xl border overflow-hidden h-full"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  borderColor: 'rgba(10, 74, 74, 0.1)'
                }}
                whileHover={{ 
                  y: -8,
                  borderColor: stat.color
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl"
                  style={{ backgroundColor: stat.color, opacity: 0.05 }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl relative"
                    style={{ 
                      backgroundColor: `${stat.color}10`
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ 
                      rotate: { duration: 0.5 },
                      scale: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    {/* Icon glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-50"
                      style={{ backgroundColor: stat.color }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <stat.icon 
                      className="w-7 h-7 relative z-10" 
                      strokeWidth={2.5}
                      style={{ color: stat.color }}
                    />
                  </motion.div>

                  {/* Number */}
                  <motion.div 
                    className="text-4xl md:text-5xl mb-2 bg-clip-text text-transparent bg-gradient-to-br"
                    style={{ 
                      fontWeight: 800,
                      backgroundImage: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}CC 100%)`
                    }}
                    whileHover={{ 
                      scale: 1.05
                    }}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <div className="text-base mb-1" style={{ fontWeight: 600 }}>
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>

                  {/* Animated progress bar */}
                  <motion.div
                    className="mt-6 h-1 rounded-full overflow-hidden"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: stat.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: idx * 0.1 + 0.5,
                        duration: 1,
                        ease: "easeOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Floating particles on hover */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                    style={{ 
                      backgroundColor: stat.color,
                      left: `${30 + i * 20}%`,
                      bottom: '20%'
                    }}
                    animate={{ 
                      y: [0, -40, -80],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.2, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link to="/get-started">
            <motion.div
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white"
              style={{ 
                backgroundColor: '#0A4A4A',
                fontWeight: 700
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px -10px rgba(10, 74, 74, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Growth Journey</span>
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}