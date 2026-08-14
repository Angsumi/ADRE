import Link from 'next/link';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Assam History Notes & MCQs — Ahom Dynasty, Kamarupa & Freedom Movement',
  description: 'High-yield Assam History notes for ADRE Grade 3 & Grade 4 exams. Covers Chaolung Sukaphaa, Battle of Saraighat (1671), Rudra Singha, and Treaty of Yandabo (1826).',
  path: '/assam-gk/history/',
});

export default function AssamHistoryPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Assam GK', url: '/assam-gk/' },
    { name: 'Assam History', url: '/assam-gk/history/' },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Assam History: High-Yield Notes & Exam Breakdown
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Assam History forms 35%+ of the general knowledge questions in the ADRE Grade 3 and Grade 4 question papers. Master these core historical periods.
        </p>
      </header>

      <article className="glass-panel p-8 rounded-3xl space-y-6 text-slate-300 leading-relaxed text-sm">
        <h2 className="text-xl font-bold text-white">1. Ancient Kamarupa Era</h2>
        <p>
          The earliest period of Assam history is mentioned in the Epics (Mahabharata) as Pragjyotisha. King Narakasura and his son Bhagadatta participated in the Kurukshetra War. In the 4th century AD, Pushyavarman founded the Varman Dynasty of Kamarupa. Bhaskaravarman was the most illustrious Varman ruler and a contemporary of King Harshavardhana. Chinese traveler Hiuen Tsang visited Kamarupa during his reign (640 AD).
        </p>

        <h2 className="text-xl font-bold text-white">2. The Ahom Kingdom (1228 – 1826 AD)</h2>
        <p>
          Chaolung Sukaphaa established the Ahom kingdom in 1228 AD after crossing the Patkai hills from Mong Mao. He established Charaideo as the first permanent capital in 1253 AD.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Battle of Saraighat (1671):</strong> Naval battle fought on the Brahmaputra River near Saraighat (Guwahati) between the Mughal forces (led by Ram Singh I) and the Ahom Kingdom (led by General Lachit Borphukan). The Ahoms secured a decisive victory using guerilla tactics and naval maneuvers.</li>
          <li><strong>Swargadeo Rudra Singha (1696–1714):</strong> Built Rang Ghar, Talatal Ghar in Joysagar, and expanded Ahom diplomatic relations across India.</li>
          <li><strong>Treaty of Yandabo (February 24, 1826):</strong> Marked the end of the First Anglo-Burmese War and handed administration of Assam over to the British East India Company.</li>
        </ul>

        <div className="p-6 rounded-2xl bg-axom-navy border border-axom-border text-center space-y-3 mt-8">
          <h3 className="text-lg font-bold text-white">Test Your Assam History Knowledge</h3>
          <p className="text-xs text-slate-400">Practice 20+ targeted Assam History questions in full exam mode.</p>
          <Link
            href="/adre/mock-test/"
            className="inline-block px-6 py-2.5 bg-axom-red hover:bg-axom-redDark text-white font-semibold text-xs rounded-xl shadow-lg"
          >
            Start Assam History Practice Quiz →
          </Link>
        </div>
      </article>
    </div>
  );
}
