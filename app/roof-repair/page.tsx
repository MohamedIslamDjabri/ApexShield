import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/data';
import { ContactForm } from '@/components/forms/ContactForm';
import { FAQSection } from '@/components/sections/FAQSection';
import {
  Wrench,
  AlertTriangle,
  PhoneCall,
  CheckCircle2,
  Clock,
  Flame,
  Droplets,
  Search,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Repair & Leak Detection | ApexShield Austin TX',
  description:
    'Fast, permanent roof leak repair and thermal diagnostics across Central Texas. Missing shingles, chimney flashings, valley leaks, and 24/7 emergency dispatch.',
};

export default function RoofRepairPage() {
  const commonRepairs = [
    {
      title: 'Pipe Jack Boot Degradation',
      desc: 'Central Texas UV rays bake rubber pipe collars within 5-7 years, causing hidden water trickles down drywall and bathroom ceiling fans.',
      solution: 'We install heavy-gauge silicone collars or lead boots that carry a 20-year crack-free warranty.',
    },
    {
      title: 'Chimney & Step Flashing Leaks',
      desc: 'Stone and brick chimneys expand and contract at different rates than wood decking, tearing old caulk seams and letting water pool.',
      solution: 'Custom-bent step flashing, counter-flashing reglets, and welded copper diversion crickets.',
    },
    {
      title: 'Valley Metal Rust & Penetrations',
      desc: 'Roofs channel thousands of gallons of water through valleys during storms. Worn valley metal quickly creates major interior ceiling collapses.',
      solution: 'Complete valley tear-out with 36-inch continuous ice & water shield plus W-valley metal.',
    },
    {
      title: 'Wind-Torn & Lifted Shingles',
      desc: 'Thunderstorm gusts lift unsealed tabs and break adhesion strips, allowing subsequent rains to enter beneath the primary shingle layer.',
      solution: 'Precise color-matched replacement with hand-applied asphalt mastic sealant.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold mb-4 border border-red-500/30">
              <AlertTriangle className="w-4 h-4 text-[#F97316]" />
              <span>Active Leaks Stopped Fast • 24/7 Emergency Response</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Permanent Roof Repairs. No Band-Aids. No Recurring Leaks.
            </h1>
            <p className="text-lg text-[#AEC9E8] mt-4 leading-relaxed">
              We diagnose the root structural cause of your leak using infrared moisture scanners, replacing compromised wood decking and flashing before structural framing rots.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href={SITE_CONFIG.phoneRaw}
                className="px-6 py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency Dispatch: {SITE_CONFIG.phone}</span>
              </a>
              <a
                href="#repair-form"
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all"
              >
                Schedule Diagnostic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Repair Scenarios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
            Expert Diagnostics
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33] mt-1">
            Common Central Texas Roof Failures We Resolve
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Most roofers apply a dollop of silicone caulk and walk away. ApexShield tears out the failing metal and rebuilds the waterproofing barrier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commonRepairs.map((rep) => (
            <div
              key={rep.title}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-2 text-[#F97316] mb-2">
                  <Droplets className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Known Failure Point</span>
                </div>
                <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33]">
                  {rep.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {rep.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 bg-[#EFF4FF] -mx-8 -mb-8 p-6 rounded-b-2xl">
                <span className="text-xs font-bold text-[#0B1F33] uppercase tracking-wider block mb-1">
                  The ApexShield Fix:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {rep.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Repair vs Replace Decision Guide */}
      <section className="w-full bg-[#EFF4FF] py-20 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              Honest Advice
            </span>
            <h2 className="font-headline-xl text-3xl font-bold text-[#0B1F33] mt-1">
              Should You Repair or Replace?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We never push a costly roof replacement when a targeted, guaranteed repair will reliably protect your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-headline-sm text-lg font-bold text-[#0B1F33] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>When to Repair</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li>• Roof is under 12-15 years old with pliable shingles</li>
                <li>• Leak is isolated to a specific penetration (pipe boot, chimney)</li>
                <li>• Storm wind damage is localized to one or two roof facets</li>
                <li>• Decking is structurally sound with no widespread rot</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-headline-sm text-lg font-bold text-[#0B1F33] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#F97316]" />
                <span>When to Replace</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li>• Roof exceeds 18-20 years with brittle, cracking shingles</li>
                <li>• Widespread hail bruising exceeding 10 hits per 100 sq ft</li>
                <li>• Shingles are losing granules across all slopes</li>
                <li>• Qualifies for 100% insurance replacement coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 w-full" id="repair-form">
        <ContactForm defaultService="Roof Repair" />
      </section>

      <FAQSection title="Roof Repair FAQ" />
    </div>
  );
}
