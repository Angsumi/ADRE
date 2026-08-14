import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSubjects, SUBJECT_MAP, getAllTopics } from '@/lib/topicData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

interface Props {
  params: {
    'subject-slug': string;
  };
}

export async function generateStaticParams() {
  const subjects = getAllSubjects();
  return subjects.map((s) => ({
    'subject-slug': s.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const meta = SUBJECT_MAP[params['subject-slug']];
  if (!meta) return {};

  return buildMetadata({
    title: `${meta.title} Notes & Questions — ADRE Grade 3 & Grade 4`,
    description: meta.description,
    path: `/adre/subjects/${params['subject-slug']}/`,
  });
}

export default function SubjectPage({ params }: Props) {
  const subSlug = params['subject-slug'];
  const meta = SUBJECT_MAP[subSlug];

  if (!meta) {
    notFound();
  }

  const allTopics = getAllTopics().filter((t) => t.subjectSlug === subSlug);

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Subjects', url: '/adre/subjects/' },
    { name: meta.title, url: `/adre/subjects/${subSlug}/` },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E3A26] bg-[#9E3A26]/10 px-3.5 py-1.5 rounded-lg border border-[#9E3A26]/20">
          <span>{meta.icon} Subject Master Hub • ~{meta.weightage}% Exam Weightage</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE {meta.title} Syllabus & Solved Papers
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
          {meta.description} Explore all sub-topics and solved questions below.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-[#1D1814] border-b border-[#E5DAC8] pb-3">
          Topic Clusters under {meta.title} ({allTopics.length} Topics)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTopics.map((t) => (
            <Link
              key={t.slug}
              href={`/adre/topics/${t.slug}/`}
              className="glass-panel p-6 rounded-2xl border-[#E5DAC8] hover:border-[#9E3A26] transition-all group space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#9E3A26] font-mono font-bold">{t.questions.length} MCQs</span>
                <span className="text-[#6B5D52] font-mono">{t.pyqCount} Official PYQs</span>
              </div>
              <h3 className="text-base font-bold text-[#1D1814] group-hover:text-[#9E3A26] transition-colors">
                {t.title}
              </h3>
              <p className="text-xs text-[#6B5D52] line-clamp-2 leading-relaxed">
                {t.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
