import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, CheckCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Black Soldier Fly (BSF) technology?',
      answer: 'Black Soldier Fly (BSF) technology is a natural biological process that uses harmless insect larvae to convert organic materials into valuable resources such as organic fertilizer and sustainable protein. It is widely researched and used globally in waste management and sustainable agriculture systems.',
    },
    {
      question: 'Are Black Soldier Flies dangerous or harmful?',
      answer: 'No. Black Soldier Flies are non-pest insects and are not known to spread diseases. Unlike houseflies, BSF adults do not feed on human food and are not attracted to homes or living spaces. They play a beneficial role in natural nutrient recycling.',
    },
    {
      question: 'Does your process involve harmful chemicals?',
      answer: 'No. Our production system is based on natural biological conversion, not chemical processing. We rely on controlled, environmentally responsible methods designed to recover nutrients from organic materials.',
    },
    {
      question: 'Is your organic fertilizer safe for crops and soil?',
      answer: 'Yes. Organic fertilizer produced through biological conversion supports natural soil processes and nutrient cycling. It is designed to improve soil structure and contribute to healthier agricultural systems when used appropriately.',
    },
    {
      question: 'How is your fertilizer different from chemical fertilizers?',
      answer: 'Chemical fertilizers provide isolated nutrients, while organic fertilizers help support overall soil health, including soil structure and microbial activity. Many farmers use organic inputs as part of long-term soil management strategies.',
    },
    {
      question: 'What are the benefits of insect-based protein for feed?',
      answer: 'Insect protein is increasingly recognized as a sustainable alternative feed ingredient. It offers resource-efficient production, circular economy advantages, and compatibility with modern feed systems.',
      bulletPoints: [
        'Resource-efficient production',
        'Circular economy advantages',
        'Compatibility with modern feed systems',
      ],
    },
    {
      question: 'Are insects used in animal feed globally?',
      answer: 'Yes. Insect-based feed ingredients are being adopted in many countries and are supported by growing scientific and commercial interest as sustainable protein sources.',
    },
    {
      question: 'Does your operation create bad smells or hygiene problems?',
      answer: 'Our system is designed for controlled biological processing, which helps reduce many of the problems associated with unmanaged organic waste. Proper management and handling are core parts of our operating model.',
    },
    {
      question: 'What types of waste do you work with?',
      answer: 'We focus on suitable organic waste streams, particularly biodegradable materials that can be safely processed through biological conversion systems.',
    },
    {
      question: 'Why convert waste instead of dumping it?',
      answer: 'Organic waste contains valuable nutrients. Converting waste into useful products reduces environmental pressure, recovers lost value, and supports circular resource use.',
      bulletPoints: [
        'Reduces environmental pressure',
        'Recovers lost value',
        'Supports circular resource use',
      ],
    },
    {
      question: 'Is this approach environmentally responsible?',
      answer: 'Yes. Circular production and nutrient recovery systems are globally recognized strategies for improving sustainability and reducing waste-related environmental risks.',
    },
    {
      question: 'Can farmers and businesses work directly with Planet Heart Eco?',
      answer: 'Yes. We welcome inquiries from farmers, feed producers, institutions, and waste service clients. Please contact us to discuss products, availability, and collaboration options.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-ocean-50/20 to-white dark:from-gray-950 dark:via-ocean-950/10 dark:to-gray-950" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <HelpCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Got Questions?
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about BSF technology and Planet Heart Eco Ltd.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div
                className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-xl' : 'hover:shadow-md'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-primary-500 to-ocean-500'
                        : 'bg-primary-100 dark:bg-primary-900/30'
                    }`}>
                      <span className={`text-sm font-bold ${
                        openIndex === index ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-base font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors ${
                      openIndex === index
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-400'
                    }`} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4 ml-12">
                          {faq.answer}
                        </p>
                        {faq.bulletPoints && (
                          <ul className="mt-4 space-y-2 ml-12">
                            {faq.bulletPoints.map((point, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                                <span className="text-sm">{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 p-8 glass rounded-3xl text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-ocean-600 hover:from-primary-700 hover:to-ocean-700 text-white rounded-xl font-semibold shadow-lg transition-all"
          >
            Contact Us Directly
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;