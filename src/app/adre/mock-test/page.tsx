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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Restructured Hierarchical Selector: Grade 3 & Grade 4 -> Easy, Moderate, Tough */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-axom-border/60 pb-6">
          <div>
            <span className="text-xs font-semibold text-axom-red uppercase tracking-wider">Exam Category Selection</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">ADRE Full-Length Mock Exam Series</h2>
          </div>

          {/* Grade 3 / Grade 4 Toggle */}
          <div className="inline-flex bg-axom-navy/90 p-1 rounded-2xl border border-axom-border">
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
                    ? 'bg-axom-red text-white shadow-lg shadow-axom-red/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Tier Selector (Easy, Moderate, Tough) */}
        <div className="space-y-3">
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
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
                      ? 'bg-axom-navy/90 border-axom-gold shadow-lg shadow-axom-gold/10 ring-1 ring-axom-gold'
                      : 'bg-axom-navy/50 border-axom-border/70 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-md ${
                        diff === 'Easy'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : diff === 'Moderate'
                          ? 'bg-axom-gold/20 text-axom-gold'
                          : 'bg-axom-red/20 text-axom-red'
                      }`}
                    >
                      {diff} Level
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">{matches.length} Paper(s)</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mt-2">
                    {diff === 'Easy'
                      ? 'Foundation Benchmark'
                      : diff === 'Moderate'
                      ? 'Standard SLRC Level'
                      : 'Advanced Rank Builder'}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1">
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
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-axom-border pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-axom-gold/20 text-axom-gold uppercase">
              {activeMock.grade}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-axom-red/20 text-axom-red uppercase">
              {activeMock.difficulty} Tier
            </span>
            <span className="text-xs text-slate-400">{activeMock.questions.length} Questions • {activeMock.timeLimitMinutes} Mins</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">{activeMock.title}</h1>
        </div>

        {!submitted ? (
          <button
            onClick={handleSubmitTest}
            className="px-6 py-2.5 bg-axom-red hover:bg-axom-redDark text-white font-semibold text-sm rounded-xl shadow-lg transition-all"
          >
            Submit Test & Get Score
          </button>
        ) : (
          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedAnswers({});
            }}
            className="px-6 py-2.5 bg-axom-card border border-axom-border text-white font-semibold text-sm rounded-xl transition-all"
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
            <div className="flex items-center justify-between border-b border-axom-border pb-4">
              <span className="text-xs font-semibold text-axom-gold bg-axom-gold/10 px-3 py-1 rounded-full">
                Question {currentQuestion + 1} of {activeMock.questions.length}
              </span>
              <span className="text-xs text-slate-400 font-mono">{q.subject} • {q.topic}</span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">{q.question}</h2>

            <div className="space-y-3 pt-2">
              {q.options.map((option, idx) => {
                const isSelected = selectedAnswers[q.id] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all ${
                      isSelected
                        ? 'bg-axom-red/20 border-axom-red text-white'
                        : 'bg-axom-navy/60 border-axom-border text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <span className="inline-block w-6 text-slate-400">{String.fromCharCode(65 + idx)}.</span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-axom-border">
              <button
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 bg-axom-card disabled:opacity-40 rounded-lg"
              >
                ← Previous
              </button>
              <button
                disabled={currentQuestion === activeMock.questions.length - 1}
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="px-4 py-2 text-xs font-semibold text-white bg-axom-red hover:bg-axom-redDark disabled:opacity-40 rounded-lg"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Question Palette Sidebar */}
          <div className="glass-panel p-6 rounded-3xl space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Question Palette</h3>
            <div className="grid grid-cols-5 gap-2 max-h-[400px] overflow-y-auto pr-1">
              {activeMock.questions.map((item, index) => {
                const isAnswered = selectedAnswers[item.id] !== undefined;
                const isCurrent = index === currentQuestion;

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                      isCurrent
                        ? 'ring-2 ring-axom-gold bg-axom-red text-white'
                        : isAnswered
                        ? 'bg-emerald-600 text-white'
                        : 'bg-axom-navy text-slate-400 border border-axom-border'
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
              <span className="text-xs text-slate-400 uppercase font-semibold">Total Score</span>
              <p className="text-3xl font-extrabold text-white">{score.toFixed(2)}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase font-semibold">AxomRank Score</span>
              <p className="text-3xl font-extrabold text-axom-gold">{axomRankScore}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase font-semibold">Accuracy</span>
              <p className="text-3xl font-extrabold text-emerald-400">
                {activeMock.questions.length > 0 ? Math.round((correctCount / activeMock.questions.length) * 100) : 0}%
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase font-semibold">Correct / Wrong</span>
              <p className="text-3xl font-extrabold text-sky-400">{correctCount} / {wrongCount}</p>
            </div>
          </div>

          {/* Signature Feature: Mistake Bank Section */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="px-3 py-1 bg-axom-red/20 text-axom-red text-xs font-bold rounded-md uppercase">
                  Signature Feature
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">My Mistake Bank</h2>
              </div>
              <span className="text-xs text-slate-400">{mistakeBank.length} Questions Saved</span>
            </div>

            {mistakeBank.length > 0 ? (
              <div className="space-y-4">
                {mistakeBank.map((item, idx) => (
                  <div key={idx} className="bg-axom-navy p-5 rounded-2xl border border-axom-red/30 space-y-3">
                    <span className="text-xs font-bold text-axom-red">{item.subject} • {item.topic}</span>
                    <h3 className="text-sm font-semibold text-white">{item.question}</h3>
                    <div className="p-3 bg-axom-card rounded-xl text-xs text-slate-300">
                      <strong>Correct Answer:</strong> {item.options[item.correctAnswer]}
                      <p className="mt-1 text-slate-400"><strong>Explanation:</strong> {item.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-emerald-400">Congratulations! Perfect score or no mistakes recorded.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
