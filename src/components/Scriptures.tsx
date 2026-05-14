import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
export function Scriptures() {
  const scriptures = [
  {
    ref: 'Isaiah 1:17',
    text: 'Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.'
  },
  {
    ref: 'Proverbs 31:20',
    text: 'She opens her arms to the poor and extends her hands to the needy.'
  },
  {
    ref: 'James 1:27',
    text: 'Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress...'
  }];

  return (
    <section className="py-20 relative overflow-hidden bg-cosmic-900/50">
      {/* Subtle Cross Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scriptures.map((scripture, index) =>
          <motion.div
            key={index}
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
            transition={{
              delay: index * 0.2,
              duration: 0.8
            }}
            className="glass-card p-8 text-center group hover:border-white/30 transition-colors">
            
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm md:text-base">
                "{scripture.text}"
              </p>
              <h4 className="font-heading font-bold text-gold-500/80 tracking-widest text-sm uppercase">
                {scripture.ref}
              </h4>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}