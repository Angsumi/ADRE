import Link from 'next/link';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Assam GK Master Hub — History, Geography, Polity, Culture Notes & MCQs',
  description: 'The definitive Assam General Knowledge (Assam GK) resource for ADRE, APSC, and Assam Police exams. Study notes and MCQs for Ahom Kingdom, Geography, Rivers, & Culture.',
  path: '/assam-gk/',
});

export default function AssamGkHubPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Assam GK', url: '/assam-gk/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md">
          <span>Topical Authority Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Assam GK & Cultural Ecosystem
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Comprehensive, structured Assam General Knowledge preparation portal covering Ancient Assam, Ahom Dynasty, Physical Geography, State Polity, Art, Literature, and Tribal heritage.
        </p>
      </header>

      {/* Subject Cluster Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/assam-gk/history/" className="glass-panel p-6 rounded-2xl border-axom-border hover:border-axom-red/50 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-axom-red/20 text-axom-red flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
            🗡️
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Assam History</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Kamarupa dynasty, 600-year Ahom Kingdom rule, Lachit Borphukan, Saraighat Battle, and freedom movements.
          </p>
          <span className="text-xs text-axom-red font-semibold">Study History Notes →</span>
        </Link>

        <div className="glass-panel p-6 rounded-2xl border-axom-border space-y-2 opacity-90">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl mb-4">
            🏞️
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Assam Geography</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Brahmaputra & Barak basins, 7 National Parks, Ramsar sites, oilfields, and climate zones.
          </p>
          <span className="text-xs text-emerald-400 font-semibold">High Weightage Topic</span>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-axom-border space-y-2 opacity-90">
          <div className="w-10 h-10 rounded-xl bg-axom-gold/20 text-axom-gold flex items-center justify-center font-bold text-xl mb-4">
            📜
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Assam Polity & Admin</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Assam Legislative Assembly, Autonomous Councils (BTC, KAAC, NCHAC), and State Judiciary.
          </p>
          <span className="text-xs text-axom-gold font-semibold">Polity MCQ Sets</span>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-axom-border space-y-2 opacity-90">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xl mb-4">
            🎭
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Art, Culture & Tribes</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Bihu festivals, Sattriya dance, Bodo, Karbi, Mishing, Dimasa cultural traditions & Assamese literature.
          </p>
          <span className="text-xs text-sky-400 font-semibold">Culture MCQ Drills</span>
        </div>
      </div>
    </div>
  );
}
