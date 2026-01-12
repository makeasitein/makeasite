import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '₹9,999',
    description: 'Perfect for small businesses getting online fast.',
    features: ['1–3 pages', 'Responsive design', 'Basic SEO', 'Contact form'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹19,999',
    description: 'For startups and professionals who want to scale.',
    features: ['Up to 6 pages', 'Brand theme', 'SEO-ready', 'Blog / Portfolio'],
    highlight: true,
  },
  {
    name: 'Pro',
    price: '₹39,999',
    description: 'Premium features for advanced business needs.',
    features: ['10+ pages', 'Advanced SEO', 'Analytics setup', 'Priority support'],
    highlight: false,
  },
];

export function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-font text-slate-900 mb-4">Pricing Plans</h2>
          <p className="text-slate-600 text-lg">Transparent and simple pricing, tailored for growth.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`neon-hover rounded-2xl p-8 border transition-all ${
                plan.highlight ? 'bg-[#F8FBFF] border-[#00E6FF44] shadow-lg' : 'bg-[#FAFBFD] border-[#E6EAF2]'
              } hover:-translate-y-1`}
              variants={itemVariants}
              whileHover={{ scale: plan.highlight ? 1.05 : 1.03, y: -8 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="heading-font text-slate-900">{plan.name}</h3>
                {plan.highlight && (
                  <span className="text-xs px-3 py-1 rounded-full bg-[#00E6FF15] text-[#00E6FF]">Popular</span>
                )}
              </div>
              <div className="text-[#1E62FF] heading-font" style={{ fontSize: '28px' }}>{plan.price}</div>
              <p className="text-slate-600 mt-2">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-700">
                    <span className="w-6 h-6 rounded-md bg-[#1E62FF15] text-[#1E62FF] flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a 
                href="#contact" 
                className="mt-8 block text-center bg-[#1E62FF] text-white px-6 py-3 rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choose {plan.name}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

