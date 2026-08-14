import Link from 'next/link';
import { SAMPLE_MOCKS } from '@/data/mockData';

export default function HomePage() {
  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-axom-red/10 border border-axom-red/30 text-axom-red text-xs sm:text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-axom-red animate-pulse" />
          <span>ADRE 3.0 & Assam Competitive Exam Engine</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Prepare Smarter. <br />
          <span className="bg-gradient-to-r from-axom-red via-axom-goldLight to-axom-gold bg-clip-text text-transparent">
            Rank Higher in ADRE.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Assam’s exam-intelligence platform. Master ADRE Grade 3 & Grade 4 with interactive PYQ solvers, Assam GK drills, timed full-length mocks, and real-time performance analytics.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/adre/mock-test/"
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-axom-red hover:bg-axom-redDark rounded-xl shadow-lg shadow-axom-red/30 transition-all transform hover:-translate-y-0.5"
          >
            Start Free ADRE Mock Test
          </Link>
          <Link
            href="/tools/score-calculator/"
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-200 bg-axom-card border border-axom-border hover:bg-axom-surface rounded-xl transition-all"
          >
            Calculate ADRE Score
          </Link>
        </div>
      </section>

      {/* Primary SEO Hubs Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/adre/" className="glass-panel p-6 rounded-2xl hover:border-axom-red/50 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-axom-red/20 text-axom-red flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
              🎯
            </div>
            <h3 className="text-xl font-bold text-white mb-2">ADRE Master Hub</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Complete syllabus breakdown, Grade 3 & Grade 4 eligibility criteria, exam patterns, and notification updates.
            </p>
            <span className="text-xs font-semibold text-axom-red group-hover:underline">Explore ADRE Hub →</span>
          </Link>

          <Link href="/adre/previous-year-question-paper/" className="glass-panel p-6 rounded-2xl hover:border-axom-gold/50 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-axom-gold/20 text-axom-gold flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
              📚
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Interactive PYQ Vault</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Solve official ADRE 2022 & 2024 question papers in interactive exam mode with step-by-step bilingual solutions.
            </p>
            <span className="text-xs font-semibold text-axom-gold group-hover:underline">Solve PYQ Papers →</span>
          </Link>

          <Link href="/assam-gk/" className="glass-panel p-6 rounded-2xl hover:border-emerald-500/50 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
              🏛️
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Assam GK Ecosystem</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              High-yield notes and MCQs covering Assam History, Ahom Dynasty, Rivers, Geography, Literature, and Polity.
            </p>
            <span className="text-xs font-semibold text-emerald-400 group-hover:underline">Explore Assam GK →</span>
          </Link>
        </div>
      </section>

      {/* Featured Mock Test Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Full-Length ADRE Mock Exam Series</h2>
              <p className="text-sm text-slate-400">Replicate the real State Level Recruitment Commission examination environment.</p>
            </div>
            <Link href="/adre/mock-test/" className="text-sm font-semibold text-axom-red hover:underline">
              View All Mocks →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAMPLE_MOCKS.map((mock) => (
              <div key={mock.id} className="bg-axom-navy/80 border border-axom-border p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-axom-gold/20 text-axom-gold">
                    {mock.grade} ({mock.difficulty})
                  </span>
                  <span className="text-xs text-slate-400">{mock.timeLimitMinutes} Mins | {mock.totalMarks} Marks</span>
                </div>
                <h3 className="text-lg font-bold text-white">{mock.title}</h3>
                <p className="text-xs text-slate-400">Contains high-weightage Assam GK, Reasoning, Mathematics, and English practice sets.</p>
                <Link
                  href={`/adre/mock-test/`}
                  className="block text-center py-2.5 px-4 text-xs font-semibold text-white bg-axom-red hover:bg-axom-redDark rounded-lg transition-colors"
                >
                  Attempt Mock Exam
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Interactive Tools CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-axom-charcoal via-axom-card to-axom-navy border border-axom-border p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">ADRE Score Calculator</h3>
            <p className="text-xs text-slate-400">Calculate negative marking & get percentile analysis instantly.</p>
            <Link href="/tools/score-calculator/" className="inline-block text-xs text-axom-gold font-semibold hover:underline">
              Launch Score App →
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Eligibility & Age Checker</h3>
            <p className="text-xs text-slate-400">Verify your age limit & education qualification according to Assam rules.</p>
            <Link href="/tools/eligibility-checker/" className="inline-block text-xs text-axom-gold font-semibold hover:underline">
              Check Eligibility →
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">30-Day Study Planner</h3>
            <p className="text-xs text-slate-400">Generate a custom Assam exam preparation timetable for Grade 3 & 4.</p>
            <Link href="/tools/study-planner/" className="inline-block text-xs text-axom-gold font-semibold hover:underline">
              Generate Timetable →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
