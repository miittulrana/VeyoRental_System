import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Database, Clock, Cloud } from 'lucide-react';

const WhyVeyo = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Blockchain Security',
      description: 'Enterprise-grade security with blockchain technology ensuring data integrity and transparency.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized performance delivering lightning-fast booking experiences for your customers.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'White-Label Solution',
      description: 'Fully customizable platform that seamlessly integrates with your brand identity.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Smart Analytics',
      description: 'Powerful insights and reporting tools to optimize your rental operations.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock expert support to ensure smooth operations.'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud-Based',
      description: 'Access your rental management system anywhere, anytime.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="why-veyo">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent"
          >
            Why Choose Veyo?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            Experience the future of vehicle rental management with our cutting-edge platform
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-secondary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '500+', label: 'Business Clients' },
            { value: '1M+', label: 'Bookings Processed' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="mt-2 text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVeyo;