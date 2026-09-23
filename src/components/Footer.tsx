'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenChecklistModal?: () => void;
}

/**
 * Footer Component
 * Recreates the comprehensive dark navy footer from the desktop and mobile reference designs.
 * 
 * Features:
 * - Brand identity with SVG emblem and mission statement
 * - 4-column structured link directory (Product, Solutions, Resources, Company)
 * - Direct contact details (phone, email) matching mobile mockup
 * - Copyright & legal compliance links
 */
export default function Footer({ onOpenChecklistModal }: FooterProps) {
  return (
    <footer className="bg-[#050e1c] text-slate-400 text-sm border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Info & Mission (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Inspect<span className="text-blue-500">Pro</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              InspectPro is an all-in-one equipment inspection and safety compliance platform trusted by logistics, construction, and manufacturing leaders worldwide.
            </p>

            {/* Direct Contact Info (featured in mobile mockup) */}
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href="mailto:support@inspectpro.com" className="hover:text-white transition-colors">
                  support@inspectpro.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  type="button" 
                  onClick={onOpenChecklistModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Inspection Checklists
                </button>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Features & Tools
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1 text-slate-500">
                  Integrations <span className="text-[10px] bg-blue-900/60 text-blue-300 px-1.5 py-0.5 rounded">New</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#what-is-checklist" className="hover:text-white transition-colors">
                  Warehouse Logistics
                </Link>
              </li>
              <li>
                <Link href="#what-is-checklist" className="hover:text-white transition-colors">
                  Construction Sites
                </Link>
              </li>
              <li>
                <Link href="#what-is-checklist" className="hover:text-white transition-colors">
                  Manufacturing Plants
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  OSHA Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  type="button" 
                  onClick={onOpenChecklistModal} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>PDF Safety Templates</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <span className="text-slate-500">API Documentation</span>
              </li>
              <li>
                <span className="text-slate-500">Safety Regulations</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-slate-500">About InspectPro</span>
              </li>
              <li>
                <span className="text-slate-500">Careers</span>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenChecklistModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <span className="text-slate-500">Privacy & Trust</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} InspectPro Inc. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Security
            </span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Cookie Preferences
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
