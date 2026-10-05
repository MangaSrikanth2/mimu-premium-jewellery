'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';

export function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative hidden md:block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-mimu-text hover:text-mimu-champagne transition-colors flex items-center gap-1"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Account menu"
      >
        <User size={20} strokeWidth={1.5} />
        <span className="text-[10px] uppercase tracking-widest hidden lg:block ml-1">
          Account
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-3 w-56 bg-mimu-white border border-mimu-border/40 shadow-lg z-[80] py-2"
          role="menu"
        >
          <Link
            href="/account"
            className="block px-5 py-2 text-xs uppercase tracking-widest text-mimu-text hover:bg-mimu-pearl/60 transition-colors"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            Sign in / Register
          </Link>
          <Link
            href="/wishlist"
            className="block px-5 py-2 text-xs uppercase tracking-widest text-mimu-text hover:bg-mimu-pearl/60 transition-colors"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            Wishlist
          </Link>

        </div>
      )}
    </div>
  );
}
