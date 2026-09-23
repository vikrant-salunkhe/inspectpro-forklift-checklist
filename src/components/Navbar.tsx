'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenChecklistModal?: () => void;
}

/**
 * Navbar Component
 * Recreates the InspectPro header navigation.
 * 
 * Features:
 * - Brand logo with custom shield icon
 * - Dropdown indicator for Resources
 * - Responsive mobile drawer with hamburger toggle
 * - Accessible ARIA attributes for screen readers
 */
export default function Navbar({ onOpenChecklistModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
              aria-label="InspectPro Home"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Inspect<span className="text-blue-600">Pro</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
              <Link 
                href="#what-is-checklist" 
                className="hover:text-blue-600 transition-colors py-2"
              >
                Products
              </Link>
              <Link 
                href="#features" 
                className="hover:text-blue-600 transition-colors py-2"
              >
                Solutions
              </Link>

              {/* Resources Dropdown Trigger */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  onBlur={() => setTimeout(() => setResourcesOpen(false), 200)}
                  aria-expanded={resourcesOpen}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2 focus:outline-none"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {resourcesOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="#detailed-checklist"
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                    >
                      Forklift Safety Checklist
                    </Link>
                    <Link
                      href="#how-it-works"
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                    >
                      Inspection SOP & Guides
                    </Link>
                    <Link
                      href="#faq"
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                    >
                      Safety FAQs & Compliance
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="#pricing" 
                className="hover:text-blue-600 transition-colors py-2"
              >
                Pricing
              </Link>
            </nav>
          </div>

          {/* Desktop Right CTA Actions */}
          <div className="hidden md:flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenChecklistModal}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors px-3 py-2"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onOpenChecklistModal}
              className="inline-flex items-center justify-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md shadow-blue-600/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <Link
              href="#what-is-checklist"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              Products
            </Link>
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              Solutions
            </Link>
            <Link
              href="#detailed-checklist"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              Resources & Checklists
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              FAQ
            </Link>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChecklistModal?.();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg border border-slate-200"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChecklistModal?.();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
