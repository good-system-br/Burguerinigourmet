
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCarousel from './components/FeaturedCarousel';
import Benefits from './components/Benefits';
import MenuSection from './components/MenuSection';
import AISommelier from './components/AISommelier';
import Testimonials from './components/Testimonials';
import CartModal from './components/CartModal';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAddToCart = useCallback((item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const handleUpdateQuantity = useCallback((id: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  }, []);

  const handleRemoveFromCart = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-amber-500 selection:text-black">
      <Navbar 
        cartCount={totalItems} 
        onCartClick={() => setIsCartOpen(true)}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      
      <main>
        <Hero />
        
        {/* Featured Carousel - Mobile Only */}
        <FeaturedCarousel />
        
        {/* Benefits Section */}
        <Benefits />

        {/* Menu Section */}
        <MenuSection onAddToCart={handleAddToCart} />
        
        {/* AI Sommelier */}
        <AISommelier onAddToCart={handleAddToCart} />

        {/* Testimonials */}
        <Testimonials />

        {/* Story Section */}
        <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
          
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl smooth-transition blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1550950158-d059ddb0cd3f?auto=format&fit=crop&q=80&w=1200" 
                alt="Chef preparing burger" 
                className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
              />
            </div>
            <div>
              <h2 className="text-amber-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
                Nossa Essência
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Onde a Paixão se Torna <span className="gradient-text">Paladar</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A Burguerini Gourmet nasceu de um sonho simples: transformar o hambúrguer em uma experiência de alta gastronomia sem perder a alma rústica que o define.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Cada detalhe, da escolha do sal de flor à maturação da carne, é pensado para que cada mordida conte uma história de dedicação e sabor.
              </p>
              <a 
                href="#menu"
                className="inline-flex items-center gap-3 text-amber-500 font-semibold uppercase tracking-wider text-sm group hover:gap-5 smooth-transition"
              >
                Conheça Nossa História
                <div className="w-16 h-px bg-amber-500 group-hover:w-24 smooth-transition"></div>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Pronto para uma Experiência <span className="gradient-text">Inesquecível?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
              Visite uma de nossas unidades e descubra por que somos referência em hambúrgueres gourmet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#menu" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-10 py-4 rounded-full font-semibold uppercase tracking-wider text-sm smooth-transition shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
              >
                Fazer Pedido Agora
              </a>
              <a 
                href="#" 
                className="glass-effect border border-white/20 hover:border-amber-500 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-wider text-sm smooth-transition hover:bg-white/5"
              >
                Reservar Mesa
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;