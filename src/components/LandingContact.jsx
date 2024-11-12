import { useState } from 'react';

export default function GridWithAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            question: "What is our mission?",
            answer: "Our mission is to deliver high-quality construction services while ensuring client satisfaction and safety."
        },
        {
            question: "How do we ensure quality?",
            answer: "We have strict quality control processes in place to maintain high standards in all our projects."
        },
        {
            question: "What services do we offer?",
            answer: "We offer a wide range of construction services, including residential, commercial, and industrial projects."
        },
        // Add more questions and answers as needed
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Text Div */}
                <div className="lg:pt-20">
                    <p className="pt-4 text-black uppercase font-bold text-sm mb-4">
                        Dealing with your worries?
                    </p>
                    <h2 className='lg:text-5xl mb-4 font-bold'>
                        If Your Question Is Not Here <span className='text-green-600'>Contact Us</span>
                    </h2>
                    <p className='mb-4'>
                        Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
                    </p>
                    <button className="bg-yellow-400 py-3 px-6 rounded-none text-sm font-semibold">CONTACT US</button>
                </div>

                {/* Accordion Div */}
                <div className="bg-white">
                    {accordionData.map((item, index) => (
                        <div key={index} className='mt-5 border'>
                            <button
                                className="flex justify-between w-full p-10 text-left text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{item.question}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-full' : 'h-0'}`}>
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
