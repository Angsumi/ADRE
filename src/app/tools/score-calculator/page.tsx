'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ScoreCalculatorPage() {
  const [correct, setCorrect] = useState<number>(75);
  const [wrong, setWrong] = useState<number>(15);
  const [totalQuestions, setTotalQuestions] = useState<number>(100);

  const correctMarks = correct * 1;
  const negativeMarks = wrong * 0.25;
  const netScore = Math.max(0, correctMarks - negativeMarks);
  const percentage = Math.min(100, Math.round((netScore / totalQuestions) * 100));
  const estimatedPercentile = Math.min(99.9, Math.round((percentage * 0.95 + 5) * 10) / 10);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-3">
        <span className="text-xs font-semibold text-axom-red bg-axom-red/10 px-3 py-1 rounded-md">
          Free Interactive SEO Tool
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          ADRE Score & Rank Calculator
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
          Calculate your exact net score considering Assam SLRC negative marking rules (-0.25 per wrong answer) and estimate your competitive percentile rank.
        </p>
      </header>

      {/* Interactive Tool Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Total Questions</label>
            <input
              type="number"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(Number(e.target.value))}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-axom-red"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-emerald-400 uppercase mb-2">Correct Answers (+1 Mark)</label>
            <input
              type="number"
              value={correct}
              onChange={(e) => setCorrect(Number(e.target.value))}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-axom-red uppercase mb-2">Wrong Answers (-0.25 Mark)</label>
            <input
              type="number"
              value={wrong}
              onChange={(e) => setWrong(Number(e.target.value))}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-axom-red"
            />
          </div>
        </div>

        {/* Calculated Output Widget */}
        <div className="bg-axom-navy/90 border border-axom-border p-6 rounded-2xl flex flex-col justify-between space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-axom-border pb-3">Scorecard Analysis</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Gross Marks:</span>
              <span className="text-white font-semibold">{correctMarks}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Negative Deduction:</span>
              <span className="text-axom-red font-semibold">-{negativeMarks.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-base border-t border-axom-border/50 pt-3 font-bold">
              <span className="text-white">Net ADRE Score:</span>
              <span className="text-axom-gold text-2xl">{netScore.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Percentage:</span>
              <span className="text-emerald-400 font-semibold">{percentage}%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Estimated Percentile Rank:</span>
              <span className="text-sky-400 font-bold text-lg">{estimatedPercentile}%ile</span>
            </div>
          </div>

          <Link
            href="/adre/mock-test/"
            className="block text-center py-3 bg-axom-red hover:bg-axom-redDark text-white text-xs font-bold rounded-xl transition-all shadow-lg"
          >
            Practice Mock Test to Improve Score →
          </Link>
        </div>
      </div>
    </div>
  );
}
