import { MapPin } from 'lucide-react';
import where1 from "../../src/assets/where01.jpg";
import where2 from "../../src/assets/where02.jpg";
import where3 from "../../src/assets/where03.jpg";
import where4 from "../../src/assets/where04.jpg";

export default function WhereWeWork() {
    const titles = [
        "Queens Place Mall",
        "The Fulton Center",
        "CF Chinook Centre",
        "Dartmouth Crossing"
    ];

    const locations = [
        "8801 Queens Blvd, Queens, NY 11373, USA",
        "200 Broadway, New York, NY 10038, USA",
        "6455 Macleod Trail, Calgary, AB T2H 0K8, Canada",
        "34 Logiealmond Close, Dartmouth, NS B3B 0C8, Canada"
    ];

    // Array of imported images
    const images = [where1, where2, where3, where4];

    return (
        <div className="bg-navy px-4 md:px-28 py-12 md:py-24 font-space-grotesk">
            <p className="uppercase font-bold text-sm text-white">What we do</p>
            <p className="text-3xl md:text-5xl font-semibold text-white">Our <span className="text-green-600">Projects</span></p>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 cursor-pointer">
                    {titles.map((title, index) => (
                        <div key={index} className="overflow-hidden transition-transform">
                            <img
                                src={images[index]} 
                                alt={`Card Image ${index + 1}`}
                                className="w-full h-96 object-cover"
                            />
                            <div className="">
                                <h2 className="text-2xl font-bold mb-2 mt-3 text-white">{title}</h2>
                                <p className="border-b mb-2"></p>
                                <p className="text-white flex">
                                    <span className='text-yellow-500 pr-3'><MapPin/></span>
                                    {locations[index]} 
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
