import React, { useState, useRef, useEffect } from 'react';
import { Star, Flame } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

const FeaturedCarousel: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const featuredItems = MENU_ITEMS.filter(item => item.category === 'burgers').slice(0, 5);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 296; // 280px width + 16px gap
    const newPosition = index * scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    setScrollPosition(newPosition);
    setCurrentIndex(index);
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % featuredItems.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [featuredItems.length]);

  const scroll = (direction: 'left' | 'right') => {
    const nextIndex = direction === 'left'
      ? Math.max(0, currentIndex - 1)
      : Math.min(featuredItems.length - 1, currentIndex + 1);
    
    scrollToIndex(nextIndex);
    resetAutoPlay();
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const newPosition = scrollContainerRef.current.scrollLeft;
      setScrollPosition(newPosition);
      const newIndex = Math.round(newPosition / 296);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        resetAutoPlay();
      }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-black to-zinc-950 overflow-hidden md:hidden">
      <div className="px-4">
        <div className="mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              <span className="gradient-text">Destaques</span>
            </h2>
            <p className="text-gray-400 text-sm">Os mais pedidos</p>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[280px] snap-start"
            >
              <div className="glass-effect border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 active:scale-95">
                <div className="relative h-56">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  {/* Badge de destaque */}
                  <div className="absolute top-3 left-3">
                    {index === 0 && (
                      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Star size={14} fill="white" />
                        <span className="text-xs font-bold">Mais Vendido</span>
                      </div>
                    )}
                    {item.spicy && (
                      <div className="bg-red-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 mt-2">
                        <Flame size={14} />
                        <span className="text-xs font-semibold">Picante</span>
                      </div>
                    )}
                  </div>

                  {/* Preço */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-500/30">
                    <span className="text-amber-500 font-bold text-lg">
                      Consulte
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-amber-500" fill="#f59e0b" />
                      <span className="text-white font-semibold text-sm">4.8</span>
                      <span className="text-gray-400 text-xs">(127)</span>
                    </div>
                    <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold active:scale-95 transition-transform">
                      Ver mais
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de scroll */}
        <div className="flex justify-center gap-1.5 mt-6">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToIndex(index);
                resetAutoPlay();
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-6 bg-amber-500'
                  : 'w-1 bg-white/30 active:bg-white/50'
              }`}
              aria-label={`Ir para item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
