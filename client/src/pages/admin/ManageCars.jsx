import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { Trash2, ChevronLeft, Loader, Plus, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCars = async () => {
        try {
            const { data } = await axios.get('/cars');
            setCars(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this car?')) {
            try {
                await axios.delete(`/cars/${id}`);
                setCars(cars.filter(car => car._id !== id));
            } catch (error) {
                console.error(error);
                alert('Failed to delete car');
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <Link to="/admin/dashboard" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronLeft className="h-5 w-5 mr-1" /> Back to Dashboard
                </Link>
                <Link to="/admin/cars/add" className="inline-flex items-center justify-center bg-white text-black px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium shadow-sm hover:shadow-white/20">
                    <Plus className="h-5 w-5 mr-2" /> Add New Car
                </Link>
            </div>

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-white italic">Manage Cars</h1>
                <p className="text-gray-400 mt-2">View, organize and delete cars from the collection</p>
            </div>

            {loading ? (
                <div className="flex justify-center h-64 items-center">
                    <Loader className="h-10 w-10 text-white animate-spin" />
                </div>
            ) : cars.length === 0 ? (
                <div className="text-center py-20 bg-gray-900/50 rounded-xl border-2 border-dashed border-gray-700">
                    <Car className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">No cars in the inventory.</p>
                    <Link to="/admin/cars/add" className="text-white hover:text-gray-300 mt-2 inline-block font-medium border-b border-white pb-1">Add your first car</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map((car) => (
                        <div key={car._id} className="bg-gray-900/40 backdrop-blur rounded-xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-white/10 transition-all duration-300 flex flex-col">
                            <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative">
                                {car.images && car.images.length > 0 ? (
                                    <img src={car.images[0].url} alt={car.name} className="w-full h-48 object-cover" />
                                ) : (
                                    <div className="w-full h-48 flex items-center justify-center bg-gray-800 text-gray-500">
                                        <Car className="h-12 w-12" />
                                    </div>
                                )}
                                <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs font-bold text-white">
                                    {car.year}
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">{car.brand} • {car.kms} kms</p>

                                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-800">
                                    <span className="text-white font-medium">
                                        {car.price ? `₹${(car.price / 100000).toFixed(2)} Lakhs` : 'Call for Price'}
                                    </span>
                                    <button
                                        onClick={() => handleDelete(car._id)}
                                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-colors"
                                        title="Delete Car"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default ManageCars;
