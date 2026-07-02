import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapLocation = () => {
  // Replace with your actual Google Maps embed URL or coordinates
  // To get your embed URL: Google Maps → Share → Embed a map → Copy iframe src
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3923.9743362625914!2d45.008527799999996!3d10.423611099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI1JzI1LjAiTiA0NcKwMDAnMzAuNyJF!5e0!3m2!1sen!2ske!4v1771063428550!5m2!1sen!2ske";

  return (
    <section id="location" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-ocean-50/30 to-white dark:from-gray-950 dark:via-ocean-950/10 dark:to-gray-950" />

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
            <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Where We Are
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Our</span>
            {' '}
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Location
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Based in Berbera, Somaliland — serving the Horn of Africa with 
            climate-smart agricultural solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="min-h-[480px] glass rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ minHeight: '480px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Planet Heart Eco Ltd Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapLocation;