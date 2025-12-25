import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import HeroImage from '../assets/Home.avif';

const Home = () => {
    return (
        <div className="bg-transparent">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src={HeroImage}
                        alt="Luxury Car"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="max-w-2xl animate-in slide-in-from-left duration-700">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                            Find Your <span className="text-white italic bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Dream Car</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl leading-relaxed">
                            Premium selection of pre-owned luxury vehicles. Quality checked, certified, and ready for you to drive home today.
                        </p>
                        <div className="mt-10">
                            <Link to="/cars" className="inline-flex items-center px-8 py-4 border border-white/20 text-base font-bold uppercase tracking-wide rounded-full text-black bg-white hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl shadow-white/10">
                                Browse Inventory <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="py-24 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-bold text-gray-400 tracking-wide uppercase">Why Choose Us</h2>
                        <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl italic">Experience the Autofreaks Standard</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Certified Quality Checks",
                            "Best Market Prices",
                            "1 Year Comprehensive Warranty",
                            "Instant Financing Options",
                            "7-Day Money Back Guarantee",
                            "Premium After-Sales Service"
                        ].map((feature) => (
                            <div key={feature} className="flex items-center space-x-4 p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl shadow-sm hover:shadow-white/10 hover:border-gray-600 transition-all duration-300 group">
                                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white group-hover:bg-white group-hover:text-black transition-colors">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <span className="text-lg font-medium text-gray-200">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
