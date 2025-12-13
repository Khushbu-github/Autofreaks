import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { ChevronLeft, Calendar, Shield, Zap } from 'lucide-react';

const CarDetails = () => {
    const { id } = useParams();
    const car = cars.find((c) => c.id === parseInt(id));

    if (!car) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-900">Car not found</h2>
                <Link to="/cars" className="text-blue-600 hover:text-blue-500 mt-4 font-medium">Return to Inventory</Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/cars" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors">
                <ChevronLeft className="h-5 w-5 mr-1" /> Back to Inventory
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="space-y-6">
                    <div className="rounded-3xl overflow-hidden shadow-lg aspect-w-4 aspect-h-3 bg-gray-100">
                        <img src={car.images[0]} alt={car.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Thumbnails could go here */}
                </div>

                <div className="flex flex-col justify-center">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">In Stock</span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">{car.name}</h1>
                        <p className="text-xl text-gray-500">{car.brand}</p>
                    </div>

                    <div className="text-4xl font-bold text-blue-600 mb-8">
                        ₹ {car.price.toLocaleString()}
                    </div>

                    <div className="prose text-gray-600 mb-10 leading-relaxed">
                        <p>{car.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <Calendar className="h-8 w-8 text-blue-500 mr-4" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Year</p>
                                <p className="font-bold text-gray-900 text-lg">{car.year}</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <Shield className="h-8 w-8 text-blue-500 mr-4" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Warranty</p>
                                <p className="font-bold text-gray-900 text-lg">1 Year</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-8">
                        <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                            Book Test Drive
                        </button>
                        <p className="text-center text-sm text-gray-400 mt-4">
                            Questions? Call us at <span className="text-gray-900 font-semibold">+91 98765 43210</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CarDetails;
