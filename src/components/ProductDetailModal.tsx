import React from 'react';
import { X, Check, Star, ShieldCheck, Sparkles, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = React.useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#F5F1E8] border border-[#E3DBD0] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Header with close */}
        <div className="sticky top-0 bg-[#F5F1E8]/95 backdrop-blur-xs border-b border-[#E8E2D9] px-6 py-3 flex items-center justify-between z-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#5F7561]">
            {product.categoryLabel}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5A6D5C] hover:text-[#233525] hover:bg-[#EDE7DE] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content split */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#F0EBE3] border border-[#E8E2D9]">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-medium text-[#2C3E2D] border border-[#E8E2D9]">
                {product.size}
              </div>
            </div>

            {/* Quick Specs */}
            <div className="p-3.5 bg-[#F4EFEB] rounded-xl text-xs space-y-2 border border-[#E5DDD2]">
              <div className="flex items-center justify-between text-[#4D6250]">
                <span>Distributor Wholesale BV Price:</span>
                <span className="font-mono-numbers font-bold text-[#233525]">
                  ₹{product.distributorPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center justify-between text-[#4D6250]">
                <span>Retail Profit Potential:</span>
                <span className="font-mono-numbers font-semibold text-[#2C5E31]">
                  ₹{(product.price - product.distributorPrice).toLocaleString('en-IN')} (25% margin)
                </span>
              </div>
              <div className="flex items-center justify-between text-[#4D6250]">
                <span>Personal Point Volume (PV):</span>
                <span className="font-mono-numbers font-medium text-[#233525]">{product.pv} PV</span>
              </div>
            </div>
          </div>

          {/* Right: Info & Purchase module */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex items-center text-[#9E782F] text-xs">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="ml-1 font-semibold font-mono-numbers">{product.rating}</span>
                  <span className="text-[#728574] ml-1">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#233525] leading-snug">
                {product.name}
              </h2>
              <p className="text-xs text-[#526654] italic mt-1">{product.tagline}</p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="font-mono-numbers text-2xl font-bold text-[#233525]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#6F8271]">Maximum Retail Price (incl. of all taxes)</span>
            </div>

            <p className="text-xs text-[#3E5240] leading-relaxed">
              {product.description}
            </p>

            {/* Key Benefits */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4E6450]">
                Key Formulation Benefits
              </h4>
              <ul className="space-y-1.5">
                {product.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#3E5240]">
                    <Check className="w-3.5 h-3.5 text-[#3B543D] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4E6450]">
                Key Ingredients
              </h4>
              <p className="text-xs text-[#526654] leading-relaxed">
                {product.keyIngredients.join(' · ')}
              </p>
            </div>

            {/* Usage */}
            <div className="space-y-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4E6450]">
                Suggested Ritual & Use
              </h4>
              <p className="text-xs text-[#526654] leading-relaxed">{product.usage}</p>
            </div>

            {/* FSSAI / Compliance Note */}
            {product.fssaiCategory && (
              <div className="flex items-start gap-2 p-2.5 bg-[#EAE4DC]/60 rounded-lg text-[11px] text-[#4F6451] border border-[#DDD5C9]">
                <ShieldCheck className="w-4 h-4 text-[#3B543D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">{product.fssaiCategory}.</span>
                  <p className="mt-0.5">Not intended to diagnose, treat, cure, or prevent any disease.</p>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center border border-[#D5CCC0] rounded-lg bg-[#FAF7F2] overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-xs font-bold text-[#465948] hover:bg-[#F2ECE4] cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-2 text-xs font-mono-numbers font-semibold text-[#233525]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-xs font-bold text-[#465948] hover:bg-[#F2ECE4] cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag · ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
