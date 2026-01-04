import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, Phone, MapPin, Car, MessageCircle, Facebook } from 'lucide-react';
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={Logo} alt="AUTOFREAKS" className="h-8 w-auto" />
                            <span className="font-bold text-xl text-white tracking-tight italic">AUTOFREAKS</span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            "Eye it, Drive it, Own it". AUTOFREAKS offers a curated selection of premium vehicles, combined with unparalleled service to redefine your automotive journey.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/deepak_autofreaks_?igsh=MWF5MXJoOGpqbDkybg==" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://wa.me/919900009946" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <MessageCircle size={20} />
                            </a>
                            <a href="https://www.facebook.com/share/17zjae8TA2/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/cars" className="hover:text-white transition-colors">Cars</Link></li>
                            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link to="/admin/login" className="hover:text-white transition-colors">Admin Login</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-red-500 shrink-0" />
                                <span>540, 8th Cross Road, Jayanagar 7th Block, Bengaluru 560070, Karnataka, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-red-500 shrink-0" />
                                <span>+91 99000 09946</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-red-500 shrink-0" />
                                <span>deerealmadrider@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter/Opening Hours */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Opening Hours</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                                <span>Monday - Saturday</span>
                                <span className="text-white">10 AM - 4 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-red-500">Half Day</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© {new Date().getFullYear()} Khushbu ajdigitals +91 7483 662 048. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
