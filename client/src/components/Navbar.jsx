import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

import Logo from '../assets/Logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navs = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Explore Collection', path: '/cars' },
        { name: 'Sell Car', path: '/sell' },
        { name: 'Buy Car', path: '/buy' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Gallery', path: '/gallery' },
    ];

    return (
        <nav className="fixed z-50 flex justify-center w-full lg:top-0 lg:px-0 top-4 px-4 transition-all duration-300">
            <div className="w-full bg-black/90 backdrop-blur-md border border-gray-800 shadow-2xl overflow-hidden transition-all duration-300 lg:max-w-full lg:rounded-none lg:border-x-0 lg:border-t-0 rounded-2xl max-w-7xl mx-auto">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center">
                            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                                <img src={Logo} alt="AUTOFREAKS" className="h-10 w-auto" />
                                <span className="font-bold text-2xl text-white tracking-tight italic hidden sm:block">AUTOFREAKS</span>
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center space-x-6">
                            {navs.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`${location.pathname === item.path ? 'text-red-500' : 'text-gray-300 hover:text-white'} transition-colors duration-200 text-sm font-bold uppercase tracking-wider`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <Link to="/admin/login" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                                <User className="h-5 w-5" />
                            </Link>
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none p-2"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 pt-2 pb-4 space-y-1 border-t border-gray-800 bg-black/50">
                        {navs.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`${location.pathname === item.path ? 'text-red-500 bg-red-600/10' : 'text-gray-300 hover:text-white hover:bg-gray-800'} block px-4 py-3 rounded-xl text-base font-medium transition-colors opacity-0`}
                                style={isOpen ? {
                                    animationName: 'fadeInUp',
                                    animationDuration: '0.5s',
                                    animationTimingFunction: 'ease-out',
                                    animationFillMode: 'forwards',
                                    animationDelay: `${index * 0.1}s`
                                } : {}}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/admin/login"
                            className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            Admin Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
