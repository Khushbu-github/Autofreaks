
import React, { useState } from 'react';

const BuyCar = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        make: '', // Preferred Make
        model: '', // Preferred Model
        budget: '',
        requirements: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `I am interested in buying a car.%0A%0A*Details:*%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0APreferred Make: ${formData.make}%0APreferred Model: ${formData.model}%0ABudget: ${formData.budget}%0ARequirements: ${formData.requirements}`;
        window.open(`https://wa.me/919900009946?text=${text}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-16 px-4">
            <div className="max-w-2xl mx-auto bg-black border border-gray-800 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Find Your Dream Car</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                            <input type="text" name="name" required onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Mobile Number</label>
                            <input type="tel" name="mobile" required onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="Your Mobile" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Preferred Make</label>
                            <input type="text" name="make" required onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="e.g., Porsche" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Preferred Model</label>
                            <input type="text" name="model" onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="e.g., 911" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Budget (₹)</label>
                        <input type="number" name="budget" required onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="e.g., 10000000" />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Specific Requirements</label>
                        <textarea name="requirements" rows="3" onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="Any specific features, colors, etc."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                        Submit Inquiry via WhatsApp
                    </button>
                    <p className="text-gray-500 text-sm text-center mt-4">
                        You will be redirected to WhatsApp to send this inquiry to our team.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default BuyCar;
