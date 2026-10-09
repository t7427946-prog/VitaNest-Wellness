import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Eye, Star, ShieldCheck } from 'lucide-react';
import { Product, ProductCategory, StarterKit } from '../types';

interface ProductsViewProps {
  products: Product[];
  starterKit: StarterKit;
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (product: Product | { id: string; name: string; price: number; image: string; size: string; categoryLabel: string }, quantity: number) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  products,
  starterKit,
  onOpenProductModal,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'daily-nutrition', label: 'Daily Nutrition' },
    { id: 'herbal-care', label: 'Herbal Care' },
    { id: 'skin-body', label: 'Skin and Body' },
    { id: 'home-wellness', label: 'Home Wellness' },
  ];

  const filteredProducts = products.filter((prod) => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.keyIngredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#4D6450]">
          Clean & Certified Formulations
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#233525]">
          Natural Health & Home Wellness Catalog
        </h1>
        <p className="text-xs sm:text-sm text-[#526654] leading-relaxed">
          Formulated with standardized botanicals, bioavailable adaptogens, and pure cold-pressed extracts. Every product undergoes strict microbiological and heavy metal quality verification under FSSAI and AYUSH standards.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
        {/* Category Tabs (Segmented control style) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#3B543D] text-white shadow-xs'
                  : 'bg-[#F2ECE4] text-[#485C4A] hover:bg-[#EAE4DC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A8E7C]" />
          <input
            type="text"
            placeholder="Search ingredients, benefits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#D5CCC0] focus:outline-none focus:border-[#3B543D]"
          />
        </div>
      </div>

      {/* Starter Kit Banner within catalog */}
      {activeCategory === 'all' && searchQuery === '' && (
        <div className="bg-[#EBE4DA] border border-[#DDD5C9] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <img
              src={starterKit.image}
              alt="Starter Kit"
              referrerPolicy="no-referrer"
              className="w-24 h-24 rounded-xl object-cover border border-[#D0C6B8] shrink-0"
            />
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#5D705F] font-semibold">
                Consultant Launch Option
              </span>
              <h3 className="font-serif text-lg font-bold text-[#233525]">
                {starterKit.name} (Sample Set + Training Guide + Personal Web Link)
              </h3>
              <p className="text-xs text-[#526654]">
                Get 5 full-size bestsellers and complete business tools for only ₹2,999.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              onAddToCart(
                {
                  id: starterKit.id,
                  name: starterKit.name,
                  price: starterKit.price,
                  image: starterKit.image,
                  size: 'Sample Set & Training Guide',
                  categoryLabel: 'Starter Kit'
                },
                1
              )
            }
            className="px-5 py-2.5 text-xs font-semibold bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            Add Starter Kit (₹2,999)
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-2">
          <p className="text-sm font-semibold text-[#233525]">No formulations matched your search</p>
          <p className="text-xs text-[#697E6B]">Try adjusting your search keywords or clear filters.</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-1.5 text-xs font-medium text-[#3B543D] underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#F4EFEB] rounded-2xl overflow-hidden border border-[#E5DDD2] flex flex-col justify-between hover:shadow-md transition-all group"
            >
              {/* Product Visual Container */}
              <div
                onClick={() => onOpenProductModal(prod)}
                className="cursor-pointer aspect-4/3 relative overflow-hidden bg-[#EAE3D8]"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium text-[#2C3E2D]">
                  {prod.size}
                </div>
                {prod.badge && (
                  <div className="absolute top-3 right-3 bg-[#243526] text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                    {prod.badge}
                  </div>
                )}
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#697E6B]">
                    <span className="uppercase tracking-wider font-semibold">{prod.categoryLabel}</span>
                    <div className="flex items-center gap-1 text-[#9E782F]">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="font-mono-numbers font-medium">{prod.rating}</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onOpenProductModal(prod)}
                    className="font-serif text-base font-bold text-[#233525] group-hover:text-[#3B543D] cursor-pointer transition-colors"
                  >
                    {prod.name}
                  </h3>

                  <p className="text-xs text-[#526654] leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>

                {/* Pricing & Actions */}
                <div className="pt-3 border-t border-[#E8E2D9] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono-numbers text-base font-bold text-[#233525]">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </span>
                      <span className="block text-[10px] text-[#6F8271]">
                        Distributor Price: ₹{prod.distributorPrice.toLocaleString('en-IN')} (25% margin)
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onOpenProductModal(prod)}
                        className="p-2 text-[#526654] hover:text-[#233525] hover:bg-[#EAE4DC] rounded-lg transition-colors cursor-pointer"
                        title="View ingredients and details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onAddToCart(prod, 1)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product Regulatory Note */}
      <div className="p-4 bg-[#EAE4DC] rounded-xl border border-[#D5CCC0] text-xs text-[#556957] flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-[#3B543D] shrink-0" />
        <p>
          <strong>Product Disclaimer:</strong> All VitaNest dietary supplements, botanicals, and home items are manufactured according to FSSAI & AYUSH standards. They are formulated for daily nutritional and lifestyle wellness, and are not intended to diagnose, treat, prevent, or cure any medical conditions.
        </p>
      </div>
    </div>
  );
};
