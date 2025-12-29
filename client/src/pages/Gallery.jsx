import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Loader, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const { data } = await axios.get('/gallery');
                setImages(data);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-white italic tracking-wide">Photo Gallery</h1>
                <p className="mt-4 text-gray-400">A showcase of our finest deliveries and inventory.</p>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader className="h-10 w-10 text-white animate-spin" />
                </div>
            ) : images.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-gray-900/50 rounded-xl border border-dashed border-gray-700">
                    <ImageIcon className="h-12 w-12 text-gray-500 mb-4" />
                    <p className="text-gray-400 text-lg">No images in gallery yet.</p>
                </div>
            ) : (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((img) => (
                        <div key={img._id} className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-white/10 hover:ring-2 hover:ring-white/20 transition-all duration-300">
                            <img src={img.imageUrl} alt={img.title || 'Gallery Image'} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            {img.title && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white font-medium truncate">{img.title}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Gallery;
