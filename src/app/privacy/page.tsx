export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-mimu-muted text-sm">Last updated: October 2026</p>
        </header>

        <p className="text-sm text-mimu-muted leading-relaxed">
          MIMU Premium Jewellery respects your privacy. We collect only the information necessary
          to process orders, improve your experience, and communicate about products you may
          value. We do not sell personal data to third parties.
        </p>
        <p className="text-sm text-mimu-muted leading-relaxed">
          Information submitted through account, checkout, or contact forms is stored securely
          and used solely for fulfilment, support, and service-related communication. You may
          request access to or deletion of your data by contacting hello@mimu.in.
        </p>
      </div>
    </main>
  );
}
