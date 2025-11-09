import { motion, useScroll, useTransform } from 'motion/react';
import { MessageSquare, Lightbulb, Code, Rocket, ArrowDown } from 'lucide-react';
import { useRef } from 'react';

export function ProcessStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Talk',
      description: 'We listen to your goals and understand your vision',
      detail: 'Free consultation to explore your ideas and requirements',
      bgColor: '#F5F3ED',
      iconBg: '#0A4A4A',
      borderColor: '#2C7873',
      duration: '1-2 days'
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Plan',
      description: 'Strategic roadmap designed for your success',
      detail: 'Detailed proposal with timeline, milestones, and deliverables',
      bgColor: '#F5F3ED',
      iconBg: '#2C7873',
      borderColor: '#6FB98F',
      duration: '3-5 days'
    },
    {
      icon: Code,
      number: '03',
      title: 'Build',
      description: 'Expert development with precision and care',
      detail: 'Regular updates and opportunities for feedback throughout',
      bgColor: '#F5F3ED',
      iconBg: '#6FB98F',
      borderColor: '#A8D5BA',
      duration: '2-12 weeks'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch',
      description: 'Go live and watch your business grow',
      detail: 'Ongoing support and optimization to ensure success',
      bgColor: '#F5F3ED',
      iconBg: '#0A4A4A',
      borderColor: '#2C7873',
      duration: '1 day'
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 overflow-hidden relative" style={{ backgroundColor: '#C8E6C9' }}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#B8E0D2', width: 160, height: 160, top: '12%', left: '5%', opacity: 0.2 }}
          animate={{ y: [0, -18, 0], x: [0, 10, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#E8F5E9', width: 130, height: 130, bottom: '18%', right: '8%', opacity: 0.2 }}
          animate={{ y: [0, 22, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.p 
            className="text-sm text-gray-500 mb-3 tracking-wide uppercase" 
            style={{ fontWeight: 600 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Process
          </motion.p>
          <motion.h2 
            className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] tracking-tight mb-4" 
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            How We Work
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A simple, proven process to bring your vision to life
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, #6FB98F, #A8D5BA, #B8E0D2)'
            }}
          />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 w-0.5 -translate-x-1/2 origin-top"
            style={{
              background: 'linear-gradient(to bottom, #0A4A4A, #2C7873, #6FB98F)',
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
            }}
          />

          {/* Steps */}
          <div className="space-y-8 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        style={{ 
                          backgroundColor: step.bgColor,
                          borderColor: step.borderColor
                        }}
                        className="p-8 rounded-3xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
                      >
                        {/* Step Number Badge */}
                        <div className={`absolute -top-4 ${isEven ? 'md:right-8' : 'md:left-8'} left-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform`} style={{ fontWeight: 700 }}>
                          {step.number}
                        </div>

                        {/* Duration Badge */}
                        <motion.div 
                          className="inline-block px-3 py-1 bg-white/60 rounded-full text-xs mb-4 backdrop-blur-sm border border-black/5" 
                          style={{ fontWeight: 600 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          ⏱️ {step.duration}
                        </motion.div>

                        <h3 className="text-2xl md:text-3xl mb-3 group-hover:translate-x-1 transition-transform" style={{ fontWeight: 700 }}>
                          {step.title}
                        </h3>

                        <p className="text-base md:text-lg text-gray-700 mb-3 leading-relaxed">
                          {step.description}
                        </p>

                        <p className="text-sm text-gray-600 italic">
                          {step.detail}
                        </p>
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden md:flex items-center justify-center z-10 relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        style={{ backgroundColor: step.iconBg }}
                        className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-white cursor-pointer relative overflow-hidden group"
                      >
                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <step.icon className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform" strokeWidth={2} />
                      </motion.div>
                    </div>

                    {/* Mobile Icon */}
                    <div 
                      style={{ backgroundColor: step.iconBg }}
                      className="md:hidden w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                    >
                      <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>

                  {/* Arrow Connector (Mobile) */}
                  {idx < steps.length - 1 && (
                    <motion.div 
                      className="md:hidden flex justify-center mt-6"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowDown className="w-6 h-6 text-gray-300" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            style={{ backgroundColor: '#F3F1F7' }}
            className="inline-block p-8 rounded-3xl border border-black/5 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg text-gray-700 mb-2">
              <span style={{ fontWeight: 700 }}>Ready to start your journey?</span>
            </p>
            <p className="text-gray-600">We'll guide you through every step of the way</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
