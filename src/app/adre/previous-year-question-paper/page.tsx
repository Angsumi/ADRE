'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ALL_PYQ_DATA, PYQ_2024_DATA, PYQ_2022_DATA } from '@/data/mockData';

export default function PyqVaultPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'ALL'>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

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

  const subjects = ['ALL', 'Assam GK', 'Social Studies', 'General Science', 'General Mathematics', 'Reasoning', 'English'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-axom-gold bg-axom-gold/10 px-3 py-1 rounded-md">
          <span>Official SLRC ADRE Dataset • {ALL_PYQ_DATA.length} Questions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          ADRE Previous Year Question Paper (PYQ Vault)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Access complete, standardized official ADRE solved questions from 2022 and 2024 papers. Filter by exam year, subject, or keyword.
        </p>
      </header>

      {/* Interactive Controls & Filters */}
      <div className="glass-panel p-6 rounded-3xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Year Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Exam Year</label>
            <div className="flex gap-2">
              {(['ALL', 2024, 2022] as const).map((year) => (
                <button
                  key={String(year)}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl border flex-1 transition-all ${
                    selectedYear === year
                      ? 'bg-axom-red border-axom-red text-white'
                      : 'bg-axom-navy/80 border-axom-border text-slate-400'
                  }`}
                >
                  {year === 'ALL' ? `All Years (${ALL_PYQ_DATA.length})` : year}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Subject Filter</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-2 text-white text-xs focus:outline-none focus:border-axom-red"
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
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Search Questions</label>
            <input
              type="text"
              placeholder="e.g. Ahom, River, Percentage..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-2 text-white text-xs focus:outline-none focus:border-axom-red"
            />
          </div>
        </div>

        <div className="text-xs text-slate-400 flex items-center justify-between border-t border-axom-border/50 pt-3">
          <span>Showing <strong>{Math.min(filteredQuestions.length, 50)}</strong> of <strong>{filteredQuestions.length}</strong> matching questions</span>
          <span>Official Assam SLRC Papers</span>
        </div>
      </div>

      {/* Solved Question Cards */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredQuestions.slice(0, 50).map((q) => (
            <div key={q.id} className="glass-panel p-6 rounded-2xl space-y-4 border-axom-border">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded bg-axom-gold/20 text-axom-gold font-bold">
                  ADRE {q.pyqYear} • {q.paper}
                </span>
                <span className="text-slate-400">{q.subject}</span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white leading-relaxed">{q.question}</h3>
              <div className="space-y-1.5 text-xs text-slate-300">
                {q.options.map((opt, i) => (
                  <div
                    key={i}
                    className={`p-2.5 rounded-lg border ${
                      i === q.correctAnswer ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 font-semibold' : 'border-axom-border bg-axom-navy/50'
                    }`}
                  >
                    <span className="inline-block w-6 font-bold text-slate-400">{String.fromCharCode(65 + i)}.</span> {opt} {i === q.correctAnswer && '✓ (Correct)'}
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-400 bg-axom-navy p-3 rounded-lg border border-axom-border/50">
                <strong>Explanation:</strong> {q.explanation}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="p-8 rounded-3xl glass-panel text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Want to Solve Full Official PYQ Papers Under Timed Conditions?</h3>
        <Link
          href="/adre/mock-test/"
          className="inline-block px-8 py-3 bg-axom-red hover:bg-axom-redDark text-white font-semibold text-sm rounded-xl shadow-lg"
        >
          Launch Interactive PYQ Test Simulator
        </Link>
      </div>
    </div>
  );
}
