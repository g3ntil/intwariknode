import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useRef } from 'react';
import photographyImage from 'figma:asset/2e38f1e75ac270d700b9dadabcc0717963377805.png';
import websiteImage from 'figma:asset/a56853fc09aeafd1a45d07b79424c5a5205e81f3.png';
import socialMediaImage from 'figma:asset/367fde1dabcce142d6664de1efcb73c56adfaa25.png';

export function Portfolio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      title: 'Connection Café Photography',
      category: 'Business Photography',
      description: 'Professional business photography for café in Musanze city',
      location: 'Musanze, Street 227',
      image: photographyImage,
      result: 'Clean Brand Photos'
    },
    {
      title: 'Connection Café Website',
      category: 'Web Development',
      description: 'Menu QR code system, reservation system & CMS for management',
      location: 'Musanze, Street 227',
      image: websiteImage,
      result: 'No Confusion'
    },
    {
      title: 'Connection Café Social Media',
      category: 'Social Media Management',
      description: 'Instagram management with high engagement',
      location: 'Musanze, Street 227',
      image: socialMediaImage,
      result: 'High Engagement'
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden" id="portfolio" style={{ backgroundColor: '#C8E6C9' }}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#A8D5BA', width: 180, height: 180, top: '15%', right: '5%', opacity: 0.25 }}
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#D4EFE7', width: 120, height: 120, bottom: '25%', left: '8%', opacity: 0.25 }}
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p 
            className="text-[10px] md:text-xs tracking-[0.3em] text-black/40 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            RECENT WORK
          </motion.p>
          <motion.h2 
            className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] tracking-[-0.03em]" 
            style={{ fontWeight: 900 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Recent Projects
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, idx) => {
            const y = useTransform(scrollYProgress, [0, 1], [100 - (idx * 30), -50 + (idx * 30)]);
            
            return (
              <motion.div
                key={idx}
                style={{ y }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <motion.div 
                  className="relative overflow-hidden mb-6 aspect-[4/3] border rounded-[28px] shadow-lg"
                  style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 25px 50px -12px rgba(10, 74, 74, 0.25)'
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, transparent 50%, rgba(10, 74, 74, 0.1) 50%)',
                      borderTopRightRadius: '28px'
                    }}
                  />

                  {/* Image with enhanced effects */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover ${
                      idx === 1 ? 'scale-125' : ''
                    }`}
                    style={{ filter: 'grayscale(100%)' }}
                    whileHover={{ 
                      filter: 'grayscale(0%)',
                      scale: idx === 1 ? 1.35 : 1.15
                    }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Overlay with icon */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: 'rgba(0, 0, 0, 0)' }}
                    whileHover={{ background: 'rgba(10, 74, 74, 0.4)' }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="relative"
                      initial={{ scale: 0, rotate: -180, opacity: 0 }}
                      whileHover={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {/* Pulsing ring around icon */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ 
                          border: '2px solid rgba(255, 255, 255, 0.5)',
                          width: 50,
                          height: 50,
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <ExternalLink className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                  </motion.div>

                  {/* Animated border on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-[28px] border-2 opacity-0 group-hover:opacity-100"
                    style={{ borderColor: '#0A4A4A' }}
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <div className="mb-2">
                  <motion.p 
                    className="text-[10px] md:text-xs tracking-[0.2em] text-black/40 mb-3"
                    initial={{ opacity: 0.4 }}
                    whileHover={{ opacity: 0.8 }}
                  >
                    {project.category.toUpperCase()}
                  </motion.p>
                  <motion.h3 
                    className="text-xl md:text-2xl mb-3 group-hover:translate-x-1 transition-transform duration-300" 
                    style={{ fontWeight: 700 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-sm md:text-base opacity-60 mb-2 group-hover:opacity-80 transition-opacity">
                    {project.description}
                  </p>
                  <p className="text-xs text-black/40 mb-3 italic">
                    {project.location}
                  </p>
                  <motion.div 
                    className="inline-block px-4 py-2 bg-black text-white text-xs md:text-sm rounded-full" 
                    style={{ fontWeight: 600 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {project.result}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 md:mt-20"
        >
          <motion.a
            href="/get-started"
            className="border-2 border-black px-10 py-5 rounded-full inline-flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-sm md:text-base" style={{ fontWeight: 600 }}>Start Your Project</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
