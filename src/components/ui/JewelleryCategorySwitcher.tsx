'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { motion } from 'framer-motion';

export function JewelleryCategorySwitcher() {
  const { category, setCategory } = useStore();

  return (
    <div className="flex justify-center w-full mb-12">
      <div className="relative flex space-x-12 border-b border-mimu-border pb-4">
        <button
          onClick={() => setCategory('gold')}
          className={`relative text-sm tracking-widest uppercase transition-colors duration-500 font-medium ${
            category === 'gold' ? 'text-mimu-burgundy' : 'text-mimu-muted hover:text-mimu-text'
          }`}
        >
          Gold Jewellery
          {category === 'gold' && (
            <motion.div
              layoutId="activeCategoryIndicator"
              className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-mimu-burgundy"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
        
        <button
          onClick={() => setCategory('silver')}
          className={`relative text-sm tracking-widest uppercase transition-colors duration-500 font-medium ${
            category === 'silver' ? 'text-mimu-text' : 'text-mimu-muted hover:text-mimu-text'
          }`}
        >
          Silver Jewellery
          {category === 'silver' && (
            <motion.div
              layoutId="activeCategoryIndicator"
              className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-mimu-silver"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      </div>
    </div>
  );
}
