export default function ShippingPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium mb-4">
            Client Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
            Shipping & Returns
          </h1>
        </header>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-light">Shipping</h2>
          <p className="text-sm text-mimu-muted leading-relaxed">
            Complimentary insured shipping within India on orders above ₹50,000. Standard delivery
            typically arrives within 5–7 business days. Each piece is carefully packaged in
            signature MIMU presentation.
          </p>
        </section>

        <section className="space-y-4 border-t border-mimu-border/50 pt-8">
          <h2 className="font-serif text-2xl font-light">Returns</h2>
          <p className="text-sm text-mimu-muted leading-relaxed">
            Unworn items in original condition may be returned within 14 days of delivery. Custom
            or engraved pieces are final sale. To initiate a return, contact our client services
            team with your order number.
          </p>
        </section>
      </div>
    </main>
  );
}
