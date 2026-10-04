'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Heart, Search, ShoppingBag, User, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { CartDrawer } from '@/components/cart/CartDrawer';

export function SiteHeader() {
  const { cart, wishlist, category } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const themeTextColor = category === 'gold' ? 'text-mimu-text' : 'text-mimu-text';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-mimu-ivory/90 backdrop-blur-md border-b border-mimu-border/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
          <Link href="/collections" className={`${themeTextColor} hover:text-mimu-champagne transition-colors`}>Jewellery</Link>
          <Link href="/about" className={`${themeTextColor} hover:text-mimu-champagne transition-colors`}>About</Link>
          <Link href="/journal" className={`${themeTextColor} hover:text-mimu-champagne transition-colors`}>Journal</Link>
        </nav>

        {/* Logo */}
        <div className="flex-1 md:flex-none flex justify-center">
          <Link href="/">
            <h1 className={`font-serif text-3xl font-bold tracking-widest ${themeTextColor}`}>
              MIMU
            </h1>
          </Link>
        </div>

        {/* Right Nav */}
        <div className="flex items-center space-x-6">
          <button className={`${themeTextColor} hover:text-mimu-champagne transition-colors`}>
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link href="/account" className={`hidden md:block ${themeTextColor} hover:text-mimu-champagne transition-colors`}>
            <User size={20} strokeWidth={1.5} />
          </Link>
          <Link href="/wishlist" className={`relative ${themeTextColor} hover:text-mimu-champagne transition-colors`}>
            <Heart size={20} strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-mimu-burgundy text-mimu-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-medium">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button onClick={() => setIsCartOpen(true)} className={`relative ${themeTextColor} hover:text-mimu-champagne transition-colors`}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-mimu-burgundy text-mimu-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
