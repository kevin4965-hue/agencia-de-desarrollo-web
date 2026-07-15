import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    projectType: 'Desarrollo Web',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending data to server
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Clean after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
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
    <section
      id="contacto"
      className="relative py-20 md:py-28 bg-transparent overflow-hidden transition-colors duration-300"
    >
      {/* Background vectors */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-brand-blue">
            Contacto Comercial
          </h2>
          <p className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient tracking-tight">
            ¿Listo para iniciar tu transformación digital?
          </p>
          <div className="mt-4 h-1 w-20 bg-brand-blue mx-auto rounded-full" />
          <p className="mt-4 text-base text-slate-400">
            Completa nuestro formulario de cotización técnica o escríbenos directamente. Un especialista analizará tus metas y te responderá con una propuesta viable en tiempo récord.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-content-grid">
          
          {/* Left Column: Contact Details & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8" id="contact-info-panel">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-white text-left">
                Información de Oficina
              </h3>
              <p className="text-sm text-slate-400 text-left">
                Estamos disponibles para coordinar videollamadas estratégicas por Google Meet o Zoom, así como reuniones presenciales previa cita.
              </p>

              {/* Detail Blocks */}
              <div className="space-y-4">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/3 hover:border-emerald-500/20 hover:bg-white/5 transition-all duration-300 group glass-card"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      WhatsApp Directo
                    </span>
                    <span className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                      +51 999 999 999
                    </span>
                  </div>
                </a>

                {/* Correo */}
                <a
                  href="mailto:contacto@pixelcraft.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/3 hover:border-brand-blue/30 hover:bg-white/5 transition-all duration-300 group glass-card"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-brand-cyan group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Correo Electrónico
                    </span>
                    <span className="text-sm font-bold text-slate-200 group-hover:text-brand-cyan transition-colors">
                      contacto@pixelcraft.com
                    </span>
                  </div>
                </a>

                {/* Horario */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/3 glass-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-brand-purple">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Horario de Atención
                    </span>
                    <span className="text-sm font-bold text-slate-200 block">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                    </span>
                    <span className="text-xs text-slate-400">
                      Sábados: 9:00 AM - 1:00 PM (GMT-5)
                    </span>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/3 glass-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-brand-cyan">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-none mb-1">
                      Nuestra Ubicación
                    </span>
                    <span className="text-sm font-bold text-slate-200">
                      Av. Javier Prado Este 1040, San Isidro, Lima, Perú
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Location Map Wrapper */}
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/3 aspect-[16/10] relative shadow-sm shrink-0">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3901.4284501254425!2d-77.02613142416487!3d-12.082772588157143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c866f81e3a47%3A0xb31e7be9401777e5!2sAv.%20Javier%20Prado%20Este%201040%2C%20San%20Isidro%2015036!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
                className="w-full h-full border-0 grayscale invert opacity-75"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: High Converting Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="rounded-3xl border border-white/5 bg-white/3 p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between h-full glass-card">
              
              {/* Highlight Lines */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center h-full"
                >
                  <div className="mb-6 rounded-full bg-emerald-500/10 p-4 text-emerald-400">
                    <CheckCircle2 className="h-16 w-16" />
                  </div>
                  <h4 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                    ¡Mensaje Recibido con Éxito!
                  </h4>
                  <p className="mt-4 max-w-md text-slate-300 text-base">
                    Gracias por tu confianza, <strong>{formData.name}</strong>. Hemos registrado de forma segura tus requerimientos de <strong>{formData.projectType}</strong>. Nuestro equipo comercial ya está revisando tu caso para enviarte un diagnóstico preliminar en menos de 2 horas.
                  </p>
                  <span className="mt-8 text-xs text-slate-400 font-medium">
                    Soporte prioritario: +51 999 999 999
                  </span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left" id="contact-quote-form">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-brand-cyan" />
                    <h3 className="font-display text-xl font-bold text-white">
                      Cuéntanos sobre tu idea
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        required
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Empresa */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Nombre de Empresa / Proyecto
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="contact-company"
                        placeholder="Ej. Velvet Co."
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Correo */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="contact-email"
                        required
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="contact-phone"
                        required
                        placeholder="Ej. +51 999 999 999"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Ciudad */}
                    <div>
                      <label htmlFor="contact-city" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Ciudad / País *
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="contact-city"
                        required
                        placeholder="Ej. Lima, Perú"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>

                    {/* Tipo de proyecto */}
                    <div>
                      <label htmlFor="contact-projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Tipo de Servicio Requerido
                      </label>
                      <select
                        name="projectType"
                        id="contact-projectType"
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
                      <label htmlFor="contact-budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Presupuesto Estimado (USD)
                      </label>
                      <select
                        name="budget"
                        id="contact-budget"
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
                      <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Mensaje / Requerimientos de tu proyecto *
                      </label>
                      <textarea
                        name="message"
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Cuéntanos brevemente qué funcionalidades necesitas, si ya cuentas con logotipo o dominio, y cuáles son tus objetivos..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      id="contact-submit-btn"
                      className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-blue/15 hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Procesando tu solicitud...
                        </>
                      ) : (
                        <>
                          <MessageSquare className="h-5 w-5" />
                          Solicitar Cotización Gratis
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4 leading-none">
                      🔒 Tus datos están encriptados y protegidos bajo estricto acuerdo de confidencialidad.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
