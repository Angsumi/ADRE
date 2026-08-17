import Link from 'next/link';
import { getAllAssameseArticles, AssameseArticleEntity } from '@/lib/assameseArticlesData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'অসমীয়া মাধ্যমৰ ADRE প্ৰস্তুতি ভঁৰাল — 40+ সম্পূৰ্ণ বিষয়ভিত্তিক গাইড',
  description: 'ADRE Grade 3 & Grade 4 পৰীক্ষাৰ বাবে অসমৰ ইতিহাস, ভূগোল, প্ৰশাসন আৰু সংস্কৃতিৰ ৪০টা সম্পূৰ্ণ অসমীয়া অধ্যায় আৰু গাইড।',
  path: '/Assamese/',
});

export default function AssameseHubIndexPage() {
  const articles = getAllAssameseArticles();

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'অসমীয়া ভঁৰাল', url: '/Assamese/' },
  ]);

  const categories = [
    { code: 'ALL', nameAs: 'সকলো অধ্যায় (40)', count: articles.length },
    { code: 'H', nameAs: 'ইতিহাস (History)', count: articles.filter((a) => a.categoryCode === 'H').length },
    { code: 'G', nameAs: 'ভূগোল আৰু প্ৰকৃতি (Geography)', count: articles.filter((a) => a.categoryCode === 'G').length },
    { code: 'C', nameAs: 'সংস্কৃতি আৰু ঐতিহ্য (Culture)', count: articles.filter((a) => a.categoryCode === 'C').length },
    { code: 'A', nameAs: 'প্ৰশাসন (Administration)', count: articles.filter((a) => a.categoryCode === 'A').length },
  ];

  return (
    <div className="bg-[#F9F4EB] text-[#1D1814] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Top Banner */}
      <div className="bg-[#1D1814] text-[#F9F4EB] py-3 px-4 border-b border-[#332A24]">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#9E3A26] animate-pulse" />
            <span className="text-[#E7C792] font-semibold">অসমীয়া মাধ্যমৰ বিশেষ প্ৰস্তুতি Hub</span>
          </div>
          <span className="text-[#A8988A]">40 Official Assamese Modules</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#9E3A26]/10 border border-[#9E3A26]/20 text-[#9E3A26] font-mono text-xs font-bold uppercase tracking-wider">
          <span>AxomRank · Assamese Knowledge Repository</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814] tracking-tight leading-tight">
          অসমীয়া মাধ্যমৰ ADRE প্ৰস্তুতি ভঁৰাল <br />
          <span className="text-[#9E3A26] italic font-serif">৪০টা সম্পূৰ্ণ অধ্যায় আৰু বিষয়ভিত্তিক গাইড</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6B5D52] max-w-3xl leading-relaxed font-medium">
          Assam Direct Recruitment Examination (ADRE 3.0) Grade 3 আৰু Grade 4 পৰীক্ষাৰ্থীসকলৰ বাবে অসমৰ ইতিহাস, আহোম সাম্ৰাজ্য, ভৌগোলিক তথ্য, প্ৰশাসন আৰু লোকসংস্কৃতিৰ সম্পূৰ্ণ অসমীয়া নোট আৰু অধ্যায়।
        </p>

        {/* Quick Stats Grid */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl border-t border-[#E5DAC8]">
          <div className="bg-[#F3EDE2] p-4 rounded-xl border border-[#E5DAC8]">
            <span className="text-2xl font-black text-[#9E3A26] font-mono block">40</span>
            <span className="text-xs text-[#6B5D52] font-mono uppercase font-bold">সম্পূৰ্ণ অধ্যায়</span>
          </div>
          <div className="bg-[#F3EDE2] p-4 rounded-xl border border-[#E5DAC8]">
            <span className="text-2xl font-black text-[#1D1814] font-mono block">100%</span>
            <span className="text-xs text-[#6B5D52] font-mono uppercase font-bold">অসমীয়া মাধ্যম</span>
          </div>
          <div className="bg-[#F3EDE2] p-4 rounded-xl border border-[#E5DAC8]">
            <span className="text-2xl font-black text-[#A88244] font-mono block">SLRC</span>
            <span className="text-xs text-[#6B5D52] font-mono uppercase font-bold">অফিচিয়েল সিলেবাছ</span>
          </div>
          <div className="bg-[#F3EDE2] p-4 rounded-xl border border-[#E5DAC8]">
            <span className="text-2xl font-black text-emerald-800 font-mono block">বিনামূলীয়া</span>
            <span className="text-xs text-[#6B5D52] font-mono uppercase font-bold">প্ৰৱেশ ভঁৰাল</span>
          </div>
        </div>
      </section>

      {/* Main Content & Articles Directory */}
      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-10">
        
        {/* Category Filters Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E3A26]">
              অধ্যায় শ্ৰেণীসমূহ (Categories)
            </span>
            <span className="font-mono text-xs text-[#6B5D52]">
              মুঠ {articles.length} টা প্ৰবন্ধ
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c.code}
                href={c.code === 'ALL' ? '#all' : `#cat-${c.code}`}
                className="px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all bg-[#F3EDE2] border border-[#E5DAC8] text-[#1D1814] hover:border-[#9E3A26] hover:text-[#9E3A26]"
              >
                {c.nameAs}
              </a>
            ))}
          </div>
        </div>

        {/* Article Grid Grouped by Category */}
        <div className="space-y-16">
          
          {/* History Cluster (H) */}
          <section id="cat-H" className="space-y-6">
            <div className="border-b border-[#E5DAC8] pb-3 flex items-baseline justify-between">
              <h2 className="text-2xl font-extrabold text-[#1D1814] flex items-center space-x-2">
                <span className="text-[#9E3A26]">📜</span>
                <span>অসমৰ ইতিহাস (History)</span>
              </h2>
              <span className="font-mono text-xs text-[#9E3A26] font-bold">
                {articles.filter((a) => a.categoryCode === 'H').length} অধ্যায়
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles
                .filter((a) => a.categoryCode === 'H')
                .map((art) => (
                  <ArticleCard key={art.slug} article={art} />
                ))}
            </div>
          </section>

          {/* Geography Cluster (G) */}
          <section id="cat-G" className="space-y-6">
            <div className="border-b border-[#E5DAC8] pb-3 flex items-baseline justify-between">
              <h2 className="text-2xl font-extrabold text-[#1D1814] flex items-center space-x-2">
                <span className="text-[#A88244]">🏞️</span>
                <span>অসমৰ ভূগোল আৰু প্ৰকৃতি (Geography & Nature)</span>
              </h2>
              <span className="font-mono text-xs text-[#A88244] font-bold">
                {articles.filter((a) => a.categoryCode === 'G').length} অধ্যায়
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles
                .filter((a) => a.categoryCode === 'G')
                .map((art) => (
                  <ArticleCard key={art.slug} article={art} />
                ))}
            </div>
          </section>

          {/* Culture Cluster (C) */}
          <section id="cat-C" className="space-y-6">
            <div className="border-b border-[#E5DAC8] pb-3 flex items-baseline justify-between">
              <h2 className="text-2xl font-extrabold text-[#1D1814] flex items-center space-x-2">
                <span className="text-emerald-800">🎭</span>
                <span>অসমৰ সংস্কৃতি আৰু ঐতিহ্য (Culture & Heritage)</span>
              </h2>
              <span className="font-mono text-xs text-emerald-800 font-bold">
                {articles.filter((a) => a.categoryCode === 'C').length} অধ্যায়
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles
                .filter((a) => a.categoryCode === 'C')
                .map((art) => (
                  <ArticleCard key={art.slug} article={art} />
                ))}
            </div>
          </section>

          {/* Administration Cluster (A) */}
          <section id="cat-A" className="space-y-6">
            <div className="border-b border-[#E5DAC8] pb-3 flex items-baseline justify-between">
              <h2 className="text-2xl font-extrabold text-[#1D1814] flex items-center space-x-2">
                <span className="text-[#9E3A26]">🏛️</span>
                <span>অসমৰ প্ৰশাসন (Administration & Governance)</span>
              </h2>
              <span className="font-mono text-xs text-[#9E3A26] font-bold">
                {articles.filter((a) => a.categoryCode === 'A').length} অধ্যায়
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles
                .filter((a) => a.categoryCode === 'A')
                .map((art) => (
                  <ArticleCard key={art.slug} article={art} />
                ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

function ArticleCard({ article }: { article: AssameseArticleEntity }) {
  return (
    <Link
      href={article.route}
      className="glass-panel p-6 rounded-2xl border border-[#E5DAC8] hover:border-[#9E3A26] transition-all group flex flex-col justify-between space-y-4 hover:-translate-y-1 shadow-sm bg-[#F3EDE2]"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#9E3A26]/10 text-[#9E3A26]">
            {article.categoryNameAs}
          </span>
          <span className="font-mono text-[11px] text-[#6B5D52]">
            ⏱️ {article.readingTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#1D1814] group-hover:text-[#9E3A26] transition-colors leading-snug">
          {article.h1}
        </h3>

        <p className="text-xs text-[#6B5D52] line-clamp-3 leading-relaxed">
          {article.metaDescription}
        </p>
      </div>

      <div className="pt-3 border-t border-[#E5DAC8] flex items-center justify-between text-xs font-mono font-bold text-[#9E3A26]">
        <span>পঢ়ক (Read Chapter)</span>
        <span>→</span>
      </div>
    </Link>
  );
}
