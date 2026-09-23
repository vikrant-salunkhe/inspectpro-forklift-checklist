'use client';

import React from 'react';
import { ClipboardList, AlertTriangle, FolderArchive, Workflow } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
}

const FEATURES: FeatureItem[] = [
  {
    id: 'standardize',
    title: 'Standardize inspections',
    description: 'Standardize inspection protocols, instructions, and checklist items across your entire equipment fleet and facility sites.',
    icon: ClipboardList,
    accentColor: 'text-teal-600 bg-teal-50 border-teal-200/70',
  },
  {
    id: 'identify-early',
    title: 'Identify issues early',
    description: 'Detect mechanical wear and hydraulic leaks early to prevent costly emergency repairs, downtime, and dangerous workplace accidents.',
    icon: AlertTriangle,
    accentColor: 'text-amber-600 bg-amber-50 border-amber-200/70',
  },
  {
    id: 'records-organized',
    title: 'Keep inspection records organized',
    description: 'Keep historical pre-shift records permanently indexed, fully digital, searchable, and always ready for OSHA safety audits.',
    icon: FolderArchive,
    accentColor: 'text-blue-600 bg-blue-50 border-blue-200/70',
  },
  {
    id: 'simple-process',
    title: 'Give teams a simple process to follow',
    description: 'Provide forklift operators with a clean, frictionless workflow on smartphones and tablets that promotes consistent daily compliance.',
    icon: Workflow,
    accentColor: 'text-indigo-600 bg-indigo-50 border-indigo-200/70',
  },
];

/**
 * FeaturesGrid Component
 * Recreates the "Make every forklift inspection consistent" section.
 * 
 * Features:
 * - 4-column responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
 * - Custom styled icons with subtle background badges matching the original design
 * - Crisp SaaS typography and soft hover elevation
 */
export default function FeaturesGrid() {
  return (
    <section 
      id="features" 
      className="py-16 md:py-24 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Make every forklift inspection consistent
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ensure forklift inspections are consistent and inspection procedures are followed across your equipment operators.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col items-start group"
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-transform duration-200 group-hover:scale-105 ${feature.accentColor}`}>
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-lg mb-2.5 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
