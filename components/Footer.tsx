
import React from 'react';
import { APP_CONFIG } from '../constants';
import { Instagram, Facebook, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-950 border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary-500/30 hover:border-primary-500/50 smooth-transition">
                <img src="./assets/logo.jpeg" alt="Logo Burguerini" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary-500/0 hover:bg-primary-500/10 smooth-transition"></div>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Burguer<span className="gradient-text">ini</span>
                </span>
                <p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-medium">
                  Gourmet Experience
                </p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Elevando o conceito de hambúrguer artesanal através de ingredientes premium e técnicas de alta gastronomia.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/burguerini/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-xl glass-effect border border-white/10 flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 smooth-transition"
              >
                <Instagram size={20} className="text-neutral-400 group-hover:text-primary-500 smooth-transition" />
              </a>
              <a 
                href="#" 
                className="group w-11 h-11 rounded-xl glass-effect border border-white/10 flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 smooth-transition"
              >
                <Facebook size={20} className="text-neutral-400 group-hover:text-primary-500 smooth-transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-primary-500 to-transparent"></div>
              Links Rápidos
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#menu" className="group text-neutral-400 hover:text-primary-500 smooth-transition text-sm flex items-center gap-2">
                  <span className="w-0 h-px bg-primary-500 group-hover:w-4 smooth-transition"></span>
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#about" className="group text-neutral-400 hover:text-primary-500 smooth-transition text-sm flex items-center gap-2">
                  <span className="w-0 h-px bg-primary-500 group-hover:w-4 smooth-transition"></span>
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#testimonials" className="group text-neutral-400 hover:text-primary-500 smooth-transition text-sm flex items-center gap-2">
                  <span className="w-0 h-px bg-primary-500 group-hover:w-4 smooth-transition"></span>
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#" className="group text-neutral-400 hover:text-primary-500 smooth-transition text-sm flex items-center gap-2">
                  <span className="w-0 h-px bg-primary-500 group-hover:w-4 smooth-transition"></span>
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-primary-500 to-transparent"></div>
              Contato
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+553598472-5145" className="group flex items-start gap-3 text-neutral-400 hover:text-primary-500 smooth-transition">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>(35) 98472-5145</span>
                </a>
              </li>
              <li>
                <div className="group flex items-start gap-3 text-neutral-400">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Rua Silviano Brandão, 321<br />Camanducaia - MG</span>
                </div>
              </li>
              <li>
                <a href="mailto:contato@burguerini.com" className="group flex items-start gap-3 text-neutral-400 hover:text-primary-500 smooth-transition">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span>contato@burguerini.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-primary-500 to-transparent"></div>
              Horários
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-neutral-400">Quinta - Domingo</span>
                <span className="text-primary-400 font-semibold">19:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Segunda - Quarta</span>
                <span className="text-red-400 font-semibold">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm text-center md:text-left flex items-center gap-2">
              © {currentYear} 
              <span className="text-primary-500 font-semibold">{APP_CONFIG.restaurantName}</span>
              • Feito com 
              <Heart size={14} className="text-red-500 fill-current animate-pulse-glow" />
            </p>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-primary-500 smooth-transition">
                Política de Privacidade
              </a>
              <span className="text-neutral-700">•</span>
              <a href="#" className="hover:text-primary-500 smooth-transition">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;