import React from 'react';
import { motion } from 'framer-motion';

const AnimatedShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Circle */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-purple-500/10"
        style={{ filter: 'blur(40px)' }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Rectangle */}
      <motion.div
        className="absolute w-96 h-48 bg-pink-500/10"
        style={{ 
          filter: 'blur(40px)',
          right: '10%',
          top: '20%'
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Gradient Ring */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full border-2 border-purple-500/20"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default AnimatedShapes;