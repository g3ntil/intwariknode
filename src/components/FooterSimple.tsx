import { motion } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Instagram, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { SEOKeywords } from './SEOKeywords';

export function FooterSimple() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const quickLinks = [
    { name: 'About', href: '/about', isSection: false },
    { name: 'Services', sectionId: 'services', isSection: true },
    { name: 'Portfolio', sectionId: 'portfolio', isSection: true },
    { name: 'Get Started', href: '/get-started', isSection: false }
  ];

  const services = [
    { name: 'Web Development Rwanda', href: '/web-development' },
    { name: 'Software Development', href: '/software-development' },
    { name: 'Business Photography', href: '/business-photography' },
    { name: 'Social Media Management Rwanda', href: '/social-media-management' },
    { name: 'Affordable Website Design Rwanda', href: '/affordable-website-design-rwanda' },
    { name: 'E-commerce Website Rwanda', href: '/ecommerce-website-rwanda' }
  ];

  const seoLinks = [
    { name: 'Web Design Kigali', href: '/web-design-kigali' },
    { name: 'SEO Services Rwanda', href: '/seo-services-rwanda' },
    { name: 'Digital Marketing Agency Rwanda', href: '/digital-marketing-agency-rwanda' },
    { name: 'Branding Agency Rwanda', href: '/branding-agency-rwanda' }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#0A4A4A' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(111, 185, 143, 0.15), transparent)',
            width: 400,
            height: 400,
            top: '-10%',
            right: '10%'
          }}
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(44, 120, 115, 0.15), transparent)',
            width: 350,
            height: 350,
            bottom: '-10%',
            left: '5%'
          }}
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Floating sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 30}%`
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

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
          {/* SEO Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 pb-12 border-b"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <h4 className="text-white mb-6 text-center" style={{ fontWeight: 700 }}>
              Professional Services Across Rwanda
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {seoLinks.map((link, idx) => (
                <Link key={idx} to={link.href}>
                  <motion.div
                    className="px-4 py-2 rounded-full text-sm text-white/80 hover:text-white border border-white/20 hover:border-[#6FB98F] hover:bg-[#6FB98F]/10 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-[2.5rem] leading-[1] tracking-tight text-white mb-1" style={{ fontWeight: 800 }}>
                    INTWARI
                  </h2>
                  <h3 className="text-[2.5rem] leading-[1] tracking-tight mb-4" style={{ fontWeight: 800, color: '#6FB98F' }}>
                    KNODE
                  </h3>
                </div>
                
                <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                  Creating digital experiences that transform businesses and captivate audiences across Rwanda and beyond.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href="mailto:intwariknode@gmail.com"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-[#6FB98F] hover:bg-[#6FB98F]/10 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/intwariknode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-[#6FB98F] hover:bg-[#6FB98F]/10 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-white mb-6" style={{ fontWeight: 700 }}>
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 3 }}
                    >
                      {link.isSection ? (
                        <button
                          onClick={(e) => handleSectionClick(e, link.sectionId!)}
                          className="text-sm text-white/70 hover:text-[#6FB98F] transition-colors inline-flex items-center gap-2 group"
                        >
                          <span className="w-0 h-px bg-[#6FB98F] group-hover:w-4 transition-all" />
                          {link.name}
                        </button>
                      ) : (
                        <Link 
                          to={link.href!}
                          className="text-sm text-white/70 hover:text-[#6FB98F] transition-colors inline-flex items-center gap-2 group"
                        >
                          <span className="w-0 h-px bg-[#6FB98F] group-hover:w-4 transition-all" />
                          {link.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-white mb-6" style={{ fontWeight: 700 }}>
                  Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 3 }}
                    >
                      <Link 
                        to={service.href}
                        className="text-sm text-white/70 hover:text-[#6FB98F] transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-[#6FB98F] group-hover:w-4 transition-all" />
                        {service.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h4 className="text-white mb-6" style={{ fontWeight: 700 }}>
                  Get In Touch
                </h4>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:intwariknode@gmail.com"
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 3 }}
                  >
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <Mail className="w-4 h-4 text-[#6FB98F]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-1">Email</p>
                      <p className="text-sm text-white/90 group-hover:text-[#6FB98F] transition-colors">
                        intwariknode@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://instagram.com/intwariknode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 3 }}
                  >
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <Instagram className="w-4 h-4 text-[#6FB98F]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-1">Instagram</p>
                      <p className="text-sm text-white/90 group-hover:text-[#6FB98F] transition-colors">
                        @intwariknode
                      </p>
                    </div>
                  </motion.a>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                      <MapPin className="w-4 h-4 text-[#6FB98F]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-1">Location</p>
                      <p className="text-sm text-white/90">
                        Kigali, Rwanda
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border mb-12"
            style={{ 
              backgroundColor: 'rgba(111, 185, 143, 0.1)',
              borderColor: 'rgba(111, 185, 143, 0.2)'
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl text-white mb-2" style={{ fontWeight: 700 }}>
                  Ready to Start Your Project?
                </h3>
                <p className="text-sm text-white/70">
                  Let's build something amazing together
                </p>
              </div>
              <Link to="/get-started">
                <motion.div
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white border-2 whitespace-nowrap"
                  style={{ 
                    borderColor: '#6FB98F',
                    backgroundColor: '#6FB98F',
                    fontWeight: 700
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px -10px rgba(111, 185, 143, 0.5)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="text-sm text-white/60 text-center md:text-left flex items-center gap-1.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © 2025 INTWARI Knode. Made by intwari knode team in Rwanda
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-sm text-white/40">Crafted with passion 🇷🇼</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords Section - Subtle and low visibility */}
      <SEOKeywords />
    </footer>
  );
}
