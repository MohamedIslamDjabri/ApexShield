'use client';

import React, { useState } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  Clock,
} from 'lucide-react';

interface ContactFormProps {
  defaultService?: string;
  className?: string;
}

export function ContactForm({ defaultService = 'Roof Replacement', className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    service: defaultService,
    contactMethod: 'Phone Call',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'Roof Replacement',
    'Roof Repair',
    'Roof Inspection',
    'Storm Damage',
    'Emergency Roofing',
    'Roof Maintenance',
    'Other / Commercial',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError('Please provide a valid phone number');
      return;
    }
    if (!formData.address.trim()) {
      setError('Please provide your property address');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200/80 ${className}`}>
      {submitted ? (
        <div className="py-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-headline-lg text-2xl font-bold text-[#0B1F33]">
            Inspection Request Confirmed!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mt-2">
            Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. An ApexShield Central Texas Project Manager will reach out via <strong className="text-slate-900">{formData.contactMethod}</strong> shortly to coordinate your complimentary 21-point drone inspection.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left w-full max-w-md text-xs text-slate-600 space-y-1">
            <div className="flex justify-between">
              <span className="font-semibold text-slate-800">Address:</span>
              <span>{formData.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-800">Selected Service:</span>
              <span>{formData.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-800">Direct Contact:</span>
              <span>{formData.phone}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                address: '',
                service: defaultService,
                contactMethod: 'Phone Call',
                message: '',
              });
            }}
            className="mt-6 text-sm font-semibold text-[#F97316] hover:underline"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-[#F97316]">
              Priority Response • Free Drone Inspection
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#0B1F33] mt-1">
              Request Your Free Roof Estimate
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Fill in your property details below. We typically reach out within 15 minutes during business hours.
            </p>
          </div>

          {error && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700" htmlFor="cf-name">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="cf-name"
                  type="text"
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700" htmlFor="cf-phone">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="cf-phone"
                  type="tel"
                  placeholder="(555) 245-7663"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700" htmlFor="cf-email">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="cf-email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
              </div>
            </div>

            {/* Property Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-700" htmlFor="cf-address">
                Property Street Address &amp; Zip <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="cf-address"
                  type="text"
                  placeholder="e.g. 4820 Research Blvd, Austin TX 78759"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
              </div>
            </div>
          </div>

          {/* Roofing Service */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700" htmlFor="cf-service">
              Roofing Service Needed
            </label>
            <select
              id="cf-service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full h-12 px-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            >
              {services.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Contact Method */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-700">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Phone Call', 'Text / SMS', 'Email'].map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setFormData({ ...formData, contactMethod: method })}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    formData.contactMethod === method
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700" htmlFor="cf-message">
              Project Details or Storm Damage Notes (Optional)
            </label>
            <div className="relative">
              <textarea
                id="cf-message"
                rows={3}
                placeholder="Tell us about leaks, missing shingles, hail history, or any specific concerns..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3.5 pl-10 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#F97316] resize-none"
              ></textarea>
              <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-1 h-14 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.99] disabled:opacity-75"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Calendar className="w-5 h-5" />
                <span>Submit Priority Estimate Request</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-4 text-slate-500 text-xs text-center pt-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" />
              <span>100% Free Drone Inspection</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F97316]" />
              <span>15-Minute Response</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
