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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#F9F4EB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Hierarchical Container - Matching Mock Test Selector Aesthetics */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DAC8] pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#9E3A26] uppercase tracking-wider">Exam Category Overview</span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1814] mt-1">ADRE 3.0 Master Hub</h1>
          </div>

          <div className="inline-flex bg-[#EBE2D4] p-1 rounded-2xl border border-[#E5DAC8]">
            <span className="px-5 py-2 text-xs font-mono font-extrabold bg-[#9E3A26] text-[#F9F4EB] rounded-xl shadow-md">
              SLRC 2026 Standard
            </span>
          </div>
        </div>

        {/* 3 Main Categories Grid styled exactly like Difficulty Tier Selector Cards */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-[#6B5D52] uppercase tracking-wider block">
            Explore Official Examination Pillars
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/adre/syllabus/"
              className="p-5 rounded-2xl border border-[#E5DAC8] bg-[#F3EDE2] hover:border-[#C9A468] hover:shadow-md transition-all text-left group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-emerald-700/15 text-emerald-800 font-mono">
                  Syllabus
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">6 Modules</span>
              </div>
              <h3 className="text-sm font-bold text-[#1D1814] mt-2 group-hover:text-[#9E3A26]">
                Official Exam Syllabus
              </h3>
              <p className="text-[11px] text-[#6B5D52] mt-1">
                Topic-wise breakdown for Assam GK, Social Studies, Maths, Science & English.
              </p>
            </Link>

            <Link
              href="/adre/previous-year-question-paper/"
              className="p-5 rounded-2xl border border-[#C9A468] bg-[#F3EDE2] ring-2 ring-[#C9A468]/50 shadow-md transition-all text-left group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#C9A468]/20 text-[#A88244] font-mono">
                  PYQ Vault
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">10 Papers</span>
              </div>
              <h3 className="text-sm font-bold text-[#1D1814] mt-2 group-hover:text-[#9E3A26]">
                2022 & 2024 Question Papers
              </h3>
              <p className="text-[11px] text-[#6B5D52] mt-1">
                Original SLRC exam booklets & 1,226+ solved questions with step-by-step solutions.
              </p>
            </Link>

            <Link
              href="/adre/mock-test/"
              className="p-5 rounded-2xl border border-[#E5DAC8] bg-[#F3EDE2] hover:border-[#C9A468] hover:shadow-md transition-all text-left group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#9E3A26]/15 text-[#9E3A26] font-mono">
                  Practice Mocks
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">Timed Exam</span>
              </div>
              <h3 className="text-sm font-bold text-[#1D1814] mt-2 group-hover:text-[#9E3A26]">
                Interactive Mock Test Series
              </h3>
              <p className="text-[11px] text-[#6B5D52] mt-1">
                Full-length mock exams with real OMR timer, negative marking & mistake bank.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* ADRE Exam Breakdown Article Card */}
      <article className="glass-panel p-8 rounded-3xl space-y-6 text-[#1D1814] leading-relaxed text-sm border-[#E5DAC8]">
        <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-4">
          <span className="px-3 py-1 bg-[#9E3A26]/15 text-[#9E3A26] text-xs font-mono font-bold rounded-md uppercase">
            Official Exam Intelligence
          </span>
          <span className="text-xs text-[#6B5D52] font-mono">SLRC Guidelines</span>
        </div>

        <h2 className="text-2xl font-bold text-[#1D1814]">Understanding the ADRE Examination System</h2>
        <p className="text-[#6B5D52]">
          The State Level Recruitment Commission (SLRC) of Assam conducts the Assam Direct Recruitment Examination (ADRE) to streamline recruitment for thousands of vacant Grade III and Grade IV positions across state government departments.
        </p>

        <h3 className="text-lg font-bold text-[#1D1814] pt-2">Key Highlights of ADRE 3.0</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div className="p-4 bg-[#F3EDE2] rounded-xl border border-[#E5DAC8]">
            <span className="text-xs font-mono font-bold text-[#9E3A26] block uppercase">Format</span>
            <span className="text-sm font-bold text-[#1D1814] mt-1 block">Bilingual Paper</span>
            <p className="text-xs text-[#6B5D52] mt-1">Presented in English, Assamese, Bodo, and Bengali.</p>
          </div>
          <div className="p-4 bg-[#F3EDE2] rounded-xl border border-[#E5DAC8]">
            <span className="text-xs font-mono font-bold text-[#A88244] block uppercase">Marking</span>
            <span className="text-sm font-bold text-[#1D1814] mt-1 block">OMR & Negative Marks</span>
            <p className="text-xs text-[#6B5D52] mt-1">0.25 mark deduction for every wrong response.</p>
          </div>
          <div className="p-4 bg-[#F3EDE2] rounded-xl border border-[#E5DAC8]">
            <span className="text-xs font-mono font-bold text-emerald-800 block uppercase">Assam GK</span>
            <span className="text-sm font-bold text-[#1D1814] mt-1 block">35-40% Weightage</span>
            <p className="text-xs text-[#6B5D52] mt-1">Covers History, Geography, Ahom dynasty & Polity.</p>
          </div>
        </div>

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


