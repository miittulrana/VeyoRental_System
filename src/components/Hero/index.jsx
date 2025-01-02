import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Car } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden" id="hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-primary">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Hero Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent">
                  Revolutionizing
                </span>
                <br />
                Vehicle Rentals with
                <br />
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Blockchain Security
                </span>
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Create your own branded vehicle rental system with our cutting-edge SaaS solution. 
                Secure, scalable, and simple to integrate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-glow transition-all flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all flex items-center justify-center"
                >
                  Watch Demo
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-white/60 text-sm">Active Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1M+</div>
                  <div className="text-white/60 text-sm">Bookings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-white/60 text-sm">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* 3D Dashboard Preview */}
            <div className="relative aspect-square max-w-xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform rotate-6 scale-95 blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                {/* Mock Dashboard UI */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Car className="w-8 h-8 text-secondary" />
                      <div className="text-lg font-semibold text-white">Fleet Dashboard</div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                  </div>

                  {/* Mock Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5">
                      <Zap className="w-6 h-6 text-secondary mb-2" />
                      <div className="text-2xl font-bold text-white">156</div>
                      <div className="text-white/60 text-sm">Active Rentals</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5">
                      <Shield className="w-6 h-6 text-secondary mb-2" />
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-white/60 text-sm">Secure</div>
                    </div>
                  </div>

                  {/* Mock Chart */}
                  <div className="h-40 bg-white/5 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/40">Interactive Chart Preview</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;