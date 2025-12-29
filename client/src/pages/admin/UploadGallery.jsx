import React, { useState } from 'react';
import axios from '../../utils/axios';
import { Upload, X, Check, Image as ImageIcon, ChevronLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const UploadGallery = () => {
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length > 5) {
            setMessage('You can only upload up to 5 images at a time.');
            return;
        }

        if (selectedFiles.length > 0) {
            setFiles(selectedFiles);
            const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
            setPreviews(newPreviews);
            setMessage('');
        }
    };

    const removeFile = (index) => {
        const newFiles = [...files];
        const newPreviews = [...previews];

        newFiles.splice(index, 1);
        newPreviews.splice(index, 1);

        setFiles(newFiles);
        setPreviews(newPreviews);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (files.length === 0) return;

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('images', file);
        });
        formData.append('title', title);

        setLoading(true);
        setMessage('');

        try {
            await axios.post('/gallery/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setMessage('Upload successful!');
            setFiles([]);
            setTitle('');
            setPreviews([]);
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
            <Link to="/admin/dashboard" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ChevronLeft className="h-5 w-5 mr-1" /> Back to Dashboard
            </Link>

            <div className="bg-gray-900/50 backdrop-blur rounded-2xl shadow-lg overflow-hidden border border-gray-800">
                <div className="p-8 border-b border-gray-800">
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2 italic">
                        <Upload className="h-6 w-6 text-white" />
                        Upload Gallery Images
                    </h1>
                    <p className="text-gray-400 text-sm mt-2">Upload up to 5 images at once.</p>
                </div>

                <div className="p-8">
                    {message && (
                        <div className={`p-4 rounded-lg mb-6 flex items-center ${message.includes('success') ? 'bg-gray-800 text-white border border-gray-600' : 'bg-gray-800 text-gray-300 border border-gray-600'}`}>
                            {message.includes('success') ? <Check className="h-5 w-5 mr-2" /> : <X className="h-5 w-5 mr-2" />}
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleUpload} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Batch Title (Optional)</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full px-4 py-3 border border-gray-700 bg-gray-900 text-white rounded-lg focus:ring-white focus:border-white sm:text-sm transition-colors placeholder-gray-500"
                                placeholder="e.g., Summer Collection"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Select Images (Max 5)</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg hover:border-white transition-colors cursor-pointer relative bg-gray-800/50 hover:bg-gray-800" onClick={() => document.getElementById('file-upload').click()}>
                                <div className="space-y-1 text-center">
                                    <ImageIcon className="mx-auto h-12 w-12 text-gray-500" />
                                    <div className="flex text-sm text-gray-400 justify-center">
                                        <span className="relative cursor-pointer rounded-md font-medium text-white hover:text-gray-300 focus-within:outline-none">
                                            <span>Upload files</span>
                                        </span>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB (Max 5 files)</p>
                                    <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        multiple
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Previews */}
                        {previews.length > 0 && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {previews.map((preview, index) => (
                                    <div key={index} className="relative group">
                                        <img src={preview} alt={`Preview ${index}`} className="h-32 w-full object-cover rounded-lg border border-gray-700" />
                                        <button
                                            type="button"
                                            onClick={() => removeFile(index)}
                                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-700 shadow-lg"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={files.length === 0 || loading}
                                className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-lg shadow-sm text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all transform hover:-translate-y-0.5 ${loading || files.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Uploading Batch...' : `Upload ${files.length > 0 ? files.length : ''} Image${files.length !== 1 ? 's' : ''}`}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default UploadGallery;
