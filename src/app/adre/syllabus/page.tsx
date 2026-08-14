import Link from 'next/link';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'ADRE Syllabus 2026 — Grade 3 & Grade 4 Subject Wise Breakdown',
  description: 'Complete, updated ADRE syllabus for Grade III & Grade IV exams in Assam. Topic-wise distribution for Assam GK, Social Studies, Mathematics, English, & Reasoning.',
  path: '/adre/syllabus/',
});

export default function AdreSyllabusPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Syllabus', url: '/adre/syllabus/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero Hierarchical Selector Container - Styled identically to Mock-Test Tier Cards */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DAC8] pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#9E3A26] uppercase tracking-wider">Official Curriculum Overview</span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1814] mt-1">ADRE Syllabus 2026 (Grade 3 & 4)</h1>
          </div>

          <div className="inline-flex bg-[#EBE2D4] p-1 rounded-2xl border border-[#E5DAC8]">
            <span className="px-5 py-2 text-xs font-mono font-extrabold bg-[#9E3A26] text-[#F9F4EB] rounded-xl shadow-md">
              SLRC 2026 Pattern
            </span>
          </div>
        </div>

        {/* 4 Core Syllabus Modules Grid - Styled as Tier Cards */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-[#6B5D52] uppercase tracking-wider block">
            Subject-Wise Weightage Breakdown
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-[#9E3A26] bg-[#F3EDE2] ring-2 ring-[#9E3A26]/30 shadow-md text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#9E3A26]/15 text-[#9E3A26] font-mono">
                  35%+ Marks
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">Module 01</span>
              </div>
              <h3 className="text-sm font-bold text-[#1D1814] mt-2">Assam GK & History</h3>
              <p className="text-[11px] text-[#6B5D52] mt-1">Ahoms, Rivers, Parks, Polity & Culture.</p>
            </div>

            <div className="p-5 rounded-2xl border border-[#C9A468] bg-[#F3EDE2] shadow-sm text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#C9A468]/20 text-[#A88244] font-mono">
                  Class 10/12 Level
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">Module 02</span>
              </div>
              <h3 className="text-sm font-bold text-[#1D1814] mt-2">Mathematics & Aptitude</h3>
              <p className="text-[11px] text-[#6B5D52] mt-1">Percentages, Profit/Loss, Ratios, Speed & Work.</p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E5DAC8] bg-[#F3EDE2] shadow-sm text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-sky-700/15 text-sky-800 font-mono">
                  High Scoring
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">Module 03</span>
              </div>
              <h3 className="text-sm font-bold text-[#1D1814] mt-2">Logical Reasoning</h3>
              <p className="text-[11px] text-[#6B5D52] mt-1">Analogy, Coding, Blood Relations & Series.</p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E5DAC8] bg-[#F3EDE2] shadow-sm text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-emerald-700/15 text-emerald-800 font-mono">
                  Grammar & Vocab
                </span>
                <span className="text-[11px] text-[#6B5D52] font-mono">Module 04</span>
              </div>
              <h3 className="text-sm font-bold text-[#1D1814] mt-2">General English</h3>
              <p className="text-[11px] text-[#6B5D52] mt-1">Antonyms, Prepositions, Tenses & Vocab.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Topic Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assam GK */}
        <div className="glass-panel p-6 rounded-3xl space-y-4 border-[#E5DAC8]">
          <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-3">
            <h2 className="text-lg font-bold text-[#1D1814]">1. Assam General Knowledge & Culture</h2>
            <span className="text-xs font-mono font-bold text-[#9E3A26] bg-[#9E3A26]/15 px-2.5 py-1 rounded-md uppercase">
              High Weightage
            </span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-[#6B5D52] list-disc pl-5">
            <li><strong className="text-[#1D1814]">Assam History:</strong> Ancient Kamarupa Kingdom, Ahom Dynasty (1228-1826), Moamoria Rebellion, Treaty of Yandabo (1826), Freedom Movement in Assam.</li>
            <li><strong className="text-[#1D1814]">Assam Geography:</strong> Physical divisions, Brahmaputra & Barak river systems, 7 National Parks, Climate, Mineral resources.</li>
            <li><strong className="text-[#1D1814]">Assam Polity & Economy:</strong> Assam Panchayat Raj, State Executive, Tea Industry, Oil Refineries, Infrastructure projects.</li>
            <li><strong className="text-[#1D1814]">Assam Art & Literature:</strong> Bihu festivals, Folk dances, Sattriya dance, Eminent Assamese literary figures (Sankardev, Bezbaroa).</li>
          </ul>
          <div className="pt-2">
            <Link href="/assam-gk/" className="btn-ahom-primary text-xs inline-block">
              Practice Assam GK Topic MCQs →
            </Link>
          </div>
        </div>

        {/* Mathematics */}
        <div className="glass-panel p-6 rounded-3xl space-y-4 border-[#E5DAC8]">
          <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-3">
            <h2 className="text-lg font-bold text-[#1D1814]">2. Mathematics & Quantitative Aptitude</h2>
            <span className="text-xs font-mono font-bold text-[#A88244] bg-[#C9A468]/20 px-2.5 py-1 rounded-md uppercase">
              Class 10 / 12 Level
            </span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-[#6B5D52] list-disc pl-5">
            <li><strong className="text-[#1D1814]">Basic Arithmetic:</strong> Number Systems, Simplification, HCF & LCM.</li>
            <li><strong className="text-[#1D1814]">Commercial Math:</strong> Percentage, Profit & Loss, Simple & Compound Interest.</li>
            <li><strong className="text-[#1D1814]">Applications:</strong> Ratio & Proportion, Time & Work, Speed Distance & Time.</li>
            <li><strong className="text-[#1D1814]">Geometry & DI:</strong> Basic Geometry, Mensuration (Area & Volume), Data Interpretation tables.</li>
          </ul>
          <div className="pt-2">
            <Link href="/adre/mock-test/" className="btn-ahom-primary text-xs inline-block">
              Attempt Maths Mock Test →
            </Link>
          </div>
        </div>

        {/* Reasoning */}
        <div className="glass-panel p-6 rounded-3xl space-y-4 border-[#E5DAC8]">
          <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-3">
            <h2 className="text-lg font-bold text-[#1D1814]">3. Logical Reasoning & Mental Ability</h2>
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-700/15 px-2.5 py-1 rounded-md uppercase">
              High Scoring
            </span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-[#6B5D52] list-disc pl-5">
            <li><strong className="text-[#1D1814]">Verbal Reasoning:</strong> Analogy, Classification, Coding-Decoding.</li>
            <li><strong className="text-[#1D1814]">Analytical Ability:</strong> Blood Relations, Direction Sense Test, Number & Letter Series.</li>
            <li><strong className="text-[#1D1814]">Logic:</strong> Syllogism, Venn Diagrams, Non-Verbal Pattern Completion.</li>
          </ul>
        </div>

        {/* English */}
        <div className="glass-panel p-6 rounded-3xl space-y-4 border-[#E5DAC8]">
          <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-3">
            <h2 className="text-lg font-bold text-[#1D1814]">4. General English</h2>
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-700/15 px-2.5 py-1 rounded-md uppercase">
              Grammar & Vocab
            </span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-[#6B5D52] list-disc pl-5">
            <li><strong className="text-[#1D1814]">Vocabulary:</strong> Synonyms, Antonyms, One-word substitutions, Idioms.</li>
            <li><strong className="text-[#1D1814]">Grammar Rules:</strong> Prepositions, Tenses, Active/Passive Voice, Direct/Indirect Speech.</li>
            <li><strong className="text-[#1D1814]">Comprehension:</strong> Reading passages, Sentence Correction & Fillers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

