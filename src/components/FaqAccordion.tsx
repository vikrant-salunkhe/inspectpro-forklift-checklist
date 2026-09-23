'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What should be checked during a forklift inspection?',
    answer:
      'A thorough inspection includes two primary stages: (1) Visual Pre-start Inspection covering forks, mast, lift chains, tires, wheels, hydraulic lines, fluid levels, and safety guards; and (2) Operational Check with engine running covering service brakes, parking brake, steering response, warning devices (horn, reverse buzzer), and mast lift/tilt controls.',
  },
  {
    id: 'faq-2',
    question: 'How often should a forklift be inspected?',
    answer:
      'According to OSHA standard 29 CFR 1910.178(q)(7), industrial forklifts must be inspected at least daily before being placed into service. For 24/7 or continuous operations involving multiple work shifts, forklifts must be inspected prior to the start of each individual shift.',
  },
  {
    id: 'faq-3',
    question: 'Can this checklist be used for daily inspections?',
    answer:
      'Yes, absolutely. This digital checklist is purpose-built for daily pre-shift safety verification, shift-to-shift operator accountability, and automated digital audit trails required by insurance and safety regulators.',
  },
  {
    id: 'faq-4',
    question: 'What should I do if I find a defect?',
    answer:
      'If any defect, mechanical issue, or safety hazard is detected, the forklift must be immediately tagged out of service ("Lockout / Tagout"), reported to facility maintenance, and under no circumstances operated until certified repairs are completed.',
  },
  {
    id: 'faq-5',
    question: 'Can I customize the checklist?',
    answer:
      'Yes. InspectPro allows teams to customize checkpoints to match specific forklift models (electric, propane, diesel, reach trucks), facility guidelines, site-specific safety hazards, and mandatory photo upload requirements.',
  },
];

/**
 * FaqAccordion Component
 * Recreates the FAQ section featured prominently in both mobile and desktop layouts.
 * 
 * Features:
 * - Pre-expanded first question matching the mobile reference mock
 * - Smooth accessible collapsible accordion with proper ARIA attributes
 * - Keyboard accessible (Enter / Space / Tab navigation)
 */
export default function FaqAccordion() {
  // Pre-expand first question matching the reference mock
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/70"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/60">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Everything you need to know about forklift safety standards and digital inspection workflows.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={`accordion-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-50/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`accordion-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`accordion-btn-${item.id}`}
                    className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in-50 duration-150"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
