import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import type { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
}) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const message = items
      .map((item) => `${item.quantity}x ${item.name}`)
      .join('\n');
    const whatsappUrl = `https://wa.me/553598472-5145?text=${encodeURIComponent(
      `Olá! Gostaria de fazer o seguinte pedido:\n\n${message}`
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      <div className="relative w-screen md:w-[600px] max-h-[90vh] md:max-h-[85vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 border-0 md:border border-white/10 md:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col">
        <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mt-3 mb-2 md:hidden"></div>

        <div className="p-4 md:p-8 border-b border-white/5 flex items-center justify-between" style={{paddingTop: "max(1rem, env(safe-area-inset-top))"}}>
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-amber-500 w-5 h-5 md:w-6 md:h-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Seu Pedido</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 flex-shrink-0"
          >
            <X className="text-gray-400 hover:text-white w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          {items.length === 0 ? (
            <div className="text-center py-12 md:py-16">
              <ShoppingBag className="mx-auto text-gray-600 mb-4 w-14 h-14 md:w-20 md:h-20" />
              <p className="text-gray-400 text-base md:text-lg">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-3 md:space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="glass-effect border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-6 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="flex gap-3 md:gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg md:rounded-xl ring-1 md:ring-2 ring-white/10 flex-shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-sm md:text-lg mb-1 truncate">{item.name}</h3>
                      <p className="text-amber-400 font-bold text-base md:text-xl mb-2 md:mb-3">R$ {item.price.toFixed(2)}</p>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 md:gap-3 bg-black/40 rounded-lg md:rounded-xl p-1 md:p-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-2 md:p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 min-h-[36px] md:min-h-[44px] min-w-[36px] md:min-w-[44px] flex items-center justify-center active:scale-90"
                          >
                            <Minus size={14} className="text-white md:w-4 md:h-4" />
                          </button>
                          <span className="w-8 md:w-12 text-center font-bold text-white text-xs md:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-2 md:p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 min-h-[36px] md:min-h-[44px] min-w-[36px] md:min-w-[44px] flex items-center justify-center active:scale-90"
                          >
                            <Plus size={14} className="text-white md:w-4 md:h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="p-2 md:p-2.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors duration-300 min-h-[36px] md:min-h-[44px] min-w-[36px] md:min-w-[44px] flex items-center justify-center active:scale-90"
                        >
                          <Trash2 size={16} className="text-red-400 md:w-5 md:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 md:p-8 border-t border-white/5 bg-black/40" style={{paddingBottom: "max(1rem, calc(env(safe-area-inset-bottom) + 1rem))"}}>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <span className="text-gray-400 text-base md:text-xl">Total:</span>
              <span className="text-2xl md:text-4xl font-bold gradient-text">Consulte</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 md:py-5 px-4 rounded-xl md:rounded-2xl font-bold text-base md:text-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 transform active:scale-95 min-h-[44px] md:min-h-[48px]"
            >
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
