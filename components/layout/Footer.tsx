import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/data';
import { Logo } from '@/components/ui/Logo';
import { MapPin, Phone, Clock, Shield, Award, CheckCircle2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#0B1F33] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Logo variant="light" />

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-1">
              Architectural luxury, uncompromising durability, and precision storm restoration. Texas homeowners and estate managers trust ApexShield for multi-decade warranty protection and precision installation.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#00050E] text-[#CFE5FF] text-xs font-semibold border border-slate-700">
                <Award className="w-3.5 h-3.5 text-[#F97316]" />
                GAF Master Elite
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#00050E] text-[#CFE5FF] text-xs font-semibold border border-slate-700">
                <Shield className="w-3.5 h-3.5 text-[#F97316]" />
                Owens Corning Platinum
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#00050E] text-[#CFE5FF] text-xs font-semibold border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />
                Class 4 Impact Certified
              </span>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-headline-sm text-base font-bold text-white tracking-wide">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              <li>
                <Link href="/roof-replacement" className="hover:text-white transition-colors">
                  Roof Replacement
                </Link>
              </li>
              <li>
                <Link href="/roof-repair" className="hover:text-white transition-colors">
                  Roof Repair &amp; Leak Detection
                </Link>
              </li>
              <li>
                <Link href="/roof-inspection" className="hover:text-white transition-colors">
                  Free 4K Drone Roof Inspection
                </Link>
              </li>
              <li>
                <Link href="/services#storm" className="hover:text-white transition-colors">
                  Storm Damage &amp; Hail Claims
                </Link>
              </li>
              <li>
                <Link href="/services#emergency" className="hover:text-white transition-colors">
                  24/7 Emergency Tarping
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="hover:text-white transition-colors">
                  Preventative Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors text-[#F97316] font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-headline-sm text-base font-bold text-white tracking-wide">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              <li>
                <Link href="/service-areas#austin" className="hover:text-white transition-colors">
                  Austin, TX
                </Link>
              </li>
              <li>
                <Link href="/service-areas#round-rock" className="hover:text-white transition-colors">
                  Round Rock
                </Link>
              </li>
              <li>
                <Link href="/service-areas#cedar-park" className="hover:text-white transition-colors">
                  Cedar Park
                </Link>
              </li>
              <li>
                <Link href="/service-areas#georgetown" className="hover:text-white transition-colors">
                  Georgetown
                </Link>
              </li>
              <li>
                <Link href="/service-areas#pflugerville" className="hover:text-white transition-colors">
                  Pflugerville
                </Link>
              </li>
              <li>
                <Link href="/service-areas#lakeway" className="hover:text-white transition-colors">
                  Lakeway
                </Link>
              </li>
              <li>
                <Link href="/service-areas#buda-kyle" className="hover:text-white transition-colors">
                  Buda &amp; Kyle
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-white transition-colors text-[#F97316] font-medium">
                  All Coverage Zones →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-headline-sm text-base font-bold text-white tracking-wide">
              Contact &amp; Hours
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                <span>{SITE_CONFIG.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                <a href={SITE_CONFIG.phoneRaw} className="hover:text-white font-semibold">
                  Direct: {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                <div>
                  <p>{SITE_CONFIG.hours}</p>
                  <p className="text-white font-semibold text-xs mt-0.5">
                    {SITE_CONFIG.emergencyHours}
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <span className="inline-block px-3 py-1.5 rounded bg-white/10 border border-white/15 text-white font-semibold text-xs">
                  Free In-Home Drone Estimates
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.legalName}. All Rights Reserved. Texas License #{SITE_CONFIG.license}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About ApexShield
            </Link>
            <Link href="/financing" className="hover:text-white transition-colors">
              0% APR Financing
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link href="/contact#quote" className="hover:text-white transition-colors">
              Lifetime Craftsmanship Warranty
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
