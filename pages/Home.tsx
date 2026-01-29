import React from 'react';
import Hero from '../components/Hero';
import FeaturedCarousel from '../components/FeaturedCarousel';
import Benefits from '../components/Benefits';
import GoogleReviews from '../components/GoogleReviews';

interface HomeProps {
  onCartClick: () => void;
  cartItems: number;
}

const Home: React.FC<HomeProps> = ({ onCartClick, cartItems }) => {
  return (
    <main className="pt-24">
      <Hero onCartClick={onCartClick} cartItems={cartItems} />
      <FeaturedCarousel onCartClick={onCartClick} />
      <Benefits />
      <GoogleReviews />
    </main>
  );
};

export default Home;
