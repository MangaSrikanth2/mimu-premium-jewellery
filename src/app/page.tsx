'use client';

import { CategoryHero } from '@/components/home/CategoryHero';
import { useStore } from '@/context/StoreContext';
import Image from 'next/image';

export default function Home() {
  const { category } = useStore();

  return (
    <main className={`flex min-h-screen flex-col items-center transition-colors duration-700 ${
      category === 'gold' ? 'bg-mimu-ivory text-mimu-text' : 'bg-mimu-pearl text-mimu-text'
    }`}>
      
      {/* Cinematic Hero */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={category === 'gold' ? '/images/Gold.jpeg' : '/images/Silver.jpeg'}
            alt="MIMU Premium Jewellery"
            fill
            priority
            className="object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-mimu-obsidian/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-6 max-w-4xl px-4">
          <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium">
            MIMU Premium Jewellery
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light tracking-tight text-mimu-white">
            JEWELLERY THAT SPEAKS<br />
            <span className="italic text-mimu-champagne/90">WITHOUT</span> WORDS.
          </h1>
          
          <p className="text-mimu-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto mt-8">
            Discover a considered world of contemporary elegance with MIMU Premium Jewellery.
          </p>
        </div>
      </section>

      {/* Gold / Silver Experience Section */}
      <CategoryHero />
      
      {/* Brand Tagline Section */}
      <section className="w-full py-32 bg-mimu-burgundy text-mimu-white text-center">
        <h3 className="text-2xl md:text-4xl font-serif font-light tracking-widest max-w-3xl mx-auto leading-relaxed px-6">
          CONFIDENCE. EXPRESSION. GROWTH. ELEGANCE.
        </h3>
      </section>
    </main>
  );
}
