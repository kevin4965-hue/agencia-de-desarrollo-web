import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Server, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyProps {
  onChangePage?: (page: string) => void;
}

export default function PrivacyPolicy({ onChangePage }: PrivacyPolicyProps) {
  const lastUpdated = '16 de Julio de 2026';

  const sections = [
    {
      id: 'responsable',
      icon: <ShieldCheck className="h-6 w-6 text-brand-cyan shrink-0" />,
      title: '1. Responsable del Tratamiento de Datos',
      content: (
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          El responsable del tratamiento de los datos personales recolectados a través de este sitio web es{' '}
          <strong className="text-white">pixelweb Web Studio</strong> (en adelante, "pixelweb"), con domicilio principal en Cl. 26 sur 73 b-98 Bogotá, Colombia, correo electrónico de contacto:{' '}
          <a href="mailto:info@pixelweb.online" className="text-brand-cyan underline hover:text-white transition">
            info@pixelweb.online
          </a>{' '}
          y teléfono de atención WhatsApp: +57 310 265 5438.
        </p>
      )
    },
    {
      id: 'recoleccion',
      icon: <Eye className="h-6 w-6 text-brand-blue shrink-0" />,
      title: '2. Información que Recolectamos',
      content: (
        <div className="space-y-3 text-slate-300 text-sm md:text-base leading-relaxed">
          <p>
            Al solicitar cotizaciones, contactarnos o contratar nuestros servicios de desarrollo web, recabamos los siguientes datos personales:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong className="text-slate-200">Datos de Identificación:</strong> Nombre completo, nombre de empresa o emprendimiento.</li>
            <li><strong className="text-slate-200">Datos de Contacto:</strong> Correo electrónico, número telefónico / WhatsApp, ciudad y país de residencia.</li>
            <li><strong className="text-slate-200">Datos del Proyecto:</strong> Requerimientos técnicos, tipo de servicio, presupuesto estimado y comentarios específicos.</li>
            <li><strong className="text-slate-200">Datos Navegacionales:</strong> Dirección IP, tipo de navegador, sistema operativo y cookies técnicas para mejorar la experiencia de uso.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'finalidad',
      icon: <FileText className="h-6 w-6 text-brand-purple shrink-0" />,
      title: '3. Finalidad del Tratamiento',
      content: (
        <div className="space-y-3 text-slate-300 text-sm md:text-base leading-relaxed">
          <p>
            Los datos personales proporcionados por los usuarios serán utilizados de manera confidencial para las siguientes finalidades:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-300">Elaborar y enviar propuestas técnicas y cotizaciones económicas personalizadas.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-300">Gestionar la comunicación comercial e inicio de proyectos vía correo electrónico o WhatsApp.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-300">Prestar servicios de soporte, mantenimiento técnico y alojamiento web.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-300">Cumplir con obligaciones contractuales, tributarias y legales vigentes.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'seguridad',
      icon: <Lock className="h-6 w-6 text-emerald-400 shrink-0" />,
      title: '4. Seguridad y Protección de Datos',
      content: (
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          En pixelweb implementamos medidas de seguridad técnicas, organizativas y tecnológicas apropiadas (como cifrado SSL/TLS en tránsito y almacenamiento en servidores protegidos) para evitar el acceso no autorizado, alteración, pérdida o divulgación indebida de sus datos personales. <strong className="text-white">Nunca vendemos ni alquilamos su información personal a terceros.</strong>
        </p>
      )
    },
    {
      id: 'derechos',
      icon: <UserCheck className="h-6 w-6 text-amber-400 shrink-0" />,
      title: '5. Derechos del Titular de la Información (Habeas Data)',
      content: (
        <div className="space-y-3 text-slate-300 text-sm md:text-base leading-relaxed">
          <p>
            Como titular de los datos personales, usted cuenta con el derecho constitucional y legal de:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong className="text-slate-200">Conocer y Acceder:</strong> Consultar gratuitamente sus datos personales almacenados en nuestras bases de datos.</li>
            <li><strong className="text-slate-200">Actualizar y Rectificar:</strong> Solicitar la corrección de información parcial, inexacta o incompleta.</li>
            <li><strong className="text-slate-200">Suprimir / Cancelar:</strong> Solicitar la eliminación de sus datos cuando no exista un deber legal o contractual de conservarlos.</li>
            <li><strong className="text-slate-200">Revocar la Autorización:</strong> Retirar el consentimiento otorgado previamente para el envío de comunicaciones.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'cookies',
      icon: <Server className="h-6 w-6 text-cyan-400 shrink-0" />,
      title: '6. Uso de Cookies y Tecnologías de Rastreo',
      content: (
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Este sitio web utiliza cookies analíticas y funcionales estrictamente necesarias para recordar sus preferencias de navegación y medir métricas anónimas de rendimiento de la página. Puede desactivar las cookies directamente en la configuración de su navegador en cualquier momento sin afectar la funcionalidad básica del sitio.
        </p>
      )
    },
    {
      id: 'contacto-privacidad',
      icon: <Mail className="h-6 w-6 text-brand-purple shrink-0" />,
      title: '7. Canal para Ejercer sus Derechos',
      content: (
        <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-transparent border border-white/10 text-slate-300 text-sm md:text-base leading-relaxed">
          <p className="mb-2">
            Para ejercer sus derechos de actualización, rectificación o supresión de datos, puede enviar una solicitud por escrito indicando su nombre completo y petición específica a:
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 font-semibold text-white">
            <a href="mailto:info@pixelweb.online" className="inline-flex items-center gap-2 text-brand-cyan hover:underline">
              <Mail className="h-4 w-4" /> info@pixelweb.online
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a href="mailto:proyectos@pixelweb.online" className="inline-flex items-center gap-2 text-brand-blue hover:underline">
              <Mail className="h-4 w-4" /> proyectos@pixelweb.online
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative min-h-screen py-24 md:py-32 bg-slate-950 text-slate-200 border-t border-white/5">
      {/* Background Blurs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back navigation button if handler exists */}
        {onChangePage && (
          <button
            onClick={() => {
              onChangePage('inicio');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-sm font-semibold transition cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al Inicio
          </button>
        )}

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="h-4 w-4" /> Protección de Datos
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Política de Privacidad
          </h1>
          <p className="mt-4 text-sm text-slate-400">
            Última actualización: <span className="text-slate-200 font-semibold">{lastUpdated}</span>
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto rounded-full" />
        </div>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 md:p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-xl mb-10 backdrop-blur-md"
        >
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            En <strong className="text-white">pixelweb Web Studio</strong> respetamos profundamente su privacidad y nos comprometemos a proteger la confidencialidad de la información personal que nos confía. Esta Política de Privacidad describe de manera clara y transparente cómo recopilamos, utilizamos, almacenamos y protegemos sus datos cuando navega en nuestro sitio web o solicita nuestros servicios.
          </p>
        </motion.div>

        {/* Sections Grid / List */}
        <div className="space-y-8">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors shadow-lg text-left"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {sec.icon}
                </div>
                <h2 className="font-display text-lg md:text-xl font-bold text-white">
                  {sec.title}
                </h2>
              </div>
              {sec.content}
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-slate-500 border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} pixelweb Web Studio. Todos los derechos reservados.</p>
        </div>

      </div>
    </div>
  );
}
