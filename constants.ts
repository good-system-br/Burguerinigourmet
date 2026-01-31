
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // DESTAQUES (Season Edition)
  {
    id: 'b1',
    name: 'Blue Anarchy',
    description: 'Nosso destaque da temporada. Um hambúrguer gourmet com ingredientes selecionados e preparação impecável.',
    price: 45.00,
    category: 'burgers',
    image: 'https://files.menudino.com/merchants/c620defc-2faf-11ee-9964-0022483864db/items/images/large/8da614c6-b7e4-40a8-88ea-a8ba165958b7_20251127151743.webp'
  },
  
  // CLASSICS - Hambúrgueres Clássicos
  {
    id: 'b2',
    name: 'Classic Burguerini',
    description: 'O clássico da casa. Pão brioche, carne selecionada, queijo e molho especial da Burguerini.',
    price: 38.00,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'b3',
    name: 'Double Cheese',
    description: 'Dois hambúrgueres suculentos com duplo queijo derretido e molho especial.',
    price: 42.00,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200'
  },
  
  // GOURMET - Hambúrgueres Gourmet
  {
    id: 'b4',
    name: 'Bacon Supremo',
    description: 'Carne premium com bacon crocante artesanal, cheddar derretido e maionese especial.',
    price: 48.00,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=1200',
    spicy: false
  },
  {
    id: 'b5',
    name: 'Trufa Black',
    description: 'Hambúrguer gourmet com azeite de trufa negra, queijo brie e rúcula fresca.',
    price: 52.00,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'b6',
    name: 'Spicy Fire',
    description: 'Para quem gosta de picância! Hambúrguer com pimenta jalapeño, molho barbecue e cheddar.',
    price: 44.00,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200',
    spicy: true
  },
  
  // FRITAS
  {
    id: 's1',
    name: 'Batata Suprema',
    description: 'Batatas fritas crocantes com tempero da casa e finalização com queijo pecorino ralado.',
    price: 22.00,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1630384066252-4272428d1b11?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's2',
    name: 'Onion Rings',
    description: 'Anéis de cebola gigantes empanados e fritos, servidos com maionese caseira.',
    price: 20.00,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1639024471283-035188835118?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's3',
    name: 'Batata com Cheddar',
    description: 'Batatas fritas cobertas com molho de cheddar derretido e bacon crocante.',
    price: 24.00,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1630384066252-4272428d1b11?auto=format&fit=crop&q=80&w=1200'
  },
  
  // BEBIDAS
  {
    id: 'd1',
    name: 'Refrigerante Lata',
    description: 'Refrigerante gelado em lata. Escolha entre Coca, Guaraná ou Refrigerante de Maçã.',
    price: 8.00,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1554866585-ac6f5c5b5b5d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'd2',
    name: 'Suco Natural',
    description: 'Suco natural feito na hora. Laranja, melancia ou melão.',
    price: 12.00,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1613478223367-ce79c1f2b918?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'd3',
    name: 'Água 500ml',
    description: 'Água mineral 500ml gelada.',
    price: 5.00,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1599599810694-7f7f0b60a21b?auto=format&fit=crop&q=80&w=1200'
  },
  
  // MILKSHAKES
  {
    id: 'd4',
    name: 'Milkshake Morango',
    description: 'Milkshake cremoso feito com leite condensado e xarope de morango.',
    price: 18.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28be0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'd5',
    name: 'Milkshake Chocolate',
    description: 'Milkshake chocolate cremoso com chocolate belga derretido.',
    price: 18.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'd6',
    name: 'Milkshake Nutella',
    description: 'Milkshake com Nutella e leite condensado. Um desejo irresistível.',
    price: 20.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1663093850005-c4203f4b8c92?auto=format&fit=crop&q=80&w=1200'
  },
  
  // MOLHOS & EXTRAS
  {
    id: 's4',
    name: 'Molho Especial',
    description: 'Molho especial da Burguerini. Acompanhamento para seu hambúrguer.',
    price: 3.00,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1587103663184-e63f0e9dd2c8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's5',
    name: 'Maionese Artesanal',
    description: 'Maionese artesanal feita na casa. Perfeita para acompanhar.',
    price: 3.00,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1587103663184-e63f0e9dd2c8?auto=format&fit=crop&q=80&w=1200'
  }
];

export const APP_CONFIG = {
  restaurantName: 'Burguerini Gourmet',
  tagline: 'Hambúrgueres Gourmet com Qualidade Premium',
  address: 'Rua Silviano Brandão, 321 - Camanducaia, MG',
  phone: '(35) 98472-5145',
  instagram: '@burguerinigourmet',
  minimumOrder: 20.00,
  deliveryTime: '35-60 min',
  city: 'Camanducaia',
  state: 'MG'
};
