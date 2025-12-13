import React, { useState } from 'react';
import axios from '../../utils/axios';
import { Upload, X, Check, Image as ImageIcon, ChevronLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const UploadGallery = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [preview, setPreview] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            setFile(selected);
            setPreview(URL.createObjectURL(selected));
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', title);

        setLoading(true);
        setMessage('');

        try {
            await axios.post('/gallery/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setMessage('Upload successful!');
            setFile(null);
            setTitle('');
            setPreview('');
            // Optional: navigate back or stay to upload more
            setTimeout(() => navigate('/admin/gallery/manage'), 1500);
        } catch (error) {
            setMessage('Upload failed. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/admin/dashboard" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors">
                <ChevronLeft className="h-5 w-5 mr-1" /> Back to Dashboard
            </Link>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8 border-b border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Upload className="h-6 w-6 text-blue-600" />
                        Upload New Image
                    </h1>
                </div>

                <div className="p-8">
                    {message && (
                        <div className={`p-4 rounded-lg mb-6 flex items-center ${message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            {message.includes('success') ? <Check className="h-5 w-5 mr-2" /> : <X className="h-5 w-5 mr-2" />}
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleUpload} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Image Title (Optional)</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                                placeholder="e.g., Happy Customer with Honda City"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Image</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors cursor-pointer relative bg-gray-50 hover:bg-gray-100" onClick={() => document.getElementById('file-upload').click()}>
                                <div className="space-y-1 text-center">
                                    {preview ? (
                                        <div className="relative inline-block group">
                                            <img src={preview} alt="Preview" className="h-64 rounded-lg object-contain mx-auto shadow-md" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-lg">
                                                <span className="bg-white text-gray-700 text-xs px-2 py-1 rounded shadow">Change Image</span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setFile(null);
                                                    setPreview('');
                                                }}
                                                className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors shadow-md"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                                            <div className="flex text-sm text-gray-600 justify-center">
                                                <span className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                                                    <span>Upload a file</span>
                                                </span>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                                        </>
                                    )}
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={!file || loading}
                                className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-0.5 ${loading || !file ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Uploading...' : 'Upload Image'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default UploadGallery;
