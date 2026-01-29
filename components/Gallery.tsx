import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: GalleryImage[] = [
    {
      id: '1',
      src: './assets/lanche.jpeg',
      title: 'Burger Clássico Gourmet',
      description: 'Nossa receita clássica com ingredientes premium selecionados'
    },
    {
      id: '2',
      src: './assets/lanche1.jpeg',
      title: 'Burger Especial',
      description: 'Combinação exclusiva com molhos artesanais'
    },
    {
      id: '3',
      src: './assets/lanche.jpeg',
      title: 'Burger Vegano Premium',
      description: 'Opção deliciosa e nutritiva para vegetarianos'
    },
    {
      id: '4',
      src: './assets/lanche1.jpeg',
      title: 'Burger Bacon & Queijo',
      description: 'Clássico irresistível com bacon artesanal'
    },
    {
      id: '5',
      src: './assets/lanche.jpeg',
      title: 'Burger Trufa Negra',
      description: 'Requinte máximo com trufa negra e queijos nobres'
    },
    {
      id: '6',
      src: './assets/lanche1.jpeg',
      title: 'Burger Picante Explosivo',
      description: 'Para quem gosta de adrenalina e sabor intenso'
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    if (selectedImage) {
      const nextIndex = (images.findIndex(img => img.id === selectedImage.id) + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    if (selectedImage) {
      const prevIndex = (images.findIndex(img => img.id === selectedImage.id) - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="relative py-20 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa <span className="gradient-text">Galeria</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Conheça a variedade de hambúrgueres gourmet que preparamos com paixão e qualidade
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group cursor-pointer relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                <p className="text-gray-200 text-sm">{image.description}</p>
              </div>

              {/* Glass effect border */}
              <div className="absolute inset-0 glass-effect pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fadeInUp">
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transform hover:scale-105 active:scale-95">
            Ver Cardápio Completo
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog" aria-modal="true"
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeInUp p-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 z-10"
          >
            <X size={24} className="text-white md:w-7 md:h-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 md:left-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft size={20} className="text-white md:w-7 md:h-7" />
          </button>

          <div className="max-w-4xl w-full mx-auto flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[50vh] md:max-h-[60vh] object-cover rounded-xl md:rounded-2xl border border-amber-500/50"
            />
            <div className="mt-4 md:mt-8 text-center max-h-[15vh] overflow-y-auto px-2">
              <h3 className="text-white text-lg md:text-3xl font-bold mb-2 md:mb-3">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm md:text-lg">{selectedImage.description}</p>
            </div>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-3 md:gap-4 w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="w-full md:w-auto bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-semibold"
              >
                Fechar
              </button>
              <a
                href="/menu"
                className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black px-5 py-3 rounded-xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                Ver Cardápio
              </a>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 hover:scale-110 z-10"
          >
            <ChevronRight size={20} className="text-white md:w-7 md:h-7" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
