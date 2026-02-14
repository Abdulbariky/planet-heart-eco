import React from 'react';
import { motion } from 'framer-motion';
import { Target, Leaf, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Vision',
      description:
        'A Horn of Africa where food systems are locally supplied, climate-resilient, and circular—where waste drives agricultural productivity.',
      color: 'primary',
    },
    {
      icon: Leaf,
      title: 'Mission',
      description:
        'Build a scalable circular economy platform converting organic waste into high-value agricultural inputs while delivering strong returns.',
      color: 'ocean',
    },
    {
      icon: TrendingUp,
      title: 'The Problem',
      description:
        'Agriculture depends on imported fertilizers, livestock faces protein feed bottlenecks, and 40–70+ tons of daily organic waste has no productive use.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Our Solution',
      description:
        'Black Soldier Fly bioconversion transforms waste into BSF Frass (organic fertilizer) and BSF Protein Meal (high-protein livestock feed).',
      color: 'ocean',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-gray-950 dark:via-primary-950/10 dark:to-gray-950" />

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
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Building Resilient Food Systems
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              Circular Economy
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Through Innovation
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
            We strengthen food security, reduce import dependency, and cut emissions—while creating
            scalable economic value for communities in the Horn of Africa.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl hover:shadow-xl transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 dark:from-${feature.color}-600 dark:to-${feature.color}-700 flex items-center justify-center mb-4 shadow-lg shadow-${feature.color}-500/30`}
                >
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className={`h-1 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-full mt-4 origin-left`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 glass rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why Change Is Needed
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                In Berbera, approximately{' '}
                <span className="font-bold text-primary-600 dark:text-primary-400">
                  40 to 70 tons of organic waste
                </span>{' '}
                are generated daily with no productive use. Meanwhile, agriculture depends on
                expensive imported fertilizers and livestock producers face critical protein feed
                shortages.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This creates high costs, low productivity, environmental damage, and massive missed
                economic value.
              </p>
            </div>

            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="aspect-video rounded-2xl bg-gradient-to-br from-primary-400/20 to-ocean-400/20 dark:from-primary-600/20 dark:to-ocean-600/20 backdrop-blur-3xl flex items-center justify-center"
              >
                <div className="text-center p-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent mb-2">
                    Waste → Value
                  </div>
                  <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    Circular by Design
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
