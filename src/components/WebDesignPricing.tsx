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
      id: 'basica',
      name: 'Página Web Básica',
      priceCOP: '$300.000 - $500.000',
      priceUSD: '~$75 - $125 USD',
      description: 'Sitio web sencillo, generalmente de una a cinco páginas, con diseño estándar y contenido básico.',
      badge: null,
      highlight: false,
      features: [
        'De 1 a 5 páginas web',
        'Diseño estándar adaptable (Responsive)',
        'Estructura y contenido básico',
        'Formulario de contacto funcional',
        'Botón directo a WhatsApp',
        'Dominio y Hosting por 1 año'
      ],
      whatsappText: 'Hola pixelweb, estoy interesado en el plan *Página Web Básica ($300.000 - $500.000 COP / ~$75 - $125 USD)*. ¿Me podrían dar más información?'
    },
    {
      id: 'intermedia',
      name: 'Página Web Intermedia',
      priceCOP: '$500.000 - $1.000.000',
      priceUSD: '~$125 - $250 USD',
      description: 'Sitio web con diseño personalizado, entre cinco y diez páginas, funciones adicionales como formularios de contacto, integración con redes sociales y SEO básico.',
      badge: 'MÁS POPULAR',
      highlight: true,
      features: [
        'De 5 a 10 páginas web',
        'Diseño 100% personalizado',
        'Formularios de contacto interactivos',
        'Integración con Redes Sociales',
        'Optimización básica para motores de búsqueda (SEO)',
        'Dominio y Hosting de alta velocidad'
      ],
      whatsappText: 'Hola pixelweb, estoy interesado en el plan *Página Web Intermedia ($500.000 - $1.000.000 COP / ~$125 - $250 USD)*. ¿Me podrían dar más información?'
    },
    {
      id: 'avanzada',
      name: 'Página Web Avanzada',
      priceCOP: '$3.500.000 - $8.000.000',
      priceUSD: '~$875 - $2.000 USD',
      description: 'Sitio web con funcionalidades más avanzadas, como comercio electrónico, integración con bases de datos, sistemas de gestión de contenido (CMS), optimización SEO avanzada y soporte continuo.',
      badge: 'AVANZADO',
      highlight: false,
      features: [
        'Comercio Electrónico / Tienda Online',
        'Integración con Bases de Datos y CMS',
        'Pasarelas de Pago Locales e Internacionales',
        'Optimización SEO Avanzada',
        'Soporte técnico continuo',
        'Máxima velocidad y seguridad'
      ],
      whatsappText: 'Hola pixelweb, estoy interesado en el plan *Página Web Avanzada ($3.500.000 - $8.000.000 COP / ~$875 - $2.000 USD)*. ¿Me podrían dar más información?'
    },
    {
      id: 'a-medida',
      name: 'Página Web a Medida',
      priceCOP: 'Desde $8.000.000',
      priceUSD: 'Desde ~$2.000 USD',
      description: 'Desarrollo completamente personalizado, con funcionalidades específicas según los requerimientos del cliente, como aplicaciones web, sistemas de reservas, entre otros.',
      badge: 'PERSONALIZADO',
      highlight: false,
      features: [
        'Desarrollo 100% personalizado a medida',
        'Aplicaciones Web Complejas',
        'Sistemas de Reservas o Turnos',
        'Integraciones API y Software externo',
        'Automatización de procesos de negocio',
        'Soporte exclusivo y consultoría dedicada'
      ],
      whatsappText: 'Hola pixelweb, estoy interesado en el plan *Página Web a Medida (Desde $8.000.000 COP / ~$2.000 USD)*. ¿Me podrían dar más información?'
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
            Precios y Planes Diseño Web 2026
          </h2>
          <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Costos estimados según los requerimientos de tu proyecto. Valores expresados en <strong className="text-white">Pesos Colombianos (COP)</strong> y <strong className="text-white">Dólares (USD)</strong>.
          </p>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-emerald-500 to-brand-blue mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const encodedMsg = encodeURIComponent(plan.whatsappText);
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 backdrop-blur-xl ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/95 to-[#0b182d] border-2 border-brand-cyan shadow-2xl shadow-brand-cyan/20 text-white lg:-translate-y-1'
                    : 'bg-slate-900/80 border border-white/10 text-white shadow-xl hover:border-brand-blue/50 hover:shadow-2xl hover:shadow-brand-blue/10'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute top-5 right-0 font-black text-[10px] uppercase tracking-widest px-3 py-1 shadow-md rounded-l-md ${
                    plan.highlight 
                      ? 'bg-gradient-to-r from-brand-cyan to-emerald-400 text-slate-950'
                      : 'bg-white/10 border-l border-y border-white/20 text-brand-cyan backdrop-blur-md'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="flex flex-col h-full">
                  {/* Card Name */}
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold mb-3 text-white">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed mb-6 min-h-[50px] text-slate-300">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className={`text-left py-4 px-4 rounded-2xl mb-6 border ${
                    plan.highlight
                      ? 'bg-slate-950/80 border-brand-cyan/30'
                      : 'bg-slate-950/60 border-white/10'
                  }`}>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Precio Estimado
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold tracking-tight font-display leading-tight text-brand-cyan flex items-baseline gap-1.5">
                      <span className="text-sm font-bold text-emerald-400 tracking-wider shrink-0">COP</span>
                      <span>{plan.priceCOP}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs font-medium text-slate-300">
                        {plan.priceUSD}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider block mb-3 text-slate-400">
                      Incluye:
                    </span>
                    <ul className="space-y-2.5 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${
                            plan.highlight ? 'text-brand-cyan' : 'text-emerald-400'
                          }`} strokeWidth={2.5} />
                          <span className="font-medium text-slate-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submit button (WhatsApp style) */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-extrabold text-slate-950 bg-gradient-to-r from-brand-cyan to-emerald-400 hover:brightness-110 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20 text-center text-xs sm:text-sm cursor-pointer mt-auto"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0"
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
