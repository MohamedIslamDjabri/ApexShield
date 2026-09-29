import React from 'react';
import { SITE_CONFIG } from '@/constants/data';
import { QuickEstimateForm } from '@/components/forms/QuickEstimateForm';
import {
  CheckCircle2,
  Shield,
  Plane,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-[#0B1F33] text-white">
      {/* Background Image with Scrim */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBme3HRP8Qwkr8wud1R_UVrtDV8-N1ENyRRh9i_UJA-RUey_RolfM2oe0cS9soLBm0QW9fqDd41AjpOCmXZVfdtzT-1YwXH4R2DLyjfohFks2J1ffSyBqyfhpKWpeXCUWJYuJFmxJ0lCFXY1akYbkKN0FRSHwtlcLXyLo6b12BDlTsJ7qdWzReBMDNLBfgaCFmSv33x0kXGhqJ6ZkF6uNZNfnxNYi8wy78uWM6KpOLwhX2clQ7yNkyS')",
        }}
        aria-hidden="true"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00050E] via-[#0B1F33]/95 to-[#0B1F33]/70"></div>
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#F97316]/10 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Prop & Trust Hooks */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></span>
              <span className="font-label-sm text-xs text-[#CFE5FF] tracking-wide uppercase font-bold">
                Ranked #1 Residential Roofing Contractor in Central Texas
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] text-balance">
              Protect Your Home With a Roof{' '}
              <span className="text-[#CFE5FF]">Built to Last.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#AEC9E8] max-w-2xl leading-relaxed">
              Professional residential roofing, roof replacement, and repairs from a trusted local team with over 20 years of uncompromising structural craftsmanship.
            </p>

            {/* Micro-Trust Pillars */}
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-6 text-sm text-[#CFE5FF] pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                <span className="font-medium">Fast 15-Min Response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                <span className="font-medium">Fully Licensed &amp; Insured (#{SITE_CONFIG.license})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Plane className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                <span className="font-medium">100% Free Drone Estimates</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#quick-estimate"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-base shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={SITE_CONFIG.phoneRaw}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/15 transition-all"
              >
                <PhoneCall className="w-5 h-5 text-[#F97316]" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>

            {/* Real-Time Activity Ticker */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-[#46617C] border-2 border-[#0B1F33] flex items-center justify-center text-xs font-bold text-white shadow">
                  ATX
                </div>
                <div className="w-9 h-9 rounded-full bg-[#334E68] border-2 border-[#0B1F33] flex items-center justify-center text-xs font-bold text-white shadow">
                  RR
                </div>
                <div className="w-9 h-9 rounded-full bg-[#F97316] border-2 border-[#0B1F33] flex items-center justify-center text-xs font-bold text-white shadow">
                  GT
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#AEC9E8]">
                <strong className="text-white font-semibold">14 crews dispatched today</strong> across Williamson &amp; Travis County
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Quick Estimate Card */}
          <div className="lg:col-span-5" id="quick-estimate">
            <QuickEstimateForm />
          </div>
        </div>
      </div>
    </section>
  );
}
