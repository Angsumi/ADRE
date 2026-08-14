'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SYLLABUS_SUBJECTS, SyllabusSubject } from '@/lib/syllabusData';

export default function SyllabusInteractiveHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [isClient, setIsClient] = useState(false);

  // Initialize client state and localStorage
  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem('adre_syllabus_progress');
      if (saved) {
        setCompletedTopics(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to read syllabus progress', e);
    }
  }, []);

  // Toggle completion checkbox
  const toggleTopicCompletion = (topicId: string) => {
    const updated = { ...completedTopics, [topicId]: !completedTopics[topicId] };
    setCompletedTopics(updated);
    try {
      localStorage.setItem('adre_syllabus_progress', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save syllabus progress', e);
    }
  };

  // Toggle section accordion
  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Total topics count for progress bar calculation
  let totalSubtopicsCount = 0;
  let completedCount = 0;

  SYLLABUS_SUBJECTS.forEach((sub) => {
    sub.sections.forEach((sec, sIdx) => {
      sec.subtopics.forEach((st, stIdx) => {
        const id = `${sub.slug}-${sIdx}-${stIdx}`;
        totalSubtopicsCount++;
        if (completedTopics[id]) completedCount++;
      });
    });
  });

  const progressPercent = totalSubtopicsCount > 0 ? Math.round((completedCount / totalSubtopicsCount) * 100) : 0;

  // Filter subjects based on pills and search input
  const filteredSubjects = SYLLABUS_SUBJECTS.filter((sub) => {
    if (selectedSubject !== 'all' && sub.slug !== selectedSubject) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    const titleMatch = sub.title.toLowerCase().includes(q) || sub.description.toLowerCase().includes(q);
    const topicMatch = sub.sections.some((sec) =>
      sec.title.toLowerCase().includes(q) ||
      sec.subtopics.some(
        (st) =>
          st.name.toLowerCase().includes(q) ||
          (st.details && st.details.some((d) => d.toLowerCase().includes(q)))
      )
    );

    return titleMatch || topicMatch;
  });

  return (
    <div className="space-y-8">
      {/* Interactive Progress Bar & Search Hub */}
      <div className="bg-[#F3EDE2] p-6 sm:p-8 rounded-3xl space-y-6 border border-[#E5DAC8] shadow-sm">
        {/* Live Completion Progress Indicator */}
        {isClient && (
          <div className="space-y-2 bg-[#F9F4EB] p-4 sm:p-5 rounded-2xl border border-[#E5DAC8]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono font-bold">
              <span className="text-[#1D1814] flex items-center space-x-2">
                <span>🎯 Personal Preparation Progress:</span>
                <span className="text-[#9E3A26]">{completedCount} of {totalSubtopicsCount} Topics Mastered</span>
              </span>
              <span className="text-[#A88244] font-extrabold">{progressPercent}% Completed</span>
            </div>
            <div className="w-full h-3 bg-[#EBE2D4] rounded-full overflow-hidden p-0.5 border border-[#E5DAC8]">
              <div
                className="h-full bg-gradient-to-r from-[#C9A468] via-[#A88244] to-[#9E3A26] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Real-time Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#6B5D52]">
            🔍
          </div>
          <input
            type="text"
            placeholder="Search any syllabus topic (e.g., Ahom Dynasty, Divisibility, Prepositions, Brahmaputra, 6th Schedule)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3.5 bg-[#F9F4EB] border border-[#E5DAC8] rounded-2xl text-sm font-medium text-[#1D1814] placeholder-[#6B5D52]/70 focus:outline-none focus:ring-2 focus:ring-[#9E3A26] focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-mono font-bold text-[#6B5D52] hover:text-[#9E3A26]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#6B5D52] uppercase tracking-wider block">
            Filter by Subject Category:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSubject('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedSubject === 'all'
                  ? 'bg-[#9E3A26] text-[#F9F4EB] shadow-md'
                  : 'bg-[#F9F4EB] text-[#6B5D52] hover:bg-[#EBE2D4] border border-[#E5DAC8]'
              }`}
            >
              All Categories ({SYLLABUS_SUBJECTS.length})
            </button>
            {SYLLABUS_SUBJECTS.map((sub) => (
              <button
                key={sub.slug}
                onClick={() => setSelectedSubject(sub.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-1.5 ${
                  selectedSubject === sub.slug
                    ? 'bg-[#9E3A26] text-[#F9F4EB] shadow-md'
                    : 'bg-[#F9F4EB] text-[#6B5D52] hover:bg-[#EBE2D4] border border-[#E5DAC8]'
                }`}
              >
                <span>{sub.icon}</span>
                <span>{sub.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filtered Subject Cards Grid */}
      {filteredSubjects.length === 0 ? (
        <div className="bg-[#F3EDE2] p-10 rounded-3xl text-center space-y-3 border border-[#E5DAC8]">
          <p className="text-lg font-bold text-[#1D1814]">No syllabus topics found for "{searchQuery}"</p>
          <p className="text-xs text-[#6B5D52]">Try searching for keywords like "Ratio", "Ahom", "Panchayat", "Tenses", or "National Parks".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSubject('all');
            }}
            className="btn-ahom-primary text-xs inline-block mt-2"
          >
            Reset Search & Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.slug}
              className="bg-[#F3EDE2] p-6 rounded-3xl space-y-4 border border-[#E5DAC8] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{subject.icon}</span>
                    <h3 className="text-lg font-bold text-[#1D1814]">{subject.title}</h3>
                  </div>
                </div>

                <span className="inline-block px-3 py-1 text-xs font-mono font-extrabold bg-[#C9A468]/20 text-[#7D5618] rounded-md border border-[#C9A468]/30">
                  {subject.weightage}
                </span>

                <p className="text-xs text-[#6B5D52] leading-relaxed font-medium">
                  {subject.description}
                </p>

                {/* Expandable Sections List with Interactive Checkboxes */}
                <div className="space-y-3 pt-2">
                  {subject.sections.map((sec, sIdx) => {
                    const sectionKey = `${subject.slug}-${sIdx}`;
                    const isExpanded = expandedSections[sectionKey] ?? true;

                    return (
                      <div key={sIdx} className="bg-[#F9F4EB] rounded-2xl p-3 border border-[#E5DAC8] space-y-2">
                        <button
                          onClick={() => toggleSection(sectionKey)}
                          className="w-full flex items-center justify-between text-xs font-bold text-[#1D1814] text-left"
                        >
                          <span className="text-[#9E3A26] font-mono">{sec.title}</span>
                          <span className="text-[#6B5D52] font-mono text-[10px]">
                            {isExpanded ? '▲ Hide' : '▼ Expand'}
                          </span>
                        </button>

                        {isExpanded && (
                          <div className="space-y-2 pt-1 border-t border-[#E5DAC8]/60">
                            {sec.subtopics.map((st, stIdx) => {
                              const topicId = `${subject.slug}-${sIdx}-${stIdx}`;
                              const isChecked = isClient && !!completedTopics[topicId];

                              return (
                                <div
                                  key={stIdx}
                                  onClick={() => toggleTopicCompletion(topicId)}
                                  className={`flex items-start space-x-2.5 p-2 rounded-xl text-xs cursor-pointer transition-colors ${
                                    isChecked
                                      ? 'bg-emerald-700/10 text-emerald-900 border border-emerald-700/30'
                                      : 'hover:bg-[#EBE2D4]/60 text-[#1D1814]'
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => {}} // Handled by parent div onClick
                                    className="mt-0.5 rounded text-[#9E3A26] focus:ring-[#9E3A26]"
                                  />
                                  <div className="flex-1">
                                    <span className={`font-medium ${isChecked ? 'line-through opacity-80' : ''}`}>
                                      {st.name}
                                    </span>
                                  </div>
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

              <div className="pt-4 space-y-2 border-t border-[#E5DAC8]/80 mt-4">
                <Link
                  href={`/adre/syllabus/${subject.slug}/`}
                  className="btn-ahom-primary text-xs w-full text-center block font-bold"
                >
                  View Full {subject.title} Page →
                </Link>

                {subject.pdfUrl && (
                  <a
                    href={subject.pdfUrl}
                    download={subject.pdfFilename || 'Syllabus.pdf'}
                    className="text-xs text-center block font-mono font-bold text-[#6B5D52] hover:text-[#9E3A26] transition-colors py-1"
                  >
                    📥 Download PDF Document
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
