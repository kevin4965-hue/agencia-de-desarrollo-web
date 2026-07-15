import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Phone, Mail, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanOrService?: string;
}

export default function QuoteModal({ isOpen, onClose, selectedPlanOrService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    projectType: selectedPlanOrService || 'Desarrollo Web',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update selection if prop changes
  React.useEffect(() => {
    if (selectedPlanOrService) {
      setFormData((prev) => ({ ...prev, projectType: selectedPlanOrService }));
    }
  }, [selectedPlanOrService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Clean form
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          city: '',
          projectType: 'Desarrollo Web',
          budget: '$1,000 - $3,000',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/65 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            id="quote-modal-card"
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-slate-950/80 border border-white/10 shadow-2xl glass-card max-h-[90vh] flex flex-col z-10 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-cyan" />
                <h3 className="font-display text-xl font-bold text-white">
                  Solicitar Cotización
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white cursor-pointer"
                aria-label="Cerrar"
                id="close-quote-modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 rounded-full bg-emerald-500/10 p-4 text-emerald-400">
                    <CheckCircle2 className="h-16 w-16" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    ¡Propuesta Recibida!
                  </h4>
                  <p className="mt-2 max-w-md text-slate-300">
                    Gracias, <strong>{formData.name}</strong>. Hemos registrado los datos para tu proyecto de{' '}
                    <strong>{formData.projectType}</strong>. Un especialista técnico se pondrá en contacto contigo en menos de 2 horas.
                  </p>
                  <div className="mt-6 flex flex-col gap-2 rounded-xl bg-white/5 border border-white/5 p-4 text-left text-sm text-slate-300">
                    <p className="font-medium text-white">Mientras tanto, también puedes comunicarte por:</p>
                    <div className="flex flex-col gap-1 mt-1">
                      <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-400 hover:underline">
                        <Phone className="h-4 w-4" /> +51 999 999 999 (WhatsApp Directo)
                      </a>
                      <span className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-brand-cyan" /> contacto@pixelcraft.com
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="quote-modal-form">
                  <p className="text-sm text-slate-400">
                    Cuéntanos sobre tu idea o negocio y te armaremos una propuesta técnica y económica totalmente personalizada sin costo alguno.
                  </p>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="modal-name"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Empresa */}
                    <div>
                      <label htmlFor="modal-company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Nombre de Empresa / Proyecto
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="modal-company"
                        placeholder="Ej. Velvet Co."
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Correo */}
                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="modal-email"
                        required
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="modal-phone"
                        required
                        placeholder="Ej. +51 999 999 999"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Ciudad */}
                    <div>
                      <label htmlFor="modal-city" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Ciudad / País *
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="modal-city"
                        required
                        placeholder="Ej. Lima, Perú"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Tipo de proyecto */}
                    <div>
                      <label htmlFor="modal-projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Tipo de Servicio Requerido
                      </label>
                      <select
                        name="projectType"
                        id="modal-projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      >
                        <option value="Desarrollo Web" className="bg-slate-950 text-white">Desarrollo Web (Landing / Corporativa)</option>
                        <option value="Ecommerce" className="bg-slate-950 text-white">Ecommerce (Tienda Online)</option>
                        <option value="Sistemas Web" className="bg-slate-950 text-white">Sistemas Web (CRM / ERP / Panel)</option>
                        <option value="WordPress" className="bg-slate-950 text-white">WordPress Especializado</option>
                        <option value="SEO" className="bg-slate-950 text-white">Posicionamiento SEO & Analítica</option>
                        <option value="Hosting" className="bg-slate-950 text-white">Hosting Premium & Servidores</option>
                        <option value="Mantenimiento" className="bg-slate-950 text-white">Plan de Mantenimiento Recurrente</option>
                      </select>
                    </div>

                    {/* Presupuesto */}
                    <div className="sm:col-span-2">
                      <label htmlFor="modal-budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Presupuesto Estimado (USD)
                      </label>
                      <select
                        name="budget"
                        id="modal-budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      >
                        <option value="< $1,000" className="bg-slate-950 text-white">Menos de $1,000 USD</option>
                        <option value="$1,000 - $3,000" className="bg-slate-950 text-white">$1,000 - $3,000 USD</option>
                        <option value="$3,000 - $6,000" className="bg-slate-950 text-white">$3,000 - $6,000 USD</option>
                        <option value="> $6,000" className="bg-slate-950 text-white">Más de $6,000 USD</option>
                      </select>
                    </div>

                    {/* Mensaje */}
                    <div className="sm:col-span-2">
                      <label htmlFor="modal-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Mensaje / Requerimientos de tu proyecto *
                      </label>
                      <textarea
                        name="message"
                        id="modal-message"
                        required
                        rows={3}
                        placeholder="Cuéntanos brevemente qué funcionalidades necesitas, si ya cuentas con logotipo o dominio, y cuáles son tus objetivos..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white transition cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      id="submit-modal-btn"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-brand-blue disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Enviar Solicitud
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
