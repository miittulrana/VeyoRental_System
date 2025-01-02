import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Why Veyo', href: '#why-veyo' },
    { title: 'Features', href: '#features' },
    { title: 'Fleet Management', href: '#fleet' },
    { title: 'Security', href: '#security' },
    { title: 'Pricing', href: '#pricing' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                VEYO
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.title}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-glow transition-all"
              >
                Get Started
              </motion.button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-lg z-40"
            />

            {/* Mobile Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-primary/95 backdrop-blur-xl z-50 shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex justify-between items-center p-5 border-b border-white/10">
                  <span className="text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    VEYO
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-accent transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Menu Links */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="flex flex-col space-y-2 px-5">
                    {navLinks.map(link => (
                      <motion.a
                        key={link.title}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ x: 10 }}
                        className="py-3 text-white/80 hover:text-white transition-colors border-b border-white/10"
                      >
                        {link.title}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Menu Footer */}
                <div className="p-5 border-t border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-glow transition-all"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;