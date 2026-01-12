import { Globe, TrendingUp, Bot, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Globe,
    title: 'Web Development Services',
    description: 'Custom, responsive, and secure web solutions built for growth.',
    features: [
      'Custom website design and development',
      'Responsive and mobile-friendly web applications',
      'E-commerce solutions with secure payment gateways'
    ],
    color: '#1E62FF',
  },
  {
    icon: Bot,
    title: 'AI-Powered Solutions',
    description: 'Leverage artificial intelligence to automate and optimize your business.',
    features: [
      'Intelligent chatbot development for customer support',
      'Business process automation systems',
      'AI-driven data analysis and insights'
    ],
    color: '#00E6FF',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing Services',
    description: 'Strategic marketing to boost your visibility in Kerala and beyond.',
    features: [
      'Search Engine Optimization (SEO) for Kerala businesses',
      'Local SEO targeting Ernakulam district and Kochi region',
      'Pay-per-click (PPC) advertising campaigns',
      'Social media marketing strategies'
    ],
    color: '#1E62FF',
  },
  {
    icon: Target,
    title: 'Lead Generation Services',
    description: 'Targeted strategies to convert traffic into loyal customers.',
    features: [
      'Targeted lead generation for Kochi-based businesses',
      'Conversion optimization for Kerala commercial sector',
      'Email marketing campaigns',
      'CRM integration solutions'
    ],
    color: '#00E6FF',
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-font text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 text-lg">
            Tailored digital solutions for businesses in Kerala, focusing on Kerala, Ernakulam, Kochi, and Kakkanad.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="neon-hover bg-[#F8FBFF] rounded-2xl p-8 hover:-translate-y-1 group border border-slate-100"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <service.icon className="w-7 h-7" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1E62FF] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#1E62FF] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
