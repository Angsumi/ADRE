import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleByRoute, getArticlesByCategory } from '@/lib/articlesData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getArticlesByCategory('assam-gk');
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const article = getArticleByRoute(`/assam-gk/${params.slug}/`);
  if (!article) return {};

  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: article.route,
  });
}

export default function AssamGkArticlePage({ params }: Props) {
  const article = getArticleByRoute(`/assam-gk/${params.slug}/`);

  if (!article) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Assam GK', url: '/assam-gk/' },
    { name: article.h1, url: article.route },
  ]);

  const related = getArticlesByCategory('assam-gk')
    .filter((a) => a.slug !== article.slug)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border-[#E5DAC8]">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold text-[#9E3A26]">
          <span className="bg-[#9E3A26]/10 px-3 py-1 rounded-md border border-[#9E3A26]/20 uppercase tracking-wider">
            Assam General Knowledge & History
          </span>
          <div className="flex items-center space-x-4 text-[#6B5D52]">
            <span>👤 {article.author}</span>
            <span>📅 Updated: {article.updatedDate}</span>
            <span>⏱️ {article.readingTime}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D1814] leading-tight">
          {article.h1}
        </h1>

        <p className="text-sm sm:text-base text-[#6B5D52] font-medium leading-relaxed max-w-4xl border-l-4 border-[#9E3A26] pl-4 bg-[#F3EDE2]/60 py-2 rounded-r-xl">
          {article.metaDescription}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 bg-[#F3EDE2] p-6 sm:p-10 rounded-3xl border border-[#E5DAC8] shadow-sm space-y-6">
          <div
            className="prose prose-stone max-w-none text-[#2C241E] text-xs sm:text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          <div className="mt-10 p-6 rounded-2xl glass-panel border-[#E5DAC8] text-center space-y-3">
            <h3 className="text-lg font-bold text-[#1D1814]">Practice Solved Assam GK Questions</h3>
            <p className="text-xs text-[#6B5D52]">Test your knowledge with official solved questions and mock tests.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/adre/subjects/assam-gk/" className="btn-ahom-primary text-xs inline-block">
                Assam GK Subject Hub →
              </Link>
              <Link href="/adre/mock-test/" className="px-4 py-2.5 rounded-xl border border-[#9E3A26] text-[#9E3A26] font-bold text-xs hover:bg-[#9E3A26]/10 transition-colors">
                Attempt Full Mock Test →
              </Link>
            </div>
          </div>
        </main>

        <aside className="space-y-6">
          <div className="bg-[#F3EDE2] p-6 rounded-3xl border border-[#E5DAC8] space-y-4 shadow-sm">
            <h3 className="text-base font-bold text-[#1D1814] border-b border-[#E5DAC8] pb-2">
              Related Assam GK Articles
            </h3>
            <div className="space-y-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={rel.route}
                  className="block p-3 rounded-2xl bg-[#F9F4EB] hover:bg-[#EBE2D4] border border-[#E5DAC8] transition-colors group"
                >
                  <p className="text-xs font-bold text-[#1D1814] group-hover:text-[#9E3A26] transition-colors leading-snug">
                    {rel.h1}
                  </p>
                  <span className="text-[10px] font-mono text-[#6B5D52] block mt-1">
                    ⏱️ {rel.readingTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
