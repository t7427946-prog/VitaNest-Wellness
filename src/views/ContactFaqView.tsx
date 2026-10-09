import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, ChevronDown, ChevronUp, Search, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FAQItem } from '../types';

interface ContactFaqViewProps {
  faqs: FAQItem[];
  onOpenCompliance: () => void;
}

export const ContactFaqView: React.FC<ContactFaqViewProps> = ({ faqs, onOpenCompliance }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Consultant / Business Inquiry',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = ['All', 'Compliance & Legal', 'Business Opportunity', 'Products', 'Orders & Shipping'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#4D6450]">
          We’re Here for You
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#233525]">
          Contact Support & Common Questions
        </h1>
        <p className="text-xs sm:text-sm text-[#526654] leading-relaxed">
          Have questions regarding our natural product formulations, the ₹2,999 Starter Kit, or Indian Direct Selling compliance? Connect with our dedicated support desk.
        </p>
      </div>

      {/* Quick Direct Communication Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* WhatsApp Channel */}
        <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#E4ECE5] text-[#2C5E31] flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#233525]">WhatsApp Consultant Chat</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              Connect directly with our onboarding advisors on WhatsApp for quick guidance on products and starter kits.
            </p>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hello%20VitaNest%20Wellness%2C%20I%20would%20like%20to%20know%20more%20about%20your%20natural%20products%20and%20consultant%20opportunity."
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#2C5E31] hover:bg-[#234D27] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 98765 43210)</span>
          </a>
        </div>

        {/* Email Support */}
        <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAE4DC] text-[#4E6250] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#233525]">Distributor Helpdesk</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              For order dispatches, batch test certificates, tax invoicing, and portal assistance.
            </p>
          </div>
          <a
            href="mailto:support@vitanestwellness.in"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Email support@vitanestwellness.in</span>
          </a>
        </div>

        {/* Grievance Redressal */}
        <div className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAE4DC] text-[#4E6250] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#233525]">Grievance Nodal Officer</h3>
            <p className="text-xs text-[#526654] leading-relaxed">
              Designated officer under Consumer Protection Direct Selling Rules 2021. 48-hour response time.
            </p>
          </div>
          <button
            onClick={onOpenCompliance}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#EDE7DE] hover:bg-[#E3DC4] text-[#2C3E2D] rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>View Nodal Officer Details</span>
          </button>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="bg-[#F2ECE3] border border-[#DFD6C8] rounded-3xl p-6 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4F6451]">
              Write to Our Team
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#233525]">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-[#4E6250] leading-relaxed">
              Whether you are an aspiring consultant curious about the compensation plan, or a customer looking for ingredient batch reports, our wellness concierges will respond within 24 business hours.
            </p>

            <div className="space-y-3 pt-4 text-xs text-[#526654]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#3B543D]" />
                <span>VitaNest Corporate Towers, Level 4, Outer Ring Road, Bengaluru - 560103</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3B543D]" />
                <span>Phone: +91 80 4920 1840 (Mon–Fri, 9:30 AM – 6:00 PM IST)</span>
              </div>
            </div>
          </div>

          {/* Form / Submitted state */}
          <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#DCD3C6] shadow-xs">
            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#E4EEE5] text-[#2C5E31] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#233525]">
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p className="text-xs text-[#526654] max-w-sm mx-auto leading-relaxed">
                  Your message has been received by our Consultant Support team. We will review your inquiry and get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', topic: 'Consultant / Business Inquiry', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-[#3B543D] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF8F5] focus:outline-none focus:border-[#3B543D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF8F5] focus:outline-none focus:border-[#3B543D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF8F5] focus:outline-none focus:border-[#3B543D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                    Subject / Department
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF8F5] focus:outline-none focus:border-[#3B543D]"
                  >
                    <option value="Consultant / Business Inquiry">Business Opportunity & Starter Kit</option>
                    <option value="Product Formulation Inquiry">Product Formulations & FSSAI Details</option>
                    <option value="Order & Tracking">Order Fulfillment & Shipping</option>
                    <option value="Grievance / Compliance">Grievance & 2021 Rules Compliance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="How may our team help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF8F5] focus:outline-none focus:border-[#3B543D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4D6450]">
            Knowledge Base
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#233525]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Category Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap cursor-pointer transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#3B543D] text-white'
                    : 'bg-[#F2ECE4] text-[#4B604E] hover:bg-[#EAE4DC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A8E7C]" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-[#FAF7F2] border border-[#D5CCC0] focus:outline-none focus:border-[#3B543D]"
            />
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#F4EFEB] border border-[#E5DDD2] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#EFE9DF] transition-colors"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-[#233525]">
                    {faq.question}
                  </span>
                  <span className="text-[#697E6B] shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#4F6451] leading-relaxed border-t border-[#E8E2D9] bg-[#FAF7F2]">
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
