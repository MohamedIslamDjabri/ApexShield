'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { REVIEWS, SITE_CONFIG } from '@/constants/data';
import { FinalCTABanner } from '@/components/sections/FinalCTABanner';
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  Award,
  ShieldCheck,
} from 'lucide-react';

export const dynamic = 'force-static';

export default function ReviewsPage() {
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const filteredReviews =
    sourceFilter === 'all'
      ? REVIEWS
      : REVIEWS.filter((r) => r.source.toLowerCase() === sourceFilter.toLowerCase());

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-[#F97316]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#CFE5FF]">
                4.9 / 5.0 Rating (650+ Verified Reviews)
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              What Texas Homeowners Say About ApexShield.
            </h1>
            <p className="text-lg text-[#AEC9E8] mt-4 leading-relaxed">
              We take pride in every shingle we install, every lawn we protect, and every insurance claim we advocate for. Read genuine feedback from our clients across Central Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Review Ratings Distribution Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-[#0B1F33]">
              4.9
            </span>
            <div className="flex text-[#F97316] my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F97316] text-[#F97316]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Based on 650+ verified ratings
            </span>
            <button
              type="button"
              onClick={() => setShowReviewModal(true)}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Leave a Review
            </button>
          </div>

          <div className="md:col-span-8 flex flex-col gap-2.5">
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 font-bold text-slate-700">5 Star</span>
              <div className="flex-grow h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#F97316] rounded-full w-[96%]"></div>
              </div>
              <span className="w-10 text-right text-slate-500 font-semibold">96%</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 font-bold text-slate-700">4 Star</span>
              <div className="flex-grow h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#F97316]/70 rounded-full w-[4%]"></div>
              </div>
              <span className="w-10 text-right text-slate-500 font-semibold">4%</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="w-12 font-bold">3 Star</span>
              <div className="flex-grow h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-300 rounded-full w-[0%]"></div>
              </div>
              <span className="w-10 text-right font-semibold">0%</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="w-12 font-bold">2 Star</span>
              <div className="flex-grow h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-300 rounded-full w-[0%]"></div>
              </div>
              <span className="w-10 text-right font-semibold">0%</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="w-12 font-bold">1 Star</span>
              <div className="flex-grow h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-300 rounded-full w-[0%]"></div>
              </div>
              <span className="w-10 text-right font-semibold">0%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {['all', 'Google', 'Angi', 'BBB'].map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setSourceFilter(src)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                sourceFilter.toLowerCase() === src.toLowerCase()
                  ? 'bg-[#0B1F33] text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {src === 'all' ? 'All Reviews' : `${src} Verified`}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#F97316]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {rev.source} • {rev.date}
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
      </section>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => {
                setShowReviewModal(false);
                setReviewSubmitted(false);
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold"
            >
              ✕
            </button>

            {reviewSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-[#0B1F33]">Thank You!</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Your feedback helps neighbors find reliable roofing in Austin.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowReviewModal(false);
                    setReviewSubmitted(false);
                  }}
                  className="mt-4 px-4 py-2 bg-[#F97316] text-white text-xs font-semibold rounded-lg"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReviewSubmitted(true);
                }}
                className="flex flex-col gap-4"
              >
                <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33]">
                  Share Your Experience
                </h3>
                <p className="text-xs text-slate-500">
                  How was your roof replacement or repair with ApexShield?
                </p>

                <div className="flex gap-1 text-[#F97316]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#F97316] cursor-pointer" />
                  ))}
                </div>

                <input
                  type="text"
                  placeholder="Your Name (e.g. John D.)"
                  required
                  className="w-full h-11 px-3 rounded-lg border border-slate-200 text-xs"
                />
                <input
                  type="text"
                  placeholder="Neighborhood / City (e.g. Round Rock)"
                  required
                  className="w-full h-11 px-3 rounded-lg border border-slate-200 text-xs"
                />
                <textarea
                  rows={3}
                  placeholder="Write your review here..."
                  required
                  className="w-full p-3 rounded-lg border border-slate-200 text-xs resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#F97316] text-white font-semibold text-xs uppercase tracking-wider"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <FinalCTABanner />
    </div>
  );
}
