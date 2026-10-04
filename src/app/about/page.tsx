'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-mimu-pearl text-mimu-text">
      
      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Gold.jpeg"
            alt="MIMU Premium Jewellery — About"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-mimu-obsidian/50" />
        </div>
        <div className="relative z-10 text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium">Our Story</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-mimu-white tracking-tight">About MIMU</h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 py-24 space-y-16">
        <div className="text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-mimu-obsidian">
            Founded by Milan Sanjivji Mundada
          </h2>
          <p className="text-mimu-muted text-lg leading-relaxed max-w-2xl mx-auto">
            MIMU Premium Jewellery was born from a singular vision — to create jewellery 
            that transcends trends and speaks to the enduring elegance within each individual. 
            Every piece is a dialogue between heritage craftsmanship and contemporary design, 
            curated for moments that deserve to last.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          {[
            { title: 'Confidence', description: 'Jewellery that empowers. Each piece is designed to amplify the inherent strength and poise of the wearer.' },
            { title: 'Expression', description: 'Every design tells a story. MIMU jewellery is a medium for personal narratives, not just ornamentation.' },
            { title: 'Growth', description: 'Like its wearer, each piece evolves — collecting memories, marking milestones, gaining meaning over time.' },
            { title: 'Elegance', description: 'Understated luxury. We believe true elegance whispers — it does not shout. Our designs reflect this philosophy.' }
          ].map((value) => (
            <div key={value.title} className="space-y-4 border-t border-mimu-border/50 pt-6">
              <h3 className="font-serif text-2xl font-light text-mimu-obsidian">{value.title}</h3>
              <p className="text-mimu-muted text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="w-full bg-mimu-obsidian text-mimu-ivory py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium">Craftsmanship</p>
            <h2 className="font-serif text-4xl font-light">
              Where Tradition Meets<br />Modern Artistry
            </h2>
            <p className="text-mimu-muted leading-relaxed">
              Every MIMU piece undergoes a meticulous journey from concept to creation. 
              We partner with master artisans who honour time-honoured techniques while 
              embracing innovative methods that elevate each design to its fullest potential.
            </p>
            <p className="text-mimu-muted leading-relaxed">
              Our commitment to quality is absolute — from the sourcing of ethically-procured 
              precious metals to the final polish that gives each piece its distinctive MIMU character.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/Silver.jpeg"
              alt="MIMU Craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="w-full py-24 bg-mimu-burgundy text-mimu-white text-center">
        <h3 className="text-2xl md:text-4xl font-serif font-light tracking-widest max-w-3xl mx-auto leading-relaxed px-6">
          CONFIDENCE. EXPRESSION. GROWTH. ELEGANCE.
        </h3>
      </section>
    </main>
  );
}
