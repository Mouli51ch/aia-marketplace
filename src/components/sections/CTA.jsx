import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Users, Sparkles } from 'lucide-react';

const CTA = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '50K+', label: 'Active Creators' },
    { icon: <Sparkles className="w-6 h-6" />, value: '1M+', label: 'NFTs Created' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{ filter: 'blur(40px)' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{ filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Section (Left Side) */}
            <div className="space-y-8 order-1 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 text-purple-400">
                  <Rocket className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Get Started Today
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Join the Future of Digital Creation
                </h2>
                <p className="text-gray-400 text-lg">
                  Start creating, trading, and connecting with a global community of creators and collectors in the decentralized marketplace.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-purple-400">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Start Creating</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 transition-colors"
                >
                  Explore Marketplace
                </motion.button>
              </motion.div>
            </div>

            {/* Image Section (Right Side) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square w-64 h-64 order-2 md:order-2 justify-self-end"
            >
              <img src="/assets/aia 2.png" alt="3D Illustration" className="w-full h-full object-cover rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
