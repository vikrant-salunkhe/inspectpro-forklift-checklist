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

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Navigation Bar */}
      <Navbar onOpenChecklistModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Interactive Card */}
        <Hero onOpenChecklistModal={handleOpenModal} />

        {/* Social Proof Industry Logos */}
        <TrustLogos />

        {/* What is a Forklift Inspection Checklist Section */}
        <WhatIsChecklist />

        {/* Detailed Interactive Checklist Table */}
        <DetailedChecklist onOpenChecklistModal={handleOpenModal} />

        {/* Features / Benefits Grid */}
        <FeaturesGrid />

        {/* How It Works 3-Step Process */}
        <HowItWorks />

        {/* Built for Teams Industry Cards */}
        <IndustryCards />

        {/* Frequently Asked Questions */}
        <FaqAccordion />

        {/* High-Impact CTA Banner */}
        <CtaBanner onOpenChecklistModal={handleOpenModal} />
      </main>
    </div>
  );
}
