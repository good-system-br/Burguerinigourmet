import React from 'react';
import VideoShowcase from '../components/VideoShowcase';

const VideosPage: React.FC = () => {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vídeos em <span className="gradient-text">Destaque</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Acompanhe nossos vídeos exclusivos e conheça os detalhes da nossa produção
          </p>
        </div>
      </div>
      <VideoShowcase />
    </main>
  );
};

export default VideosPage;
