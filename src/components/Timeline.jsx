import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, BarChart3, TrendingUp } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      icon: Rocket,
      title: 'Pilot Launch',
      description: 'Launch pilot program in Berbera area.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Engage local stakeholders and community members.',
      color: 'ocean',
    },
    {
      icon: BarChart3,
      title: 'Impact Assessment',
      description: 'Measure overall impact on waste and emissions.',
      color: 'primary',
    },
    {
      icon: TrendingUp,
      title: 'Scaling Operations',
      description: 'Expand services to additional regions in Somaliland.',
      color: 'ocean',
    },
  ];

  return (
    <section id="timeline" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-50/50 via-white to-primary-50/50 dark:from-ocean-950/10 dark:via-gray-950 dark:to-primary-950/10" />

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
            <BarChart3 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Partnership Roadmap
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Partnership
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Timeline
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
            This timeline outlines the key milestones in our proposed partnership with Telesom 
            Foundation, emphasizing our strategy to enhance sustainability and resilience in Somaliland.
          </p>
        </motion.div>

        {/* Timeline - Desktop View */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-ocean-200 to-primary-200 dark:from-primary-800 dark:via-ocean-800 dark:to-primary-800 -translate-y-1/2 rounded-full" />

          {/* Progress Bar */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary-500 via-ocean-500 to-primary-500 -translate-y-1/2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          <div className="grid grid-cols-4 gap-8 relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Connector Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 dark:border-primary-400 shadow-lg z-10"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="mt-12 p-6 glass rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-600 dark:from-${milestone.color}-600 dark:to-${milestone.color}-700 flex items-center justify-center shadow-lg`}
                  >
                    <milestone.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {milestone.description}
                  </p>

                  {/* Step Number */}
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile View */}
        <div className="lg:hidden space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Vertical Line */}
              {index !== milestones.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-ocean-300 dark:from-primary-700 dark:to-ocean-700" />
              )}

              <div className="flex gap-4">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-600 dark:from-${milestone.color}-600 dark:to-${milestone.color}-700 flex items-center justify-center shadow-lg`}
                >
                  <milestone.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>

                {/* Card */}
                <div className="flex-1 p-6 glass rounded-2xl">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 p-8 glass rounded-3xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Collaborating for Sustainable Climate Solutions
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Each milestone focuses on engagement, assessment, and scaling, ensuring measurable 
            and impactful outcomes for the community and environment alike.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;