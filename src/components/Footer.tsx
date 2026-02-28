import { Facebook, Instagram, Linkedin, Mail, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#8098b7] to-[#1E62FF] text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="MakeASite.in" className="w-10 h-10 rounded-lg" />
              <span className="heading-font" style={{ fontSize: '22px' }}>
                MakeA<span className="text-[#00E6FF]">Site</span><span className="text-white/80">.in</span>
              </span>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Create website for business in Kerala. Professional web development services for startups, SMEs, and enterprises across Kerala.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61586175400100" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#00E6FF22] rounded-lg flex items-center justify-center transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/makeasite.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#00E6FF22] rounded-lg flex items-center justify-center transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/makeasite/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#00E6FF22] rounded-lg flex items-center justify-center transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="heading-font mb-6">Services</h3>
            <ul className="space-y-3 text-white">
              <li><Link to="/services" className="hover:text-[#5FD1C8] transition-colors">Business Websites</Link></li>
              <li><Link to="/services" className="hover:text-[#5FD1C8] transition-colors">Portfolio Websites</Link></li>
              <li><Link to="/services" className="hover:text-[#5FD1C8] transition-colors">Landing Pages</Link></li>
              <li><Link to="/services" className="hover:text-[#5FD1C8] transition-colors">E-commerce Basics</Link></li>
              <li><Link to="/services" className="hover:text-[#5FD1C8] transition-colors">Digital Growth Support</Link></li>
              <li><Link to="/services" className="hover:text-[#5FD1C8] transition-colors">Branding Kit</Link></li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="heading-font mb-6">Our Products</h3>
            <ul className="space-y-3 text-white">
              <li>
                <span className="text-white/90 font-medium">WappBroadcaster</span>
                <p className="text-white/60 text-xs mt-0.5">WhatsApp Broadcasting Platform</p>
              </li>
              <li>
                <a
                  href="https://buildwealth24.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5FD1C8] transition-colors font-medium"
                >
                  BuildWealth24.in
                </a>
                <p className="text-white/60 text-xs mt-0.5">Financial Growth Platform</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-font mb-6">Quick Links</h3>
            <ul className="space-y-3 text-white">
              <li><Link to="/" className="hover:text-[#5FD1C8] transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#5FD1C8] transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#5FD1C8] transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-[#5FD1C8] transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-[#5FD1C8] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-font mb-6">Contact Us</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div>6238014370</div>
                  <div>8304824323</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:makeasite.in@gmail.com" className="hover:text-[#5FD1C8] transition-colors break-all">
                  makeasite.in@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="https://makeasite.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#5FD1C8] transition-colors">
                  makeasite.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/80 text-sm">
          <div>
            © 2026 MakeASite.in. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="hover:text-[#00E6FF] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#00E6FF] transition-colors">Terms of Service</Link>
            <Link to="/refund" className="hover:text-[#00E6FF] transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
