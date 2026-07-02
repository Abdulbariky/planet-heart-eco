import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Users } from 'lucide-react';

const CircularEconomy = () => {
  const beneficiaries = [
    'Municipalities across Somaliland that need cleaner waste systems',
    'Farmers looking for reliable organic fertilizer suited to local soils',
    'Feed producers seeking a local protein source',
    'Development partners working on food security and climate resilience',
  ];

  return (
    <section id="economy" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-ocean-50/30 to-white dark:from-gray-950 dark:via-ocean-950/10 dark:to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            <Recycle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Our Solution
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              One simple system.
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Two useful products. Real impact.
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
            Across Somaliland, organic waste is often seen as a problem. We see it as a resource. Our Black Soldier Fly recycling process turns it into frass fertilizer and larvae protein — two useful products that go straight back into Somaliland's farms and food systems.
          </p>
        </motion.div>

        {/* Beneficiaries Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-8 glass rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-ocean-600 flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Who It Serves
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                This gives municipalities, farmers, feed producers, and development partners across Somaliland a practical way to create cleaner cities, stronger farms, and more reliable local supply chains.
              </p>
            </div>

            <ul className="space-y-3">
              {beneficiaries.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400 mt-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CircularEconomy;
