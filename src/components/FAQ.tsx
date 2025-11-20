import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Plus, Minus, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
}

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultFAQs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope. A standard website takes 2-10 weeks, while custom software can take 4-15 weeks. We\'ll provide a detailed timeline during our consultation.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing based on your needs. Web development starts at $50, software development at $150, photography at $30, and social media management at $50/month. Contact us for a custom quote.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes! All our services include ongoing support. We offer maintenance packages, updates, and technical support to ensure your digital presence stays strong.'
    },
    {
      question: 'Can I see examples of your work?',
      answer: 'Absolutely! Check out our portfolio section to see case studies, client testimonials, and examples of our recent projects across all service areas.'
    },
    {
      question: 'What makes INTWARI Knode different?',
      answer: 'We focus on results through innovative technologies. Our fast delivery, modern solutions, and commitment to helping businesses increase their online presence set us apart.'
    }
  ];

  const faqsToShow = faqs || defaultFAQs;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F3ED' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(10, 74, 74, 0.06), transparent)',
            width: 400,
            height: 400,
            top: '5%',
            right: '10%'
          }}
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(111, 185, 143, 0.06), transparent)',
            width: 350,
            height: 350,
            bottom: '10%',
            left: '5%'
          }}
          animate={{ 
            y: [0, 25, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Floating sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <Sparkles className="w-3 h-3 text-[#6FB98F]" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            <HelpCircle className="w-4 h-4" style={{ color: '#0A4A4A' }} />
            <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
              Got Questions?
            </span>
          </motion.div>

          <motion.h2 
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] tracking-tight mb-4" 
            style={{ fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Everything you need to know about our services
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqsToShow.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <motion.div
                className="bg-white border rounded-3xl overflow-hidden transition-all duration-300"
                style={{ 
                  borderColor: openIndex === idx ? '#0A4A4A' : 'rgba(10, 74, 74, 0.1)'
                }}
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 10px 30px -10px rgba(10, 74, 74, 0.2)'
                }}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 md:px-8 py-6 md:py-7 flex items-start justify-between text-left transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient overlay on open */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(10, 74, 74, 0.03), rgba(111, 185, 143, 0.03))',
                      opacity: openIndex === idx ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex-1 pr-4 relative z-10">
                    {/* Question number */}
                    <motion.span 
                      className="inline-block text-xs mb-2 px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: openIndex === idx ? '#0A4A4A' : 'rgba(10, 74, 74, 0.08)',
                        color: openIndex === idx ? '#FFFFFF' : '#0A4A4A',
                        fontWeight: 600
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Q{idx + 1}
                    </motion.span>
                    
                    <span 
                      className="block text-base md:text-lg mt-1" 
                      style={{ 
                        fontWeight: 600,
                        color: openIndex === idx ? '#0A4A4A' : '#000000'
                      }}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Icon button */}
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden"
                    style={{ 
                      backgroundColor: openIndex === idx ? '#0A4A4A' : 'rgba(10, 74, 74, 0.08)'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Ripple effect */}
                    {openIndex === idx && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: '#0A4A4A' }}
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}

                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === idx ? (
                        <Minus className="w-5 h-5 text-white relative z-10" />
                      ) : (
                        <Plus className="w-5 h-5 relative z-10" style={{ color: '#0A4A4A' }} />
                      )}
                    </motion.div>
                  </motion.div>
                </button>
                
                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === idx ? 'auto' : 0,
                    opacity: openIndex === idx ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    className="px-6 md:px-8 pb-6 md:pb-7"
                    initial={false}
                    animate={{
                      y: openIndex === idx ? 0 : -10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decorative line */}
                    <div className="w-12 h-1 rounded-full mb-4" style={{ backgroundColor: '#6FB98F' }} />
                    
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 p-8 rounded-3xl border"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(10, 74, 74, 0.1)'
          }}
        >
          <h3 className="text-xl md:text-2xl mb-3" style={{ fontWeight: 700 }}>
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Get in touch with our team.
          </p>
          <Link to="/get-started">
            <motion.div
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white"
              style={{ 
                backgroundColor: '#0A4A4A',
                fontWeight: 700
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 30px -10px rgba(10, 74, 74, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contact Us</span>
              <HelpCircle className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}