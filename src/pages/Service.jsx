import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import service01 from "../assets/service01.jpg";
import service02 from "../assets/service02.jpg";
import service03 from "../assets/service03.jpg";
import service04 from "../assets/service04.jpeg";

export default function Service() {
  return (
    <>
      <NavBar />
      <div className="px-4 md:px-28 py-12 md:py-14 bg-navy font-space-grotesk">
        <p className="text-lg md:text-2xl text-white uppercase">
          <span className="text-md">SERVICE</span>
        </p>
      </div>

      {/* Intro Section */}
      <div className="px-4 md:px-28 py-12 lg:py-16 bg-gray-100">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-navy">
          Our Construction Services
        </h2>
        <p className="mt-4 text-lg md:text-xl text-center text-gray-700">
          At Crestview, we specialize in providing top-notch construction services that ensure quality, precision, and reliability. Whether you're looking for preconstruction planning, comprehensive management, or lean construction strategies, our team is committed to delivering excellence at every step of your project. Explore our services below to learn more about how we can help bring your vision to life.
        </p>
      </div>

      {/* Service 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between font-space-grotesk px-4 md:px-28 py-12 lg:py-16">
        <div className="flex-1 text-start md:pr-8">
          <h1 className="text-xl md:text-2xl font-bold">Preconstruction</h1>
          <p className="mt-2 text-lg md:text-xl">Crestview's collaborative approach to preconstruction, founded on transparency and accountability, is the most trusted and comprehensive in the industry.</p>
        </div>
        <div className="flex-1 mt-4 md:mt-0 md:pl-8">
          <img src={service01} alt="Service Image" className="w-full h-auto" />
        </div>
      </div>

      {/* Service 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between font-space-grotesk px-4 md:px-28 py-12 lg:py-16">
        <div className="flex-1 mt-4 md:mt-0 md:pr-8">
          <img src={service02} alt="Service Image" className="w-full h-auto" />
        </div>
        <div className="flex-1 text-start mt-4 md:mt-0 md:pl-8">
          <h1 className="text-xl md:text-2xl font-bold">Construction Management</h1>
          <p className="mt-2 text-lg md:text-xl">Crestview has established itself as a trusted leader in construction services across North America and globally, with a longstanding reputation for excellence.</p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between font-space-grotesk px-4 md:px-28 py-12 lg:py-16">
        <div className="flex-1 text-start md:pr-8">
          <h1 className="text-xl md:text-2xl font-bold">Project Management</h1>
          <p className="mt-2 text-lg md:text-xl">Crestview's collaborative approach to preconstruction, founded on transparency and accountability, is the most trusted and comprehensive in the industry.</p>
        </div>
        <div className="flex-1 mt-4 md:mt-0 md:pl-8">
          <img src={service04} alt="Service Image" className="w-full h-auto" />
        </div>
      </div>

      {/* Service 4 */}
      <div className="flex flex-col md:flex-row items-center justify-between font-space-grotesk px-4 md:px-28 py-12 lg:py-16">
        <div className="flex-1 mt-4 md:mt-0 md:pr-8">
          <img src={service03} alt="Service Image" className="w-full h-auto" />
        </div>
        <div className="flex-1 text-start mt-4 md:mt-0 md:pl-8">
          <h1 className="text-xl md:text-2xl font-bold">Lean Construction</h1>
          <p className="mt-2 text-lg md:text-xl">Lean is a philosophy that emphasizes the elimination of waste to create a smoothly flowing production process that produces only what is needed, when it is needed, and in the quantity needed.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
