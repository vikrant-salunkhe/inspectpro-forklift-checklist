'use client';

import React from 'react';
import { Warehouse, HardHat, Factory, CheckCircle2 } from 'lucide-react';

interface Industry {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
}

const INDUSTRIES: Industry[] = [
  {
    id: 'warehouse',
    title: 'Warehouse operations',
    description: 'Ensure reach trucks, order pickers, and counterbalance forklifts operate safely across fast-paced logistics distribution hubs.',
    icon: Warehouse,
    highlights: ['Narrow-aisle safety', 'Shift handovers', 'Battery & charging checks'],
  },
  {
    id: 'construction',
    title: 'Construction sites',
    description: 'Rugged terrain forklifts and telehandlers face punishing outdoor environments where daily pre-start inspections prevent job site halts.',
    icon: HardHat,
    highlights: ['Rough-terrain stability', 'Hydraulic hose wear', 'Load moment indicators'],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing facilities',
    description: 'Continuous assembly lines require dependable material handling. Prevent supply interruptions and protect plant floor employees.',
    icon: Factory,
    highlights: ['Plant floor traffic', 'Heavy raw material transport', '24/7 multi-shift logs'],
  },
];

/**
 * IndustryCards Component
 * Recreates the "Built for teams that inspect equipment every day" section.
 * 
 * Features:
 * - 3-column responsive card layout matching the reference design
 * - Industry-specific iconography (Warehouse, HardHat, Factory)
 * - Concrete operational use cases and key safety checkpoints
 */
export default function IndustryCards() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Built for teams that inspect equipment every day
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Tailored workflows designed for frontline operators in high-throughput material handling environments.
          </p>
        </div>

        {/* 3 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-5 border-t border-slate-100 space-y-2">
                  {ind.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
