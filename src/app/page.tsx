import Link from 'next/link';
import { SAMPLE_MOCKS } from '@/data/mockData';

export default function HomePage() {
  return (
    <div className="bg-[#F9F4EB] text-[#1D1814] min-h-screen">
      {/* 
        GOLDEN HOUR SEAMLESS HERO SECTION:
        - Ranghar.jpg is embedded as a full-bleed morphed background
        - Sunshine golden hour glow (#F7DAA0 & #C9A468) blending seamlessly into warm linen sand (#F9F4EB)
        - Clean typography without textual box overlays
      */}
      <section className="relative w-full overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-36">
        
        {/* Full-width Morphed Ranghar Background Image with Golden Hour Sunshine Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ranghar.jpg"
            alt="Rang Ghar Assam Golden Hour"
            className="w-full h-full object-contain object-top opacity-55 mix-blend-multiply filter contrast-[1.05] brightness-[1.02]"
          />
          
          {/* Top Subtle Fade */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F9F4EB] to-transparent" />

          {/* Golden Hour Side & Center Sunlight Tint Scrim */}
          <div className="absolute inset-0 bg-radial from-[#F7DAA0]/35 via-transparent to-[#F9F4EB]" />

          {/* Bottom Seamless Fade into Page Background */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#F9F4EB] via-[#F9F4EB]/85 to-transparent" />
        </div>

        {/* Hero Content floating seamlessly over the Morphed Ranghar Golden Background */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 pt-8">
          
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#1D1814]/85 backdrop-blur-md border border-[#C9A468]/50 text-[#E7C792] font-mono text-xs font-semibold shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#9E3A26] animate-pulse" />
            <span>Assam Direct Recruitment 3.0 Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-[#1D1814] tracking-[-0.03em] leading-[1.06] font-sans drop-shadow-sm">
            Prepare Smarter. <br />
            <span className="text-[#B54124] font-extrabold italic">Rank Higher</span> in ADRE.
          </h1>

          <p className="text-base sm:text-xl text-[#4D3F35] max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Assam’s exam-intelligence platform. Master ADRE Grade 3 & Grade 4 with interactive PYQ solvers, Assam GK drills, timed full-length mocks, and real-time performance analytics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link href="/adre/mock-test/" className="btn-ahom-primary text-sm px-9 py-4 shadow-xl">
              START FREE MOCK TEST
            </Link>
            <Link href="/tools/score-calculator/" className="btn-ahom-outline text-sm px-9 py-4 backdrop-blur-sm bg-[#F9F4EB]/60">
              CALCULATE ADRE SCORE
            </Link>
          </div>

          {/* Quick Stats Bar in Golden Scrim */}
          <div className="pt-12 border-t border-[#D9C4A5]/60 max-w-3xl mx-auto grid grid-cols-3 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#9E3A26] font-mono">100%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#6B5D52] mt-1">Official Pattern</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#A88244] font-mono">PYQ</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#6B5D52] mt-1">2022 & 2024 Vault</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1D1814] font-mono">Bilingual</div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#6B5D52] mt-1">English & Assamese</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Minimalist Bento Hubs */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-[#E5DAC8] mb-24">
        <div className="flex justify-between items-baseline mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B5D52]">01 // EXAM INTELLIGENCE HUBS</span>
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#9E3A26] font-bold">ASSAM DIRECT RECRUITMENT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/adre/" className="group p-8 border border-[#E5DAC8] hover:border-[#C9A468] bg-[#F3EDE2] hover:bg-[#EBE2D4] transition-all rounded-2xl shadow-sm">
            <div className="font-mono text-xs text-[#9E3A26] font-bold mb-6">HUB 01</div>
            <h3 className="text-2xl font-normal text-[#1D1814] mb-3 group-hover:text-[#9E3A26] transition-colors">ADRE Master Hub</h3>
            <p className="text-sm text-[#6B5D52] leading-relaxed mb-6 font-sans">
              Complete Grade 3 & Grade 4 syllabus breakdown, eligibility criteria, exam patterns, and notification updates.
            </p>
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E3A26] border-b-2 border-[#9E3A26] pb-0.5 font-bold">
              EXPLORE HUB →
            </span>
          </Link>

          <Link href="/adre/previous-year-question-paper/" className="group p-8 border border-[#E5DAC8] hover:border-[#C9A468] bg-[#F3EDE2] hover:bg-[#EBE2D4] transition-all rounded-2xl shadow-sm">
            <div className="font-mono text-xs text-[#9E3A26] font-bold mb-6">HUB 02</div>
            <h3 className="text-2xl font-normal text-[#1D1814] mb-3 group-hover:text-[#9E3A26] transition-colors">Interactive PYQ Vault</h3>
            <p className="text-sm text-[#6B5D52] leading-relaxed mb-6 font-sans">
              Solve official ADRE 2022 & 2024 question papers in interactive exam mode with step-by-step bilingual solutions.
            </p>
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E3A26] border-b-2 border-[#9E3A26] pb-0.5 font-bold">
              SOLVE PYQS →
            </span>
          </Link>

          <Link href="/assam-gk/" className="group p-8 border border-[#E5DAC8] hover:border-[#C9A468] bg-[#F3EDE2] hover:bg-[#EBE2D4] transition-all rounded-2xl shadow-sm">
            <div className="font-mono text-xs text-[#9E3A26] font-bold mb-6">HUB 03</div>
            <h3 className="text-2xl font-normal text-[#1D1814] mb-3 group-hover:text-[#9E3A26] transition-colors">Assam GK Ecosystem</h3>
            <p className="text-sm text-[#6B5D52] leading-relaxed mb-6 font-sans">
              High-yield notes and MCQs covering Assam History, Ahom Dynasty, Rivers, Geography, Literature, and Polity.
            </p>
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E3A26] border-b-2 border-[#9E3A26] pb-0.5 font-bold">
              STUDY ASSAM GK →
            </span>
          </Link>
        </div>
      </section>

      {/* SECTION 3: Minimalist Mock Series */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-[#E5DAC8] mb-24">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B5D52]">02 // TEST SERIES MATRIX</span>
            <h2 className="text-3xl font-normal text-[#1D1814] mt-2">Full-Length ADRE Mock Exam Series</h2>
          </div>
          <Link href="/adre/mock-test/" className="font-mono text-xs uppercase tracking-wider text-[#9E3A26] underline font-bold">
            VIEW ALL MOCKS →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SAMPLE_MOCKS.map((mock) => (
            <div key={mock.id} className="p-8 border border-[#E5DAC8] bg-[#F3EDE2] rounded-2xl space-y-6 shadow-sm">
              <div className="flex justify-between items-center font-mono text-xs text-[#6B5D52] border-b border-[#E5DAC8] pb-4">
                <span className="text-[#9E3A26] font-bold">{mock.grade.toUpperCase()} ({mock.difficulty.toUpperCase()})</span>
                <span>{mock.timeLimitMinutes} MINS · {mock.totalMarks} MARKS</span>
              </div>
              <h3 className="text-2xl font-normal text-[#1D1814]">{mock.title}</h3>
              <p className="text-sm text-[#6B5D52] leading-relaxed">
                Contains high-weightage Assam GK, Reasoning, Mathematics, and English practice sets.
              </p>
              <Link href="/adre/mock-test/" className="block w-full text-center py-3.5 bg-[#9E3A26] text-[#F9F4EB] text-xs font-mono uppercase tracking-widest hover:bg-[#7D2B1B] transition-colors rounded-xl font-bold shadow-md shadow-[#9E3A26]/20">
                ATTEMPT MOCK EXAM
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



