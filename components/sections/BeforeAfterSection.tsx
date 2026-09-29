'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MoveHorizontal, CheckCircle2, AlertCircle } from 'lucide-react';

export function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percentage);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
            Proven Transformations
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33]">
            See the Difference Quality Work Makes
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Explore recent roofing upgrades across Greater Austin. From faded 3-tab storm-damaged roofs to state-of-the-art impact-resistant luxury shingles and metal.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5EEFF] text-[#0B1F33] font-semibold text-xs border border-blue-200">
            Class 4 Impact Certified
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5EEFF] text-[#0B1F33] font-semibold text-xs border border-blue-200">
            Austin Local
          </span>
        </div>
      </div>

      {/* Interactive Before & After Draggable Slider Module */}
      <div className="mb-14 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              Interactive Comparison
            </span>
            <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33]">
              Hail-Damaged Substrate vs. ApexShield Architectural Overhaul
            </h3>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
              <AlertCircle className="w-3.5 h-3.5" />
              Before: 18-Yr Hail Pitted
            </span>
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
              <CheckCircle2 className="w-3.5 h-3.5" />
              After: GAF Timberline HDZ
            </span>
          </div>
        </div>

        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerMove={handlePointerMove}
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden select-none cursor-ew-resize bg-slate-900 shadow-inner touch-none"
        >
          {/* AFTER Image (Full background) */}
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtKNsmHTqUIqtZrJUxUtI-ZyoiaifDPJzPBrileKn5oAwHkuN9ZQEG3B6wps2cEZL3CRsc2UeEGICXid0TFTp_1jReYIYTzIfA-Rk2JEjpY4ugHAe6NtUpTax27SbrF6Br995JqOia9xUPcuCVjk0U9kAqgqYq6XnEbaJUNYUjZKMsQ220eH0PfxzwQy7D3JKaNHw6jeaRLQr7gJVMBo68LwEh4-Gmify1KRsFkmym-5HJ9HzgRzWd"
            alt="After: Pristine architectural shingle replacement in Austin, TX"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />

          {/* BEFORE Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative w-full h-full aspect-[16/9] sm:aspect-[21/9]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBme3HRP8Qwkr8wud1R_UVrtDV8-N1ENyRRh9i_UJA-RUey_RolfM2oe0cS9soLBm0QW9fqDd41AjpOCmXZVfdtzT-1YwXH4R2DLyjfohFks2J1ffSyBqyfhpKWpeXCUWJYuJFmxJ0lCFXY1akYbkKN0FRSHwtlcLXyLo6b12BDlTsJ7qdWzReBMDNLBfgaCFmSv33x0kXGhqJ6ZkF6uNZNfnxNYi8wy78uWM6KpOLwhX2clQ7yNkyS"
                alt="Before: Worn roof before ApexShield restoration"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover filter contrast-125 saturate-50 brightness-90"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>

          {/* Draggable Divider Line & Knob */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B1F33] border-2 border-white text-white shadow-xl flex items-center justify-center">
              <MoveHorizontal className="w-5 h-5 text-[#F97316]" />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/75 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded z-10">
            BEFORE (Pitted 3-Tab)
          </div>
          <div className="absolute top-4 right-4 bg-[#F97316] text-white text-xs font-bold px-3 py-1.5 rounded shadow z-10">
            AFTER (ApexShield Timberline HDZ)
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-3">
          Drag slider left or right to inspect before and after craftsmanship
        </p>
      </div>

      {/* 3 Projects Side-by-Side Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Project 1 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col justify-between border border-slate-200">
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtKNsmHTqUIqtZrJUxUtI-ZyoiaifDPJzPBrileKn5oAwHkuN9ZQEG3B6wps2cEZL3CRsc2UeEGICXid0TFTp_1jReYIYTzIfA-Rk2JEjpY4ugHAe6NtUpTax27SbrF6Br995JqOia9xUPcuCVjk0U9kAqgqYq6XnEbaJUNYUjZKMsQ220eH0PfxzwQy7D3JKaNHw6jeaRLQr7gJVMBo68LwEh4-Gmify1KRsFkmym-5HJ9HzgRzWd"
              alt="Architectural Shingle Upgrade in Davenport Ranch, Austin TX"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#0B1F33]/85 backdrop-blur text-white px-3 py-1 rounded text-xs font-semibold">
              Austin, TX • Davenport Ranch
            </div>
            <div className="absolute bottom-3 right-3 bg-[#F97316] text-white px-2.5 py-1 rounded text-xs font-bold shadow">
              Completed in 1 Day
            </div>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33]">
              Architectural Shingle Upgrade
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Replaced 18-year-old hail-pitted 3-tab shingles with GAF Timberline HDZ in Charcoal. Includes continuous ridge vent and lifetime algae guard.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Material: Architectural Shingle</span>
              <span className="text-[#F97316] font-bold">130 MPH Wind Rated</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col justify-between border border-slate-200">
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbX6OVRR_ut_-lnnfzcwFo5vxKVKA97ECjIylef1vROAIeRHLxukcEJstIj7XTUGkS8exTjXCD5ZL923dLm5uL8-Ikr1k1d0GGPExjGNJRK7RXfakwoOtMQ4sBQSBvSmADvKgv8uW-RRqWXwM1tNQwKQTluphmPf7WMIafeMepGzhlnzrDOJZ6bfzNnfHAltCtwuLb8BMxpPM_Cv3rSafCBtMGg8FNiXX0bobgWb4L0byps7h44nsH"
              alt="Hailstorm Damage Restoration in Forest Creek, Round Rock TX"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#0B1F33]/85 backdrop-blur text-white px-3 py-1 rounded text-xs font-semibold">
              Round Rock, TX • Forest Creek
            </div>
            <div className="absolute bottom-3 right-3 bg-[#46617C] text-white px-2.5 py-1 rounded text-xs font-bold shadow">
              100% Insurance Covered
            </div>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33]">
              Hailstorm Damage Restoration
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Catastrophic spring hailstorm restoration. ApexShield worked hand-in-hand with the homeowner&apos;s insurance to secure complete decking and shingle replacement.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Material: Owens Corning Duration</span>
              <span className="text-[#F97316] font-bold">Zero Out of Pocket</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col justify-between border border-slate-200">
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR66DvOV8d0NEdViAdw3Vs84if0imFCKSIgYrp-5FGhYS8h5C5scfmmXP4pJuKpLYLO6gIb9krTyMRgXd4hUONUSTPvoFUGJ3AxiRDw3Ih-8Ce2IVS9CDeaj0iaZsp_GRFLB_OBxOXDG8cTVaOH3A6HP922ACAWFZFLLmwvhwADlj_2inilwgIO1S66CEmEE8TxGT0xTQcrgA6pd39PvwBmdYfgiAvFJUOG1iBTwarYqgMmNbOP-uT"
              alt="Standing Seam Metal Roof in Westlake Hills TX"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#0B1F33]/85 backdrop-blur text-white px-3 py-1 rounded text-xs font-semibold">
              Westlake Hills, TX
            </div>
            <div className="absolute bottom-3 right-3 bg-[#F97316] text-white px-2.5 py-1 rounded text-xs font-bold shadow">
              Architectural Metal
            </div>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33]">
              Standing Seam Metal Roof
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Engineered 24-gauge matte black standing seam metal roof for exceptional fire resistance, maximum reflectivity, and 70+ year operational lifespan.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Material: 24-Ga Galvalume Metal</span>
              <span className="text-[#F97316] font-bold">Class A Fire Rated</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#E5EEFF] hover:bg-[#DCE9FF] text-[#0B1F33] font-semibold text-sm transition-colors border border-blue-200"
        >
          <span>View Full Portfolio of 120+ Central Texas Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
