import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, Zap, Shield, ArrowRight, CheckCircle2, Laptop, Globe, Server, Palette, MessageSquare, Pencil, Rocket, TrendingUp, Star, Sparkles } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { FooterSimple } from '../components/FooterSimple';
import { DecorativeDots } from '../components/DecorativeDots';
import { SectionBackground } from '../components/SectionBackground';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';
import { InlineStats } from '../components/InlineStats';
import { pageMetadata } from '../config/seo';

export function WebDevelopment() {
  const whatWeOffer = [
    { icon: Laptop, label: 'Custom Websites', color: '#0A4A4A' },
    { icon: Smartphone, label: 'Mobile First', color: '#2C7873' },
    { icon: Zap, label: 'Fast Performance', color: '#6FB98F' },
    { icon: Shield, label: 'Secure & Safe', color: '#0A4A4A' },
    { icon: Globe, label: 'SEO Optimized', color: '#2C7873' },
    { icon: Server, label: 'Cloud Hosting', color: '#6FB98F' },
    { icon: Palette, label: 'Beautiful Design', color: '#0A4A4A' },
    { icon: Code2, label: 'Clean Code', color: '#2C7873' }
  ];

  const process = [
    { number: '01', icon: MessageSquare, title: 'Talk', desc: 'We listen to your needs', color: '#0A4A4A' },
    { number: '02', icon: Pencil, title: 'Design', desc: 'Create stunning layouts', color: '#2C7873' },
    { number: '03', icon: Code2, title: 'Build', desc: 'Develop your website', color: '#6FB98F' },
    { number: '04', icon: Rocket, title: 'Launch', desc: 'Go live to the world', color: '#0A4A4A' }
  ];

  const results = [
    { value: '250%', label: 'Avg. Traffic Increase', icon: TrendingUp, color: '#0A4A4A' },
    { value: '4.9★', label: 'Client Rating', icon: Star, color: '#2C7873' },
    { value: '50+', label: 'Websites Built', icon: Code2, color: '#6FB98F' }
  ];

  const faqs = [
    {
      question: 'What types of websites do you build?',
      answer: 'We build all types of websites including business websites, e-commerce stores, portfolios, landing pages, and custom web applications. Each project is tailored to your specific needs and goals.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'A typical website takes 2-4 weeks from start to launch. Complex e-commerce or custom applications may take 6-10 weeks. We provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'Will my website work on mobile devices?',
      answer: 'Absolutely! All our websites are fully responsive and mobile-first, meaning they look and work perfectly on smartphones, tablets, and desktop computers.'
    },
    {
      question: 'Do you provide website hosting?',
      answer: 'Yes! We offer reliable cloud hosting services with fast loading speeds, 99.9% uptime, and security features. We can also work with your existing hosting provider.'
    },
    {
      question: 'Can I update my website content myself?',
      answer: 'Yes! We build websites with user-friendly content management systems (CMS) that allow you to easily update text, images, and pages without technical knowledge.'
    },
    {
      question: 'What about SEO and search engine ranking?',
      answer: 'All our websites are built with SEO best practices including fast loading times, mobile optimization, clean code, and proper meta tags to help you rank better on search engines.'
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes! We provide ongoing support packages including updates, security monitoring, backups, and technical assistance to keep your website running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO {...pageMetadata.webDevelopment} />
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
            <Code2 className="w-4 h-4" style={{ color: '#0A4A4A' }} />
            <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
              Web Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1] tracking-tight mb-8"
            style={{ fontWeight: 700 }}
          >
            Professional Web Development
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
              Services in Rwanda
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Custom website design and development in Kigali. High-performance, SEO-optimized websites for Rwanda businesses.
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
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
            <motion.div
              className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle2 className="w-4 h-4" style={{ color: '#6FB98F' }} />
              <span>Free consultation • Fast delivery</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
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
                What's Included
              </span>
            </motion.div>
            
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-tight mb-4" style={{ fontWeight: 700 }}>
              What We Offer
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Every website we build comes with these essential features to ensure your online success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whatWeOffer.map((item, idx) => (
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

      {/* Process */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
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
              <Rocket className="w-4 h-4" style={{ color: '#0A4A4A' }} />
              <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
                Our Process
              </span>
            </motion.div>

            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-tight mb-4" style={{ fontWeight: 700 }}>
              How We Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl border text-center relative overflow-hidden group"
                style={{ 
                  backgroundColor: '#F5F3ED',
                  borderColor: 'rgba(10, 74, 74, 0.1)'
                }}
              >
                {/* Number badge */}
                <div 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm"
                  style={{ backgroundColor: step.color, fontWeight: 700 }}
                >
                  {step.number}
                </div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} strokeWidth={2} />
                </motion.div>
                <h3 className="text-xl mb-2" style={{ fontWeight: 700 }}>{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
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
              Ready to Launch Your Website?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              Let's build something amazing together
            </p>
            <Link to="/get-started">
              <motion.div
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white shadow-lg"
                style={{ backgroundColor: '#0A4A4A', fontWeight: 700 }}
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -10px rgba(10, 74, 74, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Demo
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