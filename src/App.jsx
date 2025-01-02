import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './layouts/Navbar';
import Hero from './components/Hero';
import WhyVeyo from './components/WhyVeyo';
import HowItWorks from './components/HowItWorks';
import FleetManagement from './components/FleetManagement';
import BlockchainSection from './components/BlockchainSection';
import Deals from './components/Deals';
import Testimonials from './components/Testimonials';
import Integration from './components/Integration';
import CTA from './components/CTA';
import Footer from './layouts/Footer';

const App = () => {
  // Handle smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offset = 80; // Height of fixed navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Loading animation
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        variants={pageVariants}
        className="min-h-screen bg-primary text-white overflow-hidden"
      >
        <Navbar />
        <main>
          <Hero />
          <WhyVeyo />
          <HowItWorks />
          <FleetManagement />
          <BlockchainSection />
          <Deals />
          <Testimonials />
          <Integration />
          <CTA />
        </main>
        <Footer />

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-secondary/20 hover:bg-secondary/30 backdrop-blur-sm border border-white/10 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;