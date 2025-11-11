import { motion } from 'motion/react';
import { Target, Award, Users, Zap, Heart, Lightbulb, TrendingUp, Sparkles, Code, Camera, Share2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { FooterSimple } from '../components/FooterSimple';
import { DecorativeDots } from '../components/DecorativeDots';
import { SectionBackground } from '../components/SectionBackground';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import { pageMetadata } from '../config/seo';

export function About() {
  const values = [
    { icon: Target, title: 'Precision', desc: 'Every pixel matters', color: '#0A4A4A' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Push boundaries', color: '#2C7873' },
    { icon: Heart, title: 'Passion', desc: 'Love what we do', color: '#6FB98F' },
    { icon: Zap, title: 'Speed', desc: 'Fast execution', color: '#0A4A4A' }
  ];

  const stats = [
    { number: '2024', label: 'Founded', icon: Award, color: '#0A4A4A' },
    { number: '120+', label: 'Clients', icon: Users, color: '#2C7873' },
    { number: '150+', label: 'Projects', icon: TrendingUp, color: '#6FB98F' },
    { number: '95%', label: 'Satisfaction', icon: Target, color: '#0A4A4A' }
  ];

  const services = [
    { icon: Code, title: 'Web Development', desc: 'High-converting websites' },
    { icon: Target, title: 'Software Development', desc: 'Custom applications' },
    { icon: Camera, title: 'Business Photography', desc: 'Professional imagery' },
    { icon: Share2, title: 'Social Media Management', desc: 'Strategic content' }
  ];

  return (
    <div className="min-h-screen">
      <SEO {...pageMetadata.about} />
      <Navigation />

      {/* Hero Section */}
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
            <Users className="w-4 h-4" style={{ color: '#0A4A4A' }} />
            <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] leading-[1] tracking-tight mb-8"
            style={{ fontWeight: 700 }}
          >
            We Are
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
              INTWARI
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            A creative agency obsessed with precision, innovation, and delivering real results
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="p-6 rounded-2xl border backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: 'rgba(10, 74, 74, 0.1)'
                }}
                whileHover={{ 
                  y: -3,
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  borderColor: stat.color
                }}
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: stat.color }} />
                <div className="text-2xl md:text-3xl mb-1" style={{ fontWeight: 700 }}>{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F3ED' }}>
        <SectionBackground variant="light" />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
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
                Our Story
              </span>
            </motion.div>

            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-tight mb-6" style={{ fontWeight: 700 }}>
              The Beginning
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border shadow-lg"
            style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
          >
            <div className="space-y-6 text-lg text-gray-700" style={{ lineHeight: 1.8 }}>
              <p>
                In 2024, we started INTWARI Knode with a simple mission: <strong>help businesses increase their online presence</strong> through exceptional digital experiences and innovative technologies.
              </p>
              <p>
                We saw too many companies struggling with outdated systems and invisible online presence. So we decided to do things differently—focusing on <strong>modern solutions, fast delivery, and real results</strong>.
              </p>
              <p>
                Today, we've helped over 120 brands achieve extraordinary growth through web development, custom software, professional photography, and engaging social media management.
              </p>
              <p>
                Based in <strong>Kigali, Rwanda</strong>, we serve clients locally and globally, bringing world-class digital solutions to businesses ready to grow.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <SectionBackground variant="light" />
        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-tight mb-4" style={{ fontWeight: 700 }}>
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Four core services, one mission: Your digital success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl border bg-white hover:shadow-lg transition-all duration-300"
                style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#0A4A4A' }}
                  >
                    <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ fontWeight: 700 }}>{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F3ED' }}>
        <SectionBackground variant="light" />
        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-3xl border shadow-xl" style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW8lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk5OTU0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full -z-10" style={{ backgroundColor: '#A8D5BA' }} />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10" style={{ backgroundColor: '#6FB98F' }} />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm text-gray-500 mb-3 tracking-wide uppercase" style={{ fontWeight: 600 }}>
                  Founder & CEO
                </p>
                <h3 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] tracking-tight mb-2" style={{ fontWeight: 700 }}>
                  Ntwari Gentil
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Software Developer, Innovation Enthusiast
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-3xl border" style={{ backgroundColor: 'rgba(10, 74, 74, 0.05)', borderColor: 'rgba(10, 74, 74, 0.1)' }}>
                <div className="space-y-4 text-base md:text-lg text-gray-700" style={{ lineHeight: 1.8 }}>
                  <p>
                    "Technology should make work easier for businesses, not more complicated. That's what drives me every day."
                  </p>
                  <p>
                    As a graduated software developer, I'm passionate about innovation and creating solutions that genuinely help businesses thrive in the digital age.
                  </p>
                  <p>
                    At INTWARI Knode, we don't just deliver projects. We create <strong>tools that transform how businesses operate and grow</strong>.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm text-gray-500 italic">
                  —NTWARI Gentil, Founder & CEO
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <Heart className="w-4 h-4" style={{ color: '#0A4A4A' }} />
              <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
                Our Values
              </span>
            </motion.div>

            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-tight mb-4" style={{ fontWeight: 700 }}>
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl text-center border bg-white hover:shadow-lg transition-all duration-300"
                style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="mb-6 inline-block"
                >
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm" style={{ backgroundColor: `${value.color}10` }}>
                    <value.icon className="w-10 h-10" style={{ color: value.color }} strokeWidth={2} />
                  </div>
                </motion.div>
                <h3 className="text-xl md:text-2xl mb-3" style={{ fontWeight: 700 }}>
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#C8E6C9' }}>
        <SectionBackground variant="dark" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ 
                backgroundColor: 'rgba(10, 74, 74, 0.1)',
                border: '1px solid rgba(10, 74, 74, 0.15)'
              }}
            >
              <Target className="w-4 h-4" style={{ color: '#0A4A4A' }} />
              <span className="text-sm" style={{ fontWeight: 600, color: '#0A4A4A' }}>
                Our Mission
              </span>
            </motion.div>

            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] tracking-tight mb-8" style={{ fontWeight: 700 }}>
              Help Businesses
              <br />
              Hit Their Targets
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12" style={{ lineHeight: 1.8 }}>
              We combine creativity, technology, and strategic thinking to deliver digital solutions that drive real, measurable growth for ambitious businesses.
            </p>

            <motion.a
              href="/get-started"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white shadow-lg"
              style={{ backgroundColor: '#0A4A4A', fontWeight: 700 }}
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -10px rgba(10, 74, 74, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <Target className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
