import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  Shield,
  FileCheck,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="w-full bg-[#EFF4FF] py-20 lg:py-24 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image Composition with Floating Badge Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg24K2d0PvN13pnieVCxj-t2YG0cpCC4zGcZukYTiuwxx07fw9ECceIZM5ocPm6c8Z3Mb8hnsaJgwkSBuwPo1D_LKFwGQRaU_qeA9Q4rzlUL-LY8tR9HkzDFcWYS9eaac_fFyLqPixKhybF6f6Z9nQOXz6pMJumqSMicW1lySJv6TdABwwRNvK_NjBZYJmf2xbfNFMhc41WJ4Ik2DbbpnxSK4EZQesj2uEVtdovDthtfm2LHsWv6MS"
                alt="Professional roofing contractors installing architectural asphalt shingles on a steep luxury suburban roof"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-transparent to-transparent pointer-events-none"></div>

              {/* Bottom image overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-xs uppercase tracking-wider text-[#CFE5FF] font-bold">
                    Master Craftsmanship
                  </span>
                  <p className="font-title-md text-sm sm:text-base font-semibold">
                    GAF Timberline HDZ Class-4 Installation
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-label-sm text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                  <span>Inspected 2025</span>
                </div>
              </div>
            </div>

            {/* Overlapping Statistics Bento Cards */}
            <div className="grid grid-cols-2 gap-4 -mt-10 sm:-mt-14 relative z-10 px-4">
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-xl flex flex-col gap-1 border border-slate-200">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#F97316] leading-none">
                  4,200+
                </span>
                <span className="font-headline-sm text-sm sm:text-base text-[#0B1F33] font-bold">
                  Roofs Installed
                </span>
                <span className="text-xs text-slate-500">
                  Across Central Texas with zero failures.
                </span>
              </div>

              <div className="bg-[#00050E] text-white p-5 sm:p-6 rounded-xl shadow-xl flex flex-col gap-1 border border-slate-800">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#CFE5FF] leading-none">
                  0% APR
                </span>
                <span className="font-headline-sm text-sm sm:text-base text-white font-bold">
                  Flexible Financing
                </span>
                <span className="text-xs text-[#AEC9E8]">
                  Up to 60-month terms available.
                </span>
              </div>
            </div>
          </div>

          {/* Right: The ApexShield Advantage */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
                The ApexShield Standard
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33] leading-tight">
                Built Around Quality. <br />Backed by Absolute Trust.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We started ApexShield because homeowners were tired of fly-by-night storm chasers who vanish after the first downpour. We build roofs that outlive mortgages.
              </p>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-5 pt-1">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center text-[#F97316] shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                    Factory-Certified Master Craftsmen
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    No sub-contracted casual labor. Our dedicated full-time technicians are GAF &amp; CertainTeed Master Elite credentialed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center text-[#F97316] shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                    Pristine Yard &amp; Flowerbed Protection
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Every bush, flower bed, and A/C condenser is protected with heavy-duty netting. We run quad-pass rolling magnets so zero nails harm pets or tires.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center text-[#F97316] shadow-sm">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                    Locked-In, Guaranteed Itemized Estimates
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    No surprise price jumps midway through tear-off. What we quote on day one is exactly what you pay on final sign-off.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex-shrink-0 flex items-center justify-center text-[#F97316] shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                    Dedicated Live Concierge &amp; Photo Feed
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Receive real-time WhatsApp or SMS photo updates throughout install day so you know exactly how your roof decking is being sealed.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-base shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Experience the Difference — Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
