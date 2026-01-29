
import React, { useState } from 'react';
import { Sparkles, Brain, Loader2, ShoppingCart } from 'lucide-react';
import { getBurgerRecommendation } from '../services/geminiService';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

interface AISommelierProps {
  onAddToCart: (item: MenuItem) => void;
}

const AISommelier: React.FC<AISommelierProps> = ({ onAddToCart }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{ burger: MenuItem; reason: string } | null>(null);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await getBurgerRecommendation(input, MENU_ITEMS);
    
    if (result) {
      const burger = MENU_ITEMS.find(item => item.id === result.burgerId);
      if (burger) {
        setRecommendation({ burger, reason: result.reasoning });
      }
    }
    setLoading(false);
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-effect border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-500/20 to-amber-500/5 rounded-2xl flex items-center justify-center mb-6 relative group">
              <Brain className="w-8 h-8 md:w-10 md:h-10 text-amber-500 group-hover:scale-110 smooth-transition" />
              <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 smooth-transition"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              AI <span className="gradient-text font-serif italic">Sommelier</span>
            </h2>
            <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
              Descreva o seu desejo e deixe nossa inteligência gourmet escolher a harmonização perfeita para o seu paladar.
            </p>
          </div>

          <div className="relative mb-10">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: 'Algo picante com muito bacon' ou 'Opção vegetariana leve'"
              className="w-full glass-effect border border-white/10 rounded-2xl px-6 py-5 md:px-8 md:py-6 focus:border-amber-500/50 outline-none text-white smooth-transition placeholder:text-gray-600 text-sm md:text-base pr-32"
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            />
            <button 
              onClick={handleAsk}
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:opacity-50 text-black px-6 py-3 rounded-xl font-semibold smooth-transition flex items-center gap-2 hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <Sparkles size={18} />
              )}
              <span className="hidden sm:inline text-xs uppercase tracking-wider">Perguntar</span>
            </button>
          </div>

          {recommendation && (
            <div className="animate-fade-in-up mt-12 grid md:grid-cols-2 gap-8 items-center border-t border-white/10 pt-12">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl group">
                <img 
                  src={recommendation.burger.image} 
                  alt={recommendation.burger.name} 
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              <div>
                <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider mb-3 block">
                  Recomendação Exclusiva
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {recommendation.burger.name}
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 italic">
                  "{recommendation.reason}"
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span className="text-3xl font-bold text-white">
                    R$ {recommendation.burger.price.toFixed(2)}
                  </span>
                  <button 
                    onClick={() => onAddToCart(recommendation.burger)}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 smooth-transition hover:scale-105 shadow-lg shadow-amber-500/20 text-sm uppercase tracking-wider"
                  >
                    <ShoppingCart size={16} />
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AISommelier;
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-amber-500/10 rounded-[1.5rem] flex items-center justify-center mb-8 text-amber-500">
              <Brain size={32} className="md:w-10 md:h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
              AI <span className="text-amber-500 font-serif italic italic-none tracking-normal">Sommelier</span>
            </h2>
            <p className="text-gray-500 max-w-md text-sm md:text-lg leading-relaxed font-light">
              Descreva o seu desejo e deixe nossa inteligência gourmet escolher a harmonização perfeita para o seu paladar.
            </p>
          </div>

          <div className="relative mb-10 group">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: 'Algo picante com muito bacon'"
              className="w-full bg-white/5 border border-white/5 rounded-2xl md:rounded-full px-6 py-5 md:py-7 md:px-10 focus:border-amber-500/50 outline-none text-white transition-all placeholder:text-gray-700 text-sm md:text-base pr-20 md:pr-48"
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            />
            <button 
              onClick={handleAsk}
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 md:right-3 md:top-3 md:bottom-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black px-5 md:px-10 rounded-xl md:rounded-full font-bold transition-all flex items-center gap-2 active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={18} />}
              <span className="hidden md:inline uppercase text-xs tracking-widest">Recomendar</span>
            </button>
          </div>

          {recommendation && (
            <div className="animate-in fade-in slide-in-from-bottom duration-700 mt-16 grid md:grid-cols-2 gap-10 items-center border-t border-white/5 pt-16">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square shadow-2xl">
                <img src={recommendation.burger.image} alt={recommendation.burger.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="text-left">
                <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">A Escolha do Sommelier</span>
                <h4 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tighter">{recommendation.burger.name}</h4>
                <p className="text-gray-400 italic text-sm md:text-base leading-relaxed mb-8 relative">
                  <span className="text-4xl text-amber-500/20 absolute -top-4 -left-4 font-serif">"</span>
                  {recommendation.reason}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="text-2xl md:text-3xl font-bold text-white font-serif">R$ {recommendation.burger.price.toFixed(2)}</span>
                  <button 
                    onClick={() => onAddToCart(recommendation.burger)}
                    className="bg-white hover:bg-amber-500 text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all group active:scale-95 text-xs uppercase tracking-widest shadow-xl"
                  >
                    Adicionar
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AISommelier;
