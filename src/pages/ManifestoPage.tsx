import React, { useState, useRef } from 'react';
import { PageId } from '../types';
import { BrandLogo } from '../components/BrandLogo';
import { 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Scale, 
  Heart, 
  Shield, 
  Sparkles, 
  Globe2, 
  AlertTriangle, 
  TrendingDown, 
  Vote, 
  UserX, 
  Briefcase, 
  GraduationCap, 
  Flame,
  FileText
} from 'lucide-react';

interface ManifestoPageProps {
  onNavigate: (page: PageId) => void;
}

export const ManifestoPage: React.FC<ManifestoPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [downloadingImg, setDownloadingImg] = useState(false);
  const printableRef = useRef<HTMLDivElement>(null);

  const manifestoPlainText = `ANYONE BUT APC - OFFICIAL CIVIC MANIFESTO
A FREE, FAIR AND PROSPEROUS NIGERIA

We are Nigerians at home and abroad who believe that Nigeria can and must be better. We reject the mismanagement, impunity and democratic backsliding under the current APC leadership.

We are not aligned to any individual or political party. Our focus is a free and fair election, a return to democratic principles and a Nigeria where people can live with dignity, security and opportunity.

---
OUR 6 CORE PRINCIPLES:
1. DEMOCRACY NOT PERSONAL RULE
2. ACCOUNTABILITY NOT IMPUNITY
3. PEOPLE'S WELFARE NOT EMPTY PROMISES
4. SECURITY NOT FEAR
5. OPPORTUNITY FOR EVERY NIGERIAN
6. A UNITED NIGERIA AT HOME AND ABROAD

---
THE PROBLEM - NIGERIANS DESERVE BETTER:
- DEEPENING POVERTY: Over 60% of Nigerians live below the poverty line, with a severe cost of living crisis and little effective response.
- DEMOCRATIC BACKSLIDING: Growing attempts to silence opposition, obstruct free and fair elections and marginalise dissent.
- HUMAN RIGHTS ABUSES: Peaceful protesters are harassed, arrested and detained. Many Nigerians do not feel safe to speak out.
- LEADERSHIP WITHOUT ACCOUNTABILITY: The President spends long periods outside the country without handing over power, while serious questions about past conduct remain unanswered, including links to a heroin trafficking case.
- PICK AND CHOOSE GOVERNANCE: Laws and institutions are applied selectively to serve political interests, not the Nigerian people.

---
OUR PLAN - PRACTICAL ACTION FOR REAL CHANGE:
1. ACTIVATE: Mobilise Nigerians at home and abroad to raise awareness, share information and engage with key institutions.
2. ENGAGE: Work with opposition parties and civil society to build international support for a free and fair election.
3. INFORM: Provide clear, accurate information about Nigeria's democratic rights, the constitution and how citizens can hold leaders to account.
4. AMPLIFY: Help the diaspora contact MPs, media and international bodies to highlight concerns and the global impact of Nigeria's crisis (including migration, security and organised crime).
5. PREPARE: Build a strong, informed and united movement so that when the time is right, we can support peaceful, lawful public action in key cities around the world.

---
WHAT WE ARE AND ARE NOT DOING:
WE ARE:
- Nigerians and friends of Nigeria who want a better future
- Raising awareness and sharing facts
- Engaging international partners, media and policymakers
- Supporting diaspora to contact their MPs and local media
- Promoting peaceful, lawful and democratic action
- Educating about democracy, rights and the constitution
- Working with all opposition parties to support a free and fair election

WE ARE NOT:
- Calling for or organising protests in Nigeria
- Making any violent threats or demands
- Endorsing any political party or individual
- Promoting hate, ethnic or religious division
- Sharing unverified information
- Collecting sensitive personal data without consent

---
OUR VISION - A NIGERIA WHERE EVERYONE CAN THRIVE:
- BASIC NEEDS FOR ALL: Food, safe housing, clean water and healthcare.
- QUALITY EDUCATION: Opportunities for every child to reach their potential.
- MEANINGFUL WORK: Jobs, innovation and a thriving economy.
- SAFETY AND JUSTICE: Rule of law, accountable institutions and protection from violence.
- A UNITED, INCLUSIVE NIGERIA: Where all Nigerians, at home and abroad, can contribute and be proud.

"A fair Nigeria is not a dream. It is a choice."
Website: https://anyonebutapc.org
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(manifestoPlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([manifestoPlainText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'anyone-but-apc-manifesto.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadImage = () => {
    setDownloadingImg(true);
    try {
      // Create high-res canvas poster
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 1800;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Dark Theme Background
      ctx.fillStyle = '#080808';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Red Top Header Accent
      ctx.fillStyle = '#E30613';
      ctx.fillRect(0, 0, canvas.width, 24);

      // Header Area
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 54px Arial, sans-serif';
      ctx.fillText('ANYONE BUT APC', 60, 110);

      ctx.fillStyle = '#E30613';
      ctx.font = 'bold 24px Arial, sans-serif';
      ctx.fillText('OFFICIAL CIVIC MANIFESTO • A FREE, FAIR AND PROSPEROUS NIGERIA', 60, 150);

      // Divider Line
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(60, 180);
      ctx.lineTo(1140, 180);
      ctx.stroke();

      // Section 1: Intro
      ctx.fillStyle = '#F4F4F4';
      ctx.font = '22px Arial, sans-serif';
      ctx.fillText('We are Nigerians at home and abroad who believe that Nigeria can and must be better.', 60, 230);
      ctx.fillText('We reject the mismanagement, impunity and democratic backsliding under current APC leadership.', 60, 265);
      ctx.fillText('Our focus: a free and fair election, democratic principles, dignity, security and opportunity.', 60, 300);

      // Section 2: Six Core Principles
      ctx.fillStyle = '#E30613';
      ctx.font = 'bold 30px Arial, sans-serif';
      ctx.fillText('OUR 6 CORE PRINCIPLES', 60, 370);

      const principles = [
        '1. DEMOCRACY NOT PERSONAL RULE',
        '2. ACCOUNTABILITY NOT IMPUNITY',
        '3. PEOPLE\'S WELFARE NOT EMPTY PROMISES',
        '4. SECURITY NOT FEAR',
        '5. OPPORTUNITY FOR EVERY NIGERIAN',
        '6. A UNITED NIGERIA AT HOME AND ABROAD'
      ];
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 20px Arial, sans-serif';
      principles.forEach((p, idx) => {
        const x = idx < 3 ? 60 : 620;
        const y = 420 + (idx % 3) * 50;
        ctx.fillText(p, x, y);
      });

      // Section 3: The Problem
      ctx.fillStyle = '#E30613';
      ctx.font = 'bold 30px Arial, sans-serif';
      ctx.fillText('THE PROBLEM: NIGERIANS DESERVE BETTER', 60, 600);

      const problems = [
        '• DEEPENING POVERTY: Over 60% of Nigerians live below the poverty line.',
        '• DEMOCRATIC BACKSLIDING: Growing attempts to silence opposition & free speech.',
        '• HUMAN RIGHTS ABUSES: Harassment and detention of peaceful civic protesters.',
        '• LEADERSHIP WITHOUT ACCOUNTABILITY: Prolonged absences without handing over power.',
        '• PICK AND CHOOSE GOVERNANCE: Institutions applied selectively for political interests.'
      ];
      ctx.fillStyle = '#E0E0E0';
      ctx.font = '20px Arial, sans-serif';
      problems.forEach((prob, idx) => {
        ctx.fillText(prob, 60, 650 + idx * 45);
      });

      // Section 4: What We Are and Are Not Doing
      ctx.fillStyle = '#E30613';
      ctx.font = 'bold 30px Arial, sans-serif';
      ctx.fillText('WHAT WE ARE AND ARE NOT DOING', 60, 920);

      ctx.fillStyle = '#4ADE80';
      ctx.font = 'bold 22px Arial, sans-serif';
      ctx.fillText('WE ARE:', 60, 965);
      const weAre = [
        '✔ Raising awareness and sharing factual civic resources',
        '✔ Supporting diaspora to engage international bodies and local media',
        '✔ Promoting strictly peaceful, lawful, and constitutional action',
        '✔ Educating citizens about democracy and election integrity'
      ];
      ctx.fillStyle = '#F4F4F4';
      ctx.font = '18px Arial, sans-serif';
      weAre.forEach((item, idx) => {
        ctx.fillText(item, 60, 1005 + idx * 36);
      });

      ctx.fillStyle = '#F87171';
      ctx.font = 'bold 22px Arial, sans-serif';
      ctx.fillText('WE ARE NOT:', 620, 965);
      const weAreNot = [
        '✖ Calling for or organising street protests in Nigeria',
        '✖ Making any violent threats or hateful demands',
        '✖ Endorsing any political party or individual candidate',
        '✖ Collecting money or sharing unverified rumors'
      ];
      ctx.fillStyle = '#F4F4F4';
      ctx.font = '18px Arial, sans-serif';
      weAreNot.forEach((item, idx) => {
        ctx.fillText(item, 620, 1005 + idx * 36);
      });

      // Section 5: Our Plan
      ctx.fillStyle = '#E30613';
      ctx.font = 'bold 30px Arial, sans-serif';
      ctx.fillText('OUR 5-STEP ACTION PLAN', 60, 1200);

      const plan = [
        '1. ACTIVATE: Mobilise Nigerians at home and abroad to raise awareness.',
        '2. ENGAGE: Work with civil society to build support for free & fair elections.',
        '3. INFORM: Provide clear, verifiable constitutional and democratic education.',
        '4. AMPLIFY: Connect diaspora with MPs, media, and international observers.',
        '5. PREPARE: Build a peaceful, informed movement for lawful public solidarity.'
      ];
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '19px Arial, sans-serif';
      plan.forEach((step, idx) => {
        ctx.fillText(step, 60, 1245 + idx * 40);
      });

      // Bottom Banner & Closing
      ctx.fillStyle = '#1A1A1A';
      ctx.fillRect(60, 1500, 1080, 200);

      ctx.fillStyle = '#E30613';
      ctx.font = 'bold 28px Arial, sans-serif';
      ctx.fillText('A fair Nigeria is not a dream. It is a choice.', 90, 1560);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '22px Arial, sans-serif';
      ctx.fillText('Download, share, and verify resources at: anyonebutapc.org', 90, 1610);
      ctx.fillStyle = '#999999';
      ctx.font = '16px Arial, sans-serif';
      ctx.fillText('Non-Party-Affiliated Civic Advocacy Initiative • Phase One • 2026', 90, 1655);

      // Convert to image and trigger download
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'anyone-but-apc-manifesto-poster.png';
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error('Failed to generate image', e);
    } finally {
      setDownloadingImg(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Paced Navigation Progress Stepper */}
      <nav aria-label="Guided Civic Learning Steps" className="bg-neutral-50 p-4 border border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-[#E30613] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Civic Path: Step 1 of 5</span>
          </span>
          <div className="flex items-center gap-2 font-medium text-neutral-600 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-[#080808] font-bold bg-white px-2.5 py-1 border border-black/20">
              1. The Manifesto
            </span>
            <span>&rarr;</span>
            <button
              onClick={() => onNavigate('issues')}
              className="hover:text-[#E30613] cursor-pointer"
            >
              2. The Issues
            </button>
            <span>&rarr;</span>
            <button
              onClick={() => onNavigate('democracy')}
              className="hover:text-[#E30613] cursor-pointer"
            >
              3. Democracy 101
            </button>
            <span>&rarr;</span>
            <button
              onClick={() => onNavigate('action')}
              className="hover:text-[#E30613] cursor-pointer"
            >
              4. Take Action
            </button>
            <span>&rarr;</span>
            <button
              onClick={() => onNavigate('evidence')}
              className="hover:text-[#E30613] cursor-pointer"
            >
              5. Evidence Library
            </button>
          </div>
        </div>
      </nav>

      {/* Main Page Title & Download Hub */}
      <div className="border-b-4 border-[#080808] pb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
              Official Charter
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Free, Fair &amp; Prosperous Nigeria
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
            Our Official Manifesto
          </h1>
          <p className="mt-2 text-base sm:text-lg text-[#252525] max-w-2xl leading-relaxed">
            Real people. Real solutions. A fair chance. Download, share, and review our foundational declaration for democratic restoration.
          </p>
        </div>

        {/* Download Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleDownloadImage}
            disabled={downloadingImg}
            className="tap-target px-4 py-2.5 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-red-700 transition-colors cursor-pointer shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>{downloadingImg ? 'Generating...' : 'Download Poster (PNG)'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="tap-target px-4 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#252525] transition-colors cursor-pointer shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={handleDownloadTxt}
            className="tap-target px-3.5 py-2.5 bg-neutral-100 text-[#080808] border border-black/20 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Text (.txt)</span>
          </button>

          <button
            onClick={handleCopy}
            className="tap-target px-3.5 py-2.5 bg-neutral-100 text-[#080808] border border-black/20 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* The Printable 6-Panel Manifesto View */}
      <div ref={printableRef} className="space-y-10 print:space-y-6">
        {/* Top Banner: Master Logo and Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080808] text-white p-8 sm:p-12 border-4 border-[#080808]">
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <BrandLogo variant="circle-badge" size="lg" />
            <div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tighter text-white">
                A BETTER NIGERIA IS POSSIBLE
              </h2>
              <p className="text-sm font-bold text-[#E30613] tracking-widest uppercase mt-1">
                Real People. Real Solutions. A Fair Chance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-neutral-200 leading-relaxed border-t lg:border-t-0 lg:border-l border-neutral-700 pt-6 lg:pt-0 lg:pl-8">
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E30613]" />
              <span>A Free, Fair and Prosperous Nigeria</span>
            </h3>
            <p>
              We are Nigerians at home and abroad who believe that Nigeria can and must be better. We reject the mismanagement, impunity and democratic backsliding under the current APC leadership.
            </p>
            <p>
              We are not aligned to any individual or political party. Our focus is a free and fair election, a return to democratic principles and a Nigeria where people can live with dignity, security and opportunity.
            </p>
          </div>
        </div>

        {/* 6 Core Principles Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-[#080808] pb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Foundational Pillars</span>
            <h3 className="font-display text-2xl text-[#080808] uppercase tracking-tight">
              Our 6 Core Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'DEMOCRACY',
                sub: 'NOT PERSONAL RULE',
                desc: 'Government accountable to institutions, laws, and the people, not strongmen.',
                icon: <Vote className="w-6 h-6 text-[#E30613]" />
              },
              {
                title: 'ACCOUNTABILITY',
                sub: 'NOT IMPUNITY',
                desc: 'Zero sacred cows. Public funds and executive travel subject to transparent audit.',
                icon: <Scale className="w-6 h-6 text-[#E30613]" />
              },
              {
                title: 'PEOPLE\'S WELFARE',
                sub: 'NOT EMPTY PROMISES',
                desc: 'Targeted economic interventions that lower food and transport prices.',
                icon: <Heart className="w-6 h-6 text-[#E30613]" />
              },
              {
                title: 'SECURITY',
                sub: 'NOT FEAR',
                desc: 'Physical safety on highways, farms, and cities without police extortion.',
                icon: <Shield className="w-6 h-6 text-[#E30613]" />
              },
              {
                title: 'OPPORTUNITY',
                sub: 'FOR EVERY NIGERIAN',
                desc: 'Access to stable power, quality education, jobs, and digital innovation.',
                icon: <Sparkles className="w-6 h-6 text-[#E30613]" />
              },
              {
                title: 'A UNITED NIGERIA',
                sub: 'AT HOME AND ABROAD',
                desc: 'Harnessing the collective knowledge and remittances of the diaspora with citizens at home.',
                icon: <Globe2 className="w-6 h-6 text-[#E30613]" />
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-white border-2 border-[#080808] p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="mb-3 p-2 bg-neutral-100 w-fit">{p.icon}</div>
                  <h4 className="font-display text-lg text-[#080808] uppercase tracking-tight leading-tight">
                    {p.title}
                  </h4>
                  <span className="text-xs font-bold text-[#E30613] uppercase tracking-wider block mb-2">
                    {p.sub}
                  </span>
                  <p className="text-xs text-[#252525] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Problem & Our Plan Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: The Problem */}
          <div className="border-2 border-[#080808] bg-[#080808] text-white p-6 sm:p-8 space-y-6">
            <div className="border-b border-neutral-700 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Documented Crisis</span>
              <h3 className="font-display text-2xl text-white uppercase tracking-tight">
                THE PROBLEM: NIGERIANS DESERVE BETTER
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-3 border-[#E30613] pl-3">
                <strong className="text-white block font-bold uppercase">DEEPENING POVERTY</strong>
                <p className="text-neutral-300 mt-0.5">
                  Over 60% of Nigerians live below the poverty line, with a severe cost of living crisis and little effective response.
                </p>
              </div>

              <div className="border-l-3 border-[#E30613] pl-3">
                <strong className="text-white block font-bold uppercase">DEMOCRATIC BACKSLIDING</strong>
                <p className="text-neutral-300 mt-0.5">
                  Growing attempts to silence opposition, obstruct free and fair elections, and marginalise dissent.
                </p>
              </div>

              <div className="border-l-3 border-[#E30613] pl-3">
                <strong className="text-white block font-bold uppercase">HUMAN RIGHTS ABUSES</strong>
                <p className="text-neutral-300 mt-0.5">
                  Peaceful protesters are harassed, arrested, and detained. Many Nigerians do not feel safe to speak out.
                </p>
              </div>

              <div className="border-l-3 border-[#E30613] pl-3">
                <strong className="text-white block font-bold uppercase">LEADERSHIP WITHOUT ACCOUNTABILITY</strong>
                <p className="text-neutral-300 mt-0.5">
                  The President spends long periods outside the country without handing over power, while serious questions about past conduct remain unanswered, including links to a heroin trafficking case.
                </p>
              </div>

              <div className="border-l-3 border-[#E30613] pl-3">
                <strong className="text-white block font-bold uppercase">PICK AND CHOOSE GOVERNANCE</strong>
                <p className="text-neutral-300 mt-0.5">
                  Laws and institutions are applied selectively to serve political interests, not the Nigerian people.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Our 5-Step Plan */}
          <div className="border-2 border-[#080808] bg-white p-6 sm:p-8 space-y-6">
            <div className="border-b border-black/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Constructive Strategy</span>
              <h3 className="font-display text-2xl text-[#080808] uppercase tracking-tight">
                OUR PLAN: PRACTICAL ACTION FOR REAL CHANGE
              </h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {[
                {
                  num: '1',
                  step: 'ACTIVATE',
                  desc: 'Mobilise Nigerians at home and abroad to raise awareness, share information and engage with key institutions.'
                },
                {
                  num: '2',
                  step: 'ENGAGE',
                  desc: 'Work with opposition parties and civil society to build international support for a free and fair election.'
                },
                {
                  num: '3',
                  step: 'INFORM',
                  desc: 'Provide clear, accurate information about Nigeria\'s democratic rights, the constitution and how citizens can hold leaders to account.'
                },
                {
                  num: '4',
                  step: 'AMPLIFY',
                  desc: 'Help the diaspora contact MPs, media and international bodies to highlight concerns and the global impact of Nigeria\'s crisis.'
                },
                {
                  num: '5',
                  step: 'PREPARE',
                  desc: 'Build a strong, informed and united movement so that when the time is right, we can support peaceful, lawful public action in key cities around the world.'
                }
              ].map((s) => (
                <div key={s.num} className="flex items-start gap-3 p-2.5 bg-neutral-50 border border-black/5">
                  <span className="w-6 h-6 rounded-full bg-[#E30613] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {s.num}
                  </span>
                  <div>
                    <strong className="font-display text-xs uppercase tracking-wider text-[#080808] block">
                      {s.step}
                    </strong>
                    <p className="text-neutral-700 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Are and Are Not Doing Table */}
        <div className="border-2 border-[#080808] bg-white p-6 sm:p-10 space-y-6">
          <div className="text-center max-w-2xl mx-auto border-b border-black/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Operational Transparency</span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#080808] uppercase tracking-tight mt-1">
              WHAT WE ARE AND ARE NOT DOING
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WE ARE */}
            <div className="bg-emerald-50/50 border-2 border-emerald-800 p-6 space-y-4">
              <h4 className="font-display text-xl text-emerald-950 uppercase tracking-tight flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600" />
                <span>WE ARE:</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
                {[
                  'Nigerians and friends of Nigeria who want a better future',
                  'Raising awareness and sharing facts',
                  'Engaging international partners, media and policymakers',
                  'Supporting diaspora to contact their MPs and local media',
                  'Promoting peaceful, lawful and democratic action',
                  'Educating about democracy, rights and the constitution',
                  'Working with all opposition parties to support a free and fair election'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WE ARE NOT */}
            <div className="bg-red-50/50 border-2 border-[#E30613] p-6 space-y-4">
              <h4 className="font-display text-xl text-red-950 uppercase tracking-tight flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E30613]" />
                <span>WE ARE NOT:</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
                {[
                  'Calling for or organising protests in Nigeria',
                  'Making any violent threats or demands',
                  'Endorsing any political party or individual',
                  'Promoting hate, ethnic or religious division',
                  'Sharing unverified information',
                  'Collecting sensitive personal data without consent'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#E30613] font-bold shrink-0">✖</span>
                    <span className="font-medium text-[#080808]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Our Vision & Closing Banner */}
        <div className="bg-neutral-100 border-2 border-[#080808] p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">The Future We Seek</span>
            <h3 className="font-display text-2xl sm:text-4xl text-[#080808] uppercase tracking-tight mt-1 mb-4">
              OUR VISION: A NIGERIA WHERE EVERYONE CAN THRIVE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#252525]">
              <div className="p-3 bg-white border border-black/10">
                <strong className="block font-bold text-[#080808] uppercase mb-1">BASIC NEEDS FOR ALL</strong>
                <span>Food, safe housing, clean water and healthcare.</span>
              </div>
              <div className="p-3 bg-white border border-black/10">
                <strong className="block font-bold text-[#080808] uppercase mb-1">QUALITY EDUCATION</strong>
                <span>Opportunities for every child to reach their potential.</span>
              </div>
              <div className="p-3 bg-white border border-black/10">
                <strong className="block font-bold text-[#080808] uppercase mb-1">MEANINGFUL WORK</strong>
                <span>Jobs, innovation and a thriving economy.</span>
              </div>
              <div className="p-3 bg-white border border-black/10">
                <strong className="block font-bold text-[#080808] uppercase mb-1">SAFETY AND JUSTICE</strong>
                <span>Rule of law, accountable institutions and protection from violence.</span>
              </div>
              <div className="p-3 bg-white border border-black/10 sm:col-span-2">
                <strong className="block font-bold text-[#080808] uppercase mb-1">A UNITED, INCLUSIVE NIGERIA</strong>
                <span>Where all Nigerians, at home and abroad, can contribute and be proud.</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl sm:text-2xl text-[#080808] uppercase italic">
                &ldquo;A fair Nigeria is not a dream. It is a choice.&rdquo;
              </p>
              <span className="text-xs text-neutral-600 font-mono">Official Campaign Portal: anyonebutapc.org</span>
            </div>
            <button
              onClick={handleDownloadImage}
              className="tap-target px-6 py-3 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-red-700 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Poster Image</span>
            </button>
          </div>
        </div>
      </div>

      {/* Guided Next Step: Paced Out Navigation */}
      <div className="bg-white border-2 border-[#080808] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">Ready for the Next Step?</span>
          <h4 className="font-display text-xl text-[#080808] uppercase tracking-tight mt-1">
            Step 2: Understand The Documented Issues
          </h4>
          <p className="text-xs sm:text-sm text-[#252525] mt-1 max-w-xl">
            Explore verified data on economic hardship, human needs, executive accountability, and protest policing.
          </p>
        </div>
        <button
          onClick={() => onNavigate('issues')}
          className="tap-target px-6 py-3.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525] flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <span>Continue to The Issues</span>
          <ArrowRight className="w-4 h-4 text-[#E30613]" />
        </button>
      </div>
    </div>
  );
};
