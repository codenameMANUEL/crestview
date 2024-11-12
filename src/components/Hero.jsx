import HeroImage from "../../src/assets/hero-image.jpg"

export default function Hero() {
    return (
        <>
            <div
                className="relative h-96 bg-cover bg-top">
                <img src={HeroImage} />
                <div className="absolute inset-0 w-3/5 pt-32 pl-32">
                    <p className="text-white text-1xl uppercase font-semibold">Professional. Innovative. Reliable.</p>
                    <h1 className="text-white text-5xl font-semibold pt-4">Exceptional <br /> Service Exceeding Expectations</h1>
                    <p className="pt-5 font-medium text-white">Our civil and structural team is committed to providing sustainable, creative & efficient engineering solutions for our communities</p>
                    <button className="bg-amber-600 p-4 mt-4 font-semibold">GET A QUOTE</button>
                </div>
            </div>

            <div className="absolute flex justify-center pt-48 px-24 gap-20">
                <div className="h-64 w-72 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 pt-4 px-4 flex flex-col justify-center items-center cursor-pointer">
                    <p className="text-white font-bold text-3xl pb-5">100%</p>
                    <h1 className="text-white font-bold text-xl">QUALITY ASSURED</h1>
                </div>
                <div className="h-64 w-72 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 pt-4 px-4 flex flex-col justify-center items-center cursor-pointer">
                    <p className="text-white font-bold text-3xl pb-5">128 +</p>
                    <h1 className="text-white font-bold text-xl">PROJECTS COMPLETED</h1>
                </div>
                <div className="h-64 w-72 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 pt-4 px-4 flex flex-col justify-center items-center cursor-pointer">
                    <p className="text-white font-bold text-3xl pb-5">$2M+</p>
                    <h1 className="text-white font-bold text-xl">BUDGET MANAGED</h1>
                </div>
            </div>

        </>
    )
}
