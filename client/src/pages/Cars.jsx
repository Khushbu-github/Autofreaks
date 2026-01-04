import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axios';
import { Search, Filter, Loader, Car } from 'lucide-react';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const { data } = await axios.get('/cars');
                setCars(data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sm:mb-10" data-aos="fade-down">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white italic tracking-wide">Current Inventory</h1>
                    <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">Browse our collection of premium vehicles</p>
                </div>

                <div className="relative w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search by brand or model..."
                        className="pl-10 pr-4 py-2 sm:py-2.5 bg-gray-900/50 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent outline-none w-full md:w-80 text-sm sm:text-base"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center h-64 items-center">
                    <Loader className="h-10 w-10 text-white animate-spin" />
                </div>
            ) : filteredCars.length === 0 ? (
                <div className="text-center py-16 sm:py-20 bg-gray-900/50 border border-gray-800 rounded-xl" data-aos="fade-up">
                    <p className="text-gray-400 text-base sm:text-lg">No cars found matching your search.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredCars.map((car, index) => (
                        <div key={car._id} className="group bg-gray-900/40 backdrop-blur rounded-2xl shadow-lg border border-gray-800 overflow-hidden hover:shadow-white/5 hover:border-gray-600 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 50}>
                            <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-gray-900 flex items-center justify-center">
                                {car.images && car.images.length > 0 ? (
                                    <img
                                        src={car.images[0].url}
                                        alt={car.name}
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-gray-600">
                                        <Car className="h-16 w-16 mb-2" />
                                        <span className="text-sm">No Image</span>
                                    </div>
                                )}
                                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/80 backdrop-blur-sm px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold text-white shadow-sm border border-gray-700">
                                    {car.year}
                                </div>
                            </div>
                            <div className="p-5 sm:p-6">
                                <p className="text-xs sm:text-sm text-gray-400 font-bold mb-1 uppercase tracking-wider">{car.brand}</p>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">{car.name}</h3>
                                <p className="text-xl sm:text-2xl font-bold text-gray-100 mb-5 sm:mb-6">
                                    {car.price ? `₹ ${car.price.toLocaleString()}` : 'Contact for Price'}
                                </p>
                                <Link
                                    to={`/cars/${car._id}`}
                                    className="block w-full text-center bg-transparent text-white font-semibold py-2.5 sm:py-3 rounded-xl border border-gray-700 hover:bg-white hover:border-white hover:text-black transition-all uppercase tracking-wide text-xs sm:text-sm"
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
