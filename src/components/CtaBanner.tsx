'use client';

import React from 'react';
import { ArrowRight, MessageSquareText } from 'lucide-react';

interface CtaBannerProps {
  onOpenChecklistModal?: () => void;
}

/**
 * CtaBanner Component
 * Recreates the high-impact dark navy call-to-action banner.
 * 
 * Features:
 * - Rich dark navy background (#071529) matching the original design
 * - White primary button and ghost text button
 * - Decorative subtle gradient glow
 */
export default function CtaBanner({ onOpenChecklistModal }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#071529] text-white py-16 sm:py-20 lg:py-24">
      {/* Subtle Background Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          Ready to simplify your forklift inspections?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Start with a structured checklist your team can use consistently to catch defects early and guarantee workplace compliance.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenChecklistModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-lg shadow-black/20 hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Get the Checklist</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </button>

          <button
            type="button"
            onClick={onOpenChecklistModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <MessageSquareText className="w-4 h-4" />
            <span className="underline underline-offset-4 decoration-slate-500 hover:decoration-white">
              Talk to our team
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
