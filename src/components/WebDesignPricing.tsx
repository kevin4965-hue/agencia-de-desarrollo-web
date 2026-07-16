import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface WebDesignPricingProps {
  onOpenQuote: (planName?: string) => void;
}

export default function WebDesignPricing({ onOpenQuote }: WebDesignPricingProps) {
  const WHATSAPP_NUMBER = '573102655438';

  const plans = [
    {
      id: 'emprendedor',
      name: 'Web Emprendedor',
      price: '$1.490.000',
      currency: 'COP',
      promo: true,
      features: [
        'Dominio Incluido',
        'Hosting Incluido',
        '10 Cuentas de emails',
        'Optimizado para Móviles',
        'Contenido SEO',
        '30 días de soporte'
      ],
      whatsappText: 'Hola pixelweb, estoy interesado en el plan *Web Emprendedor ($1.490.000)* para el diseño de mi página web. ¿Me podrían dar más información?'
    },
    {
      id: 'profesional',
      name: 'Web Profesional',
      price: '$2.390.000',
      currency: 'COP',
      promo: false,
      features: [
        'Dominio Incluido',
        'Hosting Incluido',
        '20 Cuentas de emails',
        'Optimizado para Móviles',
        'Contenido SEO',
        '60 días de soporte'
      ],
      whatsappText: 'Hola pixelweb, estoy interesado en el plan *Web Profesional ($2.390.000)* para el diseño de mi página web. ¿Me podrían dar más información?'
    }
  ];

  return (
    <section
      id="planes"
      className="relative py-20 md:py-28 bg-slate-950 border-t border-white/5 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-10 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Tagline */}
        <div className="text-center mb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Incluye embudo de ventas
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
            <span className="inline-flex items-center justify-center bg-emerald-500 text-slate-950 rounded-lg p-1.5 h-10 w-10 shrink-0 shadow-lg shadow-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            Precios Diseño Web 2026
          </h2>
          <p className="mt-6 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Los precios para el diseño de sus páginas web están en pesos colombianos. Escoja el plan y envíenos un mensaje.
          </p>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-emerald-500 to-brand-blue mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const encodedMsg = encodeURIComponent(plan.whatsappText);
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl bg-white p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/40 border border-slate-200"
              >
                {/* Promo Badge */}
                {plan.promo && (
                  <div className="absolute top-6 right-0 bg-[#E91E63] text-white font-black text-xs uppercase tracking-widest px-4 py-1.5 shadow-md origin-right rotate-0 transform translate-x-1.5 rounded-l-md">
                    PROMO
                  </div>
                )}

                <div>
                  {/* Card Name */}
                  <h3 className="text-center font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center py-4 border-b border-slate-100">
                    <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-400 font-display">
                      {plan.price}
                    </span>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {plan.currency}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="mt-8 space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-3">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0" strokeWidth={3} />
                        <span className="text-sm md:text-base text-slate-600 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit button (WhatsApp style) */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-white bg-[#00D655] hover:bg-[#00c24c] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/10 text-center text-sm md:text-base cursor-pointer"
                >
                  {/* Custom WhatsApp Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 shrink-0"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  MÁS INFORMACIÓN
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
