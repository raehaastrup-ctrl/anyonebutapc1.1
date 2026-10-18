import React, { useState } from 'react';
import { PageId } from '../types';
import { SITE_METADATA, SOCIAL_CHANNELS, ABOUT_DECLARATION } from '../data/content';
import { BrandLogo } from '../components/BrandLogo';
import { 
  Download, 
  ArrowRight, 
  Mail, 
  Share2, 
  Check, 
  Copy, 
  ShieldCheck, 
  Scale, 
  Users, 
  Vote, 
  MessageSquare, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [copiedHashtag, setCopiedHashtag] = useState(false);
  const [copiedShareText, setCopiedShareText] = useState(false);

  const sampleShareText = `Nigeria deserves accountable leadership, protected freedoms, and credible elections. Join the movement demanding constitutional governance at home and abroad. Read & download the 2026 Manifesto: https://anyonebutapc.org #ANYONEBUTAPC`;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
    }
  };

  const handleCopyHashtag = () => {
    navigator.clipboard.writeText('#ANYONEBUTAPC');
    setCopiedHashtag(true);
    setTimeout(() => setCopiedHashtag(false), 2000);
  };

  const handleCopyShareText = () => {
    navigator.clipboard.writeText(sampleShareText);
    setCopiedShareText(true);
    setTimeout(() => setCopiedShareText(false), 2000);
  };

  const downloadManifestoTxt = () => {
    const text = `ANYONE BUT APC - OFFICIAL CIVIC MANIFESTO 2026
UNITE OPPOSITION & ACTIVATE DIASPORA TO RESTORE DEMOCRACY

1. WHAT WE ARE DOING:
We are Nigerians at home and abroad demanding constitutional accountability, protected civic freedoms, and credible elections. We reject the economic devastation, impunity, and harassment of peaceful dissent under the current APC administration.

2. OUR CORE PRINCIPLES:
- Constitutional Accountability: No leader or president is above the 1999 Constitution.
- People's Welfare & Dignity: Over 60% of Nigerians live in poverty. Economic policy must serve citizens.
- Free, Fair & Credible Elections: Every lawful vote must be protected and counted.
- Protected Civil Liberties: Free speech and peaceful assembly are sacred constitutional rights.

3. OUR CALLS TO ACTION:
- Send a letter to your UK MP or representative demanding international scrutiny.
- Share #ANYONEBUTAPC on TikTok, Instagram, X, and Facebook (@anyonebutapc).
- Educate your community on constitutional rights and civic oversight.

Website: https://anyonebutapc.org
Social: @anyonebutapc
Hashtag: #ANYONEBUTAPC`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ANYONE_BUT_APC_MANIFESTO_2026.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-black/10 bg-white" aria-labelledby="hero-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Concise Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#E30613]" aria-hidden="true" />
                <span>Phase One: Civic Information &amp; Accountability</span>
              </div>

              {/* Master Brand Logo Component */}
              <div className="py-2">
                <BrandLogo variant="full" showTagline={true} />
              </div>

              <h1 id="hero-title" className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#080808] tracking-tight leading-snug">
                {SITE_METADATA.subheading}
              </h1>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-2xl">
                {SITE_METADATA.introCopy}
              </p>

              {/* Primary Call To Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('manifesto')}
                  className="tap-target px-6 py-3.5 bg-[#E30613] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download The Manifesto</span>
                </button>
                <button
                  onClick={() => onNavigate('action')}
                  className="tap-target px-6 py-3.5 bg-[#080808] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#E30613]" />
                  <span>Send Your MP a Letter</span>
                </button>
                <button
                  onClick={() => onNavigate('democracy')}
                  className="tap-target px-5 py-3.5 bg-neutral-100 text-[#080808] border border-black/15 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Democracy 101 Guide
                </button>
              </div>

              {/* Scope Clarification Notice */}
              <div className="p-3.5 bg-neutral-100 border-l-4 border-[#080808] text-xs text-neutral-700 leading-relaxed max-w-2xl">
                <strong className="text-[#080808] uppercase tracking-wider font-bold">Important Notice: </strong>
                {SITE_METADATA.phaseNotice}
              </div>
            </div>

            {/* Right Column: Quick Manifesto & Share Card */}
            <div className="lg:col-span-4 bg-[#080808] text-white border-2 border-[#080808] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-700 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                    The 2026 Manifesto
                  </span>
                  <span className="text-[10px] font-mono bg-neutral-800 px-2 py-0.5 text-neutral-300 uppercase">
                    Step 2 of 4
                  </span>
                </div>

                <div className="text-center py-3 bg-neutral-900 border border-neutral-800">
                  <div className="flex justify-center mb-2">
                    <BrandLogo variant="symbol" className="w-14 h-14" />
                  </div>
                  <h2 className="font-display text-xl uppercase tracking-tight text-white">
                    A Free, Fair &amp; Accountable Nigeria
                  </h2>
                  <p className="text-[11px] text-neutral-400 mt-1 px-4">
                    Our foundational civic declaration outlining the 4 principles for democratic restoration.
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => onNavigate('manifesto')}
                    className="w-full tap-target py-3 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-red-700 cursor-pointer transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Read &amp; Download PDF</span>
                  </button>
                  <button
                    onClick={downloadManifestoTxt}
                    className="w-full tap-target py-2.5 bg-neutral-800 text-neutral-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-700 cursor-pointer"
                  >
                    <span>Download Plain Text (.txt)</span>
                  </button>
                </div>
              </div>

              {/* Quick Hashtag Copy */}
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-white text-sm">{SITE_METADATA.campaignHashtag}</span>
                  <button
                    onClick={handleCopyHashtag}
                    className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xs text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                  >
                    {copiedHashtag ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedHashtag ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Tag us on TikTok, Instagram, X &amp; Facebook: @anyonebutapc
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 1: Simply WHAT WE ARE DOING (Concise, stripped-down) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="what-we-are-doing">
        <div className="border-b-4 border-[#080808] pb-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E30613] mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Core Civic Mission</span>
          </div>
          <h2 id="what-we-are-doing" className="font-display text-3xl sm:text-4xl text-[#080808] uppercase tracking-tight">
            What We Are Doing
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-1 max-w-2xl">
            We are building an independent, non-violent civic movement to restore democratic accountability in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border-2 border-[#080808] p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#080808] text-white flex items-center justify-center font-mono font-bold mb-4">
                01
              </div>
              <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mb-2">
                Uniting Opposition Voices
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Bringing together civil society, diaspora coalitions, student unions, and citizens across Nigeria to demand free, fair, and credible elections without partisan division.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-200 text-xs font-bold text-[#E30613] uppercase flex items-center gap-1">
              <span>Non-partisan unity</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-[#080808] p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#E30613] text-white flex items-center justify-center font-mono font-bold mb-4">
                02
              </div>
              <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mb-2">
                Activating Global Diaspora
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Empowering Nigerians in the UK, United States, Canada, and Europe to write directly to their MPs and representatives to demand international oversight and human rights monitoring.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-200 text-xs font-bold text-[#E30613] uppercase flex items-center gap-1">
              <span>International advocacy</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-[#080808] p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#080808] text-white flex items-center justify-center font-mono font-bold mb-4">
                03
              </div>
              <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mb-2">
                Defending Rights &amp; Law
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Educating citizens on constitutional rights under Chapter IV, documenting government excesses, and ensuring peaceful civic dissent is never criminalised by state security agencies.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-200 text-xs font-bold text-[#E30613] uppercase flex items-center gap-1">
              <span>Constitutional oversight</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Simply WHY IT MATTERS */}
      <section className="bg-neutral-50 py-12 sm:py-16 border-y border-black/10" aria-labelledby="why-it-matters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b-4 border-[#080808] pb-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E30613] mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
              <span>The Human Reality</span>
            </div>
            <h2 id="why-it-matters" className="font-display text-3xl sm:text-4xl text-[#080808] uppercase tracking-tight">
              Why It Matters
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1 max-w-2xl">
              Nigeria deserves leadership that can be questioned and institutions that serve citizens, not rulers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fact 1: Cost of Living */}
            <div className="p-6 bg-white border border-black/15 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-red-100 text-[#E30613] rounded-xs font-bold text-xs">
                  01. Economic Hardship
                </span>
                <span className="text-xs font-bold text-neutral-500">World Bank Estimates</span>
              </div>
              <h3 className="text-lg font-bold text-[#080808] mb-2">
                Runaway Food Inflation &amp; Extreme Poverty
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Sudden currency devaluations and subsidy removals without adequate safety nets have forced food inflation above 35%, pushing over 120 million Nigerians below the poverty line. Daily survival cannot replace basic human dignity.
              </p>
            </div>

            {/* Fact 2: Civil Liberties */}
            <div className="p-6 bg-white border border-black/15 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-neutral-100 text-[#080808] rounded-xs font-bold text-xs">
                  02. Civil Freedoms
                </span>
                <span className="text-xs font-bold text-neutral-500">Section 39 &amp; 40 CFRN</span>
              </div>
              <h3 className="text-lg font-bold text-[#080808] mb-2">
                Harassment of Peaceful Dissent &amp; Free Assembly
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Citizens exercising their constitutional right to protest cost-of-living hardship have faced arbitrary detention and trumped-up treason charges. In a genuine democracy, dissent is not a crime; it is patriotic accountability.
              </p>
            </div>

            {/* Fact 3: Election Credibility */}
            <div className="p-6 bg-white border border-black/15 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-neutral-100 text-[#080808] rounded-xs font-bold text-xs">
                  03. Electoral Integrity
                </span>
                <span className="text-xs font-bold text-neutral-500">Electoral Act 2022</span>
              </div>
              <h3 className="text-lg font-bold text-[#080808] mb-2">
                Transparent Collation &amp; Diaspora Inclusion
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Democracy loses all legitimacy when elections lack transparency. Every polling unit result must be verified electronically in real time, and millions of diaspora Nigerians contributing billions to the economy must be given the right to vote.
              </p>
            </div>

            {/* Fact 4: Executive Accountability */}
            <div className="p-6 bg-white border border-black/15 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-red-100 text-[#E30613] rounded-xs font-bold text-xs">
                  04. Rule of Law
                </span>
                <span className="text-xs font-bold text-neutral-500">Chapter V &amp; VI CFRN</span>
              </div>
              <h3 className="text-lg font-bold text-[#080808] mb-2">
                Leadership That Must Answer to the Public
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                Leaders cannot govern with impunity, spend long undocumented absences abroad without constitutional handovers, or ignore court judgments. Constitutional democracy demands continuous transparency and institutional independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: THE CALL TO ACTION (The 4 clear things to do) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="calls-to-action">
        <div className="border-b-4 border-[#080808] pb-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E30613] mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Step 4: Take Action</span>
          </div>
          <h2 id="calls-to-action" className="font-display text-3xl sm:text-4xl text-[#080808] uppercase tracking-tight">
            How You Can Act Right Now
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-1 max-w-2xl">
            Choose any of the simple actions below to hold institutions accountable and support credible elections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Action 1: Send your MP a letter */}
          <div className="border-2 border-[#080808] p-6 bg-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="p-2.5 bg-[#080808] text-white w-fit mb-4">
                <Mail className="w-5 h-5 text-[#E30613]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613]">Action 01</span>
              <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mt-1 mb-2">
                Send Your MP a Letter
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                Live in the UK or abroad? Use our verified, editable correspondence templates to ask your local MP to support international election observation and human rights scrutiny.
              </p>
            </div>
            <button
              onClick={() => onNavigate('action')}
              className="tap-target w-full py-3 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Open MP Letter Desk</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E30613]" />
            </button>
          </div>

          {/* Action 2: Share on Social Media */}
          <div className="border-2 border-[#080808] p-6 bg-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="p-2.5 bg-[#E30613] text-white w-fit mb-4">
                <Share2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613]">Action 02</span>
              <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mt-1 mb-2">
                Share #ANYONEBUTAPC
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                Encourage others to use <strong className="text-[#080808]">#ANYONEBUTAPC</strong> on TikTok, Instagram, X, and Facebook. Follow <strong className="text-[#080808]">@anyonebutapc</strong> across all platforms.
              </p>
            </div>
            <button
              onClick={handleCopyShareText}
              className="tap-target w-full py-3 bg-neutral-100 hover:bg-neutral-200 text-[#080808] border border-black/20 text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2"
            >
              {copiedShareText ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedShareText ? 'Copied Share Post!' : 'Copy Share Post'}</span>
            </button>
          </div>

          {/* Action 3: Download Manifesto */}
          <div className="border-2 border-[#080808] p-6 bg-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="p-2.5 bg-[#080808] text-white w-fit mb-4">
                <Download className="w-5 h-5 text-[#E30613]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613]">Action 03</span>
              <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mt-1 mb-2">
                Download the Manifesto
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                Read our complete roadmap for democratic restoration, the 6 core principles, problem analysis, and our diaspora activation plan.
              </p>
            </div>
            <button
              onClick={() => onNavigate('manifesto')}
              className="tap-target w-full py-3 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Download Full Document</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Action 03 & Participation Enquiry row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          
          {/* Subscribe to our newsletter */}
          <div className="border-2 border-[#080808] p-6 bg-neutral-50 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613]">Updates</span>
              <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mt-1 mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                Receive verified factual updates on election readiness and civil liberties. Double opt-in, strict privacy by design, and zero spam.
              </p>
            </div>

            {newsletterSubscribed ? (
              <div className="p-3 bg-green-50 border border-green-300 text-green-800 text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Thank you! Please check your inbox to confirm your subscription.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-3 py-2 text-xs border border-black/30 bg-white text-[#080808] focus:outline-2 focus:outline-[#E30613]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#080808] text-white text-xs font-bold uppercase hover:bg-neutral-800 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Participation Enquiry */}
          <div className="border-2 border-[#080808] p-6 bg-neutral-50 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-600">Get Involved</span>
              <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mt-1 mb-2">
                Participation Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                Are you a diaspora group, civil society organisation, volunteer researcher, or legal practitioner? Connect with our civic working group.
              </p>
            </div>
            <button
              onClick={() => onNavigate('action')}
              className="tap-target w-full py-3 bg-white border border-black/30 hover:bg-neutral-100 text-[#080808] text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Submit Participation Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Social Media Banner: TikTok, IG, FB, X with @anyonebutapc */}
      <section className="bg-[#080808] text-white py-12" aria-labelledby="social-channels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-neutral-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
                Official Social Channels
              </span>
              <h2 id="social-channels" className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white mt-1">
                Follow &amp; Tag @anyonebutapc
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Username is <strong className="text-white font-mono">@anyonebutapc</strong> across all major platforms. Use the hashtag <strong className="text-[#E30613] font-mono">#ANYONEBUTAPC</strong>.
              </p>
            </div>
            <button
              onClick={handleCopyHashtag}
              className="px-4 py-2.5 bg-[#E30613] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer w-fit"
            >
              {copiedHashtag ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedHashtag ? 'Hashtag Copied' : 'Copy #ANYONEBUTAPC'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SOCIAL_CHANNELS.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-neutral-900 border border-neutral-800 hover:border-[#E30613] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-neutral-400 mb-2">
                    <span className="text-xs font-bold text-white uppercase">{channel.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:text-[#E30613]" />
                  </div>
                  <div className="text-sm font-bold font-mono text-[#E30613] mb-1">
                    {channel.handle}
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    {channel.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Scope & Principles Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="border border-black/15 bg-neutral-50 p-6 sm:p-8">
          <h3 className="font-display text-lg uppercase tracking-tight text-[#080808] mb-3">
            Our Public Integrity Charter
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-neutral-700">
            {ABOUT_DECLARATION.scopeBoundaries.map((boundary, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#E30613] font-bold">&bull;</span>
                <span>{boundary}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
