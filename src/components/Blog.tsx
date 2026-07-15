import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative py-20 md:py-28 bg-transparent border-t border-white/5 transition-colors duration-300"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-purple">
            Blog & Noticias
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient tracking-tight">
            Últimas publicaciones y consejos técnicos
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            Compartimos conocimientos estratégicos sobre SEO, diseño de interfaces, seguridad WordPress y optimización técnica para ayudarte a maximizar el rendimiento de tu negocio.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="blog-posts-grid">
          {BLOG_POSTS.map((post, index) => {
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between glass-card"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-950 shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category tag overlay */}
                  <span className="absolute bottom-3 left-3 px-3 py-1 text-[9px] font-bold uppercase tracking-wider bg-brand-purple text-white border border-white/10 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3.5 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-white mb-2 leading-snug group-hover:text-brand-purple transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  {/* Footer Author Row */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      {post.author}
                    </span>

                    <a
                      href="#blog"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-purple hover:text-brand-cyan transition-colors group-hover:translate-x-1 duration-300 cursor-pointer"
                    >
                      Leer más
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
