import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 bg-transparent overflow-hidden transition-colors duration-300"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-blue">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl font-bold text-gradient tracking-tight">
            Resolvemos tus dudas al instante
          </p>
          <div className="mt-4 h-1 w-20 bg-brand-blue mx-auto rounded-full" />
        </div>

        {/* Accordions List */}
        <div className="space-y-4" id="faq-accordions-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 glass-card ${
                  isOpen 
                    ? 'border-brand-blue/30 bg-white/5 shadow-sm' 
                    : 'border-white/5 bg-white/3'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-display text-base md:text-lg font-bold text-white focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 mt-0.5 transition-colors duration-300 ${isOpen ? 'text-brand-cyan' : 'text-slate-400'}`} />
                    <span>{item.question}</span>
                  </div>
                  <span className={`p-1 rounded-lg shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/10 text-brand-cyan' : 'bg-white/5 text-slate-300'}`}>
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 text-sm text-slate-300 leading-relaxed text-left">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
