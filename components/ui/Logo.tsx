import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="ApexShield Roofing Home">
      {/* Precision Shield Icon Mark */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
        >
          {/* Shield Outer Perimeter */}
          <path
            d="M22 3L40 12V24C40 33.5 31.5 40 22 42.5C12.5 40 4 33.5 4 24V12L22 3Z"
            fill={isLight ? '#00050E' : '#0B1F33'}
            stroke="#F97316"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Architectural Roof Gable Ridge Mark */}
          <path
            d="M12 20L22 10L32 20"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center Reinforcement Spine */}
          <path
            d="M22 18V30"
            stroke="#F97316"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          {/* Anchor Chevrons */}
          <path
            d="M16 28L22 32L28 28"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-headline-sm text-[21px] sm:text-[23px] font-extrabold tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-[#00050E]'
          }`}
        >
          Apex<span className="text-[#F97316]">Shield</span>
        </span>
        <span
          className={`font-label-sm text-[9.5px] uppercase tracking-[0.2em] font-bold mt-1 ${
            isLight ? 'text-[#94A3B8]' : 'text-[#46617C]'
          }`}
        >
          Roofing Contractors
        </span>
      </div>
    </Link>
  );
}
