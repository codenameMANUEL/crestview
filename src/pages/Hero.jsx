import { Link } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear status when user starts typing again
    setSubmitStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const data = await response.json();
      setSubmitStatus({
        type: "success",
        message: "Thank you! We will get back to you soon.",
      });

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        projectDetails: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-no-repeat bg-right"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex flex-col lg:flex-row items-center min-h-screen px-6 md:px-16 lg:px-10 lg:py-20 py-16 space-y-8 lg:space-y-0 font-space-grotesk">
        {/* Text Section */}
        <div className="text-white z-10 w-full lg:w-3/5 text-center lg:text-left lg:pt-28">
          <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-text-100 uppercase">
            Build space for future dream
          </h1>
          <Link to="/about">
            <button className="bg-yellow-400 py-3 px-10 rounded-none hover:bg-yellow-300 hover:text-black text-sm font-semibold mt-5">
              OUR TEAM
            </button>
          </Link>
        </div>

        {/* Form Section */}
        <div className="backdrop-filter backdrop-blur-sm bg-opacity-0 rounded-lg shadow-lg p-6 w-full max-w-md z-10 lg:ml-8 border border-gray-600">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center lg:text-left text-white">
            Get Your Free Quote
          </h2>

          {/* Status Messages */}
          {submitStatus.message && (
            <div
              className={`mb-4 p-3 rounded ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-700 border-green-200"
                  : submitStatus.type === "error"
                  ? "bg-red-100 text-red-700 border-red-200"
                  : ""
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                name="name"
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white">
                Project Details
              </label>
              <textarea
                placeholder="Brief description of your project"
                className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                value={formData.projectDetails}
                onChange={handleChange}
                name="projectDetails"
                required
                disabled={loading}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-2 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Get Quote"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
