export default function CarePage() {
  const tips = [
    'Store pieces separately in a soft pouch to prevent scratches.',
    'Avoid contact with perfumes, lotions, and household chemicals.',
    'Remove jewellery before swimming, exercising, or bathing.',
    'Clean gently with a soft, lint-free cloth after each wear.',
    'Schedule professional cleaning annually for heirloom pieces.',
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-mimu-champagne font-medium mb-4">
            Client Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
            Care Guide
          </h1>
          <p className="text-mimu-muted text-sm">
            Preserve the brilliance and longevity of your MIMU jewellery with these simple rituals.
          </p>
        </header>

        <ul className="space-y-6">
          {tips.map((tip) => (
            <li key={tip} className="border-t border-mimu-border/50 pt-6 text-sm text-mimu-muted leading-relaxed">
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
