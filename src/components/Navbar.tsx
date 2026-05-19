import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Languages } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'SW'>('EN');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinksByLang = {
    EN: [
    {
      name: 'Home',
      href: '#home'
    },
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'Our Work',
      href: '#programs'
    },
    {
      name: 'Impact',
      href: '#impact'
    },
    {
      name: 'Founder',
      href: '#founder'
    },
    {
      name: 'Get Involved',
      href: '#get-involved'
    }],

    SW: [
    {
      name: 'Nyumbani',
      href: '#home'
    },
    {
      name: 'Kuhusu',
      href: '#about'
    },
    {
      name: 'Kazi Yetu',
      href: '#programs'
    },
    {
      name: 'Athari',
      href: '#impact'
    },
    {
      name: 'Mwanzilishi',
      href: '#founder'
    },
    {
      name: 'Jihusishe',
      href: '#get-involved'
    }]

  };
  const navLinks = navLinksByLang[language];
  const donateLabel = language === 'EN' ? 'Donate Now' : 'Changia Sasa';
  const donateLabelShort = language === 'EN' ? 'Donate' : 'Changia';
  const toggleLanguage = () =>
  setLanguage((prev) => prev === 'EN' ? 'SW' : 'EN');
  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
      <motion.nav
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-cosmic-900/80 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('#home')}>
              
              <img
                src="/logo.png"
                alt="Esther Nyawira Foundation Logo"
                className="h-16 w-auto object-contain" />
              
              <div className="hidden md:block">
                <h1 className="font-heading font-bold text-sm leading-tight text-white">
                  Esther Nyawira
                </h1>
                <p className="text-[10px] text-gold-500 font-medium tracking-wider uppercase">
                  Hands of Compassion
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) =>
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium transition-colors hover:text-gold-400 text-gray-300">
                  
                    {link.name}
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-3 border-l border-gray-500/30 pl-4">
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/40 text-gray-200 transition-all"
                  aria-label="Toggle language">
                  
                  <Languages className="w-4 h-4 text-gold-400" />
                  <span className="text-xs font-bold tracking-wider">
                    {language}
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection('#get-involved')}
                  className="relative group overflow-hidden rounded-full bg-gold-500 px-6 py-2.5 font-semibold text-cosmic-900 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    {donateLabel}
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white"
                aria-label="Toggle language">
                
                <Languages className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-bold">{language}</span>
              </button>
              <button
                onClick={() => scrollToSection('#get-involved')}
                className="bg-gold-500 text-cosmic-900 px-4 py-1.5 rounded-full text-sm font-bold">
                
                {donateLabelShort}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white"
                aria-label="Toggle menu">
                
                {isMobileMenuOpen ?
                <X className="w-6 h-6" /> :

                <Menu className="w-6 h-6" />
                }
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            backdropFilter: 'blur(0px)'
          }}
          animate={{
            opacity: 1,
            backdropFilter: 'blur(16px)'
          }}
          exit={{
            opacity: 0,
            backdropFilter: 'blur(0px)'
          }}
          className="fixed inset-0 z-40 flex flex-col justify-center items-center bg-cosmic-900/95">
          
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) =>
            <motion.button
              key={link.name}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.1
              }}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-heading font-bold text-white hover:text-gold-400">
              
                  {link.name}
                </motion.button>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}