import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export function CoreValues() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const values = [
  {
    name: 'Compassion',
    desc: 'Acting with deep empathy and love.',
    pos: 'md:col-start-2 md:row-start-1'
  },
  {
    name: 'Dignity',
    desc: 'Respecting the inherent worth of every soul.',
    pos: 'md:col-start-3 md:row-start-1'
  },
  {
    name: 'Empowerment',
    desc: 'Equipping others to build their own futures.',
    pos: 'md:col-start-1 md:row-start-2'
  },
  {
    name: 'Integrity',
    desc: 'Operating with transparency and honesty.',
    pos: 'md:col-start-2 md:row-start-2'
  },
  {
    name: 'Service',
    desc: 'Joyfully giving our time and resources.',
    pos: 'md:col-start-3 md:row-start-2'
  },
  {
    name: 'Hope',
    desc: 'Inspiring belief in a brighter tomorrow.',
    pos: 'md:col-start-4 md:row-start-2'
  },
  {
    name: 'Impact',
    desc: 'Creating lasting, positive change.',
    pos: 'md:col-start-2 md:row-start-3 md:col-span-2 justify-self-center'
  }];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            once: true
          }}
          className="text-center mb-16 relative z-10">
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Our Core <span className="text-gold-400 text-glow">Values</span>
          </h2>
        </motion.div>

        {/* Honeycomb / Grid Layout */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {values.map((value, index) =>
          <motion.div
            key={index}
            className={`relative flex items-center justify-center aspect-square ${value.pos}`}
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}>
            
              <motion.div
              animate={{
                y: hoveredIndex === index ? 0 : [0, -5, 0]
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2
                }
              }}
              className="w-full h-full">
              
                <div
                className={`w-full h-full rounded-full glass-card border-2 flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all duration-300 ${hoveredIndex === index ? 'border-gold-400 bg-gold-500/10 shadow-[0_0_30px_rgba(255,215,0,0.3)] scale-110 z-20' : 'border-white/10 hover:border-white/30'}`}>
                
                  <h3
                  className={`font-heading font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-gold-400 text-xl' : 'text-white text-lg'}`}>
                  
                    {value.name}
                  </h3>

                  <AnimatePresence>
                    {hoveredIndex === index &&
                  <motion.p
                    initial={{
                      opacity: 0,
                      height: 0,
                      mt: 0
                    }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                      mt: 8
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      mt: 0
                    }}
                    className="text-xs text-gray-300">
                    
                        {value.desc}
                      </motion.p>
                  }
                  </AnimatePresence>

                  {/* Particle Burst on Hover */}
                  {hoveredIndex === index &&
                <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) =>
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 1,
                      scale: 0,
                      x: 0,
                      y: 0
                    }}
                    animate={{
                      opacity: 0,
                      scale: 1.5,
                      x: Math.cos(i * 60 * Math.PI / 180) * 50,
                      y: Math.sin(i * 60 * Math.PI / 180) * 50
                    }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeOut'
                    }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-gold-400 rounded-full blur-[1px]" />

                  )}
                    </div>
                }
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}