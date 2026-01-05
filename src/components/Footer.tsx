import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Globe } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#8098b7] to-[#1E62FF] text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="MakeASite.in" className="w-10 h-10 rounded-lg" />
              <span className="heading-font" style={{ fontSize: '22px' }}>
                MakeA<span className="text-[#00E6FF]">Site</span><span className="text-white/80">.in</span>
              </span>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Building beautiful, functional websites for small businesses and startups. Simple, fast, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00E6FF22] rounded-lg flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00E6FF22] rounded-lg flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00E6FF22] rounded-lg flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00E6FF22] rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="heading-font mb-6">Services</h3>
            <ul className="space-y-3 text-white/90">
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
            <h3 className="heading-font mb-6">Quick Links</h3>
            <ul className="space-y-3 text-white/90">
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
            <h3 className="heading-font mb-6">Contact Us</h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div>6238014370</div>
                  <div>8304824323</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>makeasite.in@gmail.com</div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>MakeASite.in</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/80 text-sm">
          <div>
            © 2024 MakeASite.in. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#00E6FF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00E6FF] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#00E6FF] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
