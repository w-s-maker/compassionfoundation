import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'circle' | 'heart';
}
export function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const count =
      typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 30; // Fewer on mobile
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          type: Math.random() > 0.8 ? 'heart' : 'circle'
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) =>
      <motion.div
        key={p.id}
        className="absolute"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size
        }}
        animate={{
          y: [0, -100, -200],
          x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25],
          opacity: [0, 0.5, 0],
          rotate: p.type === 'heart' ? [0, 45, 90] : 0
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: 'linear'
        }}>
        
          {p.type === 'circle' ?
        <div className="h-full w-full rounded-full bg-gold-400/30 blur-[1px]" /> :

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-full w-full text-magenta-500/30 drop-shadow-[0_0_2px_rgba(217,70,239,0.5)]">
          
              <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="currentColor" />
          
            </svg>
        }
        </motion.div>
      )}
    </div>);

}