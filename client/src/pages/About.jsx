
import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
            {/* Hero Section */}
            <div className="relative h-[40vh] bg-black flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
                <div className="text-center z-20 px-4 pt-20">
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4 tracking-tighter">
                        ABOUT <span className="text-red-600">US</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Redefining the luxury car buying experience.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Company Overview Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">🏎️ AUTOFREAKS - World of Luxury</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Your trusted destination for pre-owned luxury cars. AUTOFREAKS in Jayanagar, Bangalore is a premier showroom showcasing premium used luxury cars including Mercedes Benz, BMW, and Audi with certified quality inspection.
                            </p>
                        </div>

                        <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-6">
                            <h4 className="text-red-500 font-bold tracking-wider uppercase text-sm mb-2">Our Services</h4>
                            <p className="text-white font-semibold text-lg">We Buy . Sell . Exchange . Finance</p>
                        </div>

                        <div className="text-gray-400 text-sm leading-relaxed space-y-4">
                            <p>
                                As a trusted pre-owned luxury car dealer in 7th Block Jayanagar, we offer high-end cars and a superior luxury car buying experience. Explore verified second-hand luxury vehicles in our state-of-the-art showroom. Experience the luxury car lifestyle at one of India's premium automobile dealerships.
                            </p>
                        </div>
                    </div>

                    <div className="relative group h-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-black border border-gray-800 rounded-lg p-8 h-full flex flex-col items-center justify-center text-center space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Premium Experience</h3>
                                <p className="text-gray-500">Unmatched Quality & Service</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <span className="block text-2xl font-bold text-red-500">100+</span>
                                    <span className="text-xs text-gray-400 uppercase">Happy Clients</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg">
                                    <span className="block text-2xl font-bold text-red-500">50+</span>
                                    <span className="text-xs text-gray-400 uppercase">Luxury Cars</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CEO Section - The Visionary */}
                <div className="relative py-16 border-t border-gray-800/50">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0a0a0a] px-6 py-1">
                        <span className="text-xs font-bold tracking-[0.3em] text-red-600 uppercase">The Visionary</span>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 tracking-tight">
                                DEEPAK
                            </h2>
                            <p className="text-xl text-gray-400 font-light tracking-wide">CEO & Entrepreneur</p>
                        </div>

                        <div className="relative py-12">
                            <span className="absolute top-0 left-0 text-6xl text-gray-800 opacity-50">"</span>
                            <p className="text-3xl md:text-5xl font-bold text-white italic leading-tight px-12">
                                <span className="text-red-600">Eye it</span>, <span className="text-gray-400">Drive it</span>, <span className="text-white">Own it</span>
                            </p>
                            <span className="absolute bottom-0 right-0 text-6xl text-gray-800 opacity-50">"</span>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-red-600/30 transition-colors duration-500">
                            <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 space-y-8">
                                <h3 className="text-2xl font-bold text-white">Your Next Upgrade Starts Here</h3>

                                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-500">📍</div>
                                        <span>Jayanagar 7th block B’lore</span>
                                    </div>
                                    <div className="hidden md:block w-px h-8 bg-gray-800"></div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">⬇️</div>
                                        <span>Visit Us Today</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
