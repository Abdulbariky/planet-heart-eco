import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Fish, CheckCircle, ArrowRight, Package } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Leaf,
      type: 'Frass Fertilizer',
      tagline: 'Feed your soil, not the landfill.',
      description:
        "When Black Soldier Fly larvae break down organic waste, they leave behind frass — a natural organic fertilizer that helps improve soil health and crop growth. In Somaliland's dryland and semi-arid farming conditions, frass offers real benefits that chemical fertilizers cannot match alone.",
      whatItDoes: [
        'Improves soil organic matter',
        'Supports healthy root growth',
        'Helps crops perform better',
        'Improves water retention in dry and semi-arid soils',
        'Reduces dependence on synthetic fertilizers',
        'Supports climate-smart and regenerative farming',
      ],
      whoItIsFor: [
        'Vegetable and fruit farmers',
        'Greenhouse operators',
        'Field crop farmers',
        'Pastoralists transitioning to mixed farming',
        'Tree planting and reforestation programs',
        'NGO food security projects across all regions',
        'Soil restoration and land rehabilitation projects',
        'Agricultural development programs',
      ],
      cta: 'Contact us for product details and availability.',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600',
      bgGradient: 'from-primary-50 to-primary-100/50 dark:from-primary-950/30 dark:to-primary-900/20',
    },
    {
      icon: Fish,
      type: 'BSF Larvae Protein',
      tagline: 'Local feed for stronger livestock.',
      description:
        "Protein is one of the most expensive parts of animal feed. Somaliland's farmers and feed producers depend heavily on imported fishmeal and soy, which are costly and vulnerable to supply disruptions. Planet Heart ECO LIMITED produces BSF larvae protein locally — from Somaliland's own organic waste — helping reduce import dependence and keeping more value inside the national economy.",
      whatItDoes: [
        'Provides quality protein for poultry, fish, and livestock feed',
        'Reduces dependence on imported fishmeal and soy',
        'Supports more stable and affordable feed supply chains across Somaliland',
        'Creates local value from local waste',
      ],
      whoItIsFor: [
        'Poultry feed producers',
        'Fish feed producers',
        'Livestock feed manufacturers',
        'Aquaculture projects',
        'Agricultural development programs operating across Somaliland',
      ],
      cta: 'Inquire about supply and specifications.',
      color: 'ocean',
      gradient: 'from-ocean-500 to-ocean-600',
      bgGradient: 'from-ocean-50 to-ocean-100/50 dark:from-ocean-950/30 dark:to-ocean-900/20',
    },
  ];

  return (
    <section id="products" className="relative py-24 overflow-hidden">
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
            <Package className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              What We Produce
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">From Waste to Value —</span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Across Somaliland
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Planet Heart ECO LIMITED produces two main products from organic waste, available to farmers, feed producers, municipalities, and development partners throughout Somaliland:
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm">
              <Leaf className="w-4 h-4" /> Frass organic fertilizer
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-100 dark:bg-ocean-900/30 text-ocean-700 dark:text-ocean-300 font-medium text-sm">
              <Fish className="w-4 h-4" /> BSF larvae protein for animal feed
            </span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className={`h-full glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300`}>
                {/* Product Header */}
                <div className={`p-8 bg-gradient-to-br ${product.bgGradient}`}>
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-xl`}
                    >
                      <product.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </motion.div>
                  </div>

                  <div>
                    <p className={`text-sm font-semibold text-${product.color}-600 dark:text-${product.color}-400 mb-2 uppercase tracking-wide`}>
                      {product.type}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {product.tagline}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">
                      What it helps do
                    </h4>
                    <ul className="space-y-2">
                      {product.whatItDoes.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.07 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className={`w-5 h-5 text-${product.color}-500 flex-shrink-0`} />
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">
                      Who it is for — across Somaliland
                    </h4>
                    <ul className="space-y-2">
                      {product.whoItIsFor.map((who, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.07 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-${product.color}-500 flex-shrink-0`} />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {who}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group/btn w-full flex items-center justify-between px-6 py-4 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-semibold shadow-lg transition-all`}
                  >
                    <span>{product.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
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
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 p-8 glass rounded-3xl text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Both products are locally produced in <span className="font-bold text-primary-600 dark:text-primary-400">Berbera, Somaliland</span> using our BSF bioconversion technology, supporting food security and reducing import dependency across Somaliland and the Horn of Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
