import { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Careers() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or display a confirmation
    setFullName("");
    setEmail("");
    setCv(null);
    setShowModal(false);
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("CV:", cv);
  };

  const handleFileChange = (e) => {
    setCv(e.target.files[0]);
  };

  const accordionData = [
    {
      question: "Customer Support Representative",
      answer:
        "Crestview Construction is NOW HIRING dedicated and enthusiastic Customer Service Representative to join our team. This role is essential in providing exceptional service to our clients and ensuring their needs are met efficiently. The ideal candidate will possess strong communication skills and a passion for helping others, contributing to a positive customer experience.",
      details: {
        whatWeOffer: [
          "Full-time customer service career, offering the flexibility to work remotely.",
          "$25 to $35 per hour",
          "401(k)",
          "Health insurance",
          "We will provide professional training to all staff members",
          "* We provide Work tools such as a laptop and other necessary equipment"
          // More offers...
        ],
        qualitiesWeValue: [
          "Openness to learn and be coached.",
          "Outgoing, friendly, positive, and approachable personality.",
          // More qualities...
        ],
        yourQualifications: [
          "Basic computer literacy is essential.",
          // More qualifications...
        ],
        yourJobResponsibilities: [
          "Respond to customer inquiries via phone, email, or chat in a timely and professional manner.",
          "Handle customer complaints with empathy and resolve issues promptly to ensure satisfaction.",
          "Follow up with clients as needed to ensure their needs have been met and gather feedback on services provided."
          // More responsibilities...
        ],
      },
    },
    {
      question: "Virtual Assistant",
      answer:
        "We are now seeking a Virtual Assistant to join our team! From administrative and marketing tasks to inside sales and customer service - we hire only the most qualified individual for the role.",
      details: {
        whatWeOffer: [
          "Full-time virtual assistant career, offering the flexibility to work remotely.",
          "$30 to $35 per hour",
          "401(k)",
          "Health insurance",
          "We will provide professional training to all staff members",
          "* We provide Work tools such as a laptop and other necessary equipment"
          // More offers...
        ],
        qualitiesWeValue: [
          "Openness to learn and be coached.",
          "Outgoing, friendly, positive, and approachable personality.",
          // More qualities...
        ],
        yourQualifications: [
          "Basic computer literacy is essential.",
          // More qualifications...
        ],
        yourJobResponsibilities: [
          "Ability to build rapport with clients",
          "Document and update customer records based on interactions",
          "Positive and professional demeanor"
          // More responsibilities...
        ],
      },
    },
    {
      question: "Data Entry Specialist",
      answer:
        "We are now seeking a Virtual Assistant to join our team! From administrative and marketing tasks to inside sales and customer service - we hire only the most qualified individual for the role.",
      details: {
        whatWeOffer: [
          "Full-time virtual assistant career, offering the flexibility to work remotely.",
          "$22.75 to $32.25 per hour ",
          "401(k)",
          "Health insurance",
          "We will provide professional training to all staff members",
          "* We provide Work tools such as a laptop and other necessary equipment"
          // More offers...
        ],
        qualitiesWeValue: [
          "Openness to learn and be coached.",
          "Outgoing, friendly, positive, and approachable personality.",
          // More qualities...
        ],
        yourQualifications: [
          "Basic computer literacy is essential.",
          // More qualifications...
        ],
        yourJobResponsibilities: [
          "Accurately entering data into company databases and systems",
          "Maintaining and updating existing data",
          "Organizing and maintaining digital and paper files",
          "Ensuring data security and confidentiality",
          " Performing regular backups to ensure data preservation "
          // More responsibilities...
        ],
      },
    },
    {
      question: "Marketing Manager",
      answer:
        "We're seeking a dynamic Marketing Manager to lead and execute strategic marketing initiatives. The ideal candidate will have experience in developing and implementing marketing strategies, managing campaigns, and driving brand awareness. Strong leadership, communication, and analytical skills are essential to effectively collaborate with cross-functional teams and deliver measurable results.",
      details: {
        whatWeOffer: [
          "Full-time virtual assistant career, offering the flexibility to work remotely.",
          "$75,000 to $85,000 per year",
          "401(k)",
          "Health insurance",
          "We will provide professional training to all staff members",
          "* We provide Work tools such as a laptop and other necessary equipment"
          // More offers...
        ],
        qualitiesWeValue: [
          "Openness to learn and be coached.",
          "Outgoing, friendly, positive, and approachable personality.",
          // More qualities...
        ],
        yourQualifications: [
          "Basic computer literacy is essential.",
          // More qualifications...
        ],
        yourJobResponsibilities: [
          "Own the overall success of assigned campaigns with the aim of delivering above & beyond on behalf of our clients.",
          "Build client materials including but not limited to talent slides, strategy decks and campaign reports.",
          "Manage the day-to-day workload across assigned campaigns, including delegation of tasks to Coordinator(s) where needed and ensuring team alignment.",
          " Performing regular backups to ensure data preservation ",
          // More responsibilities...
        ],
      },
    },

    // Add details for the other job entries as needed
  ];
  

  return (
    <>
      <NavBar />
      <div className="px-4 md:px-28 py-12 md:py-14 bg-navy font-space-grotesk">
        <p className="text-lg md:text-2xl text-white uppercase">
          <span className="text-md">CAREER</span>
        </p>
      </div>
      <section className="py-16 px-4 sm:px-6 lg:px-8 font-space-grotesk">
        <div className="mx-auto max-w-screen-xl text-start">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Team
          </h2>
          <p className="mt-4 text-lg ">
            At{" "}
            <span className="font-bold text-indigo-600">
              Crestview Construction
            </span>
            , we're passionate about building a brighter future together. As a
            growing leader in the <span className="italic">Construction</span>{" "}
            industry, we’re always on the lookout for talented individuals who
            are eager to make an impact. Whether you're a seasoned professional
            or just starting your career, we offer opportunities for growth,
            development, and collaboration.
          </p>
          <p className="mt-4 text-lg">
            We believe in creating a supportive and inclusive environment where
            innovation thrives and each team member can contribute to our shared
            vision. With a strong commitment to excellence, teamwork, and
            continuous improvement, we’re dedicated to fostering a culture of
            respect, creativity, and passion.
          </p>
          <p className="mt-4 text-lg">
            Explore our open positions below and find out how you can become
            part of our dynamic team. Together, we can achieve great things.
          </p>
        </div>
        <h1 className="mt-4 text-2xl uppercase font-extrabold">
          Open Roles
          </h1>
        <div className="sm:px-6 pt-16">
          {accordionData.map((item, index) => (
            <div key={index} className="mt-5 border-b">
              <button
                className="flex justify-between w-full p-4 text-left text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl sm:text-2xl">{item.question}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-full" : "h-0"
                }`}
              >
                <div className="p-4 border-gray-200">
                  <p className="text-gray-600">{item.answer}</p>

                  {item.details && (
                    <>
                      <div className="mt-5">
                        <h3 className="text-lg font-bold">What We Offer:</h3>
                        <ul className="list-disc pl-5">
                          {item.details.whatWeOffer.map((offer, idx) => (
                            <li key={idx} className="text-gray-600">
                              {offer}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5">
                        <h3 className="text-lg font-bold">
                          Qualities We Value:
                        </h3>
                        <ul className="list-disc pl-5">
                          {item.details.qualitiesWeValue.map((quality, idx) => (
                            <li key={idx} className="text-gray-600">
                              {quality}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5">
                        <h3 className="text-lg font-bold">
                          Your Qualifications:
                        </h3>
                        <ul className="list-disc pl-5">
                          {item.details.yourQualifications.map(
                            (qualification, idx) => (
                              <li key={idx} className="text-gray-600">
                                {qualification}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="mt-5">
                        <h3 className="text-lg font-bold">
                          Your Job Responsibilities:
                        </h3>
                        <ul className="list-disc pl-5">
                          {item.details.yourJobResponsibilities.map(
                            (responsibility, idx) => (
                              <li key={idx} className="text-gray-600">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </>
                  )}

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
        <form
          onSubmit={handleSubmit} // Add the onSubmit handler
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-xl sm:max-w-2xl">
            {/* Content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  Apply for a Position
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)} // Close modal on "×"
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none cursor-pointer">
                    ×
                  </span>
                </button>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cv"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload CV
                  </label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    required
                    className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md"
                  />
                </div>
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
                  type="submit" // Now it triggers handleSubmit
                  onSubmit={(e) => {}}
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      <Footer />
    </>
  );
}
