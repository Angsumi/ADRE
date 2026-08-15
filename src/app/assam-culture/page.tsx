import Link from 'next/link';
import { getArticlesByCategory } from '@/lib/articlesData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Assam Culture, Heritage & Festivals — Complete Study Guides for ADRE',
  description: 'In-depth Assam Culture & Heritage articles for ADRE. Bihu festivals, Sattriya dance, Satras, Namghar, Assamese literature, traditional instruments, attire, and handicrafts.',
  path: '/assam-culture/',
});

export default function AssamCultureHubPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Assam GK', url: '/assam-gk/' },
    { name: 'Culture', url: '/assam-culture/' },
  ]);

  const articles = getArticlesByCategory('assam-culture');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border-[#E5DAC8]">
        <div className="space-y-2 border-b border-[#E5DAC8] pb-6">
          <span className="text-xs font-mono font-bold text-[#9E3A26] uppercase tracking-wider bg-[#9E3A26]/10 px-3 py-1 rounded-md border border-[#9E3A26]/20">
            Cultural Heritage Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814] mt-2">
            Assam Culture & Heritage Study Guides
          </h1>
          <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
            Master high-scoring exam topics: Bihu, Sattriya, Neo-Vaishnavite Satras, Namghars, Assamese literature, folk music, traditional attire, and Sarthebari bell-metal crafts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((art) => (
          <div
            key={art.slug}
            className="bg-[#F3EDE2] p-6 rounded-3xl space-y-4 border border-[#E5DAC8] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              <span className="inline-block px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-[#9E3A26]/15 text-[#9E3A26] rounded-md">
                Assam Culture
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
                <span>Read Article</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
