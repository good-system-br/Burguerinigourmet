import React from 'react';
import { Award, Clock, Heart, Shield, Sparkles, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Ingredientes Premium',
      description: 'Carnes selecionadas de fornecedores certificados e ingredientes importados de alta qualidade.'
    },
    {
      icon: Clock,
      title: 'Feito na Hora',
      description: 'Cada hambúrguer é preparado no momento do pedido para garantir frescor e sabor máximos.'
    },
    {
      icon: Heart,
      title: 'Receitas Exclusivas',
      description: 'Blends e molhos desenvolvidos pelo nosso chef com técnicas de alta gastronomia.'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Controle rigoroso de qualidade em todas as etapas de preparo e apresentação.'
    },
    {
      icon: Sparkles,
      title: 'Experiência Única',
      description: 'Ambiente sofisticado que combina conforto, elegância e a paixão pela boa comida.'
    },
    {
      icon: Users,
      title: 'Atendimento VIP',
      description: 'Equipe treinada para proporcionar uma experiência memorável do início ao fim.'
    }
  ];

  return (
    <section id="benefits" className="relative py-24 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-amber-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Por Que Escolher
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            A <span className="gradient-text">Experiência</span> Burguerini
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada detalhe foi pensado para proporcionar não apenas uma refeição, mas uma verdadeira experiência gastronômica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl glass-effect hover:bg-white/5 smooth-transition"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl smooth-transition"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:scale-110 smooth-transition">
                  <benefit.icon className="w-7 h-7 text-amber-500" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 smooth-transition">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
