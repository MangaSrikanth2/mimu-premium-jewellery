const faqs = [
  {
    question: 'Are MIMU pieces made to order?',
    answer:
      'Most designs are available for immediate dispatch. Select limited-edition pieces may require additional crafting time, noted on the product page.',
  },
  {
    question: 'Do you offer ring sizing?',
    answer:
      'Yes. Contact client services with your preferred size before purchase. Resizing is available on eligible designs within 30 days of delivery.',
  },
  {
    question: 'Is payment secure?',
    answer:
      'In production, checkout is processed through encrypted payment partners. This demo environment does not process live transactions.',
  },
  {
    question: 'Can I gift wrap my order?',
    answer:
      'Complimentary signature MIMU gift packaging is included with every order. A personalised note can be added at checkout.',
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium mb-4">
            Client Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">FAQ</h1>
        </header>

        <div className="space-y-8">
          {faqs.map((faq) => (
            <section key={faq.question} className="border-t border-mimu-border/50 pt-8 space-y-3">
              <h2 className="font-serif text-xl font-light">{faq.question}</h2>
              <p className="text-sm text-mimu-muted leading-relaxed">{faq.answer}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
