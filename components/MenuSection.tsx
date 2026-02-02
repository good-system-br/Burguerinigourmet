import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';
import { Plus, Flame, Leaf, ShoppingCart, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'burgers' | 'sides' | 'drinks' | 'desserts'>('all');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos', icon: Sparkles },
    { id: 'burgers', label: 'Burgers', icon: null },
    { id: 'sides', label: 'Acompanhamentos', icon: null },
    { id: 'drinks', label: 'Bebidas', icon: null },
    { id: 'desserts', label: 'Sobremesas', icon: null },
  ];

  const handleAddToCart = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItems(prev => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 1500);
  };

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary-500/5 blur-[120px] rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 glass-effect-strong border border-primary-500/20 rounded-full px-5 py-2">
            <Sparkles className="text-primary-500" size={16} />
            <span className="text-primary-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
              Seleção do Chef
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Nosso <span className="gradient-text">Cardápio</span>
          </h2>
          
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Cada item é preparado com ingredientes premium e muito amor pela gastronomia.
          </p>
        </div>
        
        {/* Category Filter - Modern Pills */}
        <div className="flex overflow-x-auto scrollbar-hide gap-3 mb-12 md:mb-16 pb-4 md:justify-center">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as 'all' | 'burgers' | 'sides' | 'drinks' | 'desserts')}
                className={`group relative flex-shrink-0 px-6 md:px-8 py-3.5 rounded-2xl border text-sm font-semibold uppercase tracking-wider smooth-transition min-h-[48px] flex items-center justify-center gap-2 overflow-hidden ${
                  activeCategory === cat.id 
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 border-primary-500 text-white shadow-glow' 
                    : 'glass-effect border-white/10 text-neutral-400 hover:border-primary-500/30 hover:text-white hover:bg-white/5'
                }`}
              >
                {Icon && <Icon size={16} />}
                <span className="relative z-10">{cat.label}</span>
                {activeCategory === cat.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Grid - Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col glass-effect rounded-3xl overflow-hidden border border-white/5 hover:border-primary-500/30 smooth-transition hover-lift"
              style={{ 
                animationDelay: `${index * 50}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover smooth-transition-slow group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {item.spicy && (
                    <span className="glass-effect-strong px-3 py-2 rounded-xl flex items-center gap-1.5 border border-red-500/30">
                      <Flame size={14} className="text-red-500" />
                      <span className="text-white text-[10px] font-semibold uppercase tracking-wider">Picante</span>
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="glass-effect-strong px-3 py-2 rounded-xl flex items-center gap-1.5 border border-green-500/30">
                      <Leaf size={14} className="text-green-500" />
                      <span className="text-white text-[10px] font-semibold uppercase tracking-wider">Vegano</span>
                    </span>
                  )}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 right-3 glass-effect-strong px-4 py-2 rounded-xl border border-primary-500/50 bg-black/60 backdrop-blur-xl">
                  <span className="text-primary-400 font-bold text-lg md:text-xl">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 md:p-6 flex flex-col flex-grow bg-gradient-to-b from-neutral-900/50 to-neutral-900">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary-500 smooth-transition line-clamp-1">
                  {item.name}
                </h3>
                
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6 flex-grow line-clamp-2">
                  {item.description}
                </p>
                
                {/* Add to Cart Button */}
                <button 
                  onClick={() => handleAddToCart(item)}
                  disabled={addedItems.has(item.id)}
                  className={`w-full relative overflow-hidden font-semibold text-sm uppercase tracking-wider py-4 px-4 rounded-2xl smooth-transition flex items-center justify-center gap-2 min-h-[52px] ${
                    addedItems.has(item.id)
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/20 hover:shadow-glow active:scale-95'
                  }`}
                >
                  {addedItems.has(item.id) ? (
                    <>
                      <span className="relative z-10">✓ Adicionado</span>
                      <div className="absolute inset-0 bg-green-600 animate-fade-in"></div>
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} className="relative z-10" />
                      <span className="relative z-10">Adicionar</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    </>
                  )}
                </button>
              </div>

              {/* Card Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-800 mb-6">
              <ShoppingCart size={32} className="text-neutral-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Nenhum item encontrado</h3>
            <p className="text-neutral-400">Tente selecionar outra categoria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
