import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const timelineItems = [
  {
    year: 'The Vision',
    text: 'Founded by Esther Nyawira to restore dignity to widows and support children with special needs.'
  },
  {
    year: 'The Mission',
    text: 'Empowering vulnerable learners through compassion-driven programs and education.'
  },
  {
    year: 'The Impact',
    text: 'Transforming lives in Greatwall Gardens, Athi River, and across Kenya.'
  }];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magenta-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cosmic-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 border-2 border-gold-500/30 rounded-3xl z-20 pointer-events-none transition-colors group-hover:border-gold-400/60" />

            {/* Glowing Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,215,0,0.3)_360deg)] animate-[spin_4s_linear_infinite] z-10 opacity-50" />

            <motion.div
              style={{
                y: imageY
              }}
              className="absolute inset-[-10%] w-[120%] h-[120%]">
              
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
                alt="Kenyan woman portrait representing Esther Nyawira's vision"
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Text & Timeline Column */}
          <div className="relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-100px'
              }}
              transition={{
                duration: 0.8
              }}>
              
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-gold-400 text-glow">Story</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                The Esther Nyawira Hands of Compassion Foundation was born from
                a deep desire to see every vulnerable soul live with dignity. We
                believe that compassion is an action, not just a feeling.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gold-500/50 before:via-magenta-500/50 before:to-transparent">
              {timelineItems.map((item, index) => {
                const itemRef = useRef(null);
                const isInView = useInView(itemRef, {
                  once: true,
                  margin: '-100px'
                });
                return (
                  <motion.div
                    key={index}
                    ref={itemRef}
                    initial={{
                      opacity: 0,
                      x: 50
                    }}
                    animate={
                    isInView ?
                    {
                      opacity: 1,
                      x: 0
                    } :
                    {
                      opacity: 0,
                      x: 50
                    }
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2
                    }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                    {/* Dot */}
                    <div
                      className={`flex items-center justify-center w-5 h-5 rounded-full border-4 border-cosmic-900 bg-cosmic-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 ${isInView ? 'bg-gold-400 border-gold-200 shadow-[0_0_15px_rgba(255,215,0,0.8)]' : ''}`}>
                    </div>

                    {/* Content */}
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-card p-5 hover:border-gold-400/30 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gold-400 text-lg">
                          {item.year}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>);

              })}
            </div>
          </div>
        </div>
      </div>
    </section>);

}