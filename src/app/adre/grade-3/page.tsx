import Link from 'next/link';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'ADRE Grade 3 Exam Guide 2026 — Syllabus, Salary, Papers & Mocks',
  description: 'Complete guide for Assam Direct Recruitment Examination Grade III (Graduate & HSSLC level). Syllabus, post details, exam pattern, PYQ papers, and free mock tests.',
  path: '/adre/grade-3/',
});

export default function AdreGrade3Page() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Grade 3', url: '/adre/grade-3/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#A88244] bg-[#C9A468]/15 px-3.5 py-1.5 rounded-lg border border-[#C9A468]/30">
          <span>Official SLRC Grade III Category</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE Grade 3 Examination Master Portal
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
          Comprehensive preparation hub for SLRC ADRE Grade III posts including Bachelor Degree, HSSLC (Class 12), Driver, and Computer/Field Assistant cadres.
        </p>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border-[#E5DAC8]">
          <span className="text-xs font-mono font-bold text-[#9E3A26]">PAPER III</span>
          <h2 className="text-lg font-bold text-[#1D1814] mt-1">HSSLC (10+2) Level</h2>
          <p className="text-xs text-[#6B5D52] mt-2 leading-relaxed">
            Covers Junior Assistant, LDA, Typist, and Field Assistant posts requiring 12th standard pass qualification.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-[#E5DAC8]">
          <span className="text-xs font-mono font-bold text-[#A88244]">PAPER IV</span>
          <h2 className="text-lg font-bold text-[#1D1814] mt-1">Graduate Level</h2>
          <p className="text-xs text-[#6B5D52] mt-2 leading-relaxed">
            Covers Executive Officer, Inspector, Tax Collector, and specialized administrative roles requiring a Bachelor's Degree.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border-[#E5DAC8]">
          <span className="text-xs font-mono font-bold text-emerald-800">PAPER V</span>
          <h2 className="text-lg font-bold text-[#1D1814] mt-1">Driver Cadre</h2>
          <p className="text-xs text-[#6B5D52] mt-2 leading-relaxed">
            Covers Light Motor Vehicle (LMV) Driver posts requiring HSLC pass and valid driving license.
          </p>
        </div>
      </div>

      <article className="glass-panel p-8 rounded-3xl space-y-6 text-[#1D1814] leading-relaxed text-sm border-[#E5DAC8]">
        <h2 className="text-2xl font-bold text-[#1D1814]">ADRE Grade 3 Selection Process & Pattern</h2>
        <p className="text-[#6B5D52]">
          The SLRC Grade 3 selection consists of a written OMR test followed by a Skill Test (Computer Test / Driving Test / Interview) depending on the post category.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-[#6B5D52]">
          <li><strong className="text-[#1D1814]">Total Marks:</strong> 150 Marks (100 Questions)</li>
          <li><strong className="text-[#1D1814]">Duration:</strong> 3 Hours (180 Minutes)</li>
          <li><strong className="text-[#1D1814]">Negative Marking:</strong> 0.25 mark deducted per incorrect answer</li>
        </ul>

        <div className="pt-4 flex flex-wrap gap-4">
          <Link href="/adre/previous-year-question-paper/" className="btn-ahom-primary text-xs">
            Solve Grade 3 PYQs Online
          </Link>
          <Link href="/adre/mock-test/" className="btn-ahom-outline text-xs">
            Take Grade 3 Mock Test
          </Link>
        </div>
      </article>
    </div>
  );
}
