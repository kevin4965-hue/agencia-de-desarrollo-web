import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  onOpenQuote: (serviceName?: string) => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  return (
    <section
      id="servicios"
      className="relative py-20 md:py-28 bg-transparent border-t border-white/5 transition-colors duration-300"
    >
      {/* Decorative background vectors */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-purple">
            Nuestros Servicios
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient tracking-tight">
            Soluciones de ingeniería web para impulsar tu conversión
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-cyan mx-auto rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            Diseñamos y programamos plataformas digitales robustas, con un enfoque implacable en la experiencia de usuario (UX/UI), el posicionamiento en buscadores y la conversión comercial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES.map((service, index) => {
            // Dynamically load the Lucide Icon
            const IconComponent = (Icons as any)[service.iconName] || Icons.Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative rounded-3xl border border-white/5 bg-white/3 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden glass-card"
              >
                {/* Visual Top Highlight Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient}`} />

                {/* Card Top Block */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Container with Gradient Border Effect */}
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg shadow-brand-blue/10`}>
                      <IconComponent className="h-7 w-7" />
                    </div>
                    
                    {/* Badge */}
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 border-t border-white/5 pt-6 mb-8">
                    {service.items.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2.5">
                        <Icons.Check className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
                        <span className="text-sm text-slate-300 font-medium">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenQuote(service.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/10 text-slate-200 font-semibold text-sm transition-all duration-300 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 cursor-pointer`}
                >
                  <Icons.ArrowRight className="h-4 w-4 order-last" />
                  Cotizar {service.title}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
