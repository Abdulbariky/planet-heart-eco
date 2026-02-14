import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Users } from 'lucide-react';

const Team = () => {
  // Replace with your actual team member details and image paths
  const teamMembers = [
    {
      name: 'HAMZA GULEID',
      role: 'Founder & CEO',
      image: '/images/team/member1.jpg', // Update with actual path
      bio: 'Leading climate-smart agriculture innovation in the Horn of Africa',
    },
    {
      name: 'Leyla',
      role: 'Founder',
      image: '/images/team/member2.jpg',
      bio: 'Visionary founder of Planet Heart Eco, building bold circular-economy solutions that turn waste into opportunity.',
    },
    {
      name: 'Mohamud Mohamed',
      role: 'Head of Operations',
      image: '/images/team/member3.jpg',
      bio: 'Execution powerhouse leading daily operations, systems performance, and real-world impact on the ground.',
    },
    {
      name: 'Shukri Farah',
      role: 'Research & Development',
      image: '/images/team/member4.jpg',
      bio: 'Innovation-focused researcher driving smarter processes, continuous improvement, and technical excellence.',
    },
    {
      name: 'Mariam Mohamed Haybe',
      role: 'Administrator',
      image: '/images/team/member4.jpg',
      bio: 'Operational backbone ensuring coordination, structure, and organizational flow across the team.',
    },
  ];

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-gray-950 dark:via-primary-950/10 dark:to-gray-950" />

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
            <Users className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Meet Our Team
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">
              The People Behind
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
            A dedicated team of innovators, sustainability experts, and local leaders working
            to transform waste into value across the Horn of Africa.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary-100 to-ocean-100 dark:from-primary-900/30 dark:to-ocean-900/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl glass hover:bg-primary-100 dark:hover:bg-primary-900/30 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl glass hover:bg-primary-100 dark:hover:bg-primary-900/30 flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 p-8 glass rounded-3xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Team
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            We're always looking for passionate individuals who want to make a real impact
            on climate resilience and sustainable agriculture in the Horn of Africa.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-ocean-600 hover:from-primary-700 hover:to-ocean-700 text-white rounded-xl font-semibold shadow-lg transition-all"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;