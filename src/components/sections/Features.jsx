import React from 'react';
import { motion } from 'framer-motion';
import {
  Wallet,
  ShoppingBag,
  Users,
  Shield,
  Gauge,
  Layers,
  Rocket,
  Share2,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Secure Wallet Integration",
      description: "Connect your preferred Web3 wallet securely and start trading instantly with multiple blockchain support.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "NFT Marketplace",
      description: "Create, buy, and sell unique digital assets with ease. Support for multiple file types and collections.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Creator Community",
      description: "Join a thriving ecosystem of creators, collectors, and enthusiasts. Build your following and engage with fans.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Advanced security measures and smart contract audits ensure your assets and transactions are protected.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track your performance, market trends, and audience engagement with detailed analytics dashboard.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Multi-chain Support",
      description: "Seamlessly operate across multiple blockchains with unified interface and optimal gas fees.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="features">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 text-purple-400">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Platform Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Everything You Need to Create & Trade
          </h2>
          <p className="text-gray-400 text-lg">
            A comprehensive suite of tools and features designed for the next generation of digital creators and collectors.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-purple-400">
                <Share2 className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Cross-Platform Integration
              </h3>
              <p className="text-gray-400">
                Seamlessly integrate your digital assets across multiple platforms and marketplaces. Connect with more collectors and maximize your reach.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center space-x-2"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="relative">
            <motion.img
  src="/assets/aia3.png"
  alt="Cross-platform Integration"
  className="w-full h-auto max-w-xs rounded-xl shadow-2xl ml-12" // Added ml-4 for left margin
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
/>




              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;