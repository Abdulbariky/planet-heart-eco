import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertCircle } from 'lucide-react';

const MythsFacts = () => {
  const mythsFacts = [
    {
      myth: 'Black Soldier Fly larvae spread diseases like houseflies.',
      fact: 'BSF adults do not bite, sting, or feed on waste and cannot transmit disease. They are biologically different from houseflies.',
    },
    {
      myth: 'BSF increases fly infestations.',
      fact: 'BSF larvae suppress houseflies by outcompeting them for food and disrupting their breeding cycle.',
    },
    {
      myth: 'Using BSF in waste recycling is unhygienic.',
      fact: 'Scientific studies show BSF larvae reduce harmful pathogens such as E. coli and Salmonella during organic waste treatment.',
    },
    {
      myth: 'BSF systems create bad odors and health risks.',
      fact: 'Properly managed BSF systems reduce odors, lower disease vectors, and improve sanitation compared to open dumping or landfilling.',
    },
    {
      myth: 'BSF is unsafe for communities and workers.',
      fact: 'BSF technology is widely used globally and recognized as a safe, controlled, and bio-secure solution for organic waste recycling.',
    },
  ];

  return (
    <section id="myths-facts" className="relative py-24 overflow-hidden">
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
            <AlertCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Setting the Record Straight
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              Black Soldier Fly Larvae
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Myth vs Fact
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
            Dispelling common misconceptions about Black Soldier Fly technology and 
            highlighting the science-backed benefits of this innovative solution.
          </p>
        </motion.div>

        {/* Myths vs Facts Cards */}
        <div className="space-y-6">
          {mythsFacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Myth Side */}
                <div className="p-8 bg-red-50/50 dark:bg-red-950/20 border-r border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500 dark:bg-red-600 flex items-center justify-center shadow-lg"
                    >
                      <X className="w-7 h-7 text-white" strokeWidth={3} />
                    </motion.div>
                    <div>
                      <h3 className="text-sm font-bold text-red-600 dark:text-red-400 mb-2 uppercase tracking-wide">
                        Myth
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.myth}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fact Side */}
                <div className="p-8 bg-primary-50/50 dark:bg-primary-950/20">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500 dark:bg-primary-600 flex items-center justify-center shadow-lg"
                    >
                      <Check className="w-7 h-7 text-white" strokeWidth={3} />
                    </motion.div>
                    <div>
                      <h3 className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wide">
                        Fact
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.fact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 p-8 glass rounded-3xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Science-Backed Solution
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            BSF technology is widely used globally and recognized as a safe, controlled, and bio-secure 
            solution for organic waste recycling. Our systems are designed to meet international health 
            and safety standards while delivering measurable environmental and economic benefits.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MythsFacts;