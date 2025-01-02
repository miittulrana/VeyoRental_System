import React from 'react';
import { motion } from 'framer-motion';
import { Code, Copy, Check, ExternalLink } from 'lucide-react';

const Integration = () => {
  const [copied, setCopied] = React.useState(false);

  const embedCode = `<script src="https://veyo.com/embed.js"></script>
<div id="veyo-booking" data-business-id="YOUR_ID"></div>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 relative" id="integration">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent"
            >
              Simple Integration with Your Website
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-white/80"
            >
              Integrate Veyo's booking system into your website with just a few lines of code. No complex setup required.
            </motion.p>

            {/* Integration Steps */}
            <div className="mt-8 space-y-6">
              {[
                {
                  title: 'Copy the Code',
                  description: 'Get your unique embed code from your dashboard'
                },
                {
                  title: 'Paste into Your Website',
                  description: 'Add the code to where you want the booking system to appear'
                },
                {
                  title: 'Customize and Launch',
                  description: 'Adjust the styling to match your brand and go live'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-white/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-10 blur-3xl" />
            <div className="relative">
              {/* Code Editor Header */}
              <div className="bg-white/5 rounded-t-xl p-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-secondary" />
                  <span className="text-white/80">embed.html</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-white/60" />
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="bg-white/5 p-6 rounded-b-xl font-mono text-sm">
                <pre className="text-white/80">
                  <code>{embedCode}</code>
                </pre>
              </div>

              {/* Preview Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-flex items-center space-x-2 text-secondary hover:text-accent transition-colors"
              >
                <span>View Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integration;