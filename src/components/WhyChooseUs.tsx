import { Zap, DollarSign, Sparkles } from 'lucide-react';

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
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F8F8F8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-slate-600 text-lg">
            We make it simple for you to succeed online.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                style={{ background: `linear-gradient(135deg, ${reason.color} 0%, ${reason.color}dd 100%)` }}
              >
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#1E64F0] to-[#0F7B5F] rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div style={{ fontSize: '48px', fontWeight: '700' }}>50+</div>
              <div className="text-white opacity-90">Projects Completed</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '700' }}>100%</div>
              <div className="text-white opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '700' }}>24/7</div>
              <div className="text-white opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}