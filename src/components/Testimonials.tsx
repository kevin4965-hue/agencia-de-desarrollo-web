import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play timer
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonios"
      className="relative py-20 md:py-28 bg-transparent border-t border-b border-white/5 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-purple">
            Opinión de Clientes
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient tracking-tight">
            ¿Qué dicen de nosotros?
          </p>
          <div className="mt-4 h-1 w-20 bg-brand-purple mx-auto rounded-full" />
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4" id="testimonials-carousel-container">
          
          {/* Background Decorative Quote Mark */}
          <div className="absolute -top-12 left-4 md:left-12 text-white/5 pointer-events-none">
            <Quote className="h-24 w-24 opacity-40 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl border border-white/5 bg-white/3 p-8 md:p-12 shadow-xl flex flex-col gap-6 md:gap-8 text-left glass-card"
            >
              {/* Rating stars */}
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: current.rating }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Comment text */}
              <blockquote className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed italic">
                &ldquo;{current.comment}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="h-14 w-14 rounded-full object-cover border-2 border-brand-purple/20 shadow-md"
                />
                <div className="flex flex-col text-left">
                  <span className="font-display text-base font-bold text-white">
                    {current.name}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {current.role} en <strong className="text-brand-purple">{current.company}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Index indicator Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-8 bg-brand-purple' 
                      : 'w-2 bg-white/10 hover:bg-white/20'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next / Prev buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
                aria-label="Testimonio siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
