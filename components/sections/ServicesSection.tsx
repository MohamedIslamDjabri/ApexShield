'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'motion/react';
import { SITE_CONFIG } from '@/constants/data';
import {
  Home,
  Wrench,
  Plane,
  CloudLightning,
  AlertTriangle,
  Shield,
  ArrowRight,
  Headphones,
} from 'lucide-react';

export function ServicesSection() {
  const serviceCards = [
    {
      title: 'Roof Replacement',
      desc: 'Architectural shingles, standing seam metal, and Spanish barrel tile. Master-certified installations with 50-year transferrable manufacturer guarantees.',
      cta: 'Explore Replacement Options',
      href: '/roof-replacement',
      icon: Home,
    },
    {
      title: 'Roof Repair & Leak Detection',
      desc: 'Missing shingles, damaged chimney flashing, rusted valleys, and pipe boot degradation stopped dead in their tracks before structural decking rots.',
      cta: 'Schedule Leak Diagnosis',
      href: '/roof-repair',
      icon: Wrench,
    },
    {
      title: 'Free Drone Roof Inspection',
      desc: 'Ultra-detailed 4K optical inspections that safely map hail impacts, granular loss, and valley integrity without scuffing delicate shingle granules.',
      cta: 'Book Free Drone Flight',
      href: '/roof-inspection',
      icon: Plane,
    },
    {
      title: 'Storm & Hail Damage Claim',
      desc: 'Direct insurance advocate representation. We meet your claims adjuster on the roof with photographic evidence to ensure 100% fair payout.',
      cta: 'Get Insurance Assistance',
      href: '/services#storm',
      icon: CloudLightning,
    },
    {
      title: '24/7 Emergency Tarping',
      desc: 'Rapid 60-minute dispatch across Austin when high winds or fallen branches puncture your attic envelope. Prevent catastrophic structural water losses.',
      cta: 'Call Emergency Dispatch',
      href: '/services#emergency',
      icon: AlertTriangle,
    },
    {
      title: 'Preventative Roof Shield Care',
      desc: 'Scheduled annual maintenance, thermal attic inspections, valley clearance, and silicone reseals that prolong the service lifespan of your roof by 8-10 years.',
      cta: 'View Maintenance Plans',
      href: '/services#maintenance',
      icon: Shield,
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14"
      >
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
            Comprehensive Roofing Solutions
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33]">
            Roofing Services You Can Count On
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From micro-leak detection to whole-home architectural slate replacements, our certified crews engineer every roof to withstand severe Texas thermal cycles, 90mph winds, and softball hail.
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={SITE_CONFIG.phoneRaw}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#E5EEFF] hover:bg-[#DCE9FF] text-[#0B1F33] font-semibold text-sm transition-colors w-fit border border-blue-200"
        >
          <Headphones className="w-4 h-4 text-[#F97316]" />
          <span>Talk to a Project Specialist</span>
        </motion.a>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {serviceCards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                href={card.href}
                className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-slate-200/80 hover:border-slate-300 h-full"
              >
                {/* Top Accent Strip on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F97316] transition-colors"></div>

                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#EFF4FF] group-hover:bg-[#F97316] text-[#0B1F33] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110 duration-200" />
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33] group-hover:text-[#F97316] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[#0B1F33] font-semibold text-sm group-hover:text-[#F97316]">
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
