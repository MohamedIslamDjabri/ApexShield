'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Check,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from 'lucide-react';

export function FinalCTABanner() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 lg:pb-24 w-full">
      <div className="relative bg-[#0B1F33] rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 text-white border border-white/10">
        {/* Glow */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#F97316]/15 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#CFE5FF] w-fit text-xs font-bold border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#F97316]" />
              <span>100% Free • Zero Sales Pressure Guarantee</span>
            </div>

            <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready for a Roof That Weather Can&apos;t Shake?
            </h2>

            <p className="text-base sm:text-lg text-[#AEC9E8] max-w-xl leading-relaxed">
              Get an ultra-detailed 21-point photographic drone inspection, complete moisture assessment, and transparent itemized quote.
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-sm text-[#CFE5FF]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F97316]" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F97316]" />
                <span>Direct Insurance Claims Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F97316]" />
                <span>50-Year Non-Prorated Warranty</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-6 sm:p-8 text-slate-800 shadow-xl border border-slate-200">
              <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-[#0B1F33] mb-1">
                Request Free Estimate
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5">
                Fill in your contact information below for immediate priority scheduling.
              </p>

              {submitted ? (
                <div className="p-4 rounded-lg bg-green-50 text-green-800 text-xs sm:text-sm text-center flex flex-col items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                  <p className="font-bold">Priority request locked in!</p>
                  <p>A Central Texas manager will reach out immediately.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number (e.g. 555-245-7663)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />

                  <input
                    type="text"
                    placeholder="Zip Code (e.g. 78759)"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                    className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-1 py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.99] disabled:opacity-75"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Request Free Inspection</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    We respect your privacy. No spam. No automated robocalls.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
