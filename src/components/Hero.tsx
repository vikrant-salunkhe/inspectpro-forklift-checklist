'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import HeroChecklistCard from './HeroChecklistCard';

interface HeroProps {
  onOpenChecklistModal?: () => void;
}

/**
 * Hero Component
 * Recreates the primary hero section from the reference design.
 * 
 * Features:
 * - Eyebrow category badge ('FORKLIFT SAFETY')
 * - High-impact typography matching SaaS conversion standards
 * - Dual call-to-action buttons (Primary: Get the Checklist, Secondary: See What's Included)
 * - Microcopy indicating daily readiness
 * - Embedded interactive HeroChecklistCard with backdrop accent
 */
export default function Hero({ onOpenChecklistModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-28">
      {/* Background Subtle Gradient Atmosphere */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-transparent pointer-events-none -z-20" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Category / Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Forklift Safety</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              Forklift Inspection <br className="hidden sm:inline" />
              Checklist
            </h1>

            {/* Subheadline Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              This checklist helps your teams perform consistent inspections and identify issues before their equipment is used.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <button
                type="button"
                onClick={onOpenChecklistModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/25 hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Get the Checklist</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="#detailed-checklist"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-xs hover:border-slate-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>See What&apos;s Included</span>
              </Link>
            </div>

            {/* Reassurance Micro-Copy */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ready-to-use checklist for daily forklift inspections</span>
            </div>
          </div>

          {/* Right Column: Interactive Card Preview */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none pt-4 lg:pt-0">
            <HeroChecklistCard />
          </div>

        </div>
      </div>
    </section>
  );
}
