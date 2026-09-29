'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/data';
import { Phone, Calendar } from 'lucide-react';

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={SITE_CONFIG.phoneRaw}
          className="flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#0B1F33] text-white text-xs sm:text-sm font-semibold active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4 text-[#F97316]" />
          <span>Call Now</span>
        </a>

        <Link
          href="/contact#quote"
          className="flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#F97316] text-white text-xs sm:text-sm font-semibold shadow-md active:scale-[0.98] transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Free Estimate</span>
        </Link>
      </div>
    </div>
  );
}
