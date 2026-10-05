'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { demoProducts } from '@/data/demo-products';

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDrawer({ isOpen, onClose }: SearchDrawerProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    return demoProducts
      .filter((product) => {
        return (
          product.name.toLowerCase().includes(trimmed) ||
          product.slug.toLowerCase().includes(trimmed) ||
          product.type.toLowerCase().includes(trimmed) ||
          product.collection.toLowerCase().includes(trimmed) ||
          product.tags.some((tag) => tag.toLowerCase().includes(trimmed))
        );
      })
      .slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-mimu-obsidian/40 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-mimu-ivory shadow-2xl z-[70] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            <div className="flex items-center justify-between p-6 border-b border-mimu-border/30">
              <h2 className="text-xs uppercase tracking-[0.3em] font-medium text-mimu-text">
                Search
              </h2>
              <button
                onClick={onClose}
                className="p-2 -m-2 text-mimu-text hover:text-mimu-burgundy transition-colors"
                aria-label="Close search"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="p-6 border-b border-mimu-border/20">
              <div className="relative">
                <Search
                  size={20}
                  strokeWidth={1.5}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-mimu-muted"
                />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, collection or tag..."
                  className="w-full pl-12 pr-4 py-4 bg-mimu-white border border-mimu-border/40 text-mimu-text placeholder:text-mimu-muted focus:outline-none focus:border-mimu-burgundy/40 transition-colors"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {query.trim().length === 0 && (
                <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                  <Search size={40} strokeWidth={1} className="text-mimu-muted mb-6" />
                  <p className="text-sm text-mimu-muted mb-2">
                    Start typing to search our jewellery
                  </p>
                  <p className="text-xs text-mimu-muted/80">
                    Try names, materials, collections or tags
                  </p>
                </div>
              )}

              {query.trim().length > 0 && results.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                  <p className="text-sm text-mimu-text mb-2">No results found</p>
                  <p className="text-xs text-mimu-muted">
                    Try a different search term
                  </p>
                </div>
              )}

              {results.length > 0 && (
                <ul className="divide-y divide-mimu-border/20">
                  {results.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-4 p-6 hover:bg-mimu-pearl/60 transition-colors"
                      >
                        <div className="w-16 h-16 bg-mimu-pearl overflow-hidden flex-shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={product.primaryImage}
                            alt={product.name}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs uppercase tracking-widest text-mimu-muted mb-1">
                            {product.collection}
                          </p>
                          <h3 className="text-sm font-medium text-mimu-text truncate">
                            {product.name}
                          </h3>
                          <p className="text-xs text-mimu-muted mt-1">
                            {new Intl.NumberFormat('en-IN', {
                              style: 'currency',
                              currency: 'INR',
                              maximumFractionDigits: 0,
                            }).format(product.price)}
                          </p>
                        </div>
                        <ArrowRight size={18} strokeWidth={1.5} className="text-mimu-muted" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {results.length > 0 && (
              <div className="p-6 border-t border-mimu-border/30 bg-mimu-pearl text-center">
                <p className="text-[10px] uppercase tracking-widest text-mimu-muted">
                  Showing {results.length} result{results.length === 1 ? '' : 's'}
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
