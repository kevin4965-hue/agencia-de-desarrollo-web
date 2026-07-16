import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Tag, ArrowLeft, Send } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

export default function BlogModal({ isOpen, onClose, post }: BlogModalProps) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Card container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            id="blog-modal-card"
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-slate-950/90 border border-white/10 shadow-2xl glass-card max-h-[90vh] flex flex-col z-10 backdrop-blur-xl"
          >
            {/* Header / Sticky Close & Back bar */}
            <div className="flex items-center justify-between border-b border-white/5 p-4 sm:p-5 shrink-0 bg-slate-950/50 backdrop-blur-md">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition cursor-pointer"
                id="back-to-blog"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Volver al Blog</span>
              </button>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-white/5 hover:text-white cursor-pointer"
                aria-label="Cerrar"
                id="close-blog-modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Article Body */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-8" id="blog-modal-content">
              {/* Category Badge & Date */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-brand-purple text-white border border-white/10 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">{post.date}</span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-3">
                {post.title}
              </h2>

              {/* Subtitle */}
              {post.subtitle && (
                <p className="text-base sm:text-lg text-slate-300 font-medium mb-6 leading-relaxed border-l-2 border-brand-blue pl-4">
                  {post.subtitle}
                </p>
              )}

              {/* Author & Read Time Header */}
              <div className="flex flex-wrap items-center gap-4 py-4 border-t border-b border-white/5 mb-8 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-slate-300">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-slate-200">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Article Image */}
              <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-8 border border-white/5">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Article Content Paragraphs */}
              <div className="prose prose-invert max-w-none text-slate-300 space-y-5 text-left text-sm sm:text-base leading-relaxed">
                {post.content && post.content.length > 0 ? (
                  post.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{post.summary}</p>
                )}
              </div>

              {/* Conclusion Box */}
              <div className="mt-10 p-5 rounded-xl bg-white/3 border border-white/5 text-left">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-cyan mb-2">
                  ¿Necesitas implementar esto en tu negocio?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  En pixelweb diseñamos sitios rápidos, optimizados y totalmente alineados con las últimas prácticas técnicas y de buscadores. Solicita un diagnóstico técnico gratuito para tu marca.
                </p>
                <a
                  href="#contacto"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-purple hover:text-brand-cyan transition-colors"
                >
                  Contáctanos hoy mismo
                  <Send className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
