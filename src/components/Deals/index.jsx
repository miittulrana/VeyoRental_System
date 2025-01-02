import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Gift, Percent, Calendar } from 'lucide-react';

const Deals = () => {
  const features = [
    {
      icon: <Tag className="w-6 h-6" />,
      title: 'Custom Pricing Rules',
      description: 'Set dynamic pricing based on duration, season, or vehicle type'
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Special Offers',
      description: 'Create limited-time promotions and flash sales'
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: 'Loyalty Rewards',
      description: 'Build customer loyalty with reward programs'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Seasonal Deals',
      description: 'Automate pricing for peak and off-peak seasons'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="deals">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent"
          >
            Maximize Revenue with Smart Deals
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            Boost your bookings with intelligent pricing strategies and promotional tools
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-secondary/50 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-white/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Easy Deal Management
            </h3>
            {/* Placeholder for interactive demo */}
            <div className="aspect-video rounded-lg bg-white/10 flex items-center justify-center">
              <p className="text-white/60">Interactive Demo Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Deals;