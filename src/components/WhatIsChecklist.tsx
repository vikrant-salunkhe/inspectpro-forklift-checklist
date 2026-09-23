'use client';

import React from 'react';
import { Info, ShieldAlert, CheckCircle2 } from 'lucide-react';

/**
 * WhatIsChecklist Component
 * Educational section explaining the definition, purpose, and regulatory mandate
 * behind forklift pre-operation inspections.
 * 
 * Layout:
 * - Left column: Comprehensive explanation of inspection routines and workplace safety.
 * - Right column: Prominent highlighted callout card highlighting OSHA compliance and downtime reduction.
 */
export default function WhatIsChecklist() {
  return (
    <section 
      id="what-is-checklist" 
      className="py-16 md:py-24 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What is a Forklift Inspection Checklist?
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Educational Content */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            <p>
              A <strong className="text-slate-900 font-semibold">Forklift Inspection Checklist</strong> is a standardized safety protocol completed by operators prior to using powered industrial trucks on every shift. It systematically verifies the physical condition and mechanical functionality of the vehicle.
            </p>
            <p>
              Forklift inspections prevent catastrophic equipment failure, safeguard warehouse personnel, and maintain thorough digital maintenance logs required by regulatory authorities.
            </p>

            {/* Core Pillars Bullet Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Pre-operational safety verification</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Identification of mechanical wear</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Auditable digital compliance log</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Preventative maintenance flagging</span>
              </div>
            </div>
          </div>

          {/* Right Column: Highlighted Regulatory Callout Box */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-blue-50/90 to-sky-50/60 rounded-2xl p-6 sm:p-7 border border-blue-200/80 shadow-sm relative overflow-hidden">
              
              {/* Decorative Subtle Corner Glow */}
              <div 
                aria-hidden="true" 
                className="absolute -top-12 -right-12 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" 
              />

              <div className="flex items-start gap-4">
                {/* Info Icon with circular container */}
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  <Info className="w-5 h-5 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    Key Importance & Regulatory Mandate
                  </h3>
                  <p className="text-sm text-slate-700 leading-normal">
                    Adhering to strict daily inspections ensures ongoing compliance with <strong className="text-blue-900 font-semibold">OSHA (29 CFR 1910.178)</strong> safety standards and drastically reduces unexpected equipment breakdowns, protecting both workers and bottom-line productivity.
                  </p>
                </div>
              </div>

              {/* Status Badge Indicator */}
              <div className="mt-5 pt-4 border-t border-blue-200/60 flex items-center justify-between text-xs font-semibold text-blue-800">
                <span className="flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-blue-700" />
                  Mandatory pre-shift requirement
                </span>
                <span className="bg-white/80 px-2.5 py-1 rounded-md border border-blue-200 shadow-2xs">
                  Zero Tolerance Safety
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
