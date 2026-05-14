import React from 'react';
import { motion } from 'framer-motion';
import {
  Handshake,
  Heart,
  UtensilsCrossed,
  GraduationCap,
  BookOpen } from
'lucide-react';
export function Programs() {
  const programs = [
  {
    title: 'Support & Empowerment',
    description:
    'Empowering widows and vulnerable families through sustainable support programs.',
    icon: Handshake,
    image:
    'https://images.unsplash.com/photo-1593113565694-c6f8716c0296?auto=format&fit=crop&q=80',
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  {
    title: 'Sanitary Care',
    description:
    'Providing Always pads to ensure dignified menstrual health for young girls.',
    icon: Heart,
    image:
    'https://images.unsplash.com/photo-1542810634-71277d95dc8c?auto=format&fit=crop&q=80',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Feeding Program',
    description:
    'Nourishing vulnerable families and children to foster health and growth.',
    icon: UtensilsCrossed,
    image:
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Education & Mentorship',
    description:
    'Offering scholarships, tutoring, and life mentorship to vulnerable learners.',
    icon: GraduationCap,
    image:
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80',
    colSpan: 'md:col-span-2 lg:col-span-1'
  },
  {
    title: 'Inspirational Teachings',
    description:
    'Sharing faith-based hope and life skills to build resilient communities.',
    icon: BookOpen,
    image:
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
    colSpan: 'md:col-span-3 lg:col-span-1'
  }];

  return (
    <section id="programs" className="py-24 relative z-10">
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
            once: true,
            margin: '-100px'
          }}
          className="text-center mb-16">
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            What We <span className="text-gold-400 text-glow">Do</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our programs are designed to address immediate needs while building
            long-term resilience and hope.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {programs.map((program, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            whileHover={{
              y: -8
            }}
            className={`group relative rounded-3xl overflow-hidden glass-card border-white/5 hover:border-gold-400/30 transition-all duration-500 ${program.colSpan}`}>
            
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <motion.img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900 via-cosmic-900/80 to-transparent" />
              </div>

              {/* Holographic Sweep */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-[shimmer_1.5s_ease-in-out]" />
              </div>

              {/* Content */}
              <div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[300px]">
                <div className="mb-4">
                  <motion.div
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:border-gold-400/50 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }}>
                  
                    <program.icon className="w-7 h-7 text-gold-400" />
                  </motion.div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {program.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}