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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero Hierarchical Selector - Matching Mock Test Selector Aesthetics */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DAC8] pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#9E3A26] uppercase tracking-wider">Topical Authority Hub</span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1814] mt-1">Assam GK & Cultural Ecosystem</h1>
          </div>

          <div className="inline-flex bg-[#EBE2D4] p-1 rounded-2xl border border-[#E5DAC8]">
            <span className="px-5 py-2 text-xs font-mono font-extrabold bg-[#C9A468] text-[#1D1814] rounded-xl shadow-md">
              High Yield 35%+ Marks
            </span>
          </div>
        </div>

        {/* 4 Core Subject Pillars styled identically to Mock Test Tier Cards */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-[#6B5D52] uppercase tracking-wider block">
            Select Core Subject Pillar
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/assam-gk/history/"
              className="p-5 rounded-2xl border border-[#9E3A26] bg-[#F3EDE2] ring-2 ring-[#9E3A26]/30 shadow-md transition-all text-left group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#9E3A26]/15 text-[#9E3A26] font-mono">
                  Primary
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">Notes + MCQs</span>
              </div>
              <h2 className="text-sm font-bold text-[#1D1814] mt-2 group-hover:text-[#9E3A26]">
                Assam History & Ahoms
              </h2>
              <p className="text-[11px] text-[#6B5D52] mt-1">
                Kamarupa dynasty, 600-year Ahom Kingdom rule, Lachit Borphukan & Saraighat.
              </p>
            </Link>

            <div className="p-5 rounded-2xl border border-[#E5DAC8] bg-[#F3EDE2]/70 text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-emerald-700/15 text-emerald-800 font-mono">
                  Geography
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">7 Parks</span>
              </div>
              <h2 className="text-sm font-bold text-[#1D1814] mt-2">
                Physical Geography & Rivers
              </h2>
              <p className="text-[11px] text-[#6B5D52] mt-1">
                Brahmaputra basin, National Parks, oilfields, & climate zones.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E5DAC8] bg-[#F3EDE2]/70 text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#C9A468]/20 text-[#A88244] font-mono">
                  Polity
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">Councils</span>
              </div>
              <h2 className="text-sm font-bold text-[#1D1814] mt-2">
                Assam Polity & Admin
              </h2>
              <p className="text-[11px] text-[#6B5D52] mt-1">
                Assam Legislative Assembly, BTC, KAAC, & State Judiciary rules.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E5DAC8] bg-[#F3EDE2]/70 text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-sky-700/15 text-sky-800 font-mono">
                  Culture
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">Tribal</span>
              </div>
              <h2 className="text-sm font-bold text-[#1D1814] mt-2">
                Art, Culture & Heritage
              </h2>
              <p className="text-[11px] text-[#6B5D52] mt-1">
                Bihu, Sattriya, Bodo, Karbi, Mishing traditions & literature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

