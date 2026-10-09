import React, { useState } from 'react';
import { Check, ShieldCheck, Award, TrendingUp, Users, ArrowRight, Plane, HelpCircle, Package } from 'lucide-react';
import { StarterKit, DistributorRank } from '../types';

interface OpportunityViewProps {
  starterKit: StarterKit;
  ranks: DistributorRank[];
  onAddToCart: (product: { id: string; name: string; price: number; image: string; size: string; categoryLabel: string }, quantity: number) => void;
  onOpenCompliance: () => void;
}

export const OpportunityView: React.FC<OpportunityViewProps> = ({
  starterKit,
  ranks,
  onAddToCart,
  onOpenCompliance
}) => {
  // Compensation Simulator State
  const [personalSales, setPersonalSales] = useState<number>(25000); // Monthly personal retail sales in ₹
  const [retailMarginPercent, setRetailMarginPercent] = useState<number>(25); // 20 - 30%
  const [activeSponsoredTeam, setActiveSponsoredTeam] = useState<number>(4); // Sponsorees count
  const [avgTeamMemberSales, setAvgTeamMemberSales] = useState<number>(15000); // Avg sales per person

  // Calculations
  const retailProfit = Math.round((personalSales * retailMarginPercent) / 100);
  const totalTeamVolume = activeSponsoredTeam * avgTeamMemberSales;
  const teamSponsorBonus = Math.round(totalTeamVolume * 0.05); // 5% team bonus on personal sponsors

  // Rank determination based on team volume
  let achievedRank = 'Distributor';
  let rankBonus = 0;
  let qualifiesForTrip = false;

  if (totalTeamVolume >= 200000) {
    achievedRank = 'Platinum';
    rankBonus = 20000;
    qualifiesForTrip = true;
  } else if (totalTeamVolume >= 75000) {
    achievedRank = 'Gold';
    rankBonus = 7500;
  } else if (totalTeamVolume >= 25000) {
    achievedRank = 'Silver';
    rankBonus = 2000;
  }

  const totalMonthlyEarnings = retailProfit + teamSponsorBonus + rankBonus;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#4D6450]">
          Ethical Direct-Selling Business
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#233525] leading-tight text-balance">
          Grow Healthy. Grow Together.
        </h1>
        <p className="text-sm sm:text-base text-[#526654] leading-relaxed">
          Build a flexible, independent business sharing real natural health and home wellness products that you and your community genuinely love.
        </p>
      </div>

      {/* The 3 Steps: Join, Sell, Build a Team */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4D6450]">
            The 3-Step Pathway
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#233525]">
            Simple, Transparent, Product-First
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-8 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-4 relative flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#3B543D] text-white flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h3 className="font-serif text-xl font-bold text-[#233525]">Join with Starter Kit</h3>
              <p className="text-xs text-[#526654] leading-relaxed">
                Invest ₹2,999 to receive a curated set of 5 full-size bestsellers, your official onboarding handbook, and an active personal website storefront link.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8E2D9] text-xs text-[#3B543D] font-semibold">
              30-Day Buyback & Return Protection
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-8 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-4 relative flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#3B543D] text-white flex items-center justify-center font-bold text-xs">
                2
              </span>
              <h3 className="font-serif text-xl font-bold text-[#233525]">Sell at 20%–30% Margin</h3>
              <p className="text-xs text-[#526654] leading-relaxed">
                Share authentic clean nutrition, herbal remedies, and eco-friendly home products. Earn 20% to 30% immediate retail profit on every direct product sold to customers.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8E2D9] text-xs text-[#3B543D] font-semibold">
              Direct Dropshipping or In-Hand Sales
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-4 relative flex flex-col justify-between">
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#3B543D] text-white flex items-center justify-center font-bold text-xs">
                3
              </span>
              <h3 className="font-serif text-xl font-bold text-[#233525]">Build an Ethical Team</h3>
              <p className="text-xs text-[#526654] leading-relaxed">
                Sponsor others who share the passion for wellness. Earn a 5% team bonus on verified sales generated by people you personally sponsor, unlocking rank tiers & annual trips.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8E2D9] text-xs text-[#3B543D] font-semibold">
              Performance Tiers: Silver, Gold, Platinum
            </div>
          </div>
        </div>
      </section>

      {/* Starter Kit Deep Dive */}
      <section className="bg-[#F2ECE3] border border-[#DFD6C8] rounded-3xl p-6 sm:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#E7DFD2] border border-[#D5CBBC]">
            <img
              src={starterKit.image}
              alt="VitaNest Consultant Starter Kit"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#28382A] text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
              Complete Business Kit · ₹2,999
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#4F6451]">
                Official Starter Package
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#233525]">
                Everything You Need to Begin
              </h2>
              <p className="text-xs sm:text-sm text-[#4E6250] leading-relaxed">
                For ₹2,999, we equip you with real formulations to try, the statutory compliance onboarding guide, and full digital storefront technology.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3C4F3E]">
                Kit Inclusions:
              </h4>
              <ul className="space-y-2">
                {starterKit.itemsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3E5240]">
                    <Check className="w-4 h-4 text-[#3B543D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <span className="font-mono-numbers text-3xl font-bold text-[#233525]">
                ₹{starterKit.price.toLocaleString('en-IN')}
              </span>
              <button
                onClick={() =>
                  onAddToCart(
                    {
                      id: starterKit.id,
                      name: starterKit.name,
                      price: starterKit.price,
                      image: starterKit.image,
                      size: 'Starter Box',
                      categoryLabel: 'Starter Kit'
                    },
                    1
                  )
                }
                className="px-6 py-3 text-xs font-semibold bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                Order Starter Kit Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Plan Breakdown & Rank Table */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4D6450]">
            Transparent Compensation Plan
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#233525]">
            Fair & Rewarding Compensation Structure
          </h2>
          <p className="text-xs sm:text-sm text-[#526654] max-w-2xl">
            Our compensation model is straightforward and centered entirely around moving high-grade wellness formulations to end users.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-2">
            <span className="text-xs font-semibold uppercase text-[#3B543D] tracking-wider block">
              1. Retail Profit
            </span>
            <div className="font-serif text-2xl font-bold text-[#233525]">20% – 30%</div>
            <p className="text-xs text-[#526654]">
              Immediate retail margin on products you sell directly to consumers at MRP.
            </p>
          </div>

          <div className="p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-2">
            <span className="text-xs font-semibold uppercase text-[#3B543D] tracking-wider block">
              2. Team Bonus
            </span>
            <div className="font-serif text-2xl font-bold text-[#233525]">5% Volume</div>
            <p className="text-xs text-[#526654]">
              Earn a 5% monthly bonus on verified sales from people you personally sponsor.
            </p>
          </div>

          <div className="p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-2">
            <span className="text-xs font-semibold uppercase text-[#3B543D] tracking-wider block">
              3. Rank Rewards
            </span>
            <div className="font-serif text-2xl font-bold text-[#233525]">Silver · Gold · Plat</div>
            <p className="text-xs text-[#526654]">
              Monthly performance leadership bonuses ranging from ₹2,000 up to ₹20,000.
            </p>
          </div>

          <div className="p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-2">
            <span className="text-xs font-semibold uppercase text-[#3B543D] tracking-wider block">
              4. Annual Trip
            </span>
            <div className="font-serif text-2xl font-bold text-[#233525]">Luxury Retreat</div>
            <p className="text-xs text-[#526654]">
              Yearly all-expenses-paid wellness & relaxation retreat for top qualifying performers.
            </p>
          </div>
        </div>

        {/* Rank Progression Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#E5DDD2] bg-[#F4EFEB]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#EBE4DA] text-[#233525] uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4">Level</th>
                <th className="py-3.5 px-4">Monthly Team Volume</th>
                <th className="py-3.5 px-4">Retail Margin</th>
                <th className="py-3.5 px-4">Sponsor Bonus</th>
                <th className="py-3.5 px-4">Performance Bonus</th>
                <th className="py-3.5 px-4">Annual Incentive</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DDD2] text-[#3E5240]">
              <tr>
                <td className="py-3 px-4 font-semibold text-[#233525]">Distributor</td>
                <td className="py-3 px-4 font-mono-numbers">Starting tier</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">20%</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">5%</td>
                <td className="py-3 px-4">—</td>
                <td className="py-3 px-4">Product discounts</td>
              </tr>
              <tr className="bg-[#EAE4DC]/50">
                <td className="py-3 px-4 font-semibold text-[#233525]">Silver</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">₹25,000 / mo</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">25%</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">5% (+2% tier 2)</td>
                <td className="py-3 px-4 font-mono-numbers font-bold text-[#3B543D]">₹2,000 / mo</td>
                <td className="py-3 px-4">Silver Pin & Certificate</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#233525]">Gold</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">₹75,000 / mo</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">28%</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">5% (+3% tier 2)</td>
                <td className="py-3 px-4 font-mono-numbers font-bold text-[#3B543D]">₹7,500 / mo</td>
                <td className="py-3 px-4">Regional Leadership Summit</td>
              </tr>
              <tr className="bg-[#EAE4DC]/50">
                <td className="py-3 px-4 font-semibold text-[#233525]">Platinum</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">₹2,00,000 / mo</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">30%</td>
                <td className="py-3 px-4 font-mono-numbers font-medium">5% (+3% tier 2, +2% tier 3)</td>
                <td className="py-3 px-4 font-mono-numbers font-bold text-[#3B543D]">₹20,000 / mo</td>
                <td className="py-3 px-4 font-semibold text-[#2C402E] flex items-center gap-1">
                  <Plane className="w-3.5 h-3.5 text-[#3B543D]" />
                  <span>Yearly Top Performer Trip</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Compensation Simulator */}
      <section className="bg-[#F0EBE3] border border-[#DDD5C9] rounded-3xl p-6 sm:p-10 space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4D6450]">
            Interactive Projection
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#233525]">
            Earnings Simulator
          </h2>
          <p className="text-xs text-[#526654]">
            Simulate your estimated monthly earnings based on direct retail sales and personally sponsored team members.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Controls */}
          <div className="space-y-6 bg-[#FAF7F2] p-6 rounded-2xl border border-[#E0D7CB]">
            {/* Slider 1: Personal Sales */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-medium text-[#233525]">
                  Your Monthly Direct Retail Sales:
                </label>
                <span className="font-mono-numbers font-bold text-[#3B543D] text-sm">
                  ₹{personalSales.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="2500"
                value={personalSales}
                onChange={(e) => setPersonalSales(Number(e.target.value))}
                className="w-full accent-[#3B543D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#788C7A]">
                <span>₹5,000</span>
                <span>₹50,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Slider 2: Retail Margin % */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-medium text-[#233525]">
                  Retail Profit Margin (20% – 30%):
                </label>
                <span className="font-mono-numbers font-bold text-[#3B543D] text-sm">
                  {retailMarginPercent}%
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="30"
                step="1"
                value={retailMarginPercent}
                onChange={(e) => setRetailMarginPercent(Number(e.target.value))}
                className="w-full accent-[#3B543D] cursor-pointer"
              />
            </div>

            {/* Slider 3: Sponsored Partners */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-medium text-[#233525]">
                  Personally Sponsored Consultants:
                </label>
                <span className="font-mono-numbers font-bold text-[#3B543D] text-sm">
                  {activeSponsoredTeam} partners
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="1"
                value={activeSponsoredTeam}
                onChange={(e) => setActiveSponsoredTeam(Number(e.target.value))}
                className="w-full accent-[#3B543D] cursor-pointer"
              />
            </div>

            {/* Slider 4: Avg Monthly Sales per Team Partner */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-medium text-[#233525]">
                  Average Monthly Sales per Partner:
                </label>
                <span className="font-mono-numbers font-bold text-[#3B543D] text-sm">
                  ₹{avgTeamMemberSales.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="50000"
                step="2500"
                value={avgTeamMemberSales}
                onChange={(e) => setAvgTeamMemberSales(Number(e.target.value))}
                className="w-full accent-[#3B543D] cursor-pointer"
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#DCD3C6] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D9]">
              <span className="text-xs font-semibold text-[#526654] uppercase tracking-wider">
                Simulated Monthly Payout
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E6EFE7] text-[#2C5E31]">
                {achievedRank} Level
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-[#4F6451]">
                <span>1. Direct Retail Margin ({retailMarginPercent}%):</span>
                <span className="font-mono-numbers font-semibold text-[#233525]">
                  ₹{retailProfit.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-[#4F6451]">
                <span>
                  2. 5% Team Sponsor Bonus (on ₹{totalTeamVolume.toLocaleString('en-IN')} volume):
                </span>
                <span className="font-mono-numbers font-semibold text-[#233525]">
                  ₹{teamSponsorBonus.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-[#4F6451]">
                <span>3. Monthly Rank Leadership Bonus ({achievedRank}):</span>
                <span className="font-mono-numbers font-semibold text-[#233525]">
                  ₹{rankBonus.toLocaleString('en-IN')}
                </span>
              </div>

              {qualifiesForTrip && (
                <div className="p-2.5 bg-[#E6E2F0] rounded-lg text-xs font-semibold text-[#473B5E] flex items-center gap-2">
                  <Plane className="w-4 h-4 text-[#473B5E]" />
                  <span>Qualified for Annual Luxury Wellness Retreat Trip!</span>
                </div>
              )}

              <div className="pt-3 border-t border-[#E8E2D9] flex justify-between items-baseline">
                <span className="font-bold text-sm text-[#233525]">
                  Estimated Total Monthly Earnings:
                </span>
                <span className="font-mono-numbers text-2xl font-bold text-[#3B543D]">
                  ₹{totalMonthlyEarnings.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Income Disclaimer right beside simulator as mandated */}
            <div className="p-3 bg-[#F2ECE4] rounded-xl text-[11px] text-[#556957] space-y-1 border border-[#E2D9CD]">
              <div className="font-semibold text-[#2C402E] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3B543D]" />
                <span>Statutory Income Disclaimer</span>
              </div>
              <p>
                This calculation is an interactive simulation for mathematical illustration only. Results vary, and no earnings or profits are guaranteed. Individual consultant income is dependent upon sales skills, personal customer acquisition, geographic demand, and consistent retail effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Direct Selling Legal Notes & Regulatory Compliance */}
      <section className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#E2DBD0] space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4D6450]">
            Regulatory Safeguards
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#233525]">
            Operating Under India’s Direct Selling Framework
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#4F6451]">
          <div className="space-y-2 p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2]">
            <h4 className="font-semibold text-[#233525] text-sm">
              1. Direct Selling Guidelines 2021 & Consumer Protection
            </h4>
            <p className="leading-relaxed">
              We operate in full compliance with the Consumer Protection (Direct Selling) Rules, 2021. This mandates transparent corporate registration, an appointed Grievance Redressal Officer, explicit contractual terms, and a 30-day buyback guarantee on marketable goods.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2]">
            <h4 className="font-semibold text-[#233525] text-sm">
              2. Products Over Recruitment Rule
            </h4>
            <p className="leading-relaxed">
              Indian regulatory authorities penalize schemes that profit mainly from enrolling members. At VitaNest, 100% of income is generated from genuine product purchases made by actual consumers. There is zero remuneration for recruiting.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2]">
            <h4 className="font-semibold text-[#233525] text-sm">
              3. Truth in Product Claims (FSSAI)
            </h4>
            <p className="leading-relaxed">
              Health supplements, herbal teas, and personal care products must never claim to cure, prevent, or treat diseases. All VitaNest products are registered nutraceuticals and lifestyle wellness items adhering to statutory FSSAI and AYUSH standards.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2]">
            <h4 className="font-semibold text-[#233525] text-sm">
              4. Anti-Inventory Loading Guarantee
            </h4>
            <p className="leading-relaxed">
              Consultants are never required to purchase large volumes of inventory. You can serve customers via direct dropship ordering with zero garage storage or financial risk.
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={onOpenCompliance}
            className="text-xs font-semibold text-[#3B543D] underline underline-offset-4 cursor-pointer"
          >
            Read Our Full Regulatory Charter & Grievance Mechanism →
          </button>
        </div>
      </section>
    </div>
  );
};
