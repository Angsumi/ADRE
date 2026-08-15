import Link from 'next/link';
import { getArticlesByCategory } from '@/lib/articlesData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'ADRE Eligibility Criteria 2026 — Grade 3 & Grade 4 Age Limit, Qualification & Rules',
  description: 'Complete official ADRE eligibility guidelines for Grade III & Grade IV vacancies in Assam. Age limit, relaxation rules, educational qualifications, document checklist, & SC/ST/OBC/PwBD criteria.',
  path: '/adre-eligibility/',
});

export default function AdreEligibilityHubPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Eligibility', url: '/adre-eligibility/' },
  ]);

  const articles = getArticlesByCategory('adre-eligibility');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Hero Banner */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border-[#E5DAC8]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DAC8] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#9E3A26] uppercase tracking-wider bg-[#9E3A26]/10 px-3 py-1 rounded-md border border-[#9E3A26]/20">
              Official Recruitment Criteria
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814] mt-2">
              ADRE Eligibility Criteria 2026
            </h1>
            <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              Verified rules for Grade 3 (18–40 years) & Grade 4 (18–38 years) posts, educational requirements, category-wise age relaxations, and document checklist.
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <Link
              href="/tools/eligibility-checker/"
              className="btn-ahom-primary text-xs font-bold text-center py-3 px-5 shadow-lg"
            >
              ⚡ Launch Interactive Eligibility Checker →
            </Link>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono font-bold text-center">
          <div className="bg-[#F3EDE2] p-4 rounded-2xl border border-[#E5DAC8]">
            <span className="text-[#6B5D52] block text-[10px] uppercase">Grade 3 Age Limit</span>
            <span className="text-base text-[#1D1814] font-extrabold mt-1 block">18 – 40 Years</span>
          </div>
          <div className="bg-[#F3EDE2] p-4 rounded-2xl border border-[#E5DAC8]">
            <span className="text-[#6B5D52] block text-[10px] uppercase">Grade 4 Age Limit</span>
            <span className="text-base text-[#1D1814] font-extrabold mt-1 block">18 – 38 Years</span>
          </div>
          <div className="bg-[#F3EDE2] p-4 rounded-2xl border border-[#E5DAC8]">
            <span className="text-[#6B5D52] block text-[10px] uppercase">SC / ST Relaxation</span>
            <span className="text-base text-[#9E3A26] font-extrabold mt-1 block">+5 Years</span>
          </div>
          <div className="bg-[#F3EDE2] p-4 rounded-2xl border border-[#E5DAC8]">
            <span className="text-[#6B5D52] block text-[10px] uppercase">OBC / MOBC Relaxation</span>
            <span className="text-base text-[#A88244] font-extrabold mt-1 block">+3 Years</span>
          </div>
        </div>
      </div>

      {/* Eligibility Articles Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#1D1814] border-b border-[#E5DAC8] pb-3">
          Detailed Eligibility Guides & Qualification Checklists
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div
              key={art.slug}
              className="bg-[#F3EDE2] p-6 rounded-3xl space-y-4 border border-[#E5DAC8] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-[#9E3A26]/15 text-[#9E3A26] rounded-md">
                  Eligibility Guide
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#1D1814] leading-snug">
                  {art.h1}
                </h3>
                <p className="text-xs text-[#6B5D52] leading-relaxed font-medium line-clamp-3">
                  {art.metaDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DAC8]/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#6B5D52]">⏱️ {art.readingTime}</span>
                <Link
                  href={art.route}
                  className="text-xs font-mono font-bold text-[#9E3A26] hover:underline flex items-center space-x-1"
                >
                  <span>Read Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
