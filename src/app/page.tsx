'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustLogos from '@/components/TrustLogos';
import WhatIsChecklist from '@/components/WhatIsChecklist';
import DetailedChecklist from '@/components/DetailedChecklist';
import FeaturesGrid from '@/components/FeaturesGrid';
import HowItWorks from '@/components/HowItWorks';
import IndustryCards from '@/components/IndustryCards';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import ChecklistModal from '@/components/ChecklistModal';

/**
 * Root Landing Page for InspectPro Forklift Inspection Checklist
 * 
 * Recreates the complete desktop and mobile reference design with
 * full responsiveness, modular components, and rich interactivity.
 */
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar onOpenChecklistModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section with Interactive Checklist Preview */}
        <Hero onOpenChecklistModal={handleOpenModal} />

        {/* 3. Social Proof Enterprise Client Logos */}
        <TrustLogos />

        {/* 4. Educational Overview: What is a Forklift Inspection Checklist? */}
        <WhatIsChecklist />

        {/* 5. Central Feature: Detailed Interactive Checklist Table */}
        <DetailedChecklist onOpenChecklistModal={handleOpenModal} />

        {/* 6. Benefits Grid: Make Every Forklift Inspection Consistent */}
        <FeaturesGrid />

        {/* 7. 3-Step Process: How It Works */}
        <HowItWorks />

        {/* 8. Built for Teams: Industry Cards */}
        <IndustryCards />

        {/* 9. Frequently Asked Questions (Accordion) */}
        <FaqAccordion />

        {/* 10. High-Impact Call-to-Action Banner */}
        <CtaBanner onOpenChecklistModal={handleOpenModal} />
      </main>

      {/* 11. Multi-Column Responsive Footer */}
      <Footer onOpenChecklistModal={handleOpenModal} />

      {/* 12. Interactive Checklist Download & Print Dialog */}
      <ChecklistModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
