import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartItems: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItems, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: '/', label: 'Início' },
    { to: '/cardapio', label: 'Cardápio' },
    { to: '/galeria', label: 'Galeria' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-effect-strong shadow-2xl border-b border-white/10' 
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="group flex items-center space-x-3 flex-shrink-0 relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full group-hover:bg-primary-500/30 transition-all duration-300"></div>
                <img 
                  src="/assets/logo.jpeg" 
                  alt="Burguerini Gourmet" 
                  className="relative h-12 w-12 rounded-2xl object-cover ring-2 ring-primary-500/30 shadow-lg shadow-primary-500/20 group-hover:ring-primary-500/50 transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full animate-pulse-glow"></div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white group-hover:text-primary-500 transition-colors duration-300">
                  Burguerini
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-medium -mt-1">
                  Gourmet Experience
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? 'text-primary-500 bg-primary-500/10'
                      : 'text-neutral-300 hover:text-primary-500 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="group relative p-3 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-glow transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[48px] flex items-center justify-center"
              >
                <ShoppingCart size={20} className="relative z-10" />
                {cartItems > 0 && (
                  <>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center ring-2 ring-white animate-scale-in z-20">
                      {cartItems}
                    </span>
                    <div className="absolute -top-1 -right-1 bg-red-500 rounded-full h-6 w-6 animate-ping opacity-75"></div>
                  </>
                )}
                <div className="absolute inset-0 bg-primary-400/0 group-hover:bg-primary-400/20 rounded-2xl transition-colors duration-300"></div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-3 rounded-2xl glass-effect border border-white/10 text-white hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-20 left-0 right-0 bottom-0 flex flex-col items-center pt-12 px-6 transition-all duration-500 ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          {/* Decorative Element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full mb-8"></div>
          
          <div className="w-full max-w-md space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`block w-full text-center px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 animate-fade-in-up ${
                  location.pathname === link.to
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow'
                    : 'glass-effect text-neutral-200 hover:text-white hover:bg-white/10 border border-white/10 hover:border-primary-500/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="mt-auto pb-12 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary-500">
              <Sparkles size={16} />
              <span className="text-xs uppercase tracking-wider font-medium">Gourmet Experience</span>
            </div>
            <p className="text-neutral-400 text-sm">
              Burguerini Gourmet © 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;