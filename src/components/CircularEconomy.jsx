import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Wheat, Fish, CloudRain } from 'lucide-react';

const CircularEconomy = () => {
  const steps = [
    {
      icon: Recycle,
      title: 'Waste Conversion',
      subtitle: 'Organic materials',
      points: ['Organic materials', 'Methane reduction', 'Local resources'],
      color: 'from-primary-500 to-primary-600',
      delay: 0,
    },
    {
      icon: Fish,
      title: 'Protein Production',
      subtitle: 'Sustainable feed',
      points: ['Sustainable feed', 'Nutrient-dense', 'Low environmental impact'],
      color: 'from-ocean-500 to-ocean-600',
      delay: 0.2,
    },
    {
      icon: Wheat,
      title: 'Fertilizer Creation',
      subtitle: 'Enhanced soil health',
      points: ['Enhanced soil health', 'Reduced chemical use', 'Crop yield improvement'],
      color: 'from-primary-500 to-primary-600',
      delay: 0.4,
    },
    {
      icon: CloudRain,
      title: 'Emissions Reduction',
      subtitle: 'Lower carbon footprint',
      points: ['Lower carbon footprint', 'Climate resilience', 'Sustainable practices'],
      color: 'from-ocean-500 to-ocean-600',
      delay: 0.6,
    },
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

          {/* UPDATED TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              BSF Bioconversion
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>

          {/* UPDATED DESCRIPTION */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
            Using Black Soldier Fly bioconversion, we transform organic waste into BSF Frass
            (climate-smart organic fertilizer) and BSF Protein Meal (high-protein feed for livestock and poultry).
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-300 via-ocean-300 to-primary-300 dark:from-primary-700 dark:via-ocean-700 dark:to-primary-700 -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div className="h-full p-6 glass rounded-2xl hover:shadow-xl transition-all duration-300">
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center font-bold text-lg shadow-lg border-2 border-primary-200 dark:border-primary-800">
                    {index + 1}
                  </div>

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
                    {step.subtitle}
                  </p>

                  <ul className="space-y-2">
                    {step.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: step.delay + 0.1 * pointIndex }}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 mt-1.5" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 p-8 glass rounded-3xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Circular Approach
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            By converting waste into high-protein animal feed and organic fertilizers, we not only
            address the pressing issue of waste management but also enhance food security and support
            sustainable agricultural practices. This closed-loop system reduces greenhouse gas emissions
            and reliance on imports, fostering a greener economy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CircularEconomy;
