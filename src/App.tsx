/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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
  const [currentPage, setCurrentPage] = useState<string>('inicio');
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

  const renderActiveSection = () => {
    switch (currentPage) {
      case 'inicio':
        return (
          <motion.div
            key="inicio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Banner Section with callback to change page */}
            <Hero onOpenQuote={() => handleOpenModal()} onChangePage={setCurrentPage} />
            <Stats />
            <WhyUs />
            <Services onOpenQuote={(name) => handleOpenModal(name)} />
            <Testimonials />
          </motion.div>
        );
      case 'nosotros':
        return (
          <motion.div
            key="nosotros"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-20"
          >
            <WhyUs />
            <Process />
            <Stats />
          </motion.div>
        );
      case 'servicios':
        return (
          <motion.div
            key="servicios"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-20"
          >
            <Services onOpenQuote={(name) => handleOpenModal(name)} />
          </motion.div>
        );
      case 'planes':
        return (
          <motion.div
            key="planes"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-20"
          >
            <WebDesignPricing onOpenQuote={(name) => handleOpenModal(name)} />
            <Maintenance onOpenQuote={(name) => handleOpenModal(name)} />
          </motion.div>
        );
      case 'portafolio':
        return (
          <motion.div
            key="portafolio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-20"
          >
            <Portfolio />
            <Testimonials />
          </motion.div>
        );
      case 'faq':
        return (
          <motion.div
            key="faq"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-20"
          >
            <FAQ />
          </motion.div>
        );
      case 'blog':
        return (
          <motion.div
            key="blog"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-20"
          >
            <Blog />
          </motion.div>
        );
      case 'contacto':
        return (
          <motion.div
            key="contacto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-20"
          >
            <Contact />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen mesh-bg text-slate-200 font-sans transition-colors duration-300 selection:bg-brand-blue/20 selection:text-brand-blue flex flex-col justify-between">
      <div>
        {/* Dynamic Navigation Header */}
        <Header
          onOpenQuote={() => handleOpenModal()}
          currentPage={currentPage}
          onChangePage={setCurrentPage}
        />

        {/* Main Content Sections with Animated Transitions */}
        <main className="relative">
          <AnimatePresence mode="wait">
            {renderActiveSection()}
          </AnimatePresence>
        </main>
      </div>

      {/* Institutional Footer */}
      <Footer onChangePage={setCurrentPage} />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPlanOrService={selectedProduct}
      />
    </div>
  );
}
