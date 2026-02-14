import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Solution', href: '#economy' },
      { name: 'Impact', href: '#impact' },
      { name: 'Timeline', href: '#timeline' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Newsletter', href: '#' },
    ],
    Support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'http://www.linkedin.com/in/planet-heart-eco-a585913b0', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand + Contact */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <Logo />
            </motion.div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              Transforming organic waste into sustainable resources. Building a circular economy for a greener Somaliland.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+254728200409"
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>0728200409</span>
              </a>

              <a
                href="tel:+252 63 9213892"
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+252 63 9213892</span>
              </a>

              <a
                href="mailto:info@planethearteco.com"
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@planethearteco.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Berbera, Somaliland</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Planet Heart Eco Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-all"
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-ocean-500 to-primary-500" />
    </footer>
  );
};

export default Footer;
