import React, { useState } from 'react';
import { ShoppingBag, UserCheck, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenCompliance: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenCompliance
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'opportunity', label: 'Opportunity' },
    { id: 'about', label: 'About Us' },
    { id: 'stories', label: 'Stories' },
    { id: 'training', label: 'Training' },
    { id: 'contact', label: 'Contact & FAQ' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#E2DAD0] transition-all">
      {/* Top 1-row 3-zone contract bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single line */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left cursor-pointer flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#3B543D] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-bold shadow-xs">
            V
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#233525] group-hover:text-[#3B543D] transition-colors">
              VitaNest Wellness
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#465948]">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer focus-visible:outline-none ${
                  isActive
                    ? 'text-[#233525] font-semibold border-b-2 border-[#3B543D]'
                    : 'hover:text-[#233525]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action & utilities */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCompliance}
            title="Direct Selling Rules 2021 & FSSAI Compliance"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#526654] hover:text-[#233525] transition-colors cursor-pointer rounded-md hover:bg-[#F2ECE4]"
          >
            <ShieldCheck className="w-4 h-4 text-[#3B543D]" />
            <span className="whitespace-nowrap">Compliance</span>
          </button>

          <button
            onClick={() => handleNavClick('portal')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              currentView === 'portal'
                ? 'bg-[#3B543D] text-white shadow-xs'
                : 'bg-[#EDE7DE] text-[#2C3E2D] hover:bg-[#E3DC4]'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Distributor Portal</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="View shopping bag"
            className="relative p-2 text-[#2C3E2D] hover:text-[#3B543D] hover:bg-[#EDE7DE] rounded-lg transition-colors cursor-pointer focus-visible:outline-none"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#3B543D] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono-numbers">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2C3E2D] hover:bg-[#EDE7DE] rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2DAD0] bg-[#F5F1E8] px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                currentView === item.id
                  ? 'bg-[#EAE4DC] text-[#233525] font-semibold'
                  : 'text-[#465948] hover:bg-[#F2ECE4]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#E8E2D9] flex gap-2">
            <button
              onClick={() => {
                onOpenCompliance();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-medium text-center text-[#465948] bg-[#EDE7DE] rounded-lg"
            >
              Legal & Compliance
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
