import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, Clock, Heart, ArrowRight, Star } from 'lucide-react';

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
    }, 6000);
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
    let targetElement = document.getElementById('menu');
    
    if (!targetElement) {
      targetElement = document.querySelector('section[id="menu"]') || 
                     document.querySelector('[class*="MenuSection"]');
    }
    
    if (!targetElement) {
      window.scrollBy({ top: 800, behavior: 'smooth' });
      return;
    }
    
    const offset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-neutral-950">
      {/* Background Carousel */}
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
              className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
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
                loading={index === currentSlide ? "eager" : "lazy"}
              />
              {/* Modern Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Slide Indicators - Modern Design */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                resetAutoPlay();
              }}
              className={`group relative transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-12 h-3' 
                  : 'w-3 h-3 hover:w-6'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-primary-500 shadow-glow' 
                  : 'bg-white/40 group-hover:bg-white/70'
              }`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Content - Modern Layout */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 py-20">
        <div className="max-w-4xl">
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 glass-effect-strong border border-primary-500/30 rounded-2xl px-5 py-3 backdrop-blur-xl">
              <div className="relative">
                <Award className="text-primary-500 relative z-10" size={20} />
                <div className="absolute inset-0 bg-primary-500/30 blur-lg"></div>
              </div>
              <span className="text-primary-400 text-sm md:text-base font-semibold">
                Prêmio Melhor Hambúrguer 2022
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              <span className="block gradient-text mb-2">
                Sabor Incomparável
              </span>
              <span className="block text-white">
                em Cada <span className="text-primary-500">Mordida</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-2xl">
              Ingredientes premium, receitas exclusivas e o toque artesanal que fazem do 
              <span className="text-white font-semibold"> Burguerini Gourmet </span>
              uma experiência gastronômica única.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 max-w-xl">
              <div className="group relative glass-effect-strong hover:glass-effect border border-white/10 hover:border-primary-500/30 rounded-2xl p-5 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-xl">
                    <Clock className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white">30min</p>
                    <p className="text-sm text-neutral-400">Entrega rápida</p>
                  </div>
                </div>
              </div>

              <div className="group relative glass-effect-strong hover:glass-effect border border-white/10 hover:border-primary-500/30 rounded-2xl p-5 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-xl">
                    <Star className="text-primary-400" size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white">4.9/5</p>
                    <p className="text-sm text-neutral-400">Avaliação</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToMenu}
                className="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-5 rounded-2xl font-bold text-base md:text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Ver Cardápio</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </button>
              
              <button
                onClick={() => {
                  const contactElement = document.getElementById('contact') || 
                                       document.querySelector('section[id="contact"]');
                  if (contactElement) {
                    const offset = 80;
                    const elementPosition = contactElement.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                  }
                }}
                className="glass-effect-strong border border-white/20 hover:border-primary-500/50 text-white px-8 py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              >
                <span>Fale Conosco</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
