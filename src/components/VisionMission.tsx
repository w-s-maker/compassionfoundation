import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
export function VisionMission() {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  };
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            className="glass-card p-10 relative overflow-hidden group holographic-hover">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-[40px] group-hover:bg-cyan-400/20 transition-colors" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-400/50 transition-colors group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                <motion.div
                  whileHover={{
                    rotate: 15,
                    scale: 1.1
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300
                  }}>
                  
                  <Eye className="w-8 h-8 text-cyan-400" />
                </motion.div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                "To create a world where every widow, child, and vulnerable soul
                lives with dignity, hope, and opportunity."
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px'
            }}
            className="glass-card p-10 relative overflow-hidden group holographic-hover">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-magenta-500/10 rounded-full blur-[40px] group-hover:bg-magenta-500/20 transition-colors" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-magenta-400/50 transition-colors group-hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                <motion.div
                  whileHover={{
                    scale: 1.1
                  }}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}>
                  
                  <Target className="w-8 h-8 text-magenta-400" />
                </motion.div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                "To extend hands of compassion through sanitary care,
                nourishment, education, mentorship, and inspirational guidance —
                restoring dignity and transforming lives across Kenya."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}