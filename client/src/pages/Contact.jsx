
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0a0a0a] pt-28 lg:pt-24">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-black flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
                <div className="text-center z-20 px-4 pt-20">
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4 tracking-tighter">
                        CONTACT <span className="text-red-600">US</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Get in touch with us for your dream car.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Address Card */}
                    <div className="bg-black/50 border border-gray-800 p-8 rounded-2xl hover:border-red-600/50 transition-colors duration-300 group">
                        <div className="bg-red-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                            <MapPin className="text-red-500 h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Visit Our Showroom</h3>
                        <p className="text-gray-400 leading-relaxed">
                            540, 8th Cross Road,<br />
                            Jayanagar 7th Block,<br />
                            Bengaluru 560070,<br />
                            Karnataka, India
                        </p>
                    </div>

                    {/* Phone/WhatsApp Card */}
                    <div className="bg-black/50 border border-gray-800 p-8 rounded-2xl hover:border-red-600/50 transition-colors duration-300 group">
                        <div className="bg-red-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                            <Phone className="text-red-500 h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Call or WhatsApp</h3>
                        <p className="text-gray-400 mb-4">
                            Available for inquiries and support.
                        </p>
                        <div className="space-y-3">
                            <a href="tel:+919900009946" className="block text-white font-medium hover:text-red-500 transition-colors">
                                📞 +91 99000 09946
                            </a>
                            <a href="https://wa.me/919900009946" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-500 font-medium hover:text-green-400 transition-colors">
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="bg-black/50 border border-gray-800 p-8 rounded-2xl hover:border-red-600/50 transition-colors duration-300 group">
                        <div className="bg-red-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                            <Mail className="text-red-500 h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                        <p className="text-gray-400 mb-4">
                            Send us your queries anytime.
                        </p>
                        <a href="mailto:deerealmadrider@gmail.com" className="text-white font-medium hover:text-red-500 transition-colors break-all">
                            deerealmadrider@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
