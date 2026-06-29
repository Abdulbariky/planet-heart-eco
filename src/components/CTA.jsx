import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const CTA = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '0728200409',
      href: 'tel:+254728200409',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+252 63 9213892',
      href: 'tel:+252639213892',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@planethearteco.com',
      href: 'mailto:info@planethearteco.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Berbera, Somaliland',
      href: '#',
    },
  ];

  const collaborators = [
    'Municipalities across Somaliland that need practical organic waste solutions',
    'Farmers and agribusinesses looking for reliable organic fertilizer',
    'Feed producers looking for local protein ingredients',
    'Investors interested in scalable circular economy projects',
    'NGOs and development partners working on food security, climate, and livelihoods across the country',
    'Research institutions supporting testing, trials, and innovation',
    'Companies looking for strong environmental and social impact partnerships',
  ];

  const whyWorkWithUs = [
    'We are the first and only commercial BSF recycling company in Somaliland and the Horn of Africa',
    'We operate in official partnership with the Berbera Municipality Authority, with national expansion underway',
    'Our model is practical, proven, and built to scale across Somaliland',
    'Our team understands Somaliland\'s local market, agri-environment, and operating realities',
    'We connect waste management, agriculture, animal feed, and climate action in one integrated national system',
  ];

  const ctaButtons = [
    { label: 'Contact Us', href: 'mailto:info@planethearteco.com', primary: true },
    { label: 'Become a Partner', href: 'mailto:info@planethearteco.com', primary: false },
    { label: 'Request Product Info', href: 'mailto:info@planethearteco.com', primary: false },
    { label: 'Explore Investment', href: 'mailto:info@planethearteco.com', primary: false },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-ocean-600 to-primary-700 dark:from-primary-700 dark:via-ocean-700 dark:to-primary-800" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                Partner With Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Build the Circular Economy
              <br />
              Across Somaliland
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/90 mb-8 max-w-xl"
            >
              Planet Heart ECO LIMITED is looking for partners who want to help solve real problems in waste management, food security, agriculture, animal feed, and climate resilience — at national scale.
            </motion.p>

            {/* We welcome collaboration with */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-lg font-bold text-white mb-4">We welcome collaboration with:</h3>
              <ul className="space-y-2">
                {collaborators.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 + index * 0.07 }}
                    className="flex items-start gap-3 text-white/85 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/70 mt-1.5 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Why Work With Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-8 p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-white mb-4">Why Work With Us?</h3>
              <ul className="space-y-2">
                {whyWorkWithUs.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.65 + index * 0.07 }}
                    className="flex items-start gap-3 text-white/85 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/70 mt-1.5 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Closing Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mb-8 border-l-4 border-white/40 pl-4"
            >
              <p className="text-white/90 text-sm leading-relaxed">
                The future of waste in Somaliland is circular.<br />
                The future of farming is healthier soil.<br />
                The future of animal feed is local.<br />
                <span className="font-semibold text-white mt-2 block">Planet Heart ECO LIMITED is already building that future — across all of Somaliland. Come build it with us.</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-3"
            >
              {ctaButtons.map((btn, index) => (
                <motion.a
                  key={index}
                  href={btn.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                    btn.primary
                      ? 'bg-white text-primary-700 hover:bg-gray-100 shadow-lg'
                      : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm border border-white/30'
                  }`}
                >
                  {btn.label}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 space-y-3"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85 + index * 0.08 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white/70">
                      {info.label}
                    </div>
                    <div className="text-sm font-semibold">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-all resize-none"
                    placeholder="Tell us about your interest in partnering..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-ocean-600 hover:from-primary-700 hover:to-ocean-700 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
