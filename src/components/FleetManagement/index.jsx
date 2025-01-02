import React from 'react';
import { motion } from 'framer-motion';
import { Car, Calendar, Settings, Map, BarChart, Users } from 'lucide-react';

const FleetManagement = () => {
  const features = [
    {
      icon: <Car />,
      title: 'Vehicle Tracking',
      description: 'Real-time monitoring of your entire fleet location and status'
    },
    {
      icon: <Calendar />,
      title: 'Maintenance Scheduling',
      description: 'Automated maintenance alerts and service tracking'
    },
    {
      icon: <Map />,
      title: 'Route Optimization',
      description: 'Smart algorithms for efficient vehicle distribution'
    },
    {
      icon: <Settings />,
      title: 'Custom Settings',
      description: 'Flexible configuration options for your business needs'
    },
    {
      icon: <BarChart />,
      title: 'Performance Analytics',
      description: 'Detailed insights into fleet utilization and revenue'
    },
    {
      icon: <Users />,
      title: 'Driver Management',
      description: 'Complete driver profiles and assignment system'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="fleet">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary" />
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent"
          >
            Advanced Fleet Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            Take control of your fleet with our comprehensive management tools
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
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Fleet Management Dashboard
            </h3>
            {/* Dashboard Preview */}
            <div className="aspect-[16/9] rounded-lg bg-white/10 overflow-hidden relative">
              {/* Mock Dashboard UI */}
              <div className="absolute inset-0 p-4">
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="col-span-2 bg-white/5 rounded-lg p-4">
                    <div className="h-full flex items-center justify-center text-white/40">
                      Interactive Map View Coming Soon
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 h-1/2">
                      <div className="h-full flex items-center justify-center text-white/40">
                        Vehicle Stats
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 h-1/2">
                      <div className="h-full flex items-center justify-center text-white/40">
                        Performance Metrics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '98%', label: 'Fleet Utilization' },
            { value: '45min', label: 'Average Response Time' },
            { value: '24/7', label: 'Active Monitoring' }
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

export default FleetManagement;