import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Zap } from 'lucide-react';

export function Founder() {
  const [activeTab, setActiveTab] = useState<'overview' | 'mission' | 'impact'>('overview');

  const tabs = [
    { id: 'overview', label: 'About' },
    { id: 'mission', label: 'Mission' },
    { id: 'impact', label: 'Impact' }
  ];

  const highlights = [
    { icon: Award, label: 'Humanitarian Diplomat', value: 'Global Peacebuilding' },
    { icon: Heart, label: 'Psychology Counsellor', value: 'Emotional Healing' },
    { icon: Users, label: 'Youth Empowerment', value: 'Future Leaders' },
    { icon: Zap, label: 'Transformational Leader', value: 'Living Legacy' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="founder" className="py-24 relative z-10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Meet The <span className="text-gold-400 text-glow">Founder</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A visionary leader dedicated to transforming lives through faith, compassion, and empowerment
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500 via-gold-400 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <img
                src="/esther.jpeg"
                alt="Rev. Dr. Esther Kennedy"
                className="relative w-full rounded-3xl object-cover border-2 border-gold-500/20 shadow-2xl h-[500px]"
              />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-8 -left-12 bg-cosmic-800/90 backdrop-blur-lg border border-gold-500/30 rounded-2xl p-4 w-64 shadow-xl"
            >
              <p className="text-gold-400 font-semibold text-sm">Visionary Leader</p>
              <p className="text-white text-xs mt-1">Transforming communities through faith and compassion</p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Title and Titles */}
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-white mb-3"
              >
                Rev. Dr. Esther Kennedy
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gold-400 text-lg font-semibold leading-relaxed"
              >
                Humanitarian Diplomat | Psychology Counsellor | Global Peace Ambassador | Transformational Leader | Women & Youth Empowerment Advocate
              </motion.p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-3 border-b border-white/10">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-3 font-medium transition-all duration-300 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-gold-400 border-gold-400'
                      : 'text-gray-400 border-transparent hover:text-gold-300'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {activeTab === 'overview' && (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Rev. Dr. Esther Kennedy is a dynamic and visionary servant of God, passionately committed to transforming lives through ministry, mentorship, counselling, and humanitarian service. She serves as the <span className="text-gold-400 font-semibold">Resident Pastor of Deliverance Church Greatwall Gardens, Athi River, Nairobi</span> and the <span className="text-gold-400 font-semibold">Senior Pastor of Deliverance Church International Kisii</span>, where her leadership continues to inspire spiritual growth, empowerment, and community impact.
                  </p>
                  <p>
                    Known for her grace, wisdom, humility, and transformational leadership, she remains a powerful voice of faith and hope, carrying a divine mandate to restore lives, strengthen families, and advance the Kingdom of God both locally and internationally.
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    As a <span className="text-gold-400 font-semibold">Humanitarian Diplomat</span>, Rev. Esther Kennedy is actively involved in initiatives that promote compassion, peace, social transformation, and human empowerment across communities. Her passion for people extends beyond the pulpit, reaching individuals and families through outreach programs, mentorship platforms, and empowerment initiatives.
                  </p>
                  <p>
                    A trained <span className="text-gold-400 font-semibold">Psychology Counsellor</span>, she offers guidance and emotional support to many, helping individuals navigate life with wisdom, healing, and faith.
                  </p>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Rev. Esther is recognized as a <span className="text-gold-400 font-semibold">Global Peace Ambassador</span> and a strong advocate for <span className="text-gold-400 font-semibold">Women and Youth Empowerment</span>, dedicating her life to raising confident, purpose-driven leaders equipped to influence society positively.
                  </p>
                  <p>
                    Through conferences, mentorship forums, and humanitarian engagements, she continues to nurture lives spiritually, mentally, emotionally, and socially—creating a living legacy of transformation.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mt-20"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="relative bg-cosmic-800 border border-white/10 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon className="w-8 h-8 text-gold-400 mb-4" />
                  </motion.div>
                  <h4 className="text-white font-semibold mb-2">{highlight.label}</h4>
                  <p className="text-gray-400 text-sm">{highlight.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-300 mb-6">
            Inspired by her vision? Join the movement of compassion and transformation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 font-semibold text-white overflow-hidden rounded-lg group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-400 group-hover:from-gold-400 group-hover:to-gold-300 transition-all duration-300" />
            <span className="relative flex items-center justify-center">
              Get Involved Today
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
