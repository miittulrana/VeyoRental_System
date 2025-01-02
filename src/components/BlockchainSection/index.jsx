import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Link, Lock, FileCheck } from 'lucide-react';

const BlockchainSection = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enhanced Security',
      description: 'Military-grade encryption for all transactions and data'
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: 'Immutable Records',
      description: 'Tamper-proof booking and transaction history'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Privacy Control',
      description: 'Advanced data privacy and access management'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Smart Contracts',
      description: 'Automated and secure rental agreements'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="blockchain">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent"
            >
              Blockchain-Powered Security
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-white/80"
            >
              Experience unmatched security and transparency with our blockchain technology
            </motion.p>

            {/* Features List */}
            <div className="mt-12 grid gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1 text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Blockchain Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8">
              {/* Blockchain Animation Placeholder */}
              <div className="h-full flex items-center justify-center text-white/40">
                Interactive Blockchain Visualization Coming Soon
              </div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <p className="text-white/60 text-sm">Data Security</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary">0.001s</div>
                  <p className="text-white/60 text-sm">Transaction Time</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;