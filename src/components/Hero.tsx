import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* 3D-ish Animated Background Shapes */}
      <motion.div
        className="shape orb-3d top-16 right-10 w-64 h-64 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="shape cube-3d bottom-24 left-10 w-52 h-52 opacity-15"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="shape ring-3d top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 opacity-10"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-[#00E6FF]" />
              <span className="text-slate-700 text-sm">Create Websites for Businesses in Kerala</span>
            </motion.div>

            <motion.h1
              className="heading-font text-[#0E0E0E] leading-tight"
              style={{ fontSize: '48px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Create Website for Your Business in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E62FF] to-[#00E6FF]">Kerala</span> Today
            </motion.h1>

            <motion.p
              className="text-slate-800 text-lg leading-relaxed body-font"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Professional website design and development services for businesses in Kerala. We create SEO-optimized, mobile-friendly websites that help your business grow online. Serving startups, SMEs, and enterprises across Kerala.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to="/contact"
                className="neon-hover bg-[#1E62FF] text-white px-8 py-4 rounded-xl transition-all flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="bg-white text-[#1E62FF] px-8 py-4 rounded-xl border-2 border-[#1E62FF] hover:bg-[#1E62FF] hover:text-white transition-all"
              >
                View Pricing
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-[#1E62FF]" style={{ fontSize: '32px', fontWeight: '700' }}>50+</div>
                <div className="text-slate-600 text-sm">Websites Built</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="text-[#00E6FF]" style={{ fontSize: '32px', fontWeight: '700' }}>100%</div>
                <div className="text-slate-600 text-sm">Client Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <div className="text-[#0E0E0E]" style={{ fontSize: '32px', fontWeight: '700' }}>24×7</div>
                <div className="text-slate-600 text-sm">Support Available</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Website Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#1E62FF22]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=85&w=1600"
                alt="High-clarity modern website mockup"
                className="w-full h-auto"
              />
            </motion.div>
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[220px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="text-[#1E62FF] heading-font" style={{ fontSize: '24px' }}>Premium Quality</div>
              <p className="text-slate-600 text-sm mt-1">Modern, SEO-ready, mobile-optimized</p>
            </motion.div>
            {/* Floating Badge 2 */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-[#1E62FF] to-[#00E6FF] text-white rounded-2xl shadow-xl p-6 max-w-[200px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="heading-font" style={{ fontSize: '20px' }}>Transparent Pricing</div>
              <p className="text-white text-sm mt-1 opacity-90">Starting ₹9,999</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

