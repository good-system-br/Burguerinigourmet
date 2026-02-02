import React from 'react';
import { MapPin, Phone, Clock, Truck, Package, UtensilsCrossed, Instagram, Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-500/5 blur-[140px] rounded-full animate-float"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary-500/5 blur-[140px] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 glass-effect-strong border border-primary-500/20 rounded-full px-5 py-2">
            <MessageCircle className="text-primary-500" size={16} />
            <span className="text-primary-500 text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
              Fale Conosco
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Estamos prontos para atender você da melhor forma possível
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location Card */}
            <div className="group glass-effect-strong border border-white/10 hover:border-primary-500/30 rounded-3xl p-8 smooth-transition hover-lift">
              <div className="flex gap-5 items-start">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-glow">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div className="absolute inset-0 bg-primary-500 blur-xl opacity-30 rounded-2xl"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary-500 smooth-transition">
                    Localização
                  </h3>
                  <p className="text-white text-lg font-semibold mb-1">
                    Rua Silviano Brandão, 321
                  </p>
                  <p className="text-neutral-400 text-base">
                    Camanducaia - MG
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group glass-effect-strong border border-white/10 hover:border-green-500/30 rounded-3xl p-8 smooth-transition hover-lift">
              <div className="flex gap-5 items-start">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg shadow-green-500/30">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div className="absolute inset-0 bg-green-500 blur-xl opacity-30 rounded-2xl"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-500 smooth-transition">
                    Telefone
                  </h3>
                  <a 
                    href="tel:+553598472-5145"
                    className="text-primary-400 text-xl font-bold hover:text-primary-300 smooth-transition inline-block"
                  >
                    (35) 98472-5145
                  </a>
                  <p className="text-neutral-400 mt-2 text-sm">
                    Clique para ligar
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="group glass-effect-strong border border-white/10 hover:border-blue-500/30 rounded-3xl p-8 smooth-transition hover-lift">
              <div className="flex gap-5 items-start">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div className="absolute inset-0 bg-blue-500 blur-xl opacity-30 rounded-2xl"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-500 smooth-transition">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-white font-semibold text-lg mb-1">
                    Quinta à Domingo
                  </p>
                  <p className="text-primary-400 font-bold text-xl">
                    19:00 às 23:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & CTA */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Nossos <span className="gradient-text">Serviços</span>
            </h3>

            {/* Service Cards */}
            <div className="space-y-4">
              <div className="group glass-effect border border-white/10 hover:border-primary-500/30 rounded-2xl p-6 smooth-transition">
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-primary-500/20 rounded-xl group-hover:bg-primary-500/30 smooth-transition">
                    <Truck className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Delivery</h4>
                    <p className="text-neutral-400 text-sm">
                      Entrega rápida e segura na sua casa
                    </p>
                  </div>
                </div>
              </div>

              <div className="group glass-effect border border-white/10 hover:border-primary-500/30 rounded-2xl p-6 smooth-transition">
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-primary-500/20 rounded-xl group-hover:bg-primary-500/30 smooth-transition">
                    <Package className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Take Away</h4>
                    <p className="text-neutral-400 text-sm">
                      Retire seu pedido quando estiver pronto
                    </p>
                  </div>
                </div>
              </div>

              <div className="group glass-effect border border-white/10 hover:border-primary-500/30 rounded-2xl p-6 smooth-transition">
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-primary-500/20 rounded-xl group-hover:bg-primary-500/30 smooth-transition">
                    <UtensilsCrossed className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Table Service</h4>
                    <p className="text-neutral-400 text-sm">
                      Venha nos visitar e aproveite a experiência
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-6">
              <a 
                href="https://wa.me/553598472-5145?text=Olá! Gostaria de fazer um pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-green-700 smooth-transition shadow-lg shadow-green-500/30 hover:shadow-glow transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <Phone size={24} className="relative z-10" />
                <span className="relative z-10">Enviar Mensagem WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </a>

              <a 
                href="https://www.instagram.com/burguerini/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-5 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 smooth-transition shadow-lg shadow-pink-500/30 hover:shadow-glow transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <Instagram size={24} className="relative z-10" />
                <span className="relative z-10">Seguir no Instagram</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="glass-effect-strong border border-white/10 rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl hover:border-primary-500/30 smooth-transition">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.524532147865!2d-46.08666!3d-22.73583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5c3f5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sRua%20Silviano%20Brand%C3%A3o%2C%20321%20-%20Camanducaia%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              title="Localização Burguerini Gourmet"
              className="grayscale hover:grayscale-0 smooth-transition"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
