import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import SyllabusInteractiveHub from '@/components/SyllabusInteractiveHub';

export const metadata = buildMetadata({
  title: 'ADRE Syllabus 2026 — Interactive Grade 3 & Grade 4 Subject Wise Prep Tracker & PDFs',
  description: 'Interactive ADRE syllabus for Grade III & Grade IV exams in Assam. Real-time topic search, progress tracking, category filters, & official PDF downloads for Mathematics, History, Geography, Polity, English, & Reasoning.',
  path: '/adre/syllabus/',
});

export default function AdreSyllabusPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Syllabus', url: '/adre/syllabus/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero Banner */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border-[#E5DAC8]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DAC8] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#9E3A26] uppercase tracking-wider bg-[#9E3A26]/10 px-3 py-1 rounded-md border border-[#9E3A26]/20">
              Interactive Exam Curriculum
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814] mt-2">
              ADRE Syllabus 2026 (Grade 3 & 4)
            </h1>
            <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              Search topics in real time, track your study progress, filter subject categories, and download official PDF syllabus documents.
            </p>
          </div>

          <div className="inline-flex bg-[#EBE2D4] p-1.5 rounded-2xl border border-[#E5DAC8] shrink-0">
            <span className="px-5 py-2.5 text-xs font-mono font-extrabold bg-[#9E3A26] text-[#F9F4EB] rounded-xl shadow-md">
              SLRC 2026 Pattern
            </span>
          </div>
        </div>

        {/* Quick PDF Downloads Bar */}
        <div className="bg-[#F3EDE2] p-5 rounded-2xl border border-[#E5DAC8] space-y-3">
          <span className="text-xs font-mono font-bold text-[#9E3A26] uppercase tracking-wider block">
            📥 Instant Official PDF Downloads
          </span>
          <div className="flex flex-wrap gap-2.5 text-xs font-bold">
            <a href="/ADRE/pdf/syllabus/ADRE_Mathematics_Master_Topic_Map.pdf" download="ADRE_Mathematics_Master_Topic_Map.pdf" className="bg-[#F9F4EB] hover:bg-[#EBE2D4] text-[#1D1814] px-3.5 py-2 rounded-xl border border-[#E5DAC8] transition-colors flex items-center space-x-1.5">
              <span>📐 Math Master Map PDF</span>
            </a>
            <a href="/ADRE/pdf/syllabus/ADRE_History_Syllabus.pdf" download="ADRE_History_Syllabus.pdf" className="bg-[#F9F4EB] hover:bg-[#EBE2D4] text-[#1D1814] px-3.5 py-2 rounded-xl border border-[#E5DAC8] transition-colors flex items-center space-x-1.5">
              <span>🗡️ History Syllabus PDF</span>
            </a>
            <a href="/ADRE/pdf/syllabus/ADRE_Geography_Syllabus.pdf" download="ADRE_Geography_Syllabus.pdf" className="bg-[#F9F4EB] hover:bg-[#EBE2D4] text-[#1D1814] px-3.5 py-2 rounded-xl border border-[#E5DAC8] transition-colors flex items-center space-x-1.5">
              <span>🌍 Geography Syllabus PDF</span>
            </a>
            <a href="/ADRE/pdf/syllabus/ADRE_Polity_Syllabus.pdf" download="ADRE_Polity_Syllabus.pdf" className="bg-[#F9F4EB] hover:bg-[#EBE2D4] text-[#1D1814] px-3.5 py-2 rounded-xl border border-[#E5DAC8] transition-colors flex items-center space-x-1.5">
              <span>🏛️ Polity Syllabus PDF</span>
            </a>
            <a href="/ADRE/pdf/syllabus/ADRE_English_Syllabus.pdf" download="ADRE_English_Syllabus.pdf" className="bg-[#F9F4EB] hover:bg-[#EBE2D4] text-[#1D1814] px-3.5 py-2 rounded-xl border border-[#E5DAC8] transition-colors flex items-center space-x-1.5">
              <span>📚 English Syllabus PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Hub Component */}
      <SyllabusInteractiveHub />
    </div>
  );
}
