import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'CEO, RentFlex Solutions',
      image: '/api/placeholder/64/64',
      content: 'Veyo transformed our rental operations. The blockchain security gives us peace of mind, and our customers love the seamless booking experience.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Fleet Manager, AutoRent Pro',
      image: '/api/placeholder/64/64',
      content: 'The white-label solution allowed us to maintain our brand identity while leveraging powerful rental management features. Exceptional platform!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director, VehicleShare',
      image: '/api/placeholder/64/64',
      content: 'Integration was a breeze, and the support team is incredibly responsive. Our booking efficiency has improved significantly since switching to Veyo.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      {/* Background Elements */}
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
            What Our Clients Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-white/80"
          >
            Join hundreds of satisfied businesses using Veyo to power their rental operations
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-secondary/50 transition-all group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 text-secondary/20" />

              {/* Content */}
              <div className="relative">
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 mb-6">"{testimonial.content}"</p>

{/* Author */}
<div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-3xl font-bold text-white mb-2">500+</p>
            <p className="text-white/60">Businesses trust Veyo worldwide</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;