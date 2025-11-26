import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Instagram, Mail, ArrowRight } from 'lucide-react';
import logo from 'figma:asset/fb4d51127fc4d20ad11b6c21593f6cc57c2a97a5.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const services = [
    { name: 'Web Development', link: '/web-development' },
    { name: 'Software Development', link: '/software-development' },
    { name: 'Business Photography', link: '/business-photography' },
    { name: 'Social Media Management', link: '/social-media-management' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation - Centered & Rounded */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed top-0 left-0 right-0 z-50 hidden lg:block pt-6 px-8"
      >
        <motion.div 
          className={`max-w-6xl mx-auto rounded-[32px] transition-all duration-300 border shadow-sm ${
            scrolled ? 'shadow-lg' : ''
          }`}
          style={{ backgroundColor: '#F5F3ED', borderColor: 'rgba(10, 74, 74, 0.1)' }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                style={{ backgroundColor: '#0A4A4A' }}
                className="w-12 h-12 rounded-full flex items-center justify-center p-2.5 shadow-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <img 
                  src={logo} 
                  alt="INTWARI Knode" 
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </motion.div>
              <div>
                <div className="text-lg tracking-tight leading-none" style={{ fontWeight: 700 }}>
                  INTWARI
                </div>
                <div className="text-[9px] text-gray-500 tracking-wider leading-none mt-0.5">
                  KNODE
                </div>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-10">
              <Link to="/">
                <motion.div 
                  className="text-sm text-gray-700 hover:text-black transition-colors duration-300 relative group"
                  style={{ fontWeight: 500 }}
                  whileHover={{ y: -2 }}
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </motion.div>
              </Link>

              {/* Services with Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <motion.button 
                  className="text-sm text-gray-700 hover:text-black transition-colors duration-300 flex items-center gap-1 relative"
                  style={{ fontWeight: 500 }}
                  whileHover={{ y: -2 }}
                >
                  Services
                  <motion.div
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                  <motion.span
                    style={{ backgroundColor: '#0A4A4A' }}
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  />
                </motion.button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 rounded-2xl shadow-xl border overflow-hidden min-w-[240px]"
                      style={{ backgroundColor: '#F5F3ED', borderColor: 'rgba(10, 74, 74, 0.1)' }}
                    >
                      {services.map((service, idx) => (
                        <Link key={idx} to={service.link}>
                          <motion.div
                            className="block px-5 py-3 text-sm text-gray-700 hover:text-black transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                            style={{ backgroundColor: 'transparent' }}
                            whileHover={{ x: 5, backgroundColor: 'rgba(10, 74, 74, 0.05)' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            {service.name}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about">
                <motion.div 
                  className="text-sm text-gray-700 hover:text-black transition-colors duration-300 relative group"
                  style={{ fontWeight: 500 }}
                  whileHover={{ y: -2 }}
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </motion.div>
              </Link>

              <Link to="/get-started">
                <motion.div
                  style={{ backgroundColor: '#0A4A4A' }}
                  className="text-white px-7 py-3 rounded-full text-sm hover:shadow-lg transition-all duration-300 shadow-md relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor="Let's Go!"
                >
                  <span className="relative z-10" style={{ fontWeight: 600 }}>Get Started</span>
                  <motion.div
                    style={{ backgroundColor: '#2C7873' }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation - Orbix Inspired Design */}
    
      {/* Mobile Header Bar - Expands to show menu */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-50 p-4 pt-6"
      >
        <motion.div 
          className="rounded-[32px] px-4 shadow-sm overflow-hidden"
          style={{ backgroundColor: '#F5F3ED' }}
          animate={{ 
            paddingBottom: isOpen ? '24px' : '14px'
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Top Bar - Always Visible */}
          <div className="py-3.5 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div 
                style={{ backgroundColor: '#0A4A4A' }}
                className="w-14 h-14 rounded-full flex items-center justify-center p-3"
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <img 
                  src={logo} 
                  alt="INTWARI Knode" 
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </motion.div>
            </Link>

            {/* Book a Call Button */}
            <Link to="/get-started">
              <motion.div
                style={{ backgroundColor: '#0A4A4A' }}
                className="px-6 py-3.5 rounded-full text-white flex items-center gap-2.5"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
              >
                <span style={{ fontWeight: 600, fontSize: '15px' }}>Book a Call</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </Link>

            {/* Hamburger Menu */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-black" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Expanded Menu Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  className="px-2 pb-2 space-y-1 border-t pt-4 mt-2"
                  style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
                >
                  {/* Navigation Links */}
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <motion.div
                      className="block py-3 px-4 rounded-xl text-gray-700 hover:text-black hover:bg-white/60 transition-all duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Home
                    </motion.div>
                  </Link>

                  {/* Services Dropdown */}
                  <div>
                    <motion.button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full text-left py-3 px-4 rounded-xl text-gray-700 hover:text-black hover:bg-white/60 transition-all duration-200 flex items-center justify-between"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Services
                      <motion.div
                        animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ml-4 mt-1 space-y-0.5"
                        >
                          {services.map((service, idx) => (
                            <Link key={idx} to={service.link} onClick={() => setIsOpen(false)}>
                              <motion.div
                                className="block py-2.5 px-3 rounded-lg text-sm text-gray-600 hover:text-black hover:bg-white/60 transition-all"
                                initial={{ x: -15, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.05 * idx, type: 'spring', stiffness: 200 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {service.name}
                              </motion.div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/about" onClick={() => setIsOpen(false)}>
                    <motion.div
                      className="block py-3 px-4 rounded-xl text-gray-700 hover:text-black hover:bg-white/60 transition-all duration-200"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.25, type: 'spring', stiffness: 200 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      About
                    </motion.div>
                  </Link>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="border-t pt-4 mt-4"
                    style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
                  >
                    <p className="text-xs text-gray-500 mb-3 px-4" style={{ fontWeight: 600 }}>Get In Touch</p>
                    
                    <a
                      href="mailto:intwariknode@gmail.com"
                      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/60 transition-all group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Mail className="w-4 h-4 text-gray-600 group-hover:text-[#0A4A4A] transition-colors" />
                      <span className="text-sm text-gray-700 group-hover:text-[#0A4A4A] transition-colors">
                        intwariknode@gmail.com
                      </span>
                    </a>

                    <a
                      href="https://instagram.com/intwariknode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/60 transition-all group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Instagram className="w-4 h-4 text-gray-600 group-hover:text-[#0A4A4A] transition-colors" />
                      <span className="text-sm text-gray-700 group-hover:text-[#0A4A4A] transition-colors">
                        @intwariknode
                      </span>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </>
  );
}