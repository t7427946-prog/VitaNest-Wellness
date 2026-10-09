import React from 'react';
import { X, ShieldCheck, Scale, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#F5F1E8] border border-[#E3DC4] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#F5F1E8] border-b border-[#E8E2D9] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#3B543D]" />
            <h3 className="font-serif text-lg font-bold text-[#233525]">
              Regulatory Transparency & Compliance Charter
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5A6D5C] hover:text-[#233525] hover:bg-[#EDE7DE] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-sm text-[#3E5240]">
          {/* Section 1 */}
          <div className="space-y-2 bg-[#F3EFEA] p-4 rounded-xl border border-[#E3DBD0]">
            <div className="flex items-center gap-2 text-[#233525] font-semibold">
              <Scale className="w-4 h-4 text-[#3B543D]" />
              <h4>1. Direct Selling Rules 2021 & Consumer Protection Compliance</h4>
            </div>
            <p className="leading-relaxed text-xs text-[#4F6451]">
              In accordance with the <strong>Consumer Protection (Direct Selling) Rules, 2021</strong> and the <strong>Direct Selling Guidelines 2021</strong> issued by the Ministry of Consumer Affairs, Food and Public Distribution, Government of India:
            </p>
            <ul className="text-xs space-y-1.5 list-disc pl-4 text-[#4F6451]">
              <li>VitaNest Wellness is a registered corporate entity with a physical registered office in India.</li>
              <li>We operate an active Grievance Redressal mechanism with an appointed Nodal Officer to resolve consumer inquiries within 48 hours.</li>
              <li>A statutory <strong>30-Day Buyback Policy</strong> is provided for all unsold inventory or starter kits in merchantable condition.</li>
              <li>No distributor is coerced or incentivized to purchase inventory beyond their reasonable retail resale or personal consumption capacity.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 bg-[#F3EFEA] p-4 rounded-xl border border-[#E3DBD0]">
            <div className="flex items-center gap-2 text-[#233525] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#3B543D]" />
              <h4>2. Products Over Recruitment Principle</h4>
            </div>
            <p className="leading-relaxed text-xs text-[#4F6451]">
              Indian regulatory authorities scrutinize network marketing entities that generate income primarily from entry fees or member recruitment rather than end-consumer product sales.
            </p>
            <p className="leading-relaxed text-xs text-[#4F6451]">
              <strong>VitaNest’s Guarantee:</strong> 100% of commissions and performance bonuses are funded strictly from the bona fide retail sale of physical wellness products to end consumers. No commission is ever paid for merely introducing or registering a new independent representative.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 bg-[#F3EFEA] p-4 rounded-xl border border-[#E3DBD0]">
            <div className="flex items-center gap-2 text-[#233525] font-semibold">
              <AlertCircle className="w-4 h-4 text-[#8C5E28]" />
              <h4>3. Mandatory Income Disclaimer</h4>
            </div>
            <p className="leading-relaxed text-xs text-[#4F6451]">
              Earnings representations, tier breakdowns, and compensation simulator figures displayed on this website are for illustrative and educational purposes only. They do not represent guaranteed earnings.
            </p>
            <p className="leading-relaxed text-xs text-[#4F6451]">
              Achieving retail margins and rank rewards requires continuous time dedication, customer relationship management, and salesmanship. Individual results vary significantly based on geographic reach, customer demand, and personal effort.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 bg-[#F3EFEA] p-4 rounded-xl border border-[#E3DBD0]">
            <div className="flex items-center gap-2 text-[#233525] font-semibold">
              <FileText className="w-4 h-4 text-[#3B543D]" />
              <h4>4. Product Claims & FSSAI / AYUSH Standards</h4>
            </div>
            <p className="leading-relaxed text-xs text-[#4F6451]">
              Health, dietary, and herbal products cannot make claims to prevent, diagnose, mitigate, treat, or cure medical conditions, chronic illnesses, or pathological diseases.
            </p>
            <p className="leading-relaxed text-xs text-[#4F6451]">
              VitaNest dietary formulations are licensed under FSSAI (Food Safety and Standards Authority of India) and AYUSH regulations as health supplements, nutraceuticals, or ayurvedic proprietary products. Statements have not been evaluated as pharmaceutical drugs. Pregnant or nursing mothers and individuals undergoing medical treatment should consult their physician prior to use.
            </p>
          </div>

          {/* Grievance Officer details */}
          <div className="pt-2 border-t border-[#E8E2D9] text-xs text-[#5E7260]">
            <p className="font-semibold text-[#233525]">Nodal & Grievance Redressal Officer Contact:</p>
            <p>Mr. Aniket Deshmukh | Email: grievance@vitanestwellness.in | Tel: +91 80 4920 1840</p>
            <p>Response time: Acknowledgment within 48 business hours; resolution within 30 days.</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F5F1E8] border-t border-[#E8E2D9] px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#3B543D] hover:bg-[#2C402E] rounded-lg transition-colors cursor-pointer"
          >
            I Understand & Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};
