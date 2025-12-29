import React from 'react';

import AstonMartin from '../assets/Aston Martin.jpeg';
import Audi from '../assets/Audi.jpeg';
import BMW from '../assets/BMW.jpeg';
import Bentley from '../assets/Bentley.jpeg';
import Ferrari from '../assets/Ferrari.png';
import Ford from '../assets/Ford.jpeg';
import Jaguar from '../assets/Jaguar.jpeg';
import Jeep from '../assets/Jeep.png';
import Kia from '../assets/Kia.png';
import Lamborghini from '../assets/Lamborghini.jpeg';
import Lexus from '../assets/Lexus.jpeg';
import MG from '../assets/MG.jpeg';
import Maserati from '../assets/Maserati.jpeg';
import MercedesBenz from '../assets/Mercedes Benz.png';
import Mini from '../assets/Mini.png';
import Porsche from '../assets/Porsche.jpeg';
import RangeRover from '../assets/Range Rover.png';
import RollsRoyce from '../assets/Rolls Royce.jpeg';
import Toyota from '../assets/Toyoto.jpeg';
import Volkswagen from '../assets/Volkswagen.jpeg';
import Volvo from '../assets/Volvo.png';

const brands = [
    { name: "Porsche", logo: Porsche },
    { name: "Range Rover", logo: RangeRover },
    { name: "Rolls Royce", logo: RollsRoyce },
    { name: "Toyota", logo: Toyota },
    { name: "Volkswagen", logo: Volkswagen },
    { name: "Volvo", logo: Volvo },
    { name: "Maserati", logo: Maserati },
    { name: "Mercedes Benz", logo: MercedesBenz },
    { name: "MG", logo: MG },
    { name: "Mini", logo: Mini },
    { name: "Ford", logo: Ford },
    { name: "Jaguar", logo: Jaguar },
    { name: "JEEP", logo: Jeep },
    { name: "Kia", logo: Kia },
    { name: "Lamborghini", logo: Lamborghini },
    { name: "Lexus", logo: Lexus },
    { name: "Aston Martin", logo: AstonMartin },
    { name: "Audi", logo: Audi },
    { name: "Bentley", logo: Bentley },
    { name: "BMW", logo: BMW },
    { name: "Ferrari", logo: Ferrari }
];

const Brands = () => {
    return (
        <section className="py-20 bg-black/40 overflow-hidden border-y border-white/5 relative">
            {/* Gradient Mask for Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-sm font-bold text-red-600 tracking-[0.3em] uppercase mb-2">Heritage</h2>
                        <p className="text-3xl font-extrabold text-white sm:text-4xl italic">Our Elite Collection</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 group cursor-pointer w-[calc(50%-2rem)] sm:w-[calc(33.33%-2rem)] md:w-[calc(20%-2rem)] lg:w-[calc(14.28%-2rem)]"
                        >
                            <div className="relative w-24 h-24 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform bg-black rounded-xl p-4 border border-gray-800 group-hover:border-red-600/50 group-hover:bg-black group-hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] duration-300">
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <span className="hidden text-[10px] font-bold text-gray-400 text-center uppercase">{brand.name}</span>
                            </div>
                            <span className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 group-hover:text-red-500 transition-all duration-300">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
