import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

interface SuccessStoriesProps {
  testimonials: Testimonial[];
  onNavigate: (view: string) => void;
  onOpenCompliance: () => void;
}

export const SuccessStoriesView: React.FC<SuccessStoriesProps> = ({
  testimonials,
  onNavigate,
  onOpenCompliance
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#4D6450]">
          Real Experiences & Community Voices
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#233525]">
          Authentic Stories of Health and Independent Growth
        </h1>
        <p className="text-xs sm:text-sm text-[#526654] leading-relaxed">
          At VitaNest Wellness, we believe in radical transparency. We do not showcase fabricated overnight millions or rented luxury cars. These are verified reflections from independent consultants and long-term customers who built honest daily wellness habits and supplemental family income.
        </p>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] flex flex-col justify-between space-y-6 shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#3B543D] font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Consultant</span>
                </div>
                <span className="text-[#7A8E7C] font-mono-numbers">Member since {t.joinedYear}</span>
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-[#DDD4C7] absolute -top-3 -left-2 -z-0 opacity-60" />
                <p className="relative z-10 text-xs text-[#2E4030] leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              {/* Concrete Outcome */}
              <div className="p-3 bg-[#EAE4DC] rounded-xl text-xs space-y-1 border border-[#DDD5C9]">
                <span className="font-semibold text-[#233525] block">Reported Progress:</span>
                <p className="text-[#4E6250]">{t.outcome}</p>
                <div className="text-[11px] text-[#6F8271] pt-1">
                  Daily Favorite: <strong className="text-[#233525]">{t.favoriteProduct}</strong>
                </div>
              </div>
            </div>

            {/* Author Info & Compliance footnote */}
            <div className="pt-4 border-t border-[#E8E2D9] space-y-3">
              <div>
                <h4 className="font-serif text-sm font-bold text-[#233525]">{t.author}</h4>
                <p className="text-[11px] text-[#556957]">{t.role} · {t.location}</p>
              </div>

              <p className="text-[10px] text-[#7A8E7C] leading-snug bg-white/50 p-2 rounded-lg border border-[#E8E2D9]">
                <strong>Compliance note:</strong> {t.complianceNote}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mandatory Income Disclaimer Box */}
      <section className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E0D7CB] space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#3B543D]" />
          <h3 className="font-serif text-base font-bold text-[#233525]">
            Statutory Income & Earnings Disclosure
          </h3>
        </div>
        <p className="text-xs text-[#526654] leading-relaxed">
          In compliance with the Consumer Protection (Direct Selling) Rules, 2021: Distributor testimonials represent individual experiences and are not representative of all distributors. VitaNest does not guarantee any level of income or success. Success depends entirely upon each distributor’s personal sales ability, commitment, customer follow-up, and local market demand for natural health products.
        </p>
        <button
          onClick={onOpenCompliance}
          className="text-xs font-semibold text-[#3B543D] underline underline-offset-4 cursor-pointer"
        >
          View Full Direct Selling Guidelines 2021 Disclosure →
        </button>
      </section>

      {/* CTA */}
      <div className="text-center space-y-4 py-6">
        <h3 className="font-serif text-2xl font-bold text-[#233525]">
          Ready to Start Your Own Journey?
        </h3>
        <p className="text-xs text-[#526654] max-w-md mx-auto">
          Begin with the ₹2,999 Starter Kit. Experience the formulations, access our free training academy, and connect with a supportive mentor.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => onNavigate('opportunity')}
            className="px-6 py-2.5 bg-[#3B543D] hover:bg-[#2C402E] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            Explore Business Opportunity
          </button>
        </div>
      </div>
    </div>
  );
};
