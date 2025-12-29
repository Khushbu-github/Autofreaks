import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { ChevronLeft, Calendar, Shield, Gauge, Fuel, Users, FileText, Settings, Layers, MapPin } from 'lucide-react';

const CarDetails = () => {
    const { id } = useParams();
    const car = cars.find((c) => c.id === parseInt(id));
    const [mainImage, setMainImage] = useState(car ? car.images[0] : null);

    if (!car) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center pt-28 lg:pt-24">
                <h2 className="text-2xl font-bold text-white">Car not found</h2>
                <Link to="/cars" className="text-white hover:text-gray-300 mt-4 font-medium border-b border-white pb-1">Return to Inventory</Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
            <Link to="/cars" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ChevronLeft className="h-5 w-5 mr-1" /> Back to Inventory
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="space-y-6">
                    <div className="w-full flex justify-center items-center bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
                        <img src={mainImage || car.images[0]} alt={car.name} className="max-h-[70vh] w-auto max-w-full object-contain" />
                    </div>
                    {/* Image Gallery */}
                    <div className="grid grid-cols-4 gap-4">
                        {car.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setMainImage(img)}
                                className={`rounded-xl overflow-hidden border-2 transition-all duration-200 h-20 ${mainImage === img ? 'border-red-500 scale-105' : 'border-transparent hover:border-gray-500'}`}
                            >
                                <img src={img} alt={`${car.name} ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-500 font-bold text-xs uppercase tracking-wider border border-red-600/30">In Stock</span>
                            {car.variant && <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-300 font-semibold text-xs border border-gray-700">{car.variant}</span>}
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 italic">{car.name}</h1>
                        <p className="text-xl text-gray-400">{car.brand}</p>
                    </div>

                    <div className="text-4xl font-bold text-white mb-8">
                        {car.price ? `₹ ${car.price.toLocaleString()}` : <span className="text-3xl text-gray-300">Contact for Price</span>}
                    </div>

                    <div className="prose text-gray-300 mb-10 leading-relaxed max-w-none">
                        <p>{car.description}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4 mb-10 border-t border-b border-gray-800 py-8">
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold mb-1">Year</span>
                            <div className="flex items-center text-white"><Calendar className="h-4 w-4 mr-2 text-red-500" /> {car.year}</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold mb-1">Kilometers</span>
                            <div className="flex items-center text-white"><Gauge className="h-4 w-4 mr-2 text-red-500" /> {car.kms || 'N/A'}</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold mb-1">Fuel</span>
                            <div className="flex items-center text-white"><Fuel className="h-4 w-4 mr-2 text-red-500" /> {car.fuel || 'N/A'}</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold mb-1">Owner</span>
                            <div className="flex items-center text-white"><Users className="h-4 w-4 mr-2 text-red-500" /> {car.owner || 'N/A'}</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold mb-1">Transmission</span>
                            <div className="flex items-center text-white"><Settings className="h-4 w-4 mr-2 text-red-500" /> {car.transmission || 'N/A'}</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold mb-1">Registration</span>
                            <div className="flex items-center text-white"><MapPin className="h-4 w-4 mr-2 text-red-500" /> {car.registration || 'N/A'}</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold mb-1">Insurance</span>
                            <div className="flex items-center text-white"><Shield className="h-4 w-4 mr-2 text-red-500" /> {car.insurance || 'N/A'}</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold mb-1">Variant</span>
                            <div className="flex items-center text-white"><Layers className="h-4 w-4 mr-2 text-red-500" /> {car.variant || 'N/A'}</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs uppercase font-bold mb-1">Colour</span>
                            <div className="flex items-center text-white"><div className="h-3 w-3 rounded-full bg-white mr-2 border border-gray-500"></div> {car.colour || 'N/A'}</div>
                        </div>
                    </div>

                    {car.engine || car.maxPower ? (
                        <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-8">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center"><Zap className="h-5 w-5 mr-2 text-yellow-500" /> Performance Specs</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {car.engine && (
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Engine</p>
                                        <p className="text-white font-medium">{car.engine}</p>
                                    </div>
                                )}
                                {car.maxPower && (
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Max Power</p>
                                        <p className="text-white font-medium">{car.maxPower}</p>
                                    </div>
                                )}
                                {car.maxTorque && (
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Max Torque</p>
                                        <p className="text-white font-medium">{car.maxTorque}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : null}

                    {car.features && car.features.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {car.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="border-t border-gray-800 pt-8 mt-4 mb-4">
                        <p className="text-center text-gray-400 text-sm mb-6 font-medium tracking-wide">
                            We also: <span className="text-white">Buy, Sell, Exchange, Finance</span>
                        </p>
                    </div>

                    <div className="mt-auto">
                        <a
                            href={`https://wa.me/919980666004?text=Hi, I want to book a test drive for the ${car.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all shadow-xl hover:shadow-2xl hover:shadow-white/10 transform hover:-translate-y-1 mb-4 flex justify-center items-center gap-2"
                        >
                            Book Test Drive
                        </a>
                        <a
                            href={`https://wa.me/919980666004?text=Hi, I am interested in the ${car.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-4 rounded-xl font-bold text-lg border border-green-600 text-green-500 hover:bg-green-600/10 transition-all"
                        >
                            Chat on WhatsApp
                        </a>
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Questions? Call us at <span className="text-white font-semibold">+91 99806 66004</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
