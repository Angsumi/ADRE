import Link from 'next/link';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Free ADRE Exam Tools & Calculators — Score, Rank & Eligibility',
  description: '100% free interactive preparation tools for Assam Direct Recruitment Exam (ADRE 3.0). Calculate marks, check Grade 3 & Grade 4 post eligibility, & build study plans.',
  path: '/tools/',
});

export default function ToolsIndexPage() {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Exam Tools', url: '/tools/' },
  ]);

  const toolsList = [
    {
      title: 'ADRE Score & Rank Calculator',
      description: 'Calculate net score considering SLRC negative marking (-0.25 marks per wrong answer) and estimate competitive percentile rank.',
      href: '/tools/score-calculator/',
      icon: '🧮',
      badge: 'Most Popular',
      badgeColor: 'bg-[#9E3A26]/15 text-[#9E3A26]',
    },
    {
      title: 'Eligibility & Post Finder',
      description: 'Check post eligibility for Grade 3 (Graduate/HSSLC) and Grade 4 (Class 8/HSLC) based on age, qualification, and trade certificates.',
      href: '/tools/eligibility-checker/',
      icon: '✅',
      badge: 'Instant Check',
      badgeColor: 'bg-[#C9A468]/20 text-[#A88244]',
    },
    {
      title: 'Study Planner & Schedule Generator',
      description: 'Generate a personalized daily preparation timeline customized for ADRE Grade 3 & Grade 4 syllabus weightage.',
      href: '/tools/study-planner/',
      icon: '📅',
      badge: 'Planner',
      badgeColor: 'bg-emerald-700/15 text-emerald-800',
    },
    {
      title: 'Interactive PYQ Simulator & Vault',
      description: 'Solve official 2022 and 2024 ADRE question papers online with step-by-step solutions or download official PDF booklets.',
      href: '/adre/previous-year-question-paper/',
      icon: '📥',
      badge: '2022 & 2024 Papers',
      badgeColor: 'bg-sky-700/15 text-sky-800',
    },
    {
      title: 'Full-Length Mock Exam Series',
      description: 'Timed practice exams for Grade 3 & Grade 4 with instant scorecards, accuracy analysis, and automated Mistake Bank revision.',
      href: '/adre/mock-test/',
      icon: '📝',
      badge: 'Timed Simulator',
      badgeColor: 'bg-[#9E3A26]/15 text-[#9E3A26]',
    },
    {
      title: 'AxomRank Personal Document Vault',
      description: 'Organize your Aadhaar, PAN, marksheets, PRC, and certificates into a secure 24/7 personal vault link with multi-size downloads & PDF merger.',
      href: '/document_Vault/',
      icon: '📂',
      badge: '₹99 Service',
      badgeColor: 'bg-emerald-700/15 text-emerald-800',
    },
    {
      title: 'Topic Practice Directory (200+ Topics)',
      description: 'Explore topic-wise question banks for Ahom Kingdom, Percentages, English Antonyms, Reasoning, and General Science.',
      href: '/adre/topics/',
      icon: '📚',
      badge: '200+ Topics',
      badgeColor: 'bg-[#C9A468]/20 text-[#A88244]',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E3A26] bg-[#9E3A26]/10 px-3.5 py-1.5 rounded-lg border border-[#9E3A26]/20">
          <span>100% Free Interactive Tools</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE Preparation Tools & Calculators
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
          Free exam utilities designed to help Assam candidates calculate scores, check post eligibility, build custom study schedules, and practice timed mock tests.
        </p>
      </header>

      {/* Tools Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolsList.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="glass-panel p-6 rounded-2xl border-[#E5DAC8] hover:border-[#9E3A26] transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{tool.icon}</span>
                <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${tool.badgeColor}`}>
                  {tool.badge}
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1D1814] group-hover:text-[#9E3A26] transition-colors">
                {tool.title}
              </h2>
              <p className="text-xs text-[#6B5D52] leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5DAC8] flex items-center justify-between text-xs font-mono font-bold text-[#9E3A26]">
              <span>Open Tool</span>
              <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
