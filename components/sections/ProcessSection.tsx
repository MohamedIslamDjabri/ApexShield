import React from 'react';
import Link from 'next/link';
import {
  Plane,
  FileText,
  Hammer,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Free 21-Point Drone Scan',
      desc: 'We deploy automated 4K aerial photography and conduct an internal attic crawl to assess moisture barriers, deck rot, and ventilation airflow.',
      duration: 'Duration: 45 Mins',
      icon: Plane,
    },
    {
      number: '02',
      title: 'Itemized Proposal & 3D Design',
      desc: 'Review multiple shingle styles and color renderings on a 3D digital model of your house. Clear pricing breakdowns with zero surprise fees.',
      duration: 'Same-Day Turnaround',
      icon: FileText,
    },
    {
      number: '03',
      title: '1-Day Precision Tear-Off & Install',
      desc: 'Old layers are removed down to fresh wood. We lay heavy synthetic underlayment, ice/water shields, and precision nail every architectural shingle.',
      duration: 'Usually 1 Business Day',
      icon: Hammer,
    },
    {
      number: '04',
      title: 'Magnetic Sweep & Warranty',
      desc: 'We sweep your property 4 times with commercial magnets. We do a final walkthrough together and hand over your certified 50-year warranty documents.',
      duration: 'Zero Debris Left Behind',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="w-full bg-[#0B1F33] text-white py-20 lg:py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#4E6077]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
            Engineered For Flawless Results
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-white">
            A Better Roof Starts With a Better Replacement Process
          </h2>
          <p className="text-base sm:text-lg text-[#AEC9E8] leading-relaxed">
            Replacing your roof doesn&apos;t have to disrupt your life. We have refined our 4-step installation protocol over two decades for maximum efficiency and architectural perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 flex flex-col justify-between gap-8 relative group hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#F97316]/80 leading-none">
                      {step.number}
                    </span>
                    <Icon className="w-7 h-7 text-[#CFE5FF]" />
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#AEC9E8] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="text-xs font-semibold text-[#CFE5FF] flex items-center gap-1.5 pt-4 border-t border-white/10">
                  <Clock className="w-4 h-4 text-[#F97316]" />
                  <span>{step.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action banner under steps */}
        <div className="mt-14 lg:mt-16 p-8 rounded-xl bg-white/10 backdrop-blur border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h4 className="font-headline-sm text-xl sm:text-2xl font-bold text-white">
              Ready to inspect your roof before the next Texas hailstorm?
            </h4>
            <p className="text-sm sm:text-base text-[#AEC9E8]">
              Book your complimentary 4K drone assessment today. No pressure, no hassle.
            </p>
          </div>
          <Link
            href="/roof-inspection#book"
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm flex-shrink-0 transition-transform transform hover:-translate-y-0.5 shadow-lg"
          >
            <span>Start Your Free Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
