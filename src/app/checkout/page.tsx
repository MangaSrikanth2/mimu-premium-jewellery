'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const { cart } = useStore();
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal > 50000 ? 0 : 500;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map(item => ({
            productId: item.product.id,
            quantity: item.quantity,
            price: item.product.price
          })),
          totalAmount: total
        })
      });
      const data = await res.json();
      if (data.success) {
        setStep('confirmation');
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (cart.length === 0 && step !== 'confirmation') {
    return (
      <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl font-light mb-6">Your bag is empty</h1>
          <Link href="/collections" className="text-xs uppercase tracking-widest text-mimu-burgundy font-medium underline underline-offset-4">
            Explore Collections
          </Link>
        </div>
      </main>
    );
  }

  if (step === 'confirmation') {
    return (
      <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
          <div className="w-16 h-16 bg-mimu-burgundy/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-mimu-burgundy text-2xl">✓</span>
          </div>
          <h1 className="font-serif text-4xl font-light">Thank You</h1>
          <p className="text-mimu-muted">
            Your demo order has been placed successfully. In a production environment,
            you would receive an order confirmation email with tracking details.
          </p>
          <p className="text-xs uppercase tracking-widest text-mimu-muted">
            Demo Order • No payment processed
          </p>
          <Link href="/" className="inline-block py-4 px-12 bg-mimu-burgundy text-mimu-white text-xs uppercase tracking-widest font-medium hover:bg-mimu-burgundy-dark transition-colors">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-mimu-muted mb-12">
          <Link href="/" className="hover:text-mimu-burgundy">Home</Link>
          <ChevronRight size={10} />
          <span className="text-mimu-text">Checkout</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-3 space-y-10">
            <h1 className="font-serif text-3xl font-light">Checkout</h1>

            {/* Shipping Details */}
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-widest font-medium text-mimu-text border-b border-mimu-border/50 pb-4">
                Shipping Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-mimu-muted block mb-2">First Name</label>
                  <input type="text" className="w-full border border-mimu-border/50 py-3 px-4 text-sm bg-mimu-white focus:border-mimu-burgundy focus:outline-none transition-colors" placeholder="Milan" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-mimu-muted block mb-2">Last Name</label>
                  <input type="text" className="w-full border border-mimu-border/50 py-3 px-4 text-sm bg-mimu-white focus:border-mimu-burgundy focus:outline-none transition-colors" placeholder="Mundada" />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-mimu-muted block mb-2">Email</label>
                <input type="email" className="w-full border border-mimu-border/50 py-3 px-4 text-sm bg-mimu-white focus:border-mimu-burgundy focus:outline-none transition-colors" placeholder="milan@mimu.in" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-mimu-muted block mb-2">Phone</label>
                <input type="tel" className="w-full border border-mimu-border/50 py-3 px-4 text-sm bg-mimu-white focus:border-mimu-burgundy focus:outline-none transition-colors" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-mimu-muted block mb-2">Address</label>
                <textarea className="w-full border border-mimu-border/50 py-3 px-4 text-sm bg-mimu-white focus:border-mimu-burgundy focus:outline-none transition-colors h-24 resize-none" placeholder="Full address" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-mimu-muted block mb-2">City</label>
                  <input type="text" className="w-full border border-mimu-border/50 py-3 px-4 text-sm bg-mimu-white focus:border-mimu-burgundy focus:outline-none transition-colors" placeholder="Mumbai" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-mimu-muted block mb-2">State</label>
                  <input type="text" className="w-full border border-mimu-border/50 py-3 px-4 text-sm bg-mimu-white focus:border-mimu-burgundy focus:outline-none transition-colors" placeholder="Maharashtra" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-mimu-muted block mb-2">PIN Code</label>
                  <input type="text" className="w-full border border-mimu-border/50 py-3 px-4 text-sm bg-mimu-white focus:border-mimu-burgundy focus:outline-none transition-colors" placeholder="400001" />
                </div>
              </div>
            </div>

            {/* Place Order */}
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full py-4 bg-mimu-burgundy text-mimu-white text-xs uppercase tracking-widest font-medium hover:bg-mimu-burgundy-dark transition-colors flex items-center justify-center space-x-3 disabled:opacity-50"
            >
              <Lock size={14} />
              <span>{isProcessing ? 'Processing...' : 'Place Demo Order'}</span>
            </button>
            <p className="text-[10px] text-center text-mimu-muted uppercase tracking-widest">
              Demo mode — No real payment will be processed
            </p>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-mimu-white p-8 border border-mimu-border/30 sticky top-32">
              <h2 className="text-xs uppercase tracking-widest font-medium text-mimu-text mb-8">Order Summary</h2>
              
              <div className="space-y-6 mb-8">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-20 relative bg-mimu-ivory border border-mimu-border/30 overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.primaryImage}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-mimu-text">{item.product.name}</h3>
                      <p className="text-xs text-mimu-muted mt-1">Qty: {item.quantity}</p>
                      <p className="text-sm text-mimu-text mt-1">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-mimu-border/30 pt-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-mimu-muted">Subtotal</span>
                  <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mimu-muted">Shipping</span>
                  <span>{shipping === 0 ? 'Complimentary' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-medium text-base pt-3 border-t border-mimu-border/30">
                  <span>Total</span>
                  <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
