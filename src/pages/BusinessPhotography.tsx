import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Camera, Image, Users, Award, ArrowRight, CheckCircle2, Aperture, Video, Edit, Sparkles, TrendingUp, Star, Rocket } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { FooterSimple } from '../components/FooterSimple';
import { DecorativeDots } from '../components/DecorativeDots';
import { SectionBackground } from '../components/SectionBackground';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';
import { InlineStats } from '../components/InlineStats';
import { pageMetadata } from '../config/seo';

export function BusinessPhotography() {
  const services = [
    { icon: Camera, label: 'Product Photos', color: '#0A4A4A' },
    { icon: Users, label: 'Corporate Events', color: '#2C7873' },
    { icon: Aperture, label: 'Brand Photography', color: '#6FB98F' },
    { icon: Image, label: 'Commercial Shoots', color: '#0A4A4A' },
    { icon: Video, label: 'Video Content', color: '#2C7873' },
    { icon: Edit, label: 'Photo Editing', color: '#6FB98F' },
    { icon: Award, label: 'Professional Quality', color: '#0A4A4A' },
    { icon: Sparkles, label: 'Creative Direction', color: '#2C7873' }
  ];

  const results = [
    { value: '500+', label: 'Sessions Done', icon: Camera, color: '#0A4A4A' },
    { value: '100%', label: 'Satisfaction Rate', icon: Star, color: '#2C7873' },
    { value: '48h', label: 'Delivery Time', icon: TrendingUp, color: '#6FB98F' }
  ];

  const faqs = [
    {
      question: 'What types of business photography do you offer?',
      answer: 'We offer product photography, corporate headshots, event coverage, brand photography, commercial shoots, and professional video content for businesses of all sizes.'
    },
    {
      question: 'How long does a typical photoshoot take?',
      answer: 'Product shoots typically take 2-4 hours, corporate events 4-8 hours, and brand photography sessions 3-5 hours. We customize the duration based on your specific needs.'
    },
    {
      question: 'When will I receive my photos?',
      answer: 'You\'ll receive edited, high-resolution photos within 48-72 hours for standard projects. Rush delivery is available for urgent needs at no extra cost for select packages.'
    },
    {
      question: 'Do you provide photo editing and retouching?',
      answer: 'Yes! All our packages include professional editing, color correction, retouching, and optimization for both web and print use to ensure your photos look perfect.'
    },
    {
      question: 'Can you shoot on location or do you have a studio?',
      answer: 'We offer both! We can shoot at your office, event venue, or any location of your choice. We also have partnerships with professional studios in Kigali for controlled environment shoots.'
    },
    {
      question: 'What equipment do you use?',
      answer: 'We use professional-grade cameras, lenses, lighting equipment, and stabilizers to ensure the highest quality results. All our gear is regularly maintained and updated.'
    },
    {
      question: 'Do you offer video services as well?',
      answer: 'Yes! We provide professional video production including promotional videos, event coverage, product demos, and social media content creation alongside our photography services.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO {...pageMetadata.businessPhotography} />
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
            <Camera className="w-4 h-4" style={{ color: '#0A4A4A' }} />
            <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
              Business Photography
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1] tracking-tight mb-8"
            style={{ fontWeight: 700 }}
          >
            Professional Photos
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
              That Sell
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            High-quality photography and video content that elevates your brand
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
                Book a Session
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
            <motion.p
              className="text-sm text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              📸 Starting at $30
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
                Our Services
              </span>
            </motion.div>
            
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-tight mb-4" style={{ fontWeight: 700 }}>
              What We Capture
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Professional photography services designed to showcase your brand and tell your story visually
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((item, idx) => (
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
              Ready for Your Photoshoot?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              Let's create stunning visuals for your business
            </p>
            <Link to="/get-started">
              <motion.div
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white shadow-lg"
                style={{ backgroundColor: '#0A4A4A', fontWeight: 700 }}
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -10px rgba(10, 74, 74, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
                <Camera className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}