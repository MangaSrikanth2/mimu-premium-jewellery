import { prisma } from '@/lib/db';
import React from 'react';

export default async function AdminDashboard() {
  // Demo fetch to showcase the Prisma database integration
  const productsCount = await prisma.product.count();
  const ordersCount = await prisma.order.count();

  return (
    <div className="min-h-screen bg-mimu-pearl text-mimu-text flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-mimu-obsidian text-mimu-ivory flex flex-col p-6 space-y-6 hidden md:flex">
        <h2 className="font-serif text-2xl tracking-widest text-mimu-champagne mb-8">MIMU ADMIN</h2>
        <nav className="flex flex-col space-y-4 text-sm font-medium tracking-widest uppercase">
          <a href="#" className="text-mimu-champagne">Dashboard</a>
          <a href="#" className="hover:text-mimu-champagne transition-colors">Products</a>
          <a href="#" className="hover:text-mimu-champagne transition-colors">Orders</a>
          <a href="#" className="hover:text-mimu-champagne transition-colors">Customers</a>
          <a href="#" className="hover:text-mimu-champagne transition-colors">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-serif text-mimu-obsidian mb-8">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-mimu-white p-6 border border-mimu-border shadow-sm">
            <h3 className="text-xs uppercase tracking-widest text-mimu-muted mb-2">Total Products</h3>
            <p className="text-4xl font-serif text-mimu-burgundy">{productsCount}</p>
          </div>
          <div className="bg-mimu-white p-6 border border-mimu-border shadow-sm">
            <h3 className="text-xs uppercase tracking-widest text-mimu-muted mb-2">Total Orders</h3>
            <p className="text-4xl font-serif text-mimu-burgundy">{ordersCount}</p>
          </div>
          <div className="bg-mimu-white p-6 border border-mimu-border shadow-sm">
            <h3 className="text-xs uppercase tracking-widest text-mimu-muted mb-2">Total Revenue</h3>
            <p className="text-4xl font-serif text-mimu-burgundy">₹0</p>
          </div>
        </div>

        <div className="bg-mimu-white p-6 border border-mimu-border shadow-sm">
          <h2 className="text-xl font-serif mb-6">Recent Orders</h2>
          {ordersCount === 0 ? (
            <p className="text-sm text-mimu-muted">No orders yet.</p>
          ) : (
            <p className="text-sm text-mimu-muted">Table goes here...</p>
          )}
        </div>
      </main>
    </div>
  );
}
