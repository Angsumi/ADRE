import Link from 'next/link';
import { SAMPLE_QUESTIONS } from '@/data/mockData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'ADRE Previous Year Question Paper (PYQ Vault) — 2024 & 2022 Solved',
  description: 'Download and solve official ADRE Grade 3 & Grade 4 previous year question papers online. Detailed Assamese & English answer keys with topic analysis.',
  path: '/adre/previous-year-question-paper/',
});

export default function PyqVaultPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'PYQ Vault', url: '/adre/previous-year-question-paper/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          ADRE Previous Year Question Paper (PYQ Vault)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Access complete, verified official ADRE question papers from 2022 and 2024. Practice questions online with step-by-step Assamese & English explanations.
        </p>
      </header>

      {/* Interactive Solved Questions Section */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Featured Solved PYQ Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SAMPLE_QUESTIONS.map((q) => (
            <div key={q.id} className="glass-panel p-6 rounded-2xl space-y-4 border-axom-border">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded bg-axom-gold/20 text-axom-gold font-bold">
                  ADRE {q.pyqYear} Paper
                </span>
                <span className="text-slate-400">{q.subject}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{q.question}</h3>
              <div className="space-y-1 text-xs text-slate-300">
                {q.options.map((opt, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg border ${
                      i === q.correctAnswer ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 font-semibold' : 'border-axom-border bg-axom-navy/50'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}. {opt} {i === q.correctAnswer && '✓ (Correct)'}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 bg-axom-navy p-3 rounded-lg border border-axom-border/50">
                <strong>Explanation:</strong> {q.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="p-8 rounded-3xl glass-panel text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Want to Solve Full Official PYQ Papers Under Timed Conditions?</h3>
        <Link
          href="/adre/mock-test/"
          className="inline-block px-8 py-3 bg-axom-red hover:bg-axom-redDark text-white font-semibold text-sm rounded-xl shadow-lg"
        >
          Launch Interactive PYQ Test Simulator
        </Link>
      </div>
    </div>
  );
}
