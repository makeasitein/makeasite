import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0A1F3C] to-[#0F7B5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-lg w-10 h-10 flex items-center justify-center">
                <span className="text-[#1E64F0]" style={{ fontSize: '20px', fontWeight: '700' }}>M</span>
              </div>
              <span style={{ fontSize: '22px', fontWeight: '600' }}>
                makea<span className="text-[#5FD1C8]">web.in</span>
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Building beautiful, functional websites for small businesses and startups. Simple, fast, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6">Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-[#5FD1C8] transition-colors">Business Websites</a></li>
              <li><a href="#" className="hover:text-[#5FD1C8] transition-colors">Portfolio Websites</a></li>
              <li><a href="#" className="hover:text-[#5FD1C8] transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-[#5FD1C8] transition-colors">E-commerce Basics</a></li>
              <li><a href="#" className="hover:text-[#5FD1C8] transition-colors">Digital Growth Support</a></li>
              <li><a href="#" className="hover:text-[#5FD1C8] transition-colors">Branding Kit</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6">Quick Links</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#home" className="hover:text-[#5FD1C8] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#5FD1C8] transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-[#5FD1C8] transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-[#5FD1C8] transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-[#5FD1C8] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#5FD1C8] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6">Contact Us</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div>7306683199</div>
                  <div>6238014370</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>makeasite.in@gmail.com</div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>MakeAWeb.in</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <div>
            © 2024 MakeAWeb.in. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}