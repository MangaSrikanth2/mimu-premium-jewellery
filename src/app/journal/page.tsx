'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const journalPosts = [
  {
    id: 'art-of-gold',
    title: 'The Art of Warm Gold',
    excerpt:
      'How MIMU interprets gold not as spectacle, but as a quiet language of confidence and enduring elegance.',
    category: 'Craft',
    date: 'September 2026',
    image: '/images/Gold.jpeg',
  },
  {
    id: 'silver-minimalism',
    title: 'Silver, Reimagined',
    excerpt:
      'Contemporary silhouettes and luminous surfaces — exploring the restrained beauty of our silver collection.',
    category: 'Collections',
    date: 'August 2026',
    image: '/images/Silver.jpeg',
  },
  {
    id: 'milan-vision',
    title: 'A Vision by Milan Sanjivji Mundada',
    excerpt:
      'The founder on building a jewellery house rooted in expression, growth, and pieces that outlast trends.',
    category: 'Founder',
    date: 'July 2026',
    image: '/images/Gold.jpeg',
  },
  {
    id: 'care-rituals',
    title: 'Care Rituals for Heirloom Pieces',
    excerpt:
      'Simple practices to preserve the brilliance of your MIMU jewellery for years to come.',
    category: 'Guide',
    date: 'June 2026',
    image: '/images/Silver.jpeg',
  },
];

export default function JournalPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium mb-4">
            Editorial
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
            The MIMU Journal
          </h1>
          <p className="text-mimu-muted text-sm leading-relaxed">
            Stories on craftsmanship, collections, and the philosophy behind every piece we create.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {journalPosts.map((post) => (
            <article
              key={post.id}
              className="group border border-mimu-border/30 bg-mimu-white overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-mimu-muted">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="font-serif text-2xl font-light group-hover:text-mimu-burgundy transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-mimu-muted leading-relaxed">{post.excerpt}</p>
                <Link
                  href="/collections"
                  className="inline-block text-xs uppercase tracking-widest text-mimu-burgundy font-medium underline underline-offset-4"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
