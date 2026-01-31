import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';
import { Plus, Flame, Leaf, ShoppingCart } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'burgers' | 'sides' | 'drinks' | 'desserts'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'sides', label: 'Acompanhamentos' },
    { id: 'drinks', label: 'Bebidas' },
    { id: 'desserts', label: 'Sobremesas' },
  ];

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-amber-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Seleção do Chef
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Nosso <span className="gradient-text">Cardápio</span>
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada item é preparado com ingredientes premium e muito amor pela gastronomia.
          </p>
        </div>
        
        <div className="flex overflow-x-auto w-full no-scrollbar pb-4 mb-12 gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as 'all' | 'burgers' | 'sides' | 'drinks' | 'desserts')}
              className={`flex-shrink-0 px-6 md:px-8 py-3 rounded-full border text-xs font-semibold uppercase tracking-wider smooth-transition ${
                activeCategory === cat.id 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-500 text-black shadow-lg shadow-amber-500/30' 
                  : 'glass-effect border-white/10 text-gray-400 hover:border-amber-500/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group flex flex-col glass-effect rounded-3xl overflow-hidden border border-white/5 hover:border-amber-500/30 smooth-transition hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.spicy && (
                    <span className="glass-effect px-3 py-2 rounded-full flex items-center gap-1.5 border border-red-500/30">
                      <Flame size={14} className="text-red-500" />
                      <span className="text-white text-[10px] font-semibold uppercase tracking-wider">Picante</span>
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="glass-effect px-3 py-2 rounded-full flex items-center gap-1.5 border border-green-500/30">
                      <Leaf size={14} className="text-green-500" />
                      <span className="text-white text-[10px] font-semibold uppercase tracking-wider">Vegano</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 right-4 glass-effect px-4 py-2 rounded-full border border-amber-500/50 bg-black/60">
                  <span className="text-amber-400 font-bold text-xl">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 smooth-transition">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                
                <button 
                  onClick={() => onAddToCart(item)}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black py-3 rounded-full font-semibold text-sm uppercase tracking-wider smooth-transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
                >
                  <ShoppingCart size={16} />
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
