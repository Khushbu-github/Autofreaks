import BenzE220_1 from '../assets/Benz e200 longwheel base1.jpg';
import BenzE220_2 from '../assets/Benz e200 longwheel base2.jpg';

import MiniJCW_1 from '../assets/Mini Cooper S Country man JCW 2022-1.jpg';
import MiniJCW_2 from '../assets/Mini Cooper S Country man JCW 2022-2.jpg';
import MiniJCW_3 from '../assets/Mini Cooper S Country man JCW 2022-3.jpg';

import RR_1 from '../assets/Rolls Royce Ghost (Mansory)1.PNG';
import RR_2 from '../assets/Rolls Royce Ghost (Mansory)2.PNG';
import RR_3 from '../assets/Rolls Royce Ghost (Mansory)3.PNG';
import RR_4 from '../assets/Rolls Royce Ghost (Mansory)4.PNG';

import GLS450_1 from '../assets/Benz GLS 450-1.jpg';
import GLS450_2 from '../assets/Benz GLS 450-2.jpg';
import GLS450_3 from '../assets/Benz GLS 450-3.jpg';
import GLS450_4 from '../assets/Benz GLS 450-4.jpg';

import Aston_1 from '../assets/Aston Martin1.JPG';
import Aston_2 from '../assets/Aston Martin2.JPG';
import Aston_3 from '../assets/Aston Martin3.JPG';
import Aston_4 from '../assets/Aston Martin4.JPG';

import Commuter_1 from '../assets/Toyoto Commuter (white board)- 1.jpg';
import Commuter_2 from '../assets/Toyoto Commuter (white board)- 2.jpg';
import Commuter_3 from '../assets/Toyoto Commuter (white board)- 3.jpg';

import Innova_1 from '../assets/Toyoto Innova Crysta GX + 1.jpg';
import Innova_2 from '../assets/Toyoto Innova Crysta GX + 2.jpg';
import Innova_3 from '../assets/Toyoto Innova Crysta GX + 3.jpg';

import GLE53_1 from '../assets/Benz GLE 53 AMG 1.jpg';
import GLE53_2 from '../assets/Benz GLE 53 AMG 2.jpg';
import GLE53_3 from '../assets/Benz GLE 53 AMG 3.jpg';

import GLS300D_1 from '../assets/Benz GLS 300 D-1.jpg';
import GLS300D_2 from '../assets/Benz GLS 300 D-2.jpg';
import GLS300D_3 from '../assets/Benz GLS 300 D-3.jpg';


export const cars = [
    {
        id: 1,
        name: "Benz E220 D (Long Wheel Base)",
        brand: "Mercedes-Benz",
        year: 2017,
        price: null, // Contact for Price
        kms: "57k",
        variant: "Exclusive",
        colour: "Grey",
        transmission: "AT",
        fuel: "Diesel",
        owner: "Second",
        insurance: "Valid",
        registration: "KA",
        description: "Eye it, drive it, own it. Luxury sedan with exclusive features.",
        images: [BenzE220_1, BenzE220_2]
    },
    {
        id: 2,
        name: "Mini Cooper S Countryman JCW",
        brand: "Mini",
        year: 2022,
        price: null,
        kms: "32k",
        variant: "JCW",
        colour: "White Silver Metallic",
        transmission: "AT",
        fuel: "Petrol",
        owner: "Single",
        insurance: "Valid",
        registration: "KA",
        description: "Sporty and stylish Mini Cooper S Countryman JCW.",
        images: [MiniJCW_1, MiniJCW_2, MiniJCW_3]
    },
    {
        id: 3,
        name: "Rolls Royce Ghost Series I Mansory",
        brand: "Rolls Royce",
        year: 2010,
        price: 17500000, 
        kms: "33,000 kms",
        variant: "Ghost Series I Mansory",
        colour: "Silver Metallic (Exterior) / Beige (Interior)",
        transmission: "AT",
        fuel: "Petrol",
        owner: "2nd",
        insurance: "Valid",
        registration: "HR",
        description: "Ultimate luxury with Mansory Kit, Rear Entertainment, Massage Seats, and more.",
        features: [
            "Rear Entertainment Screens",
            "Front & Rear Heated Seats",
            "4 Zone Automatic Climate Control",
            "Airmatic Suspension",
            "Panoramic Sunroof",
            "Mansory Kit",
            "Chrome Alloys",
            "Auto Closing Rear Doors"
        ],
        engine: "6.6L V12",
        maxPower: "570 bhp @ 5250 rpm",
        maxTorque: "780 Nm @ 1500 rpm",
        images: [RR_1, RR_2, RR_3, RR_4]
    },
    {
        id: 4,
        name: "Benz GLS 450 D",
        brand: "Mercedes-Benz",
        year: 2024,
        price: null,
        kms: "11,000",
        variant: "450 D 4MATIC",
        colour: "Blue",
        transmission: "AT",
        fuel: "Diesel",
        owner: "Single",
        insurance: "Valid",
        registration: "KA",
        description: "The S-Class of SUVs. Powerful, spacious, and luxurious.",
        images: [GLS450_1, GLS450_2, GLS450_3, GLS450_4]
    },
    {
        id: 5,
        name: "Aston Martin DBX",
        brand: "Aston Martin",
        year: "2020/21",
        price: 24900000,
        kms: "12,000 kms",
        variant: "DBX",
        colour: "Jet Black (Exterior) / Ivory (Interior)",
        transmission: "AT",
        fuel: "Petrol",
        owner: "1st",
        insurance: "Valid (Till 11th Aug 2026)",
        registration: "KL",
        description: "Performance SUV with 4.0L V8 Twin Turbocharged engine.",
        features: [
            "22-inch Ribbon Satin Black Alloys",
            "4 Zone Automatic Climate Control",
            "Auto Lane Recognition",
            "Blind Spot Assistance",
            "Active Cruise Control",
            "Heated & Ventilated Seats",
            "Electric Tailgate",
            "Soft Closing Doors",
            "Airmatic Suspension",
            "Panoramic Glass Roof",
            "360° Camera System",
            "Ambient Lighting"
        ],
        engine: "4.0L V8 Twin Turbocharged",
        maxPower: "697 bhp @ 6000 rpm",
        maxTorque: "900 Nm @ 2750 rpm",
        images: [Aston_1, Aston_2, Aston_3, Aston_4]
    },
    {
        id: 6,
        name: "Toyota Commuter (White Board)",
        brand: "Toyota",
        year: "2008/10",
        price: null,
        kms: "85 k",
        variant: "9 + 1 Seater",
        colour: "White",
        transmission: "AT",
        fuel: "Diesel",
        owner: "Second",
        insurance: "Valid",
        registration: "KA",
        description: "Spacious and reliable commuter van. Tax paid, FC done.",
        images: [Commuter_1, Commuter_2, Commuter_3]
    },
    {
        id: 7,
        name: "Toyota Innova Crysta GX+",
        brand: "Toyota",
        year: 2024,
        price: null,
        kms: "13k run",
        variant: "GX+",
        colour: "White",
        transmission: "MT",
        fuel: "Diesel",
        owner: "Single",
        insurance: "Valid",
        registration: "KA (VVVIP)",
        description: "Reliable and comfortable family MPV.",
        images: [Innova_1, Innova_2, Innova_3]
    },
    {
        id: 8,
        name: "GLE 53 AMG S",
        brand: "Mercedes-Benz",
        year: 2022,
        price: null,
        kms: "29K",
        variant: "53 AMG",
        colour: "Black",
        transmission: "AT",
        fuel: "Petrol",
        owner: "Single",
        insurance: "Valid",
        registration: "KA",
        description: "High-performance AMG SUV coupe.",
        images: [GLE53_1, GLE53_2, GLE53_3]
    },
    {
        id: 9,
        name: "Benz GLE 300 D",
        brand: "Mercedes-Benz",
        year: 2022,
        price: null,
        kms: "50K",
        variant: "300 D",
        colour: "White",
        transmission: "AT",
        fuel: "Diesel",
        owner: "Single",
        insurance: "Valid",
        registration: "KA",
        description: "Luxury mid-size SUV with diesel efficiency.",
        images: [GLS300D_1, GLS300D_2, GLS300D_3] 
    }
];
