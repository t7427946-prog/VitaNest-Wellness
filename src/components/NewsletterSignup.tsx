import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

interface NewsletterSignupProps {
  className?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage(null);
  };

  return (
    <div className={`rounded-2xl bg-[#28382A] border border-[#3E523F] p-6 sm:p-8 text-[#E5EBE5] shadow-xs ${className}`}>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Text Content */}
        <div className="space-y-1.5 md:max-w-md">
          <div className="flex items-center gap-2 text-xs text-[#9DC49F]">
            <Mail className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">Stay Connected</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F5]">
            Nourish Your Inbox with Pure Living
          </h3>
          <p className="text-xs text-[#A8BCA9] leading-relaxed">
            Subscribe for seasonal Ayurvedic recipes, mindful wellness rituals, exclusive formulation updates, and community highlights.
          </p>
        </div>

        {/* Input & Form */}
        <div className="md:w-[380px] shrink-0">
          {status === 'success' ? (
            <div className="p-4 bg-[#1F2C21] border border-[#3E5540] rounded-xl space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#C4E0C6] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#86A888]" />
                <span>Welcome to our wellness circle!</span>
              </div>
              <p className="text-[#A8BCA9] text-[11px] leading-relaxed">
                We've noted <strong className="text-white">{email}</strong>. Look out for our welcome guide and herbal living tips shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="text-[11px] text-[#C2D1C3] underline underline-offset-2 hover:text-white cursor-pointer pt-1"
              >
                Sign up another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Enter your email address"
                    aria-label="Email address for wellness updates"
                    className="w-full px-3.5 py-2.5 text-xs text-[#FAF8F5] placeholder-[#7E9680] bg-[#1F2C21] border border-[#3B4E3C] rounded-xl focus:outline-none focus:border-[#86A888] focus:ring-1 focus:ring-[#86A888] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-5 py-2.5 text-xs font-semibold text-[#1F2C21] bg-[#E5EBE5] hover:bg-[#FAF7F2] rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5 disabled:opacity-75 shadow-xs"
                >
                  <span>{status === 'submitting' ? 'Joining...' : 'Join our community'}</span>
                  {status !== 'submitting' && <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>

              {errorMessage && (
                <p className="text-[11px] text-[#E5A8A8] pl-1">{errorMessage}</p>
              )}

              <p className="text-[10px] text-[#86A888] pl-1">
                Zero spam. You can unsubscribe at any time. Respectful of your privacy.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
