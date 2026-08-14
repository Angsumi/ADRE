import Link from 'next/link';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Assam Current Affairs Digest 2026 — Weekly & Monthly Exam Updates',
  description: 'Latest Assam Current Affairs for ADRE 3.0, APSC, and Assam Police exams. Monthly PDFs, government schemes, awards, and sports updates.',
  path: '/current-affairs/',
});

export default function CurrentAffairsPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Current Affairs', url: '/current-affairs/' },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Assam & National Current Affairs 2026
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Targeted current affairs updates curated specifically for Assam competitive exams (ADRE Grade 3 & Grade 4).
        </p>
      </header>

      <div className="space-y-6">
        <div className="glass-panel p-6 rounded-2xl border-axom-border space-y-3">
          <span className="px-2.5 py-1 rounded bg-axom-red/20 text-axom-red font-bold text-xs">High-Priority Exam Topics</span>
          <h2 className="text-lg font-bold text-white">Key Assam Government Schemes & Appointments</h2>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
            <li><strong>Orunodoi 3.0 Scheme:</strong> Expansion of financial assistance benefits across Assam districts.</li>
            <li><strong>Assamese Charaideo Moidams UNESCO World Heritage Site:</strong> Inscribed as India's 43rd UNESCO World Heritage property under cultural category.</li>
            <li><strong>Infrastructure Projects:</strong> Guwahati-North Guwahati river bridge project updates and Kaziranga elevated corridor layout.</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl glass-panel text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Practice Current Affairs Questions in ADRE Mock Test</h3>
          <Link
            href="/adre/mock-test/"
            className="inline-block px-8 py-3 bg-axom-red hover:bg-axom-redDark text-white font-semibold text-sm rounded-xl shadow-lg"
          >
            Take Free Current Affairs Mock →
          </Link>
        </div>
      </div>
    </div>
  );
}
