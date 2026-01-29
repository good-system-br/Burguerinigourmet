import React from 'react';
import { Flame, Droplets, Leaf, Award } from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  details: string[];
}

const PreparationProcess: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      id: 1,
      icon: <Award size={32} />,
      title: 'Seleção de Ingredientes',
      description: 'Começamos com a cuidadosa seleção dos melhores ingredientes do mercado',
      image: './assets/lanche.jpeg',
      details: [
        'Carnes premium de fornecedores certificados',
        'Queijos artesanais importados',
        'Pães feitos diariamente em fornaria própria',
        'Vegetais frescos de produtores locais'
      ]
    },
    {
      id: 2,
      icon: <Droplets size={32} />,
      title: 'Preparação do Molho',
      description: 'Nossos molhos são produzidos artesanalmente com receitas exclusivas',
      image: './assets/lanche1.jpeg',
      details: [
        'Fermentação natural de 48 horas',
        'Temperos selecionados manualmente',
        'Sem conservantes ou aditivos artificiais',
        'Teste de qualidade a cada lote'
      ]
    },
    {
      id: 3,
      icon: <Flame size={32} />,
      title: 'Cocção Perfeita',
      description: 'Grelhamos cada hambúrguer em temperatura controlada para o ponto ideal',
      image: './assets/lanche.jpeg',
      details: [
        'Temperatura calibrada por termômetro digital',
        'Tempo de cocção preciso para cada tipo',
        'Cuidado manual em todas as etapas',
        'Repouso adequado da carne'
      ]
    },
    {
      id: 4,
      icon: <Leaf size={32} />,
      title: 'Montagem e Apresentação',
      description: 'Montamos cada hambúrguer com precisão e cuidado estético',
      image: './assets/lanche1.jpeg',
      details: [
        'Sequência estratégica de ingredientes',
        'Pré-aquecimento do pão na manteiga',
        'Embalagem especial de apresentação',
        'Entrega em tempo recorde'
      ]
    }
  ];

  return (
    <section id="process" className="relative py-20 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nosso <span className="gradient-text">Processo</span> de Preparação
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Cada hambúrguer é preparado com precisão, paixão e atenção aos detalhes. Conheça as etapas que transformam ingredientes premium em uma experiência gastronômica única.
          </p>
        </div>

        {/* Timeline Process */}
        <div className="space-y-16 mb-20">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fadeInUp`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Content - Alternates left/right */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                {/* Step number and icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-amber-500 font-bold uppercase tracking-wider">Etapa {step.id}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-200">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 w-1 h-32 bg-gradient-to-b from-amber-500/50 to-transparent mt-12 -ml-0.5"></div>
                )}
              </div>

              {/* Image - Alternates left/right */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-amber-500/30 hover:border-amber-500/60 transition-all duration-300">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-semibold text-lg">{step.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Section */}
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-12 animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
                <Award size={32} className="text-black" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Qualidade Garantida</h4>
              <p className="text-gray-300 text-sm">Padrão de qualidade rigoroso em cada etapa</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
                <Flame size={32} className="text-black" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Cocção Ideal</h4>
              <p className="text-gray-300 text-sm">Temperatura perfeita para cada hamburger</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
                <Droplets size={32} className="text-black" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Molhos Artesanais</h4>
              <p className="text-gray-300 text-sm">Receitas exclusivas criadas com paixão</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
                <Leaf size={32} className="text-black" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Ingredientes Frescos</h4>
              <p className="text-gray-300 text-sm">100% naturais e sem conservantes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreparationProcess;
