import React from 'react';
import { Award, Clock, Heart, Shield, Sparkles, Users, ChefHat, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Ingredientes Premium',
      description: 'Carnes selecionadas de fornecedores certificados e ingredientes importados de alta qualidade.',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      iconColor: 'text-amber-500',
    },
    {
      icon: Zap,
      title: 'Feito na Hora',
      description: 'Cada hambúrguer é preparado no momento do pedido para garantir frescor e sabor máximos.',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      iconColor: 'text-yellow-500',
    },
    {
      icon: ChefHat,
      title: 'Receitas Exclusivas',
      description: 'Blends e molhos desenvolvidos pelo nosso chef com técnicas de alta gastronomia.',
      color: 'from-primary-500 to-orange-600',
      bgColor: 'bg-primary-500/10',
      borderColor: 'border-primary-500/20',
      iconColor: 'text-primary-500',
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Controle rigoroso de qualidade em todas as etapas de preparo e apresentação.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      iconColor: 'text-green-500',
    },
    {
      icon: Sparkles,
      title: 'Experiência Única',
      description: 'Ambiente sofisticado que combina conforto, elegância e a paixão pela boa comida.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      iconColor: 'text-purple-500',
    },
    {
      icon: Users,
      title: 'Atendimento VIP',
      description: 'Equipe treinada para proporcionar uma experiência memorável do início ao fim.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      iconColor: 'text-blue-500',
    }
  ];

  return (
    <section id="benefits" className="relative py-24 md:py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/5 blur-[140px] rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary-500/5 blur-[140px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header - SaaS Style */}
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 glass-effect-strong border border-primary-500/20 rounded-full px-5 py-2">
            <Sparkles className="text-primary-500" size={16} />
            <span className="text-primary-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
              Por Que Escolher
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-4">
            A <span className="gradient-text">Experiência</span> Burguerini
          </h2>
          
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Cada detalhe foi pensado para proporcionar não apenas uma refeição, mas uma verdadeira experiência gastronômica.
          </p>
        </div>

        {/* Benefits Grid - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Card Container */}
              <div className="relative h-full p-8 rounded-3xl glass-effect border border-white/5 hover:border-white/10 smooth-transition hover-lift overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 smooth-transition rounded-3xl`}></div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.bgColor} border ${benefit.borderColor} group-hover:scale-110 smooth-transition`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                  </div>
                  
                  {/* Decorative Glow */}
                  <div className={`absolute top-0 left-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 blur-xl smooth-transition`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-500 smooth-transition">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed group-hover:text-neutral-300 smooth-transition">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                
                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 blur-2xl smooth-transition`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 glass-effect-strong border border-primary-500/20 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                <Heart className="text-primary-500" size={24} fill="currentColor" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Feito com <span className="gradient-text">Paixão</span>
              </h3>
            </div>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl">
              Mais de 10 anos dedicados à arte da gastronomia gourmet, 
              trazendo sabores únicos para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
