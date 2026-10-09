import React from 'react';
import { ShieldCheck, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';
import { NewsletterSignup } from './NewsletterSignup';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenCompliance: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCompliance }) => {
  return (
    <footer className="bg-[#1F2C21] text-[#E5EBE5] pt-12 pb-12 border-t border-[#314233]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Newsletter Signup Banner */}
        <NewsletterSignup />

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#314233]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E5EBE5] text-[#1F2C21] flex items-center justify-center font-serif text-lg font-bold">
                V
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F5]">
                VitaNest Wellness
              </span>
            </div>
            <p className="font-serif italic text-[#C2D1C3] text-lg">
              “Grow Healthy. Grow Together.”
            </p>
            <p className="text-sm text-[#A8BCA9] leading-relaxed max-w-md">
              Founded in 2019, VitaNest Wellness empowers individuals and families with certified natural health, herbal care, and sustainable home wellness products through an ethical, product-first community.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#A8BCA9] pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#86A888]" />
                HQ: Bengaluru & Pune, India
              </span>
              <span>·</span>
              <span>Est. 2019</span>
            </div>
          </div>

          {/* Product Lines */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wide text-[#FAF8F5]">Product Lines</h4>
            <ul className="space-y-2 text-sm text-[#A8BCA9]">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Daily Nutrition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Herbal Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Skin and Body
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Wellness
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('opportunity')}
                  className="hover:text-white transition-colors cursor-pointer font-medium text-[#C2D1C3]"
                >
                  ₹2,999 Starter Kit
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wide text-[#FAF8F5]">Community & Work</h4>
            <ul className="space-y-2 text-sm text-[#A8BCA9]">
              <li>
                <button
                  onClick={() => onNavigate('opportunity')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Business Opportunity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('stories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('training')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Training Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portal')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Distributor Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Philosophy & Story
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Support & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wide text-[#FAF8F5]">Support & Grievances</h4>
            <p className="text-xs text-[#A8BCA9] leading-relaxed">
              Official Grievance Redressal Officer appointed in accordance with Direct Selling Rules, 2021.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="https://wa.me/919876543210?text=Hello%20VitaNest%20Wellness%2C%20I%20have%20an%20inquiry%20regarding%20products%20and%20direct%20selling."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#86A888] hover:text-[#A8CFA9] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Consultant Support</span>
              </a>
              <a
                href="mailto:support@vitanestwellness.in"
                className="flex items-center gap-2 text-[#C2D1C3] hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>support@vitanestwellness.in</span>
              </a>
              <button
                onClick={onOpenCompliance}
                className="flex items-center gap-1.5 text-xs text-[#E5EBE5] underline underline-offset-4 hover:text-[#86A888] pt-1 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>View Full Compliance Disclosure</span>
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory & Mandatory Disclaimers Strip */}
        <div className="py-8 border-b border-[#314233] space-y-4 text-xs text-[#9BB19C] leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <span className="font-semibold text-[#E5EBE5] block">1. Income Disclaimer</span>
              <p>
                Results vary; no earnings or profits are guaranteed. Distributor income is directly contingent upon individual skills, time dedication, and authentic product retail sales volume.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-[#E5EBE5] block">2. Products Over Recruitment</span>
              <p>
                VitaNest pays compensation solely on genuine consumer sales of certified wellness products. No compensation is earned for merely introducing or recruiting other persons.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-[#E5EBE5] block">3. Direct Selling Compliance 2021</span>
              <p>
                Strictly compliant with Consumer Protection (Direct Selling) Rules, 2021 and Direct Selling Guidelines. Full 30-day buyback & return policy for unsold goods in merchantable state.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-[#E5EBE5] block">4. Product Claims & FSSAI</span>
              <p>
                Products are dietary nutraceuticals, herbal infusions, and cosmetic preparations. They do not claim to prevent, diagnose, treat, or cure any medical illness. Always consult a healthcare provider.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86A888]">
          <p>© {new Date().getFullYear()} VitaNest Wellness Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenCompliance} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={onOpenCompliance} className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <button onClick={onOpenCompliance} className="hover:text-white transition-colors cursor-pointer">
              Direct Selling Guidelines 2021
            </button>
            <button onClick={onOpenCompliance} className="hover:text-white transition-colors cursor-pointer">
              Buyback & Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
