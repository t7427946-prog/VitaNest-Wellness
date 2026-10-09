import React from 'react';
import { Leaf, Heart, ShieldCheck, Users, Sparkles, CheckCircle } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onOpenCompliance: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenCompliance }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#4D6450]">
          Our Roots & Story
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#233525] leading-tight text-balance">
          Founded in 2019 to Restore Trust in Natural Wellness
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-[#4A634C]">
          “Grow Healthy. Grow Together.”
        </p>
      </div>

      {/* Origin Story Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-xs sm:text-sm text-[#4E6250] leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#233525]">
            From Small-Batch Kitchen Blends to Nationwide Integrity
          </h2>
          <p>
            VitaNest Wellness was born in 2019 out of a simple, persistent frustration: the health and wellness marketplace was inundated with either synthetic supplements masked behind misleading jargon, or aggressive multi-level marketing structures that focused on recruitment rather than genuine product excellence.
          </p>
          <p>
            We set out to build the antithesis: a company where <strong>products always take center stage</strong>. We partnered directly with regenerative herbal growers across Uttarakhand, Kerala, and Maharashtra to source authentic KSM-66 ashwagandha, whole sacred tulsi leaves, and cold-pressed aloe vera.
          </p>
          <p>
            At the same time, we structured our direct-selling model around honesty. By eliminating middle distributors, warehouse retail markups, and celebrity endorsements, we pass genuine margin (20%–30%) directly to everyday home consultants who use and love our products.
          </p>
        </div>

        <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-[#E8E1D5] border border-[#D5CBBC] shadow-md">
          <img
            src="/src/assets/images/hero_vitanest_wellness_1791561199230.jpg"
            alt="VitaNest founders and botanical laboratory"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2C21]/80 via-transparent to-transparent flex items-end p-6">
            <div className="text-white text-xs space-y-1">
              <span className="font-serif font-bold text-base block">Our Botanical Kitchen</span>
              <p className="text-[#D8E6D9]">Standardized extraction under clean FSSAI and AYUSH parameters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Ethical Pillars */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4D6450]">
            Our Guiding Philosophy
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#233525]">
            The 4 VitaNest Guarantees
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6EEE7] text-[#2C5E31] flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#233525]">Whole-Plant Purity</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              No artificial colors, zero cheap maltodextrin fillers, and no animal gelatin. We use clean plant pectin, organic pea protein, and wild-harvested neem.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6EEE7] text-[#2C5E31] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#233525]">Products First Always</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              Regulators rightly examine direct selling companies that earn from recruitment. At VitaNest, every rupee of commission flows from actual product consumption.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6EEE7] text-[#2C5E31] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#233525]">Respect for Consultants</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              We never push inventory loading. Our members order on-demand for their customers with complete 30-day buyback security and transparent monthly payout statements.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6EEE7] text-[#2C5E31] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#233525]">Sustainable Home Ecology</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              From our bio-enzyme concentrated cleaners to hand-rolled charcoal-free incense made by women's collectives, home wellness means honoring the planet too.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment to Direct Selling Rules 2021 */}
      <section className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#E2DBD0] space-y-4">
        <h3 className="font-serif text-xl font-bold text-[#233525]">
          Compliance with Indian Direct Selling Framework
        </h3>
        <p className="text-xs sm:text-sm text-[#4F6451] leading-relaxed">
          VitaNest Wellness proudly operates under the statutory framework of the <strong>Consumer Protection (Direct Selling) Rules, 2021</strong> and the <strong>Direct Selling Guidelines 2021</strong>. We maintain registered Indian offices, an appointed Grievance Redressal Officer, FSSAI licenses, and clear, enforceable agreements for every independent distributor.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenCompliance}
            className="px-4 py-2 text-xs font-semibold text-[#233525] bg-[#EFE9DF] rounded-lg hover:bg-[#E4DCCE] transition-colors cursor-pointer"
          >
            Review Corporate Transparency Disclosures →
          </button>
        </div>
      </section>
    </div>
  );
};
