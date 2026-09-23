'use client';

import React from 'react';
import { FileSearch, CheckCircle, ClipboardCheck } from 'lucide-react';

interface Step {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    stepNumber: '01',
    title: 'Choose your checklist',
    description: 'Select the inspection template tailored to your forklift type—counterbalance, reach truck, or order picker.',
    icon: FileSearch,
  },
  {
    stepNumber: '02',
    title: 'Complete the inspection',
    description: 'Complete the pre-operational walkaround step-by-step on any mobile phone, tablet, or rugged warehouse terminal.',
    icon: CheckCircle,
  },
  {
    stepNumber: '03',
    title: 'Record and act on findings',
    description: 'Instantly notify maintenance of detected faults, attach photo evidence, and log OSHA-compliant audit records.',
    icon: ClipboardCheck,
  },
];

/**
 * HowItWorks Component
 * Recreates the 3-step workflow section from the reference design.
 * 
 * Features:
 * - Numbered step indicators ('01 —', '02 —', '03 —')
 * - Minimalist step icons with responsive connected flow line
 * - Mobile-first responsive layout (stacked on mobile, 3-column with connectors on desktop)
 */
export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A frictionless three-step process built to make daily equipment inspections effortless.
          </p>
        </div>

        {/* 3-Step Process Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.stepNumber} 
                className="relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col items-start"
              >
                {/* Step Number & Connector Line */}
                <div className="flex items-center gap-2 mb-4 text-blue-600 font-extrabold text-xl tracking-tight">
                  <span>{step.stepNumber}</span>
                  <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
                </div>

                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                  <Icon className="w-5 h-5 stroke-[2.3]" />
                </div>

                {/* Step Title */}
                <h3 className="font-bold text-slate-900 text-lg mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Step Index Badge */}
                <div className="mt-5 pt-4 border-t border-slate-100 w-full flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>Step {idx + 1} of 3</span>
                  <span className="text-emerald-600 font-semibold">Ready to deploy</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
