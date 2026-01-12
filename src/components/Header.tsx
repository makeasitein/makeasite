import { Globe } from 'lucide-react';
import { useState } from 'react';
// Inline logo placeholder to avoid missing asset import
import logo from '../../assets/logo.png';

export interface HeaderProps {
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

export function Header({ className, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 ${className ?? ''}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
              <img src={logo} alt="MakeASite Logo" className="w-10 h-10 rounded-lg border border-[#1E62FF22]" />
              <span className="heading-font text-slate-900" style={{ fontSize: '22px' }}>
              MakeA<span className="text-[#1E62FF]">Site</span><span className="text-slate-700">.in</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" onClick={() => onNavigate?.('home')} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Home</a>
            <a href="#services" onClick={() => onNavigate?.('services')} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Services</a>
            <a href="#pricing" onClick={() => onNavigate?.('pricing')} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Pricing</a>
            <a href="#portfolio" onClick={() => onNavigate?.('portfolio')} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Portfolio</a>
            <a href="#contact" onClick={() => onNavigate?.('contact')} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" onClick={() => onNavigate?.('contact')} className="neon-hover bg-[#1E62FF] text-white px-6 py-3 rounded-xl transition-all">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-slate-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-slate-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-slate-800"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => { setIsMenuOpen(false); onNavigate?.('home'); }} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Home</a>
              <a href="#services" onClick={() => { setIsMenuOpen(false); onNavigate?.('services'); }} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Services</a>
              <a href="#pricing" onClick={() => { setIsMenuOpen(false); onNavigate?.('pricing'); }} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Pricing</a>
              <a href="#portfolio" onClick={() => { setIsMenuOpen(false); onNavigate?.('portfolio'); }} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Portfolio</a>
              <a href="#contact" onClick={() => { setIsMenuOpen(false); onNavigate?.('contact'); }} className="text-slate-700 hover:text-[#1E62FF] transition-colors">Contact</a>
              <a href="#contact" onClick={() => { setIsMenuOpen(false); onNavigate?.('contact'); }} className="bg-[#1E62FF] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
