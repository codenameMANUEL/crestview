import { ArrowRight } from 'lucide-react';


export default function Mission() {
    const titles = [
        "Vision",
        "Mission",
        "Values",
    ];
    return (
        <div className="container mx-auto px-4 md:px-20 py-12 md:py-14">
            <h1 className='font-semibold text-3xl tracking-tight text-slate-900 sm:text-4xl text-center mb-10'>Purpose</h1>
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
    )
}