import React from 'react';
import { PageId } from '../types';
import { SITE_METADATA } from '../data/content';
import { Lock, Shield, CheckCircle2, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <button
        onClick={() => onNavigate('home')}
        className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black flex items-center gap-1 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </button>

      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#080808] text-white">
            Data Protection
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            UK GDPR &amp; NDPA Compliance
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Privacy Policy &amp; Data Notice
        </h1>
        <p className="mt-3 text-sm text-[#252525]">
          Last updated and reviewed: 18 October 2026. Version 1.0 (Phase One).
        </p>
      </div>

      <div className="prose max-w-none text-sm text-[#252525] leading-relaxed space-y-6">
        <section className="p-4 bg-neutral-50 border-l-4 border-[#E30613]">
          <h2 className="font-display text-lg uppercase text-[#080808] mb-2">
            1. Core Commitment: Privacy by Design
          </h2>
          <p>
            Anyone But APC is committed to protecting the privacy, security, and civic freedoms of every visitor, subscriber, and correspondent. Because political beliefs and civic advocacy touch upon special-category data under the UK General Data Protection Regulation (UK GDPR) and sensitive personal data under the Nigeria Data Protection Act 2023 (NDPA), we operate under strict principles of data minimisation and cryptographic isolation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg uppercase text-[#080808]">
            2. Data We Collect &amp; Why
          </h2>
          <p>
            In Phase One, our website is built primarily as a static public information archive. We do not require registration or personal details to read our evidence library, access constitutional resources, or copy correspondence letters.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Supporter Updates (Voluntary):</strong> If you choose to subscribe to our research briefings, we collect your email address, and optionally your first name and country of residence. We never ask for political party affiliation, street address, or phone number in Phase One.
            </li>
            <li>
              <strong>Contact &amp; Correction Desks:</strong> Information submitted via our public enquiry or correction forms is used exclusively to evaluate the factual query or right of reply.
            </li>
            <li>
              <strong>Party Leadership Inquiries:</strong> Communications from registered political parties are routed to an encrypted private queue and verified out-of-band.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg uppercase text-[#080808]">
            3. Lawful Basis &amp; Article 9 Special-Category Conditions
          </h2>
          <p>
            Where personal data indicates political opinion:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Article 6(1)(a) UK GDPR:</strong> Explicit, freely given, specific, and informed consent indicated by an affirmative opt-in checkbox (never pre-ticked).
            </li>
            <li>
              <strong>Article 9(2)(a) UK GDPR:</strong> Explicit consent for the processing of specified special-category data.
            </li>
            <li>
              <strong>Double Opt-In:</strong> All newsletter registrations require secondary email confirmation before any communication is dispatched.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg uppercase text-[#080808]">
            4. Storage, Security &amp; Third Parties
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We do NOT store supporter personal data in browser localStorage, cookies, or public repositories.</li>
            <li>We do NOT sell, rent, license, or trade contact lists to any commercial entity or political party.</li>
            <li>Our static frontend is hosted on Cloudflare Pages, utilizing TLS 1.3 encryption, automatic DDoS mitigation, and strict Content Security Policies.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg uppercase text-[#080808]">
            5. Cookies &amp; Aggregated Analytics
          </h2>
          <p>
            We do not use invasive third-party tracking pixels, advertising retargeting tags, or cross-site tracking beacons. If analytics are employed, they are privacy-first, cookie-less, aggregate counters that do not store IP addresses or identifiable user fingerprints.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-lg uppercase text-[#080808]">
            6. Your Rights Under UK GDPR &amp; NDPA
          </h2>
          <p>
            You have the right to access the personal data held about you, correct inaccuracies, or demand immediate deletion (Right to Erasure / &ldquo;Right to be Forgotten&rdquo;). Every briefing email contains a direct one-click unsubscribe mechanism.
          </p>
          <p>
            To exercise your privacy rights, contact our Data Protection Officer at:{' '}
            <a href={`mailto:${SITE_METADATA.privacyEmail}`} className="text-[#E30613] font-bold underline font-mono">
              {SITE_METADATA.privacyEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};
