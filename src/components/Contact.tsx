import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-[#F8FBFF] via-white to-[#F0FDFF] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#1E64F0] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0F7B5F] rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-font text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-slate-600 text-lg">
            Ready to build your dream website? Let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1E64F0] focus:outline-none focus:ring-2 focus:ring-[#1E64F0]/20 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1E64F0] focus:outline-none focus:ring-2 focus:ring-[#1E64F0]/20 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1E64F0] focus:outline-none focus:ring-2 focus:ring-[#1E64F0]/20 transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-2">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1E64F0] focus:outline-none focus:ring-2 focus:ring-[#1E64F0]/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1E62FF] to-[#00E6FF] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:6238014370"
                className="w-full mt-3 text-center border-2 border-[#1E62FF] text-[#1E62FF] px-8 py-4 rounded-xl hover:bg-[#1E62FF] hover:text-white transition-all"
              >
                Request a Callback
              </a>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1E64F0] to-[#0F7B5F] rounded-2xl p-8 text-white">
              <h3 className="heading-font mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Phone</div>
                    <div>6238014370</div>
                    <div>8304824323</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Email</div>
                    <div>makeasite.in@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Website</div>
                    <div>MakeASite.in</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917306683199"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="heading-font mb-1">Chat on WhatsApp</h3>
                  <p className="text-sm opacity-90">Get instant responses to your queries</p>
                </div>
              </div>
            </a>

            {/* QR removed as requested */}
          </div>
        </div>
      </div>
    </section>
  );
}
