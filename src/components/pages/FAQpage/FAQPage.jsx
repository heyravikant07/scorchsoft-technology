import React, { useState } from 'react';

const faqData = [
  {
    question: "What should be listed on a business card?",
    answer:
      "Nullam pulvinar, enim ornare tristique vehicula, massa est eleifend velit, vitae laoreet leo diam vitae quam. Curabitur dignissim nisi sed libero pellentesque hendrerit. Morbi condimentum in elit in lobortis.",
  },
  {
    question: "What is the standard size of business cards?",
    answer:
      "The standard size of business cards is 3.5 x 2 inches. This size fits easily into wallets and cardholders.",
  },
  {
    question: "How do I design my own business cards?",
    answer:
      "You can design your own business cards using graphic design software like Adobe Illustrator, Canva, or online business card makers.",
  },
  {
    question: "What information should be included on a business card?",
    answer:
      "Include your name, job title, company name, phone number, email address, and website URL on your business card.",
  },
  {
    question: "Can I use QR codes on my business cards?",
    answer:
      "Yes, QR codes can be used to link to your website, portfolio, or contact information, making it easy for others to connect with you.",
  },
  {
    question: "What paper quality is best for business cards?",
    answer:
      "High-quality cardstock with a matte or glossy finish is recommended for a professional look and durability.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto text-[#FFFFFFA1] animate-fadeInDown">
            Common questions and answers about app development, web development, technology, and the way we work.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-8">General FAQ</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Find answers to the most frequently asked questions about our services and policies. If you have more questions, feel free to contact us.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="p-6 cursor-pointer hover:bg-red-50 transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleFAQ(index);
                }
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <svg
                  className={`w-6 h-6 text-red-600 transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div
                id={`faq-answer-${index}`}
                className={`mt-4 text-gray-700 overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-red-100 py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-red-900">Still have questions?</h2>
          <p className="text-red-800 mb-6">
            Our team is here to help you. Reach out to us anytime and we will get back to you as soon as possible.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-800 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInDown {
            animation: fadeInDown 1s ease forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </div>
  );
}
