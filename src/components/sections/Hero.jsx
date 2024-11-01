import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Play, ChevronDown, Wallet } from 'lucide-react';

const CustomElement = () => (
  <motion.div className="absolute inset-0 flex items-center justify-center">
    {/* Background glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
    
    {/* Animated PNG image */}
    <motion.div className="relative w-[80%] h-[80%] flex items-center justify-center">
      <motion.img
        src="/assets/aia.png"  // Updated path to the image in assets folder
        alt="AIA Element"
        className="w-auto h-full object-contain relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.05, 1],
          y: [0, -10, 0] 
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Radial glow behind the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-2xl" />
    </motion.div>

    {/* Animated particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}

    {/* Orbital rings */}
    <motion.div 
      className="absolute w-[120%] h-[120%] border border-purple-500/10 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div 
      className="absolute w-[150%] h-[150%] border border-pink-500/10 rounded-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: '$10M+', label: 'Trading Volume' },
    { value: '50K+', label: 'Active Creators' },
    { value: '100K+', label: 'NFTs Created' }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-gradient-to-br from-black via-purple-900/20 to-black" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{ filter: 'blur(100px)' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{ filter: 'blur(100px)' }}
      />
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">Web 3.0 Marketplace</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Create, Trade, and
              </span>
              <br />
              <span className="text-white">Own Digital Assets</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
              Join the next generation of digital creators in the decentralized marketplace. 
              Create, showcase, and trade unique NFTs with our powerful platform.
            </p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center space-x-2 group"
              >
                <Wallet className="w-5 h-5" />
                <span>Start Creating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-purple-500/50 text-white font-semibold flex items-center justify-center space-x-2 hover:bg-purple-500/10 transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element with Custom Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-purple-500/20">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-purple-900/50 animate-gradient" />
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-grid-white/[0.02]" />
              
              {/* Custom Element */}
              <div className="absolute inset-0">
                <CustomElement />
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 p-4 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-xl font-bold text-white">100K+</div>
                <div className="text-gray-400 text-sm">Daily Transactions</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 p-4 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-xl font-bold text-green-400">Live</div>
                <div className="text-gray-400 text-sm">Network Status</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;