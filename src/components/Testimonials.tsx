import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      name: 'Manager',
      role: 'Connection Café',
      content: 'They handled everything. our menu QR system, the website, and clean brand photos. Easy process, fast delivery, and now customers scan, browse, and order without confusion.',
      rating: 5,
      color: '#F5F3ED'
    },
    {
      name: 'Managing Director',
      role: 'Construction Company',
      content: 'INTWARI Knode built us a simple, professional website that actually reflects our work. Clients find us easier, and proposals feel more serious with a proper online presence.',
      rating: 5,
      color: '#F5F3ED'
    },
    {
      name: 'CEO',
      role: 'Tour Company',
      content: 'We needed a website that sells the experience before guests even arrive clean tours, fast booking, and photos that actually show the atmosphere. INTWARI Knode delivered. Bookings feel smoother and guests mention they found us easier online. Good work.',
      rating: 5,
      color: '#F5F3ED'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const TestimonialCard = ({ testimonial, idx }: { testimonial: typeof testimonials[0], idx: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="p-8 rounded-[32px] border hover:shadow-2xl transition-all duration-500 relative overflow-hidden group h-full"
      style={{ backgroundColor: testimonial.color, borderColor: 'rgba(10, 74, 74, 0.1)' }}
    >
      {/* Enhanced gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at top left, rgba(10, 74, 74, 0.05), transparent 70%)'
        }}
      />

      {/* Animated border on hover */}
      <motion.div
        className="absolute inset-0 rounded-[32px] border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: '#0A4A4A' }}
        initial={{ scale: 0.98 }}
        whileHover={{ scale: 1 }}
      />

      {/* Floating sparkles on hover */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: '#6FB98F', top: 30, right: 30 }}
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          y: [0, -20]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: '#2C7873', bottom: 40, left: 40 }}
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          y: [0, 20]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.7
        }}
      />

      <div className="relative z-10">
        {/* Quote Icon with rotation animation */}
        <motion.div 
          className="mb-6"
          animate={{ 
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.15, rotate: 10 }}
        >
          <Quote 
            className="w-10 h-10 transition-colors duration-300" 
            style={{ color: 'rgba(10, 74, 74, 0.2)' }}
            fill="currentColor" 
          />
        </motion.div>

        {/* Stars with staggered animation */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1 + i * 0.08,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ 
                scale: 1.3, 
                rotate: 360,
                y: -5
              }}
              animate={{
                y: [0, -3, 0]
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }
              }}
            >
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </motion.div>
          ))}
        </div>

        {/* Content with letter spacing animation */}
        <motion.p 
          className="text-gray-700 mb-6 leading-relaxed"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1, letterSpacing: '0.01em' }}
          transition={{ duration: 0.3 }}
        >
          "{testimonial.content}"
        </motion.p>

        {/* Author with slide-in effect */}
        <motion.div 
          className="pt-6 border-t"
          style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
        >
          <motion.p 
            className="text-black mb-1"
            style={{ fontWeight: 600 }}
            whileHover={{ x: 3, color: '#0A4A4A' }}
            transition={{ duration: 0.2 }}
          >
            {testimonial.name}
          </motion.p>
          <motion.p 
            className="text-sm text-gray-600"
            whileHover={{ x: 3, color: '#2C7873' }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {testimonial.role}
          </motion.p>
        </motion.div>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ rotate: -45 }}
          whileHover={{ rotate: 0, scale: 1.2 }}
        >
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#0A4A4A' }}
          >
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-white text-xs">→</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#C8E6C9' }}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#A8D5BA', width: 170, height: 170, top: '8%', right: '10%', opacity: 0.2 }}
          animate={{ y: [0, -22, 0], x: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#D4EFE7', width: 110, height: 110, bottom: '12%', left: '12%', opacity: 0.2 }}
          animate={{ y: [0, 18, 0], rotate: [0, -90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-sm text-gray-500 mb-3 tracking-wide uppercase" 
            style={{ fontWeight: 600 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Testimonials
          </motion.p>
          <motion.h2 
            className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] tracking-tight mb-4" 
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            What Clients Say
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Real results from real businesses
          </motion.p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} idx={idx} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} idx={0} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="transition-all duration-300"
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-8 bg-black' : 'w-2 bg-black/20'
                    }`}
                  />
                </button>
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
