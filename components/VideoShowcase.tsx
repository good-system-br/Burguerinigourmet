import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
}

const VideoShowcase: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: '1',
      title: 'Preparação do Burger Clássico',
      description: 'Veja como preparamos nosso burger clássico com técnicas de alta gastronomia',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: './assets/lanche.jpeg',
      duration: '3:45'
    },
    {
      id: '2',
      title: 'Hambúrguer Trufa Negra',
      description: 'Conheça nossa receita premium com trufa negra e queijos selecionados',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: './assets/lanche1.jpeg',
      duration: '4:12'
    },
    {
      id: '3',
      title: 'Tour pela Cozinha',
      description: 'Conheça nossa cozinha premium e os processos de qualidade',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: './assets/lanche.jpeg',
      duration: '5:30'
    },
  ];

  return (
    <section id="videos" className="relative py-20 bg-gradient-to-b from-black to-black/50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vídeos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Acompanhe nossos vídeos exclusivos e conheça os detalhes da nossa produção
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer relative h-64 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-amber-500/50">
                  <Play size={32} className="text-black fill-black ml-1" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <span className="text-xs bg-amber-500/20 border border-amber-500/50 text-amber-400 px-3 py-1 rounded-full font-semibold">
                    {video.duration}
                  </span>
                </div>
                <p className="text-gray-300 text-sm line-clamp-2">{video.description}</p>
              </div>

              {/* Glass effect */}
              <div className="absolute inset-0 glass-effect pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Featured Video Section */}
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 rounded-3xl p-8 md:p-12 animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Video */}
            <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-amber-500/50">
              <img
                src="./assets/lanche.jpeg"
                alt="Featured"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center hover:scale-125 transition-transform duration-300 shadow-2xl shadow-amber-500/50">
                  <Play size={40} className="text-black fill-black ml-1" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                O Segredo por Trás do Sabor
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Descubra como selecionamos os melhores ingredientes, preparamos nossas receitas exclusivas e garantimos a qualidade premium em cada hambúrguer que servimos.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Ingredientes 100% premium selecionados
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Técnicas de alta gastronomia aplicadas
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Padrão de qualidade rigoroso
                </li>
              </ul>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:scale-105 active:scale-95">
                Assistir Completo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeInUp p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 z-10"
          >
            <X size={24} className="text-white md:w-7 md:h-7" />
          </button>

          <div className="max-w-4xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
            {/* Video container */}
            <div className="relative w-full pb-[56.25%] mb-6">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="absolute top-0 left-0 w-full h-full rounded-xl md:rounded-2xl border-2 border-amber-500/50"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            {/* Info - Scrollable on mobile */}
            <div className="max-h-[30vh] md:max-h-none overflow-y-auto md:overflow-visible px-2 md:px-0">
              <h3 className="text-white text-xl md:text-3xl font-bold mb-2 md:mb-3">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-sm md:text-lg">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcase;
