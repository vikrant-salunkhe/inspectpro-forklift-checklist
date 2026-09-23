'use client';

import React, { useState, useMemo } from 'react';
import { 
  Check, 
  AlertTriangle, 
  Minus, 
  Flag, 
  RotateCcw, 
  Filter, 
  CheckCircle2, 
  AlertCircle,
  FileCheck2
} from 'lucide-react';
import { ChecklistItem, InspectionStatus } from '@/types/checklist';
import { INITIAL_CHECKLIST_ITEMS } from '@/data/checklistData';

interface DetailedChecklistProps {
  onOpenChecklistModal?: () => void;
}

type FilterOption = 'all' | 'pass' | 'fail' | 'na';

/**
 * DetailedChecklist Component
 * The central interactive table recreation of "What's included in the checklist?".
 * 
 * Production features:
 * - Dynamic state management for Pass / Fail / NA selections per item
 * - Inline note taking & "Need maintenance" alert flags
 * - Real-time inspection metrics (Pass rate, Flags, NA count)
 * - Category filtering (All, Passed, Needs Attention, NA)
 * - Reset and Quick Export triggers
 */
export default function DetailedChecklist({ onOpenChecklistModal }: DetailedChecklistProps) {
  const [items, setItems] = useState<ChecklistItem[]>(INITIAL_CHECKLIST_ITEMS);
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  // Handle status toggle (Pass, Fail, NA)
  const handleStatusChange = (id: string, newStatus: InspectionStatus) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const isFailing = newStatus === 'fail';
          return {
            ...item,
            status: newStatus,
            hasMaintenanceAlert: isFailing,
            note: isFailing && !item.note ? 'Flagged during pre-shift check' : item.note,
          };
        }
        return item;
      })
    );
  };

  // Handle note change
  const handleNoteChange = (id: string, noteValue: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, note: noteValue } : item
      )
    );
  };

  // Toggle maintenance flag
  const toggleMaintenanceFlag = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, hasMaintenanceAlert: !item.hasMaintenanceAlert } : item
      )
    );
  };

  // Reset checklist to initial state
  const handleReset = () => {
    setItems(INITIAL_CHECKLIST_ITEMS);
  };

  // Calculate live summary metrics
  const stats = useMemo(() => {
    const total = items.length;
    const passed = items.filter((i) => i.status === 'pass').length;
    const failed = items.filter((i) => i.status === 'fail').length;
    const na = items.filter((i) => i.status === 'na').length;
    const completionPercent = Math.round(((passed + failed + na) / total) * 100);

    return { total, passed, failed, na, completionPercent };
  }, [items]);

  // Filter items based on active tab
  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return items;
    return items.filter((item) => item.status === activeFilter);
  }, [items, activeFilter]);

  return (
    <section 
      id="detailed-checklist" 
      className="py-16 md:py-24 bg-slate-50/80 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            What&apos;s included in the checklist?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A comprehensive, digital-ready standard operating procedure covering mechanical, hydraulic, and electrical safety components.
          </p>
        </div>

        {/* Inspection Stats Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-slate-900">{stats.total}</div>
              <div className="text-xs text-slate-500 font-medium">Total Checkpoints</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-emerald-700">{stats.passed}</div>
              <div className="text-xs text-slate-500 font-medium">Passed</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-amber-700">{stats.failed}</div>
              <div className="text-xs text-slate-500 font-medium">Action Needed</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center font-bold">
              <Minus className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-slate-700">{stats.na}</div>
              <div className="text-xs text-slate-500 font-medium">Not Applicable</div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Reset Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs overflow-x-auto w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Items ({stats.total})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('pass')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'pass'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Passed ({stats.passed})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('fail')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'fail'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Flags ({stats.failed})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('na')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'na'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              NA ({stats.na})
            </button>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset State</span>
            </button>
            <button
              type="button"
              onClick={onOpenChecklistModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
            >
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Detailed Interactive Table Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden divide-y divide-slate-100">
          
          {/* Table Header (Hidden on small mobile, visible sm+) */}
          <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-6 py-3.5 bg-slate-50/90 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <div className="col-span-5">Checklist Item</div>
            <div className="col-span-3 text-center">Status Evaluation</div>
            <div className="col-span-4">Notes & Maintenance Action</div>
          </div>

          {/* Rows */}
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:px-6 sm:py-5 hover:bg-slate-50/60 transition-colors flex flex-col sm:grid sm:grid-cols-12 gap-4 items-start sm:items-center"
            >
              {/* Column 1: Checkbox & Details */}
              <div className="sm:col-span-5 flex items-start gap-3 w-full">
                <input
                  type="checkbox"
                  checked={item.status === 'pass'}
                  onChange={() =>
                    handleStatusChange(
                      item.id,
                      item.status === 'pass' ? 'na' : 'pass'
                    )
                  }
                  aria-label={`Mark ${item.name} as passed`}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {item.name}
                    </span>
                    {item.category && (
                      <span className="hidden md:inline-block text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Column 2: Status Toggle Pills */}
              <div className="sm:col-span-3 w-full sm:w-auto flex items-center justify-start sm:justify-center gap-1.5">
                {/* Pass Pill */}
                <button
                  type="button"
                  onClick={() => handleStatusChange(item.id, 'pass')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    item.status === 'pass'
                      ? 'bg-emerald-600 text-white shadow-xs scale-105'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/60'
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Pass</span>
                </button>

                {/* Fail Pill */}
                <button
                  type="button"
                  onClick={() => handleStatusChange(item.id, 'fail')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    item.status === 'fail'
                      ? 'bg-amber-600 text-white shadow-xs scale-105'
                      : 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200/60'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Fail</span>
                </button>

                {/* NA Pill */}
                <button
                  type="button"
                  onClick={() => handleStatusChange(item.id, 'na')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    item.status === 'na'
                      ? 'bg-slate-700 text-white shadow-xs scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <span>NA</span>
                </button>
              </div>

              {/* Column 3: Notes & Maintenance Flag Input */}
              <div className="sm:col-span-4 w-full flex flex-col gap-1.5">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={item.note || ''}
                    placeholder="Add an open note (optional)..."
                    onChange={(e) => handleNoteChange(item.id, e.target.value)}
                    className="w-full text-xs bg-slate-50/70 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => toggleMaintenanceFlag(item.id)}
                    title={item.hasMaintenanceAlert ? 'Remove alert flag' : 'Flag for maintenance'}
                    className={`absolute right-2 p-1 rounded transition-colors ${
                      item.hasMaintenanceAlert
                        ? 'text-amber-600 hover:text-amber-700'
                        : 'text-slate-300 hover:text-slate-500'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>

                {/* Maintenance Alert Badge (matching reference) */}
                {item.hasMaintenanceAlert && (
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5 w-fit">
                    <AlertTriangle className="w-3 h-3 stroke-[2.5]" />
                    <span>Need maintenance</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              No checklist items match the selected filter.
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
