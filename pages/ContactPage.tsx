import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <main className="pt-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Visite-nos, ligue ou nos encontre nas redes sociais
          </p>
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default ContactPage;
