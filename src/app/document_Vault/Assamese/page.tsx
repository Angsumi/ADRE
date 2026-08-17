'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DocumentVaultAssamesePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    { id: 'all', name: 'সকলো নথি', count: 56, icon: '📂' },
    { id: 'id', name: 'ব্যক্তিগত পৰিচয়', count: 8, icon: '🪪' },
    { id: 'edu', name: 'শিক্ষা', count: 18, icon: '🎓' },
    { id: 'cert', name: 'প্ৰমাণপত্ৰ', count: 14, icon: '📜' },
    { id: 'exp', name: 'অভিজ্ঞতা', count: 9, icon: '💼' },
    { id: 'other', name: 'অন্যান্য', count: 7, icon: '📄' },
  ];

  const sampleDocs = [
    { title: 'আধাৰ কাৰ্ড (আগলৈ আৰু পিছলৈ)', category: 'id', size: '200 KB', format: 'PDF / JPG' },
    { title: 'পান কাৰ্ড মূল প্ৰতিলিপি', category: 'id', size: '150 KB', format: 'PDF / PNG' },
    { title: 'HSLC মাৰ্কশ্বীট (১০ম)', category: 'edu', size: '450 KB', format: 'PDF (Single)' },
    { title: 'HSSLC প্ৰমাণপত্ৰ (<ctrl42>শ)', category: 'edu', size: '380 KB', format: 'PDF' },
    { title: 'ডিগ্ৰী স্নাতক মাৰ্কশ্বীট', category: 'edu', size: '620 KB', format: 'Merged PDF' },
    { title: 'এমপ্লয়মেণ্ট এক্সচেঞ্জ কাৰ্ড অসম', category: 'cert', size: '210 KB', format: 'PDF' },
    { title: 'স্থায়ী বাসিন্দাৰ প্ৰমাণপত্ৰ (PRC)', category: 'cert', size: '310 KB', format: 'PDF' },
    { title: 'জাতিগত প্ৰমাণপত্ৰ (OBC/ST/SC/EWS)', category: 'cert', size: '280 KB', format: 'PDF' },
    { title: 'কম্পিউটাৰ ডিপ্লমা ৬-মহীয়া প্রমানপত্ৰ', category: 'cert', size: '340 KB', format: 'PDF' },
  ];

  const filteredDocs = activeCategory === 'all'
    ? sampleDocs
    : sampleDocs.filter(d => d.category === activeCategory);

  const pains = [
    {
      num: '01 / হেৰাই যায়',
      title: '“ক’ত থৈছিলোঁ?”',
      desc: 'নথিখন আপোনাৰ আছে বুলি জানে, কিন্তু প্ৰকৃত File-টো বিচাৰি পোৱাটোৱেই সমস্যা।',
    },
    {
      num: '02 / FORMAT',
      title: '“ইয়াক বেলেগ Size লাগে।”',
      desc: 'নথিখন পালে — কিন্তু Application-এ আন এটা Size, Format বা File Limit বিচাৰে।',
    },
    {
      num: '03 / শেষ মুহূৰ্ত',
      title: '“মোক এতিয়াই লাগে।”',
      desc: 'আপুনি বছৰ বছৰ ধৰি সিঁচৰতি হৈ থকা File বিচাৰি থকাৰ সময়ত Application-এ অপেক্ষা নকৰে।',
    },
  ];

  const features = [
    {
      icon: '▣',
      title: 'সকলো সংগঠিত',
      desc: 'Aadhaar, PAN, Certificate, শিক্ষা, অভিজ্ঞতা আদি — সকলো একে ঠাইত শ্ৰেণীবদ্ধভাৱে।',
    },
    {
      icon: '↓',
      title: 'বিভিন্ন Format আৰু Size',
      desc: 'Form-এ বিচাৰিলেই প্ৰতিবাৰ নতুনকৈ নথি তৈয়াৰ কৰাৰ প্ৰয়োজন নাই — প্ৰয়োজনীয় Version-টো লওক।',
    },
    {
      icon: '▤',
      title: 'PDF একেলগ কৰক',
      desc: 'একাধিক নথি বাছি লৈ Application-ৰ বাবে এটা Single PDF তৈয়াৰ কৰক।',
    },
    {
      icon: '⌕',
      title: 'প্ৰৱেশ anywhere',
      desc: 'প্ৰয়োজনৰ সময়ত Phone, Laptop বা যিকোনো Device-ৰ পৰা আপোনাৰ Personal Link খোলক।',
    },
  ];

  const steps = [
    { no: '01', title: 'নথি পঠিয়াওক', desc: 'আপোনাৰ গুৰুত্বপূৰ্ণ নথিসমূহ আমাৰ সৈতে Share কৰক।' },
    { no: '02', title: 'আমি সংগঠিত কৰোঁ', desc: 'Fileসমূহ সজাই আপোনাৰ ভল্টৰ বাবে প্ৰস্তুত কৰা হয়।' },
    { no: '03', title: 'আমি তৈয়াৰ কৰোঁ', desc: 'আপোনাৰ ব্যক্তিগত নথি Website তৈয়াৰ কৰা হয়।' },
    { no: '04', title: 'আপুনি লাভ কৰে', desc: 'আপোনাৰ Personal Link লাভ কৰক।' },
    { no: '05', title: 'সদায় সাজু থাকক', desc: 'নথি যেতিয়াই লাগে, তেতিয়াই পুনৰ ব্যৱহাৰ কৰক।' },
  ];

  const faqs = [
    {
      q: '₹99-ত মই কি পাম?',
      a: 'আপোনাৰ নথি, শ্ৰেণী আৰু প্ৰয়োজনীয় Download Tool-সহ এটা Personalized Document Vault Website লাভ কৰিব।',
    },
    {
      q: 'ই Monthly Subscription নেকি?',
      a: 'নহয়। বৰ্তমানৰ Offer-টো ₹99-ৰ One-time Setup Payment।',
    },
    {
      q: 'মই Phone-ৰ পৰা Access কৰিব পাৰিমনে?',
      a: 'হয়। Website-টো Mobile আৰু Desktop দুয়োটা Device-ৰ বাবে Responsive।',
    },
    {
      q: 'মই একাধিক নথি এটা PDF-ত একেলগ কৰিব পাৰিমনে?',
      a: 'হয়। নিৰ্বাচিত একাধিক নথিৰ পৰা এটা PDF তৈয়াৰ কৰিবলৈ Combine PDF সুবিধা আছে।',
    },
    {
      q: 'মোৰ নথি কিমান সুৰক্ষিত?',
      a: 'আপোনাৰ ভল্টৰ লিংক কেৱল আপোনাৰ সৈতেহে শ্বেয়াৰ কৰা হয়। নথিসমূহ সুৰক্ষিতভাৱে সংগঠিত কৰি ৰখা হয়।',
    },
  ];

  return (
    <div className="bg-[#F9F4EB] text-[#1D1814] min-h-screen">
      {/* Top Floating Language Switcher Banner */}
      <div className="bg-[#1D1814] text-[#F9F4EB] py-2.5 px-4 sticky top-20 z-40 border-b border-[#332A24] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#E7C792] font-semibold">AxomRank ব্যক্তিগত নথি ভল্ট</span>
            <span className="hidden sm:inline text-[#998877]">| এবাৰতে Setup ₹99</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-[#2B231D] p-1 rounded-lg border border-[#44372F]">
            <Link
              href="/document_Vault/"
              className="px-3 py-1 rounded-md text-xs transition-all font-bold text-[#A8988A] hover:text-white"
            >
              English
            </Link>
            <Link
              href="/document_Vault/Assamese/"
              className="px-3 py-1 rounded-md text-xs transition-all font-bold bg-[#9E3A26] text-white shadow-sm"
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
              <span>AxomRank · ব্যক্তিগত নথি ভল্ট</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1D1814] leading-[1.08]">
              নথি বিচাৰি সময় নষ্ট নকৰিব। <br />
              <span className="text-[#9E3A26] italic">সদায় সাজু থাকক।</span>
            </h1>

            <p className="text-lg text-[#6B5D52] max-w-2xl leading-relaxed font-medium">
              প্ৰতিবাৰ Form পূৰণ কৰোঁতে Aadhaar, PAN, Certificate আৰু আন নথি বিচাৰি হাবাথুৰি খাব নালাগে — আৰু পোৱাৰ পিছত আকৌ Size সলনি কৰিবলগীয়াও নহয়।
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.link/43cgnf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ahom-primary text-sm px-8 py-3.5 shadow-xl flex items-center space-x-2"
              >
                <span>💬 মোৰ ভল্ট বনাওক</span>
              </a>
              <a
                href="#how-it-works"
                className="btn-ahom-outline text-sm px-8 py-3.5 bg-white/60 backdrop-blur-sm"
              >
                কেনেকৈ কাম কৰে চাওক ↓
              </a>
            </div>

            {/* Proof Badges */}
            <div className="pt-6 border-t border-[#E5DAC8] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <strong className="block text-2xl font-black text-[#9E3A26] font-mono">₹99</strong>
                <span className="text-xs text-[#6B5D52] font-mono uppercase">এবাৰতে পেমেণ্ট</span>
              </div>
              <div>
                <strong className="block text-2xl font-black text-[#1D1814] font-mono">১টা Link</strong>
                <span className="text-xs text-[#6B5D52] font-mono uppercase">আপোনাৰ নথি</span>
              </div>
              <div>
                <strong className="block text-2xl font-black text-[#A88244] font-mono">২৪/৭</strong>
                <span className="text-xs text-[#6B5D52] font-mono uppercase">প্ৰয়োজনত সাজু</span>
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
                  <span className="text-[11px] text-[#A8988A] uppercase font-mono tracking-wider">ব্যক্তিগত নথি ভল্ট</span>
                  <h3 className="text-lg font-bold text-white">নমস্কাৰ, Shampoo 👋</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#9E3A26] font-bold font-mono text-sm text-white flex items-center justify-center border-2 border-[#E7C792]">
                  SK
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 py-1 text-center font-mono">
                <div className="bg-[#2B231D] p-2 rounded-xl border border-[#3E322A]">
                  <b className="text-base text-[#E7C792] block">56</b>
                  <span className="text-[9px] text-[#A8988A] uppercase">নথি</span>
                </div>
                <div className="bg-[#2B231D] p-2 rounded-xl border border-[#3E322A]">
                  <b className="text-base text-[#E7C792] block">12</b>
                  <span className="text-[9px] text-[#A8988A] uppercase">শ্ৰেণী</span>
                </div>
                <div className="bg-[#2B231D] p-2 rounded-xl border border-[#3E322A]">
                  <b className="text-base text-[#E7C792] block">8</b>
                  <span className="text-[9px] text-[#A8988A] uppercase">ID Cards</span>
                </div>
                <div className="bg-[#2B231D] p-2 rounded-xl border border-[#3E322A]">
                  <b className="text-base font-sans text-emerald-400 block">২৪/৭</b>
                  <span className="text-[9px] text-[#A8988A] uppercase">প্ৰৱেশ</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#A8988A] font-bold">শ্ৰেণীসমূহ (বাছনি কৰক)</span>
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
                      ডাউনলোড
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center border-t border-[#332A24]">
                <span className="text-[11px] text-[#A8988A] font-mono">
                  ⚡ Interactive Mockup • আপোনাৰ লিংক এনেকুৱা দেখিবলৈ হ’ব
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
              দৈনন্দিন সমস্যা
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              আপোনাৰ নথি are everywhere. Your next form is waiting.
            </h2>
            <p className="text-[#A8988A] text-base leading-relaxed">
              Folder, ফোন Gallery, WhatsApp Chat, Pen Drive — সকলোতে নথি সিঁচৰতি হৈ থাকে। তাৰ পিছত কোনো Form-এ নিৰ্দিষ্ট Size বা Format বিচাৰে।
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
            সমাধান
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1814] tracking-tight">
            এটা ব্যক্তিগত ভল্ট। আপোনাৰ নথিৰ বাবেই নিৰ্মিত।
          </h2>
          <p className="text-[#6B5D52] text-base leading-relaxed font-medium">
            AxomRank-এ আপোনাৰ বাবে এটা সুন্দৰ ব্যক্তিগত Website তৈয়াৰ কৰে, য’ত আপোনাৰ গুৰুত্বপূৰ্ণ নথিসমূহ সংগঠিত আৰু ব্যৱহাৰৰ বাবে সদায় সাজু থাকে।
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
              সহজ ব্যৱস্থা
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1814] tracking-tight">
              সিঁচৰতি File-ৰ পৰা এটা Smart Link লৈ।
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
            এবাৰতে Setup
          </span>

          <div className="text-6xl sm:text-7xl font-black font-mono text-[#E7C792] tracking-tight">
            ₹99
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              আপোনাৰ ব্যক্তিগত নথি ভল্ট।
            </h2>
            <p className="text-sm text-[#A8988A]">
              কোনো Monthly Subscription নাই। Setup-ৰ বাবে এবাৰহে পেমেণ্ট কৰক।
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
              <span>WhatsApp-ত আৰম্ভ কৰক →</span>
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
            সাধাৰণ প্ৰশ্ন
          </span>
          <h2 className="text-3xl font-extrabold text-[#1D1814]">
            আৰম্ভ কৰাৰ আগতে।
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
