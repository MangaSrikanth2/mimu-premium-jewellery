'use client';

import React from 'react';
import Link from 'next/link';
import { MimuLogo } from '@/components/ui/MimuLogo';

export function SiteFooter() {
  return (
    <footer className="bg-mimu-obsidian text-mimu-ivory border-t border-mimu-border/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <MimuLogo linked={false} variant="light" imageClassName="w-[140px] md:w-[160px]" />
            </div>
            <p className="text-sm text-mimu-muted max-w-sm mb-6">
              MIMU Premium Jewellery, curated by Milan Sanjivji Mundada. 
              An expression of modern elegance — jewellery curated for moments that deserve to endure.
            </p>
            <div className="flex space-x-4 text-xs uppercase tracking-widest font-medium">
              <a href="#" className="text-mimu-muted hover:text-mimu-champagne transition-colors">Instagram</a>
              <a href="#" className="text-mimu-muted hover:text-mimu-champagne transition-colors">Facebook</a>
              <a href="#" className="text-mimu-muted hover:text-mimu-champagne transition-colors">Twitter</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-mimu-champagne">Explore</h4>
            <ul className="space-y-4 text-sm text-mimu-muted">
              <li><Link href="/collections" className="hover:text-mimu-ivory transition-colors">Jewellery</Link></li>
              <li><Link href="/collections/gold" className="hover:text-mimu-ivory transition-colors">Gold Collection</Link></li>
              <li><Link href="/collections/silver" className="hover:text-mimu-ivory transition-colors">Silver Collection</Link></li>
              <li><Link href="/about" className="hover:text-mimu-ivory transition-colors">About Us</Link></li>
              <li><Link href="/journal" className="hover:text-mimu-ivory transition-colors">Journal</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-mimu-champagne">Client Services</h4>
            <ul className="space-y-4 text-sm text-mimu-muted">
              <li><Link href="/contact" className="hover:text-mimu-ivory transition-colors">Contact</Link></li>
              <li><Link href="/shipping" className="hover:text-mimu-ivory transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/care" className="hover:text-mimu-ivory transition-colors">Care Guide</Link></li>
              <li><Link href="/faq" className="hover:text-mimu-ivory transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mimu-border/10 pt-10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm font-serif tracking-widest text-mimu-champagne mb-4 md:mb-0">
            CONFIDENCE. EXPRESSION. GROWTH. ELEGANCE.
          </p>
          <div className="text-xs text-mimu-muted space-x-6 flex items-center">
            <span>&copy; {new Date().getFullYear()} MIMU Premium Jewellery.</span>
            <Link href="/privacy" className="hover:text-mimu-ivory">Privacy</Link>
            <Link href="/terms" className="hover:text-mimu-ivory">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
