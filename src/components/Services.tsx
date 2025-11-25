import { Globe, FileText, ShoppingBag, TrendingUp, Palette, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Business Websites',
    description: 'Professional websites that establish credibility and drive growth for your business.',
    color: '#1E64F0',
  },
  {
    icon: Globe,
    title: 'Portfolio Websites',
    description: 'Showcase your work beautifully with modern, responsive portfolio designs.',
    color: '#0F7B5F',
  },
  {
    icon: FileText,
    title: 'Landing Pages',
    description: 'High-converting landing pages optimized for campaigns and lead generation.',
    color: '#5FD1C8',
  },
  {
    icon: TrendingUp,
    title: 'Digital Growth Support',
    description: 'Ongoing support to help your website perform better and reach more customers.',
    color: '#D8A546',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Basics',
    description: 'Start selling online with simple, effective e-commerce solutions.',
    color: '#1E64F0',
  },
  {
    icon: Palette,
    title: 'Branding Starter Kit',
    description: 'Logo design, color schemes, and brand guidelines to establish your identity.',
    color: '#0F7B5F',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to establish and grow your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.color }} />
              </div>
              <h3 className="text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
