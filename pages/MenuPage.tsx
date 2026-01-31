import React from 'react';
import MenuSection from '../components/MenuSection';
import { MenuItem } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nosso <span className="gradient-text">Cardápio</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Descubra nossa seleção completa de hambúrgueres gourmet preparados com ingredientes premium
          </p>
        </div>
      </div>
      <MenuSection onAddToCart={onAddToCart} />
    </main>
  );
};

export default Menu;
