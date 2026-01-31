import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, Clock, Heart } from 'lucide-react';

interface HeroProps {
  onCartClick?: () => void;
  cartItems?: number;
}

const Hero: React.FC<HeroProps> = ({ onCartClick, cartItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const slides = ['/assets/lanche.jpeg', '/assets/lanche1.jpeg', '/assets/lanche.jpeg'];
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setIsDragging(false);
    setTouchStart(0);
    setTouchEnd(0);
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Carrossel de Fundo */}
      <div 
        className="absolute inset-0 z-0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide}
                alt={`Hambúrguer Gourmet ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                draggable="false"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>

        {/* Setas de navegação - Background */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect border border-white/30 p-3 rounded-full text-white hover:bg-white/20 active:scale-95 transition-all duration-300 z-10 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect border border-white/30 p-3 rounded-full text-white hover:bg-white/20 active:scale-95 transition-all duration-300 z-10 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores - Background */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                resetAutoPlay();
              }}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 h-2 bg-amber-500 shadow-lg shadow-amber-500/50' 
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Conteúdo Textual - Frente */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-2xl">
          <div className="text-left space-y-8 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/30 to-orange-600/30 backdrop-blur-sm border border-amber-500/50 rounded-full px-4 py-2">
              <Award className="text-amber-400" size={18} />
              <span className="text-amber-400 text-sm font-semibold">Prêmio Melhor Hambúrguer 2022</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Sabor Incomparável</span>
              <br />
              <span className="text-white">em Cada Mordida</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Ingredientes premium, receitas exclusivas e o toque artesanal que fazem do Burguerini Gourmet uma experiência gastronômica única.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center gap-3 bg-black/60 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                <Clock className="text-amber-400" size={24} />
                <div>
                  <p className="text-white font-bold text-lg">30min</p>
                  <p className="text-gray-300 text-sm">Entrega rápida</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/60 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                <Heart className="text-red-400" size={24} />
                <div>
                  <p className="text-white font-bold text-lg">4.9/5.0</p>
                  <p className="text-gray-300 text-sm">Avaliação</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToMenu}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/40 transform hover:scale-105 active:scale-95"
              >
                Ver Cardápio
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-effect border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 active:scale-95"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
