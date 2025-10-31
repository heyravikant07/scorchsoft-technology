import React, { useState } from 'react';

const faqData = [
  {
    question: "What should be listed on a business card?",
    answer: "Nullam pulvinar, enim ornare tristique vehicula, massa est eleifend velit, vitae laoreet leo diam vitae quam. Curabitur dignissim nisi sed libero pellentesque hendrerit. Morbi condimentum in elit in lobortis.",
    category: "General"
  },
  {
    question: "What is the standard size of business cards?",
    answer: "The standard size of business cards is 3.5 x 2 inches. This size fits easily into wallets and cardholders.",
    category: "Technical"
  },
  {
    question: "How do I design my own business cards?",
    answer: "You can design your own business cards using graphic design software like Adobe Illustrator, Canva, or online business card makers.",
    category: "Design"
  },
  {
    question: "What information should be included on a business card?",
    answer: "Include your name, job title, company name, phone number, email address, and website URL on your business card.",
    category: "General"
  },
  {
    question: "Can I use QR codes on my business cards?",
    answer: "Yes, QR codes can be used to link to your website, portfolio, or contact information, making it easy for others to connect with you.",
    category: "Technical"
  },
  {
    question: "What paper quality is best for business cards?",
    answer: "High-quality cardstock with a matte or glossy finish is recommended for a professional look and durability.",
    category: "Materials"
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = ['All', ...new Set(faqData.map(item => item.category))];
  const filteredFaqs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-200 font-semibold">HELP & SUPPORT</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInDown">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed animate-fadeInDown animation-delay-200">
            Common questions and answers about app development, web development, technology, and the way we work.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 sticky top-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                  Categories
                </h2>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        activeCategory === category
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                      <div className="text-sm text-gray-600">Questions Answered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">24/7</div>
                      <div className="text-sm text-gray-600">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                {filteredFaqs.map((item, index) => (
                  <div
                    key={index}
                    className={`border-b border-gray-200 last:border-b-0 transition-all duration-500 ${
                      activeIndex === index ? 'bg-gradient-to-r from-blue-50 to-purple-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <button
                      className="w-full p-8 text-left flex justify-between items-center group"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          activeIndex === index 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                            : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                        }`}>
                          <span className="text-lg font-bold">Q</span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              item.category === 'Technical' ? 'bg-blue-100 text-blue-600' :
                              item.category === 'Design' ? 'bg-purple-100 text-purple-600' :
                              item.category === 'Materials' ? 'bg-green-100 text-green-600' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {item.category}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold transition-colors duration-300 ${
                            activeIndex === index 
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                              : 'text-gray-800 group-hover:text-blue-600'
                          }`}>
                            {item.question}
                          </h3>
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                        activeIndex === index ? 'rotate-180 bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-8 pb-8">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold">A</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 text-lg leading-relaxed">{item.answer}</p>
                            {activeIndex === index && (
                              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                                <span>Was this helpful?</span>
                                <button className="text-green-600 hover:text-green-700 font-semibold">Yes</button>
                                <button className="text-red-600 hover:text-red-700 font-semibold">No</button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-200 font-semibold">NEED MORE HELP?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Still have questions?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our expert team is here to help you. Reach out to us anytime and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="/contact"
                  className="group bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 justify-center"
                >
                  <span>Contact Support</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <a
                  href="/documentation"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 justify-center"
                >
                  <span>View Documentation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
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
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </div>
  );
}