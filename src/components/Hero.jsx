import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Droplets, Sun } from 'lucide-react';

const Hero = () => {
  const floatingIcons = [
    { Icon: Leaf, delay: 0, duration: 3 },
    { Icon: Droplets, delay: 0.5, duration: 3.5 },
    { Icon: Sun, delay: 1, duration: 4 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-ocean-50 to-white dark:from-gray-950 dark:via-primary-950/20 dark:to-gray-950" />

      {/* Animated Background Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ y: '100%', x: `${index * 30}%`, opacity: 0 }}
            animate={{
              y: '-100%',
              x: `${index * 30 + 10}%`,
              opacity: [0, 0.3, 0.3, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ left: `${10 + index * 30}%` }}
          >
            <Icon className="w-16 h-16 text-primary-300 dark:text-primary-800" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Climate-Smart Solutions for Somaliland
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
                  Transform Waste
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Into Value
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
              >
                Turning organic waste into sustainable resources. Creating a circular economy
                that promotes climate resilience, reduces emissions, and builds green livelihoods
                in Somaliland.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 transition-all"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: '~66%', label: 'Gross', unit: 'Margin' },
                { value: '3.6t', label: 'Break-even', unit: 'Daily' },
                { value: 'BSF', label: 'Bioconversion', unit: 'Tech' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {stat.unit}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">

              {/* Orbiting Icons */}
              {[0, 120, 240].map((rotation, index) => (
                <motion.div
                  key={index}
                  animate={{ rotate: [rotation, rotation + 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 glass rounded-2xl flex items-center justify-center shadow-xl">
                    {index === 0 && <Leaf className="w-10 h-10 text-primary-600 dark:text-primary-400" />}
                    {index === 1 && <Droplets className="w-10 h-10 text-ocean-600 dark:text-ocean-400" />}
                    {index === 2 && <Sun className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />}
                  </div>
                </motion.div>
              ))}

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <img
                    src="/images/logo.png"
                    alt="Planet Heart Eco Ltd"
                    className="w-48 h-48 object-contain drop-shadow-2xl"
                  />

                  <div className="absolute inset-0 bg-primary-500/20 dark:bg-primary-400/20 blur-3xl rounded-full -z-10" />
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
