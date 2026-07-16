import React from 'react';
import { Sparkles, Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onChangePage: (page: string) => void;
}

export default function Footer({ onChangePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'Desarrollo Web', page: 'servicios' },
    { name: 'Ecommerce', page: 'servicios' },
    { name: 'Sistemas Web', page: 'servicios' },
    { name: 'WordPress', page: 'servicios' },
    { name: 'SEO & Analítica', page: 'servicios' },
    { name: 'Hosting Premium', page: 'servicios' }
  ];

  const companyLinks = [
    { name: '¿Por qué elegirnos?', page: 'nosotros' },
    { name: 'Planes Mantenimiento', page: 'planes' },
    { name: 'Nuestro Proceso', page: 'nosotros' },
    { name: 'Casos de Éxito', page: 'portafolio' },
    { name: 'Testimonios', page: 'portafolio' },
    { name: 'F.A.Q', page: 'faq' }
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

  const handleLinkClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    onChangePage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer
      id="app-footer"
      className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, 'inicio')}
              className="flex items-center gap-2 mb-6 group"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan shadow-lg shadow-brand-blue/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-lg font-extrabold tracking-tight text-white leading-none">
                  pixelweb
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
                    href={`#${link.page}`}
                    onClick={(e) => handleLinkClick(e, link.page)}
                    className="hover:text-brand-cyan transition-colors cursor-pointer"
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
                    href={`#${link.page}`}
                    onClick={(e) => handleLinkClick(e, link.page)}
                    className="hover:text-brand-purple transition-colors cursor-pointer"
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
                <span>Cl. 26 sur 73 b-98 Bogotá Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <a href="https://wa.me/573102655438" target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-semibold text-emerald-500">
                  +57 310 265 5438 (WA)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-cyan shrink-0" />
                <a href="mailto:info@pixelweb.online" className="hover:text-white transition-colors">
                  info@pixelweb.online
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p className="leading-none">
            &copy; {currentYear} pixelweb. Todos los derechos reservados.
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
