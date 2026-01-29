
import React, { useState, useEffect } from 'react';
import { APP_CONFIG } from '../constants';
import { ArrowRight, Play } from 'lucide-react';
import lanche from '../assets/lanche.jpeg';
import lanche1 from '../assets/lanche1.jpeg';

const SLIDES = [
  {
    image: lanche,
    title: 'Onde o Fogo Encontra a Arte',
    subtitle: 'Artesanal & Gourmet',
  },
  {
    image: lanche1,
    title: 'Sabor que Desperta Sentidos',
    subtitle: 'Ingredientes Premium',
  },
  {
    image: lanche,
    title: 'A Perfeição em Cada Mordida',
    subtitle: 'Blends Exclusivos',
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms]"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1.15)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>
          </div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <div key={currentSlide} className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-amber-500/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="text-amber-500 text-xs md:text-sm font-semibold uppercase tracking-wider">
                {SLIDES[currentSlide].subtitle}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              {SLIDES[currentSlide].title.split(' ').map((word, i) => {
                const isLastWord = i === SLIDES[currentSlide].title.split(' ').length - 1;
                return (
                  <span key={i} className="inline-block mr-3 md:mr-5">
                    {isLastWord ? (
                      <span className="gradient-text">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                );
              })}
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light">
              {APP_CONFIG.tagline} Carnes selecionadas, pães exclusivos e técnicas de alta gastronomia.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a 
              href="#menu" 
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm smooth-transition shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 flex items-center justify-center gap-3"
            >
              Explorar Cardápio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
            </a>
            <button 
              className="group glass-effect border border-white/20 hover:border-amber-500 text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm smooth-transition hover:bg-white/5 flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5" />
              Ver História
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-6 hidden lg:flex flex-col items-center gap-4 text-white/50">
          <span className="text-xs uppercase tracking-widest vertical-text">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </div>

      {/* Hero Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full smooth-transition ${
              i === currentSlide 
                ? 'w-12 bg-amber-500 shadow-lg shadow-amber-500/50' 
                : 'w-6 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/20 md:to-transparent"></div>
          </div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
        <div className="max-w-3xl">
          <div key={currentSlide} className="animate-in fade-in slide-in-from-bottom md:slide-in-from-left duration-1000">
            <h2 className="text-amber-500 text-xs md:text-xl font-bold mb-4 tracking-[0.3em] uppercase">
              {SLIDES[currentSlide].subtitle}
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white mb-6 leading-[1.1] uppercase tracking-tighter">
              {SLIDES[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className="inline-block">
                  {word === 'Arte.' || word === 'Sentidos.' || word === 'Mordida.' ? (
                    <span className="text-amber-500">{word}&nbsp;</span>
                  ) : (
                    word + '\u00A0'
                  )}
                </span>
              ))}
            </h1>
            <p className="text-gray-300 text-base md:text-xl mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed opacity-80 font-light">
              {APP_CONFIG.tagline} Carnes selecionadas e pães exclusivos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <a 
              href="#menu" 
              className="bg-amber-500 hover:bg-amber-600 text-black px-10 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all shadow-xl shadow-amber-500/20 active:scale-95"
            >
              Explorar Cardápio
            </a>
            <button 
              className="group border border-white/20 hover:border-amber-500 hover:text-amber-500 text-white px-10 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all backdrop-blur-md flex items-center justify-center gap-2 active:scale-95"
            >
              Reservar Mesa
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Indicators - Mobile Otimizado */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-10 md:w-12 bg-amber-500' : 'w-4 bg-white/30'}`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
