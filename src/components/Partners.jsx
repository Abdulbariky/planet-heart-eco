import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

const Partners = () => {
  // Replace with your actual partner names and logo paths
  const partners = [
    {
      name: 'Berbera municipality',
      logo: '/images/partners/Berbera-municipality.jpeg', // Replace with actual logo path
      type: 'Foundation Partner',
    },
    {
      name: 'Bio and Emerging Technology Institute',
      logo: '/images/partners/Bio-and-Emerging-Technology-Institute.jpeg',
      type: 'Technology Partner',
    },
    {
      name: 'Flybox bio limited',
      logo: '/images/partners/Flybox-bio-limited.jpeg',
      type: 'Government Partner',
    },
    {
      name: 'Somaliland ministry of agriculture',
      logo: '/images/partners/Somaliland-ministry-of-agriculture.jpeg',
      type: 'Impact Investor',
    },
    
  ];

  const partnerTypes = [
    'Foundations & Donors',
    'Municipalities & Governments',
    'Livestock Exporters & Agribusinesses',
    'Impact Investors & Climate Funds',
  ];

  return (
    <section id="partners" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/20 to-white dark:from-gray-950 dark:via-primary-950/10 dark:to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Handshake className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Who We Work With
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Our</span>
            {' '}
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Together, we turn local challenges into shared value across the Horn of Africa.
          </p>
        </motion.div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group"
            >
              <div className="flex flex-col items-center p-6 glass rounded-2xl hover:shadow-xl transition-all duration-300">
                {/* Logo */}
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback if logo not found - shows first letter
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div
                    className="hidden w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-ocean-500 items-center justify-center text-white text-2xl font-bold"
                  >
                    {partner.name.charAt(0)}
                  </div>
                </div>

                <p className="text-xs font-semibold text-center text-gray-900 dark:text-white leading-tight">
                  {partner.name}
                </p>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">
                  {partner.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Partnerships & Support
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary-50/50 dark:bg-primary-950/20"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-ocean-500 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {type}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
            Interested in partnering with us?{' '}
            <a href="#contact" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              Get in touch →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;