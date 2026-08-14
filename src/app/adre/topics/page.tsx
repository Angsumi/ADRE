import Link from 'next/link';
import { getAllTopics } from '@/lib/topicData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'All ADRE Preparation Topics — Assam GK, Maths, English, Science',
  description: 'Browse 70+ topic-wise solved question sets for Assam Direct Recruitment Examination (ADRE). Practice Assam History, Geography, Polity, Mathematics, Reasoning, and English.',
  path: '/adre/topics/',
});

export default function AllTopicsIndexPage() {
  const topics = getAllTopics();

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Topics', url: '/adre/topics/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E3A26] bg-[#9E3A26]/10 px-3.5 py-1.5 rounded-lg border border-[#9E3A26]/20">
          <span>{topics.length} Topic Practice Hubs</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE Topic-Wise Practice Directory
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
          Select any subject topic below to solve official previous year questions (2022 & 2024) and high-yield MCQs with step-by-step solutions.
        </p>
      </header>

      {/* Topics Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((t) => (
          <Link
            key={t.slug}
            href={`/adre/topics/${t.slug}/`}
            className="glass-panel p-6 rounded-2xl border-[#E5DAC8] hover:border-[#9E3A26] transition-all group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 rounded bg-[#C9A468]/20 text-[#A88244] font-mono font-bold">
                  {t.subjectName}
                </span>
                <span className="text-[#6B5D52] font-mono font-bold">{t.questions.length} MCQs</span>
              </div>
              <h2 className="text-base font-bold text-[#1D1814] group-hover:text-[#9E3A26] transition-colors">
                {t.title}
              </h2>
              <p className="text-xs text-[#6B5D52] line-clamp-2 leading-relaxed">
                {t.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5DAC8] mt-4 flex items-center justify-between text-xs font-bold text-[#9E3A26]">
              <span>Practice Topic Solvers</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
