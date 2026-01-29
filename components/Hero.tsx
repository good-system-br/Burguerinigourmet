import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Clock, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['/assets/lanche.jpeg', '/assets/lanche1.jpeg', '/assets/lanche.jpeg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2">
              <Award className="text-amber-400" size={18} />
              <span className="text-amber-400 text-sm font-semibold">Prêmio Melhor Hambúrguer 2024</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Sabor Incomparável</span>
              <br />
              <span className="text-white">em Cada Mordida</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Ingredientes premium, receitas exclusivas e o toque artesanal que fazem do Burguerini Gourmet uma experiência gastronômica única.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4">
                <Clock className="text-amber-400" size={24} />
                <div>
                  <p className="text-white font-bold text-lg">30min</p>
                  <p className="text-gray-400 text-sm">Entrega rápida</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4">
                <Heart className="text-red-400" size={24} />
                <div>
                  <p className="text-white font-bold text-lg">4.9/5.0</p>
                  <p className="text-gray-400 text-sm">Avaliação</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToMenu}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 transform hover:scale-105"
              >
                Ver Cardápio
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-effect border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Fale Conosco
              </button>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-on-scroll">
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide}
                    alt={`Hambúrguer Gourmet ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/20 md:to-transparent"></div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect border border-white/20 p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect border border-white/20 p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-amber-500' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
