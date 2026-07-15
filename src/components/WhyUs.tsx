import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { WHY_US } from '../data';

export default function WhyUs() {
  return (
    <section
      id="nosotros"
      className="relative py-20 md:py-28 bg-transparent overflow-hidden transition-colors duration-300"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-cyan">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient tracking-tight">
            Garantizamos el éxito digital de tu negocio con altos estándares
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            Nuestros procesos están diseñados para eliminar la incertidumbre y ofrecer resultados medibles, rápidos y seguros, superando la calidad estándar del mercado.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" id="why-choose-us-grid">
          {WHY_US.map((item, index) => {
            // Dynamically load the Lucide Icon or fallback to Check
            const IconComponent = (Icons as any)[item.iconName] || Icons.CheckCircle;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative rounded-2xl border border-white/5 bg-white/3 p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden glass-card"
              >
                {/* Decorative Hover Backdrop Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon Container */}
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-cyan group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-purple group-hover:text-white transition-all duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Text Content */}
                <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
