import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/constants/data';
import { Phone, MapPin, ArrowRight } from 'lucide-react';

export function ServiceAreasSection() {
  const cities = [
    'Austin, TX',
    'Round Rock',
    'Cedar Park',
    'Georgetown',
    'Pflugerville',
    'Lakeway',
    'Leander',
    'Buda & Kyle',
    'Dripping Springs',
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Cities Coverage */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
              Local Presence
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#0B1F33]">
              Proudly Serving Central Texas Homeowners
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our certified inspectors and mobile repair units are dispatched from three Central Texas hubs, guaranteeing rapid emergency response and prompt inspection turnarounds.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            {cities.map((city) => (
              <Link
                key={city}
                href="/service-areas"
                className="flex items-center gap-2 p-3 rounded-lg bg-[#EFF4FF] hover:bg-[#DCE9FF] text-[#0B1F33] font-semibold text-xs sm:text-sm border border-blue-100 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
                <span>{city}</span>
              </Link>
            ))}
          </div>

          {/* Phone Dispatch Callout */}
          <div className="p-6 rounded-xl bg-[#E5EEFF] border border-blue-200 flex items-center justify-between gap-4 mt-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F97316] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-headline-sm text-base sm:text-lg font-bold text-[#0B1F33]">
                  Live in one of these areas?
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Drone inspectors are in your neighborhood today.
                </p>
              </div>
            </div>

            <a
              href={SITE_CONFIG.phoneRaw}
              className="hidden sm:inline-flex items-center gap-1.5 font-bold text-sm text-[#F97316] hover:underline"
            >
              <span>{SITE_CONFIG.phone}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: Central Texas Coverage Map Container */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-200 border border-slate-300">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx4zxH1bMd6fQaKeACsRqCSLUmJoUBK28rw32DXcgbZctesNAgsZT_r9dxlL0tQJ_AN374D8ktRHplWww2VGb48ltt6pkLU-oqvP5wE8CdEZRoyfRw4t5C5E8dwXI8VsUz2pT1PstqC1GOlR_8C16un3xADI0cWhNb9gETFhRX2Nxl544vlxBsfvd8Xl84Tiu6j_JDyPeqgaaGFIGhB0S7vsYvKbeu4pUYNTbya5MPXXhsB7qSCjAU"
              alt="ApexShield Central Texas Service Area Map covering Austin, Round Rock, Cedar Park"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Map Overlay Badges */}
            <div className="absolute inset-0 bg-[#0B1F33]/20 pointer-events-none"></div>

            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2.5 text-[#0B1F33] font-semibold text-xs sm:text-sm border border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-pulse"></span>
              <span>Central Texas Dispatch Zone Active</span>
            </div>

            <div className="absolute bottom-5 right-5 bg-[#0B1F33] text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 border border-white/10">
              <MapPin className="w-6 h-6 text-[#CFE5FF] flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Headquarters</span>
                <span className="text-[11px] text-[#AEC9E8]">{SITE_CONFIG.fullAddress}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
