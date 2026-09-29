import React from 'react';
import Link from 'next/link';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { REVIEWS } from '@/constants/data';

export function ReviewsSection() {
  const displayedReviews = REVIEWS.slice(0, 4);

  return (
    <section className="w-full bg-[#EFF4FF] py-20 lg:py-24 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="flex text-[#F97316]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <span className="font-label-md text-sm text-[#0B1F33] font-bold">
                4.9/5 Average Rating (650+ Reviews)
              </span>
            </div>
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              Trusted by Your Neighbors Across Texas
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1.5 rounded bg-white text-slate-700 font-semibold text-xs shadow-sm border border-slate-200">
              Google Verified
            </span>
            <span className="px-3 py-1.5 rounded bg-white text-slate-700 font-semibold text-xs shadow-sm border border-slate-200">
              Angi Certified Top Pro
            </span>
            <span className="px-3 py-1.5 rounded bg-white text-slate-700 font-semibold text-xs shadow-sm border border-slate-200">
              BBB A+ Rated
            </span>
          </div>
        </div>

        {/* 4 Authentic Reviews in Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between gap-6 border border-slate-200"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#F97316]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {rev.source}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#C4E0FF] text-[#0B1F33] font-bold flex items-center justify-center text-sm flex-shrink-0">
                  {rev.initials}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm text-[#0B1F33]">
                      {rev.author}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-xs text-slate-500">
                    {rev.location} • {rev.serviceType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F33] hover:text-[#F97316] transition-colors"
          >
            <span>Read all 650+ verified homeowner reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
