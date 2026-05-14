import React, { useEffect, useState, Children } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Heart, Book, Utensils, HandHeart } from 'lucide-react';
export function Hero() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  });
  const controls = useAnimation();
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({
        x,
        y
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const headline = 'Extending Hands. Restoring Dignity. Transforming Lives.';
  const words = headline.split(' ');
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Montage */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            x: mousePos.x * -1,
            y: mousePos.y * -1,
            scale: 1.05
          }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 30
          }}
          className="absolute inset-0 w-full h-full">
          
          {/* We use a grid of images that slowly zoom/pan to simulate a dynamic video feel */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-40">
            <motion.img
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80"
              alt="African woman smiling"
              className="w-full h-full object-cover origin-top-left" />
            
            <motion.img
              animate={{
                scale: [1.1, 1, 1.1]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear'
              }}
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
              alt="Children smiling"
              className="w-full h-full object-cover origin-bottom-right" />
            
            <motion.img
              animate={{
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'linear'
              }}
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80"
              alt="Community gathering"
              className="w-full h-full object-cover origin-center" />
            
            <motion.img
              animate={{
                scale: [1.1, 1, 1.1]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'linear'
              }}
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80"
              alt="Student learning"
              className="w-full h-full object-cover origin-top-right" />
            
          </div>
        </motion.div>

        {/* Gradients to blend and darken */}
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-900/80 via-cosmic-800/60 to-cosmic-900/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,5,37,0.8)_100%)]" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-magenta-500/20 rounded-full blur-[80px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/20 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-cyan-400/10 rounded-full blur-[60px] animate-pulse-glow" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: mousePos.x * 2
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
          className="absolute top-1/3 left-1/4 text-gold-400/30">
          
          <Heart size={32} />
        </motion.div>
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: mousePos.x * -2
          }}
          transition={{
            duration: 5,
            repeat: Infinity
          }}
          className="absolute bottom-1/3 right-1/4 text-magenta-400/30">
          
          <Book size={40} />
        </motion.div>
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: mousePos.y * 2
          }}
          transition={{
            duration: 6,
            repeat: Infinity
          }}
          className="absolute top-1/4 right-1/3 text-cyan-400/30">
          
          <Utensils size={28} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        <motion.img
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
          src="/logo.png"
          alt="Logo"
          className="w-32 md:w-48 mb-8 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] animate-float" />
        

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {words.map((word, i) =>
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: 20,
              filter: 'blur(10px)'
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)'
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: 'easeOut'
            }}
            className={`inline-block mr-3 ${word === 'Hands.' || word === 'Dignity.' || word === 'Lives.' ? 'text-gold-400 text-glow' : ''}`}>
            
              {word}
            </motion.span>
          )}
        </h1>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 1.5
          }}
          className="text-lg md:text-xl text-gray-300 mb-10 font-medium tracking-wide flex items-center gap-2">
          
          Greatwall Gardens, Athi River <span className="text-gold-500">•</span>{' '}
          Nairobi, Kenya
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 1.8
          }}
          className="flex flex-col sm:flex-row gap-6">
          
          <button
            onClick={() => scrollToSection('#get-involved')}
            className="group relative px-8 py-4 bg-gold-500 text-cosmic-900 font-bold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
            
            <span className="relative z-10 flex items-center gap-2 text-lg">
              <HandHeart className="w-5 h-5" />
              Become The Hand
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>

          <button
            onClick={() => scrollToSection('#about')}
            className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-full transition-all hover:bg-white/10 hover:border-gold-400/50 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]">
            
            <span className="flex items-center gap-2 text-lg">
              Join The Hope
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          
          <div className="w-1 h-2 bg-gold-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>);

}