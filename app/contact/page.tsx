import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE_CONFIG } from '@/constants/data';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Navigation,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Free Estimate | ApexShield Roofing Austin TX',
  description:
    'Contact ApexShield Roofing for residential roof replacement, leak repairs, and free 4K drone inspections in Austin, Round Rock, and Central Texas.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
              Get in Touch With Our Local Team
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              Request Your Free Estimate or Speak With an Inspector.
            </h1>
            <p className="text-lg text-[#AEC9E8] mt-4 leading-relaxed">
              We respond to all inspection inquiries within 15 minutes during business hours. For active storm leaks, our emergency dispatch units are available 24 hours a day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full" id="quote">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33] mb-6">
                Direct Contact Details
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#F97316] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Primary Phone</span>
                    <a
                      href={SITE_CONFIG.phoneRaw}
                      className="font-bold text-[#0B1F33] text-base hover:text-[#F97316] transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <span className="text-xs text-emerald-600 block font-medium">
                      Live dispatch available 24/7
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#F97316] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Email Inquiries</span>
                    <a
                      href={SITE_CONFIG.emailRaw}
                      className="font-semibold text-[#0B1F33] hover:text-[#F97316] transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#F97316] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Central Texas Headquarters</span>
                    <p className="font-semibold text-[#0B1F33]">
                      {SITE_CONFIG.fullAddress}
                    </p>
                    <span className="text-xs text-slate-500">
                      Texas License #{SITE_CONFIG.license}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] text-[#F97316] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Operating Hours</span>
                    <p className="font-semibold text-[#0B1F33]">{SITE_CONFIG.hours}</p>
                    <p className="text-xs text-[#F97316] font-bold mt-0.5">
                      {SITE_CONFIG.emergencyHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Map Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[16/10] bg-slate-200 border border-slate-300">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx4zxH1bMd6fQaKeACsRqCSLUmJoUBK28rw32DXcgbZctesNAgsZT_r9dxlL0tQJ_AN374D8ktRHplWww2VGb48ltt6pkLU-oqvP5wE8CdEZRoyfRw4t5C5E8dwXI8VsUz2pT1PstqC1GOlR_8C16un3xADI0cWhNb9gETFhRX2Nxl544vlxBsfvd8Xl84Tiu6j_JDyPeqgaaGFIGhB0S7vsYvKbeu4pUYNTbya5MPXXhsB7qSCjAU"
                alt="ApexShield Headquarters Location Map"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0B1F33]/20 pointer-events-none"></div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#0B1F33]">Research Blvd Facility</p>
                    <p className="text-[11px] text-slate-500">Austin, TX 78759</p>
                  </div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#0B1F33] text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Emergency Alert Callout */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                  Emergency Storm Damage?
                </h4>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  If tree branches or high winds have compromised your roof envelope, do not wait for an email response. Call our 24/7 hotline directly at{' '}
                  <a href={SITE_CONFIG.phoneRaw} className="font-bold underline">
                    {SITE_CONFIG.phone}
                  </a>{' '}
                  for immediate emergency tarping.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Full Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
