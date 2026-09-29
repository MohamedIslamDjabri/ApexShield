'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/constants/data';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
}

export function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about roof replacement, drone inspections, and insurance restoration.',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B1F33] text-xs font-bold border border-blue-100 mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#F97316]" />
          <span>Homeowner Knowledge Center</span>
        </div>
        <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33]">
          {title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isOpen ? 'bg-[#F97316] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
                  <p className="pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
