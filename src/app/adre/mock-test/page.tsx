'use client';

import { useState } from 'react';
import { SAMPLE_MOCKS, MockExam, Question } from '@/data/mockData';

export default function MockTestPage() {
  const [selectedGrade, setSelectedGrade] = useState<'Grade 3' | 'Grade 4'>('Grade 3');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Moderate' | 'Tough'>('Easy');

  // Filter available mocks according to selected Grade and Difficulty
  const gradeMocks = SAMPLE_MOCKS.filter((m) => m.grade === selectedGrade);
  const activeMock =
    gradeMocks.find((m) => m.difficulty === selectedDifficulty) || gradeMocks[0] || SAMPLE_MOCKS[0];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [mistakeBank, setMistakeBank] = useState<Question[]>([]);

  const q = activeMock.questions[currentQuestion] || activeMock.questions[0];

  const handleSelectOption = (optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers({ ...selectedAnswers, [q.id]: optionIndex });
  };

  const handleSubmitTest = () => {
    setSubmitted(true);
    const mistakes: Question[] = [];
    activeMock.questions.forEach((question) => {
      const selected = selectedAnswers[question.id];
      if (selected !== question.correctAnswer) {
        mistakes.push(question);
      }
    });
    setMistakeBank(mistakes);
  };

  // Calculate score
  let score = 0;
  let correctCount = 0;
  let wrongCount = 0;

  activeMock.questions.forEach((q) => {
    const sel = selectedAnswers[q.id];
    if (sel !== undefined) {
      if (sel === q.correctAnswer) {
        score += 1;
        correctCount += 1;
      } else {
        score -= 0.25;
        wrongCount += 1;
      }
    }
  });

  const axomRankScore = Math.max(0, Math.round(score * 10 + correctCount * 5));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#F9F4EB]">
      {/* Restructured Hierarchical Selector: Grade 3 & Grade 4 -> Easy, Moderate, Tough */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DAC8] pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#9E3A26] uppercase tracking-wider">Exam Category Selection</span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1D1814] mt-1">ADRE Full-Length Mock Exam Series</h2>
          </div>

          {/* Grade 3 / Grade 4 Toggle */}
          <div className="inline-flex bg-[#EBE2D4] p-1 rounded-2xl border border-[#E5DAC8]">
            {(['Grade 3', 'Grade 4'] as const).map((grade) => (
              <button
                key={grade}
                onClick={() => {
                  setSelectedGrade(grade);
                  setCurrentQuestion(0);
                  setSelectedAnswers({});
                  setSubmitted(false);
                }}
                className={`px-6 py-2.5 text-xs font-extrabold rounded-xl transition-all ${
                  selectedGrade === grade
                    ? 'bg-[#9E3A26] text-[#F9F4EB] shadow-md'
                    : 'text-[#6B5D52] hover:text-[#1D1814]'
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Tier Selector (Easy, Moderate, Tough) */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-[#6B5D52] uppercase tracking-wider block">
            Select Difficulty Tier for {selectedGrade}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(['Easy', 'Moderate', 'Tough'] as const).map((diff) => {
              const matches = gradeMocks.filter((m) => m.difficulty === diff);
              const isSelected = selectedDifficulty === diff;

              return (
                <button
                  key={diff}
                  onClick={() => {
                    setSelectedDifficulty(diff);
                    setCurrentQuestion(0);
                    setSelectedAnswers({});
                    setSubmitted(false);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#F3EDE2] border-[#C9A468] ring-2 ring-[#C9A468]/50 shadow-md'
                      : 'bg-[#F3EDE2]/60 border-[#E5DAC8] hover:border-[#C9A468]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md ${
                        diff === 'Easy'
                          ? 'bg-emerald-700/15 text-emerald-800'
                          : diff === 'Moderate'
                          ? 'bg-[#C9A468]/20 text-[#A88244]'
                          : 'bg-[#9E3A26]/15 text-[#9E3A26]'
                      }`}
                    >
                      {diff} Level
                    </span>
                    <span className="text-[11px] text-[#6B5D52] font-mono">{matches.length} Paper(s)</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#1D1814] mt-2">
                    {diff === 'Easy'
                      ? 'Foundation Benchmark'
                      : diff === 'Moderate'
                      ? 'Standard SLRC Level'
                      : 'Advanced Rank Builder'}
                  </h3>
                  <p className="text-[11px] text-[#6B5D52] mt-1">
                    {diff === 'Easy'
                      ? 'High-yield conceptual questions for baseline check.'
                      : diff === 'Moderate'
                      ? 'Replicates expected official SLRC exam difficulty.'
                      : 'Challenging questions to boost competitive rank.'}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Mock Examination Header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DAC8] pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#C9A468]/20 text-[#A88244] uppercase font-mono">
              {activeMock.grade}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#9E3A26]/15 text-[#9E3A26] uppercase font-mono">
              {activeMock.difficulty} Tier
            </span>
            <span className="text-xs text-[#6B5D52] font-mono">{activeMock.questions.length} Questions • {activeMock.timeLimitMinutes} Mins</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D1814] mt-1">{activeMock.title}</h1>
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmitTest}
            className="btn-ahom-primary"
          >
            Submit Test & Get Score
          </button>
        ) : (
          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedAnswers({});
            }}
            className="btn-ahom-outline"
          >
            Re-take Mock Test
          </button>
        )}
      </header>

      {/* Main Interactive Interface */}
      {!submitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Question Card */}
          <div className="lg:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#E5DAC8] pb-4">
              <span className="text-xs font-bold text-[#A88244] bg-[#C9A468]/20 px-3 py-1 rounded-full font-mono">
                Question {currentQuestion + 1} of {activeMock.questions.length}
              </span>
              <span className="text-xs text-[#6B5D52] font-mono">{q.subject} • {q.topic}</span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-[#1D1814] leading-relaxed">{q.question}</h2>

            <div className="space-y-3 pt-2">
              {q.options.map((option, idx) => {
                const isSelected = selectedAnswers[q.id] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all ${
                      isSelected
                        ? 'bg-[#9E3A26]/15 border-[#9E3A26] text-[#1D1814] font-bold'
                        : 'bg-[#F3EDE2] border-[#E5DAC8] text-[#1D1814] hover:border-[#C9A468]'
                    }`}
                  >
                    <span className="inline-block w-6 text-[#9E3A26] font-mono font-bold">{String.fromCharCode(65 + idx)}.</span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E5DAC8]">
              <button
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
                className="px-5 py-2.5 text-xs font-mono font-bold text-[#1D1814] bg-[#EBE2D4] disabled:opacity-40 rounded-xl"
              >
                ← Previous
              </button>
              <button
                disabled={currentQuestion === activeMock.questions.length - 1}
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="btn-ahom-primary text-xs py-2.5 px-6"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Question Palette Sidebar */}
          <div className="glass-panel p-6 rounded-3xl space-y-6">
            <h3 className="text-sm font-bold text-[#1D1814] font-mono uppercase tracking-wider">Question Palette</h3>
            <div className="grid grid-cols-5 gap-2 max-h-[400px] overflow-y-auto pr-1">
              {activeMock.questions.map((item, index) => {
                const isAnswered = selectedAnswers[item.id] !== undefined;
                const isCurrent = index === currentQuestion;

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-9 h-9 rounded-xl text-xs font-mono font-bold transition-all ${
                      isCurrent
                        ? 'ring-2 ring-[#C9A468] bg-[#9E3A26] text-[#F9F4EB]'
                        : isAnswered
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#EBE2D4] text-[#6B5D52] border border-[#E5DAC8]'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Result Scorecard & Analytics */
        <div className="space-y-8">
          <div className="glass-panel p-8 rounded-3xl grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-xs text-[#6B5D52] uppercase font-mono font-bold">Total Score</span>
              <p className="text-3xl font-extrabold text-[#1D1814]">{score.toFixed(2)}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#6B5D52] uppercase font-mono font-bold">AxomRank Score</span>
              <p className="text-3xl font-extrabold text-[#A88244]">{axomRankScore}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#6B5D52] uppercase font-mono font-bold">Accuracy</span>
              <p className="text-3xl font-extrabold text-emerald-700">
                {activeMock.questions.length > 0 ? Math.round((correctCount / activeMock.questions.length) * 100) : 0}%
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#6B5D52] uppercase font-mono font-bold">Correct / Wrong</span>
              <p className="text-3xl font-extrabold text-[#9E3A26]">{correctCount} / {wrongCount}</p>
            </div>
          </div>

          {/* Signature Feature: Mistake Bank Section */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="px-3 py-1 bg-[#9E3A26]/15 text-[#9E3A26] text-xs font-mono font-bold rounded-md uppercase">
                  Signature Feature
                </span>
                <h2 className="text-2xl font-bold text-[#1D1814] mt-1">My Mistake Bank</h2>
              </div>
              <span className="text-xs text-[#6B5D52] font-mono">{mistakeBank.length} Questions Saved</span>
            </div>

            {mistakeBank.length > 0 ? (
              <div className="space-y-4">
                {mistakeBank.map((item, idx) => (
                  <div key={idx} className="bg-[#F3EDE2] p-5 rounded-2xl border border-[#9E3A26]/30 space-y-3">
                    <span className="text-xs font-bold font-mono text-[#9E3A26]">{item.subject} • {item.topic}</span>
                    <h3 className="text-sm font-semibold text-[#1D1814]">{item.question}</h3>
                    <div className="p-4 bg-[#F9F4EB] rounded-xl text-xs text-[#1D1814] border border-[#E5DAC8]">
                      <strong>Correct Answer:</strong> {item.options[item.correctAnswer]}
                      <p className="mt-1 text-[#6B5D52]"><strong>Explanation:</strong> {item.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-emerald-700 font-bold">Congratulations! Perfect score or no mistakes recorded.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

