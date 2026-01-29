import React from 'react';
import PreparationProcess from '../components/PreparationProcess';

const ProcessPage: React.FC = () => {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nosso <span className="gradient-text">Processo</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Conheça cada etapa da preparação de nossos hambúrgueres gourmet
          </p>
        </div>
      </div>
      <PreparationProcess />
    </main>
  );
};

export default ProcessPage;
