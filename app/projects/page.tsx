'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, SITE_CONFIG } from '@/constants/data';
import { ProjectItem } from '@/types';
import { FinalCTABanner } from '@/components/sections/FinalCTABanner';
import {
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Filter,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects (6)' },
    { id: 'replacement', label: 'Roof Replacement' },
    { id: 'metal', label: 'Standing Seam Metal' },
    { id: 'repair', label: 'Precision Repairs' },
    { id: 'storm', label: 'Storm Restoration' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#F97316] font-bold">
              Proven Central Texas Craftsmanship
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
              Our Recent Roofing Projects &amp; Transformations.
            </h1>
            <p className="text-lg text-[#AEC9E8] mt-4 leading-relaxed">
              Browse our portfolio of completed residential installations throughout Austin, Round Rock, Westlake Hills, Cedar Park, and Georgetown.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#F97316] flex-shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 hidden sm:inline">
              Filter:
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0B1F33] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#0B1F33]/85 backdrop-blur text-white px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>
                    {project.location} • {project.neighborhood}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#F97316] text-white px-2.5 py-1 rounded text-xs font-bold shadow">
                  {project.completionTime}
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-grow justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {project.categoryLabel}
                  </span>
                  <h3 className="font-headline-sm text-xl font-bold text-[#0B1F33] mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="truncate pr-2 font-medium">
                      {project.material}
                    </span>
                    <span className="text-[#F97316] font-bold whitespace-nowrap">
                      {project.ratingOrStat}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-2 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0B1F33] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Project Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Specs Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              {selectedProject.categoryLabel}
            </span>
            <h3 className="font-headline-sm text-2xl font-bold text-[#0B1F33] mt-1">
              {selectedProject.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Location: {selectedProject.location} • {selectedProject.neighborhood}
            </p>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden my-4 bg-slate-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 650px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-500 font-semibold block">Material:</span>
                <span className="font-bold text-[#0B1F33]">{selectedProject.material}</span>
              </div>
              <div>
                <span className="text-slate-500 font-semibold block">Rating / Stat:</span>
                <span className="font-bold text-[#F97316]">{selectedProject.ratingOrStat}</span>
              </div>
              <div>
                <span className="text-slate-500 font-semibold block">Turnaround:</span>
                <span className="font-bold text-[#0B1F33]">{selectedProject.completionTime}</span>
              </div>
              <div>
                <span className="text-slate-500 font-semibold block">Warranty:</span>
                <span className="font-bold text-[#0B1F33]">50-Year Non-Prorated</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-lg text-slate-600 text-xs font-semibold hover:bg-slate-100"
              >
                Close
              </button>
              <Link
                href="/contact#quote"
                className="px-5 py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-semibold shadow-sm"
              >
                Get Similar Quote
              </Link>
            </div>
          </div>
        </div>
      )}

      <FinalCTABanner />
    </div>
  );
}
