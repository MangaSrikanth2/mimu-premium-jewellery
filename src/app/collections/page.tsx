'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { demoProducts } from '@/data/demo-products';
import { ProductCard } from '@/components/product/ProductCard';
import { JewelleryCategorySwitcher } from '@/components/ui/JewelleryCategorySwitcher';
import { motion, AnimatePresence } from 'framer-motion';

export default function CollectionsPage() {
  const { category } = useStore();
  const products = demoProducts.filter(p => p.category === category);

  return (
    <main className={`min-h-screen pt-32 pb-24 transition-colors duration-700 ${
      category === 'gold' ? 'bg-mimu-ivory text-mimu-text' : 'bg-mimu-pearl text-mimu-text'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
            Curated Collections
          </h1>
          <p className="text-mimu-muted text-sm uppercase tracking-widest">
            {category === 'gold' ? 'The Warmth of Gold' : 'The Art of Silver'}
          </p>
        </header>

        <JewelleryCategorySwitcher />

        {/* Filter Bar Placeholder */}
        <div className="flex justify-between items-center py-4 border-y border-mimu-border/30 mb-12 text-xs uppercase tracking-widest text-mimu-muted">
          <div className="flex space-x-6">
            <button className="hover:text-mimu-burgundy transition-colors">Category</button>
            <button className="hover:text-mimu-burgundy transition-colors">Price</button>
            <button className="hover:text-mimu-burgundy transition-colors">Sort</button>
          </div>
          <div>
            <span>{products.length} Products</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </main>
  );
}
