import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE_CONFIG } from '@/constants/data';
import { QuickEstimateForm } from '@/components/forms/QuickEstimateForm';
import { FAQSection } from '@/components/sections/FAQSection';
import {
  Plane,
  Camera,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Eye,
  AlertCircle,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free 4K Drone Roof Inspection | ApexShield Austin TX',
  description:
    'Schedule your 100% free 21-point aerial drone roof inspection. Zero scuff damage, high-resolution hail mapping, and insurance-ready PDF reports delivered in 2 hours.',
};

export default function RoofInspectionPage() {
  const checklist = [
    'Hail impact bruising and granule loss mapping',
    'Wind-lifted shingles and broken seal tabs',
    'Ridge cap and hip shingle deterioration',
    'Valley water channel and metal rust inspection',
    'Chimney cricket, flashing, and mortar cracks',
    'Pipe boot rubber collar ultraviolet decay',
    'Skylight perimeter rubber gasket waterproofing',
    'Fascia board and soffit moisture rot detection',
    'Gutter pitch, seam integrity, and downspout clearance',
    'Attic internal moisture barriers and ventilation airflow',
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#CFE5FF] text-xs font-bold w-fit border border-white/10">
                <Plane className="w-4 h-4 text-[#F97316]" />
                <span>FAA Part 107 Certified Commercial Remote Pilots</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                100% Free 4K Drone Roof Inspection. Zero Obligation.
              </h1>
              <p className="text-lg text-[#AEC9E8] leading-relaxed">
                Walking on aging shingles breaks fragile seals and scuffs off protective granules. Our high-resolution optical drone captures over 80 macro photos of your roof slopes safely and accurately.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#CFE5FF] pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                  <span>No Foot-Traffic Shingle Damage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                  <span>Insurance-Grade 21-Point PDF</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                  <span>Completed in 45 Minutes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5" id="book">
              <QuickEstimateForm />
            </div>
          </div>
        </div>
      </section>

      {/* 21-Point Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              Comprehensive Engineering
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              What Our 21-Point Inspection Examines
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We leave no stone unturned. Our drone pilots scan every square foot of your roofing surface while our senior technician conducts an interior attic moisture scan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#EFF4FF] border border-blue-100 flex items-center gap-3 mt-4">
              <FileText className="w-6 h-6 text-[#F97316] flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#0B1F33]">
                  Delivered Digitally to Your Phone
                </p>
                <p className="text-xs text-slate-600">
                  You receive an interactive web report and downloadable PDF with high-resolution photographic proof.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBme3HRP8Qwkr8wud1R_UVrtDV8-N1ENyRRh9i_UJA-RUey_RolfM2oe0cS9soLBm0QW9fqDd41AjpOCmXZVfdtzT-1YwXH4R2DLyjfohFks2J1ffSyBqyfhpKWpeXCUWJYuJFmxJ0lCFXY1akYbkKN0FRSHwtlcLXyLo6b12BDlTsJ7qdWzReBMDNLBfgaCFmSv33x0kXGhqJ6ZkF6uNZNfnxNYi8wy78uWM6KpOLwhX2clQ7yNkyS"
                alt="4K aerial drone photography of Texas estate roof"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-[#F97316]" />
                <span>4K Optical Zoom Sensor Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Drone Inspection FAQ" />
    </div>
  );
}
