import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const BSFProcess = () => {
  return (
    <section id="bsf-process" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/20 to-white dark:from-gray-950 dark:via-primary-950/10 dark:to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <RefreshCw className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              How It Works
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Our BSF Circular</span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Production Process
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A closed-loop system that transforms organic waste into high-value agricultural 
            inputs through natural Black Soldier Fly bioconversion.
          </p>
        </motion.div>

        {/* Process Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass rounded-3xl overflow-hidden shadow-2xl p-4">
            {/* Replace with your actual process image */}
            <img
              src="/images/BSFProcess/Bsf-circular-production-process.jpeg" // ADD YOUR PROCESS IMAGE HERE
              alt="BSF Circular Production Process"
              className="w-full h-auto rounded-2xl object-contain"
            />

            {/* Overlay gradient at bottom */}
            <div className="absolute bottom-4 left-4 right-4 h-20 bg-gradient-to-t from-white/20 dark:from-gray-950/20 to-transparent rounded-b-2xl pointer-events-none" />
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 via-ocean-500/10 to-primary-500/10 blur-3xl -z-10 rounded-full" />
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6"
        >
          The complete BSF circular production cycle — from organic waste collection to 
          final agricultural inputs.
        </motion.p>
      </div>
    </section>
  );
};

export default BSFProcess;