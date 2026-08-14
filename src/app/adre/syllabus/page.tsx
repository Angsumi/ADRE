import Link from 'next/link';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'ADRE Syllabus 2026 — Grade 3 & Grade 4 Subject Wise Breakdown',
  description: 'Complete, updated ADRE syllabus for Grade III & Grade IV exams in Assam. Topic-wise distribution for Assam GK, Social Studies, Mathematics, English, & Reasoning.',
  path: '/adre/syllabus/',
});

export default function AdreSyllabusPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'ADRE Hub', url: '/adre/' },
    { name: 'Syllabus', url: '/adre/syllabus/' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          ADRE Syllabus 2026 (Grade 3 & Grade 4)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Master the official subject-wise syllabus and topic weightage for the upcoming Assam Direct Recruitment Examination.
        </p>
      </header>

      {/* Syllabus Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Assam GK & Culture */}
        <div className="glass-panel p-6 rounded-2xl space-y-4 border-axom-border">
          <div className="flex items-center justify-between border-b border-axom-border pb-3">
            <h2 className="text-xl font-bold text-white">1. Assam General Knowledge & Culture</h2>
            <span className="text-xs font-semibold text-axom-red bg-axom-red/10 px-2.5 py-1 rounded">High Weightage</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc pl-5">
            <li><strong>Assam History:</strong> Ancient Assam, Kamarupa Kingdom, Ahom Dynasty (1228-1826), Moamoria Rebellion, Treaty of Yandabo (1826), Freedom Movement in Assam.</li>
            <li><strong>Assam Geography:</strong> Physical divisions, Brahmaputra & Barak river systems, National Parks & Sanctuaries, Climate, Mineral resources.</li>
            <li><strong>Assam Polity & Economy:</strong> Assam Panchayat Raj, State Executive, Tea Industry, Oil Refineries, Major Infrastructure projects.</li>
            <li><strong>Assam Art & Literature:</strong> Bihu festivals, Folk dances, Sattriya dance, Eminent Assamese literary figures (Sankardev, Lakshminath Bezbaroa).</li>
          </ul>
          <Link href="/assam-gk/" className="inline-block text-xs font-semibold text-axom-gold hover:underline pt-2">
            Practice Assam GK Topic MCQs →
          </Link>
        </div>

        {/* Mathematics & Numerical Ability */}
        <div className="glass-panel p-6 rounded-2xl space-y-4 border-axom-border">
          <div className="flex items-center justify-between border-b border-axom-border pb-3">
            <h2 className="text-xl font-bold text-white">2. Mathematics & Quantitative Aptitude</h2>
            <span className="text-xs font-semibold text-axom-gold bg-axom-gold/10 px-2.5 py-1 rounded">Class 10 / 12 Level</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc pl-5">
            <li>Number Systems, Simplification, HCF & LCM.</li>
            <li>Percentage, Profit & Loss, Simple & Compound Interest.</li>
            <li>Ratio & Proportion, Time & Work, Speed Distance & Time.</li>
            <li>Basic Geometry, Mensuration (Area & Volume), Data Interpretation.</li>
          </ul>
          <Link href="/adre/mock-test/" className="inline-block text-xs font-semibold text-axom-gold hover:underline pt-2">
            Attempt Maths Mock Test →
          </Link>
        </div>

        {/* Reasoning & Mental Ability */}
        <div className="glass-panel p-6 rounded-2xl space-y-4 border-axom-border">
          <div className="flex items-center justify-between border-b border-axom-border pb-3">
            <h2 className="text-xl font-bold text-white">3. Logical Reasoning & Mental Ability</h2>
            <span className="text-xs font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded">High Scoring</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc pl-5">
            <li>Analogy, Classification, Coding-Decoding.</li>
            <li>Blood Relations, Direction Sense Test, Series Completion.</li>
            <li>Syllogism, Venn Diagrams, Non-Verbal Pattern Completion.</li>
          </ul>
        </div>

        {/* English Language & Grammar */}
        <div className="glass-panel p-6 rounded-2xl space-y-4 border-axom-border">
          <div className="flex items-center justify-between border-b border-axom-border pb-3">
            <h2 className="text-xl font-bold text-white">4. General English</h2>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">Grammar & Vocab</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc pl-5">
            <li>Synonyms, Antonyms, One-word substitutions.</li>
            <li>Prepositions, Tenses, Voice & Narration.</li>
            <li>Reading Comprehension, Sentence Correction.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
