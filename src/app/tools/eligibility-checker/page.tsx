'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface ExamPaperEligibility {
  id: string;
  paperName: string;
  grade: 'Grade-III' | 'Grade-IV';
  qualificationRequired: string;
  description: string;
  checkFn: (qual: string, hasLicense: boolean) => boolean;
}

export default function EligibilityCheckerPage() {
  const [age, setAge] = useState<number>(24);
  const [category, setCategory] = useState<string>('UR');
  const [qualification, setQualification] = useState<string>('Graduate');
  const [hasDriverLicense, setHasDriverLicense] = useState<boolean>(false);

  // Official Assam ADRE Age relaxation limits (18 to Max)
  const getMaxAge = (cat: string) => {
    switch (cat) {
      case 'OBC': return 43;
      case 'SC':
      case 'ST': return 45;
      case 'PwBD': return 50;
      default: return 40; // Unreserved (UR)
    }
  };

  const maxAllowedAge = getMaxAge(category);
  const isAgeEligible = age >= 18 && age <= maxAllowedAge;

  // The 5 Official ADRE Exam Papers
  const EXAM_PAPERS: ExamPaperEligibility[] = [
    {
      id: 'paper-1',
      paperName: 'Paper-I: HSLC or equivalent (Grade-IV)',
      grade: 'Grade-IV',
      qualificationRequired: 'HSLC (Class 10 Pass) / ITI',
      description: 'Covers Peon, Chowkidar, Field Guard, Workshop Attendant, and Laboratory Bearer posts requiring Class 10 or ITI.',
      checkFn: (qual) => qual === 'Graduate' || qual === 'HSSLC' || qual === 'HSLC',
    },
    {
      id: 'paper-2',
      paperName: 'Paper-II: Class VIII or equivalent (Grade-IV)',
      grade: 'Grade-IV',
      qualificationRequired: 'Class VIII (Up to Class 8 Pass)',
      description: 'Covers support staff posts for candidates with education up to Class 8 standard.',
      checkFn: () => true, // All qualifications 8th pass and above eligible
    },
    {
      id: 'paper-3',
      paperName: 'Paper-III: HSSLC or equivalent (Grade-III)',
      grade: 'Grade-III',
      qualificationRequired: 'HSSLC (Class 12 Pass)',
      description: 'Covers Junior Assistant, LDA, Typist, and Field Assistant posts requiring 12th standard pass qualification.',
      checkFn: (qual) => qual === 'Graduate' || qual === 'HSSLC',
    },
    {
      id: 'paper-4',
      paperName: 'Paper-IV: Bachelor’s Degree or equivalent (Grade-III)',
      grade: 'Grade-III',
      qualificationRequired: 'Bachelor’s Degree (Graduate)',
      description: 'Covers Executive Officer, Inspector, Tax Collector, and specialized administrative roles requiring a University Degree.',
      checkFn: (qual) => qual === 'Graduate',
    },
    {
      id: 'paper-5',
      paperName: 'Paper-V: Driver, HSLC or equivalent (Grade-III)',
      grade: 'Grade-III',
      qualificationRequired: 'HSLC (Class 10 Pass) + Valid Driving License',
      description: 'Covers Light Motor Vehicle (LMV) Driver posts requiring 10th pass and valid driving license (LMV/HMV).',
      checkFn: (qual, license) => (qual === 'Graduate' || qual === 'HSSLC' || qual === 'HSLC') && license,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 bg-[#F9F4EB]">
      <header className="text-center space-y-3">
        <span className="text-xs font-mono font-bold text-[#9E3A26] bg-[#9E3A26]/10 px-3.5 py-1.5 rounded-lg border border-[#9E3A26]/20">
          Official SLRC ADRE 5-Paper Rule Engine
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
          ADRE 5-Paper Eligibility Checker
        </h1>
        <p className="text-[#6B5D52] text-sm sm:text-base max-w-2xl mx-auto font-medium">
          Check your exact eligibility across all 5 official ADRE examination papers for Grade-III and Grade-IV posts based on age relaxation and qualification rules.
        </p>
      </header>

      {/* Input Section */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border-[#E5DAC8]">
        <h2 className="text-lg font-bold text-[#1D1814] border-b border-[#E5DAC8] pb-3">Enter Candidate Details</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Age Input */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#6B5D52] uppercase mb-2">Age (18–50 Years)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full bg-[#F3EDE2] border border-[#E5DAC8] rounded-xl px-4 py-3 text-[#1D1814] text-sm focus:outline-none focus:border-[#9E3A26]"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#6B5D52] uppercase mb-2">Category (Age Limit)</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#F3EDE2] border border-[#E5DAC8] rounded-xl px-4 py-3 text-[#1D1814] text-sm focus:outline-none focus:border-[#9E3A26]"
            >
              <option value="UR">Unreserved (UR) — Limit 40</option>
              <option value="OBC">OBC / MOBC — Limit 43</option>
              <option value="SC">Scheduled Caste (SC) — Limit 45</option>
              <option value="ST">Scheduled Tribe (ST) — Limit 45</option>
              <option value="PwBD">PwBD — Limit 50</option>
            </select>
          </div>

          {/* Highest Qualification */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#6B5D52] uppercase mb-2">Highest Educational Qualification</label>
            <select
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full bg-[#F3EDE2] border border-[#E5DAC8] rounded-xl px-4 py-3 text-[#1D1814] text-sm focus:outline-none focus:border-[#9E3A26]"
            >
              <option value="Graduate">Bachelor’s Degree (Graduate)</option>
              <option value="HSSLC">HSSLC (Class 12 Pass)</option>
              <option value="HSLC">HSLC (Class 10 / ITI Pass)</option>
              <option value="Class8">Class VIII (Up to Class 8 Pass)</option>
            </select>
          </div>
        </div>

        {/* Driving License Checkbox for Paper-V */}
        <div className="pt-2 flex items-center space-x-3">
          <input
            type="checkbox"
            id="driverLicense"
            checked={hasDriverLicense}
            onChange={(e) => setHasDriverLicense(e.target.checked)}
            className="w-4 h-4 accent-[#9E3A26] rounded cursor-pointer"
          />
          <label htmlFor="driverLicense" className="text-xs font-semibold text-[#1D1814] cursor-pointer">
            I hold a valid LMV / HMV Driving License (Required for Paper-V Driver Post)
          </label>
        </div>
      </div>

      {/* 5-Paper Eligibility Results */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-3">
          <h2 className="text-xl font-bold text-[#1D1814]">Eligibility Status for All 5 Official ADRE Papers</h2>
          <span className="text-xs font-mono font-bold text-[#6B5D52]">Age Check: {isAgeEligible ? `Eligible (${age} yrs ≤ ${maxAllowedAge} yrs)` : `Ineligible (${age} yrs > ${maxAllowedAge} yrs limit)`}</span>
        </div>

        <div className="space-y-4">
          {EXAM_PAPERS.map((paper) => {
            const isQualEligible = paper.checkFn(qualification, hasDriverLicense);
            const isFullyEligible = isAgeEligible && isQualEligible;

            return (
              <div
                key={paper.id}
                className={`p-6 rounded-2xl border transition-all ${
                  isFullyEligible
                    ? 'bg-[#F3EDE2] border-emerald-700/40 shadow-sm'
                    : 'bg-[#F3EDE2]/60 border-[#E5DAC8] opacity-80'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
                      paper.grade === 'Grade-III' ? 'bg-[#9E3A26]/15 text-[#9E3A26]' : 'bg-[#C9A468]/20 text-[#A88244]'
                    }`}>
                      {paper.grade}
                    </span>
                    <h3 className="text-base font-bold text-[#1D1814]">{paper.paperName}</h3>
                  </div>

                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                    isFullyEligible
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-[#9E3A26]/15 text-[#9E3A26]'
                  }`}>
                    {isFullyEligible ? '✓ ELIGIBLE TO APPLY' : '✕ NOT ELIGIBLE'}
                  </span>
                </div>

                <p className="text-xs text-[#6B5D52] mb-3">{paper.description}</p>
                <div className="text-[11px] font-mono text-[#8C7B6D] border-t border-[#E5DAC8] pt-2 flex items-center justify-between">
                  <span>Requirement: <strong>{paper.qualificationRequired}</strong></span>
                  <span>{isFullyEligible ? 'Meets all criteria' : !isAgeEligible ? 'Age limit exceeded' : 'Qualification criteria not met'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Instructions & Guidelines Section */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border-[#E5DAC8] text-[#1D1814]">
        <h2 className="text-xl font-bold text-[#1D1814] border-b border-[#E5DAC8] pb-3">
          📘 How to Use the Eligibility Checker & Official Rules
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-[#6B5D52] leading-relaxed">
          <h3 className="text-base font-bold text-[#1D1814]">Step-by-Step Instructions:</h3>
          <ol className="list-decimal pl-5 space-y-2 text-[#1D1814]">
            <li><strong>Select Age:</strong> Input your current age in years as per your HSLC / Class 10 Admit Card or Birth Certificate.</li>
            <li><strong>Select Reservation Category:</strong> Choose your reservation category (UR, OBC/MOBC, SC, ST, PwBD) to automatically apply Government of Assam upper age relaxations.</li>
            <li><strong>Select Highest Qualification:</strong> Choose your highest completed educational qualification (Bachelor's Degree, HSSLC 12th, HSLC 10th, or Class VIII).</li>
            <li><strong>Check Driver License (Optional):</strong> Tick the checkbox if you possess a valid LMV/HMV driving license to evaluate eligibility for <strong>Paper-V (Driver)</strong>.</li>
            <li><strong>Review 5-Paper Report:</strong> The tool instantly evaluates your eligibility for Paper-I, Paper-II, Paper-III, Paper-IV, and Paper-V.</li>
          </ol>

          <div className="p-4 rounded-xl bg-[#F3EDE2] border border-[#E5DAC8] space-y-2 mt-4">
            <h4 className="font-bold text-[#1D1814] font-mono">Assam Government Age Relaxation Rules:</h4>
            <ul className="list-disc pl-5 text-xs text-[#1D1814] space-y-1">
              <li><strong>Unreserved (UR):</strong> 18 to 40 Years</li>
              <li><strong>OBC / MOBC:</strong> 18 to 43 Years (+3 Years relaxation)</li>
              <li><strong>SC / ST:</strong> 18 to 45 Years (+5 Years relaxation)</li>
              <li><strong>PwBD:</strong> 18 to 50 Years (+10 Years relaxation)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
