import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Shield, Clock } from 'lucide-react';

const CTA = () => {
  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Quick Setup',
      description: 'Get your rental system up and running in minutes'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Platform',
      description: 'Blockchain-powered security for your peace of mind'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for your business needs'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary opacity-90" />
      
      {/* Animated Background Shapes */}
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
        className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent"
          >
            Get Started with Veyo Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
          >
            Join thousands of businesses revolutionizing their vehicle rental operations with our cutting-edge platform.
          </motion.p>

          {/* Benefits Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-glow transition-all w-full sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="ml-2 inline-block w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              Schedule Demo
            </motion.button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16">
            <p className="text-white/60 mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-32 h-12 bg-white/10 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;