import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { Trash2, ChevronLeft, Loader, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        try {
            const { data } = await axios.get('/gallery');
            setImages(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this image?')) {
            try {
                await axios.delete(`/gallery/${id}`);
                setImages(images.filter(img => img._id !== id));
            } catch (error) {
                console.error(error);
                alert('Failed to delete image');
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <Link to="/admin/dashboard" className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors">
                    <ChevronLeft className="h-5 w-5 mr-1" /> Back to Dashboard
                </Link>
                <Link to="/admin/gallery/upload" className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md">
                    <Plus className="h-5 w-5 mr-2" /> Add New Image
                </Link>
            </div>

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900">Manage Gallery</h1>
                <p className="text-gray-500 mt-2">View, organize and delete gallery images</p>
            </div>

            {loading ? (
                <div className="flex justify-center h-64 items-center">
                    <Loader className="h-10 w-10 text-blue-600 animate-spin" />
                </div>
            ) : images.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-500 text-lg">No images to manage.</p>
                    <Link to="/admin/gallery/upload" className="text-blue-600 hover:text-blue-500 mt-2 inline-block font-medium">Upload your first image</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((img) => (
                        <div key={img._id} className="relative group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                            <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                                <img src={img.imageUrl} alt={img.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex justify-between items-center bg-white border-t border-gray-100">
                                <p className="text-sm font-medium text-gray-900 truncate flex-1 mr-3" title={img.title}>{img.title || 'Untitled'}</p>
                                <button
                                    onClick={() => handleDelete(img._id)}
                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Delete Image"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default ManageGallery;
