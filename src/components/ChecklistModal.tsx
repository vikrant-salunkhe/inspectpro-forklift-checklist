'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, Mail, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ChecklistModal Component
 * Interactive modal dialog providing instant access to download or email
 * the complete Forklift Inspection Checklist PDF.
 * 
 * Features:
 * - Keyboard accessible (closes on Escape)
 * - Traps click-outside to dismiss
 * - Equipment type selector (Counterbalance, Reach Truck, Telehandler)
 * - Simulated email delivery with animated confirmation state
 * - Direct browser print/PDF trigger via window.print()
 */
export default function ChecklistModal({ isOpen, onClose }: ChecklistModalProps) {
  const [email, setEmail] = useState('');
  const [equipmentType, setEquipmentType] = useState('counterbalance');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200" 
        onClick={onClose} 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 animate-in zoom-in-95 fade-in duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Submission Confirmation View */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Checklist Dispatched!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              We&apos;ve sent the high-resolution PDF and Excel checklist template directly to <strong className="text-slate-900">{email}</strong>.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF Now</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Entry View */
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-blue-600">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              <span className="text-xs font-bold uppercase tracking-wider">InspectPro Downloads</span>
            </div>

            <h3 id="modal-title" className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              Get the Forklift Safety Checklist
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Download the official pre-shift inspection checklist template with OSHA 1910.178 compliance guide.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Equipment Type Select */}
              <div>
                <label htmlFor="equipment-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Forklift Equipment Type
                </label>
                <select
                  id="equipment-select"
                  value={equipmentType}
                  onChange={(e) => setEquipmentType(e.target.value)}
                  className="w-full text-sm rounded-xl border border-slate-200 px-3.5 py-2.5 text-slate-800 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                >
                  <option value="counterbalance">Class I & IV: Counterbalance Forklift (Electric / IC)</option>
                  <option value="reach-truck">Class II: Narrow Aisle Reach Truck / Order Picker</option>
                  <option value="pallet-jack">Class III: Electric Pallet Jack / Walkie Stacker</option>
                  <option value="rough-terrain">Class VII: Rough Terrain Forklift / Telehandler</option>
                </select>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Work Email Address
                </label>
                <div className="relative">
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full text-sm rounded-xl border border-slate-200 pl-10 pr-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/25 transition-all disabled:opacity-70"
                >
                  <Download className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Template...' : 'Send Me the Checklist (Free)'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 border border-slate-200 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span>Direct Print / PDF Export</span>
                </button>
              </div>

              {/* Privacy Reassurance */}
              <p className="text-[11px] text-center text-slate-400 pt-1">
                No credit card required. Free instant access for warehouse and safety teams.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
