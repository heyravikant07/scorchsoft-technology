import React from 'react'
import { FileChartPie, EarthLock, Server, MonitorCog } from 'lucide-react';

const services = [
  { 
    title: "IT Management", 
    desc: "Managed services & monitoring", 
    icon: <FileChartPie className='w-8 h-8' />,
    gradient: "from-blue-500 to-cyan-400",
    delay: "0"
  },
  { 
    title: "Cyber Security", 
    desc: "Vulnerability & risk management", 
    icon: <EarthLock className='w-8 h-8' />,
    gradient: "from-purple-500 to-pink-500",
    delay: "100"
  },
  { 
    title: "Cloud Computing", 
    desc: "AWS / Azure / GCP solutions", 
    icon: <Server className='w-8 h-8' />,
    gradient: "from-orange-500 to-red-500",
    delay: "200"
  },
  { 
    title: "Software Dev", 
    desc: "Custom apps & integrations", 
    icon: <MonitorCog className='w-8 h-8' />,
    gradient: "from-green-500 to-emerald-400",
    delay: "300"
  },
];

function ServicesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Solutions & Focus Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We deliver a comprehensive range of cutting-edge services to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Animated Background Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2"></div>
              
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md`}></div>
              
              {/* Main Content Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 group-hover:border-white/50 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center">
                
                {/* Icon Container */}
                <div className={`relative mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-1000`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                  {service.desc}
                </p>

                {/* Read More Link */}
                <a 
                  href="#" 
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    Learn more
                  </span>
                  <svg 
                    className={`w-4 h-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent transform group-hover:translate-x-1 transition-transform duration-300`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* Hover Indicator */}
                <div className="absolute bottom-6 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-500 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
              </div>

              {/* Floating Particles */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 delay-200`}></div>
              <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-500 delay-400`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-gray-700 font-medium">
                Ready to transform your business?
              </p>
            </div>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(120deg); }
          66% { transform: translateY(-4px) rotate(240deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default ServicesSection;