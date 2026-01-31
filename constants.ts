
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'The Classic Royal',
    description: 'Pão brioche artesanal, 180g de blend bovino Black Angus, queijo cheddar inglês maturado, cebola caramelizada no balsâmico e maionese trufada.',
    price: 49.90,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'b2',
    name: 'Inferno Spicy',
    description: 'Pão australiano tostado na manteiga, burger de costela 200g, provolone maçaricado, pimenta jalapeño fresca e barbecue de bourbon artesanal.',
    price: 54.90,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&q=80&w=1200',
    spicy: true
  },
  {
    id: 'b3',
    name: 'Gourmet Garden',
    description: 'Burger de grão de bico e ervas finas, queijo brie derretido, rúcula hidropônica, tomate cereja confitado e pesto de manjericão genovês.',
    price: 44.90,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200',
    vegetarian: true
  },
  {
    id: 'b4',
    name: 'Bacon Masterpiece',
    description: 'Blend prime 180g, camadas generosas de bacon crocante glaceado no mel, cheddar inglês derretido, picles artesanal e nosso molho secreto.',
    price: 52.90,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's1',
    name: 'Batata Rústica Trufada',
    description: 'Batatas selecionadas com casca, fritas em imersão dupla, finalizadas com azeite de trufas negras e queijo pecorino ralado.',
    price: 24.90,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1630384066252-4272428d1b11?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 's2',
    name: 'Onion Rings Beer Batter',
    description: 'Anéis de cebola gigantes empanados em massa de cerveja artesanal IPA, servidos com dip de aioli defumado.',
    price: 22.90,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1639024471283-035188835118?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'd1',
    name: 'Limonada Suíça Imperial',
    description: 'Blend de limões sicilianos e tahiti, leite condensado premium e gelo triturado, finalizado com raspas de limão.',
    price: 18.90,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'd2',
    name: 'Shake de Pistache',
    description: 'Gelato artesanal de baunilha Bourbon, pasta de pistache de Bronte pura e pedaços de pistache tostado.',
    price: 28.90,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28be0?auto=format&fit=crop&q=80&w=1200'
  }
];

export const APP_CONFIG = {
  restaurantName: 'Burguerini Gourmet',
  tagline: 'A arte do hambúrguer elevada ao extremo.',
  address: 'Av. Paulista, 1234 - São Paulo, SP',
  phone: '(11) 99999-8888',
  instagram: '@burguerinigourmet'
};
