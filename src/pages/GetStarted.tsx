import { motion } from 'motion/react';
import { useState } from 'react';
import { Code, Smartphone, Camera, BarChart3, Send, CheckCircle2, Phone, Mail, Clock, AlertCircle, ChevronDown } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { FooterSimple } from '../components/FooterSimple';
import { DecorativeDots } from '../components/DecorativeDots';
import { SectionBackground } from '../components/SectionBackground';
import { SEO } from '../components/SEO';
import { pageMetadata } from '../config/seo';
import { supabase, insertContact, type Contact } from '../lib/supabase';
import { toast } from 'sonner';

export function GetStarted() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    projectDetails: ''
  });

  const services = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      color: '#0A4A4A'
    },
    {
      id: 'software-development',
      icon: Smartphone,
      title: 'Software Development',
      color: '#2C7873'
    },
    {
      id: 'business-photography',
      icon: Camera,
      title: 'Business Photography',
      color: '#6FB98F'
    },
    {
      id: 'social-media',
      icon: BarChart3,
      title: 'Social Media Management',
      color: '#0A4A4A'
    }
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP (1-2 weeks)',
    '1 month',
    '2-3 months',
    'Flexible',
    'Just exploring'
  ];

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate at least one service is selected
    if (selectedServices.length === 0) {
      toast.error('Please select at least one service');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const contactData: Contact = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        budget: formData.budget,
        timeline: formData.timeline,
        project_details: formData.projectDetails.trim(),
        selected_services: selectedServices
      };

      const data = await insertContact(contactData);

      setSubmitStatus('success');
      toast.success('Thank you! We\'ll review your project and get back to you within 24 hours.', {
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '',
        timeline: '',
        projectDetails: ''
      });
      setSelectedServices([]);
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Generic error message
      const errorMessage = error?.message || 'Failed to submit your project inquiry. Please try again.';
      toast.error(errorMessage, {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO {...pageMetadata.getStarted} />
      <Navigation />

      {/* Hero Section - Minimal */}
      <section 
        className="min-h-[60vh] relative flex items-center justify-center overflow-hidden pt-32 pb-16"
        style={{ 
          background: 'linear-gradient(135deg, #C8E6C9 0%, #B8E0D2 50%, #A8D5BA 100%)'
        }}
      >
        <DecorativeDots variant="green" position="top-left" size="lg" />
        <DecorativeDots variant="blue" position="top-right" size="md" />

        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.1] tracking-tight mb-6"
            style={{ fontWeight: 700 }}
          >
            Let's Get{' '}
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
              Started
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 mb-4"
          >
            Choose how you'd like to connect with us
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ backgroundColor: 'rgba(111, 185, 143, 0.2)', color: '#0A4A4A', fontWeight: 600 }}
          >
            <CheckCircle2 className="w-4 h-4" style={{ color: '#6FB98F' }} />
            Response within 24 hours guaranteed
          </motion.div>
        </div>
      </section>

      {/* Contact Options - Call or Form */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#F5F3ED' }}>
        <SectionBackground variant="light" />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          
          {/* Two Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Option 1: Call Us */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl border bg-white text-center relative overflow-hidden group"
              style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: '#6FB98F', color: 'white', fontWeight: 600 }}>
                24/7 Support
              </div>
              
              <motion.div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: '#0A4A4A' }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Phone className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl mb-3" style={{ fontWeight: 700 }}>
                Call Us Now
              </h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our team
              </p>

              <motion.a
                href="tel:+250792662501"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white w-full"
                style={{ backgroundColor: '#0A4A4A', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                +250 792 662 501
              </motion.a>

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                Available 24/7
              </div>
            </motion.div>

            {/* Option 2: Fill Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl border bg-white text-center relative overflow-hidden"
              style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: '#2C7873', color: 'white', fontWeight: 600 }}>
                Recommended
              </div>

              <motion.div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: '#2C7873' }}
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl mb-3" style={{ fontWeight: 700 }}>
                Send Details
              </h3>
              <p className="text-gray-600 mb-6">
                Get a custom proposal in 24h
              </p>

              <motion.button
                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white w-full"
                style={{ backgroundColor: '#2C7873', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
                Fill Quick Form
              </motion.button>

              <div className="mt-4 text-sm text-gray-500">
                Takes less than 2 minutes
              </div>
            </motion.div>
          </div>

          {/* Form Section */}
          <motion.div
            id="form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-20"
          >
            <div className="text-center mb-10">
              <h2 className="text-[2rem] md:text-[2.5rem] tracking-tight mb-3" style={{ fontWeight: 700 }}>
                Quick Project Form
              </h2>
              <p className="text-gray-600">
                Tell us what you need - we'll handle the rest
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl border shadow-lg" style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}>
              {/* Service Selection - Compact */}
              <div className="mb-8">
                <label className="block text-sm mb-4 text-gray-700" style={{ fontWeight: 600 }}>
                  Select Service(s) *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <motion.button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className="p-4 rounded-2xl border-2 transition-all duration-300 text-center"
                        style={{ 
                          borderColor: isSelected ? service.color : 'rgba(10, 74, 74, 0.1)',
                          backgroundColor: isSelected ? `${service.color}10` : 'white'
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 mx-auto mb-2" style={{ color: service.color }} />
                        )}
                        <service.icon className="w-6 h-6 mx-auto mb-2" style={{ color: service.color }} />
                        <div className="text-xs" style={{ fontWeight: 600 }}>{service.title}</div>
                      </motion.button>
                    );
                  })}
                </div>
                {selectedServices.length === 0 && (
                  <p className="text-sm text-gray-500 mt-2">
                    Please select at least one service to continue
                  </p>
                )}
              </div>

              {/* Contact Info - Compact */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border rounded-2xl form-input-focus"
                    style={{ 
                      backgroundColor: '#F5F3ED',
                      borderColor: 'rgba(10, 74, 74, 0.1)'
                    }}
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border rounded-2xl form-input-focus"
                    style={{ 
                      backgroundColor: '#F5F3ED',
                      borderColor: 'rgba(10, 74, 74, 0.1)'
                    }}
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border rounded-2xl form-input-focus"
                    style={{ 
                      backgroundColor: '#F5F3ED',
                      borderColor: 'rgba(10, 74, 74, 0.1)'
                    }}
                    placeholder="+250 123 456 789"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                    Budget *
                  </label>
                  <div className="relative group">
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 pr-10 border rounded-2xl form-input-focus appearance-none cursor-pointer"
                      style={{ 
                        backgroundColor: '#F5F3ED',
                        borderColor: 'rgba(10, 74, 74, 0.1)',
                        color: formData.budget ? '#0A4A4A' : '#9ca3af'
                      }}
                      required
                    >
                      <option value="" disabled>Select budget...</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} style={{ color: '#0A4A4A', backgroundColor: '#F5F3ED' }}>{range}</option>
                      ))}
                    </select>
                    <ChevronDown 
                      className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:translate-y-[-45%]" 
                      style={{ color: '#6FB98F', width: '18px', height: '18px' }}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="timeline" className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                  Timeline *
                </label>
                <div className="relative group">
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 pr-10 border rounded-2xl form-input-focus appearance-none cursor-pointer"
                    style={{ 
                      backgroundColor: '#F5F3ED',
                      borderColor: 'rgba(10, 74, 74, 0.1)',
                      color: formData.timeline ? '#0A4A4A' : '#9ca3af'
                    }}
                    required
                  >
                    <option value="" disabled>When do you need this?</option>
                    {timelines.map((time) => (
                      <option key={time} value={time} style={{ color: '#0A4A4A', backgroundColor: '#F5F3ED' }}>{time}</option>
                    ))}
                  </select>
                  <ChevronDown 
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:translate-y-[-45%]" 
                    style={{ color: '#6FB98F', width: '18px', height: '18px' }}
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-6">
                <label htmlFor="projectDetails" className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 600 }}>
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-4 py-3 border rounded-2xl form-input-focus resize-none"
                  style={{ 
                    backgroundColor: '#F5F3ED',
                    borderColor: 'rgba(10, 74, 74, 0.1)'
                  }}
                  rows={4}
                  placeholder="Briefly describe your project..."
                  required
                  minLength={10}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-white shadow-lg transition-all"
                style={{ 
                  backgroundColor: isSubmitting || selectedServices.length === 0 ? '#94a3b8' : '#0A4A4A', 
                  fontWeight: 600,
                  cursor: isSubmitting || selectedServices.length === 0 ? 'not-allowed' : 'pointer'
                }}
                whileHover={!isSubmitting && selectedServices.length > 0 ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && selectedServices.length > 0 ? { scale: 0.98 } : {}}
                disabled={isSubmitting || selectedServices.length === 0}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Submitting...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Submitted Successfully!
                  </>
                ) : (
                  <>
                    Submit Project Inquiry
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-gray-500 mt-4">
                {selectedServices.length === 0 ? (
                  '⚠️ Please select at least one service above'
                ) : (
                  '⚡ We\'ll respond within 24 hours'
                )}
              </p>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 pt-8 border-t text-center"
                style={{ borderColor: 'rgba(10, 74, 74, 0.1)' }}
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span style={{ fontWeight: 600 }}>50+ businesses</span> have trusted us with their projects
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}