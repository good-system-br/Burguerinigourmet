
import React from 'react';
import { APP_CONFIG } from '../constants';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-500/20">
                <img src="./assets/logo.jpeg" alt="Logo Burguerini" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-2xl font-serif font-bold tracking-tight text-white">
                  {APP_CONFIG.restaurantName.split(' ')[0]}
                  <span className="gradient-text">ini</span>
                </span>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Gourmet</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevando o conceito de hambúrguer artesanal através de ingredientes premium e técnicas de alta gastronomia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-amber-500 hover:text-black smooth-transition group">
                <Instagram size={18} className="text-amber-500 group-hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-amber-500 hover:text-black smooth-transition group">
                <Facebook size={18} className="text-amber-500 group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-6 flex items-center gap-2">
              <div className="w-6 h-px bg-amber-500"></div>
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li>
                <a href="#menu" className="hover:text-amber-500 smooth-transition hover:translate-x-1 inline-block">
                  Cardápio
                </a>
              </li>
              <li>

                <a href="#about" className="hover:text-amber-500 smooth-transition hover:translate-x-1 inline-block">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-500 smooth-transition hover:translate-x-1 inline-block">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 smooth-transition hover:translate-x-1 inline-block">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © 2022 <span className="text-amber-500 font-semibold">{APP_CONFIG.restaurantName}</span>. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-amber-500 smooth-transition">Política de Privacidade</a>
            <a href="#" className="hover:text-amber-500 smooth-transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;