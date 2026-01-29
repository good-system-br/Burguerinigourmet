import React from 'react';
import { MapPin, Phone, Clock, Truck, Package, UtensilsCrossed, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para atender você da melhor forma possível
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Informações */}
          <div className="space-y-8 animate-on-scroll">
            {/* Localização */}
            <div className="glass-effect border border-white/10 rounded-3xl p-8">
              <div className="flex gap-4 items-start">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 rounded-xl">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Localização</h3>
                  <p className="text-gray-300 text-lg font-semibold">
                    Rua Silviano Brandão, 321
                  </p>
                  <p className="text-gray-400">
                    Camanducaia - MG
                  </p>
                </div>
              </div>
            </div>

            {/* Telefone */}
            <div className="glass-effect border border-white/10 rounded-3xl p-8">
              <div className="flex gap-4 items-start">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                  <a 
                    href="tel:+553598472-5145"
                    className="text-amber-400 text-lg font-bold hover:text-amber-300 transition-colors duration-300"
                  >
                    (35) 98472-5145
                  </a>
                  <p className="text-gray-400 mt-1">
                    Clique para ligar
                  </p>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="glass-effect border border-white/10 rounded-3xl p-8">
              <div className="flex gap-4 items-start">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl">
                  <Clock className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Horário de Funcionamento</h3>
                  <p className="text-white font-semibold text-lg">
                    Quinta à Domingo
                  </p>
                  <p className="text-amber-400 font-bold text-lg">
                    19:00 às 23:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-3xl font-bold text-white mb-8">Nossos Serviços</h3>

            <div className="glass-effect border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-xl">
                  <Truck className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Delivery</h4>
                  <p className="text-gray-300">
                    Entrega rápida e segura na sua casa
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-xl">
                  <Package className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Take Away</h4>
                  <p className="text-gray-300">
                    Retire seu pedido quando estiver pronto
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-xl">
                  <UtensilsCrossed className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Table Service</h4>
                  <p className="text-gray-300">
                    Venha nos visitar e aproveite a experiência
                  </p>
                </div>
              </div>
            </div>

            {/* Botão CTA */}
            <a 
              href="https://wa.me/553598472-5145?text=Olá! Gostaria de fazer um pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mt-4"
            >
              <Phone size={24} />
              <span>Enviar Mensagem WhatsApp</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/burguerini/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-5 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <Instagram size={24} />
              <span>Seguir no Instagram</span>
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16 animate-on-scroll">
          <div className="glass-effect border border-white/10 rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.524532147865!2d-46.08666!3d-22.73583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5c3f5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sRua%20Silviano%20Brand%C3%A3o%2C%20321%20-%20Camanducaia%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              title="Localização Burguerini Gourmet"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
