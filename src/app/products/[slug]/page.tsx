'use client';

import { useParams } from 'next/navigation';
import { demoProducts } from '@/data/demo-products';
import { useStore } from '@/context/StoreContext';
import { useState } from 'react';
import { ShoppingBag, Heart, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = demoProducts.find((p) => p.slug === slug);
  
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <h1 className="text-2xl font-serif">Product not found.</h1>
      </div>
    );
  }

  const isWishlisted = wishlist.includes(product.id);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-mimu-muted mb-12">
          <Link href="/" className="hover:text-mimu-burgundy">Home</Link>
          <ChevronRight size={10} />
          <Link href="/collections" className="hover:text-mimu-burgundy">Jewellery</Link>
          <ChevronRight size={10} />
          <span className="text-mimu-text">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Gallery Placeholder */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-mimu-ivory relative border border-mimu-border/30 overflow-hidden">
              <Image 
                src={product.primaryImage} 
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-mimu-ivory relative border border-mimu-border/30 overflow-hidden hover:border-mimu-burgundy/50 cursor-pointer transition-colors">
                  <Image
                    src={product.primaryImage}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mimu-burgundy font-medium mb-4">
                {product.collection}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4 text-mimu-obsidian">
                {product.name}
              </h1>
              <p className="text-xl font-medium text-mimu-text">
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
              </p>
            </div>

            <div className="prose prose-sm text-mimu-muted">
              <p>{product.description}</p>
            </div>

            <div className="pt-6 border-t border-mimu-border/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-mimu-border/50">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-mimu-muted hover:bg-mimu-ivory transition-colors">-</button>
                  <span className="px-4 py-3 text-sm font-medium w-12 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-mimu-muted hover:bg-mimu-ivory transition-colors">+</button>
                </div>
                
                <button 
                  onClick={() => addToCart({ ...product })} // In a real app we'd pass quantity too
                  className="flex-1 py-4 bg-mimu-burgundy text-mimu-white text-xs uppercase tracking-widest font-medium hover:bg-mimu-burgundy-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingBag size={16} />
                  <span>Add to Bag</span>
                </button>

                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className="p-4 border border-mimu-border/50 text-mimu-muted hover:bg-mimu-ivory hover:text-mimu-burgundy transition-colors"
                >
                  <Heart size={20} className={isWishlisted ? "fill-mimu-burgundy text-mimu-burgundy" : ""} />
                </button>
              </div>
              
              <button className="w-full py-4 bg-transparent border border-mimu-burgundy text-mimu-burgundy text-xs uppercase tracking-widest font-medium hover:bg-mimu-burgundy hover:text-mimu-white transition-colors">
                Request Private Assistance
              </button>
            </div>

            {/* Accordion Placeholders */}
            <div className="space-y-4 pt-8">
              {['Material & Craft', 'Shipping & Delivery', 'Care & Returns'].map((item) => (
                <div key={item} className="border-b border-mimu-border/50 pb-4">
                  <button className="flex items-center justify-between w-full text-sm uppercase tracking-widest font-medium text-mimu-text group">
                    <span>{item}</span>
                    <span className="text-mimu-muted group-hover:text-mimu-burgundy">+</span>
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
