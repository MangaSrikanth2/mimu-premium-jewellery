'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { X, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity } = useStore();

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-mimu-obsidian/40 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-mimu-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-mimu-border/30">
              <h2 className="text-sm font-medium tracking-widest uppercase text-mimu-text">
                Your Bag ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-mimu-ivory rounded-full transition-colors">
                <X size={20} className="text-mimu-text" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <p className="text-mimu-muted">Your bag is empty.</p>
                  <button onClick={onClose} className="text-xs uppercase tracking-widest text-mimu-burgundy font-medium underline underline-offset-4">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-mimu-ivory relative border border-mimu-border/30">
                      <Image
                        src={item.product.primaryImage}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="text-sm font-medium text-mimu-text">{item.product.name}</h3>
                        <p className="text-xs text-mimu-muted mt-1">{item.product.category}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-mimu-border/50">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2 text-mimu-muted hover:text-mimu-text">
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-medium w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 text-mimu-muted hover:text-mimu-text">
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-mimu-text">
                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.product.price * item.quantity)}
                          </p>
                          <button onClick={() => removeFromCart(item.product.id)} className="text-[10px] uppercase tracking-widest text-mimu-muted hover:text-mimu-burgundy mt-2 underline underline-offset-4">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-mimu-border/30 bg-mimu-pearl">
                <div className="flex justify-between text-sm font-medium text-mimu-text mb-6">
                  <span>Subtotal</span>
                  <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(subtotal)}</span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    router.push('/checkout');
                  }}
                  className="w-full py-4 bg-mimu-burgundy text-mimu-white text-xs uppercase tracking-widest font-medium hover:bg-mimu-burgundy-dark transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
