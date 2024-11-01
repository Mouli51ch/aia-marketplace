"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Platform Launch",
    items: ["Marketplace Beta", "Initial NFT Support", "Community Building"],
    status: "completed",
    date: "Q1 2024"
  },
  {
    phase: "Phase 2",
    title: "Ecosystem Growth",
    items: ["Multi-chain Integration", "Creator Tools", "Advanced Trading"],
    status: "current",
    date: "Q2 2024"
  },
  {
    phase: "Phase 3",
    title: "Advanced Features",
    items: ["DAO Governance", "DeFi Integration", "Cross-chain Bridge"],
    status: "upcoming",
    date: "Q3 2024"
  },
  {
    phase: "Phase 4",
    title: "Global Expansion",
    items: ["Mobile App", "Enterprise Solutions", "Global Partnerships"],
    status: "upcoming",
    date: "Q4 2024"
  }
]

export default function RoadmapSection() {
  return (
    <div className="relative mt-8 pt-8 border-t border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Globe className="w-5 h-5 text-purple-400" />
          <h4 className="text-lg font-semibold text-white">Project Roadmap</h4>
        </div>
      </div>

      {/* Roadmap Container */}
      <div className="relative">
        {/* Connection Line - hidden on mobile, visible on md and up */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 hidden md:block" />

        {/* Roadmap Items */}
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative flex flex-col md:flex-row md:even:flex-row-reverse mb-12"
          >
            {/* Content Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-[calc(50%-20px)] glass-container p-6 relative ml-12 md:ml-0"
            >
              {/* Connection to timeline - Adjusted for mobile and desktop */}
              <div 
                className={`absolute top-0 md:top-1/2 left-[-40px] md:left-auto
                  ${index % 2 === 0 ? 'md:right-[-20px]' : 'md:left-[-20px]'}
                  w-[40px] md:w-[20px] h-px md:h-px bg-gradient-to-r from-purple-500 to-pink-500`}
              />

              {/* Phase Marker - Adjusted for mobile and desktop */}
              <motion.div
                className={`absolute top-0 md:top-1/2 left-[-48px] md:left-auto
                  ${index % 2 === 0 ? 'md:right-[-28px]' : 'md:left-[-28px]'}
                  transform -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}
                animate={{
                  scale: item.status === 'current' ? [1, 1.2, 1] : 1,
                  boxShadow: item.status === 'current' 
                    ? ['0 0 0 0 rgba(168, 85, 247, 0.4)', '0 0 0 10px rgba(168, 85, 247, 0)', '0 0 0 0 rgba(168, 85, 247, 0.4)']
                    : 'none'
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-purple-400">
                    {item.phase}
                  </span>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((subItem, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-center text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                      {subItem}
                    </motion.li>
                  ))}
                </ul>

                {/* Status Indicator */}
                <div className={`
                  inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm
                  ${item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'current' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-gray-500/20 text-gray-400'}
                `}>
                  <div className={`w-1.5 h-1.5 rounded-full
                    ${item.status === 'completed' ? 'bg-green-400' :
                      item.status === 'current' ? 'bg-purple-400' :
                      'bg-gray-400'}
                  `} />
                  <span className="capitalize">{item.status}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}