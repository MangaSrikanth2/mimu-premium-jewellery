'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/demo-products';
import { useStore } from '@/context/StoreContext';
import { Heart, ShoppingBag } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const { toggleWishlist, wishlist, addToCart } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="group relative flex flex-col w-full">
      <div className="relative aspect-[4/5] bg-mimu-white overflow-hidden border border-mimu-border/30">
        <Link href={`/products/${product.slug}`} className="block absolute inset-0 z-0">
          <Image 
            src={product.primaryImage} 
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </Link>
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => toggleWishlist(product.id)}
            className="p-2 bg-mimu-white rounded-full shadow-sm hover:scale-105 transition-transform"
          >
            <Heart size={18} className={isWishlisted ? "fill-mimu-burgundy text-mimu-burgundy" : "text-mimu-text"} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-mimu-obsidian/80 to-transparent">
          <button 
            onClick={() => addToCart(product)}
            className="w-full py-3 bg-mimu-white text-mimu-text text-xs uppercase tracking-widest font-medium hover:bg-mimu-ivory transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingBag size={14} />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      <Link href={`/products/${product.slug}`} className="pt-5 space-y-1 text-center block">
        <p className="text-[10px] uppercase tracking-[0.2em] text-mimu-muted">
          {product.collection}
        </p>
        <h3 className="text-[15px] font-medium text-mimu-text hover:text-mimu-burgundy transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-mimu-text pt-1">
          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
        </p>
      </Link>
    </div>
  );
}
