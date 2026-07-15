import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { ExternalLink, Layers, Sparkles, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'corporativos', label: 'Corporativos' },
    { id: 'ecommerce', label: 'Ecommerce' },
    { id: 'educacion', label: 'Educación' },
    { id: 'salud', label: 'Salud' },
    { id: 'tecnologia', label: 'Tecnología' },
    { id: 'industria', label: 'Industria' }
  ];

  // Filter projects dynamically
  const filteredProjects = activeFilter === 'todos' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section
      id="portafolio"
      className="relative py-20 md:py-28 bg-transparent overflow-hidden transition-colors duration-300"
    >
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Casos de Éxito
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient tracking-tight">
            Nuestro Portafolio de Proyectos Web
          </p>
          <div className="mt-4 h-1 w-20 bg-brand-cyan mx-auto rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            Cada plataforma desarrollada es una herramienta de venta optimizada para captar clientes potenciales, posicionarse en motores de búsqueda y cargar de forma casi instantánea.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="portfolio-filters-panel">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4.5 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md shadow-brand-blue/15 scale-105 font-bold'
                  : 'bg-white/5 border border-white/5 hover:bg-white/10 text-slate-300 hover:border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid Container (Masonry representation using multi-column grid) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          id="portfolio-items-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between glass-card"
              >
                {/* Image panel */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-950 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-white border border-white/10 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech list */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex flex-col gap-3">
                    {/* Tangible Result block */}
                    <div className="flex items-start gap-2 bg-emerald-500/5 p-2.5 rounded-lg border border-emerald-500/10">
                      <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-left">
                        <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-wider block leading-none mb-1">
                          Resultado de Negocio
                        </span>
                        <span className="text-xs font-semibold text-slate-300">
                          {project.results}
                        </span>
                      </div>
                    </div>

                    {/* View Button */}
                    <a
                      href={project.link}
                      className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-white/5 border border-white/10 hover:bg-brand-blue/30 text-white text-xs font-bold transition-all duration-300 cursor-pointer"
                    >
                      Ver Proyecto
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
