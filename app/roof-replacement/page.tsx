import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/data';
import { ContactForm } from '@/components/forms/ContactForm';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { FAQSection } from '@/components/sections/FAQSection';
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Clock,
  Sparkles,
  Layers,
  Wind,
  Flame,
  FileCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Replacement | ApexShield Roofing Austin TX',
  description:
    'Master-certified residential roof replacement in Austin and Central Texas. 50-year non-prorated warranties, Class 4 impact shingles, and 1-day installation.',
};

export default function RoofReplacementPage() {
  const materials = [
    {
      name: 'GAF Timberline HDZ',
      category: 'Architectural Shingle',
      windRating: '130 MPH Wind Warranty',
      warranty: '50-Year Non-Prorated',
      desc: 'America’s #1-selling shingle with patented LayerLock technology and StrikeZone nailing area for maximum wind and water resistance.',
      highlights: ['StainGuard Plus algae protection', 'High-definition shadow bands', 'Class A fire rated'],
      popular: true,
    },
    {
      name: 'Owens Corning Duration Storm',
      category: 'Class 4 Impact Resistant',
      windRating: '130 MPH Wind Rated',
      warranty: '50-Year TruProtection',
      desc: 'Engineered with WeatherGuard technology to withstand up to 2-inch hail impact. Eligible for up to 28% Texas homeowner insurance premium discounts.',
      highlights: ['Class 4 UL 2218 impact rating', 'SureNail triple-layer reinforcement', 'Significant insurance premium savings'],
      popular: false,
    },
    {
      name: '24-Gauge Standing Seam Metal',
      category: 'Architectural Metal',
      windRating: '160+ MPH Hurricane Rated',
      warranty: '70+ Year Expected Lifespan',
      desc: 'Concealed fastener panels with factory Kynar 500 finishes. Superior heat deflection, energy efficiency, and modern hill-country aesthetic.',
      highlights: ['Class A non-combustible fire rating', 'Cool-roof reflective pigment', 'Ideal for rainwater harvesting systems'],
      popular: false,
    },
  ];

  const standards = [
    'Complete tear-off down to original wood decking',
    'Inspection & replacement of rotted or water-damaged plywood',
    'Commercial-grade synthetic underlayment (25x stronger than felt)',
    'Self-adhering ice & water shield installed in valleys and penetrations',
    'Galvanized corrosion-resistant drip edge around entire perimeter',
    'Continuous ridge vent installation for balanced attic air circulation',
    'Lead or silicone-collared pipe boots guaranteed not to crack',
    'Quad-pass magnetic roller sweep around foundation and driveway',
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#CFE5FF] text-xs font-bold mb-4 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#F97316]" />
              <span>GAF Master Elite Certified Installation</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Residential Roof Replacement Done Right the First Time.
            </h1>
            <p className="text-lg text-[#AEC9E8] mt-4 leading-relaxed">
              When it&apos;s time for a new roof, choose Central Texas&apos;s most rigorous installation standard. 1-day turnarounds, 50-year non-prorated warranties, and zero debris left in your yard.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href="#estimate"
                className="px-6 py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm shadow-md transition-all"
              >
                Get Replacement Quote
              </a>
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

      {/* Materials Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
            Architectural Options
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33] mt-1">
            Engineered Roofing Systems
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Every home is unique. We provide digital 3D renderings and physical material samples so you can choose with absolute confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((mat) => (
            <div
              key={mat.name}
              className={`bg-white rounded-2xl p-8 border flex flex-col justify-between shadow-sm relative transition-all hover:shadow-xl ${
                mat.popular ? 'border-[#F97316] ring-2 ring-[#F97316]/20' : 'border-slate-200'
              }`}
            >
              {mat.popular && (
                <div className="absolute -top-3.5 right-6 bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {mat.category}
                </span>
                <h3 className="font-headline-sm text-2xl font-bold text-[#0B1F33] mt-1">
                  {mat.name}
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {mat.desc}
                </p>

                <div className="my-6 space-y-2 border-y border-slate-100 py-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-[#F97316]" />
                    <span>{mat.windRating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#F97316]" />
                    <span>{mat.warranty}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {mat.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#estimate"
                className={`w-full py-3 rounded-lg text-center font-semibold text-sm transition-all ${
                  mat.popular
                    ? 'bg-[#F97316] hover:bg-[#EA580C] text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                Select &amp; Estimate
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* The ApexShield Complete System Standard */}
      <section className="w-full bg-[#EFF4FF] py-20 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                Our Unbroken System
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33]">
                What Goes Into Every ApexShield Replacement
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A roof is not just shingles; it is a multi-layered barrier engineered to handle Texas heat, high winds, and torrential hail. We never cut corners on underlayment or flashing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {standards.map((std) => (
                  <div key={std} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtKNsmHTqUIqtZrJUxUtI-ZyoiaifDPJzPBrileKn5oAwHkuN9ZQEG3B6wps2cEZL3CRsc2UeEGICXid0TFTp_1jReYIYTzIfA-Rk2JEjpY4ugHAe6NtUpTax27SbrF6Br995JqOia9xUPcuCVjk0U9kAqgqYq6XnEbaJUNYUjZKMsQ220eH0PfxzwQy7D3JKaNHw6jeaRLQr7gJVMBo68LwEh4-Gmify1KRsFkmym-5HJ9HzgRzWd"
                  alt="ApexShield completed roof replacement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <ProcessSection />

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 w-full" id="estimate">
        <ContactForm defaultService="Roof Replacement" />
      </section>

      {/* FAQs */}
      <FAQSection title="Roof Replacement Questions" />
    </div>
  );
}
