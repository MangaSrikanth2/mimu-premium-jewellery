export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-mimu-pearl text-mimu-text">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-mimu-muted text-sm">Last updated: October 2026</p>
        </header>

        <p className="text-sm text-mimu-muted leading-relaxed">
          By accessing MIMU Premium Jewellery, you agree to use this website for lawful purposes
          only. Product images, descriptions, and pricing are subject to change without notice.
          All designs, branding, and content remain the intellectual property of MIMU.
        </p>
        <p className="text-sm text-mimu-muted leading-relaxed">
          Orders are confirmed upon successful payment verification. MIMU reserves the right to
          cancel orders affected by pricing errors or stock unavailability. For questions
          regarding these terms, please contact our client services team.
        </p>
      </div>
    </main>
  );
}
