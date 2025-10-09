import React from 'react';
import HandPreview from "../../../assets/handpng.png"

const ServicepageCard = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown ">Services</h1>
          <p className="text-xl max-w-2xl mx-auto text-[#FFFFFFA1] animate-fadeInDown ">
            Our app development services enable various stages of your app development journey from startups to established brands.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section  className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-s text-center mb-12 text-[#23231E]">Please contact us or request a Free Quote to discuss your needs with a friendly member of our team.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rapid MVP Development */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Rapid MVP App Development</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Launch your Minimum Viable Product App (MVP) in just 2-8 weeks with our Velocity Sprints™—rapid, agile development delivering clear outcomes, budget control, and flexibility.
                </p>
                <button className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* App Project Rescue */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">App Project Rescue Service</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Stuck with an incomplete or failing software project? Our Project Rescue Services specialise in salvaging, recovering, and completing apps and digital projects.
                </p>
                <button className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* AI Opportunity Audit */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">AI Opportunity Audit</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Kick-start your AI journey with our AI Agent discovery process. We audit your workflows, score tasks for AI augmentation or automation value, and hand you a clear implementation roadmap.
                </p>
                <button className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* App Idea Validation */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">App Idea Validation Package</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Validate your app idea efficiently with professional wireframes, polished graphics, and a compelling landing page designed to test interest, generate leads, and reduce risk before you build.
                </p>
                <button className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quickstart App Planning */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Quickstart App Planning</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Quickly kickstart your app project with structured wireframing, focused project planning meetings, and clear documentation. This will give you the pragmatic foundation to move forward confidently.
                </p>
                <button className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Clickable Prototype */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Clickable Prototype App Planning</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our Clickable Prototype App Planning service quickly transforms your idea into a professional, interactive prototype with collaborative project planning, detailed wireframes, and beautifully crafted graphics.
                </p>
                <button className="text-red-600 font-medium hover:text-red-800 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-b from-[#7e0c0b] to-[#b51c1a] rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">App Store Optimisation & Graphic Design</h2>
                <p className="text-lg mb-6">
                  Elevate your app with beautifully designed graphics and persuasive copy. We specialise in crafting attractive, high-conversion app store listings to boost downloads and user engagement.
                </p>
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Discover More
                </button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div>
                  <div className=" rounded flex items-center justify-center text-gray-500">
                    <img src={HandPreview} alt='Designpreview' className='w-auto h-95' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Discover How We Can Help</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We would love to hear about your project. Please contact us, and share your goals; we'll respond with our thoughts and a rough cost estimate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className="bg-white text-red-600 border border-red-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>
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
      </>
  );
};

export default ServicepageCard;