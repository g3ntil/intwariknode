import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Smartphone, Cpu, Database, Cloud, ArrowRight, CheckCircle2, Code, Layers, Settings, Zap, TrendingUp, Star, Sparkles, Rocket } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { FooterSimple } from '../components/FooterSimple';
import { DecorativeDots } from '../components/DecorativeDots';
import { SectionBackground } from '../components/SectionBackground';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';
import { InlineStats } from '../components/InlineStats';
import { pageMetadata } from '../config/seo';

export function SoftwareDevelopment() {
  const features = [
    { icon: Smartphone, label: 'Mobile Apps', color: '#0A4A4A' },
    { icon: Database, label: 'Database Design', color: '#2C7873' },
    { icon: Cloud, label: 'Cloud Solutions', color: '#6FB98F' },
    { icon: Code, label: 'Custom Software', color: '#0A4A4A' },
    { icon: Layers, label: 'API Integration', color: '#2C7873' },
    { icon: Cpu, label: 'AI & Automation', color: '#6FB98F' },
    { icon: Settings, label: 'System Integration', color: '#0A4A4A' },
    { icon: Zap, label: 'Performance', color: '#2C7873' }
  ];

  const results = [
    { value: '95%', label: 'Client Satisfaction', icon: Star, color: '#0A4A4A' },
    { value: '40+', label: 'Apps Built', icon: Smartphone, color: '#2C7873' },
    { value: '3x', label: 'Faster Development', icon: TrendingUp, color: '#6FB98F' }
  ];

  const faqs = [
    {
      question: 'What types of software do you build?',
      answer: 'We create custom business applications, management systems, mobile apps, CRM systems, inventory management tools, and automation software tailored to your specific business needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most software projects take 4-12 weeks, depending on complexity and required features. Simple applications may be completed in 3-4 weeks, while complex enterprise systems may take 10-15 weeks.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer comprehensive maintenance packages including bug fixes, updates, security patches, feature additions, and 24/7 technical support to keep your software running smoothly.'
    },
    {
      question: 'Can you integrate my software with existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with your current tools, databases, payment gateways, third-party APIs, and legacy systems to ensure everything works together perfectly.'
    },
    {
      question: 'Do you offer cloud-based or on-premise solutions?',
      answer: 'We develop both cloud-hosted and on-premise software solutions. Cloud solutions offer scalability and accessibility, while on-premise gives you full control. We help you choose the best option for your needs.'
    },
    {
      question: 'How do you ensure software security?',
      answer: 'We implement industry-standard security measures including data encryption, secure authentication, regular security audits, penetration testing, and compliance with data protection regulations.'
    },
    {
      question: 'Can you build mobile apps for both iOS and Android?',
      answer: 'Yes! We develop native and cross-platform mobile applications that work seamlessly on both iOS and Android devices, ensuring consistent user experience across all platforms.'
    }
  ];

  return (
    <div className="size-full overflow-x-hidden overflow-y-scroll">
      <SEO {...pageMetadata.softwareDevelopment} />
      <Navigation />

      {/* Hero */}
      <section 
        className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24 pb-20"
        style={{ 
          background: 'linear-gradient(135deg, #C8E6C9 0%, #B8E0D2 50%, #A8D5BA 100%)'
        }}
      >
        {/* Gradient overlay */}
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

        <DecorativeDots variant="green" position="top-left" size="lg" />
        <DecorativeDots variant="blue" position="top-right" size="md" />
        <DecorativeDots variant="purple" position="bottom-left" size="md" />
        <DecorativeDots variant="pink" position="bottom-right" size="lg" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ 
              backgroundColor: 'rgba(10, 74, 74, 0.08)',
              border: '1px solid rgba(10, 74, 74, 0.15)'
            }}
          >
            <Code className="w-4 h-4" style={{ color: '#0A4A4A' }} />
            <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
              Software Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1] tracking-tight mb-8"
            style={{ fontWeight: 700 }}
          >
            Custom Software
            <br />
            <motion.span
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
              Built For You
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Powerful applications and systems designed to streamline your business operations
          </motion.p>

          {/* Results */}
          <div className="mb-12">
            <InlineStats stats={results} delay={0.6} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/get-started">
              <motion.div
                className="px-10 py-5 rounded-full inline-flex items-center gap-2 text-white shadow-lg"
                style={{ backgroundColor: '#0A4A4A', fontWeight: 600 }}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(10, 74, 74, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
            <motion.p
              className="text-sm text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              💎 Starting at $150
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F3ED' }}>
        <SectionBackground variant="light" />
        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
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
              <Sparkles className="w-4 h-4" style={{ color: '#0A4A4A' }} />
              <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
                Our Expertise
              </span>
            </motion.div>
            
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-tight mb-4" style={{ fontWeight: 700 }}>
              What We Build
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              From mobile apps to enterprise systems, we develop powerful software solutions that drive growth
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="p-6 md:p-8 rounded-3xl text-center border bg-white hover:shadow-lg transition-all duration-300"
                style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl mb-3 md:mb-4"
                  style={{ backgroundColor: `${item.color}10` }}
                >
                  <item.icon className="w-7 h-7 md:w-8 md:h-8" style={{ color: item.color }} strokeWidth={2} />
                </motion.div>
                <h3 className="text-sm md:text-base" style={{ fontWeight: 600 }}>{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={faqs} />

      {/* CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#C8E6C9' }}>
        <SectionBackground variant="dark" />
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-tight mb-6" style={{ fontWeight: 700 }}>
              Ready to Build Your Software?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              Transform your business with custom solutions
            </p>
            <Link to="/get-started">
              <motion.div
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white shadow-lg"
                style={{ backgroundColor: '#0A4A4A', fontWeight: 700 }}
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -10px rgba(10, 74, 74, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}