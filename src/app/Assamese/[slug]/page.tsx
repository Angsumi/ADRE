import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAllAssameseArticles,
  getAssameseArticleBySlug,
} from '@/lib/assameseArticlesData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export async function generateStaticParams() {
  const articles = getAllAssameseArticles();
  const params: { slug: string }[] = [];

  for (const art of articles) {
    params.push({ slug: art.slug });
    if (art.filename !== art.slug) {
      params.push({ slug: art.filename });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getAssameseArticleBySlug(params.slug);
  if (!article) {
    return buildMetadata({
      title: "প্ৰবন্ধ পোৱা নগ'ল (Article Not Found)",
      description: "বিচাৰি থকা অসমীয়া প্ৰবন্ধটো পোৱা নগ’ল।",
      path: '/Assamese/',
    });
  }

  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: article.route,
  });
}

export default function AssameseArticlePage({ params }: { params: { slug: string } }) {
  const article = getAssameseArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllAssameseArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'অসমীয়া ভঁৰাল', url: '/Assamese/' },
    { name: article.h1, url: article.route },
  ]);

  const relatedArticles = allArticles
    .filter((a) => a.categoryCode === article.categoryCode && a.slug !== article.slug)
    .slice(0, 4);

  return (
    <div className="bg-[#F9F4EB] text-[#1D1814] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Top Navigation Bar */}
      <div className="bg-[#1D1814] text-[#F9F4EB] py-2.5 px-4 sticky top-20 z-40 border-b border-[#332A24]">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <Link href="/Assamese/" className="text-[#E7C792] hover:underline font-bold flex items-center space-x-1">
            <span>← অসমীয়া ভঁৰাল (Assamese Repository)</span>
          </Link>
          <span className="text-[#A8988A] hidden sm:inline">
            শ্ৰেণী: {article.categoryNameAs}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Content */}
          <main className="lg:col-span-8 space-y-8 bg-[#F3EDE2] border border-[#E5DAC8] p-6 sm:p-10 rounded-3xl shadow-sm">
            
            {/* Header / Title block */}
            <header className="space-y-4 border-b border-[#E5DAC8] pb-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-[#9E3A26]/10 border border-[#9E3A26]/20 text-[#9E3A26] font-bold">
                  {article.categoryNameAs}
                </span>
                <span className="text-[#6B5D52]">|</span>
                <span className="text-[#6B5D52]">⏱️ পঢ়াৰ সময়: {article.readingTime}</span>
                <span className="text-[#6B5D52]">|</span>
                <span className="text-[#6B5D52]">📅 আপডেট: {article.updatedDate}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1D1814] leading-tight">
                {article.h1}
              </h1>

              <div className="text-xs font-mono text-[#6B5D52]">
                প্ৰণেতা: <span className="font-bold text-[#1D1814]">{article.author}</span>
              </div>
            </header>

            {/* Markdown Rendered Article Body */}
            <article
              className="prose prose-stone max-w-none prose-headings:font-bold prose-headings:text-[#1D1814] prose-p:text-[#4D3F35] prose-p:leading-relaxed prose-li:text-[#4D3F35] prose-table:border-collapse prose-th:bg-[#EAE0D0] prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-[#D8CEBE] overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

            {/* Prev / Next Pagination Bar */}
            <div className="pt-8 border-t border-[#E5DAC8] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  href={prevArticle.route}
                  className="p-4 rounded-xl border border-[#E5DAC8] bg-[#F9F4EB] hover:border-[#9E3A26] transition-colors space-y-1 block"
                >
                  <span className="text-[10px] font-mono uppercase text-[#6B5D52] font-bold block">← পূৰ্বৱৰ্তী অধ্যায়</span>
                  <span className="text-xs font-bold text-[#1D1814] line-clamp-1">{prevArticle.h1}</span>
                </Link>
              ) : <div />}

              {nextArticle ? (
                <Link
                  href={nextArticle.route}
                  className="p-4 rounded-xl border border-[#E5DAC8] bg-[#F9F4EB] hover:border-[#9E3A26] transition-colors space-y-1 text-right block sm:col-start-2"
                >
                  <span className="text-[10px] font-mono uppercase text-[#6B5D52] font-bold block">পৰৱৰ্তী অধ্যায় →</span>
                  <span className="text-xs font-bold text-[#1D1814] line-clamp-1">{nextArticle.h1}</span>
                </Link>
              ) : <div />}
            </div>

          </main>

          {/* Right Sidebar: Related Articles & Quick Navigation */}
          <aside className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#F3EDE2] border border-[#E5DAC8] p-6 rounded-2xl space-y-4 sticky top-28 shadow-sm">
              <h3 className="font-mono text-xs uppercase font-bold tracking-wider text-[#9E3A26] border-b border-[#E5DAC8] pb-2">
                প্ৰাসংগিক অধ্যায়সমূহ ({article.categoryNameAs})
              </h3>

              <div className="space-y-3">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={rel.route}
                    className="block p-3.5 rounded-xl bg-[#F9F4EB] hover:bg-white border border-[#E5DAC8] hover:border-[#9E3A26] transition-all space-y-1 group"
                  >
                    <span className="text-[10px] font-mono font-bold text-[#9E3A26] block">{rel.categoryNameAs}</span>
                    <h4 className="text-xs font-bold text-[#1D1814] group-hover:text-[#9E3A26] transition-colors line-clamp-2">
                      {rel.h1}
                    </h4>
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E5DAC8]">
                <Link
                  href="/Assamese/"
                  className="btn-ahom-primary text-xs w-full justify-center py-3 text-center block"
                >
                  সকলো ৪০ টা অধ্যায় চাওক →
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
