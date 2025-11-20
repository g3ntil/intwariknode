import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Share2, BarChart3, Users, Calendar, ArrowRight, CheckCircle2, Instagram, MessageCircle, TrendingUp, Heart, Sparkles, Star, Rocket } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { FooterSimple } from '../components/FooterSimple';
import { DecorativeDots } from '../components/DecorativeDots';
import { SectionBackground } from '../components/SectionBackground';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';
import { InlineStats } from '../components/InlineStats';
import { pageMetadata } from '../config/seo';

export function SocialMediaManagement() {
  const services = [
    { icon: Calendar, label: 'Content Planning', color: '#0A4A4A' },
    { icon: MessageCircle, label: 'Community Management', color: '#2C7873' },
    { icon: BarChart3, label: 'Analytics & Reporting', color: '#6FB98F' },
    { icon: Instagram, label: 'Platform Management', color: '#0A4A4A' },
    { icon: Heart, label: 'Engagement Boost', color: '#2C7873' },
    { icon: Share2, label: 'Content Creation', color: '#6FB98F' },
    { icon: Users, label: 'Audience Growth', color: '#0A4A4A' },
    { icon: TrendingUp, label: 'Strategy Development', color: '#2C7873' }
  ];

  const results = [
    { value: '5x', label: 'Avg. Engagement Increase', icon: TrendingUp, color: '#0A4A4A' },
    { value: '30+', label: 'Brands Managed', icon: Users, color: '#2C7873' },
    { value: '1M+', label: 'Reach Generated', icon: Share2, color: '#6FB98F' }
  ];

  const faqs = [
    {
      question: 'Which social media platforms do you manage?',
      answer: 'We manage all major platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, and YouTube. We create platform-specific strategies tailored to where your audience is most active.'
    },
    {
      question: 'How often will you post on my accounts?',
      answer: 'Posting frequency is customized to your needs and platform. Typically, we recommend 4-7 posts per week on Instagram, daily stories, and 3-5 posts per week on other platforms for optimal engagement.'
    },
    {
      question: 'Do you create the content or do I need to provide it?',
      answer: 'We handle everything! We create original content including graphics, captions, hashtags, and scheduling. You can also provide brand materials or product photos that we\'ll enhance and optimize.'
    },
    {
      question: 'Will I have approval over posts before they go live?',
      answer: 'Absolutely! We provide you with a content calendar and preview posts for your approval before scheduling. You have full control over what gets published on your accounts.'
    },
    {
      question: 'How do you grow my follower count?',
      answer: 'We use organic growth strategies including targeted hashtags, engaging content, community interaction, collaborations, and strategic posting times. We focus on attracting real, engaged followers who match your target audience.'
    },
    {
      question: 'Do you respond to comments and messages?',
      answer: 'Yes! Community management is included. We monitor and respond to comments, messages, and mentions in a timely manner using your brand voice. Urgent matters are escalated to you immediately.'
    },
    {
      question: 'What kind of results can I expect?',
      answer: 'While results vary by industry and starting point, clients typically see 3-5x increase in engagement, steady follower growth of 10-30% monthly, improved brand awareness, and better conversion rates from social traffic within 3-6 months.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO {...pageMetadata.socialMediaManagement} />
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
            <Share2 className="w-4 h-4" style={{ color: '#0A4A4A' }} />
            <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
              Social Media Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1] tracking-tight mb-8"
            style={{ fontWeight: 700 }}
          >
            Grow Your Brand
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
              On Social Media
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Strategic social media management that builds community and drives results
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
              📱 Starting at $50/month
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
              What We Do
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive social media management to build your brand and engage your audience effectively
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
              Ready to Grow Your Presence?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              Let's build your social media success story
            </p>
            <Link to="/get-started">
              <motion.div
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white shadow-lg"
                style={{ backgroundColor: '#0A4A4A', fontWeight: 700 }}
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -10px rgba(10, 74, 74, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <Share2 className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}