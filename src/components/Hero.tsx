import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Laptop, Activity, Terminal, Shield, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const metrics = [
    'Más de 100 proyectos',
    'Clientes satisfechos',
    'Soporte permanente',
    'Sitios optimizados para SEO'
  ];

  return (    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent transition-colors duration-300"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-blue/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-purple/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] rounded-full bg-brand-cyan/20 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-left">
            {/* Promo Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
              Agencia de Desarrollo Premium
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            >
              <span className="text-gradient block">Creamos sitios web que venden</span>
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan bg-clip-text text-transparent">
                y hacen crecer tu negocio.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2 text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Desarrollamos páginas web profesionales, tiendas virtuales y sistemas personalizados con tecnología moderna optimizada para Google.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={onOpenQuote}
                id="hero-cta-quote"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl accent-gradient text-white font-bold text-base shadow-xl shadow-blue-600/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Solicitar Cotización
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="#portafolio"
                id="hero-cta-portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card font-bold text-white border-white/10 hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Ver Portafolio
              </a>
            </motion.div>

            {/* Checkmark Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/5 pt-8 w-full"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">+100</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Proyectos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">99%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Satisfacción</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#06B6D4]">24/7</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Soporte</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">SEO Ready</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Dashboard Mockup */}
          <div className="lg:col-span-5 flex justify-center" id="hero-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-lg aspect-[4/3] glass-card shadow-2xl p-4 flex flex-col justify-start overflow-hidden group border-white/10"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-950/60 text-[10px] text-slate-400 font-mono border border-white/5">
                  <Laptop className="h-3 w-3 text-brand-blue" />
                  <span>localhost:3000/analytics</span>
                </div>
                <div className="w-6 h-3" /> {/* Spacer */}
              </div>

              {/* Main Content Area */}
              <div className="flex-1 grid grid-cols-12 gap-3 text-white font-sans text-xs">
                {/* Left Mini Sidebar */}
                <div className="col-span-3 border-r border-white/5 pr-2 flex flex-col gap-2">
                  <div className="h-5 rounded bg-brand-blue/20 border border-brand-blue/30 flex items-center px-1.5 text-[10px] text-brand-cyan font-bold">
                    🚀 Dashboard
                  </div>
                  <div className="h-4 rounded bg-white/5 flex items-center px-1.5 text-[9px] text-slate-400">
                    📂 Proyectos
                  </div>
                  <div className="h-4 rounded bg-white/5 flex items-center px-1.5 text-[9px] text-slate-400">
                    📈 Conversión
                  </div>
                  <div className="h-4 rounded bg-white/5 flex items-center px-1.5 text-[9px] text-slate-400">
                    🛡️ Seguridad
                  </div>
                  <div className="mt-auto p-1.5 rounded bg-slate-950/40 border border-white/5 flex flex-col gap-1">
                    <span className="text-[8px] text-slate-500">Lighthouse</span>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      100% SEO
                    </div>
                  </div>
                </div>

                {/* Right Metrics Panel */}
                <div className="col-span-9 flex flex-col gap-3">
                  {/* Top widgets */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-950/40 border border-white/5 flex flex-col gap-1">
                      <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Conversión</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-white">+4.28%</span>
                        <span className="text-[9px] text-emerald-400 font-bold">↑ 22%</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/40 border border-white/5 flex flex-col gap-1">
                      <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Carga</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-brand-cyan">0.45s</span>
                        <span className="text-[9px] text-brand-cyan font-bold">Ok</span>
                      </div>
                    </div>
                  </div>

                  {/* Chart representation */}
                  <div className="flex-1 p-2.5 rounded-xl bg-slate-950/40 border border-white/5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-bold">Ventas Mensuales</span>
                      <span className="text-[8px] text-brand-purple bg-brand-purple/20 px-1.5 py-0.5 rounded font-bold">Anual</span>
                    </div>
                    <div className="flex-1 flex items-end gap-1 px-1 pt-2 h-20">
                      {[35, 45, 30, 60, 75, 50, 90, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                           <div
                             className="w-full rounded-t-sm bg-gradient-to-t from-brand-purple to-brand-blue"
                             style={{ height: `${h}%` }}
                           />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Console Overlay */}
                  <div className="p-2 rounded bg-slate-950/40 border border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="h-3 w-3 text-brand-purple" />
                      <span>$ npm run build</span>
                    </div>
                    <span className="text-emerald-400 font-bold">Success</span>
                  </div>
                </div>
              </div>

              {/* Floating badges for decorative effect */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-16 right-4 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur border border-white/10 shadow-lg flex items-center gap-2 pointer-events-none"
              >
                <div className="h-4 w-4 rounded bg-emerald-500/20 flex items-center justify-center">
                  <Shield className="h-2.5 w-2.5 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-white leading-none">Seguridad</span>
                  <span className="text-[8px] text-emerald-400 font-bold mt-0.5">SSL Activo</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-16 left-4 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur border border-white/10 shadow-lg flex items-center gap-2 pointer-events-none"
              >
                <div className="h-4 w-4 rounded bg-brand-blue/20 flex items-center justify-center">
                  <Activity className="h-2.5 w-2.5 text-brand-cyan" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-white leading-none">Velocidad</span>
                  <span className="text-[8px] text-slate-400 font-mono mt-0.5">Lighthouse 100</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
