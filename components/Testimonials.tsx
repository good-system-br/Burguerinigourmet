import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marina Silva',
      role: 'Food Blogger',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      text: 'Sem dúvida o melhor hambúrguer gourmet que já provei em São Paulo. A qualidade dos ingredientes é excepcional e o blend de carnes é simplesmente perfeito.'
    },
    {
      name: 'Roberto Costa',
      role: 'Empresário',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      text: 'Atendimento impecável e um ambiente sofisticado. Virou meu lugar favorito para reuniões de negócios e almoços em família.'
    },
    {
      name: 'Ana Paula',
      role: 'Chef de Cozinha',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      text: 'Como chef, sou muito crítica com comida, mas a Burguerini surpreendeu. A técnica no preparo e a combinação de sabores são de nível profissional.'
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Decorative quote */}
      <Quote className="absolute top-20 left-10 w-32 h-32 text-amber-500/5" />
      <Quote className="absolute bottom-20 right-10 w-32 h-32 text-amber-500/5 rotate-180" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-amber-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Depoimentos
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            O Que Dizem <span className="gradient-text">Nossos Clientes</span>
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Avaliações de quem já vivenciou a experiência Burguerini Gourmet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl glass-effect hover:bg-white/5 smooth-transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/20"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl smooth-transition pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">5.0</div>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Avaliação Média</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">10k+</div>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Clientes Felizes</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">50k+</div>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Burgers Vendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
