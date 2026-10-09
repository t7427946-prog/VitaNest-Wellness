import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Leaf, Users, PackageCheck, Award } from 'lucide-react';
import { Product, StarterKit } from '../types';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (product: Product | { id: string; name: string; price: number; image: string; size: string; categoryLabel: string }, quantity: number) => void;
  onOpenCompliance: () => void;
  featuredProducts: Product[];
  starterKit: StarterKit;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProductModal,
  onAddToCart,
  onOpenCompliance,
  featuredProducts,
  starterKit
}) => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#243526] text-[#FAF8F5] min-h-[580px] sm:min-h-[620px] flex items-center shadow-lg">
            {/* Background Image with Scrim */}
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/hero_vitanest_wellness_1791561199230.jpg"
                alt="VitaNest organic wellness botanical still life"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2B20]/95 via-[#1E2B20]/75 to-transparent" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-2xl px-6 sm:px-12 py-16 space-y-6">
              {/* Foundation kicker */}
              <div className="flex items-center gap-2 text-xs text-[#A8C4AA]">
                <Leaf className="w-3.5 h-3.5" />
                <span>Founded 2019</span>
                <span>·</span>
                <span>Direct-Selling & Home Wellness</span>
              </div>

              {/* Tagline & Main Heading */}
              <div className="space-y-3">
                <p className="font-serif italic text-[#D8E6D9] text-xl sm:text-2xl">
                  “Grow Healthy. Grow Together.”
                </p>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#FAF8F5] leading-tight text-balance">
                  Nourish Your Body. Cultivate Your Purpose.
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[#C2D6C4] leading-relaxed max-w-xl">
                Experience pure plant nutrition, certified Ayurvedic botanicals, and clean home care formulations. Built on an honest, product-first community where independent consultants thrive with transparent earnings.
              </p>

              {/* Action Buttons: "Shop Now" and "Join Us" */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-xl bg-[#F5F1E8] text-[#1E2B20] hover:bg-[#FAF7F2] hover:shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('opportunity')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-xl bg-transparent border border-[#A8C4AA] text-[#FAF8F5] hover:bg-[#FAF8F5]/10 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Join Us as a Consultant</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Regulatory Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#9BB59D]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C4E0C6]" />
                  Direct Selling Rules 2021 Compliant
                </span>
                <span>·</span>
                <span>FSSAI Quality Certified</span>
                <span>·</span>
                <span>30-Day Buyback Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Product Lines Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#4D6450]">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#233525]">
            Four Formulations for Whole-Body Living
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E5C] leading-relaxed">
            Every product is free from harsh chemicals, synthetic fillers, or animal cruelty—crafted to make daily vitality effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Daily Nutrition */}
          <div
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-[#F4EFEB] rounded-2xl overflow-hidden border border-[#E5DDD2] hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[#EAE3D8]">
              <img
                src="/src/assets/images/product_daily_nutrition_1791561229653.jpg"
                alt="Daily Nutrition products"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#2C3E2D]">
                Nutrition
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#233525] group-hover:text-[#3B543D] transition-colors">
                  Daily Nutrition
                </h3>
                <p className="text-xs text-[#526654] mt-1 leading-relaxed">
                  Plant-based protein powder, multivitamin gummies, and vital greens drink mix.
                </p>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#3B543D] pt-2">
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Herbal Care */}
          <div
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-[#F4EFEB] rounded-2xl overflow-hidden border border-[#E5DDD2] hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[#EAE3D8]">
              <img
                src="/src/assets/images/product_herbal_care_1791561241176.jpg"
                alt="Herbal Care products"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#2C3E2D]">
                Ayurveda
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#233525] group-hover:text-[#3B543D] transition-colors">
                  Herbal Care
                </h3>
                <p className="text-xs text-[#526654] mt-1 leading-relaxed">
                  KSM-66 ashwagandha capsules, sacred tulsi tea, and cold-pressed turmeric immunity shots.
                </p>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#3B543D] pt-2">
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Skin & Body */}
          <div
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-[#F4EFEB] rounded-2xl overflow-hidden border border-[#E5DDD2] hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[#EAE3D8]">
              <img
                src="/src/assets/images/product_skin_body_1791561256053.jpg"
                alt="Skin and Body products"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#2C3E2D]">
                Botanicals
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#233525] group-hover:text-[#3B543D] transition-colors">
                  Skin and Body
                </h3>
                <p className="text-xs text-[#526654] mt-1 leading-relaxed">
                  Pure aloe vera gel, botanical neem face wash, and stable vitamin C brightening serum.
                </p>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#3B543D] pt-2">
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 4: Home Wellness */}
          <div
            onClick={() => onNavigate('products')}
            className="group cursor-pointer bg-[#F4EFEB] rounded-2xl overflow-hidden border border-[#E5DDD2] hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[#EAE3D8]">
              <img
                src="/src/assets/images/hero_vitanest_wellness_1791561199230.jpg"
                alt="Home Wellness products"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#2C3E2D]">
                Sanctuary
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#233525] group-hover:text-[#3B543D] transition-colors">
                  Home Wellness
                </h3>
                <p className="text-xs text-[#526654] mt-1 leading-relaxed">
                  Ultrasonic ceramic essential oil diffuser, bio-enzyme floor cleaner, and herbal incense.
                </p>
              </div>
              <div className="flex items-center text-xs font-semibold text-[#3B543D] pt-2">
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Kit Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2ECE3] border border-[#DFD6C8] rounded-3xl p-6 sm:p-12 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Visual Box */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#E7DFD2] border border-[#D5CBBC] shadow-xs">
              <img
                src={starterKit.image}
                alt="VitaNest Consultant Starter Kit"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#28382A] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs">
                Official Starter Kit · ₹2,999
              </div>
            </div>

            {/* Content Box */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#4F6451]">
                  Begin Your Business Journey
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#233525]">
                  {starterKit.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#4E6250] leading-relaxed">
                  {starterKit.description}
                </p>
              </div>

              {/* Inclusions */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3C4F3E]">
                  What’s Inside Your Box:
                </h4>
                <ul className="space-y-2">
                  {starterKit.itemsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3E5240]">
                      <PackageCheck className="w-4 h-4 text-[#3B543D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <div className="space-y-0.5">
                  <span className="font-mono-numbers text-3xl font-bold text-[#233525]">
                    ₹{starterKit.price.toLocaleString('en-IN')}
                  </span>
                  <span className="block text-[11px] text-[#697E6B]">
                    One-time complete onboarding kit (incl. taxes)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      onAddToCart(
                        {
                          id: starterKit.id,
                          name: starterKit.name,
                          price: starterKit.price,
                          image: starterKit.image,
                          size: 'Full Onboarding Box',
                          categoryLabel: 'Starter Kit'
                        },
                        1
                      )
                    }
                    className="px-5 py-3 text-xs font-semibold bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    Order Starter Kit
                  </button>

                  <button
                    onClick={() => onNavigate('opportunity')}
                    className="px-4 py-3 text-xs font-semibold text-[#2C402E] hover:text-[#18261A] underline underline-offset-4 cursor-pointer"
                  >
                    View Compensation Plan
                  </button>
                </div>
              </div>

              {/* 30-day buyback note */}
              <div className="p-3 bg-[#FAF8F5] rounded-xl text-xs text-[#526654] border border-[#DDD5C9] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3B543D] shrink-0" />
                <span>
                  Protected by 30-Day Buyback Policy under Indian Direct Selling Rules 2021.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-Step Pathway Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#4D6450]">
            Simple & Transparent
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#233525]">
            How the Business Works in 3 Clear Steps
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6E5C]">
            No gimmicks, no pyramid recruiting tricks. We believe real value begins and ends with customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#3B543D] text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-serif text-lg font-bold text-[#233525]">1. Join & Experience</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              Order your ₹2,999 Starter Kit to try our 5 core products yourself, obtain your replicated digital storefront, and access the free training portal.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#3B543D] text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-serif text-lg font-bold text-[#233525]">2. Sell at 20%–30% Margin</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              Recommend natural health products directly to friends, yoga peers, and family. Keep 20%–30% immediate retail margin on every verified sale.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#3B543D] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-serif text-lg font-bold text-[#233525]">3. Build an Ethical Team</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              Mentor new consultants to build their own customer base. Earn a 5% team bonus on their sales, unlock monthly performance bonuses (Silver, Gold, Platinum), and annual trip incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel/Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4D6450]">
              Customer Favorites
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#233525]">
              Pure Formulations, Honest Labels
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#3B543D] hover:text-[#233525] transition-colors cursor-pointer"
          >
            <span>Explore Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.slice(0, 3).map((prod) => (
            <div
              key={prod.id}
              className="bg-[#F4EFEB] rounded-2xl overflow-hidden border border-[#E5DDD2] flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div
                onClick={() => onOpenProductModal(prod)}
                className="cursor-pointer group aspect-4/3 relative overflow-hidden bg-[#EBE4DA]"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-medium text-[#2C3E2D]">
                  {prod.size}
                </div>
                {prod.badge && (
                  <div className="absolute top-3 right-3 bg-[#243526] text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                    {prod.badge}
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#697E6B] font-semibold mb-1">
                    {prod.categoryLabel}
                  </div>
                  <h3
                    onClick={() => onOpenProductModal(prod)}
                    className="font-serif text-base font-bold text-[#233525] hover:text-[#3B543D] cursor-pointer transition-colors"
                  >
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#526654] mt-1 line-clamp-2">{prod.tagline}</p>
                </div>

                <div className="pt-2 border-t border-[#E8E2D9] flex items-center justify-between">
                  <div>
                    <span className="font-mono-numbers text-base font-bold text-[#233525]">
                      ₹{prod.price.toLocaleString('en-IN')}
                    </span>
                    <span className="block text-[10px] text-[#788C7A]">
                      Distributor: ₹{prod.distributorPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(prod, 1)}
                    className="px-3.5 py-2 text-xs font-semibold bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Ethical Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EBE5DC] border border-[#DDD5C9] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#3B543D]" />
              <h4 className="font-serif text-base font-bold text-[#233525]">
                Our Commitment to Direct Selling Integrity
              </h4>
            </div>
            <p className="text-xs text-[#4F6451] leading-relaxed">
              We uphold the Consumer Protection (Direct Selling) Rules 2021. No mandatory recruitment, no inventory loading, zero hidden fees, and transparent 30-day buybacks.
            </p>
          </div>
          <button
            onClick={onOpenCompliance}
            className="px-4 py-2 text-xs font-semibold text-[#233525] bg-[#FAF7F2] border border-[#D5CCC0] rounded-xl hover:bg-[#F2ECE3] transition-colors cursor-pointer whitespace-nowrap"
          >
            Review Legal Transparency
          </button>
        </div>
      </section>
    </div>
  );
};
