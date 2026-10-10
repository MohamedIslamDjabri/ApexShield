'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG, NAV_LINKS } from '@/constants/data';
import { Logo } from '@/components/ui/Logo';
import { AIChatDrawer } from '@/components/ai/AIChatDrawer';
import {
  PhoneCall,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Calendar,
  Sparkles,
} from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const serviceSublinks = [
    { label: 'Roof Replacement', href: '/roof-replacement', desc: 'Class 4 impact shingles & metal' },
    { label: 'Roof Repair & Leaks', href: '/roof-repair', desc: 'Thermal leak diagnosis & flashings' },
    { label: 'Drone Roof Inspection', href: '/roof-inspection', desc: 'Free 21-point 4K aerial report' },
    { label: 'All Services Overview', href: '/services', desc: 'Storm damage, emergency & maintenance' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-200">
      {/* MAIN NAVIGATION BAR */}
      <div
        className={`h-20 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                pathname === '/'
                  ? 'bg-slate-100 text-[#0B1F33] font-semibold'
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                pathname === '/about'
                  ? 'bg-slate-100 text-[#0B1F33] font-semibold'
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                  pathname.startsWith('/roof-') || pathname === '/services'
                    ? 'bg-slate-100 text-[#0B1F33] font-semibold'
                    : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#F97316]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                    {serviceSublinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={`block p-3 rounded-lg transition-colors ${
                          pathname === item.href
                            ? 'bg-orange-50 text-[#F97316]'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="font-semibold text-sm text-[#0B1F33]">{item.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                pathname === '/projects'
                  ? 'bg-slate-100 text-[#0B1F33] font-semibold'
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Projects
            </Link>

            <Link
              href="/reviews"
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                pathname === '/reviews'
                  ? 'bg-slate-100 text-[#0B1F33] font-semibold'
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Reviews
            </Link>

            <Link
              href="/service-areas"
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                pathname === '/service-areas'
                  ? 'bg-slate-100 text-[#0B1F33] font-semibold'
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Service Areas
            </Link>

            <Link
              href="/financing"
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                pathname === '/financing'
                  ? 'bg-slate-100 text-[#0B1F33] font-semibold'
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Financing
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                pathname === '/contact'
                  ? 'bg-slate-100 text-[#0B1F33] font-semibold'
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* AI Concierge Trigger */}
            <button
              type="button"
              onClick={() => setAiDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-orange-50 hover:bg-orange-100 text-[#0B1F33] font-bold text-xs border border-orange-200 shadow-xs transition-colors"
              aria-label="Open AI Booking Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span className="hidden sm:inline">AI Concierge</span>
              <span className="sm:hidden">AI</span>
            </button>

            {/* Clickable Phone button */}
            <a
              href={SITE_CONFIG.phoneRaw}
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border-2 border-slate-300 text-[#0B1F33] font-semibold text-xs xl:text-sm hover:border-[#0B1F33] hover:bg-slate-50 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F97316]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            {/* Primary CTA */}
            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#0B1F33] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white/98 backdrop-blur-xl border-b border-slate-200 z-40 overflow-y-auto px-4 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
              Navigation
            </div>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-base transition-colors ${
                  pathname === item.href
                    ? 'bg-orange-50 text-[#F97316] font-semibold'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </Link>
            ))}

            {/* Mobile Contact & Action Box */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  setAiDrawerOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-orange-50 border border-orange-200 text-[#0B1F33] font-bold text-sm shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#F97316]" />
                <span>Launch AI Chat &amp; Voice Booking</span>
              </button>

              <a
                href={SITE_CONFIG.phoneRaw}
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-lg bg-[#0B1F33] text-white font-semibold text-base shadow-sm"
              >
                <PhoneCall className="w-5 h-5 text-[#F97316]" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>

              <Link
                href="/contact#quote"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-base shadow-md"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Free 4K Drone Inspection</span>
              </Link>

              <div className="text-center text-xs text-slate-500 pt-2 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F97316]" />
                <span>{SITE_CONFIG.license} • 24/7 Emergency Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Assistant Modal */}
      <AIChatDrawer
        isOpen={aiDrawerOpen}
        onClose={() => setAiDrawerOpen(false)}
      />
    </header>
  );
}
