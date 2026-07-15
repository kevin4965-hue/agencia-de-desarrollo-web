import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Heart, Headphones } from 'lucide-react';

export default function Stats() {
  const statsList = [
    {
      value: '+100',
      label: 'Proyectos Entregados',
      description: 'Landing pages, portales de ecommerce y sistemas web robustos.',
      icon: <Trophy className="h-6 w-6 text-brand-blue" />,
      color: 'blue'
    },
    {
      value: '+50',
      label: 'Clientes Activos',
      description: 'Empresas y emprendedores que confían su marca en nosotros.',
      icon: <Users className="h-6 w-6 text-brand-purple" />,
      color: 'purple'
    },
    {
      value: '99%',
      label: 'Satisfacción',
      description: 'Garantizada gracias a nuestro riguroso proceso de revisión técnica.',
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      color: 'rose'
    },
    {
      value: '24/7',
      label: 'Soporte Activo',
      description: 'Atención continua e inmediata para mantener tu sitio siempre en línea.',
      icon: <Headphones className="h-6 w-6 text-brand-cyan" />,
      color: 'cyan'
    }
  ];

  return (
    <section
      id="estadisticas"
      className="relative py-16 bg-transparent text-white overflow-hidden border-t border-white/5"
    >
      {/* Background grids and glowing lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-purple/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="stats-grid">
          {statsList.map((stat, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative rounded-2xl bg-white/3 p-6 md:p-8 border border-white/5 flex flex-col items-start text-left hover:border-white/10 transition-all duration-300 group glass-card"
              >
                {/* Icon wrapper */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-sm text-white group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>

                {/* Big number */}
                <h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gradient group-hover:from-brand-blue group-hover:to-brand-cyan transition-all duration-300">
                  {stat.value}
                </h3>

                {/* Label */}
                <h4 className="mt-2.5 font-display text-base font-bold text-slate-100">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
