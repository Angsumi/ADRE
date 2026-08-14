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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <header className="text-center space-y-3">
        <span className="text-xs font-mono font-bold text-[#9E3A26] bg-[#9E3A26]/10 px-3.5 py-1.5 rounded-lg border border-[#9E3A26]/20">
          Free Interactive ADRE Tool
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE Score & Rank Calculator
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-xl mx-auto font-medium">
          Calculate your exact net score considering Assam SLRC negative marking rules (-0.25 per wrong answer) and estimate your competitive percentile rank.
        </p>
      </header>

      {/* Interactive Tool Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 border-[#E5DAC8]">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-mono font-bold text-[#6B5D52] uppercase mb-2">Total Questions</label>
            <input
              type="number"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(Number(e.target.value))}
              className="w-full bg-[#F3EDE2] border border-[#E5DAC8] rounded-xl px-4 py-3 text-[#1D1814] text-sm focus:outline-none focus:border-[#9E3A26]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-emerald-800 uppercase mb-2">Correct Answers (+1 Mark)</label>
            <input
              type="number"
              value={correct}
              onChange={(e) => setCorrect(Number(e.target.value))}
              className="w-full bg-[#F3EDE2] border border-[#E5DAC8] rounded-xl px-4 py-3 text-[#1D1814] text-sm focus:outline-none focus:border-emerald-700"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-[#9E3A26] uppercase mb-2">Wrong Answers (-0.25 Mark)</label>
            <input
              type="number"
              value={wrong}
              onChange={(e) => setWrong(Number(e.target.value))}
              className="w-full bg-[#F3EDE2] border border-[#E5DAC8] rounded-xl px-4 py-3 text-[#1D1814] text-sm focus:outline-none focus:border-[#9E3A26]"
            />
          </div>
        </div>

        {/* Calculated Output Widget */}
        <div className="bg-[#F3EDE2] border border-[#E5DAC8] p-6 rounded-2xl flex flex-col justify-between space-y-6">
          <h3 className="text-sm font-bold text-[#1D1814] font-mono uppercase tracking-wider border-b border-[#E5DAC8] pb-3">Scorecard Analysis</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#6B5D52]">Gross Marks:</span>
              <span className="text-[#1D1814] font-bold">{correctMarks}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#6B5D52]">Negative Deduction:</span>
              <span className="text-[#9E3A26] font-bold">-{negativeMarks.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-base border-t border-[#E5DAC8] pt-3 font-bold">
              <span className="text-[#1D1814]">Net ADRE Score:</span>
              <span className="text-[#A88244] text-2xl font-mono">{netScore.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#6B5D52]">Percentage:</span>
              <span className="text-emerald-800 font-bold">{percentage}%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#6B5D52]">Estimated Percentile Rank:</span>
              <span className="text-[#9E3A26] font-bold text-lg font-mono">{estimatedPercentile}%ile</span>
            </div>
          </div>

          <Link
            href="/adre/mock-test/"
            className="btn-ahom-primary block text-center text-xs"
          >
            Practice Mock Test to Improve Score →
          </Link>
        </div>
      </div>
    </div>
  );
}

