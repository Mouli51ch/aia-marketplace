import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Import Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import Section Components
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Stats from './components/sections/Stats';
import CTA from './components/sections/CTA';

// Import Visual Components
import ParticleBackground from './components/ui/ParticleBackground';
import AnimatedShapes from './components/ui/AnimatedShapes';
import GradientOverlay from './components/ui/GradientOverlay';

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center relative z-10"
        >
          {/* Loading Animation */}
          <motion.div 
            className="w-24 h-24 rounded-full border-4 border-purple-500/20 border-t-purple-500 mb-8 mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            AIA Market
          </motion.h2>
          <p className="text-gray-400 mt-2">Loading the future of digital assets...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen overflow-hidden bg-black"
      >
        {/* Background Elements */}
        <ParticleBackground />
        <AnimatedShapes />
        <GradientOverlay />
        
        {/* Grid Background */}
        <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-tr from-black via-purple-900/20 to-black pointer-events-none" />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="fixed top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />

          <main className="relative">
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
            </motion.section>

            {/* Features Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Features />
            </motion.section>

            {/* Stats Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Stats />
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CTA />
            </motion.section>
          </main>

          <Footer />
        </div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 transition-all 
                z-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                focus:ring-offset-black"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Toast Container for Notifications */}
        <div className="fixed top-4 right-4 z-50" />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;