'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { motion, AnimatePresence } from 'framer-motion';
import { demoProducts } from '@/data/demo-products';
import { ProductCard } from '@/components/product/ProductCard';
import { JewelleryCategorySwitcher } from '@/components/ui/JewelleryCategorySwitcher';

export function CategoryHero() {
  const { category } = useStore();
  const products = demoProducts.filter(p => p.category === category);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <JewelleryCategorySwitcher />

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-mimu-text font-light mb-6">
            {category === 'gold' ? 'THE WARMTH OF GOLD' : 'THE ART OF SILVER'}
          </h2>
          <p className="text-mimu-muted text-lg">
            {category === 'gold' 
              ? 'Distinctive pieces, thoughtfully curated to become part of your story.'
              : 'Refined forms and luminous details for a quietly distinctive expression.'}
          </p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
