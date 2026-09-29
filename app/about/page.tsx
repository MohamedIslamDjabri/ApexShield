import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/data';
import { TrustBar } from '@/components/sections/TrustBar';
import { FinalCTABanner } from '@/components/sections/FinalCTABanner';
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Plane,
  Camera,
  HeartHandshake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | ApexShield Roofing Austin TX',
  description:
    'Learn about ApexShield Roofing, Central Texas premier master-certified residential roofing contractor. Over 20 years of craftsmanship, zero subcontractors, and 4,200+ roofs installed.',
};

export default function AboutPage() {
  const pillars = [
    {
      title: 'Zero Subcontractors',
      desc: 'Every technician on your roof is a background-checked, full-time ApexShield employee trained in factory-certified installation protocols.',
      icon: Users,
    },
    {
      title: 'Master Elite Certification',
      desc: 'Only 2% of North American roofing contractors qualify as GAF Master Elite. This allows us to provide 50-year non-prorated factory warranties.',
      icon: Award,
    },
    {
      title: 'Advanced Drone Diagnostics',
      desc: 'We utilize automated 4K optical drones and FLIR infrared moisture cameras to diagnose roof decks without unnecessary foot traffic.',
      icon: Plane,
    },
    {
      title: 'Pristine Property Protection',
      desc: 'We treat your property like an estate. Quad-pass magnetic nail sweeps and heavy netting protect flowerbeds, swimming pools, and pets.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
              Our Heritage &amp; Commitment
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              We Build Roofs Engineered to Outlast Texas Weather.
            </h1>
            <p className="text-lg text-[#AEC9E8] mt-4 leading-relaxed">
              Founded in Austin with a singular purpose: replace the high-pressure sales and corner-cutting of typical contractors with architectural precision, ironclad warranties, and complete transparency.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="/contact#quote"
                className="px-6 py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm shadow-md transition-all"
              >
                Schedule Drone Inspection
              </Link>
              <a
                href={SITE_CONFIG.phoneRaw}
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all"
              >
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Docked Bar */}
      <TrustBar />

      {/* Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg24K2d0PvN13pnieVCxj-t2YG0cpCC4zGcZukYTiuwxx07fw9ECceIZM5ocPm6c8Z3Mb8hnsaJgwkSBuwPo1D_LKFwGQRaU_qeA9Q4rzlUL-LY8tR9HkzDFcWYS9eaac_fFyLqPixKhybF6f6Z9nQOXz6pMJumqSMicW1lySJv6TdABwwRNvK_NjBZYJmf2xbfNFMhc41WJ4Ik2DbbpnxSK4EZQesj2uEVtdovDthtfm2LHsWv6MS"
                alt="ApexShield professional crew on Texas roof"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-xl shadow-xl border border-slate-200 max-w-xs">
              <div className="flex items-center gap-2 text-[#F97316]">
                <Award className="w-5 h-5" />
                <span className="font-bold text-sm text-[#0B1F33]">GAF Master Elite</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Top 2% contractor status maintained continuously since 2012.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                Why We Are Different
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33] mt-1 leading-tight">
                Two Decades of Integrity in Austin, Texas.
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Every spring, hail storms sweep through Williamson and Travis County. And every spring, out-of-state storm-chasing companies flood Central Texas with temporary salespeople offering questionable repairs, only to disappear when leaks reappear during the next downpour.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At ApexShield, our roots are permanently planted here. We maintain physical headquarters on Research Blvd in Austin, hold Texas License #TX-ROC-84920, carry $2M in liability protection, and back our replacements with 50-year non-prorated guarantees backed directly by world-class manufacturers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-display text-2xl font-bold text-[#0B1F33]">4,200+</span>
                <p className="text-xs text-slate-500 font-medium">Roofs Installed</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-display text-2xl font-bold text-[#F97316]">100%</span>
                <p className="text-xs text-slate-500 font-medium">Local Texas Crews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="w-full bg-[#EFF4FF] py-20 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              Uncompromising Standards
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33] mt-1">
              The ApexShield Guarantees
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every shingle, nail, flashing, and vent is installed with master craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E5EEFF] text-[#F97316] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-[#0B1F33]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTABanner />
    </div>
  );
}
