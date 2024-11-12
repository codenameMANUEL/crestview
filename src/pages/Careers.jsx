import { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Careers() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Customer Support Representative",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nulla quasi quo, enim amet pariatur. Aliquid modi reiciendis perspiciatis omnis nulla veritatis aut reprehenderit explicabo laborum provident dolor odit at, a perferendis nostrum libero culpa deserunt deleniti quasi.",
    },
    {
      question: "Virtual Entry",
      answer: "We have strict quality control processes in place to maintain high standards in all our projects.",
    },
    {
      question: "Data Entry",
      answer: "We offer a wide range of construction services, including residential, commercial, and industrial projects.",
    },
    {
      question: "Marketing",
      answer: "We offer a wide range of construction services, including residential, commercial, and industrial projects.",
    },
  ];

  return (
    <>
      <NavBar />
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl text-start">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At <span className="font-bold text-indigo-600">Crestview Construction</span>, we're passionate about building a brighter future together. As a growing leader in the{" "}
            <span className="italic">Construction</span> industry, we’re always on the lookout for talented individuals who are eager to make an impact. Whether you're a seasoned professional or just starting your career, we offer opportunities for growth, development, and collaboration.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            We believe in creating a supportive and inclusive environment where innovation thrives and each team member can contribute to our shared vision. With a strong commitment to excellence, teamwork, and continuous improvement, we’re dedicated to fostering a culture of respect, creativity, and passion.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Explore our open positions below and find out how you can become part of our dynamic team. Together, we can achieve great things.
          </p>
        </div>
        <div className="sm:px-6 lg:px-16 pt-16">
          {accordionData.map((item, index) => (
            <div key={index} className="mt-5 border-b">
              <button
                className="flex justify-between w-full p-4 text-left text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl sm:text-2xl">{item.question}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-full' : 'h-0'}`}>
                <div className="p-4 border-gray-200">
                  <p className="text-gray-600">{item.answer}</p>
                  <button
                    className="bg-yellow-400 active:bg-yellow-600 font-bold uppercase text-sm sm:text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-5"
                    type="button"
                    onClick={() => setShowModal(true)} // This will open the modal
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-xl sm:max-w-2xl">
            {/* Content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-2xl sm:text-3xl font-semibold">Apply for a Position</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)} // Close modal on "×"
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none cursor-pointer">×</span>
                </button>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  Thank you for your interest in joining our team! Please fill out the application form and upload your resume. We look forward to hearing from you.
                </p>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                  type="button"
                  onClick={() => setShowModal(false)} // Close modal on "Close"
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                  type="button"
                  onClick={() => setShowModal(false)} // Close modal on "Submit" (you can change this later to submit the form)
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
          {/* Overlay */}
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </div>
      )}

      <Footer />
    </>
  );

}
