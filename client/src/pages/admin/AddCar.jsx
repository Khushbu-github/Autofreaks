import React, { useState } from 'react';
import axios from '../../utils/axios';
import { Upload, X, Check, Image as ImageIcon, ChevronLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const AddCar = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        year: '',
        price: '', // can be empty for null
        kms: '',
        variant: '',
        colour: '',
        transmission: 'AT',
        fuel: 'Petrol',
        owner: '',
        insurance: 'Valid',
        registration: '',
        description: '',
        features: '', // Comma separated string
        engine: '',
        maxPower: '',
        maxTorque: ''
    });

    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        // Combine existing files with new ones, ensuring max 5
        const totalFiles = [...files, ...selectedFiles].slice(0, 5);

        if (selectedFiles.length + files.length > 5) {
            alert("Maximum 5 images allowed. Only the first 5 will be kept.");
        }

        setFiles(totalFiles);

        // Create previews
        const newPreviews = totalFiles.map(file => URL.createObjectURL(file));
        setPreviews(newPreviews);
    };

    const removeFile = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);

        const newPreviews = [...previews];
        newPreviews.splice(index, 1);
        setPreviews(newPreviews);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const data = new FormData();

            // Append all text fields
            Object.keys(formData).forEach(key => {
                if (key === 'features') {
                    // Convert comma separated string to array or keep as string for backend to parse
                    // Let's send it as is, backend handles parsing or we parse here
                    // Backend implementation expects array or string it can parse. 
                    // Let's split by comma and trim to be safe if backend expects array, 
                    // BUT my backend implementation handles string parsing too. 
                    // Let's send the raw string, or JSON stringify an array.
                    // Let's split it here to be cleaner.
                    const featuresArray = formData.features.split(',').map(f => f.trim()).filter(f => f);
                    data.append('features', JSON.stringify(featuresArray));
                } else if (key === 'price') {
                    if (formData.price) data.append('price', formData.price);
                    // if empty, don't append, backend defaults to null
                } else {
                    data.append(key, formData[key]);
                }
            });

            // Append images
            files.forEach(file => {
                data.append('images', file);
            });

            await axios.post('/cars', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            setMessage('Car added successfully!');
            setTimeout(() => navigate('/admin/cars/manage'), 1500);
        } catch (error) {
            console.error(error);
            setMessage('Failed to add car. Please check inputs and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
            <Link to="/admin/cars/manage" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ChevronLeft className="h-5 w-5 mr-1" /> Back to Cars List
            </Link>

            <div className="bg-gray-900/50 backdrop-blur rounded-2xl shadow-lg border border-gray-800 overflow-hidden">
                <div className="p-8 border-b border-gray-800">
                    <h1 className="text-2xl font-bold text-white italic">Add New Car</h1>
                    <p className="text-gray-400 text-sm mt-1">Enter car details and upload up to 5 images.</p>
                </div>

                <div className="p-8">
                    {message && (
                        <div className={`p-4 rounded-lg mb-6 flex items-center ${message.includes('success') ? 'bg-green-900/30 text-green-400 border border-green-800' : 'bg-red-900/30 text-red-400 border border-red-800'}`}>
                            {message.includes('success') ? <Check className="h-5 w-5 mr-2" /> : <X className="h-5 w-5 mr-2" />}
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Car Name *</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. Benz E220 D" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Brand *</label>
                                <input required type="text" name="brand" value={formData.brand} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. Mercedes-Benz" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Year *</label>
                                <input required type="text" name="year" value={formData.year} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. 2022 or 2020/21" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Price (₹) (Leave empty for 'Contact for Price')</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. 7500000" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">KMs Driven *</label>
                                <input required type="text" name="kms" value={formData.kms} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. 57k" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Variant *</label>
                                <input required type="text" name="variant" value={formData.variant} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. Exclusive" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Colour *</label>
                                <input required type="text" name="colour" value={formData.colour} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. Grey" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Transmission *</label>
                                <select name="transmission" value={formData.transmission} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white">
                                    <option value="AT">Automatic (AT)</option>
                                    <option value="MT">Manual (MT)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Fuel *</label>
                                <select name="fuel" value={formData.fuel} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white">
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Owner *</label>
                                <input required type="text" name="owner" value={formData.owner} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. Single" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Registration *</label>
                                <input required type="text" name="registration" value={formData.registration} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. KA" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Insurance</label>
                                <input type="text" name="insurance" value={formData.insurance} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="Valid" />
                            </div>
                        </div>

                        {/* Description & Technical */}
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Description *</label>
                                <textarea required name="description" value={formData.description} onChange={handleChange} rows="3" className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="Brief description of the car..."></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Features (Comma separated)</label>
                                <textarea name="features" value={formData.features} onChange={handleChange} rows="2" className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="Sunroof, Leather Seats, 360 Camera..."></textarea>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Engine</label>
                                <input type="text" name="engine" value={formData.engine} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. 2.0L Turbo" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Max Power</label>
                                <input type="text" name="maxPower" value={formData.maxPower} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. 190 bhp" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Max Torque</label>
                                <input type="text" name="maxTorque" value={formData.maxTorque} onChange={handleChange} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2.5 text-white focus:ring-white focus:border-white" placeholder="e.g. 400 Nm" />
                            </div>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Car Images (Max 5) *</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg hover:border-white transition-colors cursor-pointer relative bg-gray-800/50 hover:bg-gray-800" onClick={() => document.getElementById('file-upload').click()}>
                                <div className="space-y-1 text-center">
                                    <ImageIcon className="mx-auto h-12 w-12 text-gray-500" />
                                    <div className="flex text-sm text-gray-400 justify-center">
                                        <span className="relative cursor-pointer rounded-md font-medium text-white hover:text-gray-300 focus-within:outline-none">
                                            <span>Upload images</span>
                                        </span>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Max 5 images allowed</p>
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
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                                {previews.map((preview, index) => (
                                    <div key={index} className="relative group">
                                        <img src={preview} alt={`Preview ${index}`} className="h-24 w-full object-cover rounded-lg border border-gray-700" />
                                        <button
                                            type="button"
                                            onClick={() => removeFile(index)}
                                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 opacity-100 shadow-lg hover:bg-red-700"
                                        >
                                            <X className="h-3 w-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex justify-end pt-4 border-t border-gray-800">
                            <button
                                type="submit"
                                disabled={loading || files.length === 0}
                                className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-lg shadow-sm text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all transform hover:-translate-y-0.5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Saving...' : 'Add Car'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCar;
