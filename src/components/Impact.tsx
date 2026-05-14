import React, { useEffect, useState, useRef, Children, Component } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// Animated Counter Component
function AnimatedCounter({
  end,
  suffix = '',
  label




}: {end: number;suffix?: string;label: string;}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);
  return (
    <div
      ref={ref}
      className="text-center p-6 glass-card border-white/5 hover:border-gold-400/30 transition-colors">
      
      <div className="font-heading text-4xl md:text-5xl font-bold text-gold-400 mb-2 text-glow">
        {count}
        {suffix}
      </div>
      <div className="text-gray-300 font-medium">{label}</div>
    </div>);

}
export function Impact() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
  {
    quote:
    "The foundation gave me hope when I had none. The sanitary pads mean I don't have to miss school anymore.",
    name: 'Amina M.',
    role: 'Student',
    image:
    'https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80'
  },
  {
    quote:
    'After my husband passed, I struggled to feed my children. The feeding program has been a true blessing to our family.',
    name: 'Grace K.',
    role: 'Widow & Mother',
    image:
    'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80'
  },
  {
    quote:
    'The mentorship I received changed my perspective on life. I now believe I can achieve my dreams despite my background.',
    name: 'David O.',
    role: 'Mentorship Graduate',
    image:
    'https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80'
  }];

  const nextSlide = () =>
  setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
  setCurrentIndex(
    (prev) => (prev - 1 + testimonials.length) % testimonials.length
  );
  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="impact" className="py-24 relative z-10">
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
          className="text-center mb-16">
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold-400 text-glow">Impact</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
          <AnimatedCounter end={120} suffix="+" label="Widows Supported" />
          <AnimatedCounter end={500} suffix="+" label="Children Fed" />
          <AnimatedCounter end={300} suffix="+" label="Girls Receiving Care" />
          <AnimatedCounter end={80} suffix="+" label="Students Mentored" />
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 text-gold-400/20 -translate-x-1/2 -translate-y-1/2 z-0">
            <Quote size={120} />
          </div>

          <div className="relative z-10 glass-card p-8 md:p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: 50
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -50
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut'
                }}
                className="flex flex-col md:flex-row items-center gap-8">
                
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-gold-400/30 relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover" />
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-magenta-500/20 to-transparent mix-blend-overlay" />
                </div>

                <div>
                  <p className="text-xl md:text-2xl text-gray-200 italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="font-heading font-bold text-gold-400 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 hover:border-gold-400/50">
                
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 hover:border-gold-400/50">
                
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}