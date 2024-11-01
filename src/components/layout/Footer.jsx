import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  Github, 
  MessageCircle, // Changed from Discord
  Mail,
  Globe,
  Shield,
  BookOpen
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Marketplace', href: '#' },
      { name: 'Creator Dashboard', href: '#' },
      { name: 'NFT Collections', href: '#' },
      { name: 'Trading Stats', href: '#' }
    ],
    community: [
      { name: 'About Us', href: '#' },
      { name: 'Community Guidelines', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Career', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'API Documentation', href: '#' },
      { name: 'Status Page', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Github className="h-5 w-5" />, href: '#', name: 'Github' },
    { icon: <MessageCircle className="h-5 w-5" />, href: '#', name: 'Chat' } // Changed from Discord
  ];

  return (
    <footer className="bg-gradient-to-b from-transparent to-black/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h2 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              AIA Market
            </motion.h2>
            <p className="text-gray-400 text-sm">
              The next generation Web3.0 marketplace for content creators. 
              Trade, create, and connect in the decentralized world.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-purple-400" />
              Platform
            </h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-purple-400" />
              Community
            </h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-purple-400" />
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center md:flex md:justify-between md:text-left">
          <div className="text-gray-400 text-sm">
            © {currentYear} AIA Market. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;