
import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { APP_CONFIG } from '../constants';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onMenuToggle, isMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] glass-effect border-b border-white/10 smooth-transition">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-amber-500/20 group-hover:border-amber-500/40 smooth-transition">
            <img src="./assets/logo.jpeg" alt="Logo Burguerini" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white">
              {APP_CONFIG.restaurantName.split(' ')[0]}
              <span className="gradient-text">ini</span>
            </span>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Gourmet</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
          <a href="#menu" className="hover:text-amber-500 smooth-transition py-2 border-b-2 border-transparent hover:border-amber-500">
            Cardápio
          </a>
          <a href="#benefits" className="hover:text-amber-500 smooth-transition py-2 border-b-2 border-transparent hover:border-amber-500">
            Diferenciais
          </a>
          <a href="#about" className="hover:text-amber-500 smooth-transition py-2 border-b-2 border-transparent hover:border-amber-500">
            Nossa História
          </a>
          <a href="#testimonials" className="hover:text-amber-500 smooth-transition py-2 border-b-2 border-transparent hover:border-amber-500">
            Avaliações
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onCartClick}
            className="relative p-3 text-white hover:text-amber-500 smooth-transition glass-effect rounded-full hover:scale-110"
            aria-label="Ver carrinho"
          >
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-amber-500 to-amber-600 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-black shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="md:hidden p-3 text-white glass-effect rounded-full hover:scale-110 smooth-transition"
            onClick={onMenuToggle}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[-1] bg-black/95 backdrop-blur-xl smooth-transition md:hidden flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full"></div>
        </div>
        
        <nav className="flex flex-col items-center gap-6 relative z-10">
          <a 
            href="#menu" 
            onClick={onMenuToggle} 
            className="text-3xl font-serif text-white hover:text-amber-500 smooth-transition tracking-tight"
          >
            Cardápio
          </a>
          <a 
            href="#benefits" 
            onClick={onMenuToggle} 
            className="text-3xl font-serif text-white hover:text-amber-500 smooth-transition tracking-tight"
          >
            Diferenciais
          </a>
          <a 
            href="#about" 
            onClick={onMenuToggle} 
            className="text-3xl font-serif text-white hover:text-amber-500 smooth-transition tracking-tight"
          >
            Nossa História
          </a>
          <a 
            href="#testimonials" 
            onClick={onMenuToggle} 
            className="text-3xl font-serif text-white hover:text-amber-500 smooth-transition tracking-tight"
          >
            Avaliações
          </a>
        </nav>
        
        <div className="mt-8 flex flex-col items-center gap-4 relative z-10">
          <p className="text-gray-500 text-xs tracking-widest uppercase">Siga-nos</p>
          <div className="flex gap-6">
            <a href="#" className="text-amber-500 font-bold hover:scale-110 smooth-transition">IG</a>
            <a href="#" className="text-amber-500 font-bold hover:scale-110 smooth-transition">FB</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[-1] bg-black transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/20 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full"></div>
        </div>
        
        <a href="#menu" onClick={onMenuToggle} className="text-3xl font-serif text-white hover:text-amber-500 transition-all tracking-tighter uppercase italic">Cardápio</a>
        <a href="#about" onClick={onMenuToggle} className="text-3xl font-serif text-white hover:text-amber-500 transition-all tracking-tighter uppercase italic">História</a>
        <a href="#location" onClick={onMenuToggle} className="text-3xl font-serif text-white hover:text-amber-500 transition-all tracking-tighter uppercase italic">Localização</a>
        
        <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-gray-500 text-xs tracking-widest uppercase">Siga-nos</p>
            <div className="flex gap-6">
                <span className="text-amber-500 font-bold">IG</span>
                <span className="text-amber-500 font-bold">FB</span>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
