import { notFound } from 'next/navigation';
import { SYLLABUS_SUBJECTS, getSyllabusSubject } from '@/lib/syllabusData';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import SubjectSyllabusView from '@/components/SubjectSyllabusView';

interface Props {
  params: {
    subject: string;
  };
}

export async function generateStaticParams() {
  return SYLLABUS_SUBJECTS.map((s) => ({
    subject: s.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const subject = getSyllabusSubject(params.subject);
  if (!subject) return {};

  return buildMetadata({
    title: `ADRE ${subject.title} Syllabus 2026 — Download PDF & Topic Breakdown`,
    description: `Complete, updated ADRE Grade 3 & Grade 4 syllabus for ${subject.title}. Detailed topic lists, subtopics, exam weightage, and official PDF download.`,
    path: `/adre/syllabus/${subject.slug}/`,
  });
}

export default function SubjectSyllabusPage({ params }: Props) {
  const subject = getSyllabusSubject(params.subject);

  if (!subject) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Syllabus', url: '/adre/syllabus/' },
    { name: subject.title, url: `/adre/syllabus/${subject.slug}/` },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <SubjectSyllabusView subject={subject} />
    </div>
  );
}
