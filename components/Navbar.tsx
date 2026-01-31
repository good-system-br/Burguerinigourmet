import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartItems: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItems, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <img 
              src="/assets/logo.jpeg" 
              alt="Burguerini Gourmet" 
              className="h-12 w-12 rounded-full object-cover ring-2 ring-amber-400/30 shadow-lg shadow-amber-500/20"
            />
            <span className="text-2xl font-bold gradient-text hidden sm:block">Burguerini</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Início</Link>
            <Link to="/cardapio" className="nav-link">Cardápio</Link>
            <Link to="/galeria" className="nav-link">Galeria</Link>
            <Link to="/sobre" className="nav-link">Sobre</Link>
            <Link to="/contato" className="nav-link">Contato</Link>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative md:p-3 p-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] min-w-[48px] md:min-h-[44px] md:min-w-[44px] flex items-center justify-center"
            >
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ring-2 ring-white">
                  {cartItems}
                </span>
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden md:p-3 p-3.5 rounded-full glass-effect border border-white/20 text-white hover:bg-white/10 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[-1] bg-black transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
        }`}
      >
        <Link to="/" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-amber-400 transition-colors duration-300">
          Início
        </Link>
        <Link to="/cardapio" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-amber-400 transition-colors duration-300">
          Cardápio
        </Link>
        <Link to="/galeria" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-amber-400 transition-colors duration-300">
          Galeria
        </Link>
        <Link to="/sobre" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-amber-400 transition-colors duration-300">
          Sobre
        </Link>
        <Link to="/contato" onClick={closeMenu} className="text-white text-2xl font-semibold hover:text-amber-400 transition-colors duration-300">
          Contato
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
