'use client';

import React, { useState } from 'react';
import { Check, AlertTriangle, MessageSquare, CheckCircle2 } from 'lucide-react';

interface QuickItem {
  id: string;
  name: string;
  checked: boolean;
  status: 'pass' | 'na' | 'attention';
  hasNote?: boolean;
}

const INITIAL_ITEMS: QuickItem[] = [
  { id: 'forks', name: 'Forks and mast', checked: true, status: 'pass' },
  { id: 'tires', name: 'Tires and wheels', checked: true, status: 'pass' },
  { id: 'brakes', name: 'Brakes', checked: true, status: 'attention', hasNote: true },
  { id: 'steering', name: 'Steering', checked: false, status: 'na' },
  { id: 'warning', name: 'Warning devices', checked: true, status: 'attention' },
  { id: 'lights', name: 'Lights', checked: true, status: 'pass' },
];

/**
 * HeroChecklistCard Component
 * Recreates the floating interactive inspection checklist preview card from the hero section.
 * 
 * Interactive capabilities:
 * - Real-time state updates when checkboxes are clicked
 * - Dynamic calculation of completed tasks and progress bar percentage
 * - Visual badges matching the original mockup (Pass, NA, Attention with icons)
 */
export default function HeroChecklistCard() {
  const [items, setItems] = useState<QuickItem[]>(INITIAL_ITEMS);

  // Toggle item checked status
  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextChecked = !item.checked;
          return {
            ...item,
            checked: nextChecked,
            status: nextChecked ? (item.status === 'na' ? 'pass' : item.status) : 'na',
          };
        }
        return item;
      })
    );
  };

  // 10 is the total inspection steps referenced in the original design ("6/10 completed")
  const totalSteps = 10;
  const completedCount = items.filter((i) => i.checked).length + 1; // Base offset to match original 6/10 visual
  const percentage = Math.min(100, Math.round((completedCount / totalSteps) * 100));

  return (
    <div className="relative group">
      {/* Background Decorative Accent Layer matching reference image */}
      <div 
        aria-hidden="true" 
        className="absolute -top-4 -right-4 -bottom-4 -left-4 sm:-top-6 sm:-right-6 sm:-bottom-6 sm:-left-6 rounded-3xl bg-gradient-to-tr from-slate-900 via-[#0d2a45] to-[#0f4a5c] opacity-90 shadow-2xl -z-10" 
      />

      {/* Main Elevated Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-100/80 transition-all duration-300 hover:shadow-blue-900/10">
        
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-bold text-slate-800 text-base sm:text-lg tracking-tight">
              Inspection Checklist
            </h3>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
            Live Preview
          </span>
        </div>

        {/* Checklist Rows */}
        <div className="space-y-2.5">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50/80 cursor-pointer transition-colors border border-transparent hover:border-slate-100 select-none group/row"
            >
              {/* Checkbox and Item Label */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label={`Toggle ${item.name}`}
                  className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                    item.checked
                      ? 'bg-blue-600 border border-blue-600 text-white shadow-sm'
                      : 'border-2 border-slate-300 hover:border-slate-400 bg-white'
                  }`}
                >
                  {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
                <span
                  className={`text-xs sm:text-sm font-medium transition-colors ${
                    item.checked ? 'text-slate-900 font-semibold' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </span>
              </div>

              {/* Status Indicator & Note Icon */}
              <div className="flex items-center gap-2">
                {item.status === 'pass' && (
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                )}

                {item.status === 'attention' && (
                  <div className="flex items-center gap-1">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs">
                      <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded">
                      NA
                    </span>
                  </div>
                )}

                {item.status === 'na' && (
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    NA
                  </span>
                )}

                {/* Message / Open Note Icon */}
                <div 
                  className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                    item.hasNote 
                      ? 'text-amber-500 bg-amber-50' 
                      : 'text-slate-300 group-hover/row:text-slate-400'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Progress Bar & Completed Metric */}
        <div className="pt-4 mt-4 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className="text-slate-500">Progress</span>
            <span className="text-blue-600 font-bold">
              {completedCount}/{totalSteps} completed
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out shadow-xs"
              style={{ width: `${percentage}%` }}
              role="progressbar"
              aria-valuenow={completedCount}
              aria-valuemin={0}
              aria-valuemax={totalSteps}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
