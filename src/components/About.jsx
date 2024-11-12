import NavBar from "./Navbar";
import AboutUs1 from "../assets/aboutUs1.webp";
import MeetOurTeam from "./MeetOurTeam";
import Footer from "../components/Footer";
import Mission from "./mission";

export default function About() {
    return (
        <>
            <NavBar />
            <div className="px-4 md:px-28 py-12 md:py-14 bg-navy">
                <p className="text-lg md:text-2xl text-white">Home - About</p>
            </div>
            <div className="container mx-auto px-4 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Text Div */}
                    <div className="lg:pt-20">
                        <p className="pt-4 text-black uppercase font-bold text-sm mb-4">
                            Who we are
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
                            Bringing Your <span className="text-green-600">Ideas</span> and Innovations to Life
                        </h2>
                        <p className="mb-4">
                            Our civil and structural team is committed to providing sustainable, creative & efficient engineering solutions for our communities.
                        </p>
                        <ul className="list-disc pl-5 mb-4">
                            <li className="mb-2">Making lives easier</li>
                            <li className="mb-2">Get every solution right here</li>
                            <li className="mb-2">Innovation and creativity</li>
                            <li className="tracking-tight">Fine engineering only with us</li>
                        </ul>
                        <button className="bg-yellow-400 py-3 px-6 rounded-none text-sm font-semibold mt-10">CONTACT US</button>
                    </div>

                    {/* Image Div */}
                    <div className="flex justify-center items-center bg-white pt-10">
                        <img src={AboutUs1} alt="About Us" className="w-full h-auto max-w-md" />
                    </div>
                </div>
            </div>


            <Mission/>

            {/* Testimonial Section */}
            <section id="testimonials" aria-label="What our customers are saying" className="py-20 sm:py-32 px-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="font-semibold text-3xl tracking-tight text-slate-900 sm:text-4xl text-center mb-10">What Our Customers Are Saying</h2>
                    </div>
                    <ul role="list"
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                        {/* Testimonial Item */}
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                            {/* SVG Path Here */}
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.</p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img alt="Sheryl Berge" className="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/15.jpg" />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                            {/* SVG Path Here */}
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.</p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img alt="Sheryl Berge" className="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/15.jpg" />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg aria-hidden="true" width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                                            {/* SVG Path Here */}
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.</p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img alt="Sheryl Berge" className="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/15.jpg" />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <MeetOurTeam/>
            <Footer/>
        </>
    );
}
