
import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-end animate-fade-in">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full md:max-w-md h-[90vh] md:h-full bg-zinc-950 shadow-2xl flex flex-col animate-fade-in-up md:animate-slide-in-left rounded-t-[2rem] md:rounded-none border-t md:border-l border-white/10">
        {/* Handle for mobile */}
        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>
        
        <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
              <ShoppingBag className="text-amber-500 w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Seu Carrinho</h2>
              <p className="text-xs text-gray-500">{items.length} {items.length === 1 ? 'item' : 'itens'}</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2.5 text-gray-400 hover:text-white hover:bg-white/5 smooth-transition rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 md:p-8 flex flex-col gap-6 no-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag size={32} className="text-gray-600" />
              </div>
              <p className="text-lg font-semibold text-white mb-2">Carrinho Vazio</p>
              <p className="text-sm text-gray-500 mb-6">Adicione itens do menu para começar</p>
              <button 
                onClick={onClose} 
                className="text-amber-500 font-semibold text-sm hover:text-amber-400 smooth-transition"
              >
                Explorar Menu
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 glass-effect p-4 rounded-2xl border border-white/5 hover:border-white/10 smooth-transition">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                    <button 
                      onClick={() => onRemove(item.id)} 
                      className="text-gray-500 hover:text-red-500 smooth-transition p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-lg glass-effect border border-white/10 flex items-center justify-center text-white hover:bg-white/10 smooth-transition"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-white font-semibold text-sm min-w-[20px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-lg glass-effect border border-white/10 flex items-center justify-center text-white hover:bg-white/10 smooth-transition"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-amber-500 font-bold text-sm">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 md:p-8 border-t border-white/10 glass-effect">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 text-sm font-medium">Total</span>
              <span className="text-3xl font-bold text-white">R$ {total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black py-4 rounded-xl font-semibold uppercase tracking-wider text-sm smooth-transition shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105">
              Finalizar Pedido
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              Taxa de entrega calculada no checkout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
        {/* Handle for mobile */}
        <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>
        
        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-amber-500 w-5 h-5 md:w-6 md:h-6" />
            <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-tighter">Sua Sacola</h2>
          </div>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-full">
            <X size={20} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 md:p-8 flex flex-col gap-8 no-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-600">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag size={32} className="opacity-20" />
              </div>
              <p className="text-lg font-medium italic">Vazio por enquanto...</p>
              <button onClick={onClose} className="text-amber-500 font-bold mt-4 text-xs uppercase tracking-widest">Ver Menu</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-5 group">
                <div className="relative w-24 h-24 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full rounded-2xl object-cover border border-white/5" />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-gray-600 hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p className="text-amber-500 font-bold text-sm mb-4 font-serif">R$ {(item.price * item.quantity).toFixed(2)}</p>
                  
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-90"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-white font-bold text-sm w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-90"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-white/5 bg-black/50 backdrop-blur-xl rounded-t-3xl md:rounded-none">
            <div className="flex justify-between items-center mb-8">
              <span className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold">Subtotal</span>
              <span className="text-3xl font-bold text-white font-serif">R$ {total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-black py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all transform active:scale-95 shadow-xl shadow-amber-500/20">
              Finalizar Pedido
            </button>
            <p className="text-[10px] text-gray-600 text-center mt-6 uppercase tracking-widest font-medium">
              Taxa de entrega calculada no checkout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
