'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SAMPLE_MOCKS, Question } from '@/data/mockData';

export default function MockTestPage() {
  const mock = SAMPLE_MOCKS[0]; // Grade 3 Mock
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [mistakeBank, setMistakeBank] = useState<Question[]>([]);

  const q = mock.questions[currentQuestion];

  const handleSelectOption = (optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers({ ...selectedAnswers, [q.id]: optionIndex });
  };

  const handleSubmitTest = () => {
    setSubmitted(true);
    const mistakes: Question[] = [];
    mock.questions.forEach((question) => {
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

  mock.questions.forEach((q) => {
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

  const axomRankScore = Math.max(0, Math.round(score * 120 + correctCount * 15));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-axom-border pb-6">
        <div>
          <span className="text-xs font-semibold text-axom-red uppercase tracking-wider">Exam Simulator Engine</span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">{mock.title}</h1>
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
                Question {currentQuestion + 1} of {mock.questions.length}
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
                disabled={currentQuestion === mock.questions.length - 1}
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
            <div className="grid grid-cols-5 gap-2">
              {mock.questions.map((item, index) => {
                const isAnswered = selectedAnswers[item.id] !== undefined;
                const isCurrent = index === currentQuestion;

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-10 h-10 rounded-lg text-xs font-bold transition-all ${
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
              <span className="text-xs text-slate-400 uppercase font-semibold">AxomRank Intelligence Score</span>
              <p className="text-3xl font-extrabold text-axom-gold">{axomRankScore}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase font-semibold">Accuracy</span>
              <p className="text-3xl font-extrabold text-emerald-400">
                {mock.questions.length > 0 ? Math.round((correctCount / mock.questions.length) * 100) : 0}%
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase font-semibold">Correct / Wrong</span>
              <p className="text-3xl font-extrabold text-sky-400">{correctCount} / {wrongCount}</p>
            </div>
          </div>

          {/* Killer Feature: Mistake Bank Section */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="px-3 py-1 bg-axom-red/20 text-axom-red text-xs font-bold rounded-md uppercase">
                  Killer Feature
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
              <p className="text-sm text-emerald-400">Congratulations! No mistakes recorded in this attempt.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
