import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DecorativeDots } from './DecorativeDots';

export function CTAStrip() {
  const benefits = [
    'Free consultation',
    '24-hour response time',
    'Money-back guarantee',
    'Ongoing support'
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0A4A4A', color: '#FFFFFF' }}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#2C7873', width: 200, height: 200, top: '10%', left: '5%', opacity: 0.15 }}
          animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#6FB98F', width: 150, height: 150, bottom: '15%', right: '8%', opacity: 0.15 }}
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#2C7873', width: 120, height: 120, top: '50%', right: '15%', opacity: 0.1 }}
          animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 cursor-default"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🎯
            </motion.span>
            <span className="text-sm" style={{ fontWeight: 600 }}>
              Limited Spots Available
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] tracking-tight mb-6"
            style={{ fontWeight: 700 }}
          >
            Ready to Grow
            <br />
            Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12"
          >
            Join 50+ businesses that have transformed their digital presence with us
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-center gap-2 group cursor-pointer relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.15, x: 8 }}
              >
                {/* Animated glow behind icon */}
                <motion.div
                  className="absolute left-0 w-5 h-5 rounded-full blur-lg"
                  style={{ backgroundColor: '#6FB98F' }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 0.6, scale: 2 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10,
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.3
                    }
                  }}
                  animate={{
                    rotate: [0, 10, -10, 0]
                  }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors relative z-10" />
                </motion.div>
                
                <motion.span 
                  className="text-sm text-white/80 group-hover:text-white transition-colors"
                  whileHover={{ letterSpacing: '0.02em' }}
                >
                  {benefit}
                </motion.span>

                {/* Underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/get-started">
              <motion.div
                className="px-10 py-5 rounded-full inline-flex items-center gap-2 shadow-2xl group relative overflow-hidden"
                style={{ backgroundColor: '#F5F3ED', color: '#0A4A4A', fontWeight: 600 }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F3ED 100%)'
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)'
                  }}
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                <span className="relative z-10">Get Started Now</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>

                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: '#0A4A4A' }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </Link>

            <Link to="/about">
              <motion.div
                className="px-10 py-5 rounded-full border-2 transition-all duration-300"
                style={{ backgroundColor: 'rgba(245, 243, 237, 0.1)', color: '#FFFFFF', borderColor: 'rgba(245, 243, 237, 0.2)', fontWeight: 600 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 243, 237, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}