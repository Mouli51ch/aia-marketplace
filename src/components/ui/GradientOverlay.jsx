import React from 'react';
import { motion } from 'framer-motion';

const GradientOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/30 to-transparent" />
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-pink-900/30 to-transparent" />
      
      {/* Animated Glow Points */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-purple-500/50"
        style={{ filter: 'blur(20px)' }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default GradientOverlay;