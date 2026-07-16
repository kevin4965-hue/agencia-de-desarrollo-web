/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import WebDesignPricing from './components/WebDesignPricing';
import Maintenance from './components/Maintenance';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('Desarrollo Web');

  const handleOpenModal = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    } else {
      setSelectedProduct('Desarrollo Web');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen mesh-bg text-slate-200 font-sans transition-colors duration-300 selection:bg-brand-blue/20 selection:text-brand-blue">
      {/* Dynamic Navigation Header */}
      <Header onOpenQuote={() => handleOpenModal()} />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero Banner Section */}
        <Hero onOpenQuote={() => handleOpenModal()} />

        {/* Why Choose Us (Bento-Grid styling) */}
        <WhyUs />

        {/* Dynamic Services Cards */}
        <Services onOpenQuote={(name) => handleOpenModal(name)} />

        {/* Web Design Pricing (similar to the requested layout) */}
        <WebDesignPricing onOpenQuote={(name) => handleOpenModal(name)} />

        {/* Maintenance Plans & Metaphor */}
        <Maintenance onOpenQuote={(name) => handleOpenModal(name)} />

        {/* 8-Step Timeline Process */}
        <Process />

        {/* Filterable Masonry Portfolio */}
        <Portfolio />

        {/* Statistics Counter Segment (Dark Mode Contrast) */}
        <Stats />

        {/* Testimonial Carousel */}
        <Testimonials />

        {/* Interactive FAQ Accordion */}
        <FAQ />

        {/* Latest Blog Insights */}
        <Blog />

        {/* Contact Form & Google Location Map */}
        <Contact />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPlanOrService={selectedProduct}
      />
    </div>
  );
}
