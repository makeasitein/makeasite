import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

export interface HeaderProps {
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) =>
    `transition-colors ${isActive(path) ? 'text-[#1E62FF] font-medium' : 'text-slate-700 hover:text-[#1E62FF]'}`;

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 ${className ?? ''}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="MakeASite Logo" className="w-10 h-10 rounded-lg border border-[#1E62FF22]" />
            <span className="heading-font text-slate-900" style={{ fontSize: '22px' }}>
              MakeA<span className="text-[#1E62FF]">Site</span><span className="text-slate-700">.in</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/services" className={linkClass('/services')}>Services</Link>
            <Link to="/pricing" className={linkClass('/pricing')}>Pricing</Link>
            <Link to="/portfolio" className={linkClass('/portfolio')}>Portfolio</Link>
            <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="neon-hover bg-[#1E62FF] text-white px-6 py-3 rounded-xl transition-all">
              Get Started
            </Link>
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
              <button onClick={() => handleNavigation('/')} className={`text-left ${linkClass('/')}`}>Home</button>
              <button onClick={() => handleNavigation('/services')} className={`text-left ${linkClass('/services')}`}>Services</button>
              <button onClick={() => handleNavigation('/pricing')} className={`text-left ${linkClass('/pricing')}`}>Pricing</button>
              <button onClick={() => handleNavigation('/portfolio')} className={`text-left ${linkClass('/portfolio')}`}>Portfolio</button>
              <button onClick={() => handleNavigation('/contact')} className={`text-left ${linkClass('/contact')}`}>Contact</button>
              <button onClick={() => handleNavigation('/contact')} className="bg-[#1E62FF] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all text-center">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
