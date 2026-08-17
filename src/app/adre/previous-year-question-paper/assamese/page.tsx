'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ASSAMESE_PYQ_DATA, AssamesePyqQuestion } from '@/data/assamesePyqData';

export default function AssamesePyqVaultPage() {
  const [selectedYear, setSelectedYear] = useState<number | 'ALL'>('ALL');
  const [selectedPaper, setSelectedPaper] = useState<string>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [userSelectedOptions, setUserSelectedOptions] = useState<Record<string, number>>({});
  const [visibleCount, setVisibleCount] = useState<number>(30);

  const toggleReveal = (id: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectOption = (qId: string, optIdx: number) => {
    setUserSelectedOptions((prev) => ({ ...prev, [qId]: optIdx }));
    setRevealedAnswers((prev) => ({ ...prev, [qId]: true }));
  };

  // Extract unique papers and subjects for filtering
  const papers = Array.from(new Set(ASSAMESE_PYQ_DATA.map((q) => q.paper)));
  const subjects = Array.from(new Set(ASSAMESE_PYQ_DATA.map((q) => q.subject))).filter(Boolean);

  // Filter questions dynamically
  const filteredQuestions = ASSAMESE_PYQ_DATA.filter((q) => {
    if (selectedYear !== 'ALL' && q.year !== selectedYear) return false;
    if (selectedPaper !== 'ALL' && q.paper !== selectedPaper) return false;
    if (selectedSubject !== 'ALL' && q.subject !== selectedSubject) return false;
    if (searchQuery.trim()) {
      const qText = (q.question + ' ' + q.options.join(' ') + ' ' + q.explanation).toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase().trim())) return false;
    }
    return true;
  });

  const displayedQuestions = filteredQuestions.slice(0, visibleCount);

  return (
    <div className="bg-[#F9F4EB] text-[#1D1814] min-h-screen">
      {/* Top Sticky Language & Mode Switcher */}
      <div className="bg-[#1D1814] text-[#F9F4EB] py-3 px-4 sticky top-20 z-40 border-b border-[#332A24] shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#E7C792] font-semibold">অসমীয়া PYQ ভঁৰাল (Assamese PYQ Bank)</span>
            <span className="hidden sm:inline text-[#A8988A]">| 1,127 Official Questions</span>
          </div>

          <div className="flex items-center space-x-2 bg-[#2B231D] p-1 rounded-lg border border-[#44372F]">
            <Link
              href="/adre/previous-year-question-paper/"
              className="px-3 py-1 rounded-md text-xs font-bold text-[#A8988A] hover:text-white transition-all"
            >
              English PYQs (1,226)
            </Link>
            <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#9E3A26] text-white shadow-sm">
              অসমীয়া PYQs (1,127)
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-12 space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#9E3A26]/10 border border-[#9E3A26]/20 text-[#9E3A26] font-mono text-xs font-bold uppercase tracking-wider">
          <span>Official SLRC ADRE Question Bank · Assamese Translation</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814] tracking-tight leading-tight">
          অসমীয়া PYQ ভঁৰাল — <span className="text-[#9E3A26] italic font-serif">১,১২৭টা প্ৰশ্ন আৰু উত্তৰ</span>
        </h1>

        <p className="text-base sm:text-lg text-[#6B5D52] max-w-3xl leading-relaxed font-medium">
          ADRE 2022 আৰু 2024 পৰীক্ষাৰ Grade 3 (Paper III, IV, V) আৰু Grade 4 (Paper I, II)ৰ ১,১২৭টা সম্পূৰ্ণ প্ৰশ্ন, বিকল্প, সঠিক উত্তৰ আৰু বিস্তৃত ব্যাখ্যা অসমীয়া ভাষাত।
        </p>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl pt-4 border-t border-[#E5DAC8]">
          <div className="bg-[#F3EDE2] p-4 rounded-xl border border-[#E5DAC8]">
            <span className="text-2xl font-black text-[#9E3A26] font-mono block">1,127</span>
            <span className="text-xs text-[#6B5D52] font-mono uppercase font-bold">অসমীয়া প্ৰশ্ন</span>
          </div>
          <div className="bg-[#F3EDE2] p-4 rounded-xl border border-[#E5DAC8]">
            <span className="text-2xl font-black text-[#1D1814] font-mono block">10</span>
            <span className="text-xs text-[#6B5D52] font-mono uppercase font-bold">প্ৰশ্নকাকত (Papers)</span>
          </div>
          <div className="bg-[#F3EDE2] p-4 rounded-xl border border-[#E5DAC8]">
            <span className="text-2xl font-black text-[#A88244] font-mono block">2022-2024</span>
            <span className="text-xs text-[#6B5D52] font-mono uppercase font-bold">বছৰৰ ভঁৰাল</span>
          </div>
          <div className="bg-[#F3EDE2] p-4 rounded-xl border border-[#E5DAC8]">
            <span className="text-2xl font-black text-emerald-800 font-mono block">100%</span>
            <span className="text-xs text-[#6B5D52] font-mono uppercase font-bold">ব্যাখ্যাসহ সমাধান</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Solver Workspace */}
      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-8">
        
        {/* Filter Controls Panel */}
        <div className="bg-[#F3EDE2] border border-[#E5DAC8] p-6 rounded-2xl space-y-4 shadow-sm">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5DAC8] pb-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#9E3A26]">
              🔍 প্ৰশ্ন বাছনি ফিল্টাৰ (Interactive Filters)
            </span>
            <span className="font-mono text-xs text-[#6B5D52]">
              প্ৰদৰ্শিত: {filteredQuestions.length} / {ASSAMESE_PYQ_DATA.length} প্ৰশ্ন
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono font-bold uppercase text-[#6B5D52]">বিচাৰক (Search)</label>
              <input
                type="text"
                placeholder="শব্দ বা বিষয় বিচাৰক..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F9F4EB] border border-[#D8CEBE] text-xs focus:outline-none focus:border-[#9E3A26]"
              />
            </div>

            {/* Year Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono font-bold uppercase text-[#6B5D52]">পৰীক্ষাৰ বছৰ (Year)</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F9F4EB] border border-[#D8CEBE] text-xs font-mono font-bold focus:outline-none focus:border-[#9E3A26]"
              >
                <option value="ALL">সকলো বছৰ (2022 & 2024)</option>
                <option value="2024">ADRE 2024 (600 Questions)</option>
                <option value="2022">ADRE 2022 (527 Questions)</option>
              </select>
            </div>

            {/* Paper Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono font-bold uppercase text-[#6B5D52]">প্ৰশ্নকাকত (Paper)</label>
              <select
                value={selectedPaper}
                onChange={(e) => setSelectedPaper(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F9F4EB] border border-[#D8CEBE] text-xs font-mono font-bold focus:outline-none focus:border-[#9E3A26]"
              >
                <option value="ALL">সকলো Paper</option>
                {papers.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono font-bold uppercase text-[#6B5D52]">বিষয় (Subject)</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F9F4EB] border border-[#D8CEBE] text-xs font-mono font-bold focus:outline-none focus:border-[#9E3A26]"
              >
                <option value="ALL">সকলো বিষয় (All Subjects)</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reset Filters */}
          {(selectedYear !== 'ALL' || selectedPaper !== 'ALL' || selectedSubject !== 'ALL' || searchQuery) && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setSelectedYear('ALL');
                  setSelectedPaper('ALL');
                  setSelectedSubject('ALL');
                  setSearchQuery('');
                }}
                className="text-xs font-mono font-bold text-[#9E3A26] underline hover:opacity-80"
              >
                ফিল্টাৰ পুনঃসংহতি কৰক (Reset All Filters)
              </button>
            </div>
          )}
        </div>

        {/* Questions Feed Grid */}
        <div className="space-y-6">
          {displayedQuestions.length === 0 ? (
            <div className="bg-[#F3EDE2] border border-[#E5DAC8] p-12 text-center rounded-2xl space-y-3">
              <span className="text-4xl block">🔍</span>
              <h3 className="text-lg font-bold text-[#1D1814]">কোনো প্ৰশ্ন পোৱা নগ’ল</h3>
              <p className="text-xs text-[#6B5D52]">অনুগ্ৰহ কৰি বিচাৰ শব্দ বা ফিল্টাৰ সলনি কৰি চাওক।</p>
            </div>
          ) : (
            displayedQuestions.map((q, idx) => {
              const isRevealed = !!revealedAnswers[q.id];
              const selectedOptIdx = userSelectedOptions[q.id];

              return (
                <div
                  key={q.id}
                  className="bg-[#F3EDE2] border border-[#E5DAC8] hover:border-[#9E3A26] p-6 rounded-2xl space-y-4 transition-all shadow-sm"
                >
                  {/* Top Meta info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5DAC8] pb-3 text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#9E3A26]/10 text-[#9E3A26] font-bold">
                        #{idx + 1}
                      </span>
                      <span className="font-bold text-[#1D1814]">{q.year}</span>
                      <span className="text-[#6B5D52]">•</span>
                      <span className="text-[#A88244] font-semibold">{q.grade} {q.paper}</span>
                    </div>

                    <span className="text-[#6B5D52] bg-[#EAE0D0] px-2 py-0.5 rounded text-[11px]">
                      {q.subject}
                    </span>
                  </div>

                  {/* Question Text */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1D1814] leading-relaxed whitespace-pre-line">
                    {q.question}
                  </h3>

                  {/* Options List A, B, C, D */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((optText, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
                      const isSelected = selectedOptIdx === optIdx;
                      const isCorrect = q.correctOption.includes(letter) || q.answer === optText;

                      let btnStyle = 'bg-[#F9F4EB] border-[#D8CEBE] text-[#1D1814] hover:bg-white';
                      if (isRevealed) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-red-100 border-red-400 text-red-900 font-bold';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-start space-x-2.5 ${btnStyle}`}
                        >
                          <span className="font-mono font-bold shrink-0 px-1.5 py-0.5 rounded bg-black/5">
                            ({letter})
                          </span>
                          <span className="leading-snug">{optText}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Bottom Action / Solution Drawer */}
                  <div className="pt-3 border-t border-[#E5DAC8] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => toggleReveal(q.id)}
                      className="font-mono text-xs font-bold text-[#9E3A26] border-b border-[#9E3A26] pb-0.5 hover:opacity-80 transition-opacity"
                    >
                      {isRevealed ? 'উত্তৰ লুকুৱাওক (Hide Solution)' : 'সঠিক উত্তৰ আৰু ব্যাখ্যা চাওক (Show Solution) →'}
                    </button>

                    {isRevealed && (
                      <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                        সঠিক উত্তৰ: ({q.correctOption})
                      </span>
                    )}
                  </div>

                  {/* Explanation Box */}
                  {isRevealed && q.explanation && (
                    <div className="bg-[#F9F4EB] border border-[#E5DAC8] p-4 rounded-xl text-xs space-y-1.5">
                      <div className="font-mono font-bold text-[#9E3A26] text-[11px] uppercase">
                        💡 বিস্তৃত ব্যাখ্যা (Detailed Explanation):
                      </div>
                      <div className="text-[#4D3F35] leading-relaxed whitespace-pre-line">
                        {q.explanation}
                      </div>
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

        {/* Load More Button */}
        {filteredQuestions.length > visibleCount && (
          <div className="text-center pt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 40)}
              className="btn-ahom-primary text-sm px-8 py-3.5 shadow-lg"
            >
              আৰু ৪০টা প্ৰশ্ন চাওক (Load 40 More Questions) ↓
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
