import Link from 'next/link';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'ADRE Grade 4 Exam Guide 2026 — Syllabus, Papers & Practice Mocks',
  description: 'Complete guide for Assam Direct Recruitment Examination Grade IV (Class 8 & HSLC level). Exam pattern, negative marking, previous year question papers, & free mock tests.',
  path: '/adre/grade-4/',
});

export default function AdreGrade4Page() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Grade 4', url: '/adre/grade-4/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-700/15 px-3.5 py-1.5 rounded-lg border border-emerald-700/30">
          <span>Official SLRC Grade IV Category</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE Grade 4 Examination Master Portal
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
          Targeted preparation portal for SLRC ADRE Grade IV positions including Peon, Chowkidar, Field Guard, Workshop Attendant, and Laboratory Bearer posts.
        </p>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border-[#E5DAC8]">
          <span className="text-xs font-mono font-bold text-[#9E3A26]">PAPER I</span>
          <h2 className="text-lg font-bold text-[#1D1814] mt-1">HSLC (Class 10 Pass) / ITI Level</h2>
          <p className="text-xs text-[#6B5D52] mt-2 leading-relaxed">
            Covers posts requiring 10th pass qualification or ITI trade certificates. High weightage on Elementary Maths & Social Studies.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-[#E5DAC8]">
          <span className="text-xs font-mono font-bold text-[#A88244]">PAPER II</span>
          <h2 className="text-lg font-bold text-[#1D1814] mt-1">Class VIII (Up to Class 8 Pass) Level</h2>
          <p className="text-xs text-[#6B5D52] mt-2 leading-relaxed">
            Covers general support staff posts for candidates with education up to Class 8 standard.
          </p>
        </div>
      </div>

      <article className="glass-panel p-8 rounded-3xl space-y-6 text-[#1D1814] leading-relaxed text-sm border-[#E5DAC8]">
        <h2 className="text-2xl font-bold text-[#1D1814]">ADRE Grade 4 Exam Structure</h2>
        <p className="text-[#6B5D52]">
          Grade 4 examinations consist of a single written test featuring multiple choice questions across English, Assam GK, Basic Mathematics, and General Awareness.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-[#6B5D52]">
          <li><strong className="text-[#1D1814]">Total Questions:</strong> 135 Questions</li>
          <li><strong className="text-[#1D1814]">Total Marks:</strong> 135 Marks</li>
          <li><strong className="text-[#1D1814]">Negative Marking:</strong> 0.25 mark per incorrect answer</li>
        </ul>

        <div className="pt-4 flex flex-wrap gap-4">
          <Link href="/adre/previous-year-question-paper/" className="btn-ahom-primary text-xs">
            Solve Grade 4 PYQs Online
          </Link>
          <Link href="/adre/mock-test/" className="btn-ahom-outline text-xs">
            Take Grade 4 Mock Test
          </Link>
        </div>
      </article>
    </div>
  );
}
