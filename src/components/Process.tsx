import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { FileText, Search, ClipboardList, PenTool, Code, Eye, Rocket, Activity } from 'lucide-react';

export default function Process() {
  // Map icons dynamically to each step based on index
  const stepIcons = [
    <FileText className="h-6 w-6" />,
    <Search className="h-6 w-6" />,
    <ClipboardList className="h-6 w-6" />,
    <PenTool className="h-6 w-6" />,
    <Code className="h-6 w-6" />,
    <Eye className="h-6 w-6" />,
    <Rocket className="h-6 w-6" />,
    <Activity className="h-6 w-6" />
  ];

  const colors = [
    'from-blue-500 to-indigo-500 text-blue-600',
    'from-cyan-500 to-blue-500 text-cyan-600',
    'from-teal-500 to-emerald-500 text-teal-600',
    'from-purple-500 to-pink-500 text-purple-600',
    'from-indigo-500 to-brand-purple text-indigo-600',
    'from-pink-500 to-rose-500 text-pink-600',
    'from-amber-500 to-orange-500 text-amber-600',
    'from-emerald-500 to-teal-500 text-emerald-600'
  ];

  return (
    <section
      id="proceso"
      className="relative py-20 md:py-28 bg-transparent border-t border-white/5 transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-blue">
            Método de Trabajo
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient tracking-tight">
            Nuestro proceso para lanzar un sitio web exitoso
          </p>
          <div className="mt-4 h-1 w-20 bg-brand-blue mx-auto rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            La improvisación no tiene espacio en proyectos premium. Contamos con un flujo de trabajo validado de 8 etapas secuenciales para garantizar calidad extrema y puntualidad absoluta.
          </p>
        </div>

        {/* Timeline Path (vertical on mobile, staggered side-by-side on desktop) */}
        <div className="relative" id="timeline-container">
          {/* Main vertical line for timeline */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue via-brand-purple to-emerald-500 opacity-30 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const stepIcon = stepIcons[idx] || <Code className="h-6 w-6" />;
              const currentGlowColor = colors[idx] || 'from-brand-blue to-brand-purple text-brand-blue';

              return (
                <div
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-start lg:items-center relative ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  id={`timeline-step-${step.number}`}
                >
                  {/* Outer connection bullet node */}
                  <div className="absolute left-8 lg:left-1/2 top-1.5 lg:top-1/2 h-10 w-10 rounded-full border-4 border-slate-900 bg-slate-950 -translate-x-1/2 lg:-translate-y-1/2 z-10 flex items-center justify-center shadow-md">
                    <span className="text-[11px] font-extrabold font-mono text-slate-300">
                      0{step.number}
                    </span>
                  </div>

                  {/* Spacer helper on desktop */}
                  <div className="hidden lg:block lg:w-1/2 px-12" />

                  {/* Step Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                    className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12"
                  >
                    <div className="relative rounded-2xl border border-white/5 bg-white/3 p-6 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden glass-card">
                      {/* Accent corner banner */}
                      <div className={`absolute top-0 right-0 h-12 w-12 bg-gradient-to-br ${currentGlowColor.split(' ')[0]} ${currentGlowColor.split(' ')[1]} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-3xl`} />

                      <div className="flex items-start gap-4">
                        {/* Icon Container */}
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${currentGlowColor.split(' ')[0]} ${currentGlowColor.split(' ')[1]} text-white shadow-md`}>
                          {stepIcon}
                        </div>

                        {/* Text Block */}
                        <div className="text-left">
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">
                            Etapa {step.number} • {step.subtitle}
                          </span>
                          <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                            {step.title}
                          </h3>
                          <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
