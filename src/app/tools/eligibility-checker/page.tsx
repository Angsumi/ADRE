'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EligibilityCheckerPage() {
  const [age, setAge] = useState<number>(24);
  const [category, setCategory] = useState<string>('UR');
  const [qualification, setQualification] = useState<string>('Graduate');

  // Assam ADRE Age relaxation rules
  const getMaxAge = (cat: string) => {
    switch (cat) {
      case 'OBC': return 43;
      case 'SC':
      case 'ST': return 45;
      case 'PwBD': return 50;
      default: return 40; // UR
    }
  };

  const maxAllowedAge = getMaxAge(category);
  const isAgeEligible = age >= 18 && age <= maxAllowedAge;

  const isGrade3Eligible = isAgeEligible && (qualification === 'Graduate' || qualification === 'HS');
  const isGrade4Eligible = isAgeEligible;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <header className="text-center space-y-3">
        <span className="text-xs font-semibold text-axom-red bg-axom-red/10 px-3 py-1 rounded-md">
          Assam Recruitment Compliance Tool
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          ADRE Eligibility & Age Checker
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
          Verify your eligibility for ADRE Grade 3 & Grade 4 according to official Assam Government relaxation rules.
        </p>
      </header>

      <div className="glass-panel p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Your Age (Years)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-axom-red"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Reservation Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-axom-red"
            >
              <option value="UR">Unreserved (UR) — Upper Limit 40</option>
              <option value="OBC">OBC / MOBC — Upper Limit 43</option>
              <option value="SC">Scheduled Caste (SC) — Upper Limit 45</option>
              <option value="ST">Scheduled Tribe (ST) — Upper Limit 45</option>
              <option value="PwBD">PwBD — Upper Limit 50</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Educational Qualification</label>
            <select
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full bg-axom-navy border border-axom-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-axom-red"
            >
              <option value="Graduate">Bachelor Degree (Graduate)</option>
              <option value="HS">Higher Secondary (Class 12)</option>
              <option value="HSLC">HSLC (Class 10)</option>
              <option value="Class8">Class 8 Pass</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="bg-axom-navy/90 border border-axom-border p-6 rounded-2xl flex flex-col justify-between space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-axom-border pb-3">Eligibility Report</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border bg-axom-card border-axom-border space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white">ADRE Grade 3 Posts:</span>
                <span className={isGrade3Eligible ? 'text-emerald-400' : 'text-axom-red'}>
                  {isGrade3Eligible ? '✓ ELIGIBLE' : '✕ NOT ELIGIBLE'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Requires Graduation or HS depending on specific category.</p>
            </div>

            <div className="p-4 rounded-xl border bg-axom-card border-axom-border space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white">ADRE Grade 4 Posts:</span>
                <span className={isGrade4Eligible ? 'text-emerald-400' : 'text-axom-red'}>
                  {isGrade4Eligible ? '✓ ELIGIBLE' : '✕ NOT ELIGIBLE'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Requires Class 8 or Class 10 pass status.</p>
            </div>
          </div>

          <Link
            href="/adre/mock-test/"
            className="block text-center py-3 bg-axom-red hover:bg-axom-redDark text-white text-xs font-bold rounded-xl shadow-lg"
          >
            Start Preparing Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
