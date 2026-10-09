import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess
}) => {
  const [name, setName] = useState('Ananya Sen');
  const [phone, setPhone] = useState('9876543210');
  const [email, setEmail] = useState('ananya.sen@example.com');
  const [address, setAddress] = useState('42 Lotus Boulevard, Indiranagar');
  const [city, setCity] = useState('Bengaluru');
  const [pincode, setPincode] = useState('560038');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrderId, setCompletedOrderId] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 999 ? 0 : 75;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `VN-${Math.floor(100000 + Math.random() * 900000)}`;
      setCompletedOrderId(generatedId);
      setIsSubmitting(false);
      onOrderSuccess(generatedId);
    }, 700);
  };

  const handleFinish = () => {
    setCompletedOrderId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#F5F1E8] border border-[#E3DBD0] rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#F5F1E8] border-b border-[#E8E2D9] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#3B543D]" />
            <h3 className="font-serif text-lg font-bold text-[#233525]">
              {completedOrderId ? 'Order Confirmed' : 'Checkout & Delivery Details'}
            </h3>
          </div>
          <button
            onClick={completedOrderId ? handleFinish : onClose}
            className="p-1 text-[#5A6D5C] hover:text-[#233525] rounded-lg hover:bg-[#EDE7DE] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {completedOrderId ? (
          /* Order Confirmation View */
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#E5ECE5] text-[#2C5E31] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#697E6B] font-semibold">
                Thank you, {name}!
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#233525]">
                Your Order has been Placed
              </h2>
              <p className="text-xs text-[#5D705F]">
                Order Reference:{' '}
                <strong className="font-mono-numbers text-[#233525] font-bold text-sm">
                  #{completedOrderId}
                </strong>
              </p>
            </div>

            <div className="bg-[#F3EFEA] p-4 rounded-xl text-left text-xs space-y-2 border border-[#E3DBD0]">
              <div className="flex justify-between text-[#4F6451]">
                <span>Shipping Address:</span>
                <span className="text-right text-[#233525] font-medium">
                  {address}, {city} - {pincode}
                </span>
              </div>
              <div className="flex justify-between text-[#4F6451]">
                <span>Payment Mode:</span>
                <span className="font-semibold uppercase text-[#233525]">{paymentMethod}</span>
              </div>
              <div className="flex justify-between text-[#4F6451]">
                <span>Total Amount Paid / Payable:</span>
                <span className="font-mono-numbers font-bold text-sm text-[#3B543D]">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-[#4F6451]">
                <span>Estimated Delivery:</span>
                <span className="text-[#233525] font-medium">Within 3 business days</span>
              </div>
            </div>

            <p className="text-xs text-[#697E6B]">
              A confirmation receipt and courier tracking link has been simulated for your email ({email}) and WhatsApp ({phone}).
            </p>

            <button
              onClick={handleFinish}
              className="w-full py-2.5 px-4 bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Back to Catalog
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Items Brief */}
            <div className="bg-[#F4EFEB] p-3.5 rounded-xl text-xs flex justify-between items-center border border-[#E5DDD2]">
              <span className="text-[#596D5B] font-medium">
                {items.length} item{items.length > 1 ? 's' : ''} in Bag
              </span>
              <span className="font-mono-numbers font-bold text-[#233525]">
                Total: ₹{total.toLocaleString('en-IN')} (incl. taxes)
              </span>
            </div>

            {/* Customer & Address Form */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4E6450]">
                1. Delivery & Contact Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#3B543D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#3B543D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#3B543D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                  Delivery Street Address
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#3B543D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#4B604D] mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#3B543D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#4B604D] mb-1">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#D5CCC0] rounded-lg bg-[#FAF7F2] focus:outline-none focus:border-[#3B543D]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4E6450]">
                2. Select Payment Method
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                    paymentMethod === 'upi'
                      ? 'border-[#3B543D] bg-[#EBF1EC] text-[#233525]'
                      : 'border-[#D8CFBF] bg-[#FAF7F2] text-[#526654] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <Smartphone className="w-4 h-4 mb-1 text-[#3B543D]" />
                  <span className="block text-xs font-semibold">UPI / QR</span>
                  <span className="text-[10px] text-[#718573]">GPay, PhonePe, Paytm</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                    paymentMethod === 'card'
                      ? 'border-[#3B543D] bg-[#EBF1EC] text-[#233525]'
                      : 'border-[#D8CFBF] bg-[#FAF7F2] text-[#526654] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mb-1 text-[#3B543D]" />
                  <span className="block text-xs font-semibold">Cards / NetBanking</span>
                  <span className="text-[10px] text-[#718573]">Visa, Master, RuPay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                    paymentMethod === 'cod'
                      ? 'border-[#3B543D] bg-[#EBF1EC] text-[#233525]'
                      : 'border-[#D8CFBF] bg-[#FAF7F2] text-[#526654] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <Banknote className="w-4 h-4 mb-1 text-[#3B543D]" />
                  <span className="block text-xs font-semibold">Cash on Delivery</span>
                  <span className="text-[10px] text-[#718573]">Pay upon doorstep receipt</span>
                </button>
              </div>
            </div>

            {/* Direct Selling Consumer Rights Callout */}
            <div className="p-3 bg-[#F2ECE4] rounded-xl text-[11px] text-[#556957] space-y-1 border border-[#E2D9CD]">
              <div className="flex items-center gap-1.5 font-semibold text-[#2C402E]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3B543D]" />
                <span>Consumer Protection (Direct Selling) Rules 2021 Safe-Buy Guarantee</span>
              </div>
              <p>
                Includes 30-day money-back guarantee, genuine tax invoice, and verified batch analysis certificate.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-[#3B543D] hover:bg-[#2C402E] disabled:bg-[#86A888] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              {isSubmitting ? (
                <span>Confirming Order...</span>
              ) : (
                <span>Place Order · ₹{total.toLocaleString('en-IN')}</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
