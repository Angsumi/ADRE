'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ALL_PYQ_DATA, PYQ_2024_DATA, PYQ_2022_DATA } from '@/data/mockData';

export interface PdfDocument {
  title: string;
  year: number;
  grade: string;
  paper: string;
  url: string;
  fileSize: string;
}

const OFFICIAL_PYQ_PDFS: PdfDocument[] = [
  // 2024 Official PDFs
  {
    title: 'ADRE 2024 Grade 3 Paper III (HSSLC Level)',
    year: 2024,
    grade: 'Grade 3',
    paper: 'Paper III',
    url: '/ADRE/pdf/2024/Grade-III_Paper-III_HSSLC_Download.pdf',
    fileSize: '1.3 MB',
  },
  {
    title: 'ADRE 2024 Grade 3 Paper IV (Degree Level)',
    year: 2024,
    grade: 'Grade 3',
    paper: 'Paper IV',
    url: '/ADRE/pdf/2024/Grade-III_Paper-IV_Degree.pdf',
    fileSize: '605 KB',
  },
  {
    title: 'ADRE 2024 Grade 3 Paper V (Driver Level)',
    year: 2024,
    grade: 'Grade 3',
    paper: 'Paper V',
    url: '/ADRE/pdf/2024/Grade-III_Paper-V_Driver.pdf',
    fileSize: '373 KB',
  },
  {
    title: 'ADRE 2024 Grade 4 Paper I (HSLC / ITI Level)',
    year: 2024,
    grade: 'Grade 4',
    paper: 'Paper I',
    url: '/ADRE/pdf/2024/Grade-IV_Paper-I_HSLC.pdf',
    fileSize: '472 KB',
  },
  {
    title: 'ADRE 2024 Grade 4 Paper II (Class VIII Level)',
    year: 2024,
    grade: 'Grade 4',
    paper: 'Paper II',
    url: '/ADRE/pdf/2024/Grade-IV_Paper-II_Class_VIII.pdf',
    fileSize: '1.4 MB',
  },
  // 2022 Official PDFs
  {
    title: 'ADRE 2022 Grade 3 Paper III (HSSLC Level)',
    year: 2022,
    grade: 'Grade 3',
    paper: 'Paper III',
    url: '/ADRE/pdf/2022/Grade-III_Paper-III_HSSLC.pdf',
    fileSize: '1.8 MB',
  },
  {
    title: 'ADRE 2022 Grade 3 Paper IV (Degree Level)',
    year: 2022,
    grade: 'Grade 3',
    paper: 'Paper IV',
    url: '/ADRE/pdf/2022/Grade-III_Paper-IV_Degree.pdf',
    fileSize: '2.0 MB',
  },
  {
    title: 'ADRE 2022 Grade 3 Paper V (Driver Level)',
    year: 2022,
    grade: 'Grade 3',
    paper: 'Paper V',
    url: '/ADRE/pdf/2022/Grade-III_Paper-V_Driver.pdf',
    fileSize: '1.9 MB',
  },
  {
    title: 'ADRE 2022 Grade 4 Paper I (HSLC / ITI Level)',
    year: 2022,
    grade: 'Grade 4',
    paper: 'Paper I',
    url: '/ADRE/pdf/2022/Grade-IV_Paper-I_HSLC.pdf',
    fileSize: '2.0 MB',
  },
  {
    title: 'ADRE 2022 Grade 4 Paper II (Class VIII Level)',
    year: 2022,
    grade: 'Grade 4',
    paper: 'Paper II',
    url: '/ADRE/pdf/2022/Grade-IV_Paper-II_Class_VIII.pdf',
    fileSize: '2.0 MB',
  },
];

export default function PyqVaultPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'ALL'>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'SOLVED' | 'DOWNLOADS'>('SOLVED');

  const rawQuestions = selectedYear === 2024 ? PYQ_2024_DATA : selectedYear === 2022 ? PYQ_2022_DATA : ALL_PYQ_DATA;

  const filteredQuestions = rawQuestions.filter((q) => {
    let matchSubject = selectedSubject === 'ALL';
    if (!matchSubject) {
      if (selectedSubject === 'Social Studies') {
        matchSubject = q.subject.toLowerCase().includes('social') || q.subject.toLowerCase().includes('general knowledge');
      } else {
        matchSubject = q.subject.toLowerCase().includes(selectedSubject.toLowerCase());
      }
    }

    const matchSearch =
      searchQuery === '' ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase());

    return matchSubject && matchSearch;
  });

  const filteredPdfs = OFFICIAL_PYQ_PDFS.filter((pdf) => {
    if (selectedYear !== 'ALL' && pdf.year !== selectedYear) return false;
    return true;
  });

  const subjects = ['ALL', 'Assam GK', 'Social Studies', 'General Science', 'General Mathematics', 'Reasoning', 'English'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#A88244] bg-[#C9A468]/15 px-3.5 py-1.5 rounded-lg border border-[#C9A468]/30">
          <span>Official SLRC ADRE Dataset • {ALL_PYQ_DATA.length} Questions & 10 Official PDFs</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE Previous Year Question Paper (PYQ Vault)
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
          Download original official ADRE question paper PDFs (2022 & 2024) or practice 1,226+ solved questions online with step-by-step solutions.
        </p>
      </header>

      {/* Primary Mode Switcher (PDF Downloads vs Interactive Solved Questions) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E5DAC8] pb-4">
        <div className="inline-flex bg-[#EBE2D4] p-1.5 rounded-2xl border border-[#E5DAC8] w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('DOWNLOADS')}
            className={`px-6 py-2.5 text-xs font-mono font-bold rounded-xl flex-1 sm:flex-initial transition-all ${
              activeTab === 'DOWNLOADS'
                ? 'bg-[#C9A468] text-[#1D1814] shadow-md font-extrabold'
                : 'text-[#6B5D52] hover:text-[#1D1814]'
            }`}
          >
            📥 Official PDF Downloads (10 Papers)
          </button>
          <button
            onClick={() => setActiveTab('SOLVED')}
            className={`px-6 py-2.5 text-xs font-mono font-bold rounded-xl flex-1 sm:flex-initial transition-all ${
              activeTab === 'SOLVED'
                ? 'bg-[#9E3A26] text-[#F9F4EB] shadow-md font-extrabold'
                : 'text-[#6B5D52] hover:text-[#1D1814]'
            }`}
          >
            📝 Interactive Solved Questions ({ALL_PYQ_DATA.length})
          </button>
        </div>

        {/* Year Filter Buttons */}
        <div className="flex gap-2 w-full sm:w-auto">
          {(['ALL', 2024, 2022] as const).map((year) => (
            <button
              key={String(year)}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-xl border flex-1 transition-all ${
                selectedYear === year
                  ? 'bg-[#F3EDE2] border-[#C9A468] text-[#9E3A26]'
                  : 'bg-[#F3EDE2]/60 border-[#E5DAC8] text-[#6B5D52]'
              }`}
            >
              {year === 'ALL' ? 'All Years' : `${year} Papers`}
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: OFFICIAL PDF DOWNLOADS SECTION */}
      {activeTab === 'DOWNLOADS' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-3">
            <h2 className="text-xl font-bold text-[#1D1814]">Official ADRE Question Paper PDFs</h2>
            <span className="text-xs text-[#6B5D52] font-mono">Original SLRC Examination Booklets</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPdfs.map((pdf, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border-[#E5DAC8] flex flex-col justify-between space-y-4 hover:border-[#C9A468] transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#C9A468]/20 text-[#A88244]">
                      ADRE {pdf.year}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#6B5D52]">{pdf.grade} • {pdf.paper}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1D1814] leading-snug">{pdf.title}</h3>
                  <p className="text-xs text-[#6B5D52]">Complete official question booklet. Includes all sections (Assam GK, Social Studies, Maths, English, Reasoning).</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#E5DAC8]">
                  <span className="text-xs text-[#8C7B6D] font-mono">File Size: {pdf.fileSize}</span>
                  <a
                    href={pdf.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ahom-gold text-xs py-2 px-4 shadow-md inline-flex items-center space-x-2"
                  >
                    <span>Download PDF</span>
                    <span>⬇</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 2: INTERACTIVE SOLVED QUESTIONS SECTION */}
      {activeTab === 'SOLVED' && (
        <section className="space-y-8">
          {/* Interactive Controls & Filters */}
          <div className="glass-panel p-6 rounded-3xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Subject Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#6B5D52] uppercase mb-2">Subject Filter</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full bg-[#F3EDE2] border border-[#E5DAC8] rounded-xl px-4 py-2.5 text-[#1D1814] text-xs focus:outline-none focus:border-[#9E3A26]"
                >
                  {subjects.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub === 'ALL' ? 'All Subjects' : sub}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Box */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#6B5D52] uppercase mb-2">Search Question Text</label>
                <input
                  type="text"
                  placeholder="e.g. Ahom, River, Percentage, Lachit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#F3EDE2] border border-[#E5DAC8] rounded-xl px-4 py-2.5 text-[#1D1814] text-xs focus:outline-none focus:border-[#9E3A26]"
                />
              </div>
            </div>

            <div className="text-xs text-[#6B5D52] font-mono flex items-center justify-between border-t border-[#E5DAC8] pt-3">
              <span>Showing <strong>{Math.min(filteredQuestions.length, 50)}</strong> of <strong>{filteredQuestions.length}</strong> matching questions</span>
              <span>Official Assam SLRC Papers</span>
            </div>
          </div>

          {/* Solved Question Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredQuestions.slice(0, 50).map((q) => (
              <div key={q.id} className="glass-panel p-6 rounded-2xl space-y-4 border-[#E5DAC8]">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#C9A468]/20 text-[#A88244] font-mono font-bold">
                    ADRE {q.pyqYear} • {q.paper}
                  </span>
                  <span className="text-[#6B5D52] font-mono">{q.subject}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#1D1814] leading-relaxed">{q.question}</h3>
                <div className="space-y-1.5 text-xs text-[#1D1814]">
                  {q.options.map((opt, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-lg border ${
                        i === q.correctAnswer ? 'bg-emerald-700/15 border-emerald-700/40 text-emerald-800 font-bold' : 'border-[#E5DAC8] bg-[#F3EDE2]'
                      }`}
                    >
                      <span className="inline-block w-6 font-mono font-bold text-[#9E3A26]">{String.fromCharCode(65 + i)}.</span> {opt} {i === q.correctAnswer && '✓ (Correct)'}
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
      )}

      <div className="p-8 rounded-3xl glass-panel text-center space-y-4 border-[#E5DAC8]">
        <h3 className="text-xl font-bold text-[#1D1814]">Want to Solve Full Official PYQ Papers Under Timed Conditions?</h3>
        <Link
          href="/adre/mock-test/"
          className="btn-ahom-primary inline-block text-xs"
        >
          Launch Interactive PYQ Test Simulator
        </Link>
      </div>
    </div>
  );
}

