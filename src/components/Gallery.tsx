import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [
  {
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
    alt: 'Community gathering',
    caption: 'Community Empowerment Session'
  },
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
    alt: 'Children smiling',
    caption: 'Joy in our Feeding Program'
  },
  {
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80',
    alt: 'Student learning',
    caption: 'Education & Mentorship'
  },
  {
    src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80',
    alt: 'African woman smiling',
    caption: 'Widow Support Initiative'
  },
  {
    src: '/woman.jpeg',
    alt: 'Girls smiling',
    caption: 'Sanitary Care Distribution'
  },
  {
    src: '/hand.jpg',
    alt: 'Helping hands',
    caption: 'Extending Hands of Compassion'
  }];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };
  return (
    <section className="py-24 relative z-10">
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
            Moments of <span className="text-gold-400 text-glow">Hope</span>
          </h2>
        </motion.div>

        {/* Masonry Grid (Simulated with CSS columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}
            className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
            onClick={() => setSelectedImage(index)}>
            
              <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
            

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-cosmic-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center border-2 border-transparent group-hover:border-gold-400/50 rounded-2xl">
                <ZoomIn className="text-gold-400 w-10 h-10 mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                <p className="text-white font-medium text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null &&
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-cosmic-900/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}>
            
              <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}>
              
                <X size={32} />
              </button>

              <div className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center">
                <button
                className="absolute left-0 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                onClick={handlePrev}>
                
                  <ChevronLeft size={32} />
                </button>

                <motion.img
                key={selectedImage}
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9
                }}
                transition={{
                  duration: 0.3
                }}
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} />
              

                <button
                className="absolute right-0 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                onClick={handleNext}>
                
                  <ChevronRight size={32} />
                </button>
              </div>

              <div className="absolute bottom-10 left-0 right-0 text-center text-white text-lg font-medium">
                {images[selectedImage].caption}
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>);

}