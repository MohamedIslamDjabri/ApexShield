'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FINANCING_PLANS, SITE_CONFIG } from '@/constants/data';
import { FinalCTABanner } from '@/components/sections/FinalCTABanner';
import { FAQSection } from '@/components/sections/FAQSection';
import {
  CreditCard,
  DollarSign,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function FinancingPage() {
  const [projectCost, setProjectCost] = useState<number>(14000);
  const [selectedTerm, setSelectedTerm] = useState<number>(60); // months

  // Calculation helper
  const calculateMonthly = (cost: number, months: number) => {
    if (months === 12) {
      return Math.round(cost / 12);
    }
    const annualRate = months === 60 ? 0.0799 : 0.0899;
    const monthlyRate = annualRate / 12;
    const payment =
      (cost * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(payment);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#CFE5FF] text-xs font-bold mb-4 border border-white/10">
              <DollarSign className="w-4 h-4 text-[#F97316]" />
              <span>0% APR &amp; Zero Down Options Available</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              A Premium Roof Shouldn&apos;t Drain Your Savings.
            </h1>
            <p className="text-lg text-[#AEC9E8] mt-4 leading-relaxed">
              We offer flexible, transparent financing options tailored to Austin homeowners. Fast 60-second electronic approvals without impacting your credit score.
            </p>
          </div>
        </div>
      </section>

      {/* Financing Plans Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FINANCING_PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`bg-white rounded-2xl p-8 border flex flex-col justify-between shadow-sm relative transition-all hover:shadow-xl ${
                plan.recommended
                  ? 'border-[#F97316] ring-2 ring-[#F97316]/20'
                  : 'border-slate-200'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 right-6 bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {plan.term} Plan
                </span>
                <h3 className="font-headline-sm text-2xl font-bold text-[#0B1F33] mt-1">
                  {plan.title}
                </h3>
                <div className="my-4">
                  <span className="font-display text-4xl font-extrabold text-[#F97316]">
                    {plan.apr}
                  </span>
                  <span className="text-xs text-slate-500 ml-2 font-semibold">
                    ({plan.monthlyPer10k} per $10k)
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact#quote"
                className={`w-full py-3 rounded-lg text-center font-semibold text-sm transition-all ${
                  plan.recommended
                    ? 'bg-[#F97316] hover:bg-[#EA580C] text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                Apply In 60 Seconds
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Monthly Payment Calculator */}
      <section className="w-full bg-[#EFF4FF] py-20 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#E5EEFF] text-[#F97316] flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                  Estimate Your Investment
                </span>
                <h3 className="font-headline-sm text-2xl font-bold text-[#0B1F33]">
                  Interactive Roof Payment Calculator
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex justify-between items-center text-sm font-bold text-slate-800 mb-2">
                    <span>Estimated Project Total:</span>
                    <span className="text-lg text-[#F97316]">
                      ${projectCost.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="35000"
                    step="500"
                    value={projectCost}
                    onChange={(e) => setProjectCost(Number(e.target.value))}
                    className="w-full accent-[#F97316] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>$5,000 (Repairs)</span>
                    <span>$18,000 (Standard)</span>
                    <span>$35,000 (Large Estate)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2">
                    Select Financing Term:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { months: 12, label: '12 Mo (0% APR)' },
                      { months: 60, label: '60 Mo (Low)' },
                      { months: 84, label: '84 Mo ($0 Down)' },
                    ].map((term) => (
                      <button
                        key={term.months}
                        type="button"
                        onClick={() => setSelectedTerm(term.months)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                          selectedTerm === term.months
                            ? 'bg-[#0B1F33] text-white border-[#0B1F33]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {term.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-[#0B1F33] text-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#AEC9E8] uppercase tracking-wider block">
                    Estimated Monthly Payment
                  </span>
                  <div className="my-2">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                      ${calculateMonthly(projectCost, selectedTerm)}
                    </span>
                    <span className="text-xs text-[#AEC9E8] ml-1">/ month</span>
                  </div>
                  <p className="text-xs text-[#AEC9E8] mt-2">
                    Based on ${projectCost.toLocaleString()} financed over {selectedTerm} months. Subject to credit approval.
                  </p>
                </div>

                <Link
                  href="/contact#quote"
                  className="mt-6 w-full py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-xs text-center uppercase tracking-wider shadow-md transition-all"
                >
                  Pre-Qualify for this payment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Deductible Guidance */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-amber-50 text-[#F97316] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-headline-sm text-lg font-bold text-[#0B1F33]">
              Need Help With Your Texas Insurance Deductible?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Under Texas House Bill 2102, contractors are legally prohibited from waiving or rebating insurance deductibles. ApexShield offers flexible 0% APR financing specifically designed to spread your deductible payment across 12 manageable monthly installments.
            </p>
          </div>
        </div>
      </section>

      <FinalCTABanner />
    </div>
  );
}
