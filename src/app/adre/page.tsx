import Link from 'next/link';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'ADRE Master Hub 2026 — Syllabus, Exam Pattern, PYQs & Mocks',
  description: 'The definitive guide for Assam Direct Recruitment Examination (ADRE 3.0). Access Grade 3 and Grade 4 syllabus, eligibility rules, question papers, and free mock tests.',
  path: '/adre/',
});

export default function AdreHubPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-axom-red bg-axom-red/10 px-3 py-1 rounded-md">
          <span>Assam Competitive Exam Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          ADRE 3.0 Master Examination Hub
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed text-sm sm:text-base">
          Assam Direct Recruitment Examination (ADRE) is the gateway to Class III and Class IV government posts across Assam state departments. Explore complete syllabus details, previous year question analysis, and free practice tests.
        </p>
      </header>

      {/* Quick Navigation Cluster Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/adre/syllabus/" className="glass-panel p-6 rounded-2xl border-axom-border hover:border-axom-red/60 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-axom-red/20 text-axom-red flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
            📖
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Detailed Syllabus</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Topic-wise breakdown for Assam GK, Social Studies, General Science, Maths, Reasoning, and English.
          </p>
          <span className="text-xs text-axom-red font-semibold">View Syllabus →</span>
        </Link>

        <Link href="/adre/grade-3/" className="glass-panel p-6 rounded-2xl border-axom-border hover:border-axom-gold/60 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-axom-gold/20 text-axom-gold flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
            👔
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Grade 3 Hub</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Graduate and Higher Secondary category examination patterns, eligibility, and specialized mock tests.
          </p>
          <span className="text-xs text-axom-gold font-semibold">Explore Grade 3 →</span>
        </Link>

        <Link href="/adre/grade-4/" className="glass-panel p-6 rounded-2xl border-axom-border hover:border-emerald-500/60 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
            ⚙️
          </div>
          <h2 className="text-lg font-bold text-white mb-2">Grade 4 Hub</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Class 8 and Class 10 pass post details, exam structure, negative marking scheme, and target practice sets.
          </p>
          <span className="text-xs text-emerald-400 font-semibold">Explore Grade 4 →</span>
        </Link>

        <Link href="/adre/previous-year-question-paper/" className="glass-panel p-6 rounded-2xl border-axom-border hover:border-sky-500/60 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
            📝
          </div>
          <h2 className="text-lg font-bold text-white mb-2">PYQ Vault</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Official 2022 and 2024 solved question papers with answer keys and topic distribution stats.
          </p>
          <span className="text-xs text-sky-400 font-semibold">Solve PYQs Online →</span>
        </Link>
      </section>

      {/* ADRE Exam Breakdown Article */}
      <article className="glass-panel p-8 rounded-3xl space-y-6 text-slate-300 leading-relaxed text-sm">
        <h2 className="text-2xl font-bold text-white">Understanding the ADRE Examination System</h2>
        <p>
          The State Level Recruitment Commission (SLRC) of Assam conducts the Assam Direct Recruitment Examination (ADRE) to streamline recruitment for thousands of vacant Grade III and Grade IV positions across state government departments.
        </p>

        <h3 className="text-xl font-semibold text-white pt-2">Key Highlights of ADRE 3.0</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Bilingual Paper Format:</strong> Questions are presented in English, Assamese, Bodo, and Bengali.</li>
          <li><strong>OMR-Based Examination:</strong> Multiple Choice Questions (MCQs) evaluated with standard negative marking rules.</li>
          <li><strong>Assam GK Weightage:</strong> Up to 35-40% of the total question paper covers Assam History, Culture, Geography, Economy, and Current Affairs.</li>
        </ul>

        <div className="p-4 rounded-xl bg-axom-navy border border-axom-border flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div>
            <h4 className="text-base font-bold text-white">Test Your Readiness with AxomRank Benchmark Mock</h4>
            <p className="text-xs text-slate-400">Evaluate your current preparation rank among aspirants in Assam.</p>
          </div>
          <Link
            href="/adre/mock-test/"
            className="px-6 py-2.5 text-xs font-semibold text-white bg-axom-red hover:bg-axom-redDark rounded-lg whitespace-nowrap"
          >
            Start Free Mock Test
          </Link>
        </div>
      </article>
    </div>
  );
}
