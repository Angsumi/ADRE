'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StudyPlannerPage() {
  const [dailyHours, setDailyHours] = useState<number>(4);
  const [targetExam, setTargetExam] = useState<string>('Grade 3');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-3">
        <span className="text-xs font-semibold text-axom-red bg-axom-red/10 px-3 py-1 rounded-md">
          Personalized Preparation Tool
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          30-Day ADRE Study Planner
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
          Generate an optimized, high-yield study timetable tailored to your daily study hours and target exam category.
        </p>
      </header>

      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Target Exam</label>
            <select
              value={targetExam}
              onChange={(e) => setTargetExam(e.target.value)}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-axom-red"
            >
              <option value="Grade 3">ADRE Grade 3 (Graduate & HS)</option>
              <option value="Grade 4">ADRE Grade 4 (Class 8 & 10)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Available Daily Study Hours</label>
            <input
              type="number"
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-axom-red"
            />
          </div>
        </div>

        {/* Timetable Schedule Breakdown */}
        <div className="bg-axom-navy border border-axom-border p-6 rounded-2xl space-y-4">
          <h3 className="text-base font-bold text-white border-b border-axom-border pb-3">Recommended Daily Allocation ({dailyHours} Hours)</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-axom-card p-4 rounded-xl space-y-1">
              <span className="text-xs font-bold text-axom-red">Assam GK & Social Studies</span>
              <p className="text-xl font-bold text-white">{(dailyHours * 0.4).toFixed(1)} hrs/day</p>
              <p className="text-[11px] text-slate-400">Assam History, Geography, Culture & Polity notes.</p>
            </div>

            <div className="bg-axom-card p-4 rounded-xl space-y-1">
              <span className="text-xs font-bold text-axom-gold">Maths & Reasoning</span>
              <p className="text-xl font-bold text-white">{(dailyHours * 0.35).toFixed(1)} hrs/day</p>
              <p className="text-[11px] text-slate-400">Numerical shortcuts, series drills & practice sets.</p>
            </div>

            <div className="bg-axom-card p-4 rounded-xl space-y-1">
              <span className="text-xs font-bold text-emerald-400">Mock Tests & Revision</span>
              <p className="text-xl font-bold text-white">{(dailyHours * 0.25).toFixed(1)} hrs/day</p>
              <p className="text-[11px] text-slate-400">Attempting full mocks and reviewing Mistake Bank.</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/adre/mock-test/"
            className="inline-block px-8 py-3 bg-axom-red hover:bg-axom-redDark text-white text-xs font-bold rounded-xl shadow-lg"
          >
            Start Day 1 Mock Practice →
          </Link>
        </div>
      </div>
    </div>
  );
}
