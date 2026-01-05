import { Zap, DollarSign, Sparkles, Smartphone, Search, ShieldCheck } from 'lucide-react';
import { Progress } from './ui/progress';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your website online quickly with our efficient workflows and proven templates.',
    color: '#1E64F0',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Perfect for small businesses and startups. Get a professional website without breaking the bank.',
    color: '#0F7B5F',
  },
  {
    icon: Sparkles,
    title: 'Professional Templates',
    description: 'Based on high-converting UI/UX patterns from successful brands. Beautiful and functional.',
    color: '#D8A546',
  },
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F8FBFF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-font text-slate-900 mb-4">Why Choose Us</h2>
          <p className="text-slate-600 text-lg">
            We make it simple for you to succeed online.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                style={{ background: `linear-gradient(135deg, ${reason.color} 0%, ${reason.color}dd 100%)` }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <reason.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-slate-900 mb-3 heading-font">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats & Progress */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-[#1E62FF] to-[#00E6FF] rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div style={{ fontSize: '40px', fontWeight: '800' }}>50+</div>
              <div className="text-white/90">Projects Completed</div>
              <div className="mt-4"><Progress value={90} className="bg-white/20" /></div>
            </div>
            <div className="text-center">
              <div style={{ fontSize: '40px', fontWeight: '800' }}>100%</div>
              <div className="text-white/90">Client Satisfaction</div>
              <div className="mt-4"><Progress value={100} className="bg-white/20" /></div>
            </div>
            <div className="text-center">
              <div style={{ fontSize: '40px', fontWeight: '800' }}>24×7</div>
              <div className="text-white/90">Support Available</div>
              <div className="mt-4"><Progress value={100} className="bg-white/20" /></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
