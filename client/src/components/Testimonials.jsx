import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "RIKKI MUTTAPPA RAI",
        title: "Social Worker & Entrepreneur",
        text: "AUTOFREAKS has redefined the luxury car buying experience. Their commitment to quality and transparency is truly commendable. A name you can trust."
    },
    {
        name: "DHRUVA SARJA",
        title: "Action Prince, Kannada Cinema",
        text: "The collection here is outstanding. If you're looking for performance and style combined with top-notch service, AUTOFREAKS is the destination."
    },
    {
        name: "UMAPATHI SRINIVAS GOWDA",
        title: "Film Producer & Businessman",
        text: "Professionalism at its best. From selection to delivery, every step was seamless. Their attention to detail sets them apart in the industry."
    },
    {
        name: "SUMALATHA AMBRISH MADAM",
        title: "Member of Parliament & Veteran Actress",
        text: "It's rare to find such dedication to customer satisfaction. AUTOFREAKS provides a premium experience that matches the luxury of their vehicles."
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mb-12 sm:mb-16" data-aos="fade-up">
                    <h2 className="text-xs sm:text-sm font-bold text-red-600 tracking-[0.3em] uppercase mb-2">Testimonials</h2>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white italic">Trusted by Distinguished Personalities</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative p-6 sm:p-8 lg:p-10 bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-3xl hover:border-red-600/30 transition-all duration-700 group flex flex-col justify-between h-full"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="absolute top-6 right-6 sm:top-8 sm:right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Quote size={40} className="text-white fill-white sm:w-[60px] sm:h-[60px]" />
                            </div>

                            <div className="relative">
                                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed italic font-light mb-8 sm:mb-10">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="flex items-center space-x-5 border-t border-white/5 pt-6 sm:pt-8">
                                <div>
                                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors duration-500">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] mt-1">
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
