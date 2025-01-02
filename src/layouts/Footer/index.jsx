import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = {
    product: [
      { title: 'Features', href: '#features' },
      { title: 'Security', href: '#security' },
      { title: 'Enterprise', href: '#enterprise' },
      { title: 'Pricing', href: '#pricing' },
    ],
    company: [
      { title: 'About Us', href: '#about' },
      { title: 'Careers', href: '#careers' },
      { title: 'Blog', href: '#blog' },
      { title: 'Press', href: '#press' },
    ],
    resources: [
      { title: 'Documentation', href: '#docs' },
      { title: 'API Reference', href: '#api' },
      { title: 'Support', href: '#support' },
      { title: 'Status', href: '#status' },
    ],
    legal: [
      { title: 'Privacy Policy', href: '#privacy' },
      { title: 'Terms of Service', href: '#terms' },
      { title: 'Cookie Policy', href: '#cookies' },
      { title: 'GDPR', href: '#gdpr' },
    ],
  };

  return (
    <footer className="bg-primary pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                VEYO
              </span>
              <p className="mt-4 text-white/70 max-w-md">
                Revolutionizing vehicle rentals with blockchain-powered security. Making fleet management easier and more secure than ever before.
              </p>
              <div className="mt-8 flex space-x-6">
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-white/70 hover:text-secondary">
                  <Facebook size={20} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-white/70 hover:text-secondary">
                  <Twitter size={20} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-white/70 hover:text-secondary">
                  <Instagram size={20} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-white/70 hover:text-secondary">
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold uppercase tracking-wider">
                {category}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3 text-white/70">
              <Mail size={20} />
              <span>contact@veyo.com</span>
            </div>
            <div className="flex items-center space-x-3 text-white/70">
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-white/70">
              <MapPin size={20} />
              <span>123 Innovation Street, Tech City, TC 12345</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-white/50">
          <p>&copy; {year} Veyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;