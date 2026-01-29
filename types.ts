
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'burgers' | 'sides' | 'drinks' | 'desserts';
  image: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface RecommendationResponse {
  burgerId: string;
  reasoning: string;
}
