import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

const GoogleReviews: React.FC = () => {
  // Adicione as avaliações reais do Google aqui
  const reviews: Review[] = [
    {
      name: 'João Santos',
      rating: 5,
      text: 'Melhor hambúrguer que já comi! Os ingredientes são de excelente qualidade e o atendimento é impecável. Voltarei com certeza!',
      date: 'há 2 semanas',
      verified: true
    },
    {
      name: 'Maria Oliveira',
      rating: 5,
      text: 'Experiência gastronômica incrível. Recomendo para todos que querem provar um hambúrguer gourmet de verdade.',
      date: 'há 1 mês',
      verified: true
    },
    {
      name: 'Carlos Ferreira',
      rating: 5,
      text: 'Atendimento nota 10! O hambúrguer derrete na boca. Preço justo para a qualidade oferecida. Lugar impecável!',
      date: 'há 3 semanas',
      verified: true
    },
    {
      name: 'Ana Costa',
      rating: 5,
      text: 'Cada detalhe é cuidado com amor. Desde a seleção dos ingredientes até a apresentação, tudo é perfeito.',
      date: 'há 1 semana',
      verified: true
    },
    {
      name: 'Roberto Lima',
      rating: 5,
      text: 'Lugar aconchegante, comida deliciosa e equipe atenciosa. Uma verdadeira joia gastronômica!',
      date: 'há 10 dias',
      verified: true
    },
    {
      name: 'Patricia Souza',
      rating: 5,
      text: 'Superou minhas expectativas! Voltei 3 vezes em um mês. É o hambúrguer gourmet que Camanducaia precisava.',
      date: 'há 5 dias',
      verified: true
    }
  ];

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="google-reviews" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fadeInUp">
          <h2 className="text-amber-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Avaliações
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Avaliações <span className="gradient-text">Google</span>
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Veja o que nossos clientes reais dizem sobre a Burguerini Gourmet
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-12 mb-16 animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Rating Score */}
            <div className="text-center md:border-r md:border-white/10">
              <div className="text-6xl font-bold text-amber-500 mb-4">{averageRating}</div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm">Baseado em {reviews.length} avaliações</p>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-4 md:col-span-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = reviews.filter(r => r.rating === rating).length;
                const percentage = (count / reviews.length) * 100;
                return (
                  <div key={rating} className="flex items-center gap-4">
                    <div className="flex items-center gap-2 min-w-[80px]">
                      <span className="text-white font-semibold text-sm">{rating}</span>
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    </div>
                    <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-600"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-sm min-w-[40px] text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass-effect border border-white/10 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:bg-white/5 animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Header com nome e rating */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                  <p className="text-gray-400 text-xs mt-1">{review.date}</p>
                </div>
                {review.verified && (
                  <span className="bg-green-500/20 border border-green-500/50 text-green-400 text-xs px-2 py-1 rounded-full font-semibold">
                    Verificado
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed">
                "{review.text}"
              </p>

              {/* Google badge */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="text-gray-400 text-xs">Google Avaliações</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fadeInUp">
          <a
            href="https://share.google/ALnTWT0IM9q9fqQy6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:scale-105 active:scale-95"
          >
            Ver Todas as Avaliações no Google
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
              <path d="M11 3v2h3.59l-9.83 9.83 1.41 1.41L16 7.41V11h2V3h-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
