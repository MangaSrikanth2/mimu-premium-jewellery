'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, ProductCategory } from '@/data/demo-products';

interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreContextType {
  category: ProductCategory;
  setCategory: (category: ProductCategory) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<ProductCategory>('gold');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let cartData: CartItem[] = [];
    let wishlistData: string[] = [];
    try {
      const storedCart = localStorage.getItem('mimu-cart');
      const storedWishlist = localStorage.getItem('mimu-wishlist');
      if (storedCart) {
        cartData = JSON.parse(storedCart);
      }
      if (storedWishlist) {
        wishlistData = JSON.parse(storedWishlist);
      }
    } catch (error) {
      console.error('Failed to load cart/wishlist from storage', error);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(cartData);
     
    setWishlist(wishlistData);
     
    setMounted(true);
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('mimu-cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart to storage', error);
    }
  }, [cart, mounted]);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('mimu-wishlist', JSON.stringify(wishlist));
    } catch (error) {
      console.error('Failed to save wishlist to storage', error);
    }
  }, [wishlist, mounted]);

  if (!mounted) return null;

  return (
    <StoreContext.Provider
      value={{
        category,
        setCategory,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        wishlist,
        toggleWishlist,
      }}
    >
      <div className={category === 'gold' ? 'theme-gold' : 'theme-silver'}>
        {children}
      </div>
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
