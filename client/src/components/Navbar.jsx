import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, User } from 'lucide-react';

import Logo from '../assets/Logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navs = [
        { name: 'Home', path: '/' },
        { name: 'Cars', path: '/cars' },
        { name: 'Gallery', path: '/gallery' },
    ];

    return (
        <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <img src={Logo} alt="Autofreaks" className="h-10 w-auto" />
                            <span className="font-bold text-2xl text-white tracking-tight italic hidden sm:block">Autofreaks</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navs.map((nav) => (
                            <Link
                                key={nav.path}
                                to={nav.path}
                                className={`${location.pathname === nav.path ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'} transition-colors duration-200 text-lg uppercase tracking-wide text-sm`}
                            >
                                {nav.name}
                            </Link>
                        ))}
                        <Link to="/admin/login" className="text-gray-400 hover:text-white transition-colors">
                            <User className="h-6 w-6" />
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800 animate-in slide-in-from-top-2">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navs.map((nav) => (
                            <Link
                                key={nav.path}
                                to={nav.path}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {nav.name}
                            </Link>
                        ))}
                        <Link
                            to="/admin/login"
                            className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Admin Login
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
