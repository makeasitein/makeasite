import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-white via-[#F8F8F8] to-[#E8F5F2] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#5FD1C8] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1E64F0] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D8A546]" />
              <span className="text-slate-700 text-sm">Simple. Fast. Affordable.</span>
            </div>

            <h1 className="text-slate-800 leading-tight">
              We build beautiful websites that help your business{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E64F0] to-[#0F7B5F]">
                grow digitally
              </span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed">
              Simple. Fast. Affordable. Perfect for small businesses & startups looking to establish a strong online presence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:7306683199"
                className="bg-gradient-to-r from-[#1E64F0] to-[#0F7B5F] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center gap-2 group"
              >
                Contact Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="bg-white text-[#1E64F0] px-8 py-4 rounded-xl border-2 border-[#1E64F0] hover:bg-[#1E64F0] hover:text-white transition-all">
                Get Started
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-[#1E64F0]" style={{ fontSize: '32px', fontWeight: '700' }}>50+</div>
                <div className="text-slate-600 text-sm">Websites Built</div>
              </div>
              <div>
                <div className="text-[#0F7B5F]" style={{ fontSize: '32px', fontWeight: '700' }}>100%</div>
                <div className="text-slate-600 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-[#D8A546]" style={{ fontSize: '32px', fontWeight: '700' }}>24/7</div>
                <div className="text-slate-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Website Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1637502877428-27e6553a8817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2Mzk3MzI5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern website mockup"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
              <div className="text-[#0F7B5F]" style={{ fontSize: '24px', fontWeight: '700' }}>Professional</div>
              <p className="text-slate-600 text-sm mt-1">Quality Websites</p>
            </div>
            {/* Floating Badge 2 */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#D8A546] to-[#C99536] rounded-2xl shadow-xl p-6 max-w-[180px]">
              <div className="text-white" style={{ fontSize: '20px', fontWeight: '700' }}>Affordable</div>
              <p className="text-white text-sm mt-1 opacity-90">Starting ₹9,999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}