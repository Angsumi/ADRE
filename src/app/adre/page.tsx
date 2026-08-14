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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 bg-[#F9F4EB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E3A26] bg-[#9E3A26]/10 px-3.5 py-1.5 rounded-lg border border-[#9E3A26]/20">
          <span>Assam Competitive Exam Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE 3.0 Master Examination Hub
        </h1>
        <p className="text-[#6B5D52] max-w-3xl leading-relaxed text-sm sm:text-base font-medium">
          Assam Direct Recruitment Examination (ADRE) is the gateway to Class III and Class IV government posts across Assam state departments. Explore complete syllabus details, previous year question analysis, and free practice tests.
        </p>
      </header>

      {/* Quick Navigation Cluster Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/adre/syllabus/" className="glass-panel p-6 rounded-2xl border-[#E5DAC8] hover:border-[#9E3A26] transition-all group">
          <div className="w-10 h-10 rounded-xl bg-[#9E3A26]/15 text-[#9E3A26] flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
            📖
          </div>
          <h2 className="text-lg font-bold text-[#1D1814] mb-2 group-hover:text-[#9E3A26]">Detailed Syllabus</h2>
          <p className="text-xs text-[#6B5D52] leading-relaxed mb-4">
            Topic-wise breakdown for Assam GK, Social Studies, General Science, Maths, Reasoning, and English.
          </p>
          <span className="text-xs text-[#9E3A26] font-bold">View Syllabus →</span>
        </Link>

        <Link href="/adre/grade-3/" className="glass-panel p-6 rounded-2xl border-[#E5DAC8] hover:border-[#C9A468] transition-all group">
          <div className="w-10 h-10 rounded-xl bg-[#C9A468]/20 text-[#A88244] flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
            👔
          </div>
          <h2 className="text-lg font-bold text-[#1D1814] mb-2 group-hover:text-[#A88244]">Grade 3 Hub</h2>
          <p className="text-xs text-[#6B5D52] leading-relaxed mb-4">
            Graduate and Higher Secondary category examination patterns, eligibility, and specialized mock tests.
          </p>
          <span className="text-xs text-[#A88244] font-bold">Explore Grade 3 →</span>
        </Link>

        <Link href="/adre/grade-4/" className="glass-panel p-6 rounded-2xl border-[#E5DAC8] hover:border-emerald-600 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/15 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
            ⚙️
          </div>
          <h2 className="text-lg font-bold text-[#1D1814] mb-2 group-hover:text-emerald-700">Grade 4 Hub</h2>
          <p className="text-xs text-[#6B5D52] leading-relaxed mb-4">
            Class 8 and Class 10 pass post details, exam structure, negative marking scheme, and target practice sets.
          </p>
          <span className="text-xs text-emerald-700 font-bold">Explore Grade 4 →</span>
        </Link>

        <Link href="/adre/previous-year-question-paper/" className="glass-panel p-6 rounded-2xl border-[#E5DAC8] hover:border-sky-600 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-sky-600/15 text-sky-700 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-105 transition-transform">
            📝
          </div>
          <h2 className="text-lg font-bold text-[#1D1814] mb-2 group-hover:text-sky-700">PYQ Vault</h2>
          <p className="text-xs text-[#6B5D52] leading-relaxed mb-4">
            Official 2022 and 2024 solved question papers with answer keys and topic distribution stats.
          </p>
          <span className="text-xs text-sky-700 font-bold">Solve PYQs Online →</span>
        </Link>
      </section>

      {/* ADRE Exam Breakdown Article */}
      <article className="glass-panel p-8 rounded-3xl space-y-6 text-[#1D1814] leading-relaxed text-sm">
        <h2 className="text-2xl font-bold text-[#1D1814]">Understanding the ADRE Examination System</h2>
        <p className="text-[#6B5D52]">
          The State Level Recruitment Commission (SLRC) of Assam conducts the Assam Direct Recruitment Examination (ADRE) to streamline recruitment for thousands of vacant Grade III and Grade IV positions across state government departments.
        </p>

        <h3 className="text-xl font-bold text-[#1D1814] pt-2">Key Highlights of ADRE 3.0</h3>
        <ul className="list-disc pl-5 space-y-2 text-[#6B5D52]">
          <li><strong className="text-[#1D1814]">Bilingual Paper Format:</strong> Questions are presented in English, Assamese, Bodo, and Bengali.</li>
          <li><strong className="text-[#1D1814]">OMR-Based Examination:</strong> Multiple Choice Questions (MCQs) evaluated with standard negative marking rules.</li>
          <li><strong className="text-[#1D1814]">Assam GK Weightage:</strong> Up to 35-40% of the total question paper covers Assam History, Culture, Geography, Economy, and Current Affairs.</li>
        </ul>

        <div className="p-6 rounded-2xl bg-[#F3EDE2] border border-[#E5DAC8] flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div>
            <h4 className="text-base font-bold text-[#1D1814]">Test Your Readiness with AxomRank Benchmark Mock</h4>
            <p className="text-xs text-[#6B5D52]">Evaluate your current preparation rank among aspirants in Assam.</p>
          </div>
          <Link
            href="/adre/mock-test/"
            className="btn-ahom-primary whitespace-nowrap text-xs"
          >
            Start Free Mock Test
          </Link>
        </div>
      </article>
    </div>
  );
}

