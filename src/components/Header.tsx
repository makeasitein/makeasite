import { Globe } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#1E64F0] to-[#0F7B5F] rounded-lg w-10 h-10 flex items-center justify-center">
              <span className="text-white" style={{ fontSize: '20px', fontWeight: '700' }}>M</span>
            </div>
            <span className="text-slate-800" style={{ fontSize: '22px', fontWeight: '600' }}>
              makea<span className="text-[#1E64F0]">web.in</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Home</a>
            <a href="#services" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Services</a>
            <a href="#pricing" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Pricing</a>
            <a href="#portfolio" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Portfolio</a>
            <a href="#contact" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#D8A546] to-[#C99536] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
              Get a Website
            </button>
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
              <a href="#home" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Home</a>
              <a href="#services" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Services</a>
              <a href="#pricing" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Pricing</a>
              <a href="#portfolio" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Portfolio</a>
              <a href="#contact" className="text-slate-700 hover:text-[#1E64F0] transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-[#D8A546] to-[#C99536] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
                Get a Website
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
