import React from 'react';
import { Award, Heart, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-24 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl smooth-transition blur-xl"></div>
            <img 
              src="./assets/lanche.jpeg"
              alt="Chef preparing burger" 
              className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
            />
          </div>
          <div>
            <h2 className="text-amber-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
              Nossa Essência
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Onde a Paixão se Torna <span className="gradient-text">Paladar</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A Burguerini Gourmet nasceu de um sonho simples: transformar o hambúrguer em uma experiência de alta gastronomia sem perder a alma rústica que o define.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Cada detalhe, da escolha do sal de flor à maturação da carne, é pensado para que cada mordida conte uma história de dedicação e sabor.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-black/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada hambúrguer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/30">
                <Award size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excelência</h3>
              <p className="text-gray-300 leading-relaxed">
                Buscamos a perfeição em cada aspecto, desde a seleção de ingredientes até a apresentação final. Qualidade premium não é negociável.
              </p>
            </div>

            <div className="glass-effect border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/30">
                <Heart size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Paixão</h3>
              <p className="text-gray-300 leading-relaxed">
                Cada hambúrguer é preparado com amor e dedicação. Nossa paixão pela gastronomia se reflete em cada detalhe que criamos.
              </p>
            </div>

            <div className="glass-effect border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/30">
                <Zap size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Inovação</h3>
              <p className="text-gray-300 leading-relaxed">
                Combinamos tradição com criatividade, criando receitas inovadoras que respeitam a essência do hambúrguer artesanal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-b from-black/50 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3">10k+</div>
              <p className="text-xl text-gray-300">Clientes Felizes</p>
              <p className="text-gray-400 mt-2">Satisfação é nossa prioridade</p>
            </div>

            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3">50k+</div>
              <p className="text-xl text-gray-300">Hambúrgueres Vendidos</p>
              <p className="text-gray-400 mt-2">Cada um preparado com cuidado</p>
            </div>

            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3">5★</div>
              <p className="text-xl text-gray-300">Avaliação Média</p>
              <p className="text-gray-400 mt-2">Confiança e qualidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-black to-black/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para <span className="gradient-text">Experimentar?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Visite-nos e descubra por que nossos clientes voltam sempre
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/cardapio" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-10 py-4 rounded-full font-semibold uppercase tracking-wider text-sm smooth-transition shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
            >
              Ver Cardápio
            </a>
            <a 
              href="/contato" 
              className="glass-effect border border-white/20 hover:border-amber-500 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-wider text-sm smooth-transition hover:bg-white/5"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
