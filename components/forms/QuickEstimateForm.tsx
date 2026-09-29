'use client';

import React, { useState } from 'react';
import {
  Wrench,
  MapPin,
  Calendar,
  Lock,
  CheckCircle2,
  ChevronDown,
  Loader2,
} from 'lucide-react';

interface QuickEstimateFormProps {
  id?: string;
  className?: string;
}

export function QuickEstimateForm({ id = 'quick-estimate-form', className = '' }: QuickEstimateFormProps) {
  const [service, setService] = useState('replacement');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Within 15 Mins');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      setError('Please enter your property street address');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setError('Please provide a valid phone number so our inspector can reach you');
      return;
    }

    setError('');
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className={`relative bg-white rounded-xl p-6 sm:p-8 shadow-2xl text-slate-800 ${className}`} id={id}>
      {/* Subtle safety-orange accent top strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F97316] rounded-t-xl"></div>

      <div className="flex items-center justify-between pb-5 border-b border-slate-100">
        <div>
          <span className="font-label-sm text-xs uppercase tracking-wider text-[#F97316] font-bold block">
            Zero Cost • Instant Booking
          </span>
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-[#0B1F33] mt-0.5">
            Get Your Free Roof Estimate
          </h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#F97316] flex-shrink-0">
          <Wrench className="w-5 h-5" />
        </div>
      </div>

      {submitted ? (
        <div className="py-8 text-center flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-[#0B1F33]">Request Confirmed!</h4>
          <p className="text-sm text-slate-600 max-w-xs">
            A senior ApexShield inspector has been notified for{' '}
            <strong className="text-slate-900">{address}</strong>. We will call{' '}
            <strong className="text-slate-900">{phone}</strong> {preferredTime.toLowerCase()}.
          </p>
          <div className="mt-4 p-3 rounded-lg bg-slate-50 text-xs text-slate-500 border border-slate-200">
            Inspection window held • Texas Certified Inspector #TX-84920
          </div>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setAddress('');
              setPhone('');
            }}
            className="mt-2 text-xs font-semibold text-[#F97316] hover:underline"
          >
            Submit another address
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-xs font-semibold text-slate-600" htmlFor="service-type">
              Service Needed
            </label>
            <div className="relative">
              <select
                id="service-type"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F97316] cursor-pointer"
              >
                <option value="replacement">Full Roof Replacement</option>
                <option value="repair">Roof Leak &amp; Repair</option>
                <option value="storm">Storm &amp; Hail Damage Inspection</option>
                <option value="drone">Complimentary 4K Drone Inspection</option>
                <option value="commercial">Commercial Roofing Assessment</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3.5 top-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-xs font-semibold text-slate-600" htmlFor="street-address">
              Property Street Address
            </label>
            <div className="relative">
              <input
                id="street-address"
                type="text"
                placeholder="e.g. 7422 Spicewood Springs Rd, Austin"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full h-12 px-4 pl-10 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />
              <MapPin className="w-4 h-4 absolute left-3.5 top-4 text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-xs font-semibold text-slate-600" htmlFor="phone-number">
                Phone Number
              </label>
              <input
                id="phone-number"
                type="tel"
                placeholder="(555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-xs font-semibold text-slate-600" htmlFor="preferred-time">
                Preferred Contact
              </label>
              <div className="relative">
                <select
                  id="preferred-time"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full h-12 px-3 pr-8 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F97316] cursor-pointer"
                >
                  <option>Within 15 Mins</option>
                  <option>Today Afternoon</option>
                  <option>Tomorrow Morning</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 h-14 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg transition-transform transform active:scale-[0.99] disabled:opacity-75"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Calendar className="w-5 h-5" />
                <span>Schedule My Free Inspection</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 pt-2 text-center text-slate-500 text-xs">
            <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>No obligation. 100% Free Drone Inspection with 21-point report.</span>
          </div>
        </form>
      )}
    </div>
  );
}
