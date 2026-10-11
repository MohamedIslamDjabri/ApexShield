'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'motion/react';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { REVIEWS } from '@/constants/data';

export function ReviewsSection() {
  const displayedReviews = REVIEWS.slice(0, 4);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full bg-[#EFF4FF] py-20 lg:py-24 border-y border-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14"
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="flex text-[#F97316]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
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
        </motion.div>

        {/* 4 Authentic Reviews in Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayedReviews.map((rev) => (
            <motion.div
              key={rev.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between gap-6 border border-slate-200"
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F33] hover:text-[#F97316] transition-colors"
            >
              <span>Read all 650+ verified homeowner reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
