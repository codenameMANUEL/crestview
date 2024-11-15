import { useState } from "react";
import { Link } from "react-router-dom";

export default function GridWithAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "What differentiates our construction company from others?",
      answer:
        "With over 25 years of industry experience, we stand out through our innovative building techniques, strict adherence to timelines, and exceptional project management. Our team of certified professionals consistently delivers projects that exceed industry standards while maintaining cost-effectiveness.",
    },
    {
      question: "What type of construction projects do we specialize in?",
      answer:
        "We excel in both commercial and residential construction, including high-rise buildings, industrial facilities, luxury homes, and retail spaces. Our portfolio includes successful projects in healthcare facilities, educational institutions, and sustainable green buildings.",
    },
    {
      question: "How do we ensure safety and quality in our projects?",
      answer:
        "Safety and quality are our top priorities. We maintain rigorous safety protocols that exceed OSHA requirements, conduct daily site inspections, and employ a dedicated quality control team. Our workers undergo regular safety training, and we utilize advanced construction technologies to ensure precise execution.",
    },
    {
      question: "What is our approach to sustainable construction?",
      answer:
        "We're committed to environmental responsibility through the use of eco-friendly materials, energy-efficient designs, and LEED-certified construction practices. Our team specializes in incorporating renewable energy solutions and sustainable building techniques that reduce environmental impact while maximizing long-term value.",
    },
    {
      question: "How do we handle project timelines and budgets?",
      answer:
        "We employ sophisticated project management software and methodologies to ensure precise scheduling and cost control. Our transparent communication process keeps clients informed at every stage, and our proven track record shows 95% of projects completed on time and within budget.",
    },
  ];

  return (
    <div className="container mx-auto px-10 py-12 font-space-grotesk">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="lg:pt-36">
          <p className="pt-4 text-black uppercase font-bold text-sm mb-4">
            Dealing with your worries?
          </p>
          <h2 className="lg:text-5xl mb-4 font-bold">
            If Your Question Is Not Here{" "}
            <span className="text-green-600">Contact Us</span>
          </h2>
          <p className="mb-4">
            Our team is here to help. Whether you need guidance, support, or
            answers to specific questions, we're just a message away. Reach out
            anytime for the assistance you need.
          </p>
          <Link to="/contact">
            <button className="bg-yellow-400 hover:text-white py-3 px-6 rounded-none text-sm font-semibold">
              CONTACT US
            </button>
          </Link>
        </div>

        {/* Accordion Div */}
        <div className="bg-white">
          {accordionData.map((item, index) => (
            <div key={index} className="mt-5 border">
              <button
                className="flex justify-between w-full p-10 text-left text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-1xl">{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-full" : "h-0"
                }`}
              >
                <div className="p-4 border-gray-200">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
