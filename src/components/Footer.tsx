import React from 'react';
import { Sparkles, Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'Desarrollo Web', href: '#servicios' },
    { name: 'Ecommerce', href: '#servicios' },
    { name: 'Sistemas Web', href: '#servicios' },
    { name: 'WordPress', href: '#servicios' },
    { name: 'SEO & Analítica', href: '#servicios' },
    { name: 'Hosting Premium', href: '#servicios' }
  ];

  const companyLinks = [
    { name: '¿Por qué elegirnos?', href: '#nosotros' },
    { name: 'Planes Mantenimiento', href: '#planes' },
    { name: 'Nuestro Proceso', href: '#proceso' },
    { name: 'Casos de Éxito', href: '#portafolio' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'F.A.Q', href: '#faq' }
  ];

  const legalLinks = [
    { name: 'Políticas de Privacidad', href: '#privacy' },
    { name: 'Términos de Servicio', href: '#terms' },
    { name: 'Aviso Legal', href: '#legal' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com', label: 'GitHub' }
  ];

  return (
    <footer
      id="app-footer"
      className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a href="#inicio" className="flex items-center gap-2 mb-6 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan shadow-lg shadow-brand-blue/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-extrabold tracking-tight text-white leading-none">
                  PixelCraft
                </span>
                <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase leading-none mt-1">
                  Web Studio
                </span>
              </div>
            </a>
            
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-sm">
              Agencia boutique de diseño y desarrollo de sitios web profesionales, plataformas e-commerce e ingeniería de software a medida enfocada en conversión de leads y rendimiento.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-white hover:border-slate-700 hover:scale-105 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links Col */}
          <div className="lg:col-span-2.5 text-left">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-200 mb-6">
              Servicios Web
            </h4>
            <ul className="space-y-3 text-sm">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links Col */}
          <div className="lg:col-span-2.5 text-left">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-200 mb-6">
              Empresa & Soporte
            </h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-brand-purple transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-200 mb-6">
              Contacto Comercial
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                <span>Av. Javier Prado Este 1040, San Isidro, Lima, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-semibold text-emerald-500">
                  +51 999 999 999 (WA)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-cyan shrink-0" />
                <a href="mailto:contacto@pixelcraft.com" className="hover:text-white transition-colors">
                  contacto@pixelcraft.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p className="leading-none">
            &copy; {currentYear} PixelCraft Web Studio. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-slate-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
