import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart } from
'lucide-react';
export function Footer() {
  return (
    <footer className="relative bg-cosmic-900 pt-24 pb-10 overflow-hidden border-t border-white/10">
      {/* Starfield / Particle Background */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
          'radial-gradient(circle at center, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-24 w-auto" />
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Extending hands of compassion, restoring dignity, and transforming
              lives across Kenya.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Greatwall Gardens, Athi River
                  <br />
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-sm">
                  hello@esthernyawirafoundation.org
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-sm">+254 (0) 700 000 000</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
              'Home',
              'Our Story',
              'Vision & Mission',
              'Impact',
              'Get Involved'].
              map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group">
                  
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/0 group-hover:bg-gold-400 transition-colors" />
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {[
              'Support & Empowerment',
              'Sanitary Care',
              'Feeding Program',
              'Education & Mentorship',
              'Inspirational Teachings'].
              map((prog) =>
              <li key={prog}>
                  <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group">
                  
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/0 group-hover:bg-gold-400 transition-colors" />
                    {prog}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Map Placeholder */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">
              Location
            </h4>
            <div className="w-full h-40 rounded-xl overflow-hidden relative group border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-800 to-cosmic-900 flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                
                <motion.div
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                  className="relative z-10 text-gold-400 flex flex-col items-center">
                  
                  <MapPin
                    size={32}
                    className="drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                  
                  <div className="w-4 h-1 bg-black/30 rounded-[100%] mt-2 blur-[2px]" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2 text-center text-xs text-white">
                Athi River, Kenya
              </div>
            </div>
          </div>
        </div>

        {/* Big Closing Line */}
        <div className="py-12 border-y border-white/10 text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite] bg-[length:200%_auto]">
            Be The Hand. Be The Hope. Be The Change.
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Esther Nyawira Hands of Compassion Foundation. All rights
            reserved.
          </p>

          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) =>
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-cosmic-900 transition-all hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:-translate-y-1">
              
                <Icon size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>);

}