import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { Search, Filter } from 'lucide-react';

const Cars = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-white italic tracking-wide">Current Inventory</h1>
                    <p className="text-gray-500 mt-2">Browse our collection of premium vehicles</p>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search by brand or model..."
                        className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent outline-none w-full md:w-80"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {filteredCars.length === 0 ? (
                <div className="text-center py-20 bg-gray-900/50 border border-gray-800 rounded-xl">
                    <p className="text-gray-400 text-lg">No cars found matching your search.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCars.map((car) => (
                        <div key={car.id} className="group bg-gray-900/40 backdrop-blur rounded-2xl shadow-lg border border-gray-800 overflow-hidden hover:shadow-white/5 hover:border-gray-600 transition-all duration-300">
                            <div className="h-56 w-full relative overflow-hidden">
                                <img
                                    src={car.images[0]}
                                    alt={car.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-white shadow-sm border border-gray-700">
                                    {car.year}
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-400 font-bold mb-1 uppercase tracking-wider">{car.brand}</p>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">{car.name}</h3>
                                <p className="text-2xl font-bold text-gray-100 mb-6">{car.price ? `₹ ${car.price.toLocaleString()}` : 'Contact for Price'}</p>
                                <Link
                                    to={`/cars/${car.id}`}
                                    className="block w-full text-center bg-transparent text-white font-semibold py-3 rounded-xl border border-gray-700 hover:bg-white hover:border-white hover:text-black transition-all uppercase tracking-wide text-sm"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Cars;
