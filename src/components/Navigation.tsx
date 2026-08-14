'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const toolsList = [
    {
      name: 'Score & Rank Calculator',
      description: 'Calculate net score considering -0.25 negative marks & state rank.',
      href: '/tools/score-calculator/',
      icon: '🧮',
    },
    {
      name: 'Eligibility & Post Checker',
      description: 'Check post eligibility across all 5 official ADRE examination papers.',
      href: '/tools/eligibility-checker/',
      icon: '✅',
    },
    {
      name: 'Study Planner & Timeline',
      description: 'Generate customized daily preparation schedules.',
      href: '/tools/study-planner/',
      icon: '📅',
    },
    {
      name: 'Interactive PYQ Vault',
      description: 'Solve 1,226+ official PYQs or download 10 official PDF booklets.',
      href: '/adre/previous-year-question-paper/',
      icon: '📥',
    },
    {
      name: 'All Tools Directory',
      description: 'Explore the complete master directory of all free exam utilities.',
      href: '/tools/',
      icon: '🛠️',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#D8CEBE] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-transparent flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
            <img src="/ADRE/logo-2.png" alt="AxomRank Brand Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-mono text-sm tracking-[0.2em] font-bold text-[#211915] uppercase">AXOMRANK</span>
            <span className="block text-[9px] font-mono text-[#9E3A26] tracking-widest uppercase font-bold">Assam Exam Intelligence</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-mono text-xs uppercase tracking-[0.15em] text-[#6B5A4D]">
          <Link href="/adre/" className="hover:text-[#9E3A26] transition-colors">ADRE Hub</Link>
          <Link href="/adre/previous-year-question-paper/" className="hover:text-[#9E3A26] transition-colors">PYQ Vault</Link>
          <Link href="/adre/mock-test/" className="hover:text-[#9E3A26] transition-colors">Mock Tests</Link>
          <Link href="/assam-gk/" className="hover:text-[#9E3A26] transition-colors">Assam GK</Link>

          {/* Tools Dropdown (Hover & Touch Support) */}
          <div
            className="relative"
            onMouseEnter={() => setIsToolsOpen(true)}
            onMouseLeave={() => setIsToolsOpen(false)}
          >
            <button
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              className="flex items-center space-x-1 hover:text-[#9E3A26] transition-colors py-2 focus:outline-none"
            >
              <span>Tools</span>
              <span className="text-[10px]">▼</span>
            </button>

            {/* Dropdown Menu Overlay */}
            {isToolsOpen && (
              <div className="absolute top-full right-0 sm:left-0 w-80 bg-[#F9F4EB] border border-[#E5DAC8] rounded-2xl shadow-xl p-3 space-y-2 z-50 normal-case font-sans">
                <div className="px-3 py-1.5 border-b border-[#E5DAC8] flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#9E3A26]">Free Exam Utilities</span>
                  <Link
                    href="/tools/"
                    onClick={() => setIsToolsOpen(false)}
                    className="font-mono text-[10px] uppercase text-[#A88244] hover:underline font-bold"
                  >
                    View All →
                  </Link>
                </div>

                <div className="space-y-1">
                  {toolsList.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsToolsOpen(false)}
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-[#F3EDE2] transition-colors group"
                    >
                      <span className="text-lg">{tool.icon}</span>
                      <div>
                        <h4 className="text-xs font-bold text-[#1D1814] group-hover:text-[#9E3A26] transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-[11px] text-[#6B5D52] line-clamp-1 leading-snug">
                          {tool.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Top Right CTA */}
        <div>
          <Link
            href="/adre/mock-test/"
            className="font-mono text-xs uppercase tracking-[0.15em] text-[#9E3A26] border-b border-[#9E3A26] pb-0.5 hover:opacity-75 transition-opacity font-bold"
          >
            START FREE MOCK
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#F4EFE6] border-t border-[#D8CEBE] text-[#6B5A4D] font-mono text-xs py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <span className="text-sm font-bold text-[#211915] tracking-[0.2em]">AXOMRANK</span>
          <p className="text-xs text-[#6B5A4D] leading-relaxed font-sans">
            Assam-first digital competitive-exam preparation platform. Powered by Assam exam intelligence, topic analytics, and official SLRC ADRE PYQ datasets.
          </p>
        </div>

        <div>
          <h4 className="text-[#211915] font-bold uppercase tracking-wider mb-4">ADRE CLUSTERS</h4>
          <ul className="space-y-2.5">
            <li><Link href="/adre/" className="hover:text-[#9E3A26]">Overview</Link></li>
            <li><Link href="/adre/syllabus/" className="hover:text-[#9E3A26]">Syllabus</Link></li>
            <li><Link href="/adre/grade-3/" className="hover:text-[#9E3A26]">Grade 3 Hub</Link></li>
            <li><Link href="/adre/grade-4/" className="hover:text-[#9E3A26]">Grade 4 Hub</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#211915] font-bold uppercase tracking-wider mb-4">TOOLS & TESTS</h4>
          <ul className="space-y-2.5">
            <li><Link href="/tools/" className="hover:text-[#9E3A26]">All Tools Directory</Link></li>
            <li><Link href="/tools/score-calculator/" className="hover:text-[#9E3A26]">Score Calculator</Link></li>
            <li><Link href="/tools/eligibility-checker/" className="hover:text-[#9E3A26]">Eligibility Checker</Link></li>
            <li><Link href="/tools/study-planner/" className="hover:text-[#9E3A26]">Study Planner</Link></li>
            <li><Link href="/adre/mock-test/" className="hover:text-[#9E3A26]">Mock Test Series</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#211915] font-bold uppercase tracking-wider mb-4">KNOWLEDGE</h4>
          <ul className="space-y-2.5">
            <li><Link href="/assam-gk/" className="hover:text-[#9E3A26]">Assam GK Hub</Link></li>
            <li><Link href="/assam-gk/history/" className="hover:text-[#9E3A26]">Assam History</Link></li>
            <li><Link href="/current-affairs/" className="hover:text-[#9E3A26]">Current Affairs</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#D8CEBE] flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[#8C7B6D]">
        <p>© {new Date().getFullYear()} AXOMRANK — ALL RIGHTS RESERVED.</p>
        <p className="mt-2 sm:mt-0">MADE FOR ASSAM COMPETITIVE EXAMS</p>
      </div>
    </footer>
  );
}
