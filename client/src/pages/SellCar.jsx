
import React, { useState } from 'react';

const SellCar = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        make: '',
        model: '',
        year: '',
        condition: '', // e.g., Excellent, Good, Fair
        expectedPrice: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `I am interested in selling my car.%0A%0A*Details:*%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0AMake: ${formData.make}%0AModel: ${formData.model}%0AYear: ${formData.year}%0ACondition: ${formData.condition}%0AExpected Price: ${formData.expectedPrice}`;
        window.open(`https://wa.me/919900009946?text=${text}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-16 px-4">
            <div className="max-w-2xl mx-auto bg-black border border-gray-800 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Sell Your Car</h2>
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
                            <label className="block text-gray-400 text-sm font-medium mb-2">Car Make</label>
                            <input type="text" name="make" required onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="e.g., BMW" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Car Model</label>
                            <input type="text" name="model" required onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="e.g., X5" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Year of Manufacture</label>
                            <input type="number" name="year" required onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="e.g., 2020" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Expected Price (₹)</label>
                            <input type="number" name="expectedPrice" required onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="e.g., 5000000" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Condition / Additional Details</label>
                        <textarea name="condition" rows="3" onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="Describe the condition, mileage, etc."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                        Refine Price & Submit via WhatsApp
                    </button>
                    <p className="text-gray-500 text-sm text-center mt-4">
                        You will be redirected to WhatsApp to send these details to our team.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SellCar;
