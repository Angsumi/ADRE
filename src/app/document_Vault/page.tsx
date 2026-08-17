'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DocumentVaultEnglishPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', name: 'All Documents', count: 56, icon: '📂' },
    { id: 'id', name: 'Personal ID', count: 8, icon: '🪪' },
    { id: 'edu', name: 'Education', count: 18, icon: '🎓' },
    { id: 'cert', name: 'Certificates', count: 14, icon: '📜' },
    { id: 'exp', name: 'Experience', count: 9, icon: '💼' },
    { id: 'other', name: 'Others', count: 7, icon: '📄' },
  ];

  const sampleDocs = [
    { title: 'Aadhaar Card (Front & Back)', category: 'id', size: '200 KB', format: 'PDF / JPG' },
    { title: 'PAN Card Original Copy', category: 'id', size: '150 KB', format: 'PDF / PNG' },
    { title: 'HSLC Admit & Marksheet 10th', category: 'edu', size: '450 KB', format: 'PDF (Single)' },
    { title: 'HSSLC Pass Certificate 12th', category: 'edu', size: '380 KB', format: 'PDF' },
    { title: 'Degree Graduation Marksheet', category: 'edu', size: '620 KB', format: 'Merged PDF' },
    { title: 'Employment Exchange Card Assam', category: 'cert', size: '210 KB', format: 'PDF' },
    { title: 'Permanent Resident Certificate (PRC)', category: 'cert', size: '310 KB', format: 'PDF' },
    { title: 'Caste Certificate (OBC/ST/SC/EWS)', category: 'cert', size: '280 KB', format: 'PDF' },
    { title: 'Computer Diploma 6-Month Certificate', category: 'cert', size: '340 KB', format: 'PDF' },
  ];

  const filteredDocs = activeCategory === 'all'
    ? sampleDocs
    : sampleDocs.filter(d => d.category === activeCategory);

  const pains = [
    {
      num: '01 / LOST',
      title: '“Where did I keep it?”',
      desc: 'You remember having the document. Finding the actual file is the problem.',
    },
    {
      num: '02 / FORMAT',
      title: '“It needs a different size.”',
      desc: 'The document is found — but the application demands another size, format or file limit.',
    },
    {
      num: '03 / LAST MINUTE',
      title: '“I need it right now.”',
      desc: 'Applications don’t wait while you search through years of scattered files.',
    },
  ];

  const features = [
    {
      icon: '▣',
      title: 'Everything organized',
      desc: 'Aadhaar, PAN, certificates, education, experience and more — categorized in one place.',
    },
    {
      icon: '↓',
      title: 'Multiple formats & sizes',
      desc: 'Get the version you need instead of rebuilding a document every time a form asks.',
    },
    {
      icon: '▤',
      title: 'Combine PDFs',
      desc: 'Select multiple documents and create a single PDF when an application needs one file.',
    },
    {
      icon: '⌕',
      title: 'Access anywhere',
      desc: 'Open your personal link from your phone, laptop or any device whenever you need it.',
    },
  ];

  const steps = [
    { no: '01', title: 'Send documents', desc: 'Share your important documents securely with us.' },
    { no: '02', title: 'We organize', desc: 'Files are categorized, renamed, and formatted for your vault.' },
    { no: '03', title: 'We build', desc: 'Your personal document website is created and hosted.' },
    { no: '04', title: 'You receive', desc: 'Get your personal secure link accessible 24/7.' },
    { no: '05', title: 'Stay ready', desc: 'Return whenever a form or application demands a document.' },
  ];

  const faqs = [
    {
      q: 'What do I get for ₹99?',
      a: 'You get a personalized document-vault website set up with your documents, categories, multi-size versions, and useful download tools.',
    },
    {
      q: 'Is it a monthly subscription?',
      a: 'No. The current offer is a one-time ₹99 setup payment. No hidden recurring charges.',
    },
    {
      q: 'Can I access it from my phone?',
      a: 'Yes. The document vault website is ultra-fast, mobile-optimized, and accessible from any smartphone, tablet, or PC.',
    },
    {
      q: 'Can I combine multiple documents into one PDF?',
      a: 'Yes. The vault includes a Combine PDF workflow so you can merge your marksheets or certificates into a single PDF when required by an application.',
    },
    {
      q: 'How secure are my documents?',
      a: 'Your personal vault link is shared only with you. Your files are organized privately and stored securely.',
    },
  ];

  return (
    <div className="bg-[#F9F4EB] text-[#1D1814] min-h-screen">
      {/* Top Floating Language Switcher Banner */}
      <div className="bg-[#1D1814] text-[#F9F4EB] py-2.5 px-4 sticky top-20 z-40 border-b border-[#332A24] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#E7C792] font-semibold">AxomRank Document Vault</span>
            <span className="hidden sm:inline text-[#998877]">| One-time Setup ₹99</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-[#2B231D] p-1 rounded-lg border border-[#44372F]">
            <Link
              href="/document_Vault/"
              className="px-3 py-1 rounded-md text-xs transition-all font-bold bg-[#9E3A26] text-white shadow-sm"
            >
              English
            </Link>
            <Link
              href="/document_Vault/Assamese/"
              className="px-3 py-1 rounded-md text-xs transition-all font-bold text-[#A8988A] hover:text-white"
            >
              অসমীয়া
            </Link>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#9E3A26]/10 border border-[#9E3A26]/20 text-[#9E3A26] font-mono text-xs font-bold uppercase tracking-wider">
              <span>AxomRank · Personal Document Vault</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1D1814] leading-[1.08]">
              Stop searching. <br />
              <span className="text-[#9E3A26] italic">Start staying ready.</span>
            </h1>

            <p className="text-lg text-[#6B5D52] max-w-2xl leading-relaxed font-medium">
              Every time you fill out a form, you shouldn’t have to hunt for your Aadhaar, PAN, certificates and other documents — and then resize them again.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.link/43cgnf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ahom-primary text-sm px-8 py-3.5 shadow-xl flex items-center space-x-2"
              >
                <span>💬 Create My Vault</span>
              </a>
              <a
                href="#how-it-works"
                className="btn-ahom-outline text-sm px-8 py-3.5 bg-white/60 backdrop-blur-sm"
              >
                See how it works ↓
              </a>
            </div>

            {/* Proof Badges */}
            <div className="pt-6 border-t border-[#E5DAC8] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <strong className="block text-2xl font-black text-[#9E3A26] font-mono">₹99</strong>
                <span className="text-xs text-[#6B5D52] font-mono uppercase">One-time payment</span>
              </div>
              <div>
                <strong className="block text-2xl font-black text-[#1D1814] font-mono">1 Link</strong>
                <span className="text-xs text-[#6B5D52] font-mono uppercase">Your documents</span>
              </div>
              <div>
                <strong className="block text-2xl font-black text-[#A88244] font-mono">24/7</strong>
                <span className="text-xs text-[#6B5D52] font-mono uppercase">Ready when needed</span>
              </div>
            </div>
          </div>

          {/* Right Live Vault Simulator Preview */}
          <div className="lg:col-span-5">
            <div className="bg-[#1D1814] text-white p-5 rounded-3xl shadow-2xl border border-[#332A24] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#332A24]">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="font-mono text-[11px] text-[#A8988A] ml-2">axomrank.com/vault/user</span>
                </div>
                <span className="bg-[#9E3A26] text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase">LIVE VAULT</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-[11px] text-[#A8988A] uppercase font-mono tracking-wider">PERSONAL DOCUMENT VAULT</span>
                  <h3 className="text-lg font-bold text-white">Hello, Shampoo 👋</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#9E3A26] font-bold font-mono text-sm text-white flex items-center justify-center border-2 border-[#E7C792]">
                  SK
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 py-1 text-center font-mono">
                <div className="bg-[#2B231D] p-2 rounded-xl border border-[#3E322A]">
                  <b className="text-base text-[#E7C792] block">56</b>
                  <span className="text-[9px] text-[#A8988A] uppercase">Documents</span>
                </div>
                <div className="bg-[#2B231D] p-2 rounded-xl border border-[#3E322A]">
                  <b className="text-base text-[#E7C792] block">12</b>
                  <span className="text-[9px] text-[#A8988A] uppercase">Categories</span>
                </div>
                <div className="bg-[#2B231D] p-2 rounded-xl border border-[#3E322A]">
                  <b className="text-base text-[#E7C792] block">8</b>
                  <span className="text-[9px] text-[#A8988A] uppercase">ID Cards</span>
                </div>
                <div className="bg-[#2B231D] p-2 rounded-xl border border-[#3E322A]">
                  <b className="text-base font-sans text-emerald-400 block">24/7</b>
                  <span className="text-[9px] text-[#A8988A] uppercase">Access</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#A8988A] font-bold">Categories (Click to Filter)</span>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCategory(c.id)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${
                        activeCategory === c.id
                          ? 'bg-[#9E3A26] text-white font-bold'
                          : 'bg-[#2B231D] text-[#C4B4A5] hover:bg-[#382D25]'
                      }`}
                    >
                      {c.icon} {c.name} ({c.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-1 max-h-48 overflow-y-auto pr-1">
                {filteredDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2B231D] hover:bg-[#342B24] p-2.5 rounded-xl border border-[#3E322A] flex items-center justify-between text-xs transition-colors"
                  >
                    <div className="flex items-center space-x-2.5 min-w-0">
                      <span className="text-base">📄</span>
                      <div className="truncate">
                        <span className="font-semibold text-white block truncate">
                          {doc.title}
                        </span>
                        <span className="text-[10px] text-[#A8988A] font-mono">
                          {doc.size} • {doc.format}
                        </span>
                      </div>
                    </div>
                    <span className="bg-[#9E3A26]/20 text-[#E7C792] border border-[#9E3A26]/40 text-[10px] font-mono px-2 py-0.5 rounded font-bold shrink-0">
                      Download
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center border-t border-[#332A24]">
                <span className="text-[11px] text-[#A8988A] font-mono">
                  ⚡ Interactive Mockup • Your link will look like this
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="bg-[#1D1814] text-[#F9F4EB] py-20 border-y border-[#332A24]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#9E3A26]">
              The everyday problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Your documents are everywhere. Your next form is waiting.
            </h2>
            <p className="text-[#A8988A] text-base leading-relaxed">
              Scattered folders, old phone galleries, WhatsApp chats, pen drives — and then a form asks for a specific size or format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map((pain, idx) => (
              <div
                key={idx}
                className="bg-[#261F1A] border border-[#3A2F28] p-8 rounded-2xl space-y-4 hover:border-[#9E3A26] transition-colors"
              >
                <div className="font-mono text-xs font-bold text-[#E7C792] tracking-wider">
                  {pain.num}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {pain.title}
                </h3>
                <p className="text-sm text-[#A8988A] leading-relaxed">
                  {pain.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: THE SOLUTION / FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#9E3A26]">
            The solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1814] tracking-tight">
            One personal vault. Built around your documents.
          </h2>
          <p className="text-[#6B5D52] text-base leading-relaxed font-medium">
            AxomRank creates a beautiful personal website where your important documents stay organized and ready to use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#F3EDE2] border border-[#E5DAC8] hover:border-[#9E3A26] p-7 rounded-2xl space-y-4 transition-all shadow-sm group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#9E3A26]/10 text-[#9E3A26] font-mono text-2xl font-bold flex items-center justify-center group-hover:bg-[#9E3A26] group-hover:text-white transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1D1814]">
                {feat.title}
              </h3>
              <p className="text-xs text-[#6B5D52] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS (STEP WORKFLOW) */}
      <section id="how-it-works" className="bg-[#F3EDE2] border-y border-[#E5DAC8] py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#9E3A26]">
              Simple setup
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1814] tracking-tight">
              From scattered files to one smart link.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F9F4EB] border border-[#E5DAC8] p-6 rounded-2xl space-y-3 relative flex flex-col justify-between"
              >
                <div className="font-mono text-xl font-black text-[#9E3A26]">
                  {step.no}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#1D1814]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B5D52] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: PRICING BOX & WHATSAPP CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1D1814] to-[#2E241E] text-white border border-[#3E322A] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-[#9E3A26]/30 rounded-full blur-2xl pointer-events-none" />

          <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E7C792] bg-[#3E322A] px-4 py-1.5 rounded-full border border-[#524338]">
            One-time setup
          </span>

          <div className="text-6xl sm:text-7xl font-black font-mono text-[#E7C792] tracking-tight">
            ₹99
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Your personal document vault.
            </h2>
            <p className="text-sm text-[#A8988A]">
              No monthly subscription. Pay once for the setup.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="https://wa.link/43cgnf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-1"
            >
              <span>💬</span>
              <span>Start on WhatsApp →</span>
            </a>
          </div>

          <p className="text-[11px] font-mono text-[#A8988A] pt-2">
            Direct WhatsApp Support • +91 7896505109
          </p>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-8">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#9E3A26]">
            Questions
          </span>
          <h2 className="text-3xl font-extrabold text-[#1D1814]">
            Before you get started.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#F3EDE2] border border-[#E5DAC8] rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-bold text-[#1D1814] flex items-center justify-between text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className="font-mono text-lg text-[#9E3A26]">
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-[#6B5D52] leading-relaxed border-t border-[#E5DAC8]/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
