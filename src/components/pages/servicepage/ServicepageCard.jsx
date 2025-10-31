import React from 'react';
import HandPreview from "../../../assets/handpng.png"

const ServicepageCard = () => {
  const services = [
    {
      title: "Rapid MVP App Development",
      description: "Launch your Minimum Viable Product App (MVP) in just 2-8 weeks with our Velocity Sprints™—rapid, agile development delivering clear outcomes, budget control, and flexibility.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "App Project Rescue Service",
      description: "Stuck with an incomplete or failing software project? Our Project Rescue Services specialise in salvaging, recovering, and completing apps and digital projects.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: "from-red-500 to-pink-500"
    },
    {
      title: "AI Opportunity Audit",
      description: "Kick-start your AI journey with our AI Agent discovery process. We audit your workflows, score tasks for AI augmentation or automation value, and hand you a clear implementation roadmap.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "App Idea Validation Package",
      description: "Validate your app idea efficiently with professional wireframes, polished graphics, and a compelling landing page designed to test interest, generate leads, and reduce risk before you build.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quickstart App Planning",
      description: "Quickly kickstart your app project with structured wireframing, focused project planning meetings, and clear documentation. This will give you the pragmatic foundation to move forward confidently.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Clickable Prototype App Planning",
      description: "Our Clickable Prototype App Planning service quickly transforms your idea into a professional, interactive prototype with collaborative project planning, detailed wireframes, and beautifully crafted graphics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-200 font-semibold">Our Premium Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInDown">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Innovative IT
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed animate-fadeInDown animation-delay-200">
              Transform your digital vision into reality with our cutting-edge app development services, 
              designed to accelerate your journey from concept to market leader.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-20">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
          
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Premium Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Please contact us or request a Free Quote to discuss your needs with a friendly member of our expert team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group relative animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated Background Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2"></div>
                  
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md`}></div>
                  
                  {/* Main Content Card */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 group-hover:border-white/50 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full">
                    
                    {/* Icon Container */}
                    <div className={`relative mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                      
                      {/* Pulse Animation */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000`}></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-500">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <button className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        Learn More
                      </span>
                      <svg 
                        className={`w-4 h-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent transform group-hover:translate-x-1 transition-transform duration-300`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-6 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-500 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                  </div>

                  {/* Floating Particles */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 delay-200`}></div>
                  <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 delay-400`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* Contact Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  READY TO START?
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Discover How We Can Help
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                We would love to hear about your project. Please contact us, and share your goals; 
                we'll respond with our thoughts and a rough cost estimate.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href='/contact' className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3">
                  <span>Contact Us</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <a href='/About' className="group border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm flex items-center gap-3">
                  <span>About Us</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
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
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(120deg); }
            66% { transform: translateY(-5px) rotate(240deg); }
          }
          .animate-fadeInDown {
            animation: fadeInDown 1s ease forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
            opacity: 0;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </>
  );
};

export default ServicepageCard;