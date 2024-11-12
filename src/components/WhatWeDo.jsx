import { ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
    const titles = [
        "Consulting",
        "Design",
        "Implementation",
        "Testing",
        "Support",
        "Optimization"
    ];

    return (
        <div className="px-4 md:px-28 py-12 md:py-24">
            <div className='pb-10 text-center md:text-left'>
                <p className="uppercase font-bold text-sm">What we do</p>
                <p className="text-3xl md:text-5xl font-semibold">Multi-Disciplined</p>
                <p className="text-3xl md:text-5xl font-semibold">
                    Engineering <span className="text-green-600">Solutions</span>
                </p>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {titles.map((title, index) => (
                        <div key={index} className="max-w-sm lg:max-w-lg overflow-hidden border hover:border-green-600 transition cursor-pointer">
                            <div className="px-6 py-4">
                                <div className="font-bold text-3xl mb-4 text-slate-400">0{index + 1}</div>
                                <p className="text-lg font-bold mb-3">{title}</p>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                </p>
                            </div>
                            <div className="px-6 pt-2 pb-4">
                                <p className="text-green-600 cursor-pointer font-semibold text-sm flex">DETAILS <ArrowRight/></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
