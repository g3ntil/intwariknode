import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/fb4d51127fc4d20ad11b6c21593f6cc57c2a97a5.png';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <footer className="relative overflow-hidden" id="contact" style={{ backgroundColor: '#C8E6C9' }}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#A8D5BA', width: 200, height: 200, top: '10%', left: '5%', opacity: 0.3 }}
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#B8E0D2', width: 150, height: 150, top: '60%', right: '10%', opacity: 0.3 }}
          animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ backgroundColor: '#D4EFE7', width: 100, height: 100, bottom: '20%', left: '15%', opacity: 0.3 }}
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10">
        {/* Contact Form Section */}
        <div className="border-b" style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}>
          <div className="container mx-auto px-8 lg:px-6 md:px-12 lg:px-20 py-24 lg:py-20 md:py-32">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.p 
                  className="text-sm mb-4 tracking-wide uppercase" 
                  style={{ fontWeight: 600, color: '#0A4A4A' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Get In Touch
                </motion.p>
                <motion.h2 
                  className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] tracking-tight mb-6" 
                  style={{ fontWeight: 700 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Let's Work
                  <br />
                  Together 🤝
                </motion.h2>
                <motion.p 
                  className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Tell us about your project and let's create something amazing
                </motion.p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onSubmit={handleSubmit}
                className="p-8 md:p-12 rounded-[32px] border shadow-xl relative overflow-hidden group"
                style={{ backgroundColor: '#F5F3ED', borderColor: 'rgba(10, 74, 74, 0.1)' }}
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top right, rgba(111, 185, 143, 0.1), transparent)' }}
                />
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                      Your Name
                    </label>
                    <motion.input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl focus:outline-none transition-all relative z-10"
                      style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10, 74, 74, 0.1)' }}
                      placeholder="John Doe"
                      required
                      whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(10, 74, 74, 0.1)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl focus:outline-none transition-all relative z-10"
                      style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10, 74, 74, 0.1)' }}
                      placeholder="john@example.com"
                      required
                      whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(10, 74, 74, 0.1)' }}
                    />
                  </div>
                </div>

                <div className="mb-6 relative z-10">
                  <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl focus:outline-none transition-all"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10, 74, 74, 0.1)' }}
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="web-development">Web Development</option>
                    <option value="software-development">Software Development</option>
                    <option value="business-photography">Business Photography</option>
                    <option value="social-media-management">Social Media Management</option>
                  </select>
                </div>

                <div className="mb-6 relative z-10">
                  <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Project Details
                  </label>
                  <motion.textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl focus:outline-none transition-all resize-none"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10, 74, 74, 0.1)' }}
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(10, 74, 74, 0.1)' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full text-white px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg group relative z-10 overflow-hidden"
                  style={{ backgroundColor: '#0A4A4A', fontWeight: 600 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, #2C7873 0%, #0A4A4A 100%)' }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Send Message</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </motion.div>
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>

        {/* Footer Info Section - Matching Design */}
        <div className="container mx-auto px-8 lg:px-6 md:px-12 lg:px-20 py-24 lg:py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            
            {/* Brand & Tagline */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h2 className="text-[3rem] md:text-[4rem] leading-[1] tracking-tight" style={{ fontWeight: 700 }}>
                  INTWARI
                </h2>
                <h3 className="text-[3rem] md:text-[4rem] leading-[1] tracking-tight text-gray-400" style={{ fontWeight: 700 }}>
                  KNODE
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-base md:text-lg text-gray-600 max-w-md leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Creating digital experiences that transform businesses and captivate audiences.
              </motion.p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.a 
                href="mailto:intwariknode@gmail.com"
                className="flex items-start gap-4 group cursor-pointer"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-base md:text-lg text-gray-900" style={{ fontWeight: 500 }}>
                    intwariknode@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a 
                href="tel:+250792662501"
                className="flex items-start gap-4 group cursor-pointer"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Phone className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-base md:text-lg text-gray-900" style={{ fontWeight: 500 }}>
                    +250 792 662 501
                  </p>
                </div>
              </motion.a>

              <motion.a 
                href="https://instagram.com/intwariknode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Instagram className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Instagram</p>
                  <p className="text-base md:text-lg text-gray-900" style={{ fontWeight: 500 }}>
                    @intwariknode
                  </p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/5">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="text-sm text-gray-500 text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © 2024 INTWARI Knode. All rights reserved.
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-sm text-gray-400">Made with ❤️ in Rwanda</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
