import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Sprout, Fish, PackageCheck, TrendingUp, ArrowDownToLine, RefreshCw, Package, RotateCcw } from 'lucide-react';

const Impact = () => {
  const impacts = [
    {
      icon: Building2,
      title: 'Cleaner Cities Across Somaliland',
      description:
        'We help reduce organic waste going to dumpsites and landfills in towns and cities across Somaliland, lowering pollution, bad smells, and public health risks.',
      color: 'primary',
    },
    {
      icon: Sprout,
      title: 'Stronger Agriculture',
      description:
        'Our frass fertilizer helps rebuild soil, improve water retention, and reduce dependence on chemical fertilizers — supporting farmers across Somaliland\'s agricultural regions.',
      color: 'ocean',
    },
    {
      icon: Fish,
      title: 'Local Animal Feed Protein',
      description:
        'BSF larvae protein gives poultry, fish, and livestock producers across Somaliland a local alternative to expensive imported feed ingredients.',
      color: 'primary',
    },
  ];

  const modelBenefits = [
    'Municipalities across the country get cleaner waste systems',
    'Farmers get organic fertilizer suited to local soils',
    'Feed producers get a reliable local protein source',
    'Communities get cleaner and healthier environments',
    'The national economy gains a new circular value chain',
  ];

  const howItWorks = [
    {
      icon: ArrowDownToLine,
      step: 'Collect',
      description: 'We collect organic waste from markets, food businesses, fish processors, and municipal waste streams across Somaliland.',
      color: 'from-primary-500 to-primary-600',
      delay: 0,
    },
    {
      icon: RefreshCw,
      step: 'Recycle',
      description: 'Black Soldier Fly larvae feed on the organic waste and convert it quickly into useful biomass.',
      color: 'from-ocean-500 to-ocean-600',
      delay: 0.15,
    },
    {
      icon: Package,
      step: 'Produce',
      description: 'The process creates two valuable products: frass fertilizer and larvae protein.',
      color: 'from-primary-500 to-primary-600',
      delay: 0.3,
    },
    {
      icon: RotateCcw,
      step: 'Return',
      description: 'These products are returned to local agriculture and animal feed production across the country.',
      color: 'from-ocean-500 to-ocean-600',
      delay: 0.45,
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <TrendingUp className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Sustainability &amp; Impact
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              The Model Is Simple.
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              The Impact Is National.
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
            Organic waste is collected across Somaliland, recycled by Black Soldier Fly larvae, and turned into frass fertilizer and larvae protein. These products then go back into farming and animal feed production — strengthening local food systems from the ground up. At every step, Somaliland's waste is turned into Somaliland's value.
          </p>
        </motion.div>

        {/* Model Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass rounded-3xl p-8 mb-16"
        >
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modelBenefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
              >
                <PackageCheck className="w-5 h-5 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">
            How It Works
          </h3>

          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-300 via-ocean-300 to-primary-300 dark:from-primary-700 dark:via-ocean-700 dark:to-primary-700 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay, duration: 0.6 }}
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
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </motion.div>

                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.step}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="relative mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
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

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {impact.description}
                </p>

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

        {/* UN Sustainable Development Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 glass rounded-3xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Supporting the UN Sustainable Development Goals
          </h3>
          <div className="flex justify-center">
            <img
              src="/images/sdg.jpeg"
              alt="UN Sustainable Development Goals supported by Planet Heart ECO LIMITED"
              className="w-full max-w-3xl h-auto rounded-2xl object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
