import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F5F1E8] border-l border-[#E2DBD0] shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="px-6 py-4 border-b border-[#E8E2D9] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#3B543D]" />
              <h2 className="font-serif text-lg font-bold text-[#233525]">Your Wellness Bag</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#5A6D5C] hover:text-[#233525] rounded-md hover:bg-[#EDE7DE] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3 bg-[#F2ECE4] border-b border-[#E8E2D9] text-xs">
            {amountToFreeShipping === 0 ? (
              <span className="font-semibold text-[#2C5E31]">
                ✓ You qualified for Free Nationwide Shipping!
              </span>
            ) : (
              <span className="text-[#4E6250]">
                Add <strong className="text-[#233525] font-mono-numbers">₹{amountToFreeShipping.toLocaleString('en-IN')}</strong> more for Free Shipping.
              </span>
            )}
            <div className="w-full bg-[#E0D7CB] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#3B543D] h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#EFE9DF] text-[#697E6B] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-[#233525]">Your bag is currently empty</p>
                <p className="text-xs text-[#6F8271] max-w-xs mx-auto">
                  Discover our natural daily nutrition, herbal wellness infusions, and starter kits.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-[#FAF7F2] border border-[#E8E2D9] rounded-xl shadow-xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-18 h-18 rounded-lg object-cover bg-[#F2ECE4] shrink-0"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-semibold text-[#233525] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#98A89A] hover:text-[#7A2C2C] transition-colors p-0.5 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-[#718573]">{item.product.size}</p>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#D5CCC0] rounded-md overflow-hidden bg-[#F5F1E8]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs font-semibold text-[#465948] hover:bg-[#EAE4DC] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-mono-numbers font-medium text-[#233525]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-semibold text-[#465948] hover:bg-[#EAE4DC] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold font-mono-numbers text-[#233525]">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary and Checkout Button */}
          {items.length > 0 && (
            <div className="border-t border-[#E8E2D9] p-6 bg-[#F5F1E8] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#5D705F]">
                  <span>Subtotal:</span>
                  <span className="font-mono-numbers font-semibold text-[#233525]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-[#5D705F]">
                  <span>Shipping:</span>
                  <span className="font-mono-numbers font-medium">
                    {subtotal >= freeShippingThreshold ? 'FREE' : '₹75'}
                  </span>
                </div>
                <div className="flex justify-between text-[#233525] font-bold text-sm pt-2 border-t border-[#E2DBD0]">
                  <span>Total Amount:</span>
                  <span className="font-mono-numbers text-base text-[#3B543D]">
                    ₹{(subtotal + (subtotal >= freeShippingThreshold ? 0 : 75)).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#697E6B] bg-[#EFEAE2] p-2 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3B543D] shrink-0" />
                <span>30-Day Buyback & 100% Satisfaction Guarantee</span>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
