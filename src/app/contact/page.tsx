'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium mb-4">
            Client Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">Contact</h1>
          <p className="text-mimu-muted text-sm">
            We would be delighted to assist with orders, sizing, gifting, and bespoke enquiries.
          </p>
        </header>

        {submitted ? (
          <p className="text-center text-mimu-muted text-sm">
            Thank you for reaching out. Our team will respond within one business day.
          </p>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6 bg-mimu-white border border-mimu-border/40 p-8 md:p-10"
          >
            <label className="block space-y-2">
              <span className="text-xs uppercase tracking-widest text-mimu-muted">Name</span>
              <input required className="w-full px-4 py-3 border border-mimu-border/50 bg-mimu-ivory/50 text-sm focus:outline-none focus:border-mimu-champagne" />
            </label>
            <label className="block space-y-2">
              <span className="text-xs uppercase tracking-widest text-mimu-muted">Email</span>
              <input type="email" required className="w-full px-4 py-3 border border-mimu-border/50 bg-mimu-ivory/50 text-sm focus:outline-none focus:border-mimu-champagne" />
            </label>
            <label className="block space-y-2">
              <span className="text-xs uppercase tracking-widest text-mimu-muted">Message</span>
              <textarea required rows={5} className="w-full px-4 py-3 border border-mimu-border/50 bg-mimu-ivory/50 text-sm focus:outline-none focus:border-mimu-champagne resize-none" />
            </label>
            <button type="submit" className="w-full py-4 bg-mimu-burgundy text-mimu-white text-xs uppercase tracking-widest font-medium hover:bg-mimu-burgundy-dark transition-colors">
              Send Message
            </button>
          </form>
        )}

        <div className="mt-12 text-center text-sm text-mimu-muted space-y-2">
          <p>Email: hello@mimu.in</p>
          <p>Hours: Monday – Saturday, 10:00 – 19:00 IST</p>
        </div>
      </div>
    </main>
  );
}
