'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { demoProducts } from '@/data/demo-products';
import { ProductCard } from '@/components/product/ProductCard';

export default function WishlistPage() {
  const { wishlist, category } = useStore();
  const savedProducts = demoProducts.filter((product) => wishlist.includes(product.id));

  return (
    <main
      className={`min-h-screen pt-32 pb-24 transition-colors duration-700 ${
        category === 'gold' ? 'bg-mimu-ivory text-mimu-text' : 'bg-mimu-pearl text-mimu-text'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium mb-4">
            Saved Pieces
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
            Your Wishlist
          </h1>
          <p className="text-mimu-muted text-sm">
            Curate the pieces that speak to you — return anytime to refine your selection.
          </p>
        </header>

        {savedProducts.length === 0 ? (
          <div className="max-w-md mx-auto text-center space-y-6 py-16">
            <div className="w-16 h-16 bg-mimu-burgundy/10 rounded-full flex items-center justify-center mx-auto">
              <Heart size={24} className="text-mimu-burgundy" strokeWidth={1.5} />
            </div>
            <p className="text-mimu-muted">Your wishlist is empty.</p>
            <Link
              href="/collections"
              className="inline-block text-xs uppercase tracking-widest text-mimu-burgundy font-medium underline underline-offset-4"
            >
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {savedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
