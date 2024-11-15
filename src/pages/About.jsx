import NavBar from "../components/Navbar.jsx";
import AboutUs1 from "../assets/aboutUs1.webp";
import MeetOurTeam from "../components/MeetOurTeam";
import Footer from "../components/Footer";
// import Mission from "./mission";
import Mission from "../components/Mission.jsx";
import { Link } from "react-router-dom";
import dont1 from "../assets/dont1.jpeg"
import dont2 from "../assets/dont2.jpeg"
import dont3 from "../assets/dont3.jpeg"

export default function About() {
  return (
    <>
      <NavBar />
      <div className="px-4 md:px-28 py-12 md:py-14 bg-navy font-space-grotesk">
        <p className="text-lg md:text-2xl text-white uppercase">
          Home - <span className="text-sm pl-6">About</span>
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-16 font-space-grotesk">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Div */}
          <div className="lg:pt-20">
            <p className="pt-4 text-black uppercase font-bold text-sm mb-4">
              Who we are
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
              Bringing Your <span className="text-green-600">Ideas</span> and
              Innovations to Life
            </h2>
            <p className="mb-4">
              Our civil and structural team is committed to providing
              sustainable, creative & efficient engineering solutions for our
              communities.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Making lives easier</li>
              <li className="mb-2">Get every solution right here</li>
              <li className="mb-2">Innovation and creativity</li>
              <li className="tracking-tight">Fine engineering only with us</li>
            </ul>
            <Link to="/contact">
              <button className="bg-yellow-400 py-3 px-6 rounded-none text-sm font-semibold mt-10">
                CONTACT US
              </button>
            </Link>
          </div>

          {/* Image Div */}
          <div className="flex justify-center items-center bg-white pt-10">
            <img
              src={AboutUs1}
              alt="About Us"
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>
      </div>

      <Mission />

      {/* Testimonial Section */}
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="py-20 sm:py-32 px-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-semibold text-3xl tracking-tight text-slate-900 sm:text-4xl text-center mb-10v uppercase">
              What Our Customers Are Saying
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            {/* Testimonial Item */}
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded bg-white p-6 shadow-sm shadow-slate-900/10 border">
                    <svg
                      aria-hidden="true"
                      width="105"
                      height="78"
                      className="absolute left-6 top-6 fill-slate-100"
                    >
                      {/* SVG Path Here */}
                    </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        "Having worked with numerous contractors over the years,
                        this company stands out for their reliability and
                        expertise. They've successfully delivered multiple
                        high-end residential developments for us, consistently
                        maintaining high standards and meeting tight deadlines."
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                        Sofia Elise Hernandez
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt="Sheryl Berge"
                          className="h-14 w-14 object-cover"
                          src={dont1}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded bg-white p-6 shadow-sm shadow-slate-900/10 border">
                    <svg
                      aria-hidden="true"
                      width="105"
                      height="78"
                      className="absolute left-6 top-6 fill-slate-100"
                    >
                      {/* SVG Path Here */}
                    </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        "We couldn't be happier with our custom home. Their
                        innovative design solutions and quality craftsmanship
                        transformed our vision into reality. The construction
                        team was professional, clean, and respectful of our
                        property throughout the entire build."
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                        Gabriel Castillo
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt="Sheryl Berge"
                          className="h-14 w-14 object-cover"
                          src={dont2}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded bg-white p-6 shadow-sm shadow-slate-900/10 border">
                    <svg
                      aria-hidden="true"
                      width="105"
                      height="78"
                      className="absolute left-6 top-6 fill-slate-100"
                    >
                      {/* SVG Path Here */}
                    </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        "The team's attention to detail and project management
                        excellence exceeded our expectations. They completed our
                        20-story commercial building ahead of schedule and
                        within budget. Their professionalism and communication
                        throughout the process were outstanding."
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">
                        Amelia  Morales
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt="Sheryl Berge"
                          className="h-14 w-14 object-cover"
                          src={dont3}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <MeetOurTeam />
      <Footer />
    </>
  );
}
