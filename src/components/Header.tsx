import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import { FluidBackground } from './FluidBackground';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        setIsMenuOpen(false);
        navigate(path);
    };

    const isActive = (path: string) => location.pathname === path;
    const linkClass = (path: string) =>
        `relative px-1 py-2 text-sm font-medium transition-colors z-10 ${isActive(path) ? 'text-[#1E62FF]' : 'text-slate-700 hover:text-[#1E62FF]'
        }`;

    return (
        <>
            <motion.header
                className="sticky top-0 z-50 w-full"
            >
                {/* Fluid Animation Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
                    <FluidBackground />
                </div>

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md border-b border-white/20 shadow-sm rounded-xl" />

                <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#1E62FF] rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity" />
                                <img src={logo} alt="MakeASite.in" className="relative w-10 h-10 rounded-lg" />
                            </div>
                            <span className="heading-font text-slate-900" style={{ fontSize: '22px' }}>
                                MakeA<span className="text-[#1E62FF]">Site</span><span className="text-slate-500">.in</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {['/', '/services', '/pricing', '/portfolio', '/contact'].map((path) => (
                                <Link key={path} to={path} className={linkClass(path)}>
                                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                    {isActive(path) && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E62FF] rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative overflow-hidden group bg-[#1E62FF] text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-[#1E62FF]/20"
                                >
                                    <span className="relative z-10">Get Started</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00E6FF] to-[#1E62FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 sticky top-20 z-40"
            >
                <div className="px-4 py-6 space-y-4">
                    {['/', '/services', '/pricing', '/portfolio', '/contact'].map((path) => (
                        <button
                            key={path}
                            onClick={() => handleNavigation(path)}
                            className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${isActive(path)
                                ? 'bg-[#1E62FF]/5 text-[#1E62FF] font-medium'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavigation('/contact')}
                        className="w-full bg-[#1E62FF] text-white px-6 py-3.5 rounded-xl font-medium shadow-lg shadow-[#1E62FF]/20 mt-4"
                    >
                        Get Started
                    </button>
                </div>
            </motion.div>
        </>
    );
}
