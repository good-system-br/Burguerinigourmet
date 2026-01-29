import React, { useState } from 'react';
import { Sparkles, Loader2, ChefHat } from 'lucide-react';
import { getBurgerRecommendation } from '../services/geminiService';
import { MENU_ITEMS } from '../constants';

const AISommelier: React.FC = () => {
  const [preferences, setPreferences] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetRecommendation = async () => {
    if (!preferences.trim()) return;

    setLoading(true);
    try {
      const result = await getBurgerRecommendation(preferences, MENU_ITEMS);
      setRecommendation(result);
    } catch (error) {
      setRecommendation('Desculpe, não consegui processar sua solicitação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-sommelier" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="text-amber-400" size={20} />
            <span className="text-amber-400 font-semibold">Inteligência Artificial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">IA Sommelier</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deixe nossa inteligência artificial recomendar o hambúrguer perfeito para você
          </p>
        </div>

        {/* AI Interface Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-amber-500 to-orange-600 p-6 rounded-full">
                  <ChefHat className="text-white" size={40} />
                </div>
              </div>
            </div>

            <div className="relative mb-10 group">
              <input
                type="text"
                placeholder="Ex: Quero algo picante e suculento..."
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleGetRecommendation()}
                className="w-full px-6 py-5 bg-black/40 border-2 border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-all duration-300 text-lg group-hover:border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            <button
              onClick={handleGetRecommendation}
              disabled={loading || !preferences.trim()}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  <span>Analisando suas preferências...</span>
                </>
              ) : (
                <>
                  <Sparkles size={24} />
                  <span>Obter Recomendação</span>
                </>
              )}
            </button>

            {recommendation && (
              <div className="mt-10 p-8 bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/30 rounded-2xl animate-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-xl">
                    <ChefHat className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-400 mb-3">Recomendação do Chef IA:</h3>
                    <p className="text-gray-200 leading-relaxed whitespace-pre-line text-lg">
                      {recommendation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass-effect border border-white/10 rounded-2xl p-6 text-center group hover:border-amber-500/30 transition-all duration-300">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Personalizado</h3>
              <p className="text-gray-400 text-sm">Recomendações baseadas em suas preferências</p>
            </div>
            <div className="glass-effect border border-white/10 rounded-2xl p-6 text-center group hover:border-amber-500/30 transition-all duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Instantâneo</h3>
              <p className="text-gray-400 text-sm">Respostas em segundos com IA avançada</p>
            </div>
            <div className="glass-effect border border-white/10 rounded-2xl p-6 text-center group hover:border-amber-500/30 transition-all duration-300">
              <div className="text-4xl mb-3">🍔</div>
              <h3 className="text-lg font-bold text-white mb-2">Especializado</h3>
              <p className="text-gray-400 text-sm">Conhecimento profundo do nosso cardápio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISommelier;
