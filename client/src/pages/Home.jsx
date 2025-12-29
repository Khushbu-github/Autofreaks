import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import HeroImage from '../assets/Home.avif';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';

const Home = () => {
    return (
        <div className="bg-transparent pt-28 lg:pt-24">
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
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
                    <div className="max-w-2xl animate-in slide-in-from-left duration-700">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
                            AUTOFREAKS <span className="block text-red-600 mt-1 sm:mt-2">World of Luxury</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl font-medium text-white italic mb-6 sm:mb-8">
                            "Eye it, Drive it, Own it"
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8 sm:mb-10">
                            Curated by CEO Deepak. Your trusted destination for pre-owned luxury cars in Jayanagar, Bangalore.
                        </p>
                        <div>
                            <Link to="/cars" className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border border-red-600 text-sm sm:text-base font-bold uppercase tracking-wide rounded-full text-white bg-red-600/10 hover:bg-red-600 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                                Browse Inventory <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-16 sm:py-20 lg:py-24 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-sm sm:text-base font-bold text-gray-400 tracking-wide uppercase">Why Choose Us</h2>
                        <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white italic">Experience the AUTOFREAKS Standard</p>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400">
                            Your trusted destination for pre-owned luxury cars in Jayanagar, Bangalore
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
                        <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-red-600/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-red-600/20 flex items-center justify-center text-xl sm:text-2xl mr-3 sm:mr-4">
                                    🏎️
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-white">Premium Luxury Cars</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-400">
                                Showcasing premium used luxury cars including Mercedes Benz, BMW, and Audi with certified quality inspection
                            </p>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-red-600/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-red-600/20 flex items-center justify-center text-xl sm:text-2xl mr-3 sm:mr-4">
                                    ✅
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-white">Verified Quality</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-400">
                                Explore verified second-hand luxury vehicles in our state-of-the-art showroom with comprehensive quality checks
                            </p>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-red-600/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-red-600/20 flex items-center justify-center text-xl sm:text-2xl mr-3 sm:mr-4">
                                    📍
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-white">Prime Location</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-400">
                                Located in Jayanagar 7th Block, Bangalore - one of India's premium automobile dealerships
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-600/10 to-transparent border border-red-600/20 rounded-2xl p-6 sm:p-8 text-center" data-aos="zoom-in" data-aos-delay="400">
                        <h3 className="text-red-500 font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3">Our Complete Services</h3>
                        <p className="text-white font-bold text-2xl sm:text-3xl mb-3 sm:mb-4">We Buy . Sell . Exchange . Finance</p>
                        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                            Experience the luxury car lifestyle with our comprehensive services tailored for discerning customers
                        </p>
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
