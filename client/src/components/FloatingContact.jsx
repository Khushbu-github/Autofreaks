import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
    const phoneNumber = '+919900009946';
    const whatsappNumber = '919900009946';

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {/* Phone Button */}
            <button
                onClick={handleCall}
                className="group flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 relative"
                aria-label="Call us"
            >
                <Phone size={24} />
                <span className="absolute right-full mr-3 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Call Now
                </span>
            </button>

            {/* WhatsApp Button */}
            <button
                onClick={handleWhatsApp}
                className="group flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 relative animate-pulse"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={24} />
                <span className="absolute right-full mr-3 bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    WhatsApp
                </span>
            </button>
        </div>
    );
};

export default FloatingContact;
