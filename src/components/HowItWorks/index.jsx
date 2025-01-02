import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Settings, Boxes, Upload, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus />,
      title: 'Sign Up and Customize',
      description: 'Create your account and customize your rental platform to match your brand'
    },
    {
      icon: <Boxes />,
      title: 'Add Your Fleet',
      description: 'Add your vehicles, set pricing, and define locations'
    },
    {
      icon: <Settings />,
      title: 'Configure Settings',
      description: 'Set up booking rules, payment methods, and notification preferences'
    },
    {
      icon: <Upload />,
      title: 'Launch Your Platform',
      description: 'Embed the booking system on your website and start accepting rentals'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent"
          >
            Get Started in Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            Follow these simple steps to launch your branded rental platform
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-secondary/50 to-transparent transform translate-y-8" />
              )}

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-secondary/50 transition-all h-full">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h3 className="text-xl font-semibold text-white">Setup Process</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-medium">{step.title}</h4>
                      <p className="text-white/60 text-sm">{step.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-glow transition-all"
          >
            Start Your Setup Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;