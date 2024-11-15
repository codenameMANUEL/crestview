import { ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
    const services = [
        {
            title: "Consulting",
            description: "Expert guidance and strategic planning to help transform your business ideas into executable solutions."
        },
        {
            title: "Design",
            description: "Creating intuitive, scalable architectures and user experiences that align with your business objectives."
        },
        {
            title: "Implementation",
            description: "Transforming designs into robust, efficient code using cutting-edge technologies and best practices."
        },
        {
            title: "Testing",
            description: "Comprehensive quality assurance to ensure reliability, performance, and security of your solutions."
        },
        {
            title: "Support",
            description: "Continuous technical assistance and maintenance to keep your systems running smoothly 24/7."
        },
        {
            title: "Optimization",
            description: "Fine-tuning and enhancing existing systems to improve performance, efficiency, and user satisfaction."
        }
    ];

    return (
        <div className="px-4 md:px-28 py-12 md:py-24 font-space-grotesk">
            <div className='pb-10 text-center md:text-left'>
                <p className="uppercase font-bold text-sm">What we do</p>
                <p className="text-3xl md:text-5xl font-semibold">Multi-Disciplined</p>
                <p className="text-3xl md:text-5xl font-semibold">
                    Engineering <span className="text-green-600">Solutions</span>
                </p>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="max-w-sm lg:max-w-lg overflow-hidden border hover:border-green-600 transition cursor-pointer">
                            <div className="px-6 py-4">
                                <div className="font-bold text-3xl mb-4 text-slate-400">0{index + 1}</div>
                                <p className="text-lg font-bold mb-3">{service.title}</p>
                                <p className="text-gray-700 text-base">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

