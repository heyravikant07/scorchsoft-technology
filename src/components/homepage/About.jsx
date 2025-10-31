import React from "react";
import Aboutwork from "../../assets/Aboutwork.jpg"

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={Aboutwork} 
                alt="About our team" 
                className="w-full h-auto rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl rotate-12 opacity-80 group-hover:rotate-45 transition-transform duration-1000"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl -rotate-12 opacity-80 group-hover:-rotate-45 transition-transform duration-1000 delay-200"></div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</div>
                <div className="text-sm font-semibold text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-200 shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                ABOUT US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Let Us Be Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Preferred IT Partner
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              We combine cutting-edge technology, deep industry expertise, and a customer-first approach to deliver measurable outcomes that drive your business forward.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {[
                "Managed IT & Helpdesk Solutions",
                "Cloud Migration & Optimization",
                "Security & Compliance Services"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-6">
              <a 
                href="/About" 
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span>Get Started Today</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"></div>
              </a>
              
              {/* Trust Indicator */}
              <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Trusted by 500+ companies worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </section>
  );
}