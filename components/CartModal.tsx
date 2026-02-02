import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-screen md:w-[650px] max-h-[90vh] md:max-h-[85vh] bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border-0 md:border border-white/10 md:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
        {/* Mobile Handle */}
        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-3 mb-2 md:hidden"></div>

        {/* Header */}
        <div className="relative p-6 md:p-8 border-b border-white/10 flex items-center justify-between" style={{paddingTop: "max(1.5rem, env(safe-area-inset-top))"}}>
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-500/20 rounded-2xl border border-primary-500/30">
              <ShoppingBag className="text-primary-500 w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Seu Pedido</h2>
              <p className="text-sm text-neutral-400">{items.length} {items.length === 1 ? 'item' : 'itens'}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="group p-3 rounded-2xl glass-effect border border-white/10 hover:border-red-500/30 hover:bg-red-500/10 transition-all duration-300 flex-shrink-0"
          >
            <X className="text-neutral-400 group-hover:text-red-500 w-5 h-5 md:w-6 md:h-6 transition-colors" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
          {items.length === 0 ? (
            <div className="text-center py-16 md:py-20 space-y-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-neutral-800/50 border border-white/10">
                <ShoppingBag className="text-neutral-600 w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Carrinho Vazio</h3>
                <p className="text-neutral-400 text-base">Adicione itens deliciosos ao seu pedido</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="group glass-effect-strong border border-white/10 hover:border-primary-500/30 rounded-2xl p-4 md:p-6 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    opacity: 0,
                    animation: 'fadeInUp 0.4s ease-out forwards'
                  }}
                >
                  <div className="flex gap-4">
                    {/* Item Image */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl ring-2 ring-white/10"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-white text-base md:text-lg mb-1 line-clamp-1 group-hover:text-primary-500 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-primary-400 font-bold text-lg md:text-xl">
                          R$ {item.price.toFixed(2).replace('.', ',')}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between gap-3 mt-3">
                        <div className="flex items-center gap-2 glass-effect rounded-2xl p-1.5 border border-white/10">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-2 rounded-xl bg-white/10 hover:bg-primary-500/20 hover:text-primary-500 transition-all duration-300 min-h-[40px] min-w-[40px] flex items-center justify-center active:scale-90"
                          >
                            <Minus size={16} className="text-white" />
                          </button>
                          <span className="w-10 text-center font-bold text-white text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-2 rounded-xl bg-white/10 hover:bg-primary-500/20 hover:text-primary-500 transition-all duration-300 min-h-[40px] min-w-[40px] flex items-center justify-center active:scale-90"
                          >
                            <Plus size={16} className="text-white" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => onRemove(item.id)}
                          className="group/btn p-3 rounded-xl glass-effect border border-white/10 hover:border-red-500/30 hover:bg-red-500/10 transition-all duration-300 min-h-[40px] min-w-[40px] flex items-center justify-center active:scale-90"
                        >
                          <Trash2 size={18} className="text-neutral-400 group-hover/btn:text-red-500 transition-colors" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="relative p-6 md:p-8 border-t border-white/10 bg-gradient-to-b from-neutral-900/50 to-neutral-950" style={{paddingBottom: "max(1.5rem, calc(env(safe-area-inset-bottom) + 1rem))"}}>
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            
            {/* Total */}
            <div className="flex items-center justify-between mb-6 p-4 glass-effect rounded-2xl border border-white/10">
              <span className="text-neutral-400 text-base md:text-lg font-medium">Total:</span>
              <div className="text-right">
                <span className="text-3xl md:text-4xl font-bold gradient-text block">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-xs text-neutral-500">Consulte condições</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="group w-full relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white py-5 px-6 rounded-2xl font-bold text-base md:text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 min-h-[56px]"
            >
              <span className="relative z-10">Finalizar Pedido no WhatsApp</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;