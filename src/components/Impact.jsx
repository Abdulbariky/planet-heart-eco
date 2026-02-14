import React from 'react';
import { motion } from 'framer-motion';
import { CloudOff, Trash2, Briefcase, TrendingDown, Users2, Sprout } from 'lucide-react';

const Impact = () => {
  const impacts = [
    {
      icon: CloudOff,
      title: 'CO2e Reduction',
      description: 'Avoiding significant carbon emissions through innovative waste management solutions.',
      stat: 'Significant',
      unit: 'Reduction',
      color: 'primary',
    },
    {
      icon: Trash2,
      title: 'Waste Diversion',
      description: 'Converting organic waste into valuable resources, diverting from landfills.',
      stat: 'Substantial',
      unit: 'Amount',
      color: 'ocean',
    },
    {
      icon: Briefcase,
      title: 'Job Creation',
      description: 'Fostering local employment opportunities and sustainable livelihoods.',
      stat: 'Green',
      unit: 'Jobs',
      color: 'primary',
    },
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Climate Resilience',
      description: 'Contributing to mitigation efforts',
    },
    {
      icon: Users2,
      title: 'Community Health',
      description: 'Reducing environmental pollution',
    },
    {
      icon: Sprout,
      title: 'Food Security',
      description: 'Enhancing agricultural productivity',
    },
  ];

  return (
    <section id="impact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/50 to-ocean-50/50 dark:from-gray-950 dark:via-primary-950/10 dark:to-ocean-950/10" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

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
            <TrendingDown className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Measurable Results
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              Quantifying
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Climate & ESG Benefits
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
            Our initiative delivers measurable environmental, social, and governance impact 
            across multiple dimensions.
          </p>
        </motion.div>

        {/* Main Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-8 glass rounded-3xl hover:shadow-2xl transition-all duration-300">
                {/* Icon with Glow Effect */}
                <div className="relative mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`absolute inset-0 bg-${impact.color}-500 dark:bg-${impact.color}-600 blur-2xl opacity-20 rounded-full`}
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-${impact.color}-500 to-${impact.color}-600 dark:from-${impact.color}-600 dark:to-${impact.color}-700 flex items-center justify-center shadow-xl`}
                  >
                    <impact.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </motion.div>
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <div className={`text-4xl font-bold bg-gradient-to-r from-${impact.color}-600 to-${impact.color}-700 dark:from-${impact.color}-400 dark:to-${impact.color}-500 bg-clip-text text-transparent mb-1`}>
                    {impact.stat}
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-500">
                    {impact.unit}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {impact.description}
                </p>

                {/* Progress Bar */}
                <motion.div
                  className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r from-${impact.color}-500 to-${impact.color}-600`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Additional Benefits
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-ocean-100 dark:from-primary-900/30 dark:to-ocean-900/30 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;