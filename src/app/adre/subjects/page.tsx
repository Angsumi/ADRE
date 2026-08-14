import Link from 'next/link';
import { getAllSubjects } from '@/lib/topicData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'All ADRE Subjects & Exam Modules — Grade 3 & Grade 4',
  description: 'Explore subject-wise syllabus modules for Assam Direct Recruitment Exam (ADRE). Assam GK, Mathematics, General Science, Reasoning, and English.',
  path: '/adre/subjects/',
});

export default function AllSubjectsIndexPage() {
  const subjects = getAllSubjects();

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Subjects', url: '/adre/subjects/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E3A26] bg-[#9E3A26]/10 px-3.5 py-1.5 rounded-lg border border-[#9E3A26]/20">
          <span>{subjects.length} Core Exam Subjects</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE Subject Master Directory
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
          Detailed breakdown of all official subjects tested in SLRC ADRE Grade 3 and Grade 4 recruitment papers.
        </p>
      </header>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((sub) => (
          <Link
            key={sub.slug}
            href={`/adre/subjects/${sub.slug}/`}
            className="glass-panel p-6 rounded-2xl border-[#E5DAC8] hover:border-[#9E3A26] transition-all group space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{sub.icon}</span>
                <span className="px-2.5 py-1 rounded bg-[#C9A468]/20 text-[#A88244] font-mono font-bold text-xs">
                  ~{sub.weightagePercent}% Weightage
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1D1814] group-hover:text-[#9E3A26] transition-colors">
                {sub.title}
              </h2>
              <p className="text-xs text-[#6B5D52] leading-relaxed">
                {sub.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5DAC8] flex items-center justify-between text-xs font-mono">
              <span className="text-[#6B5D52] font-bold">{sub.topics.length} Topic Hubs</span>
              <span className="text-[#9E3A26] font-bold">Explore Subject →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
