import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, SITE_CONFIG } from '@/constants/data';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactForm } from '@/components/forms/ContactForm';
import { FAQSection } from '@/components/sections/FAQSection';
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Headphones,
  Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roofing Services | ApexShield Austin TX',
  description:
    'Comprehensive residential roofing services in Central Texas: Roof replacement, leak repair, free drone inspections, insurance storm claims, and 24/7 emergency dispatch.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
              Master Craftsmanship
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              Complete Residential Roofing Solutions for Texas Homes.
            </h1>
            <p className="text-lg text-[#AEC9E8] mt-4 leading-relaxed">
              Whether you need rapid leak containment after a storm, an aerial inspection report for your insurance provider, or a full architectural roof upgrade, ApexShield delivers precision engineering.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#all-services"
                className="px-6 py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm shadow-md transition-all"
              >
                Explore Services
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

      {/* Services Grid */}
      <div id="all-services">
        <ServicesSection />
      </div>

      {/* Deep-Dive Detailed Service Features */}
      <section className="w-full bg-[#EFF4FF] py-20 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              Detailed Capabilities
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33] mt-1">
              Every Service Backed by Certified Guarantees
            </h2>
          </div>

          <div className="space-y-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                id={svc.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded bg-[#E5EEFF] text-[#0B1F33] font-bold text-xs uppercase tracking-wider">
                      {svc.badge || 'Service'}
                    </span>
                    {svc.warranty && (
                      <span className="text-xs text-slate-500 font-semibold">
                        • {svc.warranty}
                      </span>
                    )}
                  </div>
                  <h3 className="font-headline-sm text-2xl font-bold text-[#0B1F33]">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {svc.fullDesc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {svc.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3 bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Ready to schedule?
                  </span>
                  <p className="text-xs text-slate-600">
                    Complimentary in-person or drone assessment with guaranteed itemized proposal.
                  </p>
                  <Link
                    href={`/contact?service=${encodeURIComponent(svc.title)}`}
                    className="w-full py-3 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-center font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    {svc.ctaText}
                  </Link>
                  <a
                    href={SITE_CONFIG.phoneRaw}
                    className="w-full py-2.5 rounded-lg bg-white hover:bg-slate-100 text-[#0B1F33] text-center font-semibold text-xs border border-slate-300 transition-all"
                  >
                    Call ({SITE_CONFIG.phone})
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 w-full">
        <ContactForm />
      </section>

      <FAQSection />
    </div>
  );
}
