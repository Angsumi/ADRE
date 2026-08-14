import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-axom-navy/95 backdrop-blur-md border-b border-axom-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with User Image */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-axom-card border border-axom-border flex items-center justify-center p-1 group-hover:scale-105 transition-transform overflow-hidden shadow-lg shadow-axom-red/20">
            {/* Logo Image */}
            <img src="/ADRE/logo.png" alt="AxomRank Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="text-xl font-bold text-white tracking-tight">Axom<span className="text-axom-red">Rank</span></span>
            <span className="block text-[10px] text-axom-gold uppercase font-semibold tracking-widest">Assam Exam Intelligence</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <Link href="/adre/" className="hover:text-white transition-colors">ADRE Hub</Link>
          <Link href="/adre/syllabus/" className="hover:text-white transition-colors">Syllabus</Link>
          <Link href="/adre/previous-year-question-paper/" className="hover:text-white transition-colors">PYQ Vault</Link>
          <Link href="/adre/mock-test/" className="hover:text-white transition-colors">Mock Tests</Link>
          <Link href="/assam-gk/" className="hover:text-white transition-colors">Assam GK</Link>
          <Link href="/tools/score-calculator/" className="hover:text-white transition-colors">Calculators</Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-3">
          <Link
            href="/adre/mock-test/"
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-axom-red hover:bg-axom-redDark rounded-lg shadow-md shadow-axom-red/30 transition-all hover:scale-[1.02]"
          >
            Start Free Mock
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-axom-charcoal border-t border-axom-border text-slate-400 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-axom-card border border-axom-border overflow-hidden p-0.5">
              <img src="/ADRE/logo.png" alt="AxomRank Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-bold text-white">AxomRank</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Assam-first digital competitive-exam preparation platform. Powered by Assam exam intelligence, topic analytics, and official SLRC ADRE PYQ datasets.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">ADRE Clusters</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/adre/" className="hover:text-white">ADRE 3.0 Overview</Link></li>
            <li><Link href="/adre/syllabus/" className="hover:text-white">ADRE Syllabus & Exam Pattern</Link></li>
            <li><Link href="/adre/grade-3/" className="hover:text-white">ADRE Grade 3 Hub</Link></li>
            <li><Link href="/adre/grade-4/" className="hover:text-white">ADRE Grade 4 Hub</Link></li>
            <li><Link href="/adre/eligibility/" className="hover:text-white">ADRE Eligibility Rules</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Practice & Tools</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/adre/mock-test/" className="hover:text-white">ADRE Mock Test Series</Link></li>
            <li><Link href="/adre/previous-year-question-paper/" className="hover:text-white">Previous Year Question Papers</Link></li>
            <li><Link href="/tools/score-calculator/" className="hover:text-white">ADRE Score & Rank Calculator</Link></li>
            <li><Link href="/tools/eligibility-checker/" className="hover:text-white">ADRE Eligibility Checker</Link></li>
            <li><Link href="/tools/study-planner/" className="hover:text-white">30-Day Study Planner</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Assam Knowledge</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/assam-gk/" className="hover:text-white">Assam GK Master Hub</Link></li>
            <li><Link href="/assam-gk/history/" className="hover:text-white">Assam History Notes & MCQs</Link></li>
            <li><Link href="/assam-gk/geography/" className="hover:text-white">Assam Geography Notes</Link></li>
            <li><Link href="/current-affairs/" className="hover:text-white">Assam Current Affairs Digest</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-axom-border/40 text-center">
        <p className="text-[11px] text-slate-500 max-w-4xl mx-auto leading-relaxed">
          <strong>Notice & Disclaimer:</strong> AxomRank is an independent educational technology platform and is not affiliated with, endorsed by, or an official portal of the State Level Recruitment Commission (SLRC), Government of Assam, or any state exam board. All exam information is gathered from official public notifications and offered strictly for educational preparation.
        </p>
        <p className="text-xs text-slate-600 mt-4">
          © {new Date().getFullYear()} AxomRank. Prepare smarter. Rank higher.
        </p>
      </div>
    </footer>
  );
}
