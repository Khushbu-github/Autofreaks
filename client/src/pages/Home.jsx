import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import HeroImage from '../assets/Home.avif';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';

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
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white mb-6">
                            Autofreaks <span className="block text-red-600 mt-2">World of Luxury</span>
                        </h1>
                        <p className="text-2xl font-medium text-white italic mb-8">
                            "Eye it, Drive it, Own it"
                        </p>
                        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-10">
                            Curated by CEO Deepak. Your trusted destination for pre-owned luxury cars in Jayanagar, Bangalore.
                        </p>
                        <div>
                            <Link to="/cars" className="inline-flex items-center px-8 py-4 border border-red-600 text-base font-bold uppercase tracking-wide rounded-full text-white bg-red-600/10 hover:bg-red-600 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
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

            {/* Brands Section */}
            <Brands />

            {/* Testimonials Section */}
            <Testimonials />
        </div>
    );
};
export default Home;
