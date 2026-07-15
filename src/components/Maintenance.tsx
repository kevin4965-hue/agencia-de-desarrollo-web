import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldAlert, Sparkles, Sprout, Heart, Leaf, ShieldCheck, Award } from 'lucide-react';
import { PLANS } from '../data';

interface MaintenanceProps {
  onOpenQuote: (planName?: string) => void;
}

export default function Maintenance({ onOpenQuote }: MaintenanceProps) {
  return (
    <section
      id="planes"
      className="relative py-20 md:py-28 bg-transparent overflow-hidden transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-emerald-400">
            Planes de Mantenimiento
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient tracking-tight">
            Mantén tu sitio web seguro, rápido y optimizado siempre
          </p>
          <div className="mt-4 h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            Un sitio desactualizado pierde clientes y es vulnerable. Elige el plan que se adapte a tus necesidades de negocio y deja la administración técnica en nuestras manos expertas.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20" id="maintenance-plans-grid">
          {PLANS.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between overflow-hidden border transition-all duration-300 glass-card ${
                  isPopular 
                    ? 'border-brand-purple ring-2 ring-brand-purple/20 shadow-xl lg:scale-[1.03] lg:z-10 bg-gradient-to-b from-brand-purple/[0.04] to-transparent' 
                    : 'border-white/5 shadow-sm hover:shadow-xl hover:border-white/10'
                }`}
              >
                {/* Popular Ribbon badge */}
                {isPopular && (
                  <div className="absolute top-5 right-5 flex items-center gap-1 px-3 py-1 rounded-full bg-brand-purple text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    <Sparkles className="h-3 w-3" />
                    Recomendado
                  </div>
                )}

                <div>
                  {/* Name and Price */}
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
                    Plan {plan.name}
                  </span>
                  
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight font-display text-gradient">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm font-semibold text-slate-400">
                      / {plan.billing}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mt-8 border-t border-white/5 pt-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300 block mb-4">
                      ¿Qué incluye?
                    </span>
                    
                    {/* Features List */}
                    <ul className="space-y-3.5 mb-6">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300 font-medium">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Not Included (Transparency) */}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="border-t border-white/5 pt-4 mt-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-3">
                          No Incluido:
                        </span>
                        <ul className="space-y-2.5">
                          {plan.notIncluded.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-3 opacity-60">
                              <X className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-500 line-through">
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  onClick={() => onOpenQuote(`Plan Mantenimiento ${plan.name}`)}
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold shadow transition-all duration-300 cursor-pointer ${
                    isPopular
                      ? 'accent-gradient text-white shadow-lg shadow-purple-500/20 hover:opacity-95'
                      : 'border border-white/10 text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  Contratar Plan {plan.name}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Garden Metaphor Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          id="garden-metaphor-box"
          className="relative rounded-3xl border border-white/5 bg-white/3 p-8 md:p-12 shadow-sm overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 glass-card"
        >
          {/* Garden Metaphor Visual Illustration */}
          <div className="w-full md:w-1/3 flex justify-center shrink-0">
            <div className="relative flex items-center justify-center h-48 w-48 rounded-full bg-white/5 border border-white/5">
              {/* Spinning/floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-emerald-500/10"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 left-8 p-1.5 rounded-lg bg-emerald-500 text-white shadow-md"
              >
                <Leaf className="h-5 w-5" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-8 right-8 p-1.5 rounded-lg bg-brand-blue text-white shadow-md"
              >
                <Sprout className="h-5 w-5" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 right-10 p-1 rounded-full bg-brand-purple text-white shadow"
              >
                <Award className="h-4 w-4" />
              </motion.div>
              
              {/* Central Core */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/20">
                <Sprout className="h-12 w-12" />
              </div>
            </div>
          </div>

          {/* Garden Metaphor text */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Heart className="h-3.5 w-3.5" />
              Metáfora del Jardín Digital
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
              &ldquo;Un sitio web es como un jardín: si no recibe mantenimiento, pierde rendimiento, seguridad y oportunidades.&rdquo;
            </h3>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Al igual que las plantas necesitan riego constante, podas y abono para florecer, un portal web requiere actualizaciones constantes de software, optimizaciones de bases de datos, parches de seguridad activos y renovaciones de contenido. Dejar tu web en abandono es permitir que tu marca pierda velocidad, visibilidad en buscadores y caiga ante vulnerabilidades de seguridad.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenQuote('Asesoría Mantenimiento')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition shadow-md shadow-emerald-600/10 cursor-pointer"
              >
                Solicitar Diagnóstico Web Gratis
              </button>
              <span className="text-xs text-slate-500 font-medium">
                🛡️ Evaluamos velocidad, SEO y seguridad sin costo
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
