'use client';

import React from 'react';

/**
 * TrustLogos Component
 * Displays social proof logos from industry leaders that rely on InspectPro.
 * 
 * Features:
 * - Bespoke SVG logomarks matching the 5 reference companies:
 *   1. Apex Logistics
 *   2. Sterling Manufacturing
 *   3. BuildRight Construction
 *   4. Global Warehousing Solutions
 *   5. Prime Distribution
 * - Fully responsive with flexible wrapping and smooth hover transitions
 */
export default function TrustLogos() {
  return (
    <section 
      aria-label="Trusted by industry leaders"
      className="py-12 border-y border-slate-200/70 bg-white/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Trusted by teams that need consistent inspections
        </p>

        {/* Logos Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          
          {/* 1. Apex Logistics */}
          <div className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group">
            <svg 
              className="w-7 h-7 text-slate-900 group-hover:text-blue-600 transition-colors" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 20L12 4l9 16H3z" />
              <path d="M8 14h8" />
            </svg>
            <div className="text-left leading-tight">
              <span className="block font-black text-sm tracking-tight text-slate-900 group-hover:text-blue-600">APEX</span>
              <span className="block text-[10px] font-semibold tracking-wider text-slate-500 uppercase">Logistics</span>
            </div>
          </div>

          {/* 2. Sterling Manufacturing */}
          <div className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group">
            <svg 
              className="w-7 h-7 text-slate-900 group-hover:text-blue-600 transition-colors" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M7 15l5-6 5 6" />
            </svg>
            <div className="text-left leading-tight">
              <span className="block font-black text-sm tracking-tight text-slate-900 group-hover:text-blue-600">STERLING</span>
              <span className="block text-[10px] font-semibold tracking-wider text-slate-500 uppercase">Manufacturing</span>
            </div>
          </div>

          {/* 3. BuildRight Construction */}
          <div className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group">
            <svg 
              className="w-7 h-7 text-slate-900 group-hover:text-blue-600 transition-colors" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 21h18" />
              <path d="M5 21V9l4-4 4 4v12" />
              <path d="M15 21V12l4-2v11" />
            </svg>
            <div className="text-left leading-tight">
              <span className="block font-black text-sm tracking-tight text-slate-900 group-hover:text-blue-600">BUILDRIGHT</span>
              <span className="block text-[10px] font-semibold tracking-wider text-slate-500 uppercase">Construction</span>
            </div>
          </div>

          {/* 4. Global Warehousing Solutions */}
          <div className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group">
            <svg 
              className="w-7 h-7 text-slate-900 group-hover:text-blue-600 transition-colors" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3.6 9h16.8" />
              <path d="M3.6 15h16.8" />
              <path d="M12 3a15 15 0 0 1 0 18" />
              <path d="M12 3a15 15 0 0 0 0 18" />
            </svg>
            <div className="text-left leading-tight">
              <span className="block font-black text-xs sm:text-sm tracking-tight text-slate-900 group-hover:text-blue-600">GLOBAL</span>
              <span className="block text-[10px] font-semibold tracking-wider text-slate-500 uppercase">Warehousing</span>
            </div>
          </div>

          {/* 5. Prime Distribution */}
          <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2.5 text-slate-700 hover:text-blue-600 transition-colors group">
            <svg 
              className="w-7 h-7 text-slate-900 group-hover:text-blue-600 transition-colors" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 4h8a5 5 0 0 1 0 10H5z" />
              <path d="M5 14v6" />
              <path d="M13 14l5 6" />
            </svg>
            <div className="text-left leading-tight">
              <span className="block font-black text-sm tracking-tight text-slate-900 group-hover:text-blue-600">PRIME</span>
              <span className="block text-[10px] font-semibold tracking-wider text-slate-500 uppercase">Distribution</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
