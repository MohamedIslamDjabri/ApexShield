import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICE_AREAS, SITE_CONFIG } from '@/constants/data';
import { FinalCTABanner } from '@/components/sections/FinalCTABanner';
import {
  MapPin,
  Clock,
  ShieldCheck,
  PhoneCall,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas | ApexShield Roofing Central Texas',
  description:
    'ApexShield proudly serves Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, Leander, Buda, and Dripping Springs with fast emergency response.',
};

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
              Rapid Local Dispatch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              Proudly Serving Central Texas Homeowners &amp; Estates.
            </h1>
            <p className="text-lg text-[#AEC9E8] mt-4 leading-relaxed">
              With three strategic dispatch hubs across Williamson, Travis, and Hays counties, ApexShield guarantees prompt drone inspections and 60-minute emergency storm tarping.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Live Dispatch Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              Coverage Radius
            </span>
            <h2 className="font-headline-xl text-3xl font-bold text-[#0B1F33]">
              Three Regional Operations Hubs
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never make homeowners wait weeks for an inspection. Our mobile drone assessment units are continuously stationed across the I-35 and MoPac corridors.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#EFF4FF] border border-blue-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B1F33]">Central Austin Headquarters</h4>
                  <p className="text-xs text-slate-600">4820 Research Blvd, Austin TX 78759</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#EFF4FF] border border-blue-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B1F33]">North Williamson County Hub</h4>
                  <p className="text-xs text-slate-600">Serving Round Rock, Georgetown, Cedar Park, Leander</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#EFF4FF] border border-blue-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B1F33]">South Corridor &amp; Hill Country Hub</h4>
                  <p className="text-xs text-slate-600">Serving Lakeway, Buda, Kyle, Dripping Springs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-slate-200 border border-slate-300">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx4zxH1bMd6fQaKeACsRqCSLUmJoUBK28rw32DXcgbZctesNAgsZT_r9dxlL0tQJ_AN374D8ktRHplWww2VGb48ltt6pkLU-oqvP5wE8CdEZRoyfRw4t5C5E8dwXI8VsUz2pT1PstqC1GOlR_8C16un3xADI0cWhNb9gETFhRX2Nxl544vlxBsfvd8Xl84Tiu6j_JDyPeqgaaGFIGhB0S7vsYvKbeu4pUYNTbya5MPXXhsB7qSCjAU"
                alt="ApexShield Central Texas Service Area Map"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow font-semibold text-xs text-[#0B1F33] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-pulse"></span>
                <span>Active Field Crews: 14 Teams Dispatched</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Service Areas Grid */}
      <section className="w-full bg-[#EFF4FF] py-20 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              Municipal Coverage
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33] mt-1">
              Select Your Neighborhood
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every city in Central Texas has unique municipal wind-resistance codes and HOA guidelines. Our inspectors understand every local requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.name}
                id={area.slug}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                      {area.county}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {area.responseTime}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33] mt-2">
                    {area.name} Roofing
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Zip Codes Served:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.zipCodes.map((zip) => (
                        <span
                          key={zip}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {area.activeCrews} crews in rotation
                  </span>
                  <Link
                    href={`/contact?area=${encodeURIComponent(area.name)}`}
                    className="text-xs font-bold text-[#F97316] hover:underline flex items-center gap-1"
                  >
                    <span>Request Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTABanner />
    </div>
  );
}
