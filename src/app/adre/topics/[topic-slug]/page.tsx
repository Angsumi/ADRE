import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTopics, getTopicBySlug } from '@/lib/topicData';
import { buildMetadata, generateBreadcrumbSchema, generateQuizSchema } from '@/lib/seo';

interface Props {
  params: {
    'topic-slug': string;
  };
}

export async function generateStaticParams() {
  const topics = getAllTopics();
  return topics.map((t) => ({
    'topic-slug': t.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const topic = getTopicBySlug(params['topic-slug']);
  if (!topic) return {};

  return buildMetadata({
    title: `${topic.title} Questions & PYQ Solutions — ADRE Exam`,
    description: `Practice official ADRE questions for ${topic.title}. Includes solved previous year questions, answers, and step-by-step explanations for Grade 3 & Grade 4.`,
    path: `/adre/topics/${topic.slug}/`,
  });
}

export default function TopicPage({ params }: Props) {
  const topic = getTopicBySlug(params['topic-slug']);

  if (!topic) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Topics', url: '/adre/topics/' },
    { name: topic.title, url: `/adre/topics/${topic.slug}/` },
  ]);

  const quizSchema = generateQuizSchema({
    title: `${topic.title} ADRE Practice Quiz`,
    description: topic.description,
    questions: topic.questions.slice(0, 10).map((q) => ({
      question: q.question,
      options: q.options,
      answer: q.options[q.correctAnswer],
    })),
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }} />

      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E3A26] bg-[#9E3A26]/10 px-3.5 py-1.5 rounded-lg border border-[#9E3A26]/20">
          <span>{topic.subjectName} • Topic Practice Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          {topic.title} (ADRE Questions & PYQ Solutions)
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
          {topic.description} Explore {topic.questions.length} questions collected from official SLRC ADRE Grade 3 & Grade 4 papers.
        </p>
      </header>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass-panel p-4 rounded-2xl border-[#E5DAC8] text-center">
          <span className="text-xs font-mono font-bold text-[#6B5D52] uppercase">Total MCQs</span>
          <p className="text-2xl font-extrabold text-[#1D1814] mt-1">{topic.questions.length}</p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border-[#E5DAC8] text-center">
          <span className="text-xs font-mono font-bold text-[#6B5D52] uppercase">Official PYQs</span>
          <p className="text-2xl font-extrabold text-[#A88244] mt-1">{topic.pyqCount}</p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border-[#E5DAC8] text-center">
          <span className="text-xs font-mono font-bold text-[#6B5D52] uppercase">Subject</span>
          <p className="text-sm font-extrabold text-[#9E3A26] mt-2 font-mono truncate">{topic.subjectName}</p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border-[#E5DAC8] text-center">
          <span className="text-xs font-mono font-bold text-[#6B5D52] uppercase">Format</span>
          <p className="text-sm font-extrabold text-emerald-800 mt-2 font-mono">Bilingual MCQs</p>
        </div>
      </div>

      {/* Solved Question Cards */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-[#1D1814] border-b border-[#E5DAC8] pb-3">
          Solved MCQs & Official Answer Explanations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topic.questions.map((q, idx) => (
            <div key={q.id || idx} className="glass-panel p-6 rounded-2xl space-y-4 border-[#E5DAC8]">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded bg-[#C9A468]/20 text-[#A88244] font-mono font-bold">
                  {q.pyqYear ? `ADRE ${q.pyqYear} • ${q.paper}` : 'Practice MCQ'}
                </span>
                <span className="text-[#6B5D52] font-mono">Question {idx + 1}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#1D1814] leading-relaxed">{q.question}</h3>
              
              <div className="space-y-1.5 text-xs text-[#1D1814]">
                {q.options.map((opt: string, i: number) => (
                  <div
                    key={i}
                    className={`p-2.5 rounded-lg border ${
                      i === q.correctAnswer
                        ? 'bg-emerald-700/15 border-emerald-700/40 text-emerald-800 font-bold'
                        : 'border-[#E5DAC8] bg-[#F3EDE2]'
                    }`}
                  >
                    <span className="inline-block w-6 font-mono font-bold text-[#9E3A26]">{String.fromCharCode(65 + i)}.</span>
                    {opt} {i === q.correctAnswer && '✓ (Correct)'}
                  </div>
                ))}
              </div>

              <div className="text-xs text-[#6B5D52] bg-[#F3EDE2] p-3 rounded-lg border border-[#E5DAC8]">
                <strong className="text-[#1D1814]">Explanation:</strong> {q.explanation}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl glass-panel text-center space-y-4 border-[#E5DAC8]">
        <h3 className="text-xl font-bold text-[#1D1814]">Want to Solve Full Official ADRE Mock Tests?</h3>
        <p className="text-xs text-[#6B5D52]">Test your timed performance under real SLRC exam conditions.</p>
        <Link href="/adre/mock-test/" className="btn-ahom-primary inline-block text-xs">
          Start Free Full Mock Test →
        </Link>
      </div>
    </div>
  );
}
