'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Lock, Mail, User } from 'lucide-react';

export default function AccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium mb-4">
            Client Portal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
            My Account
          </h1>
          <p className="text-mimu-muted text-sm">
            Sign in to view orders, manage your profile, and access exclusive collections.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <section className="bg-mimu-white border border-mimu-border/40 p-8 md:p-10 space-y-8">
            <div className="flex items-center space-x-3 text-mimu-burgundy">
              <Lock size={18} strokeWidth={1.5} />
              <h2 className="font-serif text-2xl font-light">Sign In</h2>
            </div>

            {submitted ? (
              <div className="space-y-4 text-sm text-mimu-muted">
                <p>
                  Demo sign-in received. Authentication is not yet connected in this preview
                  environment.
                </p>
                <p>
                  For admin access, visit{' '}
                  <Link href="/admin" className="text-mimu-burgundy underline underline-offset-4">
                    Admin
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <label className="block space-y-2">
                  <span className="text-xs uppercase tracking-widest text-mimu-muted">Email</span>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-mimu-muted"
                      strokeWidth={1.5}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-3 border border-mimu-border/50 bg-mimu-ivory/50 text-sm focus:outline-none focus:border-mimu-champagne transition-colors"
                    />
                  </div>
                </label>

                <label className="block space-y-2">
                  <span className="text-xs uppercase tracking-widest text-mimu-muted">Password</span>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-mimu-muted"
                      strokeWidth={1.5}
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 border border-mimu-border/50 bg-mimu-ivory/50 text-sm focus:outline-none focus:border-mimu-champagne transition-colors"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="w-full py-4 bg-mimu-burgundy text-mimu-white text-xs uppercase tracking-widest font-medium hover:bg-mimu-burgundy-dark transition-colors"
                >
                  Sign In
                </button>
              </form>
            )}
          </section>

          <section className="space-y-8">
            <div className="border-t border-mimu-border/50 pt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <User size={18} strokeWidth={1.5} className="text-mimu-champagne" />
                <h2 className="font-serif text-2xl font-light">Account Benefits</h2>
              </div>
              <ul className="space-y-4 text-sm text-mimu-muted">
                <li>Track orders and delivery updates</li>
                <li>Save addresses for faster checkout</li>
                <li>Manage your wishlist across devices</li>
                <li>Receive early access to new collections</li>
              </ul>
            </div>

            <div className="border-t border-mimu-border/50 pt-8 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-mimu-champagne font-medium">
                New to MIMU?
              </h3>
              <p className="text-sm text-mimu-muted leading-relaxed">
                Create an account during checkout or contact our client services team for
                personalised assistance with your first order.
              </p>
              <Link
                href="/contact"
                className="inline-block text-xs uppercase tracking-widest text-mimu-burgundy font-medium underline underline-offset-4"
              >
                Contact Client Services
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
