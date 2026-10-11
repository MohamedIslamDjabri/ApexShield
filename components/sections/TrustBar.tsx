'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';
import {
  ShieldCheck,
  Plane,
  Award,
  Clock,
  Star,
} from 'lucide-react';

export function TrustBar() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full -mt-10 lg:-mt-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white rounded-xl shadow-xl p-6 lg:p-8 border border-slate-200/80"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
          {/* Item 1 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-1 pr-4">
            <div className="flex items-center gap-2 text-[#F97316]">
              <ShieldCheck className="w-5 h-5 flex-shrink-0" />
              <span className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                100% Insured
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
              $2M liability coverage &amp; workman&apos;s comp for every worker.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-1 pr-4">
            <div className="flex items-center gap-2 text-[#F97316]">
              <Plane className="w-5 h-5 flex-shrink-0" />
              <span className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                4K Drone Scans
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
              Comprehensive 21-point aerial photographic wear report.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-1 pr-4">
            <div className="flex items-center gap-2 text-[#F97316]">
              <Award className="w-5 h-5 flex-shrink-0" />
              <span className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                Master Elite
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
              Top 2% factory-certified Owens Corning &amp; GAF contractor.
            </p>
          </motion.div>

          {/* Item 4 */}
          <motion.div variants={itemVariants} className="flex flex-col gap-1 pr-4">
            <div className="flex items-center gap-2 text-[#F97316]">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <span className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                50-Yr Warranty
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
              Non-prorated transferrable manufacturer &amp; labor guarantee.
            </p>
          </motion.div>

          {/* Rating */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 md:col-span-1 flex flex-col gap-1 bg-[#EFF4FF] p-3 rounded-lg border border-blue-100 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-1.5 text-[#F97316]">
              <div className="flex text-[#F97316]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#0B1F33]">4.9 / 5.0</span>
            </div>
            <p className="text-xs text-slate-600 leading-tight">
              Over 650+ verified reviews on Google, Angi, &amp; BBB A+.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
