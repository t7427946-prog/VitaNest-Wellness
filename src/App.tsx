/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { LegalNoticeModal } from './components/LegalNoticeModal';
import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { OpportunityView } from './views/OpportunityView';
import { AboutView } from './views/AboutView';
import { SuccessStoriesView } from './views/SuccessStoriesView';
import { TrainingView } from './views/TrainingView';
import { ContactFaqView } from './views/ContactFaqView';
import { DistributorPortalView } from './views/DistributorPortalView';

import {
  PRODUCTS,
  STARTER_KIT,
  COMPENSATION_RANKS,
  TESTIMONIALS,
  TRAINING_LESSONS,
  FAQS,
  DEMO_DISTRIBUTOR
} from './data/mockData';
import { CartItem, Product } from './types';
import { Check, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Starter kit or sample item in cart by default for demonstration
    {
      product: {
        id: 'prod-ashwagandha',
        name: 'Organic Ashwagandha Capsules (KSM-66)',
        price: 799,
        image: '/src/assets/images/product_herbal_care_1791561241176.jpg',
        size: '60 Veggie Capsules',
        categoryLabel: 'Herbal Care'
      },
      quantity: 1
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (
    product: Product | { id: string; name: string; price: number; image: string; size: string; categoryLabel: string },
    quantity: number
  ) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity} × ${product.name} to bag`);
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const handleProceedToCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleOrderSuccess = (orderId: string) => {
    // Clear cart after placing order
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] text-[#243526] selection:bg-[#3B543D] selection:text-white">
      {/* Top Compliance Notice Bar (subtle, quiet, informative) */}
      <div className="bg-[#243526] text-[#FAF8F5] py-1.5 px-4 text-center text-[11px] flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#A8C4AA]" />
        <span>
          Compliant with Consumer Protection (Direct Selling) Rules, 2021 & FSSAI Standards. Income depends on actual product sales.
        </span>
        <button
          onClick={() => setComplianceOpen(true)}
          className="text-[#D8E6D9] underline underline-offset-2 ml-1 hover:text-white cursor-pointer"
        >
          Learn more
        </button>
      </div>

      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={setCurrentView}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenCompliance={() => setComplianceOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={setCurrentView}
            onOpenProductModal={setSelectedProduct}
            onAddToCart={handleAddToCart}
            onOpenCompliance={() => setComplianceOpen(true)}
            featuredProducts={PRODUCTS}
            starterKit={STARTER_KIT}
          />
        )}

        {currentView === 'products' && (
          <ProductsView
            products={PRODUCTS}
            starterKit={STARTER_KIT}
            onOpenProductModal={setSelectedProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentView === 'opportunity' && (
          <OpportunityView
            starterKit={STARTER_KIT}
            ranks={COMPENSATION_RANKS}
            onAddToCart={handleAddToCart}
            onOpenCompliance={() => setComplianceOpen(true)}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={setCurrentView}
            onOpenCompliance={() => setComplianceOpen(true)}
          />
        )}

        {currentView === 'stories' && (
          <SuccessStoriesView
            testimonials={TESTIMONIALS}
            onNavigate={setCurrentView}
            onOpenCompliance={() => setComplianceOpen(true)}
          />
        )}

        {currentView === 'training' && (
          <TrainingView
            lessons={TRAINING_LESSONS}
            onOpenCompliance={() => setComplianceOpen(true)}
          />
        )}

        {currentView === 'contact' && (
          <ContactFaqView
            faqs={FAQS}
            onOpenCompliance={() => setComplianceOpen(true)}
          />
        )}

        {currentView === 'portal' && (
          <DistributorPortalView
            initialProfile={DEMO_DISTRIBUTOR}
            products={PRODUCTS}
            onOpenProductModal={setSelectedProduct}
            onOpenCompliance={() => setComplianceOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentView}
        onOpenCompliance={() => setComplianceOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Legal & Compliance Modal */}
      <LegalNoticeModal
        isOpen={complianceOpen}
        onClose={() => setComplianceOpen(false)}
      />

      {/* Floating Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#243526] text-[#FAF8F5] px-4 py-3 rounded-xl shadow-lg border border-[#3E5540] flex items-center gap-2.5 text-xs animate-in slide-in-from-bottom-2 duration-200">
          <div className="w-4 h-4 rounded-full bg-[#3B543D] text-[#D8E6D9] flex items-center justify-center">
            <Check className="w-3 h-3" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
