'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SyllabusSubject } from '@/lib/syllabusData';

interface Props {
  subject: SyllabusSubject;
}

export default function SubjectSyllabusView({ subject }: Props) {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});
  const [allExpanded, setAllExpanded] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem('adre_syllabus_progress');
      if (saved) {
        setCompletedTopics(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load syllabus progress', e);
    }
  }, []);

  const toggleTopicCompletion = (topicId: string) => {
    const updated = { ...completedTopics, [topicId]: !completedTopics[topicId] };
    setCompletedTopics(updated);
    try {
      localStorage.setItem('adre_syllabus_progress', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save syllabus progress', e);
    }
  };

  const toggleSection = (idx: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [idx]: !(prev[idx] ?? allExpanded),
    }));
  };

  const toggleExpandAll = () => {
    const nextState = !allExpanded;
    setAllExpanded(nextState);
    const newExpanded: Record<number, boolean> = {};
    subject.sections.forEach((_, idx) => {
      newExpanded[idx] = nextState;
    });
    setExpandedSections(newExpanded);
  };

  // Compute progress for this subject
  let subjectTotalCount = 0;
  let subjectCompletedCount = 0;

  subject.sections.forEach((sec, sIdx) => {
    sec.subtopics.forEach((_, stIdx) => {
      const id = `${subject.slug}-${sIdx}-${stIdx}`;
      subjectTotalCount++;
      if (completedTopics[id]) subjectCompletedCount++;
    });
  });

  const subjectProgressPercent = subjectTotalCount > 0 ? Math.round((subjectCompletedCount / subjectTotalCount) * 100) : 0;

  const filteredPriorityMatrix = subject.priorityMatrix
    ? subject.priorityMatrix.filter((item) => selectedPriority === 'all' || item.priority === selectedPriority)
    : [];

  return (
    <div className="space-y-10">
      {/* Subject Header Banner */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 border-[#E5DAC8]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E5DAC8] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E3A26] bg-[#9E3A26]/10 px-3.5 py-1.5 rounded-lg border border-[#9E3A26]/20">
              <span>{subject.icon} Official ADRE Syllabus Specification</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D1814]">
              {subject.title}
            </h1>
            <p className="text-[#6B5D52] text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              {subject.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <span className="px-4 py-2 text-xs font-mono font-extrabold bg-[#C9A468]/20 text-[#7D5618] rounded-xl text-center border border-[#C9A468]/30">
              {subject.weightage}
            </span>

            {subject.pdfUrl && (
              <a
                href={subject.pdfUrl}
                download={subject.pdfFilename || 'ADRE_Syllabus.pdf'}
                className="btn-ahom-primary text-xs font-bold text-center flex items-center justify-center space-x-2 py-3 px-5 shadow-lg"
              >
                <span>📥 Download Official PDF</span>
              </a>
            )}
          </div>
        </div>

        {/* Live Subject Mastery Progress Tracker */}
        {isClient && (
          <div className="bg-[#F3EDE2] p-4 sm:p-5 rounded-2xl border border-[#E5DAC8] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono font-bold">
              <span className="text-[#1D1814]">
                🎯 {subject.title} Study Completion:
              </span>
              <span className="text-[#9E3A26]">
                {subjectCompletedCount} / {subjectTotalCount} Subtopics Completed ({subjectProgressPercent}%)
              </span>
            </div>
            <div className="w-full h-3 bg-[#EBE2D4] rounded-full overflow-hidden p-0.5 border border-[#E5DAC8]">
              <div
                className="h-full bg-gradient-to-r from-[#C9A468] via-[#A88244] to-[#9E3A26] rounded-full transition-all duration-500"
                style={{ width: `${subjectProgressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Interactive 10-Phase Step Selector (for Math) */}
        {subject.phases && subject.phases.length > 0 && (
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1D1814] flex items-center space-x-2">
                <span>🚀 Interactive 10-Phase Learning Roadmap</span>
              </h2>
              {selectedPhase !== null && (
                <button
                  onClick={() => setSelectedPhase(null)}
                  className="text-xs font-mono font-bold text-[#9E3A26] hover:underline"
                >
                  Clear Selection
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
              {subject.phases.map((p, idx) => {
                const isSelected = selectedPhase === idx + 1;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhase(isSelected ? null : idx + 1)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      isSelected
                        ? 'bg-[#9E3A26] text-[#F9F4EB] border-[#9E3A26] shadow-md scale-[1.02]'
                        : 'bg-[#F3EDE2] hover:bg-[#EBE2D4] border-[#E5DAC8] text-[#1D1814]'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold uppercase block ${isSelected ? 'text-[#F9F4EB]/80' : 'text-[#9E3A26]'}`}>
                      {p.phase}
                    </span>
                    <p className="font-bold text-xs mt-0.5">{p.name}</p>
                    <p className={`text-[10px] leading-snug mt-1 truncate ${isSelected ? 'text-[#F9F4EB]/90' : 'text-[#6B5D52]'}`}>
                      {p.topics}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Priority Matrix Filter (for Math) */}
      {subject.priorityMatrix && subject.priorityMatrix.length > 0 && (
        <div className="bg-[#F3EDE2] p-6 sm:p-8 rounded-3xl space-y-4 border border-[#E5DAC8] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-[#1D1814]">Topic Priority Matrix</h2>
            <div className="flex items-center space-x-2 text-xs font-mono font-bold">
              <span className="text-[#6B5D52]">Filter Priority:</span>
              {['all', 'A', 'B', 'C'].map((pri) => (
                <button
                  key={pri}
                  onClick={() => setSelectedPriority(pri)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    selectedPriority === pri
                      ? 'bg-[#9E3A26] text-[#F9F4EB]'
                      : 'bg-[#F9F4EB] text-[#6B5D52] hover:bg-[#EBE2D4] border border-[#E5DAC8]'
                  }`}
                >
                  {pri === 'all' ? 'All' : `Priority ${pri}`}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#E5DAC8]/60 text-[#1D1814] font-mono font-bold uppercase">
                <tr>
                  <th className="p-3 rounded-l-xl">Domain / Area</th>
                  <th className="p-3">Priority</th>
                  <th className="p-3">Why It Matters</th>
                  <th className="p-3 rounded-r-xl">Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DAC8]">
                {filteredPriorityMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#EBE2D4]/50 transition-colors">
                    <td className="p-3 font-bold text-[#1D1814]">{item.domain}</td>
                    <td className="p-3">
                      <span
                        className={`px-2.5 py-1 rounded font-mono font-bold text-xs ${
                          item.priority === 'A'
                            ? 'bg-[#9E3A26]/15 text-[#9E3A26]'
                            : item.priority === 'B'
                            ? 'bg-[#C9A468]/20 text-[#A88244]'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        Priority {item.priority}
                      </span>
                    </td>
                    <td className="p-3 text-[#6B5D52]">{item.whyItMatters}</td>
                    <td className="p-3 font-bold text-emerald-800">{item.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Detailed Interactive Subtopics Hierarchy */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-3">
          <h2 className="text-2xl font-bold text-[#1D1814]">
            Detailed Subtopic & Chapter Breakdown
          </h2>
          <button
            onClick={toggleExpandAll}
            className="text-xs font-mono font-bold text-[#9E3A26] bg-[#9E3A26]/10 px-3 py-1.5 rounded-lg border border-[#9E3A26]/20 hover:bg-[#9E3A26]/20 transition-colors"
          >
            {allExpanded ? 'Collapse All Sections' : 'Expand All Sections'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subject.sections.map((section, sIdx) => {
            const isExpanded = expandedSections[sIdx] ?? allExpanded;

            return (
              <div key={sIdx} className="bg-[#F3EDE2] p-6 rounded-3xl space-y-4 border border-[#E5DAC8] shadow-sm">
                <div
                  onClick={() => toggleSection(sIdx)}
                  className="flex items-center justify-between cursor-pointer border-b border-[#E5DAC8] pb-3"
                >
                  <h3 className="text-lg font-bold text-[#1D1814]">{section.title}</h3>
                  <span className="text-xs font-mono font-bold text-[#9E3A26] bg-[#9E3A26]/10 px-2.5 py-1 rounded-md">
                    {isExpanded ? '▲ Hide' : '▼ Show'}
                  </span>
                </div>

                {isExpanded && (
                  <div className="space-y-4 text-xs sm:text-sm text-[#2C241E]">
                    {section.subtopics.map((sub, stIdx) => {
                      const topicId = `${subject.slug}-${sIdx}-${stIdx}`;
                      const isChecked = isClient && !!completedTopics[topicId];

                      return (
                        <div
                          key={stIdx}
                          className={`space-y-2 p-4 rounded-2xl border transition-all ${
                            isChecked
                              ? 'bg-emerald-700/10 border-emerald-700/40 text-emerald-950'
                              : 'bg-[#F9F4EB] border-[#E5DAC8]/80'
                          }`}
                        >
                          <div
                            onClick={() => toggleTopicCompletion(topicId)}
                            className="flex items-center justify-between cursor-pointer"
                          >
                            <h4 className={`font-bold text-sm ${isChecked ? 'line-through opacity-80 text-emerald-900' : 'text-[#9E3A26]'}`}>
                              {sub.name}
                            </h4>

                            <label className="flex items-center space-x-2 text-xs font-mono font-bold cursor-pointer shrink-0">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {}}
                                className="rounded text-emerald-700 focus:ring-emerald-700"
                              />
                              <span className={isChecked ? 'text-emerald-800 font-bold' : 'text-[#6B5D52]'}>
                                {isChecked ? 'Done ✓' : 'Mark as Done'}
                              </span>
                            </label>
                          </div>

                          {sub.details && sub.details.length > 0 && (
                            <ul className="list-disc pl-5 space-y-1 text-xs text-[#6B5D52] leading-relaxed">
                              {sub.details.map((detail, dIdx) => (
                                <li key={dIdx}>{detail}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Practice CTA */}
      <div className="p-8 rounded-3xl glass-panel text-center space-y-4 border-[#E5DAC8]">
        <h3 className="text-2xl font-bold text-[#1D1814]">Ready to Solve Official Questions for {subject.title}?</h3>
        <p className="text-xs sm:text-sm text-[#6B5D52]">
          Practice solved MCQs collected from ADRE 2022 & 2024 papers with complete answer keys.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/adre/topics/" className="btn-ahom-primary text-xs inline-block">
            Browse Topic MCQs →
          </Link>
          <Link href="/adre/mock-test/" className="px-5 py-2.5 rounded-xl border border-[#9E3A26] text-[#9E3A26] font-extrabold text-xs hover:bg-[#9E3A26]/10 transition-all">
            Attempt Full Mock Test →
          </Link>
        </div>
      </div>
    </div>
  );
}
