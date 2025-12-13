import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Luxury Car"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="max-w-2xl animate-in slide-in-from-left duration-700">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                            Find Your <span className="text-blue-500">Dream Car</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl leading-relaxed">
                            Premium selection of pre-owned luxury vehicles. Quality checked, certified, and ready for you to drive home today.
                        </p>
                        <div className="mt-10">
                            <Link to="/cars" className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-gray-900 bg-white hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                                Browse Inventory <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Why Choose Us</h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Experience the AutoElite Standard</p>
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
                            <div key={feature} className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <span className="text-lg font-medium text-gray-900">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
