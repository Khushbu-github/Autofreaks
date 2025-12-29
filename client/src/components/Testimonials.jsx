import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "RIKKI MUTTAPPA RAI",
        title: "Social Worker & Entrepreneur",
        text: "Autofreaks has redefined the luxury car buying experience. Their commitment to quality and transparency is truly commendable. A name you can trust."
    },
    {
        name: "DHRUVA SARJA",
        title: "Action Prince, Kannada Cinema",
        text: "The collection here is outstanding. If you're looking for performance and style combined with top-notch service, Autofreaks is the destination."
    },
    {
        name: "UMAPATHI SRINIVAS GOWDA",
        title: "Film Producer & Businessman",
        text: "Professionalism at its best. From selection to delivery, every step was seamless. Their attention to detail sets them apart in the industry."
    },
    {
        name: "SUMALATHA AMBRISH MADAM",
        title: "Member of Parliament & Veteran Actress",
        text: "It's rare to find such dedication to customer satisfaction. Autofreaks provides a premium experience that matches the luxury of their vehicles."
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-sm font-bold text-red-600 tracking-[0.3em] uppercase mb-2">Testimonials</h2>
                    <p className="text-3xl font-extrabold text-white sm:text-4xl italic">Trusted by Distinguished Personalities</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative p-10 bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-3xl hover:border-red-600/30 transition-all duration-700 group flex flex-col justify-between h-full"
                        >
                            <div className="absolute top-8 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Quote size={60} className="text-white fill-white" />
                            </div>

                            <div className="relative">
                                <p className="text-xl text-gray-300 leading-relaxed italic font-light mb-10">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="flex items-center space-x-5 border-t border-white/5 pt-8">
                                <div>
                                    <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors duration-500">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] mt-1">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
